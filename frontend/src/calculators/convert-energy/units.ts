// Единицы энергии. База — джоуль.
//
// Калория взята термохимическая: её определение точное — ровно 4,184 Дж.
// BTU — International Table, 1055,05585262 Дж. Электронвольт точен по СИ
// с 2019 года: 1,602176634·10⁻¹⁹ Дж, потому что таким определён заряд электрона.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type EnergyUnit = 'j' | 'kj' | 'mj' | 'wh' | 'kwh' | 'cal' | 'kcal' | 'btu' | 'ev';

export const energyUnits: ConversionUnits<EnergyUnit> = {
  j: { symbol: 'Дж', factor: 1 },
  kj: { symbol: 'кДж', factor: 1000 },
  mj: { symbol: 'МДж', factor: 1e6 },
  wh: { symbol: 'Вт·ч', factor: 3600 },
  kwh: { symbol: 'кВт·ч', factor: 3.6e6 },
  cal: { symbol: 'кал', factor: 4.184 },
  kcal: { symbol: 'ккал', factor: 4184 },
  btu: { symbol: 'BTU', factor: 1055.05585262 },
  ev: { symbol: 'эВ', factor: 1.602176634e-19 },
};

export const energyNames: Record<EnergyUnit, string> = { j: 'Джоуль', kj: 'Килоджоуль', mj: 'Мегаджоуль', wh: 'Ватт-час', kwh: 'Киловатт-час', cal: 'Калория', kcal: 'Килокалория', btu: 'Британская тепловая единица', ev: 'Электронвольт' };
