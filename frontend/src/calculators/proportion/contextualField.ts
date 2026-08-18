import type { CalculatorContextualField } from '../../lib/platform/types';

// Искомый член пропорции.
//
// Спрятать его было нельзя: `showIf` показывает поле при совпадении значения,
// а здесь нужно обратное — скрыть ровно один член из четырёх. Добавлять в ядро
// «показывать, если не равно» ради одного калькулятора не стали: тот же смысл
// выражается контекстным полем, которое принадлежит калькулятору. Поле
// остаётся на месте, но становится только для чтения и подписано как
// вычисляемое, поэтому в него не набирают значение, которое всё равно будет
// заменено.
const SUFFIX: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)' };

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  if (field.name !== String(values.find ?? 'd')) return field;
  const suffix = SUFFIX[locale] ?? SUFFIX.en;
  return { ...field, readOnly: true, label: `${field.label}${suffix}` };
};

export { contextualField as default };
