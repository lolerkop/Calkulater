import { isIntegralNumberText } from '../../lib/format';
import { isTranslatedLocale, type CalculatorValidator } from '../../lib/platform/types';
import { localization } from './localization';

export const validate: CalculatorValidator = ({ values, locale, parseNumber }) => {
  const errors: Record<string, string> = {};
  const key = 'Числа должны быть целыми';
  const message = locale === 'ru' ? key : (isTranslatedLocale(locale)
    ? localization[locale]?.values?.[key] : undefined) ?? localization.en!.values![key];
  for (const name of ['a', 'b', 'c', 'd']) {
    const raw = values[name];
    if (typeof raw !== 'number' && typeof raw !== 'string') continue;
    const parsed = typeof raw === 'number' ? (Number.isFinite(raw) ? raw : null) : parseNumber(raw);
    if (parsed !== null && (!Number.isSafeInteger(parsed) || isIntegralNumberText(raw, locale) === false)) errors[name] = message;
  }
  return errors;
};
