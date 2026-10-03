import type { CalculatorContextualField } from '../../lib/platform/types';

// The definition hides the solved field with showIf.oneOf. This hook keeps
// programmatic contextual consumers explicit; it never presents a stale input
// as a calculated result.
const COMPUTED: Record<string, string> = { charge: 'q', voltage: 'v', capacitance: 'c' };
const SUFFIX: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)', de: ' (berechnet)', es: ' (calculado)' };

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const mode = String(values.mode ?? 'charge');
  if (field.name !== COMPUTED[mode]) return field;
  return { ...field, readOnly: true, label: `${field.label}${SUFFIX[locale] ?? SUFFIX.en}` };
};
