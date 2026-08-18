// Кулинарные меры объёма. База — миллилитр. Только объём в объём: перевод
// «стакан муки → граммы» требует плотности продукта, то есть датасета, и сюда
// не входит. Меры разных стран названы явно, а не выбираются по контексту.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type CookingVolumeUnit = 'ml' | 'l' | 'tspM' | 'tbspM' | 'cupM' | 'tspUS' | 'tbspUS' | 'cupUS' | 'flozUS';

export const cookingVolumeUnits: ConversionUnits<CookingVolumeUnit> = {
  ml: { symbol: 'мл', factor: 1 },
  l: { symbol: 'л', factor: 1000 },
  tspM: { symbol: 'ч. л. (метр.)', factor: 5 },
  tbspM: { symbol: 'ст. л. (метр.)', factor: 15 },
  cupM: { symbol: 'стакан (метр.)', factor: 250 },
  tspUS: { symbol: 'ч. л. (US)', factor: 29.5735295625 / 6 },
  tbspUS: { symbol: 'ст. л. (US)', factor: 29.5735295625 / 2 },
  cupUS: { symbol: 'стакан (US)', factor: 29.5735295625 * 8 },
  flozUS: { symbol: 'жидк. унция (US)', factor: 29.5735295625 },
};

export const cookingVolumeNames: Record<CookingVolumeUnit, string> = { ml: 'Миллилитр', l: 'Литр', tspM: 'Чайная ложка метрическая', tbspM: 'Столовая ложка метрическая', cupM: 'Стакан метрический', tspUS: 'Чайная ложка США', tbspUS: 'Столовая ложка США', cupUS: 'Стакан США', flozUS: 'Жидкая унция США' };
