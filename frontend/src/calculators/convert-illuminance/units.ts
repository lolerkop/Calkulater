// Единицы освещённости. База — люкс. Фут-кандела выражена через точный
// квадратный фут (0,3048² м²), а не десятичным приближением.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type IlluminanceUnit = 'lx' | 'klx' | 'mlx' | 'fc' | 'ph' | 'nox';

export const illuminanceUnits: ConversionUnits<IlluminanceUnit> = {
  lx: { symbol: 'лк', factor: 1 },
  klx: { symbol: 'клк', factor: 1000 },
  mlx: { symbol: 'млк', factor: 0.001 },
  fc: { symbol: 'фк', factor: 1 / 0.09290304 },
  ph: { symbol: 'фот', factor: 10000 },
  nox: { symbol: 'нокс', factor: 0.001 },
};

export const illuminanceNames: Record<IlluminanceUnit, string> = { lx: 'Люкс', klx: 'Килолюкс', mlx: 'Миллилюкс', fc: 'Фут-кандела', ph: 'Фот', nox: 'Нокс' };
