import type { CalculatorContextualField } from '../../lib/platform/types';

// Static showIf.oneOf rules now hide the computed field before rendering,
// validation and sharing. The old read-only hook remains for direct callers;
// it does not supply the computed value and is not the visibility mechanism.
const SUFFIX: Record<string, string> = { ru: ' (вычисляется)', en: ' (computed)', uk: ' (обчислюється)' };

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  if (field.name !== String(values.find ?? 'd')) return field;
  const suffix = SUFFIX[locale] ?? SUFFIX.en;
  return { ...field, readOnly: true, label: `${field.label}${suffix}` };
};

export { contextualField as default };
