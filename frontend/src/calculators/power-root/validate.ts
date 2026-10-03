import { isIntegralNumberText } from '../../lib/format';
import { isTranslatedLocale, type CalculatorValidator } from '../../lib/platform/types';
import { localization } from './localization';

export const validate: CalculatorValidator = ({ values, locale, parseNumber }): Record<string, string> => {
  const read = (raw: unknown) => typeof raw === 'number' ? (Number.isFinite(raw) ? raw : null)
    : typeof raw === 'string' ? parseNumber(raw) : null;
  const base = read(values.base), exponent = read(values.exponent);
  const raw = values.exponent;
  // Positive bases retain fractional powers and fractional root indices.
  if (base === null || base >= 0 || exponent === null || (typeof raw !== 'number' && typeof raw !== 'string')) return {};
  if (Number.isSafeInteger(exponent) && isIntegralNumberText(raw, locale) !== false) return {};
  const mode = values.mode ?? 'power';
  if (mode !== 'power' && mode !== 'root') return {};
  const key = mode === 'root'
    ? 'Отрицательное число требует положительной нечётной целой степени корня до 9007199254740991'
    : 'Отрицательное основание требует целого показателя по модулю до 9007199254740991';
  const message = locale === 'ru' ? key : (isTranslatedLocale(locale)
    ? localization[locale]?.values?.[key] : undefined) ?? localization.en!.values![key];
  return { exponent: message };
};
