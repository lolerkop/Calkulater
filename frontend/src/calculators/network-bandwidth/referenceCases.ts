import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из raw = users·(concurrency/100)·perUser:
//   50·5 = 250 → с запасом 20 % = 300 · 8·25 = 200 без запаса
//   1·0,5 = 0,5 → с запасом 100 % = 1,0
export const networkBandwidthReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '50 пользователей по 5 Мбит/с с запасом 20 %',
    inputs: { users: 50, perUser: 5, overhead: 20, concurrency: 100 },
    expectPrimary: '300,0 Мбит/с',
    expectSecondary: [{ label: 'Без запаса', value: '250,0 Мбит/с' }],
  },
  {
    name: 'без запаса полоса равна сырой: 8 по 25 Мбит/с',
    inputs: { users: 8, perUser: 25, overhead: 0, concurrency: 100 },
    expectPrimary: '200,0 Мбит/с',
    expectSecondary: [{ label: 'Без запаса', value: '200,0 Мбит/с' }],
  },
  {
    name: 'граница: один пользователь и стопроцентный запас',
    inputs: { users: 1, perUser: 0.5, overhead: 100, concurrency: 100 },
    expectPrimary: '1,0 Мбит/с',
  },
  {
    name: 'половина активна одновременно — полоса вдвое меньше',
    inputs: { users: 50, perUser: 5, overhead: 0, concurrency: 50 },
    expectPrimary: '125,0 Мбит/с',
  },
  {
    name: 'недопустимо: ноль пользователей',
    inputs: { users: 0, perUser: 5, overhead: 20, concurrency: 100 },
    expectPrimary: '—',
  },
];
