import type { CalculatorContextualField } from '../../lib/platform/types';

// Решаемая величина зависит от режима, а `showIf` умеет ровно одно равенство.
// В режиме напряжения решаемой величины среди полей нет вовсе — она только
// выходная, поэтому помечать нечего.
const COMPUTED: Record<string, string> = { modulus: 'e', elongation: 'delta' };
const SUFFIX: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)' };

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const mode = String(values.mode ?? 'stress');
  if (field.name !== COMPUTED[mode]) return field;
  return { ...field, readOnly: true, label: `${field.label}${SUFFIX[locale] ?? SUFFIX.en}` };
};
