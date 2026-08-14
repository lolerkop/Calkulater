import { describe, expect, it } from 'vitest';
import {
  parseCurrencyRatesXml,
  runCurrencyRateUpdate,
} from '../scripts/update-currency-rates.mjs';

const officialRows = [
  { code: 'USD', nominal: 1, value: '84,5449', vunitRate: '84,5449' },
  { code: 'EUR', nominal: 1, value: '97,5141', vunitRate: '97,5141' },
  { code: 'MDL', nominal: 10, value: '48,8098', vunitRate: '4,88098' },
  { code: 'RON', nominal: 1, value: '18,6267', vunitRate: '18,6267' },
  { code: 'UAH', nominal: 10, value: '18,9113', vunitRate: '1,89113' },
  { code: 'PLN', nominal: 1, value: '22,6662', vunitRate: '22,6662' },
  { code: 'GBP', nominal: 1, value: '114,1948', vunitRate: '114,1948' },
  { code: 'CHF', nominal: 1, value: '103,9146', vunitRate: '103,9146' },
  { code: 'TRY', nominal: 10, value: '17,7136', vunitRate: '1,77136' },
];

function buildXml({
  date = '15.08.2026',
  omittedCodes = [],
}: {
  date?: string | null;
  omittedCodes?: string[];
} = {}) {
  const dateAttribute = date === null ? '' : ` Date="${date}"`;
  const rows = officialRows
    .filter(({ code }) => !omittedCodes.includes(code))
    .map(({ code, nominal, value, vunitRate }) => `
      <Valute>
        <CharCode>${code}</CharCode>
        <Nominal>${nominal}</Nominal>
        <Value>${value}</Value>
        <VunitRate>${vunitRate}</VunitRate>
      </Valute>`)
    .join('');

  return `<ValCurs${dateAttribute}>${rows}\n</ValCurs>`;
}

function successfulResponse(xml: string) {
  const bytes = new TextEncoder().encode(xml);
  return {
    ok: true,
    status: 200,
    arrayBuffer: async () => bytes.buffer,
  };
}

describe('currency updater XML validation', () => {
  it('accepts a valid official Date and normalizes rates against USD', () => {
    const result = parseCurrencyRatesXml(buildXml());

    expect(result.isoDate).toBe('2026-08-15');
    expect(result.rates.USD).toBe(1);
    expect(result.rates.EUR).toBeCloseTo(84.5449 / 97.5141, 12);
    expect(result.rates.MDL).toBeCloseTo(84.5449 / 4.88098, 12);
  });

  it('rejects a response without Date', () => {
    expect(() => parseCurrencyRatesXml(buildXml({ date: null }))).toThrow(
      'CBR response Date is missing',
    );
  });

  it.each(['2026-08-15', '31.02.2026'])('rejects invalid Date: %s', (date) => {
    expect(() => parseCurrencyRatesXml(buildXml({ date }))).toThrow(
      `Invalid CBR response Date: ${date}`,
    );
  });

  it('rejects a valid-date response missing a required currency', () => {
    expect(() => parseCurrencyRatesXml(buildXml({ omittedCodes: ['TRY'] }))).toThrow(
      'Missing rates: TRY',
    );
  });

  it('keeps the previous rates file and writes a clear failed status', async () => {
    const ratesOutputPath = '/virtual/currencyRates.generated.ts';
    const statusOutputPath = '/virtual/currencyRatesStatus.generated.ts';
    const files = new Map([[ratesOutputPath, 'last-known-good']]);
    const writtenPaths: string[] = [];

    const result = await runCurrencyRateUpdate({
      fetchImpl: async () => successfulResponse(buildXml({ date: null })),
      writeFileImpl: async (path: string, content: string) => {
        writtenPaths.push(path);
        files.set(path, content);
      },
      ratesOutputPath,
      statusOutputPath,
      now: new Date('2026-08-15T12:00:00Z'),
      logger: { log: () => {}, warn: () => {} },
    });

    expect(result).toEqual({ status: 'failed', message: 'CBR response Date is missing' });
    expect(files.get(ratesOutputPath)).toBe('last-known-good');
    expect(writtenPaths).toEqual([statusOutputPath]);
    expect(files.get(statusOutputPath)).toContain("generatedRatesUpdateStatus: 'success' | 'failed' = 'failed'");
    expect(files.get(statusOutputPath)).toContain('CBR response Date is missing');
  });
});
