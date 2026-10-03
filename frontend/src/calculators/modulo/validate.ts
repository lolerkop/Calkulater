import { isIntegralNumberText } from '../../lib/format';
import { isTranslatedLocale, type CalculatorValidator } from '../../lib/platform/types';
import { localization } from './localization';

// Inspect the original decimal, before Number rounding can erase its fraction.
export const validate: CalculatorValidator = ({ values, locale, parseNumber }) => {
  const errors: Record<string, string> = {};
  const key = 'Введите целые числа по модулю до 9007199254740991';
  const message = locale === 'ru' ? key : (isTranslatedLocale(locale)
    ? localization[locale]?.values?.[key] : undefined) ?? localization.en!.values![key];
  for (const name of ['a', 'b']) {
    const raw = values[name];
    if (typeof raw !== 'number' && typeof raw !== 'string') continue;
    const parsed = typeof raw === 'number' ? (Number.isFinite(raw) ? raw : null) : parseNumber(raw);
    // The shared validator handles malformed or incomplete number text.
    if (parsed !== null && (!Number.isSafeInteger(parsed) || isIntegralNumberText(raw, locale) === false)) errors[name] = message;
  }
  return errors;
};
