import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { calculators } from '../src/data/calculators';
import { hasFullLocaleParity, ruOnlyCalculatorReasons } from '../src/data/localizationParity';
import { getCalculatorById } from '../src/lib/i18n';

const reportDirectory = fileURLToPath(new URL('../reports/', import.meta.url));
const reportPath = fileURLToPath(new URL('../reports/localization-parity.csv', import.meta.url));
const columns = [
  'calculator_id',
  'ru_url',
  'en_url',
  'uk_url',
  'parity_status',
  'reason',
  'hreflang_allowed',
  'switcher_behavior',
];

function csv(value: string): string {
  return /[",\r\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;
}

const rows = calculators.map((calculator) => {
  const ru = getCalculatorById(calculator.id, 'ru');
  const en = getCalculatorById(calculator.id, 'en');
  const uk = getCalculatorById(calculator.id, 'uk');
  const fullParity = hasFullLocaleParity(calculator.id);
  const reason = fullParity
    ? 'Equivalent localized calculator exists in RU, EN and UK.'
    : ruOnlyCalculatorReasons[calculator.id as keyof typeof ruOnlyCalculatorReasons];

  return [
    calculator.id,
    ru?.fullPath ?? '',
    en?.fullPath ?? '',
    uk?.fullPath ?? '',
    fullParity ? 'full-parity' : 'ru-only',
    reason ?? 'Needs review.',
    fullParity ? 'ru|en|uk|x-default' : 'ru',
    fullParity
      ? 'Each language links to the equivalent calculator page.'
      : 'RU remains active; EN and UA are disabled with a locale-specific explanation.',
  ];
});

mkdirSync(reportDirectory, { recursive: true });
writeFileSync(reportPath, `${[columns, ...rows].map((row) => row.map(csv).join(',')).join('\n')}\n`);
