import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { "unit": "Length unit", "a": "Semi-axis a", "b": "Semi-axis b" },
    options: {
      "mm": "millimetres", "cm": "centimetres", "m": "metres",
    },
    results: {
      "Площадь": "Area",
      "Периметр (Рамануджан)": "Perimeter (Ramanujan)",
      "Эксцентриситет": "Eccentricity",
      "Расстояние между фокусами": "Distance between foci",
      "Большая полуось": "Semi-major axis",
      "Малая полуось": "Semi-minor axis",
      "Проверьте данные": "Check the values",
    },
    values: {
      "мм": "mm", "см": "cm", "м": "m",
      "мм²": "mm²", "см²": "cm²", "м²": "m²",
      "мм³": "mm³", "см³": "cm³", "м³": "m³",
      "Обе полуоси должны быть больше нуля": "Both semi-axes must be greater than zero",
    },
  },
  uk: {
    fields: { "unit": "Одиниця довжини", "a": "Піввісь a", "b": "Піввісь b" },
    options: {
      "mm": "міліметри", "cm": "сантиметри", "m": "метри",
    },
    results: {
      "Площадь": "Площа",
      "Периметр (Рамануджан)": "Периметр (Рамануджан)",
      "Эксцентриситет": "Ексцентриситет",
      "Расстояние между фокусами": "Відстань між фокусами",
      "Большая полуось": "Велика піввісь",
      "Малая полуось": "Мала піввісь",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "мм": "мм", "см": "см", "м": "м",
      "мм²": "мм²", "см²": "см²", "м²": "м²",
      "мм³": "мм³", "см³": "см³", "м³": "м³",
      "Обе полуоси должны быть больше нуля": "Обидві піввісі мають бути більшими за нуль",
    },
  },
};
