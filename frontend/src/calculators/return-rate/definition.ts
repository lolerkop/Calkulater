// Доля возвратов. Процентный вывод с перекрёстной проверкой «часть ≤ целого».

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { returnRateCopyEn } from './copy.en';
import { returnRateCopyUk } from './copy.uk';
import { returnRateCopyDe } from './copy.de';
import { returnRateReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'return-rate',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: returnRateCopyEn, uk: returnRateCopyUk, de: returnRateCopyDe },
  referenceCases: returnRateReferenceCases,
  publishedExample: { inputs: { returns: 45, orders: 900 }, expected: ['5,00 %'] },
  presentation: {
    id: 'return-rate',
    name: 'Калькулятор доли возвратов',
    slug: 'return-rate',
    fullPath: '/business/return-rate/',
    category: 'business',
    icon: 'trending-up',
    popularity: 41,
    isNew: false,
    shortDescription: 'Какая часть заказов вернулась.',
    longDescription:
      'Доля возвратов делит вернувшиеся заказы на общее число заказов того же периода. Обе величины целые, а возвратов не может быть больше заказов — такое сочетание означает, что цифры взяты из разных периодов.',
    seoTitle: 'Калькулятор доли возвратов — процент возвращённых заказов',
    seoDescription:
      'Расчёт доли возвратов по числу возвращённых и общих заказов, вместе с долей, оставленной покупателями.',
    h1: 'Калькулятор доли возвратов',
    keywords: ['доля возвратов', 'процент возвратов', 'возвраты в e-commerce'],
    fields: [
      { name: 'returns', label: 'Возвращено заказов', type: 'number', defaultValue: 45, min: 0, step: 1 },
      { name: 'orders', label: 'Всего заказов', type: 'number', defaultValue: 900, min: 0, step: 1 },
    ],
    resultLabels: { rate: 'Доля возвратов', kept: 'Оставлено покупателями' },
    howToUse: ['Введите число возвращённых заказов.', 'Введите общее число заказов за тот же период.', 'Прочитайте долю возвратов.'],
    howItWorks: 'Доля возвратов = возвраты ÷ заказы × 100, обе величины за один период.',
    example: '45 возвратов из 900 заказов дают долю возвратов 5 %.',
    faq: [
      { q: 'Что считать возвратом?', a: 'Заказ, который покупатель вернул и получил за него деньги. Отмены до отправки обычно учитывают отдельно.' },
      { q: 'Почему возвратов не может быть больше заказов?', a: 'Потому что тогда обе величины взяты из разных периодов, и любой полученный процент был бы правдоподобным, но неверным.' },
      { q: 'Высокая доля возвратов — это всегда плохо?', a: 'Не обязательно. В одежде она нормальна и заложена в цену; в электронике та же цифра сигнализировала бы о проблеме.' },
      { q: 'Как возвраты влияют на юнит-экономику?', a: 'Они снижают выручку и добавляют логистические расходы, поэтому маржинальный доход стоит пересчитать на оставленные заказы.' },
    ],
    relatedCalculatorIds: ['aov', 'contribution-margin', 'cac'],
    disclaimer: FIN_DISCLAIMER,
  },
};
