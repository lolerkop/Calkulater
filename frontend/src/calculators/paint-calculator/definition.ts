// Калькулятор краски — второй переведённый калькулятор.
//
// Он выбран не за простоту, а наоборот: два режима расчёта, шесть условных
// полей, необязательная цена, единицы, округление вверх до целых банок и
// текстовая семантика Pack G. Если V2 справляется с ним без специальных
// случаев в общем коде, архитектура пригодна не только для двух полей.
//
// Определение перенесено из `src/data/calculators.ts` дословно.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { BUILD_DISCLAIMER } from '../../lib/disclaimers';
import { calcPaint } from './compute';
import { paintCopyEn } from './copy.en';
import { paintCopyUk } from './copy.uk';
import { paintReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'paint-calculator',
  definitionVersion: 1,
  lifecycle: 'released',
  compute: calcPaint,
  copy: { en: paintCopyEn, uk: paintCopyUk },
  catalogAnchor: 'wallpaper-calculator',
  referenceCases: paintReferenceCases,
  presentation: {
    id: 'paint-calculator',
    name: 'Калькулятор краски',
    slug: 'paint-calculator',
    fullPath: '/building/paint-calculator/',
    category: 'building',
    icon: 'paint-bucket',
    popularity: 65,
    shortDescription: 'Объём краски и количество банок для покраски стен.',
    longDescription:
      'Калькулятор краски помогает оценить литры и количество банок для стен или другой площади. В расчёте учитываются площадь, количество слоёв, расход на квадратный метр и объём банки. Это удобно перед покупкой, чтобы не брать слишком мало материала и не переплачивать за лишние банки.',
    seoTitle: 'Калькулятор краски онлайн — литры и банки',
    seoDescription:
      'Расчёт краски онлайн: литры и количество банок с учётом площади, числа слоёв, расхода на м² и объёма упаковки.',
    h1: 'Калькулятор краски',
    keywords: ['краска', 'покраска', 'расход'],
    fields: [
      {
        name: 'mode', label: 'Способ расчёта', type: 'toggle', defaultValue: 'manual',
        options: [{ value: 'manual', label: 'Площадь вручную' }, { value: 'room', label: 'По размерам комнаты' }],
      },
      { name: 'area', label: 'Площадь, м²', type: 'number', defaultValue: 30, min: 0.01, showIf: { field: 'mode', equals: 'manual' } },
      { name: 'length', label: 'Длина, м', type: 'number', defaultValue: 5, min: 0.01, showIf: { field: 'mode', equals: 'room' } },
      { name: 'width', label: 'Ширина, м', type: 'number', defaultValue: 4, min: 0.01, showIf: { field: 'mode', equals: 'room' } },
      { name: 'height', label: 'Высота, м', type: 'number', defaultValue: 2.7, min: 0.01, step: 0.1, showIf: { field: 'mode', equals: 'room' } },
      { name: 'windows', label: 'Количество окон', type: 'number', defaultValue: 1, min: 0, showIf: { field: 'mode', equals: 'room' } },
      { name: 'doors', label: 'Количество дверей', type: 'number', defaultValue: 1, min: 0, showIf: { field: 'mode', equals: 'room' } },
      { name: 'coats', label: 'Количество слоёв', type: 'number', defaultValue: 2, min: 1, max: 4 },
      { name: 'consumption', label: 'Расход на м², л', type: 'number', defaultValue: 0.15, min: 0.01, step: 0.01 },
      { name: 'canVolume', label: 'Объём банки, л', type: 'number', defaultValue: 2.5, min: 0.01, step: 0.1 },
      { name: 'reserve', label: 'Запас, %', type: 'number', defaultValue: 10, min: 0, max: 50 },
      { name: 'canPrice', label: 'Цена одной банки', type: 'number', defaultValue: 0, min: 0, optional: true },
    ],
    resultLabels: {
      area: 'Площадь окрашивания',
      liters: 'Литры краски',
      cans: 'Количество банок',
      reserve: 'Запас',
    },
    howToUse: [
      'Выберите способ — площадь напрямую или размеры комнаты.',
      'Укажите число слоёв (обычно 2).',
      'Введите расход и объём банки — данные есть на этикетке.',
      'Проверьте тип поверхности: пористые основания могут потребовать больше краски.',
    ],
    howItWorks:
      'Литры = площадь × расход × количество слоёв. Банки округляются вверх, чтобы хватило с запасом.',
    example: '30 м² в 2 слоя при расходе 0,15 л/м² без дополнительного запаса → 9 л краски, 4 банки по 2,5 л.',
    faq: [
      { q: 'Какой расход краски брать?', a: 'Обычно 0,1-0,2 л/м² на слой для водоэмульсионных красок. Точные значения — на этикетке.' },
      { q: 'Сколько слоёв нужно?', a: 'Чаще всего 2. На контрастных стенах может понадобиться 3.' },
      { q: 'Учитывается ли грунтовка?', a: 'Нет, грунтовка считается отдельно. Она может снизить расход краски на впитывающих поверхностях.' },
      { q: 'Почему банки округляются вверх?', a: 'Краску покупают банками фиксированного объёма, поэтому итог всегда округляется до целой банки.' },
      { q: 'Можно ли считать потолок?', a: 'Да, выберите ввод площади вручную и укажите площадь потолка, число слоёв и расход для выбранной краски.' },
    ],
    relatedCalculatorIds: ['wallpaper-calculator', 'tile-calculator', 'laminate-calculator'],
    disclaimer: BUILD_DISCLAIMER,
  },
};
