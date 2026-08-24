import { describe, expect, it } from 'vitest';
import {
  assembleRates,
  parseBnmXml,
  parseEcbXml,
  parseFallbackJson,
  parseNbuJson,
  renderRatesModule,
  runCurrencyRateUpdate,
} from '../scripts/update-currency-rates.mjs';
import { assessProvidersFreshness } from '../src/lib/currencyFreshness';

const ratesOutputPath = '/virtual/currencyRates.generated.ts';
const statusOutputPath = '/virtual/currencyRatesStatus.generated.ts';

// ── Фикстуры ───────────────────────────────────────────────────────────────
// Числа взяты приближёнными к реальным, чтобы ошибки нормализации были видны
// не только по знаку, но и по порядку величины.

const ECB_RATES: Record<string, string> = {
  USD: '1.1664', GBP: '0.85550', CHF: '0.93620', PLN: '4.30800',
  RON: '5.25000', TRY: '56.08000', JPY: '171.20',
};

function buildEcbXml({ time = '2026-08-24', omit = [] as string[] } = {}) {
  const rows = Object.entries(ECB_RATES)
    .filter(([code]) => !omit.includes(code))
    .map(([code, rate]) => `<Cube currency='${code}' rate='${rate}'/>`)
    .join('');
  const timeAttr = time === null ? '' : ` time='${time}'`;
  return `<gesmes:Envelope><Cube><Cube${timeAttr}>${rows}</Cube></Cube></gesmes:Envelope>`;
}

function buildNbuJson({ date = '25.08.2026', omitUsd = false } = {}) {
  const rows = [
    { cc: 'USD', rate: 44.7064, exchangedate: date },
    { cc: 'EUR', rate: 52.1594, exchangedate: date },
    { cc: 'MDL', rate: 2.603, exchangedate: date },
  ].filter((row) => !(omitUsd && row.cc === 'USD'));
  return rows;
}

function buildBnmXml({ date = '24.08.2026', nominal = 1, value = '17.1338', omitUsd = false } = {}) {
  const usd = omitUsd ? '' : `<Valute ID="44"><CharCode>USD</CharCode><Nominal>${nominal}</Nominal><Name>US Dollar</Name><Value>${value}</Value></Valute>`;
  const eur = `<Valute ID="47"><CharCode>EUR</CharCode><Nominal>1</Nominal><Name>Euro</Name><Value>20.0508</Value></Valute>`;
  return `<?xml version="1.0" encoding="UTF-8"?><ValCurs Date="${date}" name="Official exchange rate">${eur}${usd}</ValCurs>`;
}

function buildFallbackJson({ result = 'success', omit = [] as string[] } = {}) {
  const rates: Record<string, number> = {
    EUR: 0.85618, GBP: 0.732945, CHF: 0.800848, PLN: 3.691727,
    RON: 4.493284, TRY: 48.086789, UAH: 44.687746, MDL: 17.136559,
  };
  for (const code of omit) delete rates[code];
  return { result, time_last_update_utc: 'Mon, 24 Aug 2026 00:02:31 +0000', rates };
}

function virtualFiles(initial: Record<string, string>) {
  const files = new Map(Object.entries(initial));
  const writtenPaths: string[] = [];
  return {
    files,
    writtenPaths,
    readFileImpl: async (path: string) => {
      const content = files.get(path);
      if (content === undefined) throw new Error(`ENOENT: ${path}`);
      return content;
    },
    writeFileImpl: async (path: string, content: string) => {
      writtenPaths.push(path);
      files.set(path, content);
    },
  };
}

const silentLogger = { log: () => {}, warn: () => {} };

/** Раздаёт ответы по адресу, чтобы каждый источник можно было ломать отдельно. */
function routedFetch({
  ecb = () => ({ ok: true, status: 200, text: async () => buildEcbXml() }),
  nbu = () => ({ ok: true, status: 200, json: async () => buildNbuJson() }),
  bnm = () => ({ ok: true, status: 200, text: async () => buildBnmXml() }),
  fallback = () => ({ ok: true, status: 200, json: async () => buildFallbackJson() }),
} = {}) {
  const calls: string[] = [];
  const impl = async (url: string) => {
    calls.push(url);
    if (url.includes('ecb.europa.eu')) return ecb();
    if (url.includes('bank.gov.ua')) return nbu();
    if (url.includes('bnm.md')) return bnm();
    if (url.includes('open.er-api.com')) return fallback();
    throw new Error(`Unexpected URL: ${url}`);
  };
  return { impl, calls };
}

const down = () => { throw new Error('network down'); };

// ── 1. Разбор ЕЦБ ──────────────────────────────────────────────────────────

describe('ЕЦБ: разбор и приведение к базе USD', () => {
  it('переводит курсы из базы EUR в базу USD', () => {
    const { effectiveDate, ratesPerUsd } = parseEcbXml(buildEcbXml());
    expect(effectiveDate).toBe('2026-08-24');
    // 1 EUR = 1.1664 USD, значит 1 USD = 1/1.1664 EUR.
    expect(ratesPerUsd.EUR).toBeCloseTo(1 / 1.1664, 8);
    // GBP за 1 USD = (GBP за EUR) / (USD за EUR).
    expect(ratesPerUsd.GBP).toBeCloseTo(0.8555 / 1.1664, 8);
    expect(ratesPerUsd.TRY).toBeCloseTo(56.08 / 1.1664, 8);
  });

  it('берёт только валюты своей зоны ответственности', () => {
    const { ratesPerUsd } = parseEcbXml(buildEcbXml());
    expect(Object.keys(ratesPerUsd).sort()).toEqual(['CHF', 'EUR', 'GBP', 'PLN', 'RON', 'TRY']);
    expect(ratesPerUsd).not.toHaveProperty('JPY');
  });

  it('без даты публикации ответ отвергается', () => {
    expect(() => parseEcbXml(buildEcbXml({ time: null as unknown as string }))).toThrow(/time is missing/);
  });

  it('без доллара привести к базе USD невозможно', () => {
    expect(() => parseEcbXml(buildEcbXml({ omit: ['USD'] }))).toThrow(/USD rate/);
  });
});

// ── 2. Разбор НБУ ──────────────────────────────────────────────────────────

describe('НБУ: разбор гривны', () => {
  it('курс доллара — это сразу гривны за 1 USD', () => {
    const { effectiveDate, ratesPerUsd } = parseNbuJson(buildNbuJson());
    expect(ratesPerUsd).toEqual({ UAH: 44.7064 });
    // НБУ публикует курс на следующий банковский день — дата законно в будущем.
    expect(effectiveDate).toBe('2026-08-25');
  });

  it('без строки USD ответ отвергается', () => {
    expect(() => parseNbuJson(buildNbuJson({ omitUsd: true }))).toThrow(/no USD row/);
  });

  it('не массив — не ответ', () => {
    expect(() => parseNbuJson({ rates: [] } as unknown as unknown[])).toThrow(/not an array/);
  });
});

// ── 3. Разбор НБМ ──────────────────────────────────────────────────────────

describe('НБМ: разбор лея', () => {
  it('делит значение на номинал', () => {
    const { effectiveDate, ratesPerUsd } = parseBnmXml(buildBnmXml({ nominal: 10, value: '171.338' }));
    expect(effectiveDate).toBe('2026-08-24');
    expect(ratesPerUsd.MDL).toBeCloseTo(17.1338, 6);
  });

  it('номинал 1 читается так же', () => {
    const { ratesPerUsd } = parseBnmXml(buildBnmXml());
    expect(ratesPerUsd.MDL).toBeCloseTo(17.1338, 6);
  });

  it('без доллара ответ отвергается', () => {
    expect(() => parseBnmXml(buildBnmXml({ omitUsd: true }))).toThrow(/no USD entry/);
  });
});

// ── 4. Резервный источник ──────────────────────────────────────────────────

describe('резервный источник', () => {
  it('подставляется только для валют, которых не дал их основной источник', async () => {
    const files = virtualFiles({});
    const { impl, calls } = routedFetch({ nbu: down });
    await runCurrencyRateUpdate({
      fetchImpl: impl, ratesOutputPath, statusOutputPath, logger: silentLogger, ...files,
    });
    const module = files.files.get(ratesOutputPath)!;

    // Гривна взята из резерва…
    expect(module).toMatch(/UAH: \{ provider: 'erapi', date: '2026-08-24', fallback: true \}/);
    // …а всё остальное осталось за своими центробанками.
    expect(module).toMatch(/EUR: \{ provider: 'ecb'/);
    expect(module).toMatch(/MDL: \{ provider: 'bnm'/);
    expect(calls.some((url) => url.includes('open.er-api.com'))).toBe(true);
  });

  it('при живых основных источниках резерв не запрашивается', async () => {
    const files = virtualFiles({});
    const { impl, calls } = routedFetch();
    await runCurrencyRateUpdate({
      fetchImpl: impl, ratesOutputPath, statusOutputPath, logger: silentLogger, ...files,
    });
    expect(calls.some((url) => url.includes('open.er-api.com'))).toBe(false);
    expect(files.files.get(statusOutputPath)).toContain('generatedRatesUsedFallback = false');
  });

  it('отказ основного источника отмечается в статусе', async () => {
    const files = virtualFiles({});
    const { impl } = routedFetch({ bnm: down });
    await runCurrencyRateUpdate({
      fetchImpl: impl, ratesOutputPath, statusOutputPath, logger: silentLogger, ...files,
    });
    const status = files.files.get(statusOutputPath)!;
    expect(status).toContain('generatedRatesUsedFallback = true');
    expect(status).toContain('"bnm"');
    expect(status).toContain("generatedRatesUpdateStatus: 'success' | 'failed' = 'success'");
  });

  it('НЕГАТИВНЫЙ КОНТРОЛЬ: сломанный резерв при упавшем основном роняет обновление', async () => {
    const files = virtualFiles({});
    const { impl } = routedFetch({ nbu: down, fallback: down });
    const result = await runCurrencyRateUpdate({
      fetchImpl: impl, ratesOutputPath, statusOutputPath, logger: silentLogger, ...files,
    });
    expect(result.status).toBe('failed');
    expect(result.message).toMatch(/Missing rates: UAH/);
    // Курсы не переписаны — остаются прошлые закоммиченные.
    expect(files.writtenPaths).not.toContain(ratesOutputPath);
  });
});

// ── 5. Устаревший источник ─────────────────────────────────────────────────

describe('свежесть по каждому источнику', () => {
  const now = new Date('2026-08-24T12:00:00.000Z');

  it('свежие данные проходят, дата на следующий день допустима', () => {
    const assessment = assessProvidersFreshness({
      ecb: { date: '2026-08-24', fallback: false },
      nbu: { date: '2026-08-25', fallback: false },
      bnm: { date: '2026-08-24', fallback: false },
    }, now);
    expect(assessment.fresh).toBe(true);
    expect(assessment.stale).toEqual([]);
  });

  it('НЕГАТИВНЫЙ КОНТРОЛЬ: устаревшая дата одного источника валит оценку', () => {
    const assessment = assessProvidersFreshness({
      ecb: { date: '2026-08-24', fallback: false },
      bnm: { date: '2026-08-01', fallback: false },
    }, now);
    expect(assessment.fresh).toBe(false);
    expect(assessment.stale.map((entry) => entry.id)).toEqual(['bnm']);
    expect(assessment.stale[0].reason).toBe('stale');
  });

  it('дата слишком далеко в будущем тоже отвергается', () => {
    const assessment = assessProvidersFreshness({ nbu: { date: '2026-09-30' } }, now);
    expect(assessment.fresh).toBe(false);
    expect(assessment.stale[0].reason).toBe('too-far-ahead');
  });

  it('неразборчивая дата отвергается', () => {
    const assessment = assessProvidersFreshness({ ecb: { date: '24.08.2026' } }, now);
    expect(assessment.stale[0].reason).toBe('invalid-date');
  });

  it('резервный источник виден отдельно', () => {
    const assessment = assessProvidersFreshness({
      ecb: { date: '2026-08-24', fallback: false },
      erapi: { date: '2026-08-24', fallback: true },
    }, now);
    expect(assessment.fresh).toBe(true);
    expect(assessment.fallbackProviders).toEqual(['erapi']);
  });
});

// ── 6. Недостающая валюта ──────────────────────────────────────────────────

describe('полнота набора', () => {
  it('НЕГАТИВНЫЙ КОНТРОЛЬ: валюта, пропавшая у ЕЦБ и не добранная резервом, роняет сборку набора', () => {
    const primary = {
      ecb: { ok: true, ...parseEcbXml(buildEcbXml({ omit: ['CHF'] })) },
      nbu: { ok: true, ...parseNbuJson(buildNbuJson()) },
      bnm: { ok: true, ...parseBnmXml(buildBnmXml()) },
    };
    expect(() => assembleRates({ primary, fallback: null })).toThrow(/Missing rates: CHF/);
  });

  it('та же пропажа закрывается резервом и помечается', () => {
    const primary = {
      ecb: { ok: true, ...parseEcbXml(buildEcbXml({ omit: ['CHF'] })) },
      nbu: { ok: true, ...parseNbuJson(buildNbuJson()) },
      bnm: { ok: true, ...parseBnmXml(buildBnmXml()) },
    };
    const fallback = { ok: true, ...parseFallbackJson(buildFallbackJson()) };
    const assembled = assembleRates({ primary, fallback });
    expect(assembled.provenance.CHF).toEqual({ provider: 'erapi', date: '2026-08-24', fallback: true });
    expect(assembled.usedFallback).toBe(true);
  });

  it('резерв не подменяет валюты, которые пришли штатно', () => {
    const primary = {
      ecb: { ok: true, ...parseEcbXml(buildEcbXml({ omit: ['CHF'] })) },
      nbu: { ok: true, ...parseNbuJson(buildNbuJson()) },
      bnm: { ok: true, ...parseBnmXml(buildBnmXml()) },
    };
    const fallback = { ok: true, ...parseFallbackJson(buildFallbackJson()) };
    const assembled = assembleRates({ primary, fallback });
    // У резерва EUR = 0.85618, у ЕЦБ — 1/1.1664. Взять должны курс ЕЦБ.
    expect(assembled.rates.EUR).toBeCloseTo(1 / 1.1664, 8);
    expect(assembled.provenance.EUR.fallback).toBe(false);
  });

  it('неуспешный ответ резерва не считается данными', () => {
    expect(() => parseFallbackJson(buildFallbackJson({ result: 'error' }))).toThrow(/not successful/);
  });
});

// ── 7. Происхождение каждой валюты ─────────────────────────────────────────

describe('происхождение курсов', () => {
  it('каждая валюта помнит свой источник и дату', () => {
    const primary = {
      ecb: { ok: true, ...parseEcbXml(buildEcbXml()) },
      nbu: { ok: true, ...parseNbuJson(buildNbuJson()) },
      bnm: { ok: true, ...parseBnmXml(buildBnmXml()) },
    };
    const { provenance, sources, effectiveDate, usedFallback } = assembleRates({ primary });

    for (const code of ['EUR', 'GBP', 'CHF', 'PLN', 'RON', 'TRY']) {
      expect(provenance[code], code).toEqual({ provider: 'ecb', date: '2026-08-24', fallback: false });
    }
    expect(provenance.UAH).toEqual({ provider: 'nbu', date: '2026-08-25', fallback: false });
    expect(provenance.MDL).toEqual({ provider: 'bnm', date: '2026-08-24', fallback: false });
    expect(usedFallback).toBe(false);

    // Общая дата набора — самая старая из использованных.
    expect(effectiveDate).toBe('2026-08-24');
    expect(Object.keys(sources).sort()).toEqual(['bnm', 'ecb', 'nbu']);
    expect(sources.nbu.label).toBe('National Bank of Ukraine');
  });

  it('доллар остаётся базой и собственного источника не имеет', () => {
    const primary = { ecb: { ok: true, ...parseEcbXml(buildEcbXml()) } };
    const fallback = { ok: true, ...parseFallbackJson(buildFallbackJson()) };
    const { rates, provenance } = assembleRates({ primary, fallback });
    expect(rates.USD).toBe(1);
    expect(provenance).not.toHaveProperty('USD');
  });

  it('сгенерированный модуль сохраняет прежний формат таблицы курсов', () => {
    const primary = {
      ecb: { ok: true, ...parseEcbXml(buildEcbXml()) },
      nbu: { ok: true, ...parseNbuJson(buildNbuJson()) },
      bnm: { ok: true, ...parseBnmXml(buildBnmXml()) },
    };
    const module = renderRatesModule(assembleRates({ primary }));
    expect(module).toContain('export const generatedRatesToUSD = {');
    expect(module).toContain('  USD: 1,');
    expect(module).toContain('export const generatedRateProvenance = {');
    expect(module).toContain('export const generatedRateSources = {');
    expect(module).toContain("export const generatedRatesDate = '2026-08-24';");
    expect(module).not.toMatch(/Bank of Russia|cbr\.ru/);
  });
});

// ── Сохранение прошлого состояния при полном провале ────────────────────────

describe('поведение при полном отказе', () => {
  it('прошлая успешная проверка переживает сетевой сбой', async () => {
    const previousStatus =
      `export const generatedRatesUpdateStatus: 'success' | 'failed' = 'success';\n` +
      `export const generatedRatesUpdateAttemptedAt = '2026-08-20T05:00:00.000Z';\n` +
      `export const generatedRatesUpdateMessage = "";\n` +
      `export const generatedRatesLastSuccessfulCheckAt = '2026-08-20T05:00:00.000Z';\n` +
      `export const generatedRatesLastSuccessfulEffectiveDate = '2026-08-20';\n`;
    const files = virtualFiles({ [statusOutputPath]: previousStatus });
    const { impl } = routedFetch({ ecb: down, nbu: down, bnm: down, fallback: down });

    const result = await runCurrencyRateUpdate({
      fetchImpl: impl, ratesOutputPath, statusOutputPath, logger: silentLogger, ...files,
    });

    expect(result.status).toBe('failed');
    const status = files.files.get(statusOutputPath)!;
    expect(status).toContain("generatedRatesUpdateStatus: 'success' | 'failed' = 'failed'");
    expect(status).toContain("generatedRatesLastSuccessfulCheckAt = '2026-08-20T05:00:00.000Z'");
    expect(status).toContain("generatedRatesLastSuccessfulEffectiveDate = '2026-08-20'");
    expect(files.writtenPaths).not.toContain(ratesOutputPath);
  });
});
