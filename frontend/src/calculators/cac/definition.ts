// Стоимость привлечения клиента. Целочисленный делитель и необязательное поле.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { cacCopyEn } from './copy.en';
import { cacCopyUk } from './copy.uk';
import { cacReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'cac',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: cacCopyEn, uk: cacCopyUk },
  referenceCases: cacReferenceCases,
  publishedExample: { inputs: { spend: 100000, customers: 50 }, expected: ['2 000 ₽'] },
  presentation: {
    id: 'cac',
    name: 'Калькулятор стоимости привлечения клиента',
    slug: 'cac',
    fullPath: '/business/cac/',
    category: 'business',
    icon: 'trending-up',
    popularity: 43,
    isNew: true,
    shortDescription: 'Во сколько обходится каждый новый клиент и окупается ли это.',
    longDescription:
      'Стоимость привлечения клиента делит расходы на маркетинг и продажи на число клиентов, которых эти усилия принесли. Сама по себе цифра говорит мало; вместе с доходом, который приносит клиент, она показывает, окупается ли привлечение.',
    seoTitle: 'CAC-калькулятор — стоимость привлечения клиента и LTV к CAC',
    seoDescription:
      'Расчёт стоимости привлечения клиента по расходам и числу привлечённых клиентов, а также отношения LTV к CAC.',
    h1: 'Калькулятор стоимости привлечения клиента',
    keywords: ['стоимость привлечения клиента', 'CAC', 'LTV к CAC'],
    fields: [
      { name: 'spend', label: 'Расходы на маркетинг и продажи', type: 'number', defaultValue: 100000, min: 0 },
      { name: 'customers', label: 'Привлечено клиентов', type: 'number', defaultValue: 50, min: 0, step: 1 },
      { name: 'ltv', label: 'Средний доход с клиента', type: 'number', defaultValue: 0, min: 0, optional: true },
    ],
    resultLabels: { cac: 'Стоимость привлечения', ratio: 'LTV к CAC' },
    howToUse: ['Введите расходы на маркетинг и продажи за период.', 'Введите, сколько клиентов они принесли.', 'Добавьте средний доход с клиента, чтобы увидеть отношение.'],
    howItWorks:
      'CAC = расходы ÷ число привлечённых клиентов. Отношение делит средний доход с клиента на эту стоимость.',
    example: 'Потратив 100 000 и привлекнув 50 клиентов, вы получаете CAC 2 000.',
    faq: [
      { q: 'Какие расходы входят в сумму?', a: 'Всё, что потрачено на привлечение: реклама, оклады продавцов, гонорары агентств, инструменты. Расходы на обслуживание уже имеющихся клиентов сюда не входят.' },
      { q: 'Какое отношение считается здоровым?', a: 'Распространённый ориентир — от трёх к одному. Ниже одного к одному каждый новый клиент приносит убыток.' },
      { q: 'Почему число клиентов должно быть целым?', a: 'Привлечь часть клиента нельзя; дробный ввод означает, что период или исходные данные взяты неверно.' },
      { q: 'За какой период измерять привлечение?', a: 'За тот же, который охватывают расходы. Смешивать месяц затрат с кварталом клиентов — значит приукрасить показатель.' },
    ],
    relatedCalculatorIds: ['contribution-margin', 'break-even-calculator', 'margin-calculator'],
    disclaimer: FIN_DISCLAIMER,
  },
};
