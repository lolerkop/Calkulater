// Единицы длины. База — метр.
//
// Имперские значения точны по определению: дюйм равен ровно 0,0254 м,
// остальные выведены из него целыми множителями. Поэтому перевод дюймов
// в сантиметры точен, а не приближён.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type LengthUnit = 'mm' | 'cm' | 'm' | 'km' | 'in' | 'ft' | 'yd' | 'mi' | 'nmi';

export const lengthUnits: ConversionUnits<LengthUnit> = {
  mm: { symbol: 'мм', factor: 0.001 },
  cm: { symbol: 'см', factor: 0.01 },
  m: { symbol: 'м', factor: 1 },
  km: { symbol: 'км', factor: 1000 },
  in: { symbol: 'дюйм', factor: 0.0254 },
  ft: { symbol: 'фут', factor: 0.3048 },
  yd: { symbol: 'ярд', factor: 0.9144 },
  mi: { symbol: 'миля', factor: 1609.344 },
  nmi: { symbol: 'мор. миля', factor: 1852 },
};

export const lengthNames: Record<LengthUnit, string> = {
  mm: 'Миллиметр', cm: 'Сантиметр', m: 'Метр', km: 'Километр',
  in: 'Дюйм', ft: 'Фут', yd: 'Ярд', mi: 'Миля', nmi: 'Морская миля',
};
