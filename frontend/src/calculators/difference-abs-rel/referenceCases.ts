import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Ожидания посчитаны вручную. Знаменатель — модуль исходного значения:
//   100 → 120: 20 / |100| = +20 %
//   120 → 100: −20 / |120| = −16,666… → −16,67 %
//   −50 → 50: 100 / |−50| = +200 % (процентное изменение дало бы −200 %)
export const differenceAbsRelReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'рост: со 100 до 120 даёт +20 %',
    inputs: { from: 100, to: 120 },
    expectPrimary: '20',
    expectSecondary: [{ label: 'Относительная разница', value: '20,00 %' }],
  },
  {
    name: 'снижение: со 120 до 100 даёт −16,67 %',
    inputs: { from: 120, to: 100 },
    expectPrimary: '-20',
    expectSecondary: [{ label: 'Относительная разница', value: '-16,67 %' }],
  },
  {
    name: 'отрицательная база: знаменатель берётся по модулю',
    inputs: { from: -50, to: 50 },
    expectPrimary: '100',
    expectSecondary: [{ label: 'Относительная разница', value: '200,00 %' }],
  },
  {
    name: 'граница: нулевая база не даёт относительной разницы',
    inputs: { from: 0, to: 5 },
    expectPrimary: '5',
    expectSecondary: [{ label: 'Относительная разница', value: 'Не определена при нулевой базе' }],
  },
  {
    name: 'граница: значения совпадают',
    inputs: { from: 42, to: 42 },
    expectPrimary: '0',
    expectSecondary: [{ label: 'Направление', value: 'Без изменений' }],
  },
  {
    name: 'дробные значения округляются до четырёх знаков',
    inputs: { from: 3, to: 3.5 },
    expectPrimary: '0,5000',
  },
];
