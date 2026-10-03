import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { leverageCopyEn } from './copy.en';
import { leverageCopyUk } from './copy.uk';
import { leverageCopyDe } from './copy.de';
import { leverageCopyEs } from './copy.es';
import { leverageReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'leverage',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: leverageCopyEn, uk: leverageCopyUk, de: leverageCopyDe, es: leverageCopyEs },
  referenceCases: leverageReferenceCases,
  publishedExample: {
    inputs: { equity: 50000, leverage: 5, entry: 2400, maintenancePct: 0.5 },
    expected: ['250 000,00 ₽'],
  },
  presentation: {
    id: 'leverage',
    name: 'Калькулятор кредитного плеча',
    slug: 'leverage',
    fullPath: '/finance/leverage/',
    category: 'finance',
    icon: 'trending-up',
    popularity: 22,
    isNew: false,
    shortDescription: 'Размер позиции, цена ликвидации и запас до неё.',
    seoTitle: 'Калькулятор кредитного плеча и цены ликвидации',
    seoDescription:
      'Рассчитайте размер позиции с плечом, цену ликвидации и процент падения до неё по залогу, плечу и поддерживающей марже.',
    h1: 'Калькулятор кредитного плеча',
    keywords: ['кредитное плечо', 'цена ликвидации', 'размер позиции', 'поддерживающая маржа'],
    fields: [
      {
        "name": "equity",
        "label": "Залог",
        "type": "number",
        "defaultValue": 50000,
        "min": 0,
        "step": 1000,
        "unit": "₽"
      },
      {
        "name": "leverage",
        "label": "Плечо, ×",
        "type": "number",
        "defaultValue": 5,
        "min": 1,
        "step": 1
      },
      {
        "name": "entry",
        "label": "Цена входа",
        "type": "number",
        "defaultValue": 2400,
        "min": 0,
        "step": 10,
        "unit": "₽"
      },
      {
        "name": "maintenancePct",
        "label": "Поддерживающая доля начальной позиции, %",
        "type": "number",
        "defaultValue": 0.5,
        "min": 0,
        "step": 0.1
      }
    ],
    resultLabels: {
      position: 'Размер позиции',
      units: 'Единиц позиции',
      liquidation: 'Цена ликвидации',
      drop: 'Падение до ликвидации',
      equity: 'Залог',
    },
    ...contractContent.ru,
    relatedCalculatorIds: ['position-size', 'risk-reward', 'crypto-pnl'],
  },
};
