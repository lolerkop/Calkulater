import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { riskRewardCopyEn } from './copy.en';
import { riskRewardCopyUk } from './copy.uk';
import { riskRewardCopyDe } from './copy.de';
import { riskRewardCopyEs } from './copy.es';
import { riskRewardReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "risk-reward",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: riskRewardCopyEn, uk: riskRewardCopyUk, de: riskRewardCopyDe, es: riskRewardCopyEs },
  referenceCases: riskRewardReferenceCases,
  publishedExample: { inputs: { direction: 'long', entry: 250, stop: 240, target: 280, qty: 100 }, expected: ["3"] },
  presentation: {
    id: "risk-reward",
    name: "Калькулятор риск/прибыль",
    slug: "risk-reward",
    fullPath: "/finance/risk-reward/",
    category: "finance",
    icon: "trending-up",
    popularity: 38,
    isNew: false,
    shortDescription: "Отношение риска к прибыли по трём ценам и доля сделок, нужная для безубыточности.",
    seoTitle: "Калькулятор риск/прибыль — отношение и безубыточность",
    seoDescription: "Рассчитайте отношение риска к прибыли по цене входа, стопу и цели, а также долю прибыльных сделок для безубыточности.",
    h1: "Калькулятор риск/прибыль",
    keywords: ["риск прибыль", "risk reward", "отношение риска к прибыли", "безубыточная доля сделок"],
    fields: [
      {
        "name": "direction",
        "label": "Направление сделки",
        "type": "select",
        "defaultValue": "long",
        "options": [
          {
            "value": "long",
            "label": "лонг — стоп ниже, цель выше"
          },
          {
            "value": "short",
            "label": "шорт — стоп выше, цель ниже"
          }
        ]
      },
      {
        "name": "entry",
        "label": "Цена входа",
        "type": "number",
        "defaultValue": 250,
        "min": 0,
        "step": 1,
        "unit": "₽"
      },
      {
        "name": "stop",
        "label": "Цена стоп-приказа",
        "type": "number",
        "defaultValue": 240,
        "min": 0,
        "step": 1,
        "unit": "₽"
      },
      {
        "name": "target",
        "label": "Целевая цена",
        "type": "number",
        "defaultValue": 280,
        "min": 0,
        "step": 1,
        "unit": "₽"
      },
      {
        "name": "qty",
        "label": "Объём, единиц",
        "type": "number",
        "defaultValue": 100,
        "min": 0,
        "step": 0.1,
        "optional": true
      }
    ],
    resultLabels: {
      "ratio": "Отношение риск/прибыль",
      "risk": "Риск на единицу",
      "reward": "Прибыль на единицу",
      "riskMoney": "Риск в деньгах",
      "rewardMoney": "Прибыль в деньгах",
      "breakEven": "Безубыточная доля сделок",
      "warning": "Внимание",
    },
    ...contractContent.ru,
    relatedCalculatorIds: ["position-size", "roi", "percent-calculator"],
  },
};
