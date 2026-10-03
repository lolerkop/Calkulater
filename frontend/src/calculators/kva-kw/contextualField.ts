import type { CalculatorContextualField } from '../../lib/platform/types';

// The solved field is hidden by the definition. This hook only labels the
// contextual descriptor for consumers that request it directly.
const COMPUTED: Record<string, string> = { kva: 'kva', kw: 'kw' };
const SUFFIX: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)', de: ' (berechnet)', es: ' (calculado)' };

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const mode = String(values.mode ?? 'kva');
  if (field.name !== COMPUTED[mode]) return field;
  return { ...field, readOnly: true, label: `${field.label}${SUFFIX[locale] ?? SUFFIX.en}` };
};
