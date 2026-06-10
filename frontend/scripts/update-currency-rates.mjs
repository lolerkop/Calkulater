import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const outputUrl = new URL('../src/data/currencyRates.generated.ts', import.meta.url);
const sourceUrl = 'https://www.cbr.ru/scripts/XML_daily.asp';
const requiredCodes = ['EUR', 'MDL', 'RON', 'UAH', 'PLN', 'GBP', 'CHF', 'TRY'];

function readTag(block, name) {
  return block.match(new RegExp(`<${name}>([^<]+)</${name}>`))?.[1]?.trim();
}

async function updateRates() {
  const response = await fetch(sourceUrl, {
    headers: { 'user-agent': 'Calcuway/1.0 (+https://calcuway.com)' },
  });
  if (!response.ok) throw new Error(`CBR returned ${response.status}`);

  const xml = new TextDecoder('windows-1251').decode(await response.arrayBuffer());
  const date = xml.match(/Date="([^"]+)"/)?.[1];
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

  const isoDate = date ? date.split('.').reverse().join('-') : new Date().toISOString().slice(0, 10);
  const lines = Object.entries(rates)
    .map(([code, value]) => `  ${code}: ${Number(value.toFixed(8))},`)
    .join('\n');
  const content = `// Generated from the official Bank of Russia daily reference rates.\n` +
    `export const generatedRatesToUSD = {\n${lines}\n} as const;\n\n` +
    `export const generatedRatesDate = '${isoDate}';\n` +
    `export const generatedRatesSource = '${sourceUrl}';\n`;

  await writeFile(fileURLToPath(outputUrl), content, 'utf8');
  console.log(`Updated currency rates for ${isoDate}.`);
}

updateRates().catch((error) => {
  console.warn(`Currency update skipped: ${error.message}. Using the last committed rates.`);
});
