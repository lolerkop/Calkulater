import { isIntegralNumberText } from '../../lib/format';
import { isTranslatedLocale, type CalculatorValidator } from '../../lib/platform/types';
import { localization } from './localization';
export const validate: CalculatorValidator = ({ values, locale, parseNumber }): Record<string, string> => {
  const errors: Record<string,string> = {};
  const native = (key:string):string => locale === 'ru' ? key : (isTranslatedLocale(locale) ? localization[locale]?.values?.[key] : undefined) ?? localization.en!.values![key];
  const raw = values.years;
  const parsed = typeof raw === 'number' ? (Number.isFinite(raw) ? raw : null) : typeof raw === 'string' ? parseNumber(raw) : null;
  if (parsed !== null && (!Number.isSafeInteger(parsed) || isIntegralNumberText(raw as string | number, locale) === false)) errors.years = native('Введите целые числа в допустимом диапазоне');
  for (const [field,key] of [['ratePct','Годовая ставка должна быть от 0 включительно до 100 % исключительно'],['firstYearPct','Потеря за первый год должна быть от 0 включительно до 100 % исключительно']]) {
    const value=values[field];
    const rate=typeof value === 'number' ? (Number.isFinite(value) ? value : null) : typeof value === 'string' ? parseNumber(value) : null;
    if (rate !== null && !(rate >= 0 && rate < 100)) errors[field]=native(key);
  }
  return errors;
};
