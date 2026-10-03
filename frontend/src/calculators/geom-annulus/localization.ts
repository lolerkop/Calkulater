import { geometryWave8ScalarValues } from '../../lib/platform/geometryWave8ScalarLocalization';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "unit": "Längeneinheit",
      "R": "Äußerer Radius",
      "r": "Innerer Radius"
    },
    "options": {
      "mm": "Millimeter",
      "cm": "Zentimeter",
      "m": "Meter"
    },
    "results": {
      "Площадь": "Fläche",
      "Ширина кольца": "Breite des Rings",
      "Внешняя окружность": "Äußerer Umfang",
      "Внутренняя окружность": "Innerer Umfang",
      "Средний радиус": "Mittlerer Radius",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...geometryWave8ScalarValues.de,
      "Внешний радиус должен быть больше нуля": "Der äußere Radius muss größer als null sein",
      "Внутренний радиус не может быть отрицательным": "Der innere Radius kann nicht negativ sein",
      "Внутренний радиус должен быть меньше внешнего": "Der innere Radius muss kleiner als der äußere sein",
      "Выберите миллиметры, сантиметры или метры": "Wähle Millimeter, Zentimeter oder Meter",
      "Внешний радиус должен быть положительным, внутренний — от нуля до внешнего": "Der Außenradius muss positiv sein, der Innenradius nicht negativ und kleiner"
    }
  },
  "en": {
    "fields": {
      "unit": "Length unit",
      "R": "Outer radius",
      "r": "Inner radius"
    },
    "options": {
      "mm": "millimetres",
      "cm": "centimetres",
      "m": "metres"
    },
    "results": {
      "Площадь": "Area",
      "Ширина кольца": "Ring width",
      "Внешняя окружность": "Outer circumference",
      "Внутренняя окружность": "Inner circumference",
      "Средний радиус": "Mean radius",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...geometryWave8ScalarValues.en,
      "Внешний радиус должен быть больше нуля": "The outer radius must be greater than zero",
      "Внутренний радиус не может быть отрицательным": "The inner radius cannot be negative",
      "Внутренний радиус должен быть меньше внешнего": "The inner radius must be smaller than the outer one",
      "Выберите миллиметры, сантиметры или метры": "Choose millimetres, centimetres or metres",
      "Внешний радиус должен быть положительным, внутренний — от нуля до внешнего": "Outer radius must be positive; inner radius must be nonnegative and smaller"
    }
  },
  "uk": {
    "fields": {
      "unit": "Одиниця довжини",
      "R": "Зовнішній радіус",
      "r": "Внутрішній радіус"
    },
    "options": {
      "mm": "міліметри",
      "cm": "сантиметри",
      "m": "метри"
    },
    "results": {
      "Площадь": "Площа",
      "Ширина кольца": "Ширина кільця",
      "Внешняя окружность": "Зовнішнє коло",
      "Внутренняя окружность": "Внутрішнє коло",
      "Средний радиус": "Середній радіус",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...geometryWave8ScalarValues.uk,
      "Внешний радиус должен быть больше нуля": "Зовнішній радіус має бути більшим за нуль",
      "Внутренний радиус не может быть отрицательным": "Внутрішній радіус не може бути від'ємним",
      "Внутренний радиус должен быть меньше внешнего": "Внутрішній радіус має бути меншим за зовнішній",
      "Выберите миллиметры, сантиметры или метры": "Оберіть міліметри, сантиметри або метри",
      "Внешний радиус должен быть положительным, внутренний — от нуля до внешнего": "Зовнішній радіус має бути додатним, внутрішній — невід’ємним і меншим"
    }
  },
  "es": {
    "fields": {
      "unit": "Unidad de longitud",
      "R": "Radio exterior",
      "r": "Radio interior"
    },
    "options": {
      "mm": "milímetros",
      "cm": "centímetros",
      "m": "metros"
    },
    "results": {
      "Площадь": "Área",
      "Ширина кольца": "Anchura del anillo",
      "Внешняя окружность": "Circunferencia exterior",
      "Внутренняя окружность": "Circunferencia interior",
      "Средний радиус": "Radio medio",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...geometryWave8ScalarValues.es,
      "Внешний радиус должен быть больше нуля": "El radio exterior debe ser mayor que cero",
      "Внутренний радиус не может быть отрицательным": "El radio interior no puede ser negativo",
      "Внутренний радиус должен быть меньше внешнего": "El radio interior debe ser menor que el exterior",
      "Выберите миллиметры, сантиметры или метры": "Elige milímetros, centímetros o metros",
      "Внешний радиус должен быть положительным, внутренний — от нуля до внешнего": "El radio exterior debe ser positivo y el interior no negativo y menor"
    }
  }
};
