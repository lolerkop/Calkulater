// Обновление официальных справочных курсов из нескольких источников.
//
// Раньше источник был один — Банк России, и через рубль пересчитывалось всё,
// включая пару USD/EUR. Для международного сайта это неверно по существу
// (российский регулятор не является авторитетом по доллару и евро) и опасно
// эксплуатационно: недоступность единственного фида дольше четырёх суток
// останавливала выпуск всего сайта.
//
// Теперь каждая валюта берётся у того, кто её выпускает:
//   ЕЦБ  — EUR, GBP, CHF, PLN, RON, TRY  (база EUR, лицензия CC0)
//   НБУ  — UAH                            (база UAH)
//   НБМ  — MDL                            (база MDL)
// Все три публикуют доллар, поэтому каждая валюта привязывается к USD одним
// делением, без цепочки пересчётов через третью валюту.
//
// Если основной источник конкретной валюты недоступен, она добирается из
// open.er-api.com, и это помечается в метаданных. Общий провал всех попыток
// оставляет прошлые закоммиченные курсы и статус `failed`.

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const outputUrl = new URL('../src/data/currencyRates.generated.ts', import.meta.url);
const statusOutputUrl = new URL('../src/data/currencyRatesStatus.generated.ts', import.meta.url);

const USER_AGENT = 'Calcuway/1.0 (+https://calcuway.com)';

// Порядок полей в сгенерированном файле фиксирован, чтобы диффы оставались
// читаемыми, а повторный запуск с теми же данными не менял файл.
export const CURRENCY_ORDER = ['USD', 'EUR', 'GBP', 'CHF', 'PLN', 'RON', 'TRY', 'UAH', 'MDL'];

export const PROVIDERS = {
  ecb: {
    label: 'European Central Bank',
    url: 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml',
    page: 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html',
    currencies: ['EUR', 'GBP', 'CHF', 'PLN', 'RON', 'TRY'],
  },
  nbu: {
    label: 'National Bank of Ukraine',
    url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
    page: 'https://bank.gov.ua/ua/markets/exchangerates',
    currencies: ['UAH'],
  },
  bnm: {
    label: 'National Bank of Moldova',
    url: 'https://www.bnm.md/en/official_exchange_rates?get_xml=1',
    page: 'https://www.bnm.md/en/official_exchange_rates',
    currencies: ['MDL'],
  },
};

export const FALLBACK_PROVIDER = {
  id: 'erapi',
  label: 'Exchange Rate API',
  url: 'https://open.er-api.com/v6/latest/USD',
  page: 'https://www.exchangerate-api.com',
};

// ── Разбор ответов ─────────────────────────────────────────────────────────
// Каждый разборщик возвращает курсы В ОДНОЙ ФОРМЕ: сколько единиц валюты
// дают за 1 USD. Это тот же формат, что хранится в generatedRatesToUSD,
// поэтому дальше по конвейеру пересчётов больше нет.

function requireFinitePositive(value, what) {
  if (!Number.isFinite(value) || value <= 0) throw new Error(`Invalid ${what}: ${value}`);
  return value;
}

function isoFromDotted(raw, what) {
  const match = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(String(raw ?? '').trim());
  if (!match) throw new Error(`Invalid ${what} date: ${raw || '(empty)'}`);
  const [, day, month, year] = match;
  const parsed = new Date(0);
  parsed.setUTCHours(0, 0, 0, 0);
  parsed.setUTCFullYear(Number(year), Number(month) - 1, Number(day));
  if (
    parsed.getUTCFullYear() !== Number(year) ||
    parsed.getUTCMonth() !== Number(month) - 1 ||
    parsed.getUTCDate() !== Number(day)
  ) {
    throw new Error(`Invalid ${what} date: ${raw}`);
  }
  return `${year}-${month}-${day}`;
}

/** ЕЦБ публикует курсы к евро. Доллар в наборе есть, поэтому переводим в базу USD. */
export function parseEcbXml(xml) {
  const effectiveDate = xml.match(/<Cube\s+time=['"]([\d-]{10})['"]/)?.[1];
  if (!effectiveDate) throw new Error('ECB response time is missing');

  const perEur = {};
  for (const [, code, rate] of xml.matchAll(/currency=['"]([A-Z]{3})['"]\s+rate=['"]([\d.]+)['"]/g)) {
    perEur[code] = Number(rate);
  }
  const usdPerEur = requireFinitePositive(perEur.USD, 'ECB USD rate');

  // X за 1 EUR, делённое на USD за 1 EUR, даёт X за 1 USD.
  const ratesPerUsd = { EUR: 1 / usdPerEur };
  for (const code of PROVIDERS.ecb.currencies) {
    if (code === 'EUR') continue;
    const value = perEur[code];
    if (!Number.isFinite(value) || value <= 0) continue;
    ratesPerUsd[code] = value / usdPerEur;
  }
  return { effectiveDate, ratesPerUsd };
}

/** НБУ публикует гривну за единицу валюты; курс доллара — это сразу UAH за 1 USD. */
export function parseNbuJson(payload) {
  if (!Array.isArray(payload)) throw new Error('NBU response is not an array');
  const usd = payload.find((row) => row?.cc === 'USD');
  if (!usd) throw new Error('NBU response has no USD row');
  const uahPerUsd = requireFinitePositive(Number(usd.rate), 'NBU USD rate');
  return {
    effectiveDate: isoFromDotted(usd.exchangedate, 'NBU'),
    ratesPerUsd: { UAH: uahPerUsd },
  };
}

/** НБМ публикует лей за Nominal единиц валюты. Формат ValCurs, как у прежнего источника. */
export function parseBnmXml(xml) {
  const effectiveDate = isoFromDotted(xml.match(/<ValCurs\b[^>]*\bDate="([^"]*)"/)?.[1], 'BNM');
  const blocks = [...xml.matchAll(/<Valute\b[\s\S]*?<\/Valute>/g)].map((match) => match[0]);
  const usdBlock = blocks.find((block) => /<CharCode>USD<\/CharCode>/.test(block));
  if (!usdBlock) throw new Error('BNM response has no USD entry');

  const nominal = Number(usdBlock.match(/<Nominal>([\d.]+)<\/Nominal>/)?.[1] ?? '1');
  const value = Number(usdBlock.match(/<Value>([\d.,]+)<\/Value>/)?.[1]?.replace(',', '.'));
  requireFinitePositive(nominal, 'BNM USD nominal');
  requireFinitePositive(value, 'BNM USD value');

  return { effectiveDate, ratesPerUsd: { MDL: value / nominal } };
}

/** Резервный источник отдаёт курсы уже в базе USD. */
export function parseFallbackJson(payload) {
  if (payload?.result !== 'success') throw new Error('Fallback response is not successful');
  const rates = payload?.rates;
  if (!rates || typeof rates !== 'object') throw new Error('Fallback response has no rates');
  const stamp = Date.parse(payload.time_last_update_utc ?? '');
  if (!Number.isFinite(stamp)) throw new Error('Fallback response has no update time');

  const ratesPerUsd = {};
  for (const code of CURRENCY_ORDER) {
    if (code === 'USD') continue;
    const value = Number(rates[code]);
    if (Number.isFinite(value) && value > 0) ratesPerUsd[code] = value;
  }
  return { effectiveDate: new Date(stamp).toISOString().slice(0, 10), ratesPerUsd };
}

// ── Сборка полного набора ──────────────────────────────────────────────────

/**
 * Складывает курсы из основных источников, добирает недостающее из резервного
 * и фиксирует, откуда взялась каждая валюта.
 *
 * Резерв применяется ТОЛЬКО к валютам, которых не дал их основной источник, —
 * так частичный отказ не подменяет данные тех валют, что пришли штатно.
 */
export function assembleRates({ primary = {}, fallback = null } = {}) {
  const rates = { USD: 1 };
  const provenance = {};
  const usedProviders = new Set();

  for (const [id, provider] of Object.entries(PROVIDERS)) {
    const result = primary[id];
    if (!result?.ok) continue;
    for (const code of provider.currencies) {
      const value = result.ratesPerUsd?.[code];
      if (!Number.isFinite(value) || value <= 0) continue;
      rates[code] = value;
      provenance[code] = { provider: id, date: result.effectiveDate, fallback: false };
      usedProviders.add(id);
    }
  }

  const missing = CURRENCY_ORDER.filter((code) => code !== 'USD' && !(code in rates));
  if (missing.length > 0 && fallback?.ok) {
    for (const code of missing) {
      const value = fallback.ratesPerUsd?.[code];
      if (!Number.isFinite(value) || value <= 0) continue;
      rates[code] = value;
      provenance[code] = { provider: FALLBACK_PROVIDER.id, date: fallback.effectiveDate, fallback: true };
      usedProviders.add(FALLBACK_PROVIDER.id);
    }
  }

  const stillMissing = CURRENCY_ORDER.filter((code) => code !== 'USD' && !(code in rates));
  if (stillMissing.length > 0) throw new Error(`Missing rates: ${stillMissing.join(', ')}`);

  const sources = {};
  for (const id of usedProviders) {
    const meta = id === FALLBACK_PROVIDER.id ? FALLBACK_PROVIDER : PROVIDERS[id];
    const result = id === FALLBACK_PROVIDER.id ? fallback : primary[id];
    sources[id] = {
      label: meta.label,
      url: meta.page,
      date: result.effectiveDate,
      fallback: id === FALLBACK_PROVIDER.id,
    };
  }

  // Общая дата курса — самая старая из использованных: она честно отражает
  // возраст набора в целом и остаётся совместимой с прежним generatedRatesDate.
  const oldest = Object.values(provenance)
    .map((entry) => entry.date)
    .sort()[0];

  return { rates, provenance, sources, effectiveDate: oldest, usedFallback: [...usedProviders].includes(FALLBACK_PROVIDER.id) };
}

// ── Загрузка ───────────────────────────────────────────────────────────────

async function fetchText(url, fetchImpl) {
  const response = await fetchImpl(url, { headers: { 'user-agent': USER_AGENT } });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return response.text();
}

async function fetchJson(url, fetchImpl) {
  const response = await fetchImpl(url, { headers: { 'user-agent': USER_AGENT, accept: 'application/json' } });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return response.json();
}

/** НБМ требует дату в адресе и не публикует курс в выходные, поэтому отходим назад. */
export async function fetchBnm(fetchImpl, now = new Date()) {
  const errors = [];
  for (let back = 0; back < 5; back += 1) {
    const day = new Date(now.getTime() - back * 86_400_000);
    const dotted = [
      String(day.getUTCDate()).padStart(2, '0'),
      String(day.getUTCMonth() + 1).padStart(2, '0'),
      day.getUTCFullYear(),
    ].join('.');
    try {
      const xml = await fetchText(`${PROVIDERS.bnm.url}&date=${dotted}`, fetchImpl);
      return parseBnmXml(xml);
    } catch (error) {
      errors.push(`${dotted}: ${error instanceof Error ? error.message : 'unknown'}`);
    }
  }
  throw new Error(`BNM unavailable (${errors[0]})`);
}

async function collectPrimary(fetchImpl, now, logger) {
  const attempts = {
    ecb: () => fetchText(PROVIDERS.ecb.url, fetchImpl).then(parseEcbXml),
    nbu: () => fetchJson(PROVIDERS.nbu.url, fetchImpl).then(parseNbuJson),
    bnm: () => fetchBnm(fetchImpl, now),
  };

  const primary = {};
  const failures = [];
  for (const [id, run] of Object.entries(attempts)) {
    try {
      primary[id] = { ok: true, ...(await run()) };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'unknown error';
      primary[id] = { ok: false, error: message };
      failures.push(`${id}: ${message}`);
      logger.warn(`Primary source ${id} unavailable: ${message}`);
    }
  }
  return { primary, failures };
}

// ── Запись ─────────────────────────────────────────────────────────────────

function readStatusValue(content, name) {
  return content.match(new RegExp(`export const ${name} = ['"]([^'"]*)['"];`))?.[1] ?? '';
}

async function readLastSuccessfulStatus({
  readFileImpl = readFile,
  statusOutputPath = fileURLToPath(statusOutputUrl),
} = {}) {
  try {
    const content = await readFileImpl(statusOutputPath, 'utf8');
    return {
      checkedAt: readStatusValue(content, 'generatedRatesLastSuccessfulCheckAt'),
      effectiveDate: readStatusValue(content, 'generatedRatesLastSuccessfulEffectiveDate'),
    };
  } catch {
    return { checkedAt: '', effectiveDate: '' };
  }
}

async function writeStatus(status, message = '', {
  effectiveDate = '',
  usedFallback = false,
  degradedProviders = [],
  readFileImpl = readFile,
  writeFileImpl = writeFile,
  statusOutputPath = fileURLToPath(statusOutputUrl),
  now = new Date(),
} = {}) {
  const attemptedAt = now.toISOString();
  const lastSuccessful = status === 'success'
    ? { checkedAt: attemptedAt, effectiveDate }
    : await readLastSuccessfulStatus({ readFileImpl, statusOutputPath });
  const content = `export const generatedRatesUpdateStatus: 'success' | 'failed' = '${status}';\n` +
    `export const generatedRatesUpdateAttemptedAt = '${attemptedAt}';\n` +
    `export const generatedRatesUpdateMessage = ${JSON.stringify(message)};\n` +
    `export const generatedRatesLastSuccessfulCheckAt = '${lastSuccessful.checkedAt}';\n` +
    `export const generatedRatesLastSuccessfulEffectiveDate = '${lastSuccessful.effectiveDate}';\n` +
    `export const generatedRatesUsedFallback = ${usedFallback ? 'true' : 'false'};\n` +
    `export const generatedRatesDegradedProviders = ${JSON.stringify(degradedProviders)} as const;\n`;
  await writeFileImpl(statusOutputPath, content, 'utf8');
}

export function renderRatesModule({ rates, provenance, sources, effectiveDate }) {
  const rateLines = CURRENCY_ORDER
    .filter((code) => code in rates)
    .map((code) => `  ${code}: ${Number(rates[code].toFixed(8))},`)
    .join('\n');

  const provenanceLines = CURRENCY_ORDER
    .filter((code) => code in provenance)
    .map((code) => {
      const entry = provenance[code];
      return `  ${code}: { provider: '${entry.provider}', date: '${entry.date}', fallback: ${entry.fallback} },`;
    })
    .join('\n');

  const sourceLines = Object.entries(sources)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([id, meta]) =>
      `  ${id}: { label: ${JSON.stringify(meta.label)}, url: '${meta.url}', date: '${meta.date}', fallback: ${meta.fallback} },`)
    .join('\n');

  return `// Generated from official central-bank reference rates.\n` +
    `// ECB — EUR, GBP, CHF, PLN, RON, TRY; NBU — UAH; NBM — MDL.\n` +
    `// A currency falls back to Exchange Rate API only when its own source is unavailable.\n` +
    `export const generatedRatesToUSD = {\n${rateLines}\n} as const;\n\n` +
    `export const generatedRateProvenance = {\n${provenanceLines}\n} as const;\n\n` +
    `export const generatedRateSources = {\n${sourceLines}\n} as const;\n\n` +
    `export const generatedRatesDate = '${effectiveDate}';\n`;
}

async function updateRates({
  fetchImpl = globalThis.fetch,
  writeFileImpl = writeFile,
  ratesOutputPath = fileURLToPath(outputUrl),
  logger = console,
  now = new Date(),
  ...statusOptions
} = {}) {
  const { primary, failures } = await collectPrimary(fetchImpl, now, logger);

  let fallback = null;
  const needsFallback = Object.entries(PROVIDERS).some(([id, provider]) => {
    const result = primary[id];
    if (!result?.ok) return true;
    return provider.currencies.some((code) => !Number.isFinite(result.ratesPerUsd?.[code]));
  });
  if (needsFallback) {
    try {
      fallback = { ok: true, ...parseFallbackJson(await fetchJson(FALLBACK_PROVIDER.url, fetchImpl)) };
      logger.warn('Falling back to Exchange Rate API for the currencies their own source did not provide.');
    } catch (error) {
      fallback = { ok: false, error: error instanceof Error ? error.message : 'unknown error' };
      logger.warn(`Fallback source unavailable: ${fallback.error}`);
    }
  }

  const assembled = assembleRates({ primary, fallback });
  await writeFileImpl(ratesOutputPath, renderRatesModule(assembled), 'utf8');
  await writeStatus('success', failures.join('; '), {
    effectiveDate: assembled.effectiveDate,
    usedFallback: assembled.usedFallback,
    degradedProviders: Object.entries(primary).filter(([, r]) => !r.ok).map(([id]) => id),
    writeFileImpl,
    now,
    ...statusOptions,
  });

  logger.log(
    `Updated currency rates for ${assembled.effectiveDate}` +
    `${assembled.usedFallback ? ' (fallback used)' : ''}.`,
  );
  return assembled.effectiveDate;
}

export async function runCurrencyRateUpdate(options = {}) {
  try {
    const isoDate = await updateRates(options);
    return { status: 'success', isoDate };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown update error';
    await writeStatus('failed', message, options);
    (options.logger ?? console).warn(`Currency update skipped: ${message}. Using the last committed rates.`);
    return { status: 'failed', message };
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await runCurrencyRateUpdate();
}
