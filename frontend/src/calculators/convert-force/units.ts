// Единицы силы. База — ньютон. Килограмм-сила и фунт-сила выражены через точное
// стандартное ускорение свободного падения 9,80665 м/с², а не десятичным
// приближением: иначе равенство «килограмм-сила = вес килограмма» перестало бы
// выполняться точно.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type ForceUnit = 'n' | 'kn' | 'mn' | 'kgf' | 'tf' | 'lbf' | 'dyn';

export const forceUnits: ConversionUnits<ForceUnit> = {
  n: { symbol: 'Н', factor: 1 },
  kn: { symbol: 'кН', factor: 1000 },
  mn: { symbol: 'мН', factor: 0.001 },
  kgf: { symbol: 'кгс', factor: 9.80665 },
  tf: { symbol: 'тс', factor: 9806.65 },
  lbf: { symbol: 'lbf', factor: 0.45359237 * 9.80665 },
  dyn: { symbol: 'дин', factor: 1e-5 },
};

export const forceNames: Record<ForceUnit, string> = { n: 'Ньютон', kn: 'Килоньютон', mn: 'Миллиньютон', kgf: 'Килограмм-сила', tf: 'Тонна-сила', lbf: 'Фунт-сила', dyn: 'Дина' };
