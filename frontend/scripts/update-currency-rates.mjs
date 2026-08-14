import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const outputUrl = new URL('../src/data/currencyRates.generated.ts', import.meta.url);
const statusOutputUrl = new URL('../src/data/currencyRatesStatus.generated.ts', import.meta.url);
const sourceUrl = 'https://www.cbr.ru/scripts/XML_daily.asp';
const requiredCodes = ['EUR', 'MDL', 'RON', 'UAH', 'PLN', 'GBP', 'CHF', 'TRY'];

function readStatusValue(content, name) {
  return content.match(new RegExp(`export const ${name} = ['\"]([^'\"]*)['\"];`))?.[1] ?? '';
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
    `export const generatedRatesLastSuccessfulEffectiveDate = '${lastSuccessful.effectiveDate}';\n`;
  await writeFileImpl(statusOutputPath, content, 'utf8');
}

function readTag(block, name) {
  return block.match(new RegExp(`<${name}>([^<]+)</${name}>`))?.[1]?.trim();
}

function parseOfficialDate(xml) {
  const rootTag = xml.match(/<ValCurs\b[^>]*>/)?.[0];
  const rawDate = rootTag?.match(/\bDate="([^"]*)"/)?.[1]?.trim();
  if (rawDate === undefined) throw new Error('CBR response Date is missing');

  const match = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(rawDate);
  if (!match) throw new Error(`Invalid CBR response Date: ${rawDate || '(empty)'}`);

  const [, dayText, monthText, yearText] = match;
  const day = Number(dayText);
  const month = Number(monthText);
  const year = Number(yearText);
  const parsed = new Date(0);
  parsed.setUTCHours(0, 0, 0, 0);
  parsed.setUTCFullYear(year, month - 1, day);
  if (
    parsed.getUTCFullYear() !== year ||
    parsed.getUTCMonth() !== month - 1 ||
    parsed.getUTCDate() !== day
  ) {
    throw new Error(`Invalid CBR response Date: ${rawDate}`);
  }

  return `${yearText}-${monthText}-${dayText}`;
}

export function parseCurrencyRatesXml(xml) {
  const isoDate = parseOfficialDate(xml);
  const blocks = [...xml.matchAll(/<Valute\b[\s\S]*?<\/Valute>/g)].map((match) => match[0]);
  const usdBlock = blocks.find((block) => readTag(block, 'CharCode') === 'USD');
  if (!usdBlock) throw new Error('USD rate is missing from CBR response');

  const rubPerUsd = Number(readTag(usdBlock, 'VunitRate')?.replace(',', '.'));
  if (!Number.isFinite(rubPerUsd) || rubPerUsd <= 0) throw new Error('Invalid USD rate');

  const rates = { USD: 1 };
  for (const block of blocks) {
    const code = readTag(block, 'CharCode');
    if (!code || !requiredCodes.includes(code)) continue;
    const rubPerUnit = Number(readTag(block, 'VunitRate')?.replace(',', '.'));
    if (Number.isFinite(rubPerUnit) && rubPerUnit > 0) rates[code] = rubPerUsd / rubPerUnit;
  }

  const missing = requiredCodes.filter((code) => !rates[code]);
  if (missing.length) throw new Error(`Missing rates: ${missing.join(', ')}`);

  return { isoDate, rates };
}

async function updateRates({
  fetchImpl = globalThis.fetch,
  writeFileImpl = writeFile,
  ratesOutputPath = fileURLToPath(outputUrl),
  logger = console,
  ...statusOptions
} = {}) {
  const response = await fetchImpl(sourceUrl, {
    headers: { 'user-agent': 'Calcuway/1.0 (+https://calcuway.com)' },
  });
  if (!response.ok) throw new Error(`CBR returned ${response.status}`);

  const xml = new TextDecoder('windows-1251').decode(await response.arrayBuffer());
  const { isoDate, rates } = parseCurrencyRatesXml(xml);
  const lines = Object.entries(rates)
    .map(([code, value]) => `  ${code}: ${Number(value.toFixed(8))},`)
    .join('\n');
  const content = `// Generated from the official Bank of Russia daily reference rates.\n` +
    `export const generatedRatesToUSD = {\n${lines}\n} as const;\n\n` +
    `export const generatedRatesDate = '${isoDate}';\n` +
    `export const generatedRatesSource = '${sourceUrl}';\n`;

  await writeFileImpl(ratesOutputPath, content, 'utf8');
  await writeStatus('success', '', {
    effectiveDate: isoDate,
    writeFileImpl,
    ...statusOptions,
  });
  logger.log(`Updated currency rates for ${isoDate}.`);
  return isoDate;
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
