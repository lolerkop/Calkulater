// CTR: кликабельность объявления. Знаменатель — показы.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { ctrCopyEn } from './copy.en';
import { ctrCopyUk } from './copy.uk';
import { ctrCopyDe } from './copy.de';
import { ctrReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'ctr',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: ctrCopyEn, uk: ctrCopyUk, de: ctrCopyDe },
  referenceCases: ctrReferenceCases,
  publishedExample: { inputs: { clicks: 1250, impressions: 84000 }, expected: ['1,49%'] },
  presentation: {
    id: 'ctr',
    name: 'Калькулятор CTR',
    slug: 'ctr',
    fullPath: '/business/ctr/',
    category: 'business',
    icon: 'trending-up',
    popularity: 38,
    isNew: false,
    shortDescription: 'Кликабельность по кликам и показам плюс цена клика.',
    longDescription:
      'Делит клики на показы и даёт кликабельность. Знаменатель — то единственное, что отличает CTR от соседних метрик: у конверсии внизу клики, у ROAS — расход, и путаница между ними даёт вполне правдоподобное число. Добавьте расход кампании, и рядом появятся цена клика и цена тысячи показов.',
    seoTitle: 'Калькулятор CTR — кликабельность и цена клика',
    seoDescription:
      'Рассчитайте CTR объявления по кликам и показам, а также цену клика и цену тысячи показов кампании.',
    h1: 'Калькулятор CTR',
    keywords: ['ctr калькулятор', 'кликабельность', 'цена клика'],
    fields: [
      { name: 'clicks', label: 'Клики', type: 'number', defaultValue: 1250, min: 0, step: 1 },
      { name: 'impressions', label: 'Показы', type: 'number', defaultValue: 84000, min: 1, step: 100 },
      { name: 'cost', label: 'Расход кампании', type: 'number', defaultValue: 0, unit: '₽', min: 0, step: 100, optional: true },
    ],
    resultLabels: { result: 'CTR', ratio: 'Кликов на показы', perClick: 'Показов на один клик', cpc: 'Цена клика' },
    howToUse: ['Введите количество кликов.', 'Введите количество показов.', 'Добавьте расход, чтобы увидеть цену клика.'],
    howItWorks: 'CTR = клики ÷ показы × 100; цена клика — это расход ÷ клики.',
    example: '1250 кликов на 84 000 показов дают CTR 1,49 процента.',
    faq: [
      { q: 'Какой CTR считается хорошим?', a: 'Это целиком зависит от канала, места размещения и аудитории, поэтому никаких ориентиров здесь нет. Сравнивайте с собственной историей.' },
      { q: 'Почему кликов не может быть больше показов?', a: 'Каждому клику предшествует показ. Превышение обычно означает, что числа взяты за разные периоды или из разных отчётов.' },
      { q: 'Чем CTR отличается от конверсии?', a: 'Знаменателем. У CTR внизу показы, у конверсии — клики или сеансы.' },
      { q: 'Что будет при нуле кликов?', a: 'CTR равен нулю, и это настоящий результат. Цена клика при этом не определена: делить не на что.' },
    ],
    relatedCalculatorIds: ['ad-roi', 'cac', 'aov'],
  },
};
