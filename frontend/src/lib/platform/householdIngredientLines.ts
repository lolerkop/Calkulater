import { parseLocalizedNumber } from '../format';

// Four released ingredient-list calculators use the same last-token grammar.
// A comma inside a number remains a decimal separator; separators at token ends
// retain the existing list syntax. Names are not interpreted as measurements.
export const tokenizeIngredientLine = (raw: string): string[] =>
  raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);

export const ingredientNumber = (raw: string): number | null => {
  const parsed = parseLocalizedNumber(raw, 'ru');
  return parsed === 0 && /[1-9]/.test(raw) ? null : parsed;
};
