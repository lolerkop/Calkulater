// Эталонные случаи калькулятора процентов.
//
// Каждое ожидаемое значение выведено вручную из формулы, указанной на странице,
// и НЕ получено прогоном самой функции: иначе тест перестал бы быть проверкой
// и стал бы отражением реализации.
//
//   of      → (A / 100) × B          15 / 100 × 200 = 30
//   what    → (A / B) × 100          50 / 200 × 100 = 25
//   addPct  → A × (1 + B / 100)      200 × 1,15 = 230
//   subPct  → A × (1 − B / 100)      200 × 0,85 = 170
//   change  → (B − A) / A × 100      (130 − 100) / 100 × 100 = +30
//                                    (100 − 130) / 130 × 100 = −23,0769… → −23,08

import type { CalculatorReferenceCase } from '../../lib/platform/types';

export const percentReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'процент от числа: 15% от 200 = 30',
    inputs: { mode: 'of', a: 15, b: 200 },
    expectPrimary: '30,00',
    expectSecondary: [{ label: 'Режим', value: 'Процент от числа' }],
  },
  {
    name: 'процент от числа с дробями: 12,5% от 340 = 42,50',
    inputs: { mode: 'of', a: 12.5, b: 340 },
    expectPrimary: '42,50',
  },
  {
    name: 'доля от целого: 50 от 200 = 25%',
    inputs: { mode: 'what', a: 50, b: 200 },
    expectPrimary: '25,00%',
  },
  {
    name: 'доля от целого: нулевое целое даёт прочерк, а не деление на ноль',
    inputs: { mode: 'what', a: 50, b: 0 },
    expectPrimary: '—',
    expectSecondary: [{ label: 'Ошибка', value: 'Целое не может быть равно нулю' }],
  },
  {
    name: 'прибавить процент: 200 + 15% = 230',
    inputs: { mode: 'addPct', a: 200, b: 15 },
    expectPrimary: '230,00',
  },
  {
    name: 'отнять процент: 200 − 15% = 170',
    inputs: { mode: 'subPct', a: 200, b: 15 },
    expectPrimary: '170,00',
  },
  {
    name: 'изменение вверх: со 100 до 130 = +30%',
    inputs: { mode: 'change', a: 100, b: 130 },
    expectPrimary: '+30,00%',
    expectSecondary: [{ label: 'Абсолютная разница', value: '30,00' }],
  },
  {
    name: 'изменение вниз: со 130 до 100 = −23,08%',
    inputs: { mode: 'change', a: 130, b: 100 },
    expectPrimary: '-23,08%',
    expectSecondary: [{ label: 'Абсолютная разница', value: '-30,00' }],
  },
  {
    name: 'изменение: нулевая база даёт прочерк',
    inputs: { mode: 'change', a: 0, b: 130 },
    expectPrimary: '—',
    expectSecondary: [{ label: 'Ошибка', value: 'Исходное значение не может быть равно нулю' }],
  },
  {
    name: 'неизвестный режим не роняет расчёт',
    inputs: { mode: 'zzz', a: 1, b: 2 },
    expectPrimary: '0,00',
    expectSecondary: [{ label: 'Режим', value: 'Проценты' }],
  },
];
