import type { CalculatorContextualField } from '../../lib/platform/types';

// Поле основания имеет смысл только в третьем режиме. Скрыть его нельзя тем же
// приёмом, что и показать: `showIf` умеет ровно это — показывать при
// совпадении, и здесь оно подходит. Контекстное поле нужно для другого: в
// десятичном и натуральном режимах подпись аргумента уточняет, какое основание
// подразумевается, иначе «Число» ничего не говорит о том, что считается.
const HINT: Record<string, Record<string, string>> = {
  ru: { log10: 'Число (основание 10)', ln: 'Число (основание e)', custom: 'Число' },
  en: { log10: 'Number (base 10)', ln: 'Number (base e)', custom: 'Number' },
  uk: { log10: 'Число (основа 10)', ln: 'Число (основа e)', custom: 'Число' },
};

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  if (field.name !== 'value') return field;
  const mode = String(values.mode ?? 'log10');
  const table = HINT[locale] ?? HINT.en;
  return { ...field, label: table[mode] ?? field.label };
};
