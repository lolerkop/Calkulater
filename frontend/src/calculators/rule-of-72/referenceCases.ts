import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную: приближение 72 ÷ ставка, точный срок ln2 ÷ ln(1+r).
//   72/8 = 9 · ln2/ln1,08 = 9,00647 → расхождение 0,0065
//   72/3 = 24 · ln2/ln1,03 = 23,44977 → расхождение 0,5502
//   72/0,5 = 144 · ln2/ln1,005 = 138,9757 → расхождение 5,0243
export const ruleOf72ReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'ставка 8 % — правило даёт ровно 9 лет',
    inputs: { rate: 8 },
    expectPrimary: '9,00 лет',
    expectSecondary: [
      { label: 'Точный срок удвоения', value: '9,01 лет' },
      { label: 'Расхождение правила', value: '0,01 лет' },
    ],
  },
  {
    name: 'ставка 3 % — правило завышает на полгода',
    inputs: { rate: 3 },
    expectPrimary: '24,00 лет',
    expectSecondary: [
      { label: 'Точный срок удвоения', value: '23,45 лет' },
      { label: 'Расхождение правила', value: '0,55 лет' },
    ],
  },
  {
    name: 'граница: на 0,5 % правило ошибается на пять лет',
    inputs: { rate: 0.5 },
    expectPrimary: '144,00 лет',
    expectSecondary: [
      { label: 'Точный срок удвоения', value: '138,98 лет' },
      { label: 'Расхождение правила', value: '5,02 лет' },
    ],
  },
  {
    name: 'с капиталом появляется строка об удвоенной сумме',
    inputs: { rate: 8, amount: 100000 },
    expectPrimary: '9,00 лет',
    expectSecondary: [{ label: 'Сумма после удвоения', value: '200 000,00 ₽' }],
  },
  {
    name: 'недопустимо: нулевая ставка — удвоения не будет',
    inputs: { rate: 0 },
    expectPrimary: '—',
  },
];
