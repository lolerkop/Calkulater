// Квадратное уравнение. Ограничение домена по старшему коэффициенту.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { quadraticEquationCopyEn } from './copy.en';
import { quadraticEquationCopyUk } from './copy.uk';
import { quadraticEquationCopyDe } from './copy.de';
import { quadraticEquationCopyEs } from './copy.es';
import { quadraticEquationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'quadratic-equation',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: quadraticEquationCopyEn, uk: quadraticEquationCopyUk, de: quadraticEquationCopyDe, es: quadraticEquationCopyEs },
  referenceCases: quadraticEquationReferenceCases,
  publishedExample: { inputs: { a: 1, b: -5, c: 6 }, expected: ['x₁ = 3, x₂ = 2', '1'] },
  presentation: {
    id: 'quadratic-equation',
    name: 'Калькулятор квадратного уравнения',
    slug: 'quadratic-equation',
    fullPath: '/math/quadratic-equation/',
    category: 'math',
    icon: 'calculator',
    popularity: 47,
    isNew: false,
    shortDescription: "Решение ax² + bx + c = 0 и дискриминант.",
    longDescription:
      "Решает ax² + bx + c = 0 при a ≠ 0 в вещественных числах. Показывает дискриминант, число различных действительных корней и x-координату вершины параболы. При D = 0 один показанный корень имеет кратность два. Полный набор комплексных корней и линейный случай при a = 0 не входят в эту модель.",
    seoTitle: 'Калькулятор квадратного уравнения — корни и дискриминант',
    seoDescription:
      "Корни ax² + bx + c = 0, дискриминант и x-координата вершины при a ≠ 0. Действительные корни с проверкой числового диапазона.",
    h1: 'Калькулятор квадратного уравнения',
    keywords: ['квадратное уравнение', 'дискриминант', 'корни уравнения'],
    fields: [
      { name: 'a', label: 'Коэффициент a', type: 'number', defaultValue: 1, signed: true },
      { name: 'b', label: 'Коэффициент b', type: 'number', defaultValue: -5, signed: true },
      { name: 'c', label: 'Коэффициент c', type: 'number', defaultValue: 6, signed: true },
    ],
    resultLabels: { roots: 'Корни', discriminant: 'Дискриминант' },
    howToUse: ["Введите коэффициент a — он не может быть нулём.", "Введите коэффициенты b и c.", "Прочитайте корни и дискриминант."],
    howItWorks:
      "D = b² − 4ac: при D > 0 корни x₁,₂ = (−b ± √D)/(2a), при D = 0 корень x = −b/(2a), при D < 0 действительных корней нет. Ось симметрии задаётся xV = −b/(2a). Вершина — пара (xV, f(xV)), но здесь выводится только xV. Для двух корней численно используется устойчивый вариант формулы и соотношение x₁x₂ = c/a.",
    example: "У уравнения x² − 5x + 6 дискриминант равен 1, а корни 3 и 2, потому что оно раскладывается в (x − 3)(x − 2).",
    faq: [{"q": "Почему a = 0 отклоняется?", "a": "Уравнение перестаёт быть квадратным. Ответить вместо этого на линейный случай значило бы дать правдоподобный результат к другой задаче."}, {"q": "А комплексные корни?", "a": "Они за пределами этого калькулятора. При отрицательном дискриминанте он сообщает, что действительных корней нет."}, {"q": "Зачем нужна вершина?", "a": "На оси симметрии xV = −b/(2a) находится вершина. Это её x-координата, а не полный набор координат и не минимальное или максимальное значение функции. Для него нужно отдельно вычислить f(xV)."}, {"q": "Как округляются корни?", "a": "Обычно целые значения выводятся целыми, остальные — до четырёх десятичных знаков. При 0 < |x| < 0,0001 или |x| ≥ 10¹² используется научная запись с шестью значащими цифрами, чтобы малый ненулевой корень не выглядел нулём."}],
    disclaimer: "Коэффициенты должны быть конечными числами, a ≠ 0. Расчёт работает с их двоичным числовым представлением. Корни округляются: обычно до четырёх десятичных знаков, при |x| < 0,0001 или ≥ 10¹² используется научная запись с шестью значащими цифрами. Если дискриминант, xV или корень не представимы без переполнения или потери ненулевого значения, выводится ошибка.",
    relatedCalculatorIds: ['prime-factorization', 'modulo', 'percent-calculator'],
  },
};
