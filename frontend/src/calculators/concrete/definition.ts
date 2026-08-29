// Бетон: объём заливки по форме плюс запас.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { concreteCopyEn } from './copy.en';
import { concreteCopyUk } from './copy.uk';
import { concreteCopyDe } from './copy.de';
import { concreteReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'concrete',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: concreteCopyEn, uk: concreteCopyUk, de: concreteCopyDe },
  referenceCases: concreteReferenceCases,
  publishedExample: { inputs: { mode: 'slab', length: 6, width: 4, thickness: 0.2, waste: 5 }, expected: ['5,04 м³'] },
  presentation: {
    id: 'concrete',
    name: 'Калькулятор бетона',
    slug: 'concrete',
    fullPath: '/building/concrete/',
    category: 'building',
    icon: 'wall',
    popularity: 53,
    isNew: false,
    shortDescription: 'Объём бетона для плиты, ленты или столбов с запасом на потери.',
    longDescription:
      'Считает объём бетона для трёх обычных форм заливки — плиты, ленты и столбов — и добавляет запас на потери. Чистый объём и объём с запасом выводятся отдельно: заказывают второй, а сверяются по первому. Запас берётся от неокруглённого объёма, иначе округление копилось бы дважды и заказ уезжал бы вверх. Формы считаются раздельно, потому что общего у них ровно одно умножение, а исходные размеры разные.',
    seoTitle: 'Калькулятор бетона — объём для плиты, ленты и столбов',
    seoDescription: 'Рассчитайте объём бетона для плиты, ленточного фундамента или столбов с запасом на потери.',
    h1: 'Калькулятор бетона',
    keywords: ['калькулятор бетона', 'объём бетона', 'сколько бетона нужно', 'бетон на фундамент'],
    fields: [
      {
        name: 'mode', label: 'Форма заливки', type: 'select', defaultValue: 'slab',
        options: [
          { value: 'slab', label: 'плита' },
          { value: 'strip', label: 'лента' },
          { value: 'columns', label: 'столбы' },
        ],
      },
      { name: 'length', label: 'Длина плиты, м', type: 'number', defaultValue: 6, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'slab' } },
      { name: 'width', label: 'Ширина плиты, м', type: 'number', defaultValue: 4, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'slab' } },
      { name: 'thickness', label: 'Толщина плиты, м', type: 'number', defaultValue: 0.2, min: 0, step: 0.01, showIf: { field: 'mode', equals: 'slab' } },
      { name: 'perimeter', label: 'Длина ленты, м', type: 'number', defaultValue: 40, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'strip' } },
      { name: 'stripWidth', label: 'Ширина ленты, м', type: 'number', defaultValue: 0.4, min: 0, step: 0.05, showIf: { field: 'mode', equals: 'strip' } },
      { name: 'depth', label: 'Глубина ленты, м', type: 'number', defaultValue: 0.8, min: 0, step: 0.05, showIf: { field: 'mode', equals: 'strip' } },
      { name: 'sectionArea', label: 'Площадь сечения столба, м²', type: 'number', defaultValue: 0.09, min: 0, step: 0.01, showIf: { field: 'mode', equals: 'columns' } },
      { name: 'height', label: 'Высота столба, м', type: 'number', defaultValue: 2, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'columns' } },
      { name: 'count', label: 'Количество столбов', type: 'number', defaultValue: 12, min: 1, step: 1, showIf: { field: 'mode', equals: 'columns' } },
      { name: 'waste', label: 'Запас, %', type: 'number', defaultValue: 5, min: 0, max: 50, step: 1 },
    ],
    resultLabels: { total: 'Объём бетона', clean: 'Чистый объём', waste: 'Запас' },
    howToUse: ['Выберите форму заливки.', 'Введите её размеры.', 'Задайте запас на потери и прочитайте объём заказа.'],
    howItWorks:
      'Плита — длина на ширину на толщину. Лента — её длина на ширину и глубину. Столбы — площадь сечения на высоту и количество. Полученный объём умножается на единицу плюс запас в долях.',
    example: 'Плита 6 × 4 м толщиной 0,2 м — это 4,8 м³ чистого объёма; с запасом 5 % заказать нужно 5,04 м³.',
    faq: [
      { q: 'Сколько бетона заказывать сверх расчёта?', a: 'Обычно на 5–10 % больше: столько теряется при доставке, разливе и на неровном основании. Точная доля зависит от подготовки площадки, поэтому она вводится, а не подставляется.' },
      { q: 'Почему чистый объём показан отдельно?', a: 'Потому что это разные числа: по чистому объёму сверяют геометрию, а заказывают с запасом. Смешивать их — верный способ недосчитаться бетона на последнем кубе.' },
      { q: 'Чем это отличается от калькулятора ленточного фундамента?', a: 'Здесь три формы заливки и общий расчёт объёма. Ленточный фундамент считает ту же ленту, но от периметра здания и с проверками, характерными именно для него.' },
      { q: 'Учитывается ли арматура?', a: 'Нет. Объём стали внутри заливки мал по сравнению с бетоном, и на практике его не вычитают.' },
    ],
    relatedCalculatorIds: ['brick-calculator', 'screed-calculator', 'room-volume'],
  },
};
