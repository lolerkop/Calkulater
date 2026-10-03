import type { CalculatorLocalization } from '../../lib/platform/types';
import { mechanicsScalarValues } from '../../lib/platform/mechanicsScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "mode": "Was gesucht ist",
      "m": "Masse",
      "a": "Beschleunigungsbetrag",
      "F": "Betrag der resultierenden Kraft",
      "a2": "Beschleunigungsbetrag",
      "F2": "Betrag der resultierenden Kraft",
      "m2": "Masse"
    },
    "options": {
      "mm": "Millimeter",
      "cm": "Zentimeter",
      "m": "die Masse",
      "F": "die Kraft",
      "a": "die Beschleunigung"
    },
    "results": {
      "Сила": "Kraft",
      "Масса": "Masse",
      "Ускорение": "Beschleunigung",
      "Вес у поверхности Земли": "Gewicht an der Erdoberfläche",
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
      "Н": "N",
      "кг": "kg",
      "м/с²": "m/s²",
      "Масса должна быть больше нуля": "Die Masse muss größer als null sein",
      "Ускорение не может быть отрицательным": "Die Beschleunigung kann nicht negativ sein",
      "Сила не может быть отрицательной": "Die Kraft darf nicht negativ sein",
      "Ускорение должно быть больше нуля, иначе масса не определена": "Die Beschleunigung muss größer als null sein, sonst ist die Masse nicht bestimmt",
      "Масса должна быть больше нуля, иначе ускорение не определено": "Die Masse muss größer als null sein, sonst ist die Beschleunigung nicht bestimmt",
      "Для положительной массы сила и ускорение должны быть больше нуля": "Für eine positive Masse müssen Kraft und Beschleunigung größer als null sein"
    }
  },
  "en": {
    "fields": {
      "mode": "What to find",
      "m": "Mass",
      "a": "Acceleration magnitude",
      "F": "Net force magnitude",
      "a2": "Acceleration magnitude",
      "F2": "Net force magnitude",
      "m2": "Mass"
    },
    "options": {
      "mm": "millimetres",
      "cm": "centimetres",
      "m": "the mass",
      "F": "the force",
      "a": "the acceleration"
    },
    "results": {
      "Сила": "Force",
      "Масса": "Mass",
      "Ускорение": "Acceleration",
      "Вес у поверхности Земли": "Weight at Earth's surface",
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
      "Н": "N",
      "кг": "kg",
      "м/с²": "m/s²",
      "Масса должна быть больше нуля": "The mass must be greater than zero",
      "Ускорение не может быть отрицательным": "The acceleration cannot be negative",
      "Сила не может быть отрицательной": "Force cannot be negative",
      "Ускорение должно быть больше нуля, иначе масса не определена": "The acceleration must be greater than zero, otherwise the mass is undetermined",
      "Масса должна быть больше нуля, иначе ускорение не определено": "The mass must be greater than zero, otherwise the acceleration is undetermined",
      "Для положительной массы сила и ускорение должны быть больше нуля": "For a positive mass, force and acceleration must be greater than zero"
    }
  },
  "uk": {
    "fields": {
      "mode": "Що знайти",
      "m": "Маса",
      "a": "Модуль прискорення",
      "F": "Модуль рівнодійної",
      "a2": "Модуль прискорення",
      "F2": "Модуль рівнодійної",
      "m2": "Маса"
    },
    "options": {
      "mm": "міліметри",
      "cm": "сантиметри",
      "m": "масу",
      "F": "силу",
      "a": "прискорення"
    },
    "results": {
      "Сила": "Сила",
      "Масса": "Маса",
      "Ускорение": "Прискорення",
      "Вес у поверхности Земли": "Вага біля поверхні Землі",
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
      "Н": "Н",
      "кг": "кг",
      "м/с²": "м/с²",
      "Масса должна быть больше нуля": "Маса має бути більшою за нуль",
      "Ускорение не может быть отрицательным": "Прискорення не може бути від’ємним",
      "Сила не может быть отрицательной": "Сила не може бути від’ємною",
      "Ускорение должно быть больше нуля, иначе масса не определена": "Прискорення має бути більшим за нуль, інакше маса не визначена",
      "Масса должна быть больше нуля, иначе ускорение не определено": "Маса має бути більшою за нуль, інакше прискорення не визначене",
      "Для положительной массы сила и ускорение должны быть больше нуля": "Для додатної маси сила й прискорення мають бути більшими за нуль"
    }
  },
  "es": {
    "fields": {
      "mode": "Qué hallar",
      "m": "Masa",
      "a": "Módulo de aceleración",
      "F": "Módulo de la fuerza resultante",
      "a2": "Módulo de aceleración",
      "F2": "Módulo de la fuerza resultante",
      "m2": "Masa"
    },
    "options": {
      "F": "la fuerza",
      "m": "la masa",
      "a": "la aceleración",
      "mm": "milímetros",
      "cm": "centímetros"
    },
    "results": {
      "Сила": "Fuerza",
      "Масса": "Masa",
      "Ускорение": "Aceleración",
      "Вес у поверхности Земли": "Peso en la superficie de la Tierra",
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
      "Н": "N",
      "кг": "kg",
      "м/с²": "m/s²",
      "Масса должна быть больше нуля": "La masa debe ser mayor que cero",
      "Ускорение не может быть отрицательным": "La aceleración no puede ser negativa",
      "Сила не может быть отрицательной": "La fuerza no puede ser negativa",
      "Ускорение должно быть больше нуля, иначе масса не определена": "La aceleración debe ser mayor que cero; de lo contrario la masa queda indeterminada",
      "Масса должна быть больше нуля, иначе ускорение не определено": "La masa debe ser mayor que cero; de lo contrario la aceleración queda indeterminada",
      "Для положительной массы сила и ускорение должны быть больше нуля": "Para una masa positiva, fuerza y aceleración deben ser mayores que cero"
    }
  }
};
