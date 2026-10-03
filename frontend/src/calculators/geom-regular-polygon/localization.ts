import { geometryWave8ScalarValues } from '../../lib/platform/geometryWave8ScalarLocalization';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "unit": "Längeneinheit",
      "n": "Zahl der Seiten",
      "side": "Seitenlänge"
    },
    "options": {
      "mm": "Millimeter",
      "cm": "Zentimeter",
      "m": "Meter"
    },
    "results": {
      "Площадь": "Fläche",
      "Периметр": "Umfang",
      "Апофема": "Apothema",
      "Внутренний угол": "Innenwinkel",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...geometryWave8ScalarValues.de,
      "Сторон должно быть не меньше трёх": "Ein Vieleck braucht mindestens drei Seiten",
      "Число сторон должно быть целым": "Die Zahl der Seiten muss eine ganze Zahl sein",
      "Длина стороны должна быть больше нуля": "Die Seitenlänge muss größer als null sein",
      "°": "°",
      "Выберите миллиметры, сантиметры или метры": "Wähle Millimeter, Zentimeter oder Meter",
      "Число сторон должно быть целым от 3 до 1000": "Die Seitenzahl muss ganzzahlig von 3 bis 1000 sein",
      "Количество должно быть целым в допустимом диапазоне": "Die Anzahl muss im erlaubten Bereich ganzzahlig sein"
    }
  },
  "en": {
    "fields": {
      "unit": "Length unit",
      "n": "Number of sides",
      "side": "Side length"
    },
    "options": {
      "mm": "millimetres",
      "cm": "centimetres",
      "m": "metres"
    },
    "results": {
      "Площадь": "Area",
      "Периметр": "Perimeter",
      "Апофема": "Apothem",
      "Внутренний угол": "Interior angle",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...geometryWave8ScalarValues.en,
      "Сторон должно быть не меньше трёх": "A polygon needs at least three sides",
      "Число сторон должно быть целым": "The number of sides must be a whole number",
      "Длина стороны должна быть больше нуля": "The side length must be greater than zero",
      "°": "°",
      "Выберите миллиметры, сантиметры или метры": "Choose millimetres, centimetres or metres",
      "Число сторон должно быть целым от 3 до 1000": "Side count must be an integer from 3 to 1000",
      "Количество должно быть целым в допустимом диапазоне": "The count must be an integer in the allowed range"
    }
  },
  "uk": {
    "fields": {
      "unit": "Одиниця довжини",
      "n": "Кількість сторін",
      "side": "Довжина сторони"
    },
    "options": {
      "mm": "міліметри",
      "cm": "сантиметри",
      "m": "метри"
    },
    "results": {
      "Площадь": "Площа",
      "Периметр": "Периметр",
      "Апофема": "Апофема",
      "Внутренний угол": "Внутрішній кут",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...geometryWave8ScalarValues.uk,
      "Сторон должно быть не меньше трёх": "Сторін має бути не менше трьох",
      "Число сторон должно быть целым": "Кількість сторін має бути цілою",
      "Длина стороны должна быть больше нуля": "Довжина сторони має бути більшою за нуль",
      "°": "°",
      "Выберите миллиметры, сантиметры или метры": "Оберіть міліметри, сантиметри або метри",
      "Число сторон должно быть целым от 3 до 1000": "Кількість сторін має бути цілою від 3 до 1000",
      "Количество должно быть целым в допустимом диапазоне": "Кількість має бути цілою в допустимому діапазоні"
    }
  },
  "es": {
    "fields": {
      "unit": "Unidad de longitud",
      "n": "Número de lados",
      "side": "Longitud del lado"
    },
    "options": {
      "mm": "milímetros",
      "cm": "centímetros",
      "m": "metros"
    },
    "results": {
      "Площадь": "Área",
      "Периметр": "Perímetro",
      "Апофема": "Apotema",
      "Внутренний угол": "Ángulo interior",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...geometryWave8ScalarValues.es,
      "Сторон должно быть не меньше трёх": "Un polígono necesita al menos tres lados",
      "Число сторон должно быть целым": "El número de lados debe ser entero",
      "Длина стороны должна быть больше нуля": "La longitud del lado debe ser mayor que cero",
      "°": "°",
      "Выберите миллиметры, сантиметры или метры": "Elige milímetros, centímetros o metros",
      "Число сторон должно быть целым от 3 до 1000": "El número de lados debe ser entero entre 3 y 1000",
      "Количество должно быть целым в допустимом диапазоне": "La cantidad debe ser entera dentro del intervalo permitido"
    }
  }
};
