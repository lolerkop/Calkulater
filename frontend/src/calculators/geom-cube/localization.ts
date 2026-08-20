import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "unit": "Length unit",
      "mode": "What is known",
      "side": "Edge",
      "volume": "Volume",
      "area": "Surface area",
    },
    options: {
      "mm": "millimetres",
      "cm": "centimetres",
      "m": "metres",
      "side": "edge",
      "volume": "volume",
      "area": "surface area",
    },
    results: {
      "Объём": "Volume",
      "Ребро": "Edge",
      "Площадь поверхности": "Surface area",
      "Диагональ куба": "Space diagonal",
      "Диагональ грани": "Face diagonal",
      "Сумма рёбер": "Total edge length",
      "Проверьте данные": "Check the values",
    },
    values: {
      "мм": "mm", "см": "cm", "м": "m",
      "мм²": "mm²", "см²": "cm²", "м²": "m²",
      "мм³": "mm³", "см³": "cm³", "м³": "m³",
      "Ребро должно быть больше нуля": "The edge must be greater than zero",
      "Объём должен быть больше нуля": "The volume must be greater than zero",
      "Площадь поверхности должна быть больше нуля": "The surface area must be greater than zero",
      "Значение слишком велико для расчёта": "The value is too large to compute",
    },
  },
  uk: {
    fields: {
      "unit": "Одиниця довжини",
      "mode": "Що відомо",
      "side": "Ребро",
      "volume": "Об’єм",
      "area": "Площа поверхні",
    },
    options: {
      "mm": "міліметри",
      "cm": "сантиметри",
      "m": "метри",
      "side": "ребро",
      "volume": "об’єм",
      "area": "площа поверхні",
    },
    results: {
      "Объём": "Об’єм",
      "Ребро": "Ребро",
      "Площадь поверхности": "Площа поверхні",
      "Диагональ куба": "Діагональ куба",
      "Диагональ грани": "Діагональ грані",
      "Сумма рёбер": "Сума ребер",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "мм": "мм", "см": "см", "м": "м",
      "мм²": "мм²", "см²": "см²", "м²": "м²",
      "мм³": "мм³", "см³": "см³", "м³": "м³",
      "Ребро должно быть больше нуля": "Ребро має бути більшим за нуль",
      "Объём должен быть больше нуля": "Об’єм має бути більшим за нуль",
      "Площадь поверхности должна быть больше нуля": "Площа поверхні має бути більшою за нуль",
      "Значение слишком велико для расчёта": "Значення завелике для обчислення",
    },
  },
};
