import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, Record<string, string>> = {
  "cogs": {
    "ru": "Себестоимость за целый год на той же базе, что запас. Дни используют 365; это не поле для месячных продаж.",
    "en": "COGS for a full year on the inventory valuation basis. Days use 365; this is not a monthly-sales field.",
    "uk": "Собівартість за повний рік на тій самій базі, що запас. Дні використовують 365; це не поле місячних продажів.",
    "de": "Wareneinsatz eines ganzen Jahres auf gleicher Bewertungsbasis wie der Bestand. Tage verwenden 365, nicht Monatsverkäufe.",
    "es": "Coste de ventas de un año completo con la valoración del inventario. Los días usan 365, no ventas mensuales."
  }
};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const text = help[field.name];
  return text ? { ...field, help: text[locale] ?? text.en } : field;
};
