// Параллелограмм: площадь по высоте либо по двум сторонам и углу.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomParallelogramCopyEn } from './copy.en';
import { geomParallelogramCopyUk } from './copy.uk';
import { geomParallelogramReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'geom-parallelogram',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: geomParallelogramCopyEn, uk: geomParallelogramCopyUk },
  referenceCases: geomParallelogramReferenceCases,
  publishedExample: { inputs: { unit: 'cm', mode: 'height', a: 10, h: 6 }, expected: ['60 см²'] },
  presentation: {
    id: 'geom-parallelogram',
    name: 'Калькулятор параллелограмма',
    slug: 'parallelogram',
    fullPath: '/geometry/parallelogram/',
    category: 'geometry',
    icon: 'shapes',
    popularity: 44,
    isNew: true,
    shortDescription: 'Площадь по основанию и высоте либо по двум сторонам и углу между ними.',
    longDescription:
      'Решает параллелограмм двумя путями: по основанию с высотой и по двум сторонам с углом между ними. Второй режим даёт заодно периметр, высоту и обе диагонали, первый — только площадь, потому что вторая сторона из основания и высоты не следует, и вместо правдоподобного периметра выводится прочерк. При угле 0 или 180 градусов фигура вырождается в отрезок: такой ввод отклоняется, а не даёт нулевую площадь.',
    seoTitle: 'Калькулятор параллелограмма — площадь, периметр, диагонали',
    seoDescription: 'Рассчитайте площадь параллелограмма по основанию и высоте или по двум сторонам и углу, вместе с периметром и диагоналями.',
    h1: 'Калькулятор параллелограмма',
    keywords: ['калькулятор параллелограмма', 'площадь параллелограмма', 'диагонали параллелограмма'],
    fields: [
      {
        name: 'unit', label: 'Единица длины', type: 'select', defaultValue: 'cm',
        options: [
          { value: 'mm', label: 'миллиметры' },
          { value: 'cm', label: 'сантиметры' },
          { value: 'm', label: 'метры' },
        ],
      },
      {
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'height',
        options: [
          { value: 'height', label: 'основание и высота' },
          { value: 'sides', label: 'две стороны и угол' },
        ],
      },
      { name: 'a', label: 'Сторона a', type: 'number', defaultValue: 10, min: 0, step: 0.1 },
      { name: 'h', label: 'Высота к стороне a', type: 'number', defaultValue: 6, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'height' } },
      { name: 'b', label: 'Сторона b', type: 'number', defaultValue: 8, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'sides' } },
      { name: 'angle', label: 'Угол между сторонами, градусов', type: 'number', defaultValue: 30, min: 0, max: 180, step: 1, showIf: { field: 'mode', equals: 'sides' } },
    ],
    resultLabels: {
      area: 'Площадь', perimeter: 'Периметр', height: 'Высота к стороне a', base: 'Основание',
      h: 'Высота', dLong: 'Большая диагональ', dShort: 'Меньшая диагональ',
    },
    howToUse: ['Выберите единицу длины.', 'Укажите, что известно — высота или вторая сторона с углом.', 'Введите размеры и прочитайте площадь.'],
    howItWorks:
      'S = a·h, если известна высота к стороне a. Через две стороны и угол между ними S = a·b·sin θ, где угол переводится в радианы явно. Диагонали находятся по теореме косинусов.',
    example: 'Стороны 10 и 8 см при угле 30° дают площадь 40 см² и периметр 36 см.',
    faq: [
      { q: 'Почему в режиме по высоте периметр не показан?', a: 'Потому что из основания и высоты вторая сторона не следует: одну и ту же площадь дают бесконечно много параллелограммов с разным наклоном. Выводить периметр было бы выдумкой.' },
      { q: 'Что происходит при угле 90 градусов?', a: 'Синус равен единице, и параллелограмм становится прямоугольником: площадь равна произведению сторон.' },
      { q: 'Почему угол 180 градусов отклоняется?', a: 'При нём фигура вырождается в отрезок и перестаёт быть параллелограммом. Нулевая площадь здесь была бы формально верной, но бессмысленной, поэтому калькулятор сообщает об ошибке.' },
      { q: 'Чем параллелограмм отличается от ромба?', a: 'У ромба все стороны равны. Введите одинаковые a и b — расчёт останется верным и для него.' },
    ],
    relatedCalculatorIds: ['geom-rectangle', 'geom-trapezoid', 'geom-triangle'],
  },
};
