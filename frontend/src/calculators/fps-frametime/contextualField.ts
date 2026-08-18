import type { CalculatorContextualField } from '../../lib/platform/types';

// Вычисляемая величина зависит от направления перевода: в одном режиме это
// время кадра, в другом — частота. Поле остаётся видимым, но только для
// чтения, чтобы в него не набирали значение, которое всё равно заменится.
const COMPUTED: Record<string, string> = { fps: 'frameTime', ms: 'fps' };
const SUFFIX: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)' };

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const mode = String(values.mode ?? 'fps');
  if (field.name !== COMPUTED[mode]) return field;
  const suffix = SUFFIX[locale] ?? SUFFIX.en;
  return { ...field, readOnly: true, label: `${field.label}${suffix}` };
};
