import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из E = C·U·(DoD/100)·(η/100), t = E ÷ P:
//   100·12·0,8·0,9 = 864 Вт·ч → 864/200 = 4,32 ч
//   7·12 = 84 Вт·ч → 84/30 = 2,8 ч · 1·3,7 = 3,7 → 3,7/3,7 = 1 ч
export const batteryRuntimeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '100 А·ч при 12 В на нагрузку 200 Вт с DoD 80 % и КПД 90 %',
    inputs: { capacity: 100, voltage: 12, load: 200, dod: 80, efficiency: 90 },
    expectPrimary: '4,32 ч',
    expectSecondary: [{ label: 'Полезная энергия', value: '864,0 Вт·ч' }],
  },
  {
    name: 'малая батарея без потерь: 7 А·ч при 12 В на 30 Вт',
    inputs: { capacity: 7, voltage: 12, load: 30, dod: 100, efficiency: 100 },
    expectPrimary: '2,80 ч',
  },
  {
    name: 'граница: ровно один час',
    inputs: { capacity: 1, voltage: 3.7, load: 3.7, dod: 100, efficiency: 100 },
    expectPrimary: '1,00 ч',
    expectSecondary: [{ label: 'Часы и минуты', value: '1 ч 0 мин' }],
  },
  {
    name: 'недопустимо: нулевая нагрузка',
    inputs: { capacity: 100, voltage: 12, load: 0, dod: 100, efficiency: 100 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: глубина разряда выше ста процентов',
    inputs: { capacity: 100, voltage: 12, load: 200, dod: 120, efficiency: 90 },
    expectPrimary: '—',
  },
];
