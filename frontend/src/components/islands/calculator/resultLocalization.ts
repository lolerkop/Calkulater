// Локализация уже посчитанного результата: подстановка переведённых меток и
// значений, плюс сборка текста для копирования. Числа сюда приходят уже
// отформатированными раннером — модуль их не пересчитывает.
//
// Чистый модуль: ни React, ни DOM, ни браузерных API.

import type { CalcResult, CalculatorDef } from '../../../lib/types';
import { localizedResultLabel, localizedResultText, type Locale } from '../../../lib/clientI18n';
import { calculatorCopy } from './copy';
import { v2Localization } from '../../../calculators/localization.generated';
import { lookupScoped } from '../../../lib/platform/types';

// Перевод подписи строки результата. Сначала — то, что объявил сам калькулятор,
// затем общая карта. Одна и та же русская фраза у разных калькуляторов может
// значить разное, поэтому обращение всегда с идентификатором.
function translateLabel(label: string, locale: Locale, calculatorId: string): string {
  return lookupScoped(v2Localization, locale, calculatorId, 'results', label)
    ?? localizedResultLabel(label, locale);
}

// Число в русской записи: целая часть с неразрывными пробелами между тройками и
// необязательная дробная часть после запятой.
const RU_FORMATTED_NUMBER = /\d+(?:\u00a0\d{3})*(?:,\d+)?/g;

// Раннеры форматируют числа через Intl.NumberFormat('ru-RU') и не знают локали,
// поэтому английские разделители расставляются здесь, на границе представления.
// Переписываются только разделители внутри самого числа, так что даты, время и
// ISO-метки не затрагиваются: между их цифрами нет ни неразрывного пробела, ни
// запятой. Остальные локали используют запятую как десятичный разделитель, и для
// них запись раннера уже верна.
function toEnglishDigitSeparators(value: string): string {
  return value.replace(RU_FORMATTED_NUMBER, (run) => {
    const [integer, fraction] = run.split(',');
    const grouped = integer.split('\u00a0').join(',');
    return fraction === undefined ? grouped : `${grouped}.${fraction}`;
  });
}

function localizeValue(value: string, locale: Locale, calculatorId: string): string {
  const own = lookupScoped(v2Localization, locale, calculatorId, 'values', value);
  const translated = own ?? localizedResultText(value, locale);
  return locale === 'en' ? toEnglishDigitSeparators(translated) : translated;
}

// Часть меток собирается из чисел («15,00% of 200,00»), поэтому разделители в них
// должны совпадать со значением в той же строке.
function localizeLabel(label: string, locale: Locale, calculatorId: string): string {
  const translated = translateLabel(label, locale, calculatorId);
  return locale === 'en' ? toEnglishDigitSeparators(translated) : translated;
}

export function localizeResult(result: CalcResult, locale: Locale, calculatorId: string): CalcResult {
  if (locale === 'ru') return result;
  return {
    ...result,
    primary: {
      label: localizeLabel(result.primary.label, locale, calculatorId),
      value: localizeValue(result.primary.value, locale, calculatorId),
    },
    secondary: result.secondary.map((row) => ({
      ...row,
      label: localizeLabel(row.label, locale, calculatorId),
      value: localizeValue(row.value, locale, calculatorId),
    })),
    table: result.table
      ? {
          ...result.table,
          title: result.table.title ? localizeLabel(result.table.title, locale, calculatorId) : result.table.title,
          columns: result.table.columns.map((column) => localizeLabel(column, locale, calculatorId)),
          rows: result.table.rows.map((row) => row.map((cell) => localizeValue(cell, locale, calculatorId))),
          note: result.table.note ? localizeValue(result.table.note, locale, calculatorId) : result.table.note,
        }
      : undefined,
    note: result.note ? localizeValue(result.note, locale, calculatorId) : result.note,
  };
}

export function resultToText(calc: Pick<CalculatorDef, 'name'>, result: CalcResult, locale: Locale): string {
  const copy = calculatorCopy(locale);
  const secondary = result.secondary
    .map((row) => `${row.label}: ${row.value}`)
    .join('\n');
  return [
    calc.name,
    `${result.primary.label}: ${result.primary.value}`,
    secondary,
    result.note ? `${copy.note}: ${result.note}` : '',
  ].filter(Boolean).join('\n');
}
