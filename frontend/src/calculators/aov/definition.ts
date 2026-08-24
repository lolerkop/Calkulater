// Средний чек. Простой скаляр с целочисленным делителем.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { aovCopyEn } from './copy.en';
import { aovCopyUk } from './copy.uk';
import { aovReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'aov',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: aovCopyEn, uk: aovCopyUk },
  referenceCases: aovReferenceCases,
  publishedExample: { inputs: { revenue: 250000, orders: 200 }, expected: ['1 250 ₽'] },
  presentation: {
    id: 'aov',
    name: 'Калькулятор среднего чека',
    slug: 'aov',
    fullPath: '/business/aov/',
    category: 'business',
    icon: 'trending-up',
    popularity: 42,
    isNew: false,
    shortDescription: 'Выручка, делённая на число заказов.',
    longDescription:
      'Средний чек делит выручку на заказы, которые её принесли. Это самый простой рычаг юнит-экономики: поднять средний чек почти ничего не стоит в привлечении, тогда как каждый новый клиент обходится в полную стоимость рекламы и работы продавцов.',
    seoTitle: 'Калькулятор среднего чека — AOV из выручки и заказов',
    seoDescription:
      'Расчёт среднего чека: выручка за период, делённая на число заказов того же периода.',
    h1: 'Калькулятор среднего чека',
    keywords: ['средний чек', 'AOV', 'средняя корзина'],
    fields: [
      { name: 'revenue', label: 'Выручка за период', type: 'number', defaultValue: 250000, min: 0 },
      { name: 'orders', label: 'Число заказов', type: 'number', defaultValue: 200, min: 0, step: 1 },
    ],
    resultLabels: { aov: 'Средний чек' },
    howToUse: ['Введите выручку за период.', 'Введите число заказов за тот же период.', 'Прочитайте средний чек.'],
    howItWorks: 'AOV = выручка ÷ заказы, обе величины за один период.',
    example: 'Выручка 250 000 при 200 заказах даёт средний чек 1250.',
    faq: [
      { q: 'Вычитать ли возвраты?', a: 'Если нужен чистый средний чек, берите выручку после возвратов и считайте только завершённые заказы. Важно, чтобы обе величины следовали одному правилу.' },
      { q: 'Почему число заказов должно быть целым?', a: 'Половины заказа не бывает; дробное значение означает, что период или источник данных взяты неверно.' },
      { q: 'Включать ли доставку?', a: 'Это ваш выбор, но держите его одинаковым между периодами, иначе динамика потеряет смысл.' },
      { q: 'Что поднимает средний чек?', a: 'Наборы, порог бесплатной доставки и допродажи. В отличие от привлечения, они почти ничего не стоят на каждую дополнительную единицу.' },
    ],
    relatedCalculatorIds: ['contribution-margin', 'cac', 'return-rate'],
    disclaimer: FIN_DISCLAIMER,
  },
};
