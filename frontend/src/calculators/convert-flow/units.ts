// Единицы объёмного расхода. База — кубометр в секунду. Массовый расход сюда не
// входит: он требует плотности вещества, то есть данных, которых у конвертера
// единиц нет.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type FlowUnit = 'm3s' | 'm3h' | 'ls' | 'lmin' | 'lh' | 'ft3min' | 'galmin';

export const flowUnits: ConversionUnits<FlowUnit> = {
  m3s: { symbol: 'м³/с', factor: 1 },
  m3h: { symbol: 'м³/ч', factor: 1 / 3600 },
  ls: { symbol: 'л/с', factor: 0.001 },
  lmin: { symbol: 'л/мин', factor: 0.001 / 60 },
  lh: { symbol: 'л/ч', factor: 0.001 / 3600 },
  ft3min: { symbol: 'ft³/мин', factor: 0.3048 ** 3 / 60 },
  galmin: { symbol: 'гал/мин', factor: 3.785411784e-3 / 60 },
};

export const flowNames: Record<FlowUnit, string> = { m3s: 'Кубометр в секунду', m3h: 'Кубометр в час', ls: 'Литр в секунду', lmin: 'Литр в минуту', lh: 'Литр в час', ft3min: 'Кубический фут в минуту', galmin: 'Галлон США в минуту' };
