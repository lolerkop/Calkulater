// Единицы массы. База — килограмм.
//
// Имперские значения точны по определению: фунт равен ровно 0,45359237 кг,
// унция — 1/16 фунта, стоун — 14 фунтов.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type MassUnit = 'mg' | 'g' | 'kg' | 't' | 'oz' | 'lb' | 'st';

export const massUnits: ConversionUnits<MassUnit> = {
  mg: { symbol: 'мг', factor: 1e-6 },
  g: { symbol: 'г', factor: 0.001 },
  kg: { symbol: 'кг', factor: 1 },
  t: { symbol: 'т', factor: 1000 },
  oz: { symbol: 'унция', factor: 0.028349523125 },
  lb: { symbol: 'фунт', factor: 0.45359237 },
  st: { symbol: 'стоун', factor: 6.35029318 },
};

export const massNames: Record<MassUnit, string> = { mg: 'Миллиграмм', g: 'Грамм', kg: 'Килограмм', t: 'Тонна', oz: 'Унция', lb: 'Фунт', st: 'Стоун' };
