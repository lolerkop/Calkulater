// Расход электроэнергии прибором и его стоимость. Первая категория household.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { electricityUsageCopyEn } from './copy.en';
import { electricityUsageCopyUk } from './copy.uk';
import { electricityUsageCopyDe } from './copy.de';
import { electricityUsageReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'electricity-usage',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: electricityUsageCopyEn, uk: electricityUsageCopyUk, de: electricityUsageCopyDe },
  referenceCases: electricityUsageReferenceCases,
  publishedExample: { inputs: { power: 2000, powerUnit: 'w', hoursPerDay: 3, days: 30 }, expected: ['180,00 кВт·ч'] },
  presentation: {
    id: 'electricity-usage',
    name: 'Калькулятор расхода электроэнергии',
    slug: 'electricity-usage',
    fullPath: '/household/electricity-usage/',
    category: 'household',
    icon: 'home',
    popularity: 41,
    isNew: false,
    shortDescription: 'Киловатт-часы прибора и во сколько они обходятся.',
    longDescription:
      'Приводит паспортную мощность прибора к киловаттам один раз, а затем умножает на часы работы и число дней. Ватты и киловатт-часы легко перепутать — первое это мощность, второе энергия, накопленная за время, — поэтому перевод сделан одним видимым шагом. Укажите тариф, и появится стоимость.',
    seoTitle: 'Калькулятор расхода электроэнергии — кВт·ч и стоимость',
    seoDescription:
      'Узнайте, сколько киловатт-часов потребляет прибор за период и во сколько это обходится по вашему тарифу.',
    h1: 'Калькулятор расхода электроэнергии',
    keywords: ['расход электроэнергии', 'калькулятор кВт ч', 'стоимость электричества'],
    fields: [
      { name: 'power', label: 'Мощность прибора', type: 'number', defaultValue: 2000, min: 0, step: 10 },
      {
        name: 'powerUnit', label: 'Единица мощности', type: 'select', defaultValue: 'w',
        options: [
          { value: 'w', label: 'ватты (Вт)' },
          { value: 'kw', label: 'киловатты (кВт)' },
        ],
      },
      { name: 'hoursPerDay', label: 'Часов в сутки', type: 'number', defaultValue: 3, min: 0, max: 24, step: 0.5 },
      { name: 'days', label: 'Количество дней', type: 'number', defaultValue: 30, min: 1, step: 1 },
      { name: 'tariff', label: 'Тариф за кВт·ч', type: 'number', defaultValue: 0, unit: '₽', min: 0, step: 0.1, optional: true },
    ],
    resultLabels: { result: 'Расход энергии', perDay: 'В сутки', month: 'За 30 дней', cost: 'Стоимость за период' },
    howToUse: ['Возьмите мощность прибора с его наклейки.', 'Укажите, сколько часов в сутки он работает и за сколько дней считаем.', 'Добавьте тариф, чтобы увидеть стоимость.'],
    howItWorks: 'кВт·ч = мощность в киловаттах × часы в сутки × дни; стоимость — это значение, умноженное на тариф.',
    example: 'Обогреватель 2000 Вт по 3 часа в сутки за 30 дней съедает 2 × 3 × 30 = 180 кВт·ч.',
    faq: [
      { q: 'Откуда взять тариф?', a: 'Из квитанции за электроэнергию, там указана цена за киловатт-час. Многотарифные счётчики здесь не учитываются, считайте по нужной зоне отдельно.' },
      { q: 'Паспортная мощность — это реальное потребление?', a: 'Это заявленный максимум. Техника с циклами, вроде холодильника или обогревателя с термостатом, потребляет меньше, потому что работает не постоянно.' },
      { q: 'Чем ватт отличается от киловатт-часа?', a: 'Ватт — это скорость расхода, а киловатт-час — энергия, накопленная за время. Прибор на 1000 Вт за один час съедает ровно 1 кВт·ч.' },
      { q: 'Обязательно ли указывать тариф?', a: 'Нет. Без него вы всё равно получите потребление в киловатт-часах, просто без строки стоимости.' },
    ],
    relatedCalculatorIds: ['tip', 'convert-power', 'convert-energy'],
  },
};
