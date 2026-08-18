import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Корни выведены разложением на множители, а не прогоном формулы:
//   x² − 5x + 6 = (x − 3)(x − 2) → корни 3 и 2, D = 25 − 24 = 1
//   x² + 2x + 1 = (x + 1)²       → корень −1, D = 4 − 4 = 0
//   x² + x + 1                   → D = 1 − 4 = −3, действительных корней нет
//   2x² − 8 = 2(x − 2)(x + 2)    → корни 2 и −2, D = 0 + 64 = 64
export const quadraticEquationReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'два корня: x² − 5x + 6 даёт 3 и 2',
    inputs: { a: 1, b: -5, c: 6 },
    expectPrimary: 'x₁ = 3, x₂ = 2',
    expectSecondary: [{ label: 'Дискриминант', value: '1' }],
  },
  {
    name: 'один корень: полный квадрат x² + 2x + 1',
    inputs: { a: 1, b: 2, c: 1 },
    expectPrimary: 'x = -1',
    expectSecondary: [{ label: 'Число корней', value: '1' }],
  },
  {
    name: 'корней нет: отрицательный дискриминант',
    inputs: { a: 1, b: 1, c: 1 },
    expectPrimary: 'Действительных корней нет',
    expectSecondary: [{ label: 'Дискриминант', value: '-3' }],
  },
  {
    name: 'без линейного члена: 2x² − 8 даёт 2 и −2',
    inputs: { a: 2, b: 0, c: -8 },
    expectPrimary: 'x₁ = 2, x₂ = -2',
    expectSecondary: [{ label: 'Вершина параболы', value: 'x = 0' }],
  },
  {
    name: 'дробные корни округляются до четырёх знаков',
    inputs: { a: 1, b: -1, c: -1 },
    expectPrimary: 'x₁ = 1,6180, x₂ = -0,6180',
  },
  {
    name: 'недопустимо: при a = 0 уравнение не квадратное',
    inputs: { a: 0, b: 2, c: 1 },
    expectPrimary: '—',
  },
];
