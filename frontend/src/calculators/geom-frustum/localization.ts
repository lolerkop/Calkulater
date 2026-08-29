import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'unit': 'Längeneinheit',
      'R': 'Unterer Radius',
      'r': 'Oberer Radius',
      'h': 'Höhe',
    },
    options: {
      'mm': 'Millimeter',
      'cm': 'Zentimeter',
      'm': 'Meter',
    },
    results: {
      'Объём': 'Volumen',
      'Образующая': 'Seitenhöhe',
      'Боковая поверхность': 'Mantelfläche',
      'Полная поверхность': 'Gesamtoberfläche',
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
      'Нижний радиус должен быть больше нуля': 'Der untere Radius muss größer als null sein',
      'Верхний радиус не может быть отрицательным': 'Der obere Radius kann nicht negativ sein',
      'Верхний радиус должен быть меньше нижнего': 'Der obere Radius muss kleiner als der untere sein',
      'Высота должна быть больше нуля': 'Die Höhe muss größer als null sein',
    },
  },
  en: {
    fields: { "unit": "Length unit", "R": "Bottom radius", "r": "Top radius", "h": "Height" },
    options: {
      "mm": "millimetres", "cm": "centimetres", "m": "metres",
    },
    results: {
      "Объём": "Volume",
      "Образующая": "Slant height",
      "Боковая поверхность": "Lateral surface",
      "Полная поверхность": "Total surface",
      "Проверьте данные": "Check the values",
    },
    values: {
      "мм": "mm", "см": "cm", "м": "m",
      "мм²": "mm²", "см²": "cm²", "м²": "m²",
      "мм³": "mm³", "см³": "cm³", "м³": "m³",
      "Нижний радиус должен быть больше нуля": "The bottom radius must be greater than zero",
      "Верхний радиус не может быть отрицательным": "The top radius cannot be negative",
      "Верхний радиус должен быть меньше нижнего": "The top radius must be smaller than the bottom one",
      "Высота должна быть больше нуля": "The height must be greater than zero",
    },
  },
  uk: {
    fields: { "unit": "Одиниця довжини", "R": "Нижній радіус", "r": "Верхній радіус", "h": "Висота" },
    options: {
      "mm": "міліметри", "cm": "сантиметри", "m": "метри",
    },
    results: {
      "Объём": "Об’єм",
      "Образующая": "Твірна",
      "Боковая поверхность": "Бічна поверхня",
      "Полная поверхность": "Повна поверхня",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "мм": "мм", "см": "см", "м": "м",
      "мм²": "мм²", "см²": "см²", "м²": "м²",
      "мм³": "мм³", "см³": "см³", "м³": "м³",
      "Нижний радиус должен быть больше нуля": "Нижній радіус має бути більшим за нуль",
      "Верхний радиус не может быть отрицательным": "Верхній радіус не може бути від'ємним",
      "Верхний радиус должен быть меньше нижнего": "Верхній радіус має бути меншим за нижній",
      "Высота должна быть больше нуля": "Висота має бути більшою за нуль",
    },
  },
};
