import type { CalculatorContextualField } from '../../lib/platform/types';

// Решаемая величина зависит от режима, а `showIf` умеет ровно одно равенство:
// «показывать во всех режимах, кроме одного» им не выражается, а здесь режимов
// три. Применён выпущенный приём — поле остаётся на месте, становится только
// для чтения и подписывается как вычисляемое. Тем же живут закон Ома,
// объединённый газовый закон и вся многорежимная часть волны 20.
const COMPUTED: Record<string, string> = { toModel: 'model', toReal: 'real', findScale: 'scale' };
const SUFFIX: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)' };

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const mode = String(values.mode ?? 'toModel');
  if (field.name !== COMPUTED[mode]) return field;
  return { ...field, readOnly: true, label: `${field.label}${SUFFIX[locale] ?? SUFFIX.en}` };
};
