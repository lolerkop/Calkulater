import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { paybackPeriodCopyEn } from './copy.en';
import { paybackPeriodCopyUk } from './copy.uk';
import { paybackPeriodCopyDe } from './copy.de';
import { paybackPeriodCopyEs } from './copy.es';
import { paybackPeriodReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "payback-period",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: paybackPeriodCopyEn, uk: paybackPeriodCopyUk, de: paybackPeriodCopyDe, es: paybackPeriodCopyEs },
  referenceCases: paybackPeriodReferenceCases,
  publishedExample: { inputs: { investment: 1000000, cashflow: 300000, rate: 0 }, expected: ["3,333 лет"] },
  presentation: {
    id: "payback-period",
    name: "Калькулятор срока окупаемости",
    slug: "srok-okupaemosti",
    fullPath: "/business/srok-okupaemosti/",
    category: "business",
    icon: "trending-up",
    popularity: 34,
    isNew: false,
    shortDescription: "За сколько окупится вложение при заданном денежном потоке.",
    seoTitle: "Калькулятор срока окупаемости — простой и дисконтированный",
    seoDescription: "Рассчитайте срок окупаемости вложения по годовому денежному потоку, с дисконтированием по заданной ставке.",
    h1: "Калькулятор срока окупаемости",
    keywords: ["срок окупаемости", "дисконтированная окупаемость", "денежный поток", "оценка инвестиций"],
    fields: [
      { name: 'investment', label: 'Вложение, ₽', type: 'number', defaultValue: 1000000, min: 0, step: 100000 },
      { name: 'cashflow', label: 'Денежный поток в год, ₽', type: 'number', defaultValue: 300000, min: 0, step: 50000 },
      { name: 'rate', label: 'Ставка дисконтирования, %', type: 'number', defaultValue: 0, min: 0, step: 0.5 },
    ],
    resultLabels: {
      "simple": "Простой срок окупаемости",
      "months": "В месяцах",
      "discounted": "Дисконтированный срок",
      "cashflow": "Годовой поток",
      "returned": "Возврат за простой срок",
    },
    relatedCalculatorIds: ["contribution-margin", "inventory-turnover", "roi"],
    ...contractContent.ru,
  },
};
