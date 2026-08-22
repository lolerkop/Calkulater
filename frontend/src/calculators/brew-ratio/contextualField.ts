import type { CalculatorContextualField } from '../../lib/platform/types';

// Решаемая величина зависит от режима, а `showIf` умеет только одно равенство:
// «показывать во всех режимах, кроме одного» им не выражается. Поле остаётся на
// месте, становится только для чтения и подписывается как вычисляемое — тот же
// приём, что у закона Ома.
const COMPUTED: Record<string, string> = { coffee: 'coffee', water: 'water', ratio: 'ratio' };
const SUFFIX: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)' };

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const mode = String(values.mode ?? 'coffee');
  if (field.name !== COMPUTED[mode]) return field;
  return { ...field, readOnly: true, label: `${field.label}${SUFFIX[locale] ?? SUFFIX.en}` };
};
