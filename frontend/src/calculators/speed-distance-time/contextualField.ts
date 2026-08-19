import type { CalculatorContextualField } from '../../lib/platform/types';

// Вычисляемая величина зависит от режима, и спрятать её `showIf` нельзя:
// он показывает поле при совпадении, а нужно обратное — оставить видимыми
// две известные из трёх. Поле остаётся на месте, но становится только для
// чтения и подписывается как вычисляемое. Тот же приём уже работает в
// пропорции и в законе Ома.
const COMPUTED: Record<string, string> = { speed: 'speed', distance: 'distance', time: 'time' };
const SUFFIX: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)' };

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const mode = String(values.mode ?? 'speed');
  if (field.name !== COMPUTED[mode]) return field;
  const suffix = SUFFIX[locale] ?? SUFFIX.en;
  return { ...field, readOnly: true, label: `${field.label}${suffix}` };
};
