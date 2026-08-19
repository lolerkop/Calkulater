import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из v = s ÷ t: 420/5 = 84 · 90·2,5 = 225 · 150/60 = 2,5
export const speedDistanceTimeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '420 км за 5 часов — 84 км/ч',
    inputs: { mode: 'speed', distance: 420, time: 5 },
    expectPrimary: '84,00 км/ч',
  },
  {
    name: '90 км/ч в течение 2,5 часа — 225 км',
    inputs: { mode: 'distance', speed: 90, time: 2.5 },
    expectPrimary: '225,00 км',
  },
  {
    name: '150 км при 60 км/ч — два с половиной часа',
    inputs: { mode: 'time', distance: 150, speed: 60 },
    expectPrimary: '2,5000 ч',
    expectSecondary: [{ label: 'Время в пути', value: '2 ч 30 мин' }],
  },
  {
    name: 'граница: нулевая скорость не задаёт время',
    inputs: { mode: 'time', distance: 150, speed: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: отрицательное расстояние',
    inputs: { mode: 'speed', distance: -10, time: 5 },
    expectPrimary: '—',
  },
];
