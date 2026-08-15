// Преобразование значений формы в вид, который ожидает функция расчёта.
// Модуль чистый: ни React, ни DOM, ни браузерных API. Форматирование результата
// сюда не относится и остаётся на стороне острова.

import type { Field } from '../../../lib/types';
import type { Locale } from '../../../lib/clientI18n';
import type { ShareFormValues } from '../../../lib/shareLink';
import { parseLocalizedNumber } from '../../../lib/format';

// Единая модель значений формы: то же, что уходит в share-ссылку.
export type FormValues = ShareFormValues;

export function normalizeValues(fields: Field[], values: FormValues, locale: Locale): FormValues {
  const normalized = { ...values };
  for (const field of fields) {
    if (field.type !== 'number') continue;
    const raw = values[field.name];
    if (typeof raw === 'boolean') continue;
    const parsed = parseLocalizedNumber(String(raw ?? ''), locale);
    if (parsed !== null) normalized[field.name] = parsed;
  }
  return normalized;
}
