import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, Record<string, string>> = {
  "actualCycle": {
    "ru": "Средние минуты на единицу.0 означает, что цикл неизвестен; сравнение и возможный выпуск тогда не выводятся.",
    "en": "Average minutes per unit.0 means the cycle is unknown; comparison and capacity are then omitted.",
    "uk": "Середні хвилини на одиницю.0 означає невідомий цикл; порівняння та випуск тоді не показуються.",
    "de": "Mittlere Minuten je Stück.0 bedeutet unbekannten Zyklus; Vergleich und Ausstoß entfallen dann.",
    "es": "Minutos medios por unidad.0 indica ciclo desconocido; se omiten comparación y capacidad."
  }
};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const text = help[field.name];
  return text ? { ...field, help: text[locale] ?? text.en } : field;
};
