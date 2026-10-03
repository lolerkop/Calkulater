import { geometryWave8ScalarValues } from '../../lib/platform/geometryWave8ScalarLocalization';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "center": "Achsabstand",
      "d1": "Wirkdurchmesser der ersten Scheibe",
      "d2": "Wirkdurchmesser der zweiten Scheibe"
    },
    "results": {
      "Длина ремня": "Riemenlänge",
      "В метрах": "In Metern",
      "Угол обхвата малого шкива": "Umschlingungswinkel der kleinen Scheibe",
      "Передаточное отношение": "Übersetzungsverhältnis",
      "Межосевое расстояние": "Achsabstand",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...geometryWave8ScalarValues.de,
      "°": "°",
      "Межосевое расстояние должно быть больше нуля": "Der Achsabstand muss größer als null sein",
      "Диаметр малого шкива должен быть больше нуля": "Der Durchmesser der kleinen Scheibe muss größer als null sein",
      "Диаметр большого шкива должен быть больше нуля": "Der Durchmesser der großen Scheibe muss größer als null sein",
      "Шкивы пересекаются: оси не могут быть ближе суммы радиусов": "Die Scheiben überschneiden sich: die Achsen können nicht näher liegen als die Summe der Radien",
      "Расстояние и оба диаметра должны быть больше нуля": "Abstand und beide Durchmesser müssen positiv sein"
    }
  },
  "en": {
    "fields": {
      "center": "Centre distance",
      "d1": "Pitch diameter of first pulley",
      "d2": "Pitch diameter of second pulley"
    },
    "options": {},
    "results": {
      "Длина ремня": "Belt length",
      "В метрах": "In metres",
      "Угол обхвата малого шкива": "Wrap angle on the small pulley",
      "Передаточное отношение": "Speed ratio",
      "Межосевое расстояние": "Centre distance",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...geometryWave8ScalarValues.en,
      "°": "°",
      "Межосевое расстояние должно быть больше нуля": "The centre distance must be greater than zero",
      "Диаметр малого шкива должен быть больше нуля": "The small pulley diameter must be greater than zero",
      "Диаметр большого шкива должен быть больше нуля": "The large pulley diameter must be greater than zero",
      "Шкивы пересекаются: оси не могут быть ближе суммы радиусов": "The pulleys overlap: the centres cannot be closer than the sum of the radii",
      "Расстояние и оба диаметра должны быть больше нуля": "Distance and both diameters must be positive"
    }
  },
  "uk": {
    "fields": {
      "center": "Міжосьова відстань",
      "d1": "Розрахунковий діаметр першого шківа",
      "d2": "Розрахунковий діаметр другого шківа"
    },
    "options": {},
    "results": {
      "Длина ремня": "Довжина паса",
      "В метрах": "У метрах",
      "Угол обхвата малого шкива": "Кут обхвату малого шківа",
      "Передаточное отношение": "Передавальне відношення",
      "Межосевое расстояние": "Міжосьова відстань",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...geometryWave8ScalarValues.uk,
      "°": "°",
      "Межосевое расстояние должно быть больше нуля": "Міжосьова відстань має бути більшою за нуль",
      "Диаметр малого шкива должен быть больше нуля": "Діаметр малого шківа має бути більшим за нуль",
      "Диаметр большого шкива должен быть больше нуля": "Діаметр великого шківа має бути більшим за нуль",
      "Шкивы пересекаются: оси не могут быть ближе суммы радиусов": "Шківи перетинаються: осі не можуть бути ближче за суму радіусів",
      "Расстояние и оба диаметра должны быть больше нуля": "Відстань і обидва діаметри мають бути додатними"
    }
  },
  "es": {
    "fields": {
      "center": "Distancia entre ejes",
      "d1": "Diámetro primitivo de la primera polea",
      "d2": "Diámetro primitivo de la segunda polea"
    },
    "options": {},
    "results": {
      "Длина ремня": "Longitud de la correa",
      "В метрах": "En metros",
      "Угол обхвата малого шкива": "Ángulo de abrace en la polea pequeña",
      "Передаточное отношение": "Relación de transmisión",
      "Межосевое расстояние": "Distancia entre ejes",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...geometryWave8ScalarValues.es,
      "°": "°",
      "Межосевое расстояние должно быть больше нуля": "La distancia entre ejes debe ser mayor que cero",
      "Диаметр малого шкива должен быть больше нуля": "El diámetro de la polea pequeña debe ser mayor que cero",
      "Диаметр большого шкива должен быть больше нуля": "El diámetro de la polea grande debe ser mayor que cero",
      "Шкивы пересекаются: оси не могут быть ближе суммы радиусов": "Las poleas se solapan: los ejes no pueden estar más cerca que la suma de los radios",
      "Расстояние и оба диаметра должны быть больше нуля": "La distancia y los dos diámetros deben ser positivos"
    }
  }
};
