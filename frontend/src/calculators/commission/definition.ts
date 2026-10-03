import { contractContent } from './contractContent';
// Комиссия — главная архитектурная проверка волны: три режима, контекстные
// подписи полей и валидация, зависящая от режима. Всё это принадлежит
// калькулятору, общий код о нём не знает.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { validate } from './validate';
import { commissionCopyEn } from './copy.en';
import { commissionCopyUk } from './copy.uk';
import { commissionCopyDe } from './copy.de';
import { commissionCopyEs } from './copy.es';
import { commissionReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'commission',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  contextualField,
  copy: { en: { ...commissionCopyEn, ...contractContent.en }, uk: { ...commissionCopyUk, ...contractContent.uk }, de: { ...commissionCopyDe, ...contractContent.de }, es: { ...commissionCopyEs, ...contractContent.es } },
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
    ...contractContent.ru,
    relatedCalculatorIds: ['margin-calculator', 'discount-calculator', 'break-even-calculator'],
  },
};
