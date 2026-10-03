import { validate } from './validate';
import { contextualField } from './contextualField';
import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { tripBudgetCopyEn } from './copy.en';
import { tripBudgetCopyUk } from './copy.uk';
import { tripBudgetCopyDe } from './copy.de';
import { tripBudgetCopyEs } from './copy.es';
import { tripBudgetReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "trip-budget",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  contextualField,
  copy: { en: tripBudgetCopyEn, uk: tripBudgetCopyUk, de: tripBudgetCopyDe, es: tripBudgetCopyEs },
  referenceCases: tripBudgetReferenceCases,
  publishedExample: {
    inputs: { nights: 4, days: 5, people: 2, hotelPerNight: 3500, foodPerDayPerPerson: 1200, transport: 12000, activities: 5000, other: 0 },
    expected: ["43 000,00 ₽"],
  },
  presentation: {
    id: "trip-budget",
    name: "Калькулятор бюджета поездки",
    slug: "trip-budget",
    fullPath: "/household/trip-budget/",
    category: "household",
    icon: "wallet",
    popularity: 41,
    isNew: false,
    shortDescription: "Проживание, питание, транспорт и развлечения — весь бюджет поездки и доля на человека.",
    seoTitle: "Калькулятор бюджета поездки — сколько стоит отпуск",
    seoDescription: "Рассчитайте бюджет поездки: проживание, питание, транспорт и развлечения, а также стоимость на одного человека и на день.",
    h1: "Калькулятор бюджета поездки",
    keywords: ["бюджет поездки", "стоимость отпуска", "сколько стоит поездка", "расходы на путешествие"],
    fields: [
  {
    "name": "nights",
    "label": "Ночей в отеле",
    "type": "number",
    "defaultValue": 4,
    "min": 0,
    "step": 1,
    "unit": "ночей"
  },
  {
    "name": "days",
    "label": "Дней поездки",
    "type": "number",
    "defaultValue": 5,
    "min": 0,
    "step": 1,
    "unit": "дней"
  },
  {
    "name": "people",
    "label": "Человек",
    "type": "number",
    "defaultValue": 2,
    "min": 0,
    "step": 1,
    "unit": "чел."
  },
  {
    "name": "hotelPerNight",
    "label": "Проживание за ночь",
    "type": "number",
    "defaultValue": 3500,
    "min": 0,
    "step": 100,
    "unit": "₽/ночь"
  },
  {
    "name": "foodPerDayPerPerson",
    "label": "Питание на человека в день",
    "type": "number",
    "defaultValue": 1200,
    "min": 0,
    "step": 100,
    "unit": "₽/(чел.·день)"
  },
  {
    "name": "transport",
    "label": "Транспорт за поездку",
    "type": "number",
    "defaultValue": 12000,
    "min": 0,
    "step": 100,
    "unit": "₽"
  },
  {
    "name": "activities",
    "label": "Развлечения за поездку",
    "type": "number",
    "defaultValue": 5000,
    "min": 0,
    "step": 100,
    "unit": "₽"
  },
  {
    "name": "other",
    "label": "Прочие расходы",
    "type": "number",
    "defaultValue": 0,
    "min": 0,
    "step": 100,
    "optional": true,
    "unit": "₽"
  }
],
    resultLabels: {
  "total": "Бюджет поездки",
  "perPerson": "На человека",
  "perDay": "В день",
  "hotel": "Проживание",
  "food": "Питание",
  "transport": "Транспорт",
  "activities": "Развлечения",
  "other": "Прочее"
},
    relatedCalculatorIds: ["trip-cost", "tip", "price-per-unit"],
    ...contract.ru,
  },
};
