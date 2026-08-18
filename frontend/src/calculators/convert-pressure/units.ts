// Единицы давления. База — паскаль.
//
// В одном списке сходятся четыре системы: СИ, техническая (бар),
// физическая (атмосфера) и имперская (psi). Множитель psi выведен из точных
// определений фунт-силы и квадратного дюйма.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type PressureUnit = 'pa' | 'kpa' | 'mpa' | 'mbar' | 'bar' | 'atm' | 'psi' | 'mmhg';

export const pressureUnits: ConversionUnits<PressureUnit> = {
  pa: { symbol: 'Па', factor: 1 },
  kpa: { symbol: 'кПа', factor: 1000 },
  mpa: { symbol: 'МПа', factor: 1e6 },
  mbar: { symbol: 'мбар', factor: 100 },
  bar: { symbol: 'бар', factor: 100000 },
  atm: { symbol: 'атм', factor: 101325 },
  psi: { symbol: 'psi', factor: 4.4482216152605 / 0.00064516 },
  mmhg: { symbol: 'мм рт. ст.', factor: 133.322387415 },
};

export const pressureNames: Record<PressureUnit, string> = { pa: 'Паскаль', kpa: 'Килопаскаль', mpa: 'Мегапаскаль', mbar: 'Миллибар', bar: 'Бар', atm: 'Атмосфера', psi: 'Фунт на дюйм² (psi)', mmhg: 'Миллиметр ртутного столба' };
