import { geometryWave8ScalarValues } from '../../lib/platform/geometryWave8ScalarLocalization';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "unit": "Längeneinheit",
      "radius": "Radius",
      "angle": "Mittelpunktswinkel"
    },
    "options": {
      "mm": "Millimeter",
      "cm": "Zentimeter",
      "m": "Meter"
    },
    "results": {
      "Площадь сектора": "Fläche des Sektors",
      "Длина дуги": "Bogenlänge",
      "Хорда": "Sehne",
      "Периметр сектора": "Umfang des Sektors",
      "Доля круга": "Anteil des Kreises",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...geometryWave8ScalarValues.de,
      "Радиус должен быть больше нуля": "Der Radius muss größer als null sein",
      "Угол должен быть больше нуля": "Der Winkel muss größer als null sein",
      "Угол сектора не может превышать 360 градусов": "Der Winkel eines Sektors kann 360 Grad nicht übersteigen",
      "Угол сектора должен быть больше нуля и не превышать 360 градусов": "Der Sektorwinkel muss größer als null sein und darf 360 Grad nicht überschreiten",
      "Выберите миллиметры, сантиметры или метры": "Wähle Millimeter, Zentimeter oder Meter"
    }
  },
  "en": {
    "fields": {
      "unit": "Length unit",
      "radius": "Radius",
      "angle": "Central angle"
    },
    "options": {
      "mm": "millimetres",
      "cm": "centimetres",
      "m": "metres"
    },
    "results": {
      "Площадь сектора": "Sector area",
      "Длина дуги": "Arc length",
      "Хорда": "Chord",
      "Периметр сектора": "Sector perimeter",
      "Доля круга": "Share of the circle",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...geometryWave8ScalarValues.en,
      "Радиус должен быть больше нуля": "The radius must be greater than zero",
      "Угол должен быть больше нуля": "The angle must be greater than zero",
      "Угол сектора не может превышать 360 градусов": "A sector angle cannot exceed 360 degrees",
      "Угол сектора должен быть больше нуля и не превышать 360 градусов": "The sector angle must be greater than zero and at most 360 degrees",
      "Выберите миллиметры, сантиметры или метры": "Choose millimetres, centimetres or metres"
    }
  },
  "uk": {
    "fields": {
      "unit": "Одиниця довжини",
      "radius": "Радіус",
      "angle": "Центральний кут"
    },
    "options": {
      "mm": "міліметри",
      "cm": "сантиметри",
      "m": "метри"
    },
    "results": {
      "Площадь сектора": "Площа сектора",
      "Длина дуги": "Довжина дуги",
      "Хорда": "Хорда",
      "Периметр сектора": "Периметр сектора",
      "Доля круга": "Частка кола",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...geometryWave8ScalarValues.uk,
      "Радиус должен быть больше нуля": "Радіус має бути більшим за нуль",
      "Угол должен быть больше нуля": "Кут має бути більшим за нуль",
      "Угол сектора не может превышать 360 градусов": "Кут сектора не може перевищувати 360 градусів",
      "Угол сектора должен быть больше нуля и не превышать 360 градусов": "Кут сектора має бути більшим за нуль і не перевищувати 360 градусів",
      "Выберите миллиметры, сантиметры или метры": "Оберіть міліметри, сантиметри або метри"
    }
  },
  "es": {
    "fields": {
      "unit": "Unidad de longitud",
      "radius": "Radio",
      "angle": "Ángulo central"
    },
    "options": {
      "mm": "milímetros",
      "cm": "centímetros",
      "m": "metros"
    },
    "results": {
      "Площадь сектора": "Área del sector",
      "Длина дуги": "Longitud del arco",
      "Хорда": "Cuerda",
      "Периметр сектора": "Perímetro del sector",
      "Доля круга": "Fracción del círculo",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...geometryWave8ScalarValues.es,
      "Радиус должен быть больше нуля": "El radio debe ser mayor que cero",
      "Угол должен быть больше нуля": "El ángulo debe ser mayor que cero",
      "Угол сектора не может превышать 360 градусов": "El ángulo de un sector no puede superar los 360 grados",
      "Угол сектора должен быть больше нуля и не превышать 360 градусов": "El ángulo del sector debe ser mayor que cero y no superar 360 grados",
      "Выберите миллиметры, сантиметры или метры": "Elige milímetros, centímetros o metros"
    }
  }
};
