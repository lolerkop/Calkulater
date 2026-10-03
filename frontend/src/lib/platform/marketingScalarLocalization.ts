import type { TranslatedLocale } from './types';

// Only byte-equivalent numerical error phrases shared by eight independent tools.
export const marketingScalarValues: Readonly<Record<TranslatedLocale, Readonly<Record<string, string>>>> = {
  "de": {
    "Введите корректные числовые данные": "Gib gültige endliche Zahlen ein",
    "Количество должно быть целым в допустимом диапазоне": "Die Anzahl muss eine ganze Zahl im zulässigen Bereich sein",
    "Результат вне допустимого диапазона": "Das Ergebnis liegt außerhalb des zulässigen Zahlenbereichs"
  },
  "en": {
    "Введите корректные числовые данные": "Enter valid finite numbers",
    "Количество должно быть целым в допустимом диапазоне": "The count must be a whole number within the supported range",
    "Результат вне допустимого диапазона": "Result is outside the supported numeric range"
  },
  "uk": {
    "Введите корректные числовые данные": "Введіть коректні скінченні числа",
    "Количество должно быть целым в допустимом диапазоне": "Кількість має бути цілою в допустимому діапазоні",
    "Результат вне допустимого диапазона": "Результат поза допустимим числовим діапазоном"
  },
  "es": {
    "Введите корректные числовые данные": "Introduce números finitos válidos",
    "Количество должно быть целым в допустимом диапазоне": "El recuento debe ser entero dentro del rango admitido",
    "Результат вне допустимого диапазона": "El resultado queda fuera del rango numérico admitido"
  }
};
