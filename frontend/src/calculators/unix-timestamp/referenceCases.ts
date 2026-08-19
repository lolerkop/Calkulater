import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены из определения эпохи вручную:
//   1 700 000 000 с после 1970-01-01 → 2023-11-14 22:13:20 UTC
//   2000-01-01 отстоит от эпохи на 946 684 800 с
//   −86 400 — ровно сутки до эпохи
export const unixTimestampReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'ts 1 700 000 000 — это 14 ноября 2023 года',
    inputs: { mode: 'toDate', timestamp: 1700000000 },
    expectPrimary: '2023-11-14 22:13:20 UTC',
    expectSecondary: [{ label: 'День недели', value: 'вторник' }],
  },
  {
    name: 'обратно: 2000-01-01 UTC даёт 946 684 800',
    inputs: { mode: 'toTimestamp', date: '2000-01-01', hour: 0, minute: 0, second: 0 },
    expectPrimary: '946684800',
  },
  {
    name: 'время суток учитывается: 2000-01-01 12:30:45 UTC',
    inputs: { mode: 'toTimestamp', date: '2000-01-01', hour: 12, minute: 30, second: 45 },
    expectPrimary: '946729845',
  },
  {
    name: 'граница: ноль — начало эпохи',
    inputs: { mode: 'toDate', timestamp: 0 },
    expectPrimary: '1970-01-01 00:00:00 UTC',
  },
  {
    name: 'граница: отрицательное время — сутки до эпохи',
    inputs: { mode: 'toDate', timestamp: -86400 },
    expectPrimary: '1969-12-31 00:00:00 UTC',
  },
  {
    name: 'недопустимо: дробные секунды',
    inputs: { mode: 'toDate', timestamp: 1.5 },
    expectPrimary: '—',
  },
];
