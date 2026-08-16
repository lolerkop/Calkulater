// Локализация уже посчитанного результата: подстановка переведённых меток и
// значений, плюс сборка текста для копирования. Числа сюда приходят уже
// отформатированными раннером — модуль их не пересчитывает.
//
// Чистый модуль: ни React, ни DOM, ни браузерных API.

import type { CalcResult, CalculatorDef } from '../../../lib/types';
import { localizedResultLabel, localizedResultText, type Locale } from '../../../lib/clientI18n';
import { calculatorCopy } from './copy';

function translateLabel(label: string, locale: Locale): string {
  return localizedResultLabel(label, locale);
}

export function localizeResult(result: CalcResult, locale: Locale): CalcResult {
  if (locale === 'ru') return result;
  return {
    ...result,
    primary: {
      label: translateLabel(result.primary.label, locale),
      value: localizedResultText(result.primary.value, locale),
    },
    secondary: result.secondary.map((row) => ({
      ...row,
      label: translateLabel(row.label, locale),
      value: localizedResultText(row.value, locale),
    })),
    table: result.table
      ? {
          ...result.table,
          title: result.table.title ? translateLabel(result.table.title, locale) : result.table.title,
          columns: result.table.columns.map((column) => translateLabel(column, locale)),
          rows: result.table.rows.map((row) => row.map((cell) => localizedResultText(cell, locale))),
          note: result.table.note ? localizedResultText(result.table.note, locale) : result.table.note,
        }
      : undefined,
    note: result.note ? localizedResultText(result.note, locale) : result.note,
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
