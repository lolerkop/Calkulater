// Расход топлива по факту заправки и пробега. Три режима.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { fuelConsumptionCopyEn } from './copy.en';
import { fuelConsumptionCopyUk } from './copy.uk';
import { fuelConsumptionReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'fuel-consumption',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: fuelConsumptionCopyEn, uk: fuelConsumptionCopyUk },
  referenceCases: fuelConsumptionReferenceCases,
  publishedExample: { inputs: { mode: 'measure', litres: 42, distance: 560 }, expected: ['7,50 л/100 км'] },
  presentation: {
    id: 'fuel-consumption',
    name: 'Калькулятор расхода топлива',
    slug: 'fuel-consumption',
    fullPath: '/automotive/fuel-consumption/',
    category: 'automotive',
    icon: 'car',
    popularity: 42,
    isNew: false,
    shortDescription: 'Литры на 100 км по заправке или топливо на поездку.',
    longDescription:
      'Берёт литры, которые вы действительно залили, и километры, которые действительно проехали, и превращает их в расход. Рядом показывается обратная величина в километрах на литр, а третий режим работает вперёд: по пробегу и известному расходу возвращает нужное количество топлива.',
    seoTitle: 'Калькулятор расхода топлива — литров на 100 км',
    seoDescription:
      'Рассчитайте расход топлива в литрах на 100 км по залитым литрам и пробегу или узнайте, сколько топлива нужно на поездку.',
    h1: 'Калькулятор расхода топлива',
    keywords: ['расход топлива', 'литров на 100 км', 'калькулятор бензина'],
    fields: [
      {
        name: 'mode', label: 'Что считаем', type: 'select', defaultValue: 'measure',
        options: [
          { value: 'measure', label: 'литров на 100 км' },
          { value: 'kml', label: 'километров на литр' },
          { value: 'need', label: 'сколько топлива нужно на поездку' },
        ],
      },
      { name: 'litres', label: 'Израсходовано литров', type: 'number', defaultValue: 42, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'measure' } },
      { name: 'distance', label: 'Пробег, км', type: 'number', defaultValue: 560, min: 0, step: 1 },
      { name: 'consumption', label: 'Расход, л/100 км', type: 'number', defaultValue: 7.5, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'need' } },
    ],
    resultLabels: { result: 'Расход', perHundred: 'Литров на 100 км', kmPerLitre: 'Километров на литр', thousand: 'Расход на 1000 км' },
    howToUse: ['Выберите, что нужно посчитать.', 'Заправьтесь до полного, проедьте и запишите литры и километры.', 'Введите оба числа и прочитайте расход.'],
    howItWorks: 'литров на 100 км = литры ÷ километры × 100; топливо на поездку = пробег ÷ 100 × расход.',
    example: '42 литра на 560 километрах дают 42 ÷ 560 × 100 = 7,5 литра на 100 км.',
    faq: [
      { q: 'Это конвертер миль на галлон?', a: 'Нет. Здесь расход считается по замеренным литрам и километрам. Перевод между л/100 км и mpg — отдельная задача с обратным преобразованием.' },
      { q: 'Почему результат расходится с бортовым компьютером?', a: 'Компьютер оценивает расход по работе форсунок и сбрасывается по своему расписанию. Замер от полного бака до полного надёжнее.' },
      { q: 'Мерить по одному баку или по нескольким?', a: 'Лучше по нескольким. Показатель одного бака сильно зависит от пробок и рельефа, а усреднение по нескольким заправкам это сглаживает.' },
      { q: 'Сильно ли различаются город и трасса?', a: 'Существенно. Калькулятор считает только по введённым числам, поэтому замеряйте тот режим езды, который вас интересует.' },
    ],
    relatedCalculatorIds: ['power-to-weight', 'convert-volume', 'convert-length'],
  },
};
