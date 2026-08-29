// Комиссия — главная архитектурная проверка волны: три режима, контекстные
// подписи полей и валидация, зависящая от режима. Всё это принадлежит
// калькулятору, общий код о нём не знает.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { validate } from './validate';
import { commissionCopyEn } from './copy.en';
import { commissionCopyUk } from './copy.uk';
import { commissionCopyDe } from './copy.de';
import { commissionReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'commission',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  contextualField,
  copy: { en: commissionCopyEn, uk: commissionCopyUk, de: commissionCopyDe },
  referenceCases: commissionReferenceCases,
  publishedExample: { inputs: { mode: 'fromAmount', a: 100000, b: 2.5 }, expected: ['2 500 ₽', '97 500 ₽'] },
  presentation: {
    id: 'commission',
    name: 'Калькулятор комиссии',
    slug: 'commission',
    fullPath: '/finance/commission/',
    category: 'finance',
    icon: 'receipt',
    popularity: 50,
    isNew: false,
    shortDescription: 'Комиссия, сумма сделки или ставка — то, чего не хватает.',
    longDescription:
      'Калькулятор считает комиссию по сумме и ставке, восстанавливает сумму сделки по известной комиссии или находит ставку, когда известны обе величины. Режим определяет, что вы вводите, а что получаете.',
    seoTitle: 'Калькулятор комиссии — сумма, ставка и выплата',
    seoDescription:
      'Расчёт комиссии по сумме и ставке, суммы сделки по комиссии или самой ставки комиссии.',
    h1: 'Калькулятор комиссии',
    keywords: ['калькулятор комиссии', 'ставка комиссии', 'комиссия с продажи'],
    fields: [
      {
        name: 'mode', label: 'Режим расчёта', type: 'select', defaultValue: 'fromAmount',
        options: [
          { value: 'fromAmount', label: 'Комиссия из суммы' },
          { value: 'fromCommission', label: 'Сумма из комиссии' },
          { value: 'rate', label: 'Ставка из обеих величин' },
        ],
      },
      { name: 'a', label: 'Сумма сделки', type: 'number', defaultValue: 100000, min: 0 },
      { name: 'b', label: 'Ставка комиссии, %', type: 'number', defaultValue: 2.5, min: 0 },
    ],
    resultLabels: { commission: 'Комиссия', amount: 'Сумма сделки', rate: 'Ставка комиссии' },
    howToUse: [
      'Выберите режим по тому, что уже известно.',
      'Введите две известные величины.',
      'Прочитайте недостающую и сумму к получению.',
    ],
    howItWorks: 'Комиссия = сумма × ставка / 100. Остальные режимы — та же формула, выраженная относительно другой величины.',
    example: 'Сделка на 100 000 при ставке 2,5 % даёт комиссию 2 500 и выплату 97 500.',
    faq: [
      { q: 'Какой режим выбрать?', a: 'Тот, где названы две величины, которые у вас уже есть. Третью посчитает калькулятор.' },
      { q: 'Учитываются ли налоги?', a: 'Нет, результат — комиссия до налогов. Налоги и сборы зависят от юрисдикции и условий договора.' },
      { q: 'Может ли ставка быть нулевой?', a: 'При расчёте комиссии из суммы — да, результат просто нулевой. Восстановить сумму по нулевой ставке нельзя: ответа не существует.' },
      { q: 'Почему выплата показана во всех режимах?', a: 'Это величина, которая нужна чаще всего, и во всех трёх направлениях она считается одним и тем же вычитанием.' },
    ],
    relatedCalculatorIds: ['margin-calculator', 'discount-calculator', 'break-even-calculator'],
    disclaimer: FIN_DISCLAIMER,
  },
};
