import type { TranslatedLocale } from './types';

// Only byte-equivalent numerical error phrases shared by eight independent tools.
export const mechanicsScalarValues: Readonly<Record<TranslatedLocale, Readonly<Record<string, string>>>> = {
  "de": {
    "Введите конечные числа во все активные поля": "Gib in alle aktiven Felder endliche Zahlen ein",
    "Выберите поддерживаемый режим расчёта": "Wähle einen unterstützten Rechenmodus",
    "Результат выходит за числовой диапазон; проверьте масштаб исходных величин": "Das Ergebnis liegt außerhalb des Zahlenbereichs; prüfe die Größenordnung der Eingaben"
  },
  "en": {
    "Введите конечные числа во все активные поля": "Enter finite numbers in every active field",
    "Выберите поддерживаемый режим расчёта": "Choose a supported calculation mode",
    "Результат выходит за числовой диапазон; проверьте масштаб исходных величин": "The result exceeds the numerical range; check the scale of the input quantities"
  },
  "uk": {
    "Введите конечные числа во все активные поля": "Введіть скінченні числа в усі активні поля",
    "Выберите поддерживаемый режим расчёта": "Виберіть підтримуваний режим розрахунку",
    "Результат выходит за числовой диапазон; проверьте масштаб исходных величин": "Результат виходить за числовий діапазон; перевірте масштаб вихідних величин"
  },
  "es": {
    "Введите конечные числа во все активные поля": "Introduce números finitos en todos los campos activos",
    "Выберите поддерживаемый режим расчёта": "Elige un modo de cálculo admitido",
    "Результат выходит за числовой диапазон; проверьте масштаб исходных величин": "El resultado queda fuera del rango numérico; revisa la escala de las magnitudes de entrada"
  }
};
