import { geometryWave8ScalarValues } from '../../lib/platform/geometryWave8ScalarLocalization';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "unit": "Längeneinheit",
      "R": "Größerer Radius",
      "r": "Kleinerer Radius",
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
      "Нижний радиус должен быть больше нуля": "Der untere Radius muss größer als null sein",
      "Верхний радиус не может быть отрицательным": "Der obere Radius kann nicht negativ sein",
      "Верхний радиус должен быть меньше нижнего": "Der obere Radius muss kleiner als der untere sein",
      "Высота должна быть больше нуля": "Die Höhe muss größer als null sein",
      "Требуются R > r ≥ 0 и положительная высота": "Es gelten R > r ≥ 0 und eine positive Höhe",
      "Выберите миллиметры, сантиметры или метры": "Wähle Millimeter, Zentimeter oder Meter"
    }
  },
  "en": {
    "fields": {
      "unit": "Length unit",
      "R": "Larger radius",
      "r": "Smaller radius",
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
      "Нижний радиус должен быть больше нуля": "The bottom radius must be greater than zero",
      "Верхний радиус не может быть отрицательным": "The top radius cannot be negative",
      "Верхний радиус должен быть меньше нижнего": "The top radius must be smaller than the bottom one",
      "Высота должна быть больше нуля": "The height must be greater than zero",
      "Требуются R > r ≥ 0 и положительная высота": "Require R > r ≥ 0 and positive height",
      "Выберите миллиметры, сантиметры или метры": "Choose millimetres, centimetres or metres"
    }
  },
  "uk": {
    "fields": {
      "unit": "Одиниця довжини",
      "R": "Більший радіус",
      "r": "Менший радіус",
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
      "Нижний радиус должен быть больше нуля": "Нижній радіус має бути більшим за нуль",
      "Верхний радиус не может быть отрицательным": "Верхній радіус не може бути від'ємним",
      "Верхний радиус должен быть меньше нижнего": "Верхній радіус має бути меншим за нижній",
      "Высота должна быть больше нуля": "Висота має бути більшою за нуль",
      "Требуются R > r ≥ 0 и положительная высота": "Потрібні R > r ≥ 0 та додатна висота",
      "Выберите миллиметры, сантиметры или метры": "Оберіть міліметри, сантиметри або метри"
    }
  },
  "es": {
    "fields": {
      "unit": "Unidad de longitud",
      "R": "Radio mayor",
      "r": "Radio menor",
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
      "Нижний радиус должен быть больше нуля": "El radio inferior debe ser mayor que cero",
      "Верхний радиус не может быть отрицательным": "El radio superior no puede ser negativo",
      "Верхний радиус должен быть меньше нижнего": "El radio superior debe ser menor que el inferior",
      "Высота должна быть больше нуля": "La altura debe ser mayor que cero",
      "Требуются R > r ≥ 0 и положительная высота": "Se requieren R > r ≥ 0 y altura positiva",
      "Выберите миллиметры, сантиметры или метры": "Elige milímetros, centímetros o metros"
    }
  }
};
