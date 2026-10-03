import { isIntegralNumberText } from '../format';
import { isFieldVisible } from '../fieldVisibility';
import { isTranslatedLocale, type CalculatorValidator, type CalculatorLocalization } from './types';

// Inspect original count text before normalization can erase a nonzero fraction.
export const createCountValidator = (countFields: readonly string[], localization: CalculatorLocalization): CalculatorValidator => ({ values, locale, fields, parseNumber }) => {
  const errors: Record<string, string> = {};
  const countNames = new Set(countFields);
  for (const field of fields) {
    if (!countNames.has(field.name) || !isFieldVisible(field, values)) continue;
    const raw = values[field.name];
    if (typeof raw !== 'number' && typeof raw !== 'string') continue;
    const parsed = typeof raw === 'number' ? (Number.isFinite(raw) ? raw : null) : parseNumber(raw);
    // Malformed and partial entries retain the common form's existing handling.
    if (parsed === null || (Number.isSafeInteger(parsed) && isIntegralNumberText(raw, locale) !== false)) continue;
    const key = 'Количество должно быть целым в допустимом диапазоне';
    errors[field.name] = locale === 'ru' ? key : (isTranslatedLocale(locale)
      ? localization[locale]?.values?.[key] : undefined) ?? localization.en!.values![key];
  }
  return errors;
};
