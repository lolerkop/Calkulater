import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { "unit": "Length unit", "d1": "Diagonal d₁", "d2": "Diagonal d₂" },
    options: {
      "mm": "millimetres", "cm": "centimetres", "m": "metres",
    },
    results: {
      "Площадь": "Area",
      "Сторона": "Side",
      "Периметр": "Perimeter",
      "Высота": "Height",
      "Проверьте данные": "Check the values",
    },
    values: {
      "мм": "mm", "см": "cm", "м": "m",
      "мм²": "mm²", "см²": "cm²", "м²": "m²",
      "мм³": "mm³", "см³": "cm³", "м³": "m³",
      "Обе диагонали должны быть больше нуля": "Both diagonals must be greater than zero",
    },
  },
  uk: {
    fields: { "unit": "Одиниця довжини", "d1": "Діагональ d₁", "d2": "Діагональ d₂" },
    options: {
      "mm": "міліметри", "cm": "сантиметри", "m": "метри",
    },
    results: {
      "Площадь": "Площа",
      "Сторона": "Сторона",
      "Периметр": "Периметр",
      "Высота": "Висота",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "мм": "мм", "см": "см", "м": "м",
      "мм²": "мм²", "см²": "см²", "м²": "м²",
      "мм³": "мм³", "см³": "см³", "м³": "м³",
      "Обе диагонали должны быть больше нуля": "Обидві діагоналі мають бути більшими за нуль",
    },
  },
};
