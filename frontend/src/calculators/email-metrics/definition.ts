import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { validate } from './validate';
import { contractContent } from './contractContent';
import { emailMetricsCopyEn } from './copy.en';
import { emailMetricsCopyUk } from './copy.uk';
import { emailMetricsCopyDe } from './copy.de';
import { emailMetricsCopyEs } from './copy.es';
import { emailMetricsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'email-metrics',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: emailMetricsCopyEn, uk: emailMetricsCopyUk, de: emailMetricsCopyDe, es: emailMetricsCopyEs },
  referenceCases: emailMetricsReferenceCases,
  publishedExample: {
    inputs: { sent: 12000, delivered: 11640, opened: 3025, clicked: 412 },
    expected: ['97,00%'],
  },
  presentation: {
    "id": "email-metrics",
    "name": "Калькулятор метрик email-рассылки",
    "slug": "email-metrics",
    "fullPath": "/business/email-metrics/",
    "category": "business",
    "icon": "mail",
    "popularity": 22,
    "isNew": false,
    "shortDescription": "Доставляемость, открываемость и кликабельность рассылки.",
    "seoTitle": "Калькулятор метрик email-рассылки: открытия и клики",
    "seoDescription": "Рассчитайте доставляемость, открываемость, кликабельность и отношение кликов к открытиям по числу отправленных, доставленных и открытых писем.",
    "h1": "Калькулятор метрик email-рассылки",
    "keywords": [
        "метрики email",
        "открываемость рассылки",
        "кликабельность письма",
        "доставляемость"
    ],
    "fields": [
        {
            "name": "sent",
            "label": "Отправлено писем",
            "type": "number",
            "defaultValue": 12000,
            "min": 0,
            "step": 1,
            "max": 9007199254740991
        },
        {
            "name": "delivered",
            "label": "Доставлено",
            "type": "number",
            "defaultValue": 11640,
            "min": 0,
            "step": 1,
            "max": 9007199254740991
        },
        {
            "name": "opened",
            "label": "Письма с открытием, уникальные",
            "type": "number",
            "defaultValue": 3025,
            "min": 0,
            "step": 1,
            "max": 9007199254740991
        },
        {
            "name": "clicked",
            "label": "Письма с кликом, уникальные",
            "type": "number",
            "defaultValue": 412,
            "min": 0,
            "step": 1,
            "max": 9007199254740991
        }
    ],
    "resultLabels": {
        "delivery": "Доставляемость",
        "open": "Открываемость",
        "click": "Кликабельность",
        "ctor": "Кликов на открытие"
    },
    "relatedCalculatorIds": [
        "conversion-rate",
        "ctr",
        "engagement-rate"
    ] ,
    ...contractContent.ru,
  },
};
