import type { CalculatorContextualField } from '../../lib/platform/types';

// Legacy computed-field annotation retained for callers; the published form
// now hides the unknown field using static showIf conditions.
const COMPUTED: Record<string, string> = { p2: 'p2', v2: 'v2', t2: 't2' };
const SUFFIX: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)', de: ' (berechnet)', es: ' (calculado)' };

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const mode = String(values.mode ?? 'p2');
  if (field.name !== COMPUTED[mode]) return field;
  const suffix = SUFFIX[locale] ?? SUFFIX.en;
  return { ...field, readOnly: true, label: `${field.label}${suffix}` };
};
