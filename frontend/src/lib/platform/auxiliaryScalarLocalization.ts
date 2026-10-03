import type { TranslatedLocale } from './types';

// Identical auxiliary range messages used by four independently reviewed tools.
export const auxiliaryScalarValues: Readonly<Record<TranslatedLocale, Readonly<Record<string, string>>>> = {
  "en": {
    "Ненулевое значение меньше числового диапазона": "A nonzero value is below the numerical range",
    "Значение выходит за числовой диапазон": "The value exceeds the numerical range"
  },
  "uk": {
    "Ненулевое значение меньше числового диапазона": "Ненульове значення менше за числовий діапазон",
    "Значение выходит за числовой диапазон": "Значення виходить за числовий діапазон"
  },
  "de": {
    "Ненулевое значение меньше числового диапазона": "Ein Wert ungleich null liegt unterhalb des Zahlenbereichs",
    "Значение выходит за числовой диапазон": "Der Wert liegt außerhalb des Zahlenbereichs"
  },
  "es": {
    "Ненулевое значение меньше числового диапазона": "Un valor distinto de cero queda por debajo del rango numérico",
    "Значение выходит за числовой диапазон": "El valor queda fuera del rango numérico"
  }
};
