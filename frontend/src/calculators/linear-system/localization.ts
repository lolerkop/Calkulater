import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      a1: 'a₁ — coefficient of x in the first equation',
      b1: 'b₁ — coefficient of y in the first equation',
      c1: 'c₁ — right-hand side of the first equation',
      a2: 'a₂ — coefficient of x in the second equation',
      b2: 'b₂ — coefficient of y in the second equation',
      c2: 'c₂ — right-hand side of the second equation',
    },
    results: {
      'Решение системы': 'Solution',
      'Определитель': 'Main determinant',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Определитель равен нулю: решение не единственно': 'The determinant is zero: the solution is not unique',
    },
  },
  uk: {
    fields: {
      a1: 'a₁ — коефіцієнт при x у першому рівнянні',
      b1: 'b₁ — коефіцієнт при y у першому рівнянні',
      c1: 'c₁ — права частина першого рівняння',
      a2: 'a₂ — коефіцієнт при x у другому рівнянні',
      b2: 'b₂ — коефіцієнт при y у другому рівнянні',
      c2: 'c₂ — права частина другого рівняння',
    },
    results: {
      'Решение системы': 'Розв’язок системи',
      'Определитель': 'Головний визначник',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Определитель равен нулю: решение не единственно': 'Визначник дорівнює нулю: розв’язок не єдиний',
    },
  },
};
