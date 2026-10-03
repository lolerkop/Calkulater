import { writeFileSync } from 'node:fs';
import { getCalculatorById, locales } from '../src/lib/i18n';
import { v2Definitions } from '../src/calculators/manifest.generated';

const ids = ['angle', 'area', 'cooking-volume', 'data-rate', 'density', 'digital', 'energy', 'flow', 'force', 'frequency', 'illuminance', 'length', 'mass', 'power', 'pressure', 'speed', 'temperature', 'time', 'torque', 'volume'].map((id) => `convert-${id}`);
const records = ids.flatMap((id) => locales.map((locale) => {
  const page = getCalculatorById(id, locale)!;
  const definition = v2Definitions.find((item) => item.id === id)!;
  return { id, locale, url: page.fullPath, fields: page.fields, content: page.seoContent,
    exampleContract: definition.publishedExample, referenceCases: definition.referenceCases,
    reviewStatus: 'COLLECTED_FOR_INDIVIDUAL_REVIEW' };
}));
writeFileSync('reports/originality-converter-editorial-input.json', JSON.stringify({ collectedAt: new Date().toISOString(), records }, null, 2) + '\n');
console.log(JSON.stringify({ engines: ids.length, localeRecords: records.length }));
