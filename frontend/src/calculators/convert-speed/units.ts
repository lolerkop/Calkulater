// Единицы скорости. База — метр в секунду.
//
// Миля в час и узел выведены из точных определений длины: 1609,344 м и 1852 м
// соответственно, делённые на 3600 секунд.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type SpeedUnit = 'ms' | 'kmh' | 'mph' | 'kn' | 'fts';

export const speedUnits: ConversionUnits<SpeedUnit> = {
  ms: { symbol: 'м/с', factor: 1 },
  kmh: { symbol: 'км/ч', factor: 1 / 3.6 },
  mph: { symbol: 'миль/ч', factor: 0.44704 },
  kn: { symbol: 'узел', factor: 1852 / 3600 },
  fts: { symbol: 'фут/с', factor: 0.3048 },
};

export const speedNames: Record<SpeedUnit, string> = { ms: 'Метр в секунду', kmh: 'Километр в час', mph: 'Миля в час', kn: 'Узел', fts: 'Фут в секунду' };
