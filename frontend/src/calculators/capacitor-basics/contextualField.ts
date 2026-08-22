import type { CalculatorContextualField } from '../../lib/platform/types';

// Тот же приём, что у закона Ома, газовых законов и закона Гука: `showIf`
// умеет одно равенство и «спрятать решаемую величину» при трёх режимах не
// выражает. Поле остаётся, становится только для чтения и подписывается.
const COMPUTED: Record<string, string> = { charge: 'q', voltage: 'v', capacitance: 'c' };
const SUFFIX: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)' };

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const mode = String(values.mode ?? 'charge');
  if (field.name !== COMPUTED[mode]) return field;
  return { ...field, readOnly: true, label: `${field.label}${SUFFIX[locale] ?? SUFFIX.en}` };
};
