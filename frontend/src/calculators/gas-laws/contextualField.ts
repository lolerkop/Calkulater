import type { CalculatorContextualField } from '../../lib/platform/types';

// Решаемая величина зависит от режима, и спрятать её `showIf` нельзя: условие
// одно, а «показывать во всех режимах, кроме одного» требует отрицания. Тот же
// приём, что у закона Ома и пропорции: поле остаётся на месте, становится
// только для чтения и подписывается как вычисляемое.
const COMPUTED: Record<string, string> = { p2: 'p2', v2: 'v2', t2: 't2' };
const SUFFIX: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)' };

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const mode = String(values.mode ?? 'p2');
  if (field.name !== COMPUTED[mode]) return field;
  const suffix = SUFFIX[locale] ?? SUFFIX.en;
  return { ...field, readOnly: true, label: `${field.label}${suffix}` };
};
