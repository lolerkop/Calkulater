import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Ожидания получены перекрёстным умножением вручную:
//   2 / 3 = 4 / d → d = 3·4 / 2 = 6
//   5 / b = 10 / 4 → b = 5·4 / 10 = 2
//   a / 8 = 3 / 12 → a = 8·3 / 12 = 2
//   2 / 3 = c / 9 → c = 2·9 / 3 = 6
export const proportionReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'четвёртый член: 2 / 3 = 4 / d даёт 6',
    inputs: { find: 'd', a: 2, b: 3, c: 4, d: 0 },
    expectPrimary: '6',
    expectSecondary: [{ label: 'Пропорция', value: '2 : 3 = 4 : 6' }],
  },
  {
    name: 'второй член: 5 / b = 10 / 4 даёт 2',
    inputs: { find: 'b', a: 5, b: 0, c: 10, d: 4 },
    expectPrimary: '2',
  },
  {
    name: 'первый член: a / 8 = 3 / 12 даёт 2',
    inputs: { find: 'a', a: 0, b: 8, c: 3, d: 12 },
    expectPrimary: '2',
  },
  {
    name: 'третий член: 2 / 3 = c / 9 даёт 6',
    inputs: { find: 'c', a: 2, b: 3, c: 0, d: 9 },
    expectPrimary: '6',
  },
  {
    name: 'дробный результат округляется до четырёх знаков',
    inputs: { find: 'd', a: 3, b: 1, c: 1, d: 0 },
    expectPrimary: '0,3333',
  },
  {
    name: 'проверка перекрёстных произведений совпадает',
    inputs: { find: 'd', a: 2, b: 3, c: 4, d: 0 },
    expectPrimary: '6',
    expectSecondary: [{ label: 'Проверка произведений', value: '12 = 12' }],
  },
  {
    name: 'недопустимо: диагональный член равен нулю',
    inputs: { find: 'd', a: 0, b: 3, c: 4, d: 0 },
    expectPrimary: '—',
  },
];
