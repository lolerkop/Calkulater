// Локализация уже посчитанного результата: подстановка переведённых меток и
// значений, плюс сборка текста для копирования. Числа сюда приходят уже
// отформатированными раннером — модуль их не пересчитывает.
//
// Чистый модуль: ни React, ни DOM, ни браузерных API.

import type { CalcResult, CalculatorDef } from '../../../lib/types';
import { localizedResultLabel, localizedResultText, type Locale } from '../../../lib/clientI18n';
import { calculatorCopy } from './copy';
import { runtimeBucket, runtimeLocale, type CalculatorClientRuntime } from '../../../lib/platform/runtime';

// Перевод подписи строки результата. Сначала — то, что объявил сам калькулятор,
// затем общая карта. Одна и та же русская фраза у разных калькуляторов может
// значить разное, поэтому обращение всегда с идентификатором.
function translateLabel(label: string, locale: Locale, runtime: CalculatorClientRuntime | undefined): string {
  return runtimeLocale(runtime, locale, 'results', label) ?? localizedResultLabel(label, locale);
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

// Значения калькулятора переводятся вместе с общими: его карта уходит в ту же
// подстановку с приоритетом. Отдельный точный поиск по целой строке здесь не
// годится — обозначения единиц всегда приходят фрагментом внутри значения.
function localizeValue(value: string, locale: Locale, runtime: CalculatorClientRuntime | undefined): string {
  const translated = localizedResultText(value, locale, runtimeBucket(runtime, locale, 'values'));
  return locale === 'en' ? toEnglishDigitSeparators(translated) : translated;
}

// Часть меток собирается из чисел («15,00% of 200,00»), поэтому разделители в них
// должны совпадать со значением в той же строке.
function localizeLabel(label: string, locale: Locale, runtime: CalculatorClientRuntime | undefined): string {
  const translated = translateLabel(label, locale, runtime);
  return locale === 'en' ? toEnglishDigitSeparators(translated) : translated;
}

export function localizeResult(
  result: CalcResult,
  locale: Locale,
  calculatorId: string,
  runtime?: CalculatorClientRuntime,
): CalcResult {
  if (locale === 'ru') return result;
  return {
    ...result,
    primary: {
      label: localizeLabel(result.primary.label, locale, runtime),
      value: localizeValue(result.primary.value, locale, runtime),
    },
    secondary: result.secondary.map((row) => ({
      ...row,
      label: localizeLabel(row.label, locale, runtime),
      value: localizeValue(row.value, locale, runtime),
    })),
    table: result.table
      ? {
          ...result.table,
          title: result.table.title ? localizeLabel(result.table.title, locale, runtime) : result.table.title,
          columns: result.table.columns.map((column) => localizeLabel(column, locale, runtime)),
          rows: result.table.rows.map((row) => row.map((cell) => localizeValue(cell, locale, runtime))),
          note: result.table.note ? localizeValue(result.table.note, locale, runtime) : result.table.note,
        }
      : undefined,
    note: result.note ? localizeValue(result.note, locale, runtime) : result.note,
  };
}

export function resultToText(calc: Pick<CalculatorDef, 'name'>, result: CalcResult, locale: Locale): string {
  const copy = calculatorCopy(locale);
  const secondary = result.secondary
    .map((row) => `${row.label}: ${row.value}`)
    .join('\n');
  // Таблица — часть результата, а не оформление: копируя расчёт, пользователь
  // забирал только шапку и терял график целиком вместе со сноской об усечении.
  // Колонки разделяются табуляцией — так строки вставляются в таблицу
  // электронной таблицы без дополнительной обработки.
  const table = result.table
    ? [
        result.table.title ?? copy.tableCaption,
        result.table.columns.join('\t'),
        ...result.table.rows.map((row) => row.join('\t')),
        result.table.note ? `${copy.note}: ${result.table.note}` : '',
      ].filter(Boolean).join('\n')
    : '';
  return [
    calc.name,
    `${result.primary.label}: ${result.primary.value}`,
    secondary,
    table,
    result.note ? `${copy.note}: ${result.note}` : '',
  ].filter(Boolean).join('\n');
}
