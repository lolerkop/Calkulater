import { describe, it, expect } from 'vitest';
import { calcCurrency, convertCurrency } from '../src/lib/calculators/currency';
import { rateProvenance, ratesToUSD, sourcesForCurrencies } from '../src/data/currencies';

describe('currency: convertCurrency', () => {
  it('USD → USD = 1:1', () => {
    expect(convertCurrency(100, 'USD', 'USD')).toBe(100);
  });

  it('USD → EUR использует сохранённый коэффициент', () => {
    expect(convertCurrency(100, 'USD', 'EUR')).toBeCloseTo(100 * ratesToUSD.EUR, 5);
  });

  it('EUR → USD обратная конвертация', () => {
    const euros = 100 * ratesToUSD.EUR;
    expect(convertCurrency(euros, 'EUR', 'USD')).toBeCloseTo(100, 5);
  });

  it('кросс-курс EUR → MDL', () => {
    const expected = (100 / ratesToUSD.EUR) * ratesToUSD.MDL;
    expect(convertCurrency(100, 'EUR', 'MDL')).toBeCloseTo(expected, 4);
  });
});

describe('currency: calcCurrency', () => {
  it('возвращает строку результата с символом валюты', () => {
    const r = calcCurrency({ amount: 100, from: 'USD', to: 'EUR' });
    expect(r.primary.value).toContain('€');
  });

  it('содержит курс конвертации в secondary', () => {
    const r = calcCurrency({ amount: 100, from: 'USD', to: 'EUR' });
    const rateRow = r.secondary.find((s) => s.label === 'Курс');
    expect(rateRow?.value).toContain('1 USD =');
    expect(rateRow?.value).toContain('EUR');
  });

  it('показывает справочный тип и статус без устаревшего утверждения о сборке', () => {
    const r = calcCurrency({ amount: 100, from: 'USD', to: 'EUR' });

    expect(r.secondary.find((s) => s.label === 'Тип курса')?.value).toBe('сохранённый справочный курс');
    expect(r.secondary.some((s) => s.label === 'Дата курса')).toBe(false);
    expect(r.secondary.find((s) => s.label === 'Статус обновления')?.value).toBeTruthy();
    expect(JSON.stringify(r)).not.toContain('при последней сборке');
    expect(r.note).toContain('резервный источник отмечен отдельно');
    expect(r.note).not.toContain('Банка России');
  });

  it('называет источник той валюты, которая участвует в расчёте', () => {
    // Пара USD/EUR опирается только на ЕЦБ: доллар — база, своего источника
    // у него нет. Пара EUR/MDL добавляет фактический источник MDL.
    const pair = calcCurrency({ amount: 100, from: 'USD', to: 'EUR' });
    const pairSources = pair.secondary.filter((s) => s.label === 'Источник');
    expect(pairSources).toHaveLength(1);
    const eurSource = sourcesForCurrencies(['EUR'])[0];
    expect(pairSources[0].value).toBe(`${eurSource.name} — ${eurSource.date}`);
    expect(pairSources[0].href).toBe(eurSource.url);

    const cross = calcCurrency({ amount: 100, from: 'EUR', to: 'MDL' });
    const crossSources = cross.secondary.filter((s) => s.label === 'Источник').map((s) => s.value);
    const mdlSource = sourcesForCurrencies(['MDL'])[0];
    expect(mdlSource.id).toBe(rateProvenance.MDL.provider);
    expect(crossSources).toEqual([`${eurSource.name} — ${eurSource.date}`, `${mdlSource.name} — ${mdlSource.date}`]);
    expect(cross.secondary.some((s) => s.label === 'Резервный источник'))
      .toBe(mdlSource.fallback);
  });

  it('нигде не называет прежний источник', () => {
    for (const pair of [['USD', 'EUR'], ['USD', 'UAH'], ['EUR', 'MDL']] as const) {
      const r = calcCurrency({ amount: 100, from: pair[0], to: pair[1] });
      const text = JSON.stringify(r);
      expect(text, pair.join('->')).not.toMatch(/Банк России|Банка России|Bank of Russia|cbr\.ru/);
    }
  });

  it('происхождение записано для каждой валюты, кроме базовой', () => {
    for (const code of ['EUR', 'GBP', 'CHF', 'PLN', 'RON', 'TRY'] as const) {
      expect(rateProvenance[code].provider, code).toBe('ecb');
    }
    expect(rateProvenance.UAH.provider).toBe('nbu');
    const mdlProvider: string = rateProvenance.MDL.provider;
    expect(['bnm', 'erapi']).toContain(mdlProvider);
    expect(rateProvenance.MDL.fallback).toBe(mdlProvider === 'erapi');
    expect(rateProvenance).not.toHaveProperty('USD');
  });
});
