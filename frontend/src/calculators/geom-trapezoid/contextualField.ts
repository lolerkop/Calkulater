import type { CalculatorContextualField } from '../../lib/platform/types';

// The selector changes the interpretation of entered numbers; no conversion occurs.
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  if (field.type !== 'number') return field;
  if (field.name === 'angle') return { ...field, unit: '°' };
  const selected = values.unit;
  if (selected !== 'mm' && selected !== 'cm' && selected !== 'm') return field;
  const symbol = locale === 'ru' || locale === 'uk' ? { mm: 'мм', cm: 'см', m: 'м' }[selected] : selected;
  const unit = field.name === 'area' ? `${symbol}²` : symbol;
  return { ...field, unit };
};
