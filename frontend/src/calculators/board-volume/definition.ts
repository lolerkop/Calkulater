// Кубатура досок: объём пиломатериала и число досок в кубометре.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { boardVolumeCopyEn } from './copy.en';
import { boardVolumeCopyUk } from './copy.uk';
import { boardVolumeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'board-volume',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: boardVolumeCopyEn, uk: boardVolumeCopyUk },
  referenceCases: boardVolumeReferenceCases,
  publishedExample: { inputs: { length: 6, width: 150, thickness: 25, count: 50, pricePerM3: 0 }, expected: ['1,125 м³'] },
  presentation: {
    id: 'board-volume',
    name: 'Калькулятор кубатуры досок',
    slug: 'board-volume',
    fullPath: '/building/board-volume/',
    category: 'building',
    icon: 'wall',
    popularity: 48,
    isNew: false,
    shortDescription: 'Объём пиломатериала, объём одной доски и сколько досок в кубометре.',
    longDescription:
      'Переводит длину и сечение доски в кубометры — единицу, в которой пиломатериал продают. Длину меряют метрами, сечение миллиметрами, и именно на этом переводе чаще всего ошибаются: перемножить миллиметры как метры значит промахнуться в миллион раз, получив по форме правдоподобную запись. Здесь перевод сделан явно. Отдельной строкой выводится, сколько таких досок помещается в кубометр — по этой цифре обычно и сверяются на складе.',
    seoTitle: 'Калькулятор кубатуры досок — объём пиломатериала',
    seoDescription: 'Рассчитайте объём досок в кубометрах по длине и сечению, объём одной доски и число досок в кубометре.',
    h1: 'Калькулятор кубатуры досок',
    keywords: ['кубатура досок', 'объём доски', 'сколько досок в кубе', 'калькулятор пиломатериала'],
    fields: [
      { name: 'length', label: 'Длина доски, м', type: 'number', defaultValue: 6, min: 0, step: 0.1 },
      { name: 'width', label: 'Ширина доски, мм', type: 'number', defaultValue: 150, min: 0, step: 1 },
      { name: 'thickness', label: 'Толщина доски, мм', type: 'number', defaultValue: 25, min: 0, step: 1 },
      { name: 'count', label: 'Количество досок', type: 'number', defaultValue: 50, min: 1, step: 1 },
      { name: 'pricePerM3', label: 'Цена за кубометр, ₽', type: 'number', defaultValue: 0, min: 0, step: 100, optional: true },
    ],
    resultLabels: { total: 'Общий объём', single: 'Объём одной доски', perCubic: 'Досок в кубометре', cost: 'Стоимость' },
    howToUse: [
      'Введите длину доски в метрах, а ширину и толщину в миллиметрах.',
      'Укажите количество досок.',
      'При необходимости добавьте цену за кубометр.',
    ],
    howItWorks:
      'Объём одной доски — длина, умноженная на ширину и толщину, приведённые из миллиметров в метры делением на тысячу. Общий объём умножается на количество, а число досок в кубометре — величина, обратная объёму одной доски.',
    example: 'Доска 6 м × 150 × 25 мм занимает 0,0225 м³; пятьдесят таких досок — 1,125 м³, а в кубометре их 44,44.',
    faq: [
      { q: 'Почему ширину и толщину нужно вводить в миллиметрах?', a: 'Потому что сечение пиломатериала так и маркируют: 150 × 25. Перевод в метры делается внутри расчёта — вводить 0,15 и 0,025 не нужно и легко ошибиться.' },
      { q: 'Сколько досок в кубометре?', a: 'Это величина, обратная объёму одной доски. Для 6 м × 150 × 25 мм получается 44,44 штуки — дробное число здесь нормально, оно показывает, что ровно кубометра из целых досок не выйдет.' },
      { q: 'Учитывается ли обзол и усушка?', a: 'Нет. Расчёт геометрический и считает номинальный размер. Фактический объём сухой строганой доски меньше номинального, и запас нужно закладывать отдельно.' },
      { q: 'Подходит ли для бруса?', a: 'Да, если брус прямоугольного сечения: длина, ширина и толщина вводятся так же.' },
    ],
    relatedCalculatorIds: ['room-volume', 'brick-calculator', 'screed-calculator'],
  },
};
