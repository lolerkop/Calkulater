import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из уравнения Фишера:
//   1,12/1,07 − 1 = 0,0467289… → 4,67 % (разность дала бы 5 %)
//   1,05/1,09 − 1 = −0,0366972… → −3,67 % · при равных ставках ровно 0
export const realReturnReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'номинал 12 % при инфляции 7 % — реальные 4,67 %, а не 5 %',
    inputs: { nominal: 12, inflation: 7 },
    expectPrimary: '4,67%',
    expectSecondary: [{ label: 'Грубая оценка разностью', value: '5,00%' }],
  },
  {
    name: 'инфляция обгоняет ставку: 5 % против 9 %',
    inputs: { nominal: 5, inflation: 9 },
    expectPrimary: '-3,67%',
  },
  {
    name: 'граница: равные ставки дают ровно ноль',
    inputs: { nominal: 7, inflation: 7 },
    expectPrimary: '0,00%',
  },
  {
    name: 'нулевая инфляция оставляет номинал без изменений',
    inputs: { nominal: 10, inflation: 0 },
    expectPrimary: '10,00%',
  },
  {
    name: 'недопустимо: инфляция минус сто процентов',
    inputs: { nominal: 12, inflation: -100 },
    expectPrimary: '—',
  },
];
