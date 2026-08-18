// Единицы плотности. База — килограмм на кубометр. Составные единицы выражены
// через точные определения фунта, фута, дюйма и американского галлона, а не
// десятичными приближениями.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type DensityUnit = 'kgm3' | 'gcm3' | 'kgl' | 'tm3' | 'gl' | 'lbft3' | 'lbgal' | 'ozin3';

export const densityUnits: ConversionUnits<DensityUnit> = {
  kgm3: { symbol: 'кг/м³', factor: 1 },
  gcm3: { symbol: 'г/см³', factor: 1000 },
  kgl: { symbol: 'кг/л', factor: 1000 },
  tm3: { symbol: 'т/м³', factor: 1000 },
  gl: { symbol: 'г/л', factor: 1 },
  lbft3: { symbol: 'lb/ft³', factor: 0.45359237 / 0.3048 ** 3 },
  lbgal: { symbol: 'lb/гал', factor: 0.45359237 / 3.785411784e-3 },
  ozin3: { symbol: 'oz/in³', factor: 0.028349523125 / 0.0254 ** 3 },
};

export const densityNames: Record<DensityUnit, string> = { kgm3: 'Килограмм на кубометр', gcm3: 'Грамм на кубический сантиметр', kgl: 'Килограмм на литр', tm3: 'Тонна на кубометр', gl: 'Грамм на литр', lbft3: 'Фунт на кубический фут', lbgal: 'Фунт на галлон (США)', ozin3: 'Унция на кубический дюйм' };
