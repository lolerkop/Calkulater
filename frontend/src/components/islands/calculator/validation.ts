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
import { isPartialNumber, type FormValues } from './values';
import type { CalculatorClientRuntime } from '../../../lib/platform/runtime';
import { isFieldVisible } from '../../../lib/fieldVisibility';

export type FieldErrors = Record<string, string>;
export const EMPTY_ERRORS: FieldErrors = Object.freeze({});

export function isVisible(field: Field, values: FormValues): boolean {
  return isFieldVisible(field, values);
}

export function validateValues(
  calculatorId: string,
  fields: Field[],
  values: FormValues,
  locale: Locale,
  runtime?: CalculatorClientRuntime,
): FieldErrors {
  const errors: FieldErrors = {};
  const copy = calculatorCopy(locale);
  for (const field of fields) {
    if (!isVisible(field, values) || field.type !== 'number') continue;
    const raw = values[field.name];
    const text = typeof raw === 'boolean' ? '' : String(raw ?? '');
    // URL restoration supplies actual numbers. Re-parsing Number.toString()
    // would reject finite values printed with an exponent (e.g. 1e-308).
    const parsed = typeof raw === 'number' ? (Number.isFinite(raw) ? raw : null)
      : typeof raw === 'boolean' ? null : parseLocalizedNumber(text, locale);
    if (parsed === null) {
      // Пустое необязательное поле — это «суммы нет», а не ошибка ввода: раннер
      // получит нуль и просто не выведет зависящую от суммы строку.
      if (text.trim() === '' && field.optional && typeof raw !== 'boolean') continue;
      // Незакрытая дробь вроде «1,» — значение неполное, а не неверное. Ругаться
      // на посетителя, пока он ещё набирает число, незачем.
      if (isPartialNumber(text)) continue;
      errors[field.name] = copy.enterNumber;
      continue;
    }
    const value = parsed;
    // A nonzero decimal outside Number's lower range must not become a
    // plausible zero before a calculator receives the normalized input.
    if (typeof raw === 'string' && value === 0 && /[1-9]/.test(text)) {
      errors[field.name] = copy.enterNumber;
      continue;
    }
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
    : locale === 'es'
      ? 'Indica una fecha válida.'
      : locale === 'de'
        ? 'Wähle ein gültiges Datum.'
      : 'Choose a valid date.';
  const validDate = runtime?.validateDate ?? isValidIsoDate;
  for (const field of fields) {
    if (!isVisible(field, values) || field.type !== 'date') continue;
    const raw = String(values[field.name] ?? '');
    if ((requiredDateNames.has(field.name) && !field.optional && !raw) || (raw && !validDate(raw))) {
      errors[field.name] = dateError;
    }
  }

  // Валидация, специфичная для калькулятора, живёт рядом с самим калькулятором.
  // Общий слой только вызывает её и не знает, какие калькуляторы существуют:
  // именно это отличает V2 от прежних веток `if (calculatorId === '...')`.
  const ownValidator = runtime?.validate;
  if (ownValidator) {
    Object.assign(errors, ownValidator({
      values,
      locale,
      fields,
      parseNumber: (text: string) => parseLocalizedNumber(text, locale),
    }));
  }

  if (calculatorId === 'working-days-calculator') {
    const invalid = parseExcludedDates(String(values.excludedDates ?? '')).invalid;
    if (invalid.length > 0) {
      errors.excludedDates = locale === 'ru'
        ? `Используйте формат ГГГГ-ММ-ДД: ${invalid.join(', ')}`
        : locale === 'uk'
          ? `Використовуйте формат РРРР-ММ-ДД: ${invalid.join(', ')}`
          : locale === 'es'
            ? `Usa el formato AAAA-MM-DD: ${invalid.join(', ')}`
            : `Use YYYY-MM-DD: ${invalid.join(', ')}`;
    }
    const start = String(values.startDate ?? '');
    const end = String(values.endDate ?? '');
    if (isValidIsoDate(start) && isValidIsoDate(end) && end < start) {
      errors.endDate = locale === 'ru'
        ? 'Дата окончания не может быть раньше даты начала.'
        : locale === 'uk'
          ? 'Дата завершення не може бути раніше дати початку.'
          : locale === 'es'
            ? 'La fecha de fin no puede ser anterior a la de inicio.'
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
          : locale === 'es'
            ? 'La fecha de cálculo no puede ser anterior a la de nacimiento.'
            : 'The calculation date cannot be before the birth date.';
    }
  }
  return errors;
}
