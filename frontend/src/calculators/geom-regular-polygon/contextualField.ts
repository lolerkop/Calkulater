import type { CalculatorContextualField } from '../../lib/platform/types';

// Unit selection changes the interpretation of numbers; it performs no conversion.
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  if (field.type !== 'number') return field;
  if (field.name === 'n' || field.name === 'sides') return { ...field, unit: '1' };
  if (field.name === 'angle') return { ...field, unit: '°' };
  const selected = values.unit;
  if (selected !== 'mm' && selected !== 'cm' && selected !== 'm') return field;
  const symbol = locale === 'ru' || locale === 'uk' ? { mm: 'мм', cm: 'см', m: 'м' }[selected] : selected;
  const power = field.name === 'volume' ? '³' : field.name === 'area' ? '²' : '';
  return { ...field, unit: symbol + power };
};
