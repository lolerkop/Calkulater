// Калькулятор процентов — первый калькулятор, переведённый на Platform V2.
//
// Определение перенесено из `src/data/calculators.ts` дословно: те же поля,
// те же значения по умолчанию, тот же порядок, те же тексты. Миграция меняет
// принадлежность данных, а не поведение продукта.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { calcPercent } from './compute';
import { validatePercent } from './validate';
import { percentContextualField } from './contextualField';
import { percentCopyEn } from './copy.en';
import { percentCopyUk } from './copy.uk';
import { percentReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'percent-calculator',
  definitionVersion: 1,
  lifecycle: 'released',
  compute: calcPercent,
  validate: validatePercent,
  contextualField: percentContextualField,
  copy: { en: percentCopyEn, uk: percentCopyUk },
  catalogAnchor: 'vat-calculator',
  referenceCases: percentReferenceCases,
  presentation: {
    id: 'percent-calculator',
    name: 'Калькулятор процентов',
    slug: 'percent-calculator',
    fullPath: '/finance/percent-calculator/',
    category: 'finance',
    icon: 'percent',
    popularity: 88,
    isNew: false,
    shortDescription:
      'Найдите процент от числа, долю в процентах, прибавьте или отнимите процент.',
    longDescription:
      'Универсальный калькулятор процентов с пятью режимами: найти процент от числа, найти долю в процентах, прибавить или отнять процент, рассчитать процентное изменение между двумя значениями.',
    seoTitle: 'Калькулятор процентов онлайн — найти процент от числа',
    seoDescription:
      'Калькулятор процентов: процент от числа, доля в процентах, прибавить или отнять процент, процент изменения.',
    h1: 'Калькулятор процентов',
    keywords: ['проценты', 'процент от числа', 'процентное изменение', 'формула процентов'],
    fields: [
      {
        name: 'mode', label: 'Режим', type: 'select', defaultValue: 'of',
        options: [
          { value: 'of', label: 'Сколько составит X% от числа' },
          { value: 'what', label: 'Сколько процентов A от B' },
          { value: 'addPct', label: 'Прибавить процент к числу' },
          { value: 'subPct', label: 'Отнять процент от числа' },
          { value: 'change', label: 'Процент изменения от A к B' },
        ],
      },
      { name: 'a', label: 'Значение A', type: 'number', defaultValue: 15 },
      { name: 'b', label: 'Значение B', type: 'number', defaultValue: 200 },
    ],
    resultLabels: {
      result: 'Результат',
    },
    howToUse: [
      'Выберите нужный режим расчёта в выпадающем списке.',
      'Введите значение A (обычно процент или часть).',
      'Введите значение B (обычно число или целое).',
    ],
    howItWorks:
      'Базовая формула процента: X% от числа N = (X / 100) × N. Для процентного изменения используется формула (B − A) / A × 100%.',
    example:
      '15% от 200 = 30. 50 от 200 = 25%. 200 + 15% = 230. 200 − 15% = 170. Изменение со 100 до 130 = +30%.',
    faq: [
      { q: 'Как найти X процентов от числа?', a: 'Разделите X на 100 и умножьте на число. Например, 20% от 500 = 0,2 × 500 = 100.' },
      { q: 'Как считать процент изменения?', a: 'Из нового значения вычтите старое, разделите на старое и умножьте на 100. Положительный результат — рост, отрицательный — снижение.' },
      { q: 'Можно ли вводить дробные значения?', a: 'Да, используйте точку или запятую как разделитель.' },
      { q: 'Какой режим выбрать для скидки или наценки?', a: 'Для наценки используйте «прибавить процент к числу», для скидки — «отнять процент от числа» или отдельный калькулятор скидки.' },
    ],
    relatedCalculatorIds: ['discount-calculator', 'vat-calculator', 'compound-interest'],
    disclaimer: FIN_DISCLAIMER,
  },
};
