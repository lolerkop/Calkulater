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
import { v2Validators } from '../../../calculators/runtime.generated';

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
    const text = typeof raw === 'boolean' ? '' : String(raw ?? '');
    const parsed = typeof raw === 'boolean' ? null : parseLocalizedNumber(text, locale);
    if (parsed === null) {
      // Пустое необязательное поле — это «суммы нет», а не ошибка ввода: раннер
      // получит нуль и просто не выведет зависящую от суммы строку.
      if (text.trim() === '' && field.optional) continue;
      // Незакрытая дробь вроде «1,» — значение неполное, а не неверное. Ругаться
      // на посетителя, пока он ещё набирает число, незачем.
      if (isPartialNumber(text)) continue;
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

  // Валидация, специфичная для калькулятора, живёт рядом с самим калькулятором.
  // Общий слой только вызывает её и не знает, какие калькуляторы существуют:
  // именно это отличает V2 от прежних веток `if (calculatorId === '...')`.
  const ownValidator = v2Validators[calculatorId];
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
