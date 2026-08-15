// Проверка значений формы калькулятора: чистая логика без React, DOM и
// браузерных API. Тексты ошибок берутся из клиентского copy-слоя — вводить ради
// выноса отдельную систему кодов ошибок было бы отдельным редизайном, а не
// переносом, поэтому сборка сообщений оставлена ровно такой, какой была.

import type { Field } from '../../../lib/types';
import type { Locale } from '../../../lib/clientI18n';
import { parseLocalizedNumber } from '../../../lib/format';
import { parseExcludedDates } from '../../../lib/calculators/workingDays';
import { isValidIsoDate } from '../../../lib/date';
import { calculatorCopy } from './copy';
import type { FormValues } from './values';

export type FieldErrors = Record<string, string>;
export const EMPTY_ERRORS: FieldErrors = Object.freeze({});

export function isVisible(field: Field, values: FormValues): boolean {
  if (!field.showIf) return true;
  return values[field.showIf.field] === field.showIf.equals;
}

export function validateValues(calculatorId: string, fields: Field[], values: FormValues, locale: Locale): FieldErrors {
  const errors: FieldErrors = {};
  const copy = calculatorCopy(locale);
  for (const field of fields) {
    if (!isVisible(field, values) || field.type !== 'number') continue;
    const raw = values[field.name];
    const parsed = typeof raw === 'boolean' ? null : parseLocalizedNumber(String(raw ?? ''), locale);
    if (raw === '' || raw === undefined || raw === null || parsed === null) {
      errors[field.name] = copy.enterNumber;
      continue;
    }
    const value = parsed;
    if (field.min !== undefined && value < field.min) {
      errors[field.name] = copy.minimum(field.min);
    }
    if (field.max !== undefined && value > field.max) {
      errors[field.name] = copy.maximum(field.max);
    }
  }

  const requiredDateNames = new Set(['birthDate', 'startDate', 'endDate', 'operationDate']);
  const dateError = locale === 'ru'
    ? 'Выберите корректную дату.'
    : locale === 'uk'
      ? 'Оберіть коректну дату.'
      : 'Choose a valid date.';
  for (const field of fields) {
    if (!isVisible(field, values) || field.type !== 'date') continue;
    const raw = String(values[field.name] ?? '');
    if ((requiredDateNames.has(field.name) && !raw) || (raw && !isValidIsoDate(raw))) {
      errors[field.name] = dateError;
    }
  }

  const zeroError = locale === 'ru'
    ? 'Значение не может быть равно нулю.'
    : locale === 'uk'
      ? 'Значення не може дорівнювати нулю.'
      : 'The value cannot be zero.';
  if (calculatorId === 'percent-calculator') {
    const mode = String(values.mode ?? 'of');
    if (mode === 'what' && parseLocalizedNumber(String(values.b ?? ''), locale) === 0) errors.b = zeroError;
    if (mode === 'change' && parseLocalizedNumber(String(values.a ?? ''), locale) === 0) errors.a = zeroError;
  }
  if (calculatorId === 'working-days-calculator') {
    const invalid = parseExcludedDates(String(values.excludedDates ?? '')).invalid;
    if (invalid.length > 0) {
      errors.excludedDates = locale === 'ru'
        ? `Используйте формат ГГГГ-ММ-ДД: ${invalid.join(', ')}`
        : locale === 'uk'
          ? `Використовуйте формат РРРР-ММ-ДД: ${invalid.join(', ')}`
          : `Use YYYY-MM-DD: ${invalid.join(', ')}`;
    }
    const start = String(values.startDate ?? '');
    const end = String(values.endDate ?? '');
    if (isValidIsoDate(start) && isValidIsoDate(end) && end < start) {
      errors.endDate = locale === 'ru'
        ? 'Дата окончания не может быть раньше даты начала.'
        : locale === 'uk'
          ? 'Дата завершення не може бути раніше дати початку.'
          : 'The end date cannot be before the start date.';
    }
  }
  if (calculatorId === 'age-calculator') {
    const birth = String(values.birthDate ?? '');
    const target = String(values.targetDate ?? '');
    if (isValidIsoDate(birth) && isValidIsoDate(target) && target < birth) {
      errors.targetDate = locale === 'ru'
        ? 'Дата расчёта не может быть раньше даты рождения.'
        : locale === 'uk'
          ? 'Дата розрахунку не може бути раніше дати народження.'
          : 'The calculation date cannot be before the birth date.';
    }
  }
  return errors;
}
