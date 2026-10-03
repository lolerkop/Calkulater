import { writeFileSync } from 'node:fs';
import { getCalculatorById, locales } from '../src/lib/i18n';
const ids = ['currency-converter', 'usd-to-eur', 'eur-to-mdl', 'usd-to-mdl', 'currency-exchange-fee'];
const records = ids.flatMap((id) => locales.map((locale) => {
  const page = getCalculatorById(id, locale)!;
  return { id, locale, url: page.fullPath, fields: page.fields, content: page.seoContent, disclaimer: page.disclaimer, reviewStatus: 'COLLECTED_FOR_INDIVIDUAL_REVIEW' };
}));
writeFileSync('reports/originality-currency-editorial-input.json', JSON.stringify({ collectedAt: new Date().toISOString(), records }, null, 2) + '\n');
console.log(JSON.stringify({ engines: ids.length, localeRecords: records.length }));
