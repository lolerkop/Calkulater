import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Корни': 'Roots', 'Дискриминант': 'Discriminant', 'Число корней': 'Number of roots',
  'Вершина параболы': 'Vertex', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Корни': 'Корені', 'Дискриминант': 'Дискримінант', 'Число корней': 'Кількість коренів',
  'Вершина параболы': 'Вершина параболи', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { a: 'Coefficient a', b: 'Coefficient b', c: 'Coefficient c' },
    results: RESULTS_EN,
    values: {
      'Действительных корней нет': 'No real roots',
      'При a = 0 уравнение не квадратное': 'With a = 0 the equation is not quadratic',
    },
  },
  uk: {
    fields: { a: 'Коефіцієнт a', b: 'Коефіцієнт b', c: 'Коефіцієнт c' },
    results: RESULTS_UK,
    values: {
      'Действительных корней нет': 'Дійсних коренів немає',
      'При a = 0 уравнение не квадратное': 'За a = 0 рівняння не квадратне',
    },
  },
  de: {
      fields: {
        'a': 'Koeffizient a',
        'b': 'Koeffizient b',
        'c': 'Koeffizient c',
      },
      options: {},
      results: {
        'Корни': 'Lösungen',
        'Дискриминант': 'Diskriminante',
        'Число корней': 'Zahl der Lösungen',
        'Вершина параболы': 'Scheitelpunkt',
        'Проверьте данные': 'Prüfe die Werte',
      },
      values: {
        'Действительных корней нет': 'Keine reellen Lösungen',
        'При a = 0 уравнение не квадратное': 'Mit a = 0 ist die Gleichung nicht quadratisch',
      },
  },
};
