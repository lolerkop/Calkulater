// Единицы объёма. База — кубический метр.
//
// Галлоны США и Великобритании — разные меры, и обе включены намеренно:
// разница около 20 %, и рецепт или бак, подписанный «галлон», без уточнения
// страны неоднозначен.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type VolumeUnit = 'ml' | 'cm3' | 'l' | 'm3' | 'ft3' | 'galUS' | 'galUK' | 'qtUS' | 'ptUS';

export const volumeUnits: ConversionUnits<VolumeUnit> = {
  ml: { symbol: 'мл', factor: 1e-6 },
  cm3: { symbol: 'см³', factor: 1e-6 },
  l: { symbol: 'л', factor: 0.001 },
  m3: { symbol: 'м³', factor: 1 },
  ft3: { symbol: 'фут³', factor: 0.028316846592 },
  galUS: { symbol: 'гал. США', factor: 0.003785411784 },
  galUK: { symbol: 'гал. брит.', factor: 0.00454609 },
  qtUS: { symbol: 'кварта США', factor: 0.000946352946 },
  ptUS: { symbol: 'пинта США', factor: 0.000473176473 },
};

export const volumeNames: Record<VolumeUnit, string> = { ml: 'Миллилитр', cm3: 'Кубический сантиметр', l: 'Литр', m3: 'Кубический метр', ft3: 'Кубический фут', galUS: 'Галлон США', galUK: 'Галлон британский', qtUS: 'Кварта США', ptUS: 'Пинта США' };
