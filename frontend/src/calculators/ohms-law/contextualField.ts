import type { CalculatorContextualField } from '../../lib/platform/types';

// Вычисляемая величина зависит от режима: зная напряжение и ток, ищут
// сопротивление, и так далее. Поле остаётся на месте, но становится только
// для чтения и подписывается как вычисляемое — тот же приём, что и у
// пропорции, где спрятать одно поле из четырёх `showIf` не умеет.
const COMPUTED: Record<string, string> = { vi: 'resistance', vr: 'current', ir: 'voltage' };
const SUFFIX: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)' };

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const mode = String(values.mode ?? 'vi');
  if (field.name !== COMPUTED[mode]) return field;
  const suffix = SUFFIX[locale] ?? SUFFIX.en;
  return { ...field, readOnly: true, label: `${field.label}${suffix}` };
};
