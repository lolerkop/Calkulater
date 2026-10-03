import type { CalculatorLocalization } from '../../lib/platform/types';
import { geometryScalarValues } from '../../lib/platform/geometryScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "unit": "Längeneinheit",
      "d1": "Diagonale d₁",
      "d2": "Diagonale d₂"
    },
    "options": {
      "mm": "Millimeter",
      "cm": "Zentimeter",
      "m": "Meter"
    },
    "results": {
      "Площадь": "Fläche",
      "Сторона": "Seite",
      "Периметр": "Umfang",
      "Высота": "Höhe",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...geometryScalarValues.de,
      "Обе диагонали должны быть больше нуля": "Beide Diagonalen müssen größer als null sein"
    }
  },
  "en": {
    "fields": {
      "unit": "Length unit",
      "d1": "Diagonal d₁",
      "d2": "Diagonal d₂"
    },
    "options": {
      "mm": "millimetres",
      "cm": "centimetres",
      "m": "metres"
    },
    "results": {
      "Площадь": "Area",
      "Сторона": "Side",
      "Периметр": "Perimeter",
      "Высота": "Height",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...geometryScalarValues.en,
      "Обе диагонали должны быть больше нуля": "Both diagonals must be greater than zero"
    }
  },
  "uk": {
    "fields": {
      "unit": "Одиниця довжини",
      "d1": "Діагональ d₁",
      "d2": "Діагональ d₂"
    },
    "options": {
      "mm": "міліметри",
      "cm": "сантиметри",
      "m": "метри"
    },
    "results": {
      "Площадь": "Площа",
      "Сторона": "Сторона",
      "Периметр": "Периметр",
      "Высота": "Висота",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...geometryScalarValues.uk,
      "Обе диагонали должны быть больше нуля": "Обидві діагоналі мають бути більшими за нуль"
    }
  },
  "es": {
    "fields": {
      "unit": "Unidad de longitud",
      "d1": "Diagonal d₁",
      "d2": "Diagonal d₂"
    },
    "options": {
      "mm": "milímetros",
      "cm": "centímetros",
      "m": "metros"
    },
    "results": {
      "Площадь": "Área",
      "Сторона": "Lado",
      "Периметр": "Perímetro",
      "Высота": "Altura",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...geometryScalarValues.es,
      "Обе диагонали должны быть больше нуля": "Ambas diagonales deben ser mayores que cero"
    }
  }
};
