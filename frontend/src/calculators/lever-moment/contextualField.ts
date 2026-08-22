import type { CalculatorContextualField } from '../../lib/platform/types';

// Решаемая величина зависит от режима; `showIf` умеет одно равенство. Приём тот
// же, что у закона Ома и остальных многорежимных калькуляторов волны.
const COMPUTED: Record<string, string> = { force2: 'f2', distance2: 'd2' };
const SUFFIX: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)' };

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const mode = String(values.mode ?? 'force2');
  if (field.name !== COMPUTED[mode]) return field;
  return { ...field, readOnly: true, label: `${field.label}${SUFFIX[locale] ?? SUFFIX.en}` };
};
