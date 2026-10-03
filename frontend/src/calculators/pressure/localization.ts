import type { CalculatorLocalization } from '../../lib/platform/types';
import { mechanicsScalarValues } from '../../lib/platform/mechanicsScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "mode": "Was gesucht ist",
      "F": "Normalkraft",
      "A": "Fläche",
      "p": "Druck",
      "A2": "Fläche",
      "F2": "Normalkraft",
      "p2": "Druck"
    },
    "options": {
      "mm": "Millimeter",
      "cm": "Zentimeter",
      "m": "Meter",
      "p": "der Druck",
      "F": "die Kraft",
      "A": "die Fläche"
    },
    "results": {
      "Давление": "Druck",
      "Сила": "Kraft",
      "Площадь": "Fläche",
      "В атмосферах": "In Atmosphären",
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
      "Па": "Pa",
      "Н": "N",
      "атм": "atm",
      "Площадь должна быть больше нуля": "Die Fläche muss größer als null sein",
      "Сила должна быть больше нуля": "Die Kraft muss größer als null sein",
      "Давление должно быть больше нуля": "Der Druck muss größer als null sein",
      "Для положительной площади сила и давление должны быть больше нуля": "Für eine positive Fläche müssen Kraft und Druck größer als null sein",
      "Давление не может быть отрицательным": "Der Druck darf nicht negativ sein",
      "Сила не может быть отрицательной": "Die Kraft darf nicht negativ sein"
    }
  },
  "en": {
    "fields": {
      "mode": "What to find",
      "F": "Normal force",
      "A": "Area",
      "p": "Pressure",
      "A2": "Area",
      "F2": "Normal force",
      "p2": "Pressure"
    },
    "options": {
      "mm": "millimetres",
      "cm": "centimetres",
      "m": "metres",
      "p": "the pressure",
      "F": "the force",
      "A": "the area"
    },
    "results": {
      "Давление": "Pressure",
      "Сила": "Force",
      "Площадь": "Area",
      "В атмосферах": "In atmospheres",
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
      "Па": "Pa",
      "Н": "N",
      "атм": "atm",
      "Площадь должна быть больше нуля": "The area must be greater than zero",
      "Сила должна быть больше нуля": "The force must be greater than zero",
      "Давление должно быть больше нуля": "The pressure must be greater than zero",
      "Для положительной площади сила и давление должны быть больше нуля": "For a positive area, force and pressure must be greater than zero",
      "Давление не может быть отрицательным": "Pressure cannot be negative",
      "Сила не может быть отрицательной": "Force cannot be negative"
    }
  },
  "uk": {
    "fields": {
      "mode": "Що знайти",
      "F": "Нормальна сила",
      "A": "Площа",
      "p": "Тиск",
      "A2": "Площа",
      "F2": "Нормальна сила",
      "p2": "Тиск"
    },
    "options": {
      "mm": "міліметри",
      "cm": "сантиметри",
      "m": "метри",
      "p": "тиск",
      "F": "силу",
      "A": "площу"
    },
    "results": {
      "Давление": "Тиск",
      "Сила": "Сила",
      "Площадь": "Площа",
      "В атмосферах": "В атмосферах",
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
      "Па": "Па",
      "Н": "Н",
      "атм": "атм",
      "Площадь должна быть больше нуля": "Площа має бути більшою за нуль",
      "Сила должна быть больше нуля": "Сила має бути більшою за нуль",
      "Давление должно быть больше нуля": "Тиск має бути більшим за нуль",
      "Для положительной площади сила и давление должны быть больше нуля": "Для додатної площі сила й тиск мають бути більшими за нуль",
      "Давление не может быть отрицательным": "Тиск не може бути від’ємним",
      "Сила не может быть отрицательной": "Сила не може бути від’ємною"
    }
  },
  "es": {
    "fields": {
      "mode": "Qué hallar",
      "F": "Fuerza normal",
      "A": "Área",
      "p": "Presión",
      "A2": "Área",
      "F2": "Fuerza normal",
      "p2": "Presión"
    },
    "options": {
      "p": "la presión",
      "F": "la fuerza",
      "A": "el área",
      "mm": "milímetros",
      "cm": "centímetros",
      "m": "metros"
    },
    "results": {
      "Давление": "Presión",
      "Сила": "Fuerza",
      "Площадь": "Área",
      "В атмосферах": "En atmósferas",
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
      "Па": "Pa",
      "Н": "N",
      "атм": "atm",
      "Площадь должна быть больше нуля": "El área debe ser mayor que cero",
      "Сила должна быть больше нуля": "La fuerza debe ser mayor que cero",
      "Давление должно быть больше нуля": "La presión debe ser mayor que cero",
      "Для положительной площади сила и давление должны быть больше нуля": "Para un área positiva, fuerza y presión deben ser mayores que cero",
      "Давление не может быть отрицательным": "La presión no puede ser negativa",
      "Сила не может быть отрицательной": "La fuerza no puede ser negativa"
    }
  }
};
