import { isIntegralNumberText } from '../../lib/format';
import { isTranslatedLocale, type CalculatorValidator } from '../../lib/platform/types';
import { localization } from './localization';
export const validate: CalculatorValidator = ({ values, locale, parseNumber }): Record<string, string> => {
  const raw = values.passengers;
  if (typeof raw !== 'number' && typeof raw !== 'string') return {};
  const parsed = typeof raw === 'number' ? (Number.isFinite(raw) ? raw : null) : parseNumber(raw);
  if (parsed === null || (Number.isSafeInteger(parsed) && isIntegralNumberText(raw, locale) !== false)) return {};
  const key = 'Введите целые числа в допустимом диапазоне';
  const message = locale === 'ru' ? key : (isTranslatedLocale(locale) ? localization[locale]?.values?.[key] : undefined) ?? localization.en!.values![key];
  return { passengers: message };
};
