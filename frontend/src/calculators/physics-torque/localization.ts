import type { CalculatorLocalization } from '../../lib/platform/types';
import { mechanicsScalarValues } from '../../lib/platform/mechanicsScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "force": "Kraft",
      "radius": "Abstand zum Kraftangriffspunkt",
      "angle": "Winkel zwischen r und Kraft"
    },
    "results": {
      "Момент силы": "Drehmoment",
      "Плечо силы": "Wirksamer Hebelarm",
      "Синус угла": "Sinus des Winkels",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...mechanicsScalarValues.de,
      " Н·м": " N·m",
      "Сила не может быть отрицательной": "Die Kraft darf nicht negativ sein",
      "Плечо не может быть отрицательным": "Der Hebelarm kann nicht negativ sein",
      "Угол должен лежать в диапазоне от 0 до 180 градусов": "Der Winkel muss zwischen 0 und 180 Grad liegen",
      "Расстояние до точки приложения силы не может быть отрицательным": "Der Abstand zum Kraftangriffspunkt darf nicht negativ sein"
    }
  },
  "en": {
    "fields": {
      "force": "Force",
      "radius": "Distance to force application point",
      "angle": "Angle between r and force"
    },
    "options": {},
    "results": {
      "Момент силы": "Torque",
      "Плечо силы": "Moment arm",
      "Синус угла": "Sine of the angle",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...mechanicsScalarValues.en,
      " Н·м": " N·m",
      "Сила не может быть отрицательной": "Force cannot be negative",
      "Плечо не может быть отрицательным": "The lever arm cannot be negative",
      "Угол должен лежать в диапазоне от 0 до 180 градусов": "The angle must be between 0 and 180 degrees",
      "Расстояние до точки приложения силы не может быть отрицательным": "The distance to the force application point cannot be negative"
    }
  },
  "uk": {
    "fields": {
      "force": "Сила",
      "radius": "Відстань до точки прикладання сили",
      "angle": "Кут між r та силою"
    },
    "options": {},
    "results": {
      "Момент силы": "Момент сили",
      "Плечо силы": "Плече сили",
      "Синус угла": "Синус кута",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...mechanicsScalarValues.uk,
      " Н·м": " Н·м",
      "Сила не может быть отрицательной": "Сила не може бути від’ємною",
      "Плечо не может быть отрицательным": "Плече не може бути від’ємним",
      "Угол должен лежать в диапазоне от 0 до 180 градусов": "Кут має лежати в діапазоні від 0 до 180 градусів",
      "Расстояние до точки приложения силы не может быть отрицательным": "Відстань до точки прикладання сили не може бути від’ємною"
    }
  },
  "es": {
    "fields": {
      "force": "Fuerza",
      "radius": "Distancia al punto de aplicación",
      "angle": "Ángulo entre r y fuerza"
    },
    "options": {},
    "results": {
      "Момент силы": "Momento de la fuerza",
      "Плечо силы": "Brazo efectivo",
      "Синус угла": "Seno del ángulo",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...mechanicsScalarValues.es,
      " Н·м": " N·m",
      "Сила не может быть отрицательной": "La fuerza no puede ser negativa",
      "Плечо не может быть отрицательным": "El brazo no puede ser negativo",
      "Угол должен лежать в диапазоне от 0 до 180 градусов": "El ángulo debe estar entre 0 y 180 grados",
      "Расстояние до точки приложения силы не может быть отрицательным": "La distancia al punto de aplicación de la fuerza no puede ser negativa"
    }
  }
};
