import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Площадь': 'Area', 'Сторона': 'Side', 'Периметр': 'Perimeter', 'Диагональ': 'Diagonal',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Площадь': 'Площа', 'Сторона': 'Сторона', 'Периметр': 'Периметр', 'Диагональ': 'Діагональ',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was bekannt ist',
      'unit': 'Längeneinheit',
      'side': 'Seite',
      'area': 'Fläche',
      'perimeter': 'Umfang',
    },
    options: {
      'mm': 'Millimeter',
      'cm': 'Zentimeter',
      'm': 'Meter',
      'side': 'die Seite',
      'area': 'die Fläche',
      'perimeter': 'der Umfang',
    },
    results: {
      'Площадь': 'Fläche',
      'Сторона': 'Seite',
      'Периметр': 'Umfang',
      'Диагональ': 'Diagonale',
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
      'Сторона должна быть больше нуля': 'Die Seite muss größer als null sein',
      'Площадь должна быть больше нуля': 'Die Fläche muss größer als null sein',
      'Периметр должен быть больше нуля': 'Der Umfang muss größer als null sein',
      'Значение слишком велико для расчёта': 'Der Wert ist zu groß für die Rechnung',
    },
  },
  en: {
    fields: { mode: 'What is known', unit: 'Length unit', side: 'Side', area: 'Area', perimeter: 'Perimeter' },
    options: {
      mm: "millimetres",
      cm: "centimetres",
      m: "metres",
      side: 'the side', area: 'the area', perimeter: 'the perimeter',
    },
    results: RESULTS_EN,
    values: {
      "мм": "mm",
      "см": "cm",
      "м": "m",
      "мм²": "mm²",
      "см²": "cm²",
      "м²": "m²",
      "мм³": "mm³",
      "см³": "cm³",
      "м³": "m³",
      'Сторона должна быть больше нуля': 'The side must be greater than zero',
      'Площадь должна быть больше нуля': 'The area must be greater than zero',
      'Периметр должен быть больше нуля': 'The perimeter must be greater than zero',
      'Значение слишком велико для расчёта': 'The value is too large to calculate',
    },
  },
  uk: {
    fields: { mode: 'Що відомо', unit: 'Одиниця довжини', side: 'Сторона', area: 'Площа', perimeter: 'Периметр' },
    options: {
      mm: "міліметри",
      cm: "сантиметри",
      m: "метри",
      side: 'сторона', area: 'площа', perimeter: 'периметр',
    },
    results: RESULTS_UK,
    values: {
      "мм": "мм",
      "см": "см",
      "м": "м",
      "мм²": "мм²",
      "см²": "см²",
      "м²": "м²",
      "мм³": "мм³",
      "см³": "см³",
      "м³": "м³",
      'Сторона должна быть больше нуля': 'Сторона має бути більшою за нуль',
      'Площадь должна быть больше нуля': 'Площа має бути більшою за нуль',
      'Периметр должен быть больше нуля': 'Периметр має бути більшим за нуль',
      'Значение слишком велико для расчёта': 'Значення завелике для розрахунку',
    },
  },
};
