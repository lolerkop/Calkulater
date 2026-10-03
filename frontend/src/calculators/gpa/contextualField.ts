import type { CalculatorContextualField } from '../../lib/platform/types';
const help = {
  "ru": {
    "grades": "В каждой строке одна неотрицательная оценка и необязательный положительный вес после пробела; без веса используется 1."
  },
  "en": {
    "grades": "One non-negative grade per row, optionally followed by a positive weight; an omitted weight is 1."
  },
  "uk": {
    "grades": "У рядку одна невід’ємна оцінка та необов’язкова додатна вага після пробілу; без ваги використовується 1."
  },
  "de": {
    "grades": "Je Zeile eine nichtnegative Note und optional ein positives Gewicht nach einem Leerzeichen; ohne Gewicht gilt 1."
  },
  "es": {
    "grades": "Una nota no negativa por fila, seguida opcionalmente de un peso positivo; el peso omitido vale 1."
  }
};
export const contextualField: CalculatorContextualField = (field, _values, locale) => {
  const entry = help[locale as keyof typeof help] ?? help.en;
  const text = entry[field.name as keyof typeof entry];
  return text ? {...field, help: text} : field;
};
