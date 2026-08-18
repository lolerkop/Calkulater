// Единицы крутящего момента. База — ньютон-метр. Американские единицы выведены
// перемножением точных определений фунт-силы и фута, а не отдельным
// приближением: иначе равенство «фут = двенадцать дюймов» перестало бы
// выполняться точно.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type TorqueUnit = 'nm' | 'knm' | 'ncm' | 'kgfm' | 'lbfft' | 'lbfin' | 'ozfin';

export const torqueUnits: ConversionUnits<TorqueUnit> = {
  nm: { symbol: 'Н·м', factor: 1 },
  knm: { symbol: 'кН·м', factor: 1000 },
  ncm: { symbol: 'Н·см', factor: 0.01 },
  kgfm: { symbol: 'кгс·м', factor: 9.80665 },
  lbfft: { symbol: 'lbf·ft', factor: 0.45359237 * 9.80665 * 0.3048 },
  lbfin: { symbol: 'lbf·in', factor: 0.45359237 * 9.80665 * 0.3048 / 12 },
  ozfin: { symbol: 'ozf·in', factor: 0.45359237 * 9.80665 * 0.3048 / 192 },
};

export const torqueNames: Record<TorqueUnit, string> = { nm: 'Ньютон-метр', knm: 'Килоньютон-метр', ncm: 'Ньютон-сантиметр', kgfm: 'Килограмм-сила-метр', lbfft: 'Фунт-сила-фут', lbfin: 'Фунт-сила-дюйм', ozfin: 'Унция-сила-дюйм' };
