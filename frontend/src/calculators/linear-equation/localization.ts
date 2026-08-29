import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Корень': 'Root', 'Уравнение': 'Equation', 'Почему так': 'Why',
  'Перенос свободного члена': 'Moving the constant', 'Деление на коэффициент': 'Dividing by the coefficient',
  'Проверка подстановкой': 'Check by substitution',
};
const RESULTS_UK = {
  'Корень': 'Корінь', 'Уравнение': 'Рівняння', 'Почему так': 'Чому так',
  'Перенос свободного члена': 'Перенесення вільного члена', 'Деление на коэффициент': 'Ділення на коефіцієнт',
  'Проверка подстановкой': 'Перевірка підстановкою',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'a': 'Koeffizient a',
      'b': 'Konstante b',
      'c': 'Rechte Seite c',
    },
    results: {
      'Корень': 'Lösung',
      'Уравнение': 'Gleichung',
      'Почему так': 'Warum das so ist',
      'Перенос свободного члена': 'Konstante verschieben',
      'Деление на коэффициент': 'Durch den Koeffizienten teilen',
      'Проверка подстановкой': 'Probe durch Einsetzen',
    },
    values: {
      'любое число': 'jede Zahl',
      'решений нет': 'keine Lösung',
      'При нулевом коэффициенте уравнение превращается в верное равенство, которому удовлетворяет любое x': 'Bei einem Koeffizienten von null wird die Gleichung zu einer wahren Aussage, die jedes x erfüllt',
      'При нулевом коэффициенте уравнение превращается в неверное равенство, и корня нет': 'Bei einem Koeffizienten von null wird die Gleichung zu einer falschen Aussage, und es gibt keine Lösung',
    },
  },
  en: {
    fields: { a: 'Coefficient a', b: 'Constant b', c: 'Right-hand side c' },
    results: RESULTS_EN,
    values: {
      'любое число': 'any number', 'решений нет': 'no solution',
      'При нулевом коэффициенте уравнение превращается в верное равенство, которому удовлетворяет любое x':
        'With a zero coefficient the equation becomes a true statement, which any x satisfies',
      'При нулевом коэффициенте уравнение превращается в неверное равенство, и корня нет':
        'With a zero coefficient the equation becomes a false statement, so there is no root',
    },
  },
  uk: {
    fields: { a: 'Коефіцієнт a', b: 'Вільний член b', c: 'Права частина c' },
    results: RESULTS_UK,
    values: {
      'любое число': 'будь-яке число', 'решений нет': 'розв’язків немає',
      'При нулевом коэффициенте уравнение превращается в верное равенство, которому удовлетворяет любое x':
        'За нульового коефіцієнта рівняння перетворюється на правильну рівність, якій задовольняє будь-яке x',
      'При нулевом коэффициенте уравнение превращается в неверное равенство, и корня нет':
        'За нульового коефіцієнта рівняння перетворюється на хибну рівність, і кореня немає',
    },
  },
};
