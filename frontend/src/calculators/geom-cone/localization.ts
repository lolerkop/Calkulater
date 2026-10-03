import { geometryWave8ScalarValues } from '../../lib/platform/geometryWave8ScalarLocalization';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "unit": "Längeneinheit",
      "r": "Grundradius",
      "h": "Höhe"
    },
    "options": {
      "mm": "Millimeter",
      "cm": "Zentimeter",
      "m": "Meter"
    },
    "results": {
      "Объём": "Volumen",
      "Образующая": "Seitenhöhe",
      "Боковая поверхность": "Mantelfläche",
      "Полная поверхность": "Gesamtoberfläche",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...geometryWave8ScalarValues.de,
      "Радиус должен быть больше нуля": "Der Radius muss größer als null sein",
      "Высота должна быть больше нуля": "Die Höhe muss größer als null sein",
      "Выберите миллиметры, сантиметры или метры": "Wähle Millimeter, Zentimeter oder Meter",
      "Радиус и высота должны быть больше нуля": "Radius und Höhe müssen positiv sein"
    }
  },
  "en": {
    "fields": {
      "unit": "Length unit",
      "r": "Base radius",
      "h": "Height"
    },
    "options": {
      "mm": "millimetres",
      "cm": "centimetres",
      "m": "metres"
    },
    "results": {
      "Объём": "Volume",
      "Образующая": "Slant height",
      "Боковая поверхность": "Lateral surface",
      "Полная поверхность": "Total surface",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...geometryWave8ScalarValues.en,
      "Радиус должен быть больше нуля": "The radius must be greater than zero",
      "Высота должна быть больше нуля": "The height must be greater than zero",
      "Выберите миллиметры, сантиметры или метры": "Choose millimetres, centimetres or metres",
      "Радиус и высота должны быть больше нуля": "Radius and height must be positive"
    }
  },
  "uk": {
    "fields": {
      "unit": "Одиниця довжини",
      "r": "Радіус основи",
      "h": "Висота"
    },
    "options": {
      "mm": "міліметри",
      "cm": "сантиметри",
      "m": "метри"
    },
    "results": {
      "Объём": "Об’єм",
      "Образующая": "Твірна",
      "Боковая поверхность": "Бічна поверхня",
      "Полная поверхность": "Повна поверхня",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...geometryWave8ScalarValues.uk,
      "Радиус должен быть больше нуля": "Радіус має бути більшим за нуль",
      "Высота должна быть больше нуля": "Висота має бути більшою за нуль",
      "Выберите миллиметры, сантиметры или метры": "Оберіть міліметри, сантиметри або метри",
      "Радиус и высота должны быть больше нуля": "Радіус і висота мають бути додатними"
    }
  },
  "es": {
    "fields": {
      "unit": "Unidad de longitud",
      "r": "Radio de la base",
      "h": "Altura"
    },
    "options": {
      "mm": "milímetros",
      "cm": "centímetros",
      "m": "metros"
    },
    "results": {
      "Объём": "Volumen",
      "Образующая": "Generatriz",
      "Боковая поверхность": "Superficie lateral",
      "Полная поверхность": "Superficie total",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...geometryWave8ScalarValues.es,
      "Радиус должен быть больше нуля": "El radio debe ser mayor que cero",
      "Высота должна быть больше нуля": "La altura debe ser mayor que cero",
      "Выберите миллиметры, сантиметры или метры": "Elige milímetros, centímetros o metros",
      "Радиус и высота должны быть больше нуля": "El radio y la altura deben ser positivos"
    }
  }
};
