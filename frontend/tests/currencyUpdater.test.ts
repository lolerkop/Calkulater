import { describe, expect, it } from 'vitest';
import {
  parseCurrencyRatesXml,
  runCurrencyRateUpdate,
} from '../scripts/update-currency-rates.mjs';

const ratesOutputPath = '/virtual/currencyRates.generated.ts';
const statusOutputPath = '/virtual/currencyRatesStatus.generated.ts';

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

function successStatus(checkedAt: string, effectiveDate = '2026-08-15') {
  return `export const generatedRatesUpdateStatus: 'success' | 'failed' = 'success';\n` +
    `export const generatedRatesUpdateAttemptedAt = '${checkedAt}';\n` +
    `export const generatedRatesUpdateMessage = "";\n` +
    `export const generatedRatesLastSuccessfulCheckAt = '${checkedAt}';\n` +
    `export const generatedRatesLastSuccessfulEffectiveDate = '${effectiveDate}';\n`;
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
});

describe('currency updater status persistence', () => {
  it('updates rates and records a successful source check for a new official set', async () => {
    const now = new Date('2026-08-15T12:00:00.000Z');
    const fs = virtualFiles({
      [ratesOutputPath]: 'last-known-good',
      [statusOutputPath]: successStatus('2026-08-14T12:00:00.000Z', '2026-08-14'),
    });

    const result = await runCurrencyRateUpdate({
      fetchImpl: async () => successfulResponse(buildXml()),
      readFileImpl: fs.readFileImpl,
      writeFileImpl: fs.writeFileImpl,
      ratesOutputPath,
      statusOutputPath,
      now,
      logger: silentLogger,
    });

    expect(result).toEqual({ status: 'success', isoDate: '2026-08-15' });
    expect(fs.files.get(ratesOutputPath)).toContain("generatedRatesDate = '2026-08-15'");
    expect(fs.files.get(statusOutputPath)).toContain("generatedRatesUpdateStatus: 'success' | 'failed' = 'success'");
    expect(fs.files.get(statusOutputPath)).toContain(
      "generatedRatesLastSuccessfulCheckAt = '2026-08-15T12:00:00.000Z'",
    );
    expect(fs.files.get(statusOutputPath)).toContain(
      "generatedRatesLastSuccessfulEffectiveDate = '2026-08-15'",
    );
    expect(fs.writtenPaths).toEqual([ratesOutputPath, statusOutputPath]);
  });

  it('keeps identical rates content but advances the successful-check timestamp', async () => {
    const fs = virtualFiles({
      [ratesOutputPath]: 'initial',
      [statusOutputPath]: successStatus('2026-08-14T12:00:00.000Z'),
    });
    const commonOptions = {
      fetchImpl: async () => successfulResponse(buildXml()),
      readFileImpl: fs.readFileImpl,
      writeFileImpl: fs.writeFileImpl,
      ratesOutputPath,
      statusOutputPath,
      logger: silentLogger,
    };

    await runCurrencyRateUpdate({
      ...commonOptions,
      now: new Date('2026-08-15T12:00:00.000Z'),
    });
    const firstRates = fs.files.get(ratesOutputPath);
    const firstStatus = fs.files.get(statusOutputPath);

    await runCurrencyRateUpdate({
      ...commonOptions,
      now: new Date('2026-08-16T12:00:00.000Z'),
    });

    expect(fs.files.get(ratesOutputPath)).toBe(firstRates);
    expect(fs.files.get(statusOutputPath)).not.toBe(firstStatus);
    expect(fs.files.get(statusOutputPath)).toContain(
      "generatedRatesLastSuccessfulCheckAt = '2026-08-16T12:00:00.000Z'",
    );
  });

  it('preserves the last successful check after a network failure', async () => {
    const previousCheck = '2026-08-14T12:00:00.000Z';
    const fs = virtualFiles({
      [ratesOutputPath]: 'last-known-good',
      [statusOutputPath]: successStatus(previousCheck),
    });

    const result = await runCurrencyRateUpdate({
      fetchImpl: async () => { throw new Error('connect timeout'); },
      readFileImpl: fs.readFileImpl,
      writeFileImpl: fs.writeFileImpl,
      ratesOutputPath,
      statusOutputPath,
      now: new Date('2026-08-15T12:00:00.000Z'),
      logger: silentLogger,
    });

    expect(result).toEqual({ status: 'failed', message: 'connect timeout' });
    expect(fs.files.get(ratesOutputPath)).toBe('last-known-good');
    expect(fs.files.get(statusOutputPath)).toContain("generatedRatesUpdateStatus: 'success' | 'failed' = 'failed'");
    expect(fs.files.get(statusOutputPath)).toContain(
      `generatedRatesLastSuccessfulCheckAt = '${previousCheck}'`,
    );
    expect(fs.files.get(statusOutputPath)).toContain(
      "generatedRatesLastSuccessfulEffectiveDate = '2026-08-15'",
    );
  });

  it.each([
    {
      label: 'missing Date',
      xml: buildXml({ date: null }),
      message: 'CBR response Date is missing',
    },
    {
      label: 'invalid Date',
      xml: buildXml({ date: '31.02.2026' }),
      message: 'Invalid CBR response Date: 31.02.2026',
    },
    {
      label: 'missing required currency',
      xml: buildXml({ omittedCodes: ['TRY'] }),
      message: 'Missing rates: TRY',
    },
  ])('preserves the last successful check after $label', async ({ xml, message }) => {
    const previousCheck = '2026-08-14T12:00:00.000Z';
    const fs = virtualFiles({
      [ratesOutputPath]: 'last-known-good',
      [statusOutputPath]: successStatus(previousCheck),
    });

    const result = await runCurrencyRateUpdate({
      fetchImpl: async () => successfulResponse(xml),
      readFileImpl: fs.readFileImpl,
      writeFileImpl: fs.writeFileImpl,
      ratesOutputPath,
      statusOutputPath,
      now: new Date('2026-08-15T12:00:00.000Z'),
      logger: silentLogger,
    });

    expect(result).toEqual({ status: 'failed', message });
    expect(fs.files.get(ratesOutputPath)).toBe('last-known-good');
    expect(fs.writtenPaths).toEqual([statusOutputPath]);
    expect(fs.files.get(statusOutputPath)).toContain(
      `generatedRatesLastSuccessfulCheckAt = '${previousCheck}'`,
    );
    expect(fs.files.get(statusOutputPath)).toContain(
      "generatedRatesLastSuccessfulEffectiveDate = '2026-08-15'",
    );
  });
});
