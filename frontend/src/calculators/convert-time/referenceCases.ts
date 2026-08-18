import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения известны из определения единиц времени и записаны вручную:
//   1 ч = 3600 с · 1 сут = 24 ч · 1 нед = 7 сут · 1 мин = 60 000 мс
export const timeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'час равен 3600 секундам',
    inputs: { value: 1, from: 'h', to: 's' },
    expectPrimary: '3 600,00 с',
  },
  {
    name: 'сутки равны 24 часам',
    inputs: { value: 1, from: 'd', to: 'h' },
    expectPrimary: '24,0000 ч',
  },
  {
    name: 'неделя равна 7 суткам',
    inputs: { value: 1, from: 'wk', to: 'd' },
    expectPrimary: '7,0000 сут',
  },
  {
    name: 'минута равна 60 000 миллисекунд',
    inputs: { value: 1, from: 'min', to: 'ms' },
    expectPrimary: '60 000,00 мс',
  },
  {
    name: 'полтора часа: 90 минут дают 1,5 часа',
    inputs: { value: 90, from: 'min', to: 'h' },
    expectPrimary: '1,5000 ч',
  },
  {
    // Малая доля: проверяет ветку с девятью знаками после запятой.
    name: 'секунда в неделях требует девяти знаков',
    inputs: { value: 1, from: 's', to: 'wk' },
    expectPrimary: '0,000001653 нед',
  },
  {
    name: 'ноль остаётся нулём',
    inputs: { value: 0, from: 'h', to: 'min' },
    expectPrimary: '0 мин',
  },
];
