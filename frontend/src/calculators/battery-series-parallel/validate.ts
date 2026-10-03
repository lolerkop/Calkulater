import type { CalculatorValidator } from '../../lib/platform/types';
import { integerInput } from '../../lib/platform/strictNumericInput';

const messages: Record<string, string> = {
  ru: 'Введите целое число от 1 до 500',
  en: 'Enter an integer from 1 to 500',
  uk: 'Уведіть ціле число від 1 до 500',
  de: 'Gib eine ganze Zahl von 1 bis 500 ein',
  es: 'Introduce un entero entre 1 y 500',
};

// Preserve the raw decimal text: a fractional count must not round to an integer.
export const validate: CalculatorValidator = ({ values, locale }) => {
  const errors: Record<string, string> = {};
  for (const name of ['cells', 'series', 'parallel']) {
    const count = integerInput(values[name]);
    if (count === null || count < 1 || count > 500) errors[name] = messages[locale] ?? messages.en;
  }
  return errors;
};
