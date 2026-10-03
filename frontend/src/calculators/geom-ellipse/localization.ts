import { geometryWave8ScalarValues } from '../../lib/platform/geometryWave8ScalarLocalization';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "unit": "Längeneinheit",
      "a": "Halbachse a",
      "b": "Halbachse b"
    },
    "options": {
      "mm": "Millimeter",
      "cm": "Zentimeter",
      "m": "Meter"
    },
    "results": {
      "Площадь": "Fläche",
      "Периметр (Рамануджан)": "Umfang (Ramanujan)",
      "Эксцентриситет": "Exzentrizität",
      "Расстояние между фокусами": "Abstand der Brennpunkte",
      "Большая полуось": "Große Halbachse",
      "Малая полуось": "Kleine Halbachse",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...geometryWave8ScalarValues.de,
      "Обе полуоси должны быть больше нуля": "Beide Halbachsen müssen positiv sein",
      "Выберите миллиметры, сантиметры или метры": "Wähle Millimeter, Zentimeter oder Meter"
    }
  },
  "en": {
    "fields": {
      "unit": "Length unit",
      "a": "Semi-axis a",
      "b": "Semi-axis b"
    },
    "options": {
      "mm": "millimetres",
      "cm": "centimetres",
      "m": "metres"
    },
    "results": {
      "Площадь": "Area",
      "Периметр (Рамануджан)": "Perimeter (Ramanujan)",
      "Эксцентриситет": "Eccentricity",
      "Расстояние между фокусами": "Distance between foci",
      "Большая полуось": "Semi-major axis",
      "Малая полуось": "Semi-minor axis",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...geometryWave8ScalarValues.en,
      "Обе полуоси должны быть больше нуля": "Both semi-axes must be positive",
      "Выберите миллиметры, сантиметры или метры": "Choose millimetres, centimetres or metres"
    }
  },
  "uk": {
    "fields": {
      "unit": "Одиниця довжини",
      "a": "Піввісь a",
      "b": "Піввісь b"
    },
    "options": {
      "mm": "міліметри",
      "cm": "сантиметри",
      "m": "метри"
    },
    "results": {
      "Площадь": "Площа",
      "Периметр (Рамануджан)": "Периметр (Рамануджан)",
      "Эксцентриситет": "Ексцентриситет",
      "Расстояние между фокусами": "Відстань між фокусами",
      "Большая полуось": "Велика піввісь",
      "Малая полуось": "Мала піввісь",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...geometryWave8ScalarValues.uk,
      "Обе полуоси должны быть больше нуля": "Обидві півосі мають бути додатними",
      "Выберите миллиметры, сантиметры или метры": "Оберіть міліметри, сантиметри або метри"
    }
  },
  "es": {
    "fields": {
      "unit": "Unidad de longitud",
      "a": "Semieje a",
      "b": "Semieje b"
    },
    "options": {
      "mm": "milímetros",
      "cm": "centímetros",
      "m": "metros"
    },
    "results": {
      "Площадь": "Área",
      "Периметр (Рамануджан)": "Perímetro (Ramanujan)",
      "Эксцентриситет": "Excentricidad",
      "Расстояние между фокусами": "Distancia entre los focos",
      "Большая полуось": "Semieje mayor",
      "Малая полуось": "Semieje menor",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...geometryWave8ScalarValues.es,
      "Обе полуоси должны быть больше нуля": "Los dos semiejes deben ser positivos",
      "Выберите миллиметры, сантиметры или метры": "Elige milímetros, centímetros o metros"
    }
  }
};
