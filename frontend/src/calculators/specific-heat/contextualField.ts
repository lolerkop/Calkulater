import type { CalculatorContextualField } from '../../lib/platform/types';

// Приём тот же, что у остальных многорежимных калькуляторов волны: `showIf`
// умеет одно равенство, поэтому решаемое поле не прячется, а помечается.
const COMPUTED: Record<string, string> = { energy: 'q', deltaT: 'dt', mass: 'mass' };
const SUFFIX: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)' };

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const mode = String(values.mode ?? 'energy');
  if (field.name !== COMPUTED[mode]) return field;
  return { ...field, readOnly: true, label: `${field.label}${SUFFIX[locale] ?? SUFFIX.en}` };
};
