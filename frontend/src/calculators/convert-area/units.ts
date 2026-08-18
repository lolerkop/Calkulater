// Единицы площади. База — квадратный метр.
//
// Множители заданы готовыми числами, а не возведением множителей длины
// в квадрат на лету: движок не моделирует размерности, и заводить для этого
// анализ величин ради одного конвертера было бы лишним.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type AreaUnit = 'mm2' | 'cm2' | 'm2' | 'ha' | 'km2' | 'in2' | 'ft2' | 'ac';

export const areaUnits: ConversionUnits<AreaUnit> = {
  mm2: { symbol: 'мм²', factor: 1e-6 },
  cm2: { symbol: 'см²', factor: 1e-4 },
  m2: { symbol: 'м²', factor: 1 },
  ha: { symbol: 'га', factor: 10000 },
  km2: { symbol: 'км²', factor: 1e6 },
  in2: { symbol: 'дюйм²', factor: 0.00064516 },
  ft2: { symbol: 'фут²', factor: 0.09290304 },
  ac: { symbol: 'акр', factor: 4046.8564224 },
};

export const areaNames: Record<AreaUnit, string> = { mm2: 'Квадратный миллиметр', cm2: 'Квадратный сантиметр', m2: 'Квадратный метр', ha: 'Гектар', km2: 'Квадратный километр', in2: 'Квадратный дюйм', ft2: 'Квадратный фут', ac: 'Акр' };
