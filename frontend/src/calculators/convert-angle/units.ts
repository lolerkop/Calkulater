// Единицы угла. База — радиан.
//
// Единственное семейство волны, где множители иррациональны: все они выражены
// через π, а не десятичным приближением. Записать градус как 0,0174533 значило
// бы внести ошибку в шестом знаке и потерять точные соотношения — 180° перестали
// бы давать ровно π, а 400 градов — ровно один оборот.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type AngleUnit = 'rad' | 'deg' | 'grad' | 'turn' | 'arcmin' | 'arcsec';

export const angleUnits: ConversionUnits<AngleUnit> = {
  rad: { symbol: 'рад', factor: 1 },
  deg: { symbol: '°', factor: Math.PI / 180 },
  grad: { symbol: 'град', factor: Math.PI / 200 },
  turn: { symbol: 'об', factor: 2 * Math.PI },
  arcmin: { symbol: '′', factor: Math.PI / 10800 },
  arcsec: { symbol: '″', factor: Math.PI / 648000 },
};

export const angleNames: Record<AngleUnit, string> = { rad: 'Радиан', deg: 'Градус', grad: 'Град (гон)', turn: 'Оборот', arcmin: 'Угловая минута', arcsec: 'Угловая секунда' };
