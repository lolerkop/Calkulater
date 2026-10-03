import type { CalculatorLocalization } from '../../lib/platform/types';
import { mechanicsScalarValues } from '../../lib/platform/mechanicsScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
    "fields": {
      "mode": "What to find",
      "m": "Mass",
      "V": "Volume",
      "rho": "Density",
      "V2": "Volume",
      "m2": "Mass",
      "rho2": "Density"
    },
    "options": {
      "mm": "millimetres",
      "cm": "centimetres",
      "m": "the mass",
      "rho": "the density",
      "V": "the volume"
    },
    "results": {
      "Плотность": "Density",
      "Масса": "Mass",
      "Объём": "Volume",
      "В граммах на кубический сантиметр": "In grams per cubic centimetre",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...mechanicsScalarValues.en,
      "мм": "mm",
      "см": "cm",
      "м": "m",
      "мм²": "mm²",
      "см²": "cm²",
      "м²": "m²",
      "мм³": "mm³",
      "см³": "cm³",
      "м³": "m³",
      "кг/м³": "kg/m³",
      "кг": "kg",
      "г/см³": "g/cm³",
      "Объём должен быть больше нуля": "The volume must be greater than zero",
      "Масса должна быть больше нуля": "The mass must be greater than zero",
      "Плотность должна быть больше нуля": "The density must be greater than zero",
      "Масса не может быть отрицательной": "Mass cannot be negative",
      "Плотность не может быть отрицательной": "Density cannot be negative",
      "Для положительного объёма масса и плотность должны быть больше нуля": "For a positive volume, mass and density must be greater than zero"
    }
  },
  "uk": {
    "fields": {
      "mode": "Що знайти",
      "m": "Маса",
      "V": "Об’єм",
      "rho": "Густина",
      "V2": "Об’єм",
      "m2": "Маса",
      "rho2": "Густина"
    },
    "options": {
      "mm": "міліметри",
      "cm": "сантиметри",
      "m": "масу",
      "rho": "густину",
      "V": "об’єм"
    },
    "results": {
      "Плотность": "Густина",
      "Масса": "Маса",
      "Объём": "Об’єм",
      "В граммах на кубический сантиметр": "У грамах на кубічний сантиметр",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...mechanicsScalarValues.uk,
      "мм": "мм",
      "см": "см",
      "м": "м",
      "мм²": "мм²",
      "см²": "см²",
      "м²": "м²",
      "мм³": "мм³",
      "см³": "см³",
      "м³": "м³",
      "кг/м³": "кг/м³",
      "кг": "кг",
      "г/см³": "г/см³",
      "Объём должен быть больше нуля": "Об’єм має бути більшим за нуль",
      "Масса должна быть больше нуля": "Маса має бути більшою за нуль",
      "Плотность должна быть больше нуля": "Густина має бути більшою за нуль",
      "Масса не может быть отрицательной": "Маса не може бути від’ємною",
      "Плотность не может быть отрицательной": "Густина не може бути від’ємною",
      "Для положительного объёма масса и плотность должны быть больше нуля": "Для додатного об’єму маса й густина мають бути більшими за нуль"
    }
  },
  "de": {
    "fields": {
      "mode": "Was gesucht ist",
      "m": "Masse",
      "V": "Volumen",
      "rho": "Dichte",
      "V2": "Volumen",
      "m2": "Masse",
      "rho2": "Dichte"
    },
    "options": {
      "mm": "Millimeter",
      "cm": "Zentimeter",
      "m": "die Masse",
      "rho": "die Dichte",
      "V": "das Volumen"
    },
    "results": {
      "Плотность": "Dichte",
      "Масса": "Masse",
      "Объём": "Volumen",
      "В граммах на кубический сантиметр": "In Gramm je Kubikzentimeter",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...mechanicsScalarValues.de,
      "мм": "mm",
      "см": "cm",
      "м": "m",
      "мм²": "mm²",
      "см²": "cm²",
      "м²": "m²",
      "мм³": "mm³",
      "см³": "cm³",
      "м³": "m³",
      "кг/м³": "kg/m³",
      "кг": "kg",
      "г/см³": "g/cm³",
      "Объём должен быть больше нуля": "Das Volumen muss größer als null sein",
      "Масса должна быть больше нуля": "Die Masse muss größer als null sein",
      "Плотность должна быть больше нуля": "Die Dichte muss größer als null sein",
      "Масса не может быть отрицательной": "Die Masse darf nicht negativ sein",
      "Плотность не может быть отрицательной": "Die Dichte darf nicht negativ sein",
      "Для положительного объёма масса и плотность должны быть больше нуля": "Für ein positives Volumen müssen Masse und Dichte größer als null sein"
    }
  },
  "es": {
    "fields": {
      "mode": "Qué hallar",
      "m": "Masa",
      "V": "Volumen",
      "rho": "Densidad",
      "V2": "Volumen",
      "m2": "Masa",
      "rho2": "Densidad"
    },
    "options": {
      "rho": "la densidad",
      "m": "la masa",
      "V": "el volumen",
      "mm": "milímetros",
      "cm": "centímetros"
    },
    "results": {
      "Плотность": "Densidad",
      "Масса": "Masa",
      "Объём": "Volumen",
      "В граммах на кубический сантиметр": "En gramos por centímetro cúbico",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...mechanicsScalarValues.es,
      "мм": "mm",
      "см": "cm",
      "м": "m",
      "мм²": "mm²",
      "см²": "cm²",
      "м²": "m²",
      "мм³": "mm³",
      "см³": "cm³",
      "м³": "m³",
      "кг/м³": "kg/m³",
      "кг": "kg",
      "г/см³": "g/cm³",
      "Объём должен быть больше нуля": "El volumen debe ser mayor que cero",
      "Масса должна быть больше нуля": "La masa debe ser mayor que cero",
      "Плотность должна быть больше нуля": "La densidad debe ser mayor que cero",
      "Масса не может быть отрицательной": "La masa no puede ser negativa",
      "Плотность не может быть отрицательной": "La densidad no puede ser negativa",
      "Для положительного объёма масса и плотность должны быть больше нуля": "Para un volumen positivo, masa y densidad deben ser mayores que cero"
    }
  }
};
