// Преобразование значений формы в вид, который ожидает функция расчёта.
// Модуль чистый: ни React, ни DOM, ни браузерных API. Форматирование результата
// сюда не относится и остаётся на стороне острова.

import type { Field } from '../../../lib/types';
import type { Locale } from '../../../lib/clientI18n';
import type { ShareFormValues } from '../../../lib/shareLink';
import { parseLocalizedNumber } from '../../../lib/format';

// Единая модель значений формы: то же, что уходит в share-ссылку.
export type FormValues = ShareFormValues;

// Строка, которую посетитель ещё набирает: «-», «.», «1,», «-1.». Числом она
// пока не является, но и ошибкой не является — значение неполное, а не неверное.
// Поля дробные (шаг 0,1 и 0,5), и путь к «1,5» обязательно проходит через «1,».
const PARTIAL_NUMBER = /^\s*-?(\d[\d\s ]*)?[.,]?\s*$/;

export function isPartialNumber(raw: string): boolean {
  return raw.trim() !== '' && PARTIAL_NUMBER.test(raw);
}

export function normalizeValues(fields: Field[], values: FormValues, locale: Locale): FormValues {
  const normalized = { ...values };
  for (const field of fields) {
    if (field.type !== 'number') continue;
    const raw = values[field.name];
    if (typeof raw === 'boolean') continue;
    const text = String(raw ?? '');
    const parsed = parseLocalizedNumber(text, locale);
    if (parsed !== null) {
      normalized[field.name] = parsed;
      continue;
    }
    // Пустое необязательное поле значит «суммы нет». Раннер такие поля сверяет
    // с нулём, поэтому нуль и передаём: основной расчёт остаётся, а зависящая
    // от суммы строка просто не выводится.
    if (text.trim() === '') {
      if (field.optional) normalized[field.name] = 0;
      continue;
    }
    // Незакрытая дробь: считаем по уже набранной числовой части, чтобы результат
    // не пропадал между нажатиями клавиш.
    if (isPartialNumber(text)) {
      normalized[field.name] = parseLocalizedNumber(text.replace(/[.,]\s*$/, ''), locale) ?? 0;
    }
  }
  return normalized;
}
