import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, Record<string, string>> = {
  "gross": {
    "ru": "Начисленный оклад до личных удержаний, не зарплата на руки. Все расходы относятся к одному периоду.",
    "en": "Gross salary before employee deductions, not take-home pay. All costs refer to one period.",
    "uk": "Нарахований оклад до особистих утримань, не зарплата на руки. Усі витрати стосуються одного періоду.",
    "de": "Bruttogehalt vor persönlichen Abzügen, nicht Nettolohn. Alle Kosten betreffen denselben Zeitraum.",
    "es": "Salario bruto antes de deducciones personales, no sueldo neto. Todos los costes pertenecen a un periodo."
  }
};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const text = help[field.name];
  return text ? { ...field, help: text[locale] ?? text.en } : field;
};
