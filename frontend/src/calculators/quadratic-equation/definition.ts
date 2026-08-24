// Квадратное уравнение. Ограничение домена по старшему коэффициенту.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { quadraticEquationCopyEn } from './copy.en';
import { quadraticEquationCopyUk } from './copy.uk';
import { quadraticEquationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'quadratic-equation',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: quadraticEquationCopyEn, uk: quadraticEquationCopyUk },
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
    shortDescription: 'Решение ax² + bx + c = 0 и дискриминант.',
    longDescription:
      'Решает квадратное уравнение и показывает корни, дискриминант, от которого зависит их количество, и вершину параболы. Нулевой старший коэффициент считается ошибкой ввода, а не поводом молча решить линейное уравнение.',
    seoTitle: 'Калькулятор квадратного уравнения — корни и дискриминант',
    seoDescription:
      'Решите ax² + bx + c = 0 онлайн: корни, дискриминант, число корней и вершина параболы.',
    h1: 'Калькулятор квадратного уравнения',
    keywords: ['квадратное уравнение', 'дискриминант', 'корни уравнения'],
    fields: [
      { name: 'a', label: 'Коэффициент a', type: 'number', defaultValue: 1, signed: true },
      { name: 'b', label: 'Коэффициент b', type: 'number', defaultValue: -5, signed: true },
      { name: 'c', label: 'Коэффициент c', type: 'number', defaultValue: 6, signed: true },
    ],
    resultLabels: { roots: 'Корни', discriminant: 'Дискриминант' },
    howToUse: ['Введите коэффициент a — он не может быть нулём.', 'Введите коэффициенты b и c.', 'Прочитайте корни и дискриминант.'],
    howItWorks:
      'Дискриминант D = b² − 4ac определяет количество корней: при D > 0 их два, при D = 0 один, при D < 0 действительных корней нет.',
    example: 'У уравнения x² − 5x + 6 дискриминант равен 1, а корни 3 и 2, потому что оно раскладывается в (x − 3)(x − 2).',
    faq: [
      { q: 'Почему a = 0 отклоняется?', a: 'Уравнение перестаёт быть квадратным. Ответить вместо этого на линейный случай значило бы дать правдоподобный результат к другой задаче.' },
      { q: 'А комплексные корни?', a: 'Они за пределами этого калькулятора. При отрицательном дискриминанте он сообщает, что действительных корней нет.' },
      { q: 'Зачем нужна вершина?', a: 'Это ось симметрии −b / 2a — точка, в которой парабола разворачивается.' },
      { q: 'Как округляются корни?', a: 'Целые корни показываются целыми, остальные — до четырёх знаков после запятой.' },
    ],
    relatedCalculatorIds: ['prime-factorization', 'modulo', 'percent-calculator'],
  },
};
