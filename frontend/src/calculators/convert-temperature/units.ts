// Единицы температуры. База — кельвин.
//
// Здесь множителя недостаточно: у Цельсия и Фаренгейта шкалы смещены
// относительно абсолютного нуля. Именно этот конвертер и определил форму
// модели движка — «множитель плюс смещение», а не просто множитель.
//
//   K  → K: v
//   °C → K: v + 273,15
//   °F → K: v × 5/9 + (273,15 − 32 × 5/9)
//   °R → K: v × 5/9
//
// Смещение Фаренгейта записано выражением, а не числом: так видно, откуда
// оно берётся, и опечатка в последней цифре становится невозможной.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type TemperatureUnit = 'c' | 'f' | 'k' | 'r';

export const temperatureUnits: ConversionUnits<TemperatureUnit> = {
  c: { symbol: '°C', factor: 1, offset: 273.15 },
  f: { symbol: '°F', factor: 5 / 9, offset: 273.15 - 32 * (5 / 9) },
  k: { symbol: 'K', factor: 1, offset: 0 },
  r: { symbol: '°Ra', factor: 5 / 9, offset: 0 },
};

export const temperatureNames: Record<TemperatureUnit, string> = {
  c: 'Цельсий', f: 'Фаренгейт', k: 'Кельвин', r: 'Ранкин',
};
