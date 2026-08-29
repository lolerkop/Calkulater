import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'unit': 'Längeneinheit',
      'R': 'Äußerer Radius',
      'r': 'Innerer Radius',
    },
    options: {
      'mm': 'Millimeter',
      'cm': 'Zentimeter',
      'm': 'Meter',
    },
    results: {
      'Площадь': 'Fläche',
      'Ширина кольца': 'Breite des Rings',
      'Внешняя окружность': 'Äußerer Umfang',
      'Внутренняя окружность': 'Innerer Umfang',
      'Средний радиус': 'Mittlerer Radius',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'мм': 'mm',
      'см': 'cm',
      'м': 'm',
      'мм²': 'mm²',
      'см²': 'cm²',
      'м²': 'm²',
      'мм³': 'mm³',
      'см³': 'cm³',
      'м³': 'm³',
      'Внешний радиус должен быть больше нуля': 'Der äußere Radius muss größer als null sein',
      'Внутренний радиус не может быть отрицательным': 'Der innere Radius kann nicht negativ sein',
      'Внутренний радиус должен быть меньше внешнего': 'Der innere Radius muss kleiner als der äußere sein',
    },
  },
  en: {
    fields: { "unit": "Length unit", "R": "Outer radius", "r": "Inner radius" },
    options: {
      "mm": "millimetres", "cm": "centimetres", "m": "metres",
    },
    results: {
      "Площадь": "Area",
      "Ширина кольца": "Ring width",
      "Внешняя окружность": "Outer circumference",
      "Внутренняя окружность": "Inner circumference",
      "Средний радиус": "Mean radius",
      "Проверьте данные": "Check the values",
    },
    values: {
      "мм": "mm", "см": "cm", "м": "m",
      "мм²": "mm²", "см²": "cm²", "м²": "m²",
      "мм³": "mm³", "см³": "cm³", "м³": "m³",
      "Внешний радиус должен быть больше нуля": "The outer radius must be greater than zero",
      "Внутренний радиус не может быть отрицательным": "The inner radius cannot be negative",
      "Внутренний радиус должен быть меньше внешнего": "The inner radius must be smaller than the outer one",
    },
  },
  uk: {
    fields: { "unit": "Одиниця довжини", "R": "Зовнішній радіус", "r": "Внутрішній радіус" },
    options: {
      "mm": "міліметри", "cm": "сантиметри", "m": "метри",
    },
    results: {
      "Площадь": "Площа",
      "Ширина кольца": "Ширина кільця",
      "Внешняя окружность": "Зовнішнє коло",
      "Внутренняя окружность": "Внутрішнє коло",
      "Средний радиус": "Середній радіус",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "мм": "мм", "см": "см", "м": "м",
      "мм²": "мм²", "см²": "см²", "м²": "м²",
      "мм³": "мм³", "см³": "см³", "м³": "м³",
      "Внешний радиус должен быть больше нуля": "Зовнішній радіус має бути більшим за нуль",
      "Внутренний радиус не может быть отрицательным": "Внутрішній радіус не може бути від'ємним",
      "Внутренний радиус должен быть меньше внешнего": "Внутрішній радіус має бути меншим за зовнішній",
    },
  },
};
