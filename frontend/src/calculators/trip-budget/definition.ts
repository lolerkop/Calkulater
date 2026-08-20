import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { tripBudgetCopyEn } from './copy.en';
import { tripBudgetCopyUk } from './copy.uk';
import { tripBudgetReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "trip-budget",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: tripBudgetCopyEn, uk: tripBudgetCopyUk },
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
    isNew: true,
    shortDescription: "Проживание, питание, транспорт и развлечения — весь бюджет поездки и доля на человека.",
    longDescription:
      "Собирает бюджет поездки из статей, которые считаются по-разному: ночи в отеле умножаются на количество ночей, питание — на дни и на число людей сразу, а транспорт и развлечения входят одной суммой на всю поездку. Ночи и дни здесь разведены намеренно: поездка на пять дней — это четыре ночи, и подстановка одного числа в обе формулы ошибается на целые сутки проживания. В результате видно и общую сумму, и то, во сколько поездка обходится каждому участнику и каждый день.",
    seoTitle: "Калькулятор бюджета поездки — сколько стоит отпуск",
    seoDescription: "Рассчитайте бюджет поездки: проживание, питание, транспорт и развлечения, а также стоимость на одного человека и на день.",
    h1: "Калькулятор бюджета поездки",
    keywords: ["бюджет поездки", "стоимость отпуска", "сколько стоит поездка", "расходы на путешествие"],
    fields: [
      { name: 'nights', label: 'Ночей в отеле', type: 'number', defaultValue: 4, min: 0, step: 1 },
      { name: 'days', label: 'Дней поездки', type: 'number', defaultValue: 5, min: 0, step: 1 },
      { name: 'people', label: 'Человек', type: 'number', defaultValue: 2, min: 0, step: 1 },
      { name: 'hotelPerNight', label: 'Проживание за ночь, ₽', type: 'number', defaultValue: 3500, min: 0, step: 100 },
      { name: 'foodPerDayPerPerson', label: 'Питание на человека в день, ₽', type: 'number', defaultValue: 1200, min: 0, step: 100 },
      { name: 'transport', label: 'Транспорт за поездку, ₽', type: 'number', defaultValue: 12000, min: 0, step: 100 },
      { name: 'activities', label: 'Развлечения за поездку, ₽', type: 'number', defaultValue: 5000, min: 0, step: 100 },
      { name: 'other', label: 'Прочие расходы, ₽', type: 'number', defaultValue: 0, min: 0, step: 100, optional: true },
    ],
    resultLabels: {
      "total": "Бюджет поездки",
      "perPerson": "На человека",
      "perDay": "В день",
      "hotel": "Проживание",
      "food": "Питание",
      "transport": "Транспорт",
      "activities": "Развлечения",
      "other": "Прочее",
    },
    howToUse: [
      "Укажите число ночей в отеле и число дней поездки — они обычно различаются на единицу.",
      "Введите стоимость ночи и питания на одного человека в день.",
      "Добавьте транспорт и развлечения суммой на всю поездку.",
      "Прочие расходы заполните, если есть визы, страховка или сувениры.",
    ],
    howItWorks:
      "Проживание = ночи × цена ночи. Питание = дни × люди × цена дня. Транспорт, развлечения и прочее прибавляются суммой на всю поездку. Итог делится на число людей и на число дней.",
    example: "Двое на пять дней и четыре ночи: 14 000 ₽ отель, 12 000 ₽ еда, 12 000 ₽ дорога и 5000 ₽ развлечения — 43 000 ₽ на поездку.",
    faq: [
      { q: "Почему ночи и дни вводятся отдельно?", a: "Потому что поездка на пять дней — это, как правило, четыре ночи. Если подставить дни в стоимость проживания, бюджет вырастет на целые лишние сутки отеля." },
      { q: "Питание считается на всех сразу?", a: "Нет, вводится сумма на одного человека в день, а калькулятор умножает её и на дни, и на количество людей." },
      { q: "Куда отнести билеты на самолёт?", a: "В транспорт — это сумма на всю поездку. Если билеты куплены на каждого отдельно, введите их общую стоимость." },
      { q: "Что показывает стоимость в день?", a: "Весь бюджет, поделённый на число дней, включая разовые траты вроде билетов. Это ориентир для сравнения поездок разной длины." },
      { q: "Учитывается ли курс валюты?", a: "Нет, вводите суммы в одной валюте. Для перевода из другой валюты воспользуйтесь конвертером." },
    ],
    relatedCalculatorIds: ["trip-cost", "tip", "price-per-unit"],
  },
};
