import { geometryWave8ScalarValues } from '../../lib/platform/geometryWave8ScalarLocalization';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  "en": {
    "fields": {
      "a": "Bottom base side",
      "b": "Top base side",
      "h": "Height"
    },
    "options": {},
    "results": {
      "Объём": "Volume",
      "Апофема": "Slant height",
      "Боковая поверхность": "Lateral area",
      "Полная поверхность": "Total area",
      "Площади оснований": "Base areas",
      "Проверьте данные": "Check the values",
      "Единица площадей оснований": "Base-area unit"
    },
    "values": {
      ...geometryWave8ScalarValues.en,
      "и": "and",
      "Сторона основания должна быть больше нуля": "The base side must be greater than zero",
      "Высота должна быть больше нуля": "The height must be greater than zero",
      "При равных основаниях это призма, а не усечённая пирамида": "With equal bases this is a prism, not a frustum"
    }
  },
  "uk": {
    "fields": {
      "a": "Сторона нижньої основи",
      "b": "Сторона верхньої основи",
      "h": "Висота"
    },
    "options": {},
    "results": {
      "Объём": "Обʼєм",
      "Апофема": "Апофема",
      "Боковая поверхность": "Бічна поверхня",
      "Полная поверхность": "Повна поверхня",
      "Площади оснований": "Площі основ",
      "Проверьте данные": "Перевірте дані",
      "Единица площадей оснований": "Одиниця площ основ"
    },
    "values": {
      ...geometryWave8ScalarValues.uk,
      "и": "і",
      "Сторона основания должна быть больше нуля": "Сторона основи має бути більшою за нуль",
      "Высота должна быть больше нуля": "Висота має бути більшою за нуль",
      "При равных основаниях это призма, а не усечённая пирамида": "За рівних основ це призма, а не зрізана піраміда"
    }
  },
  "de": {
    "fields": {
      "a": "Untere Grundkante",
      "b": "Obere Grundkante",
      "h": "Höhe"
    },
    "options": {},
    "results": {
      "Объём": "Volumen",
      "Апофема": "Seitenhöhe",
      "Боковая поверхность": "Mantelfläche",
      "Полная поверхность": "Gesamtoberfläche",
      "Площади оснований": "Flächen der Grundflächen",
      "Проверьте данные": "Prüfe die Werte",
      "Единица площадей оснований": "Einheit der Grundflächen"
    },
    "values": {
      ...geometryWave8ScalarValues.de,
      "и": "und",
      "Сторона основания должна быть больше нуля": "Die Grundkante muss größer als null sein",
      "Высота должна быть больше нуля": "Die Höhe muss größer als null sein",
      "При равных основаниях это призма, а не усечённая пирамида": "Bei gleichen Grundflächen ist das ein Prisma und kein Pyramidenstumpf"
    }
  },
  "es": {
    "fields": {
      "a": "Lado de la base inferior",
      "b": "Lado de la base superior",
      "h": "Altura"
    },
    "options": {},
    "results": {
      "Объём": "Volumen",
      "Апофема": "Apotema lateral",
      "Боковая поверхность": "Superficie lateral",
      "Полная поверхность": "Superficie total",
      "Площади оснований": "Áreas de las bases",
      "Проверьте данные": "Revisa los datos",
      "Единица площадей оснований": "Unidad de las áreas de base"
    },
    "values": {
      ...geometryWave8ScalarValues.es,
      "и": "y",
      "Сторона основания должна быть больше нуля": "El lado de la base debe ser mayor que cero",
      "Высота должна быть больше нуля": "La altura debe ser mayor que cero",
      "При равных основаниях это призма, а не усечённая пирамида": "Con bases iguales esto es un prisma, no un tronco de pirámide"
    }
  }
};
