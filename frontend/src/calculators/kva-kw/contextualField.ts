import type { CalculatorContextualField } from '../../lib/platform/types';

// Решаемая величина зависит от режима, а `showIf` умеет ровно одно равенство.
// Приём тот же, что у закона Ома и остальных многорежимных калькуляторов:
// поле остаётся на месте, становится только для чтения и подписывается.
const COMPUTED: Record<string, string> = { kva: 'kva', kw: 'kw' };
const SUFFIX: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)' };

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const mode = String(values.mode ?? 'kva');
  if (field.name !== COMPUTED[mode]) return field;
  return { ...field, readOnly: true, label: `${field.label}${SUFFIX[locale] ?? SUFFIX.en}` };
};
