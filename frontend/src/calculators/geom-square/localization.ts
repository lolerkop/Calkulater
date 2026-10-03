import type { CalculatorLocalization } from '../../lib/platform/types';
import { geometryScalarValues } from '../../lib/platform/geometryScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "mode": "Was bekannt ist",
      "unit": "Längeneinheit",
      "side": "Seite",
      "area": "Fläche",
      "perimeter": "Umfang"
    },
    "options": {
      "mm": "Millimeter",
      "cm": "Zentimeter",
      "m": "Meter",
      "side": "die Seite",
      "area": "die Fläche",
      "perimeter": "der Umfang"
    },
    "results": {
      "Площадь": "Fläche",
      "Сторона": "Seite",
      "Периметр": "Umfang",
      "Диагональ": "Diagonale",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...geometryScalarValues.de,
      "Сторона должна быть больше нуля": "Die Seite muss größer als null sein",
      "Площадь должна быть больше нуля": "Die Fläche muss größer als null sein",
      "Периметр должен быть больше нуля": "Der Umfang muss größer als null sein",
      "Значение слишком велико для расчёта": "Der Wert ist zu groß für die Rechnung"
    }
  },
  "en": {
    "fields": {
      "mode": "What is known",
      "unit": "Length unit",
      "side": "Side",
      "area": "Area",
      "perimeter": "Perimeter"
    },
    "options": {
      "mm": "millimetres",
      "cm": "centimetres",
      "m": "metres",
      "side": "the side",
      "area": "the area",
      "perimeter": "the perimeter"
    },
    "results": {
      "Площадь": "Area",
      "Сторона": "Side",
      "Периметр": "Perimeter",
      "Диагональ": "Diagonal",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...geometryScalarValues.en,
      "Сторона должна быть больше нуля": "The side must be greater than zero",
      "Площадь должна быть больше нуля": "The area must be greater than zero",
      "Периметр должен быть больше нуля": "The perimeter must be greater than zero",
      "Значение слишком велико для расчёта": "The value is too large to calculate"
    }
  },
  "uk": {
    "fields": {
      "mode": "Що відомо",
      "unit": "Одиниця довжини",
      "side": "Сторона",
      "area": "Площа",
      "perimeter": "Периметр"
    },
    "options": {
      "mm": "міліметри",
      "cm": "сантиметри",
      "m": "метри",
      "side": "сторона",
      "area": "площа",
      "perimeter": "периметр"
    },
    "results": {
      "Площадь": "Площа",
      "Сторона": "Сторона",
      "Периметр": "Периметр",
      "Диагональ": "Діагональ",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...geometryScalarValues.uk,
      "Сторона должна быть больше нуля": "Сторона має бути більшою за нуль",
      "Площадь должна быть больше нуля": "Площа має бути більшою за нуль",
      "Периметр должен быть больше нуля": "Периметр має бути більшим за нуль",
      "Значение слишком велико для расчёта": "Значення завелике для розрахунку"
    }
  },
  "es": {
    "fields": {
      "unit": "Unidad de longitud",
      "mode": "Dato conocido",
      "side": "Lado",
      "area": "Área",
      "perimeter": "Perímetro"
    },
    "options": {
      "mm": "milímetros",
      "cm": "centímetros",
      "m": "metros",
      "side": "el lado",
      "area": "el área",
      "perimeter": "el perímetro"
    },
    "results": {
      "Площадь": "Área",
      "Сторона": "Lado",
      "Периметр": "Perímetro",
      "Диагональ": "Diagonal",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...geometryScalarValues.es,
      "Значение слишком велико для расчёта": "El valor es demasiado grande para calcularlo",
      "Сторона должна быть больше нуля": "El lado debe ser mayor que cero",
      "Площадь должна быть больше нуля": "El área debe ser mayor que cero",
      "Периметр должен быть больше нуля": "El perímetro debe ser mayor que cero"
    }
  }
};
