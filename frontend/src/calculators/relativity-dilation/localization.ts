import type { CalculatorLocalization } from '../../lib/platform/types';
import { mechanicsScalarValues } from '../../lib/platform/mechanicsScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "beta": "Bruchteil der Lichtgeschwindigkeit",
      "properTime": "Eigenzeit"
    },
    "results": {
      "Замедленное время": "Gedehnte Zeit",
      "Множитель Лоренца": "Lorentzfaktor",
      "Скорость": "Geschwindigkeit",
      "Разница во времени": "Zeitunterschied",
      "Проверьте данные": "Prüfe die Werte",
      "Длина от собственной": "Anteil der Eigenlänge"
    },
    "values": {
      ...mechanicsScalarValues.de,
      "с": "s",
      "м/с": "m/s",
      "Доля скорости света не может быть отрицательной": "Der Bruchteil der Lichtgeschwindigkeit kann nicht negativ sein",
      "Достичь скорости света нельзя: доля должна быть меньше единицы": "Die Lichtgeschwindigkeit lässt sich nicht erreichen: der Bruchteil muss unter eins liegen",
      "Собственное время должно быть больше нуля": "Die Eigenzeit muss größer als null sein"
    }
  },
  "en": {
    "fields": {
      "beta": "Fraction of the speed of light",
      "properTime": "Proper time"
    },
    "options": {},
    "results": {
      "Замедленное время": "Dilated time",
      "Множитель Лоренца": "Lorentz factor",
      "Скорость": "Speed",
      "Разница во времени": "Time difference",
      "Проверьте данные": "Check the values",
      "Длина от собственной": "Fraction of proper length"
    },
    "values": {
      ...mechanicsScalarValues.en,
      "с": "s",
      "м/с": "m/s",
      "Доля скорости света не может быть отрицательной": "The fraction of light speed cannot be negative",
      "Достичь скорости света нельзя: доля должна быть меньше единицы": "The speed of light cannot be reached: the fraction must be below one",
      "Собственное время должно быть больше нуля": "The proper time must be greater than zero"
    }
  },
  "uk": {
    "fields": {
      "beta": "Частка швидкості світла",
      "properTime": "Власний час"
    },
    "options": {},
    "results": {
      "Замедленное время": "Сповільнений час",
      "Множитель Лоренца": "Множник Лоренца",
      "Скорость": "Швидкість",
      "Разница во времени": "Різниця в часі",
      "Проверьте данные": "Перевірте дані",
      "Длина от собственной": "Частка власної довжини"
    },
    "values": {
      ...mechanicsScalarValues.uk,
      "с": "с",
      "м/с": "м/с",
      "Доля скорости света не может быть отрицательной": "Частка швидкості світла не може бути від’ємною",
      "Достичь скорости света нельзя: доля должна быть меньше единицы": "Досягти швидкості світла не можна: частка має бути меншою за одиницю",
      "Собственное время должно быть больше нуля": "Власний час має бути більшим за нуль"
    }
  },
  "es": {
    "fields": {
      "beta": "Fracción de la velocidad de la luz",
      "properTime": "Tiempo propio"
    },
    "options": {},
    "results": {
      "Замедленное время": "Tiempo dilatado",
      "Множитель Лоренца": "Factor de Lorentz",
      "Скорость": "Velocidad",
      "Разница во времени": "Diferencia de tiempo",
      "Проверьте данные": "Revisa los datos",
      "Длина от собственной": "Fracción de la longitud propia"
    },
    "values": {
      ...mechanicsScalarValues.es,
      "с": "s",
      "м/с": "m/s",
      "Доля скорости света не может быть отрицательной": "La fracción de la velocidad de la luz no puede ser negativa",
      "Достичь скорости света нельзя: доля должна быть меньше единицы": "No se puede alcanzar la velocidad de la luz: la fracción debe ser menor que uno",
      "Собственное время должно быть больше нуля": "El tiempo propio debe ser mayor que cero"
    }
  }
};
