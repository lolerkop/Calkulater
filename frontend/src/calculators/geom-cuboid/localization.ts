import { geometryWave8ScalarValues } from '../../lib/platform/geometryWave8ScalarLocalization';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "unit": "Längeneinheit",
      "a": "Kante a",
      "b": "Kante b",
      "c": "Kante c"
    },
    "options": {
      "mm": "Millimeter",
      "cm": "Zentimeter",
      "m": "Meter"
    },
    "results": {
      "Объём": "Volumen",
      "Площадь поверхности": "Oberfläche",
      "Диагональ": "Diagonale",
      "Сумма длин рёбер": "Kantensumme",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...geometryWave8ScalarValues.de,
      "Все три ребра должны быть больше нуля": "Alle drei Kanten müssen größer als null sein",
      "Значение слишком велико для расчёта": "Der Wert ist zu groß für die Rechnung",
      "Все рёбра должны быть больше нуля": "Alle Kanten müssen positiv sein",
      "Выберите миллиметры, сантиметры или метры": "Wähle Millimeter, Zentimeter oder Meter"
    }
  },
  "en": {
    "fields": {
      "unit": "Length unit",
      "a": "Edge a",
      "b": "Edge b",
      "c": "Edge c"
    },
    "options": {
      "mm": "millimetres",
      "cm": "centimetres",
      "m": "metres"
    },
    "results": {
      "Объём": "Volume",
      "Площадь поверхности": "Surface area",
      "Диагональ": "Diagonal",
      "Сумма длин рёбер": "Total edge length",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...geometryWave8ScalarValues.en,
      "Все три ребра должны быть больше нуля": "All three edges must be greater than zero",
      "Значение слишком велико для расчёта": "The value is too large to calculate",
      "Все рёбра должны быть больше нуля": "All edges must be positive",
      "Выберите миллиметры, сантиметры или метры": "Choose millimetres, centimetres or metres"
    }
  },
  "uk": {
    "fields": {
      "unit": "Одиниця довжини",
      "a": "Ребро a",
      "b": "Ребро b",
      "c": "Ребро c"
    },
    "options": {
      "mm": "міліметри",
      "cm": "сантиметри",
      "m": "метри"
    },
    "results": {
      "Объём": "Об’єм",
      "Площадь поверхности": "Площа поверхні",
      "Диагональ": "Діагональ",
      "Сумма длин рёбер": "Сума довжин ребер",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...geometryWave8ScalarValues.uk,
      "Все три ребра должны быть больше нуля": "Усі три ребра мають бути більшими за нуль",
      "Значение слишком велико для расчёта": "Значення завелике для розрахунку",
      "Все рёбра должны быть больше нуля": "Усі ребра мають бути додатними",
      "Выберите миллиметры, сантиметры или метры": "Оберіть міліметри, сантиметри або метри"
    }
  },
  "es": {
    "fields": {
      "unit": "Unidad de longitud",
      "a": "Arista a",
      "b": "Arista b",
      "c": "Arista c"
    },
    "options": {
      "mm": "milímetros",
      "cm": "centímetros",
      "m": "metros"
    },
    "results": {
      "Объём": "Volumen",
      "Площадь поверхности": "Superficie",
      "Диагональ": "Diagonal",
      "Сумма длин рёбер": "Suma de las aristas",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...geometryWave8ScalarValues.es,
      "Все три ребра должны быть больше нуля": "Las tres aristas deben ser mayores que cero",
      "Значение слишком велико для расчёта": "El valor es demasiado grande para calcularlo",
      "Все рёбра должны быть больше нуля": "Todas las aristas deben ser positivas",
      "Выберите миллиметры, сантиметры или метры": "Elige milímetros, centímetros o metros"
    }
  }
};
