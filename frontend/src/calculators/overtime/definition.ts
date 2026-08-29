import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { overtimeCopyEn } from './copy.en';
import { overtimeCopyUk } from './copy.uk';
import { overtimeCopyDe } from './copy.de';
import { overtimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'overtime',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: overtimeCopyEn, uk: overtimeCopyUk, de: overtimeCopyDe },
  referenceCases: overtimeReferenceCases,
  publishedExample: {
    inputs: { rate: 650, normalHours: 160, overtimeHours: 14, multiplier: 1.5 },
    expected: ['117 650,00 ₽'],
  },
  presentation: {
    id: 'overtime',
    name: 'Калькулятор сверхурочных',
    slug: 'overtime-pay',
    fullPath: '/finance/overtime-pay/',
    category: 'finance',
    icon: 'clock',
    popularity: 23,
    isNew: false,
    shortDescription: 'Оплата за месяц со сверхурочными часами и средняя ставка за час.',
    longDescription:
      'Сверхурочные оплачиваются обычной ставкой с надбавочным коэффициентом, который применяется только к часам сверх нормы. Средняя ставка за час рядом с итогом — та величина, которую стоит читать: она делит всё заработанное на все отработанные часы и растёт куда слабее, чем обещает коэффициент. Четырнадцать сверхурочных часов по полтора поверх ста шестидесяти обычных поднимают среднюю ставку на четыре процента, а не на пятьдесят. Именно этот разрыв и делает сверхурочные привлекательнее в договоре, чем в расчётном листке.',
    seoTitle: 'Калькулятор сверхурочных: оплата и средняя ставка',
    seoDescription:
      'Рассчитайте оплату за период по ставке, обычным и сверхурочным часам и коэффициенту, вместе со средней ставкой за отработанный час.',
    h1: 'Калькулятор сверхурочных',
    keywords: ['сверхурочные', 'оплата переработки', 'ставка за час', 'коэффициент сверхурочных'],
    fields: [
      { name: 'rate', label: 'Ставка за час, ₽', type: 'number', defaultValue: 650, min: 0, step: 50 },
      { name: 'normalHours', label: 'Обычных часов', type: 'number', defaultValue: 160, min: 0, step: 8 },
      { name: 'overtimeHours', label: 'Сверхурочных часов', type: 'number', defaultValue: 14, min: 0, step: 1 },
      { name: 'multiplier', label: 'Коэффициент сверхурочных', type: 'number', defaultValue: 1.5, min: 1, max: 5, step: 0.5 },
    ],
    resultLabels: {
      total: 'Всего к оплате',
      base: 'Оплата обычных часов',
      overtime: 'Оплата сверхурочных',
      effective: 'Средняя ставка за час',
    },
    howToUse: [
      'Введите обычную ставку за час.',
      'Укажите обычные часы за период.',
      'Сверхурочные часы укажите отдельно.',
      'Введите коэффициент из договора — обычно это 1,5 или 2.',
    ],
    howItWorks:
      'Обычная оплата = ставка × обычные часы. Сверхурочные = ставка × коэффициент × сверхурочные часы. Средняя ставка делит итог на все отработанные часы.',
    example: 'При ставке 650 ₽, 160 обычных и 14 сверхурочных часах по 1,5 выходит 117 650 ₽ — в среднем 676,15 ₽ за час.',
    faq: [
      {
        q: 'Почему средняя ставка намного ниже коэффициента?',
        a: 'Потому что надбавка касается только сверхурочных часов, а среднее делится на все. Небольшой блок надбавочных часов сдвигает среднее очень слабо.',
      },
      {
        q: 'Какой коэффициент подставлять?',
        a: 'Тот, который задан договором или законом. Полтора за первые часы и двойной дальше — распространённая схема, но точное правило различается по странам и работодателям.',
      },
      {
        q: 'Расчёт до налогов или после?',
        a: 'До. Это начисленная сумма; налог на доходы и взносы применяются позже и в расчёт не входят.',
      },
      {
        q: 'Почему коэффициент меньше единицы отклоняется?',
        a: 'Потому что сверхурочный час не может стоить дешевле обычного. Значение ниже единицы означает опечатку, а не необычный договор.',
      },
    ],
    relatedCalculatorIds: ['work-hours', 'workday-cost', 'salary-convert'],
    disclaimer: FIN_DISCLAIMER,
  },
};
