import type { CalculatorLocalization } from '../../lib/platform/types';
import { mechanicsScalarValues } from '../../lib/platform/mechanicsScalarLocalization';
import { auxiliaryScalarValues } from '../../lib/platform/auxiliaryScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "i1": "Intensität im Ausgangsabstand",
      "d1": "Ausgangsabstand",
      "d2": "Neuer Abstand"
    },
    "results": {
      "Интенсивность на новом расстоянии": "Intensität im neuen Abstand",
      "Во сколько раз изменилась": "Änderungsfaktor",
      "Отношение расстояний": "Verhältnis der Abstände",
      "В процентах от исходной": "In Prozent des Ausgangswerts",
      "Исходная интенсивность": "Ausgangsintensität",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...mechanicsScalarValues.de,
      ...auxiliaryScalarValues.de,
      "Исходная интенсивность должна быть больше нуля": "Die Ausgangsintensität muss größer als null sein",
      "Исходное расстояние должно быть больше нуля": "Der Ausgangsabstand muss größer als null sein",
      "Новое расстояние должно быть больше нуля": "Der neue Abstand muss größer als null sein",
      "Исходная интенсивность не может быть отрицательной": "Die Ausgangsintensität darf nicht negativ sein"
    }
  },
  "en": {
    "fields": {
      "i1": "Intensity at the original distance",
      "d1": "Original distance",
      "d2": "New distance"
    },
    "options": {},
    "results": {
      "Интенсивность на новом расстоянии": "Intensity at the new distance",
      "Во сколько раз изменилась": "Change factor",
      "Отношение расстояний": "Distance ratio",
      "В процентах от исходной": "Per cent of the original",
      "Исходная интенсивность": "Original intensity",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...mechanicsScalarValues.en,
      ...auxiliaryScalarValues.en,
      "Исходная интенсивность должна быть больше нуля": "The original intensity must be greater than zero",
      "Исходное расстояние должно быть больше нуля": "The original distance must be greater than zero",
      "Новое расстояние должно быть больше нуля": "The new distance must be greater than zero",
      "Исходная интенсивность не может быть отрицательной": "The original intensity cannot be negative"
    }
  },
  "uk": {
    "fields": {
      "i1": "Інтенсивність на початковій відстані",
      "d1": "Початкова відстань",
      "d2": "Нова відстань"
    },
    "options": {},
    "results": {
      "Интенсивность на новом расстоянии": "Інтенсивність на новій відстані",
      "Во сколько раз изменилась": "У скільки разів змінилася",
      "Отношение расстояний": "Відношення відстаней",
      "В процентах от исходной": "У відсотках від початкової",
      "Исходная интенсивность": "Початкова інтенсивність",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...mechanicsScalarValues.uk,
      ...auxiliaryScalarValues.uk,
      "Исходная интенсивность должна быть больше нуля": "Початкова інтенсивність має бути більшою за нуль",
      "Исходное расстояние должно быть больше нуля": "Початкова відстань має бути більшою за нуль",
      "Новое расстояние должно быть больше нуля": "Нова відстань має бути більшою за нуль",
      "Исходная интенсивность не может быть отрицательной": "Початкова інтенсивність не може бути від’ємною"
    }
  },
  "es": {
    "fields": {
      "i1": "Intensidad a la distancia original",
      "d1": "Distancia original",
      "d2": "Distancia nueva"
    },
    "options": {},
    "results": {
      "Интенсивность на новом расстоянии": "Intensidad a la nueva distancia",
      "Во сколько раз изменилась": "Factor de cambio",
      "Отношение расстояний": "Razón de distancias",
      "В процентах от исходной": "Porcentaje de la original",
      "Исходная интенсивность": "Intensidad original",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...mechanicsScalarValues.es,
      ...auxiliaryScalarValues.es,
      "Исходная интенсивность должна быть больше нуля": "La intensidad original debe ser mayor que cero",
      "Исходное расстояние должно быть больше нуля": "La distancia original debe ser mayor que cero",
      "Новое расстояние должно быть больше нуля": "La nueva distancia debe ser mayor que cero",
      "Исходная интенсивность не может быть отрицательной": "La intensidad inicial no puede ser negativa"
    }
  }
};
