import type { Field } from './types';
import type { Locale } from './clientI18n';

// Only these reviewed forms give `value` its unit through another field.
// An ID prefix or an arbitrary field named `from` is not enough evidence.
export const selectedUnitConverterIds = [
  'convert-angle', 'convert-area', 'convert-cooking-volume', 'convert-data-rate',
  'convert-density', 'convert-digital', 'convert-energy', 'convert-flow',
  'convert-force', 'convert-frequency', 'convert-illuminance', 'convert-length',
  'convert-mass', 'convert-power', 'convert-pressure', 'convert-speed',
  'convert-temperature', 'convert-time', 'convert-torque', 'convert-volume',
  'convert-fuel-economy', 'convert-radiation',
] as const;

const reviewedIds = new Set<string>(selectedUnitConverterIds);
// These legacy monetary amounts use the source-currency selector. The three
// pair pages lock that selector; their input unit is therefore USD or EUR.
// This describes the static fields list only and changes no client behavior.
const sourceCurrencyById = new Map<string, string>([
  ['currency-converter', 'selected'], ['usd-to-eur', 'USD'],
  ['eur-to-mdl', 'EUR'], ['usd-to-mdl', 'USD'],
]);
const selectedSourceCurrencyCopy = {
  ru: 'в выбранной исходной валюте',
  en: 'in the selected source currency',
  uk: 'у вибраній початковій валюті',
  de: 'in der gewählten Ausgangswährung',
  es: 'en la divisa de origen seleccionada',
};
const copy = {
  ru: { selected: 'в выбранной исходной единице', input: 'Единица ввода' },
  en: { selected: 'in the selected source unit', input: 'Input unit' },
  uk: { selected: 'у вибраній початковій одиниці', input: 'Одиниця введення' },
  de: { selected: 'in der gewählten Ausgangseinheit', input: 'Eingabeeinheit' },
  es: { selected: 'en la unidad de origen seleccionada', input: 'Unidad de entrada' },
};

function unitCopy(locale: Locale) {
  return copy[locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en'];
}

function selectedUnitInput(calculatorId: string, field: Field): boolean {
  return reviewedIds.has(calculatorId) && field.name === 'value' && field.type === 'number' && !field.unit;
}

/** Static description; it deliberately makes no claim about the current selection. */
export function selectedConverterUnitLabel(calculatorId: string, field: Field, locale: Locale): string | undefined {
  if (field.name === 'amount' && field.type === 'number' && !field.unit) {
    const sourceCurrency = sourceCurrencyById.get(calculatorId);
    if (sourceCurrency === 'selected') return selectedSourceCurrencyCopy[
      locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en'
    ];
    if (sourceCurrency) return sourceCurrency;
  }
  return selectedUnitInput(calculatorId, field) ? unitCopy(locale).selected : undefined;
}

/** Keep the existing contextual field and attach only an actual, localized input unit. */
export function withSelectedConverterInputUnit(
  calculatorId: string,
  field: Field,
  fields: readonly Field[],
  values: Readonly<Record<string, unknown>>,
  locale: Locale,
): Field {
  if (!selectedUnitInput(calculatorId, field)) return field;
  const sourceName = calculatorId === 'convert-fuel-economy' ? 'fromUnit' : 'from';
  const source = fields.find(candidate => candidate.name === sourceName && candidate.type === 'select');
  if (!source) return field;
  const selected = values[sourceName] === undefined ? source.defaultValue : values[sourceName];
  // Invalid enums must stay invalid: do not replace them with a default unit.
  if (typeof selected !== 'string') return field;
  const label = source.options?.find(option => option.value === selected)?.label.trim();
  if (!label) return field;
  const hint = `${unitCopy(locale).input}: ${label}`;
  return { ...field, help: field.help ? `${field.help}\n${hint}` : hint };
}
