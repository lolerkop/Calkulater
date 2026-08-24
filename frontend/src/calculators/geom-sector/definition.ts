// Сектор круга: площадь, дуга и хорда.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomSectorCopyEn } from './copy.en';
import { geomSectorCopyUk } from './copy.uk';
import { geomSectorReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'geom-sector',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: geomSectorCopyEn, uk: geomSectorCopyUk },
  referenceCases: geomSectorReferenceCases,
  publishedExample: { inputs: { unit: 'cm', radius: 5, angle: 60 }, expected: ['13,09 см²'] },
  presentation: {
    id: 'geom-sector',
    name: 'Калькулятор сектора круга',
    slug: 'sector',
    fullPath: '/geometry/sector/',
    category: 'geometry',
    icon: 'shapes',
    popularity: 45,
    isNew: false,
    shortDescription: 'Площадь сектора, длина дуги и хорда по радиусу и углу.',
    longDescription:
      'Считает сектор круга по радиусу и центральному углу: площадь, длину дуги, хорду и периметр сектора вместе с долей полного круга. Угол вводится в градусах и переводится в радианы внутри расчёта — формулы площади и дуги работают только с радианной мерой. При полном круге хорда обращается ровно в нуль: двоичная арифметика даёт здесь 1,22·10⁻¹⁶, и показывать этот шум как длину было бы неверно.',
    seoTitle: 'Калькулятор сектора круга — площадь, дуга, хорда',
    seoDescription: 'Рассчитайте площадь сектора круга, длину дуги и хорду по радиусу и центральному углу.',
    h1: 'Калькулятор сектора круга',
    keywords: ['сектор круга', 'площадь сектора', 'длина дуги', 'хорда окружности'],
    fields: [
      {
        name: 'unit', label: 'Единица длины', type: 'select', defaultValue: 'cm',
        options: [
          { value: 'mm', label: 'миллиметры' },
          { value: 'cm', label: 'сантиметры' },
          { value: 'm', label: 'метры' },
        ],
      },
      { name: 'radius', label: 'Радиус', type: 'number', defaultValue: 5, min: 0, step: 0.1 },
      { name: 'angle', label: 'Центральный угол, градусов', type: 'number', defaultValue: 60, min: 0, max: 360, step: 1 },
    ],
    resultLabels: {
      area: 'Площадь сектора', arc: 'Длина дуги', chord: 'Хорда',
      perimeter: 'Периметр сектора', share: 'Доля круга',
    },
    howToUse: ['Выберите единицу длины.', 'Введите радиус.', 'Задайте центральный угол в градусах.'],
    howItWorks:
      'Угол переводится в радианы: θ = α·π/180. Площадь сектора S = ½r²θ, длина дуги L = rθ, хорда c = 2r·sin(θ/2). Периметр сектора складывается из дуги и двух радиусов.',
    example: 'Сектор радиусом 5 см с углом 60° имеет площадь 13,09 см², дугу 5,236 см и хорду ровно 5 см.',
    faq: [
      { q: 'Почему при 360 градусах хорда равна нулю?', a: 'Потому что концы дуги совпадают: соединяющий их отрезок вырождается в точку. Двоичная арифметика даёт здесь крошечный остаток, и он намеренно приводится к точному нулю.' },
      { q: 'Чем хорда отличается от длины дуги?', a: 'Дуга идёт по окружности, хорда — по прямой между её концами. Хорда всегда короче, и разница растёт с углом.' },
      { q: 'Зачем переводить градусы в радианы?', a: 'Формулы S = ½r²θ и L = rθ верны только для радианной меры угла. Подставить в них градусы значит ошибиться примерно в 57 раз.' },
      { q: 'Как получить площадь сегмента?', a: 'Вычтите из площади сектора площадь треугольника с вершиной в центре: S_сегмента = ½r²(θ − sin θ).' },
    ],
    relatedCalculatorIds: ['geom-circle', 'geom-regular-polygon', 'geom-triangle'],
  },
};
