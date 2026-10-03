// Правило 72: приближение срока удвоения и точный ответ рядом.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import { ruleOf72CopyEn } from './copy.en';
import { ruleOf72CopyUk } from './copy.uk';
import { ruleOf72CopyDe } from './copy.de';
import { ruleOf72CopyEs } from './copy.es';
import { ruleOf72ReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'rule-of-72',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: ruleOf72CopyEn, uk: ruleOf72CopyUk, de: ruleOf72CopyDe, es: ruleOf72CopyEs },
  referenceCases: ruleOf72ReferenceCases,
  publishedExample: { inputs: { rate: 8 }, expected: ['9,00 лет'] },
  presentation: {
    "id": "rule-of-72",
    "name": "Калькулятор правила 72",
    "slug": "rule-of-72",
    "fullPath": "/finance/rule-of-72/",
    "category": "finance",
    "icon": "banknote",
    "popularity": 39,
    "isNew": false,
    "shortDescription": "За сколько лет удвоятся деньги и насколько врёт правило.",
    "seoTitle": "Калькулятор правила 72 — срок удвоения и его погрешность",
    "seoDescription": "Оцените, за сколько лет вложение удвоится по правилу 72, рядом с точным значением и разницей между ними.",
    "h1": "Калькулятор правила 72",
    "keywords": [
        "правило 72",
        "срок удвоения",
        "удвоение вклада"
    ],
    "fields": [
        {
            "name": "rate",
            "label": "Ставка, % годовых",
            "type": "number",
            "defaultValue": 8,
            "min": 0,
            "step": 0.1
        },
        {
            "name": "amount",
            "label": "Начальная сумма",
            "type": "number",
            "defaultValue": 0,
            "unit": "₽",
            "min": 0,
            "step": 1000,
            "optional": true
        }
    ],
    "resultLabels": {
        "result": "Удвоение по правилу 72",
        "exact": "Точный срок удвоения",
        "gap": "Расхождение правила",
        "doubled": "Сумма после удвоения"
    },
    "relatedCalculatorIds": [
        "compound-interest",
        "deposit-calculator",
        "cagr"
    ],
    ...contractContent.ru,
  },
};
