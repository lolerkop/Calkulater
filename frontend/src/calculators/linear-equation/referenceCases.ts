import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из x = (c − b) ÷ a:
//   (20 − 5)/3 = 5 · (−9 − 7)/(−4) = 4 · (4,5 − (−3))/2,5 = 3
export const linearEquationReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '3x + 5 = 20 даёт x = 5',
    inputs: { a: 3, b: 5, c: 20 },
    expectPrimary: 'x = 5',
    expectSecondary: [{ label: 'Перенос свободного члена', value: '3x = 15' }],
  },
  {
    name: 'отрицательный коэффициент: −4x + 7 = −9 даёт x = 4',
    inputs: { a: -4, b: 7, c: -9 },
    expectPrimary: 'x = 4',
  },
  {
    name: 'дробные коэффициенты: 2,5x − 3 = 4,5 даёт x = 3',
    inputs: { a: 2.5, b: -3, c: 4.5 },
    expectPrimary: 'x = 3',
  },
  {
    name: 'нецелый корень показывается значащими цифрами',
    inputs: { a: 3, b: 0, c: 1 },
    expectPrimary: 'x = 0,333333',
  },
  {
    name: 'вырожденный случай: a = 0 и b = c — верно при любом x',
    inputs: { a: 0, b: 5, c: 5 },
    expectPrimary: 'любое число',
  },
  {
    name: 'вырожденный случай: a = 0 и b ≠ c — решений нет',
    inputs: { a: 0, b: 5, c: 9 },
    expectPrimary: 'решений нет',
  },
];
