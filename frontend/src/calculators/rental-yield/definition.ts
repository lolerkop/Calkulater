import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { rentalYieldCopyEn } from './copy.en';
import { rentalYieldCopyUk } from './copy.uk';
import { rentalYieldCopyDe } from './copy.de';
import { rentalYieldReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "rental-yield",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: rentalYieldCopyEn, uk: rentalYieldCopyUk, de: rentalYieldCopyDe },
  referenceCases: rentalYieldReferenceCases,
  publishedExample: { inputs: { price: 10000000, rentMode: 'annual', annualRent: 600000, annualCosts: 0 }, expected: ["6,00%"] },
  presentation: {
    id: "rental-yield",
    name: "Калькулятор арендной доходности",
    slug: "rental-yield",
    fullPath: "/finance/rental-yield/",
    category: "finance",
    icon: "home",
    popularity: 42,
    isNew: false,
    shortDescription: "Валовая и чистая доходность недвижимости от сдачи в аренду.",
    longDescription:
      "Показывает, сколько процентов годовых приносит купленная недвижимость при сдаче в аренду. Валовая доходность считается от полной арендной платы, чистая — за вычетом годовых расходов: налога, страховки, обслуживания и простоя. Разница между ними обычно и решает, стоит ли покупка вложения: валовые 6 % при заметных расходах легко превращаются в 4 %, а именно чистую доходность и сравнивают с депозитом.",
    seoTitle: "Калькулятор арендной доходности — валовая и чистая",
    seoDescription: "Рассчитайте валовую и чистую доходность недвижимости от сдачи в аренду по цене покупки, арендной плате и годовым расходам.",
    h1: "Калькулятор арендной доходности",
    keywords: ["калькулятор арендной доходности", "доходность недвижимости", "валовая и чистая доходность аренды"],
    fields: [
      { name: 'price', label: 'Цена покупки, ₽', type: 'number', defaultValue: 10000000, min: 0, step: 10000 },
      {
        name: 'rentMode', label: 'Аренда задана', type: 'select', defaultValue: 'annual',
        options: [
          { value: 'annual', label: 'за год' },
          { value: 'monthly', label: 'за месяц' },
        ],
      },
      { name: 'annualRent', label: 'Аренда за год, ₽', type: 'number', defaultValue: 600000, min: 0, step: 1000, showIf: { field: 'rentMode', equals: 'annual' } },
      { name: 'monthlyRent', label: 'Аренда за месяц, ₽', type: 'number', defaultValue: 50000, min: 0, step: 1000, showIf: { field: 'rentMode', equals: 'monthly' } },
      { name: 'annualCosts', label: 'Годовые расходы, ₽', type: 'number', defaultValue: 0, min: 0, step: 1000, optional: true },
    ],
    resultLabels: {
      "gross": "Валовая доходность",
      "net": "Чистая доходность",
      "annual": "Аренда за год",
      "payback": "Окупаемость",
    },
    howToUse: ["Введите цену покупки.", "Укажите аренду за год или за месяц.", "При желании добавьте годовые расходы — появится чистая доходность."],
    howItWorks: "Валовая доходность = аренда за год ÷ цена × 100. Чистая = (аренда за год − годовые расходы) ÷ цена × 100. Окупаемость — цена, делённая на годовой доход.",
    example: "Квартира за 10 000 000 ₽ с арендой 50 000 ₽ в месяц даёт валовую доходность 6,00%.",
    faq: [
      { q: "Чем валовая доходность отличается от чистой?", a: "Валовая считается от всей арендной платы, чистая — за вычетом годовых расходов. Именно чистую доходность имеет смысл сравнивать со ставкой по вкладу." },
      { q: "Что входит в годовые расходы?", a: "То, что вы платите каждый год: налог, страховку, обслуживание, ремонт и потери от месяцев простоя. Состав расходов вы определяете сами — калькулятор берёт итоговую сумму." },
      { q: "Учитывается ли рост цены недвижимости?", a: "Нет. Считается только доход от аренды. Прирост стоимости — отдельная составляющая, и она непредсказуема." },
      { q: "Что показывает окупаемость?", a: "За сколько лет арендный доход вернёт цену покупки при неизменных условиях. Это обратная величина доходности." },
    ],
    relatedCalculatorIds: ["roi", "dividend-yield", "deposit-calculator"],
  },
};
