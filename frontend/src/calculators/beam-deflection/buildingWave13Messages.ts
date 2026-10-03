import type { CalculatorLocalization } from '../../lib/platform/types';
export const buildingWave13Messages = {
  "en": {
    "Введите конечные числа во все активные поля": "Enter finite numbers in every active field",
    "Выберите поддерживаемый режим расчёта": "Choose a supported calculation mode",
    "Результат выходит за числовой диапазон; измените данные": "The result is outside the numeric range; change the inputs",
    "Введите целые числа в допустимом диапазоне": "Enter whole numbers within the supported range",
    "Угол стыка должен быть больше 0 и меньше 180 градусов": "The joint angle must be greater than 0 and less than 180 degrees"
  },
  "uk": {
    "Введите конечные числа во все активные поля": "Введіть скінченні числа в усі активні поля",
    "Выберите поддерживаемый режим расчёта": "Оберіть підтримуваний режим розрахунку",
    "Результат выходит за числовой диапазон; измените данные": "Результат виходить за числовий діапазон; змініть дані",
    "Введите целые числа в допустимом диапазоне": "Введіть цілі числа в допустимому діапазоні",
    "Угол стыка должен быть больше 0 и меньше 180 градусов": "Кут стику має бути більшим за 0 і меншим за 180 градусів"
  },
  "de": {
    "Введите конечные числа во все активные поля": "Gib in alle aktiven Felder endliche Zahlen ein",
    "Выберите поддерживаемый режим расчёта": "Wähle einen unterstützten Berechnungsmodus",
    "Результат выходит за числовой диапазон; измените данные": "Das Ergebnis liegt außerhalb des Zahlenbereichs; ändere die Eingaben",
    "Введите целые числа в допустимом диапазоне": "Gib ganze Zahlen im unterstützten Bereich ein",
    "Угол стыка должен быть больше 0 и меньше 180 градусов": "Der Verbindungswinkel muss größer als 0 und kleiner als 180 Grad sein"
  },
  "es": {
    "Введите конечные числа во все активные поля": "Introduce números finitos en todos los campos activos",
    "Выберите поддерживаемый режим расчёта": "Elige un modo de cálculo admitido",
    "Результат выходит за числовой диапазон; измените данные": "El resultado queda fuera del rango numérico; cambia los datos",
    "Введите целые числа в допустимом диапазоне": "Introduce números enteros dentro del rango admitido",
    "Угол стыка должен быть больше 0 и меньше 180 градусов": "El ángulo de unión debe ser mayor que 0 y menor que 180 grados"
  }
} as const;
export function addBuildingWave13Messages(localization: CalculatorLocalization): void {
  for (const locale of ['en','uk','de','es'] as const) {
    const target=localization[locale];
    if (target) Object.assign(target.values ?? {},buildingWave13Messages[locale]);
  }
}
