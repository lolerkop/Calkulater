// ROAS рядом с ROI: метрики разные, отличаются на единицу в кратности.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { roasCopyEn } from './copy.en';
import { roasCopyUk } from './copy.uk';
import { roasReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "roas",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: roasCopyEn, uk: roasCopyUk },
  referenceCases: roasReferenceCases,
  publishedExample: { inputs: { revenue: 480000, cost: 120000, margin: 100 }, expected: ["4,00×"] },
  presentation: {
    id: "roas",
    name: "Калькулятор ROAS",
    slug: "roas",
    fullPath: "/business/roas/",
    category: "business",
    icon: "trending-up",
    popularity: 37,
    isNew: true,
    shortDescription: "Окупаемость рекламных расходов вместе с ROI.",
    longDescription:
      "Делит доход на рекламный расход. ROAS и ROI описывают одну и ту же кампанию, но отличаются ровно на единицу в кратности: четырёхкратная окупаемость — это ROI 300 процентов, и назвать одно вместо другого значит сильно завысить или занизить результат. Обе величины показаны, чтобы разница была видна.",
    seoTitle: "Калькулятор ROAS — окупаемость рекламы и ROI",
    seoDescription:
      "Рассчитайте окупаемость рекламных расходов в кратности и процентах вместе с ROI и взглядом сквозь валовую маржу.",
    h1: "Калькулятор ROAS",
    keywords: ["roas калькулятор", "окупаемость рекламы", "roas и roi"],
    fields: [
      { name: 'revenue', label: 'Доход', type: 'number', defaultValue: 480000, unit: '₽', min: 0, step: 10000 },
      { name: 'cost', label: 'Расход на рекламу', type: 'number', defaultValue: 120000, unit: '₽', min: 0, step: 10000 },
      { name: 'margin', label: 'Валовая маржа, %', type: 'number', defaultValue: 100, min: 0, max: 100, step: 5 },
    ],
    resultLabels: { result: "ROAS", percent: "ROAS в процентах", roi: "ROI", profit: "Прибыль" },
    howToUse: ["Введите доход, который принесла кампания.", "Введите, сколько она стоила.", "Добавьте валовую маржу, чтобы увидеть прибыльную картину."],
    howItWorks: "ROAS = доход ÷ расход; ROI = (доход − расход) ÷ расход × 100.",
    example: "480 000 дохода при расходе 120 000 дают ROAS 4×, то есть ROI 300 процентов.",
    faq: [
      { q: "ROAS — это то же, что ROI?", a: "Нет. ROAS делит доход на расход, ROI делит прибыль на расход. Они отличаются ровно на единицу в кратности, поэтому здесь показаны обе." },
      { q: "Что добавляет взгляд через маржу?", a: "Доход — это не прибыль. Применение валовой маржи показывает, какая часть возврата переживает себестоимость товара." },
      { q: "Всегда ли ROAS выше единицы — это хорошо?", a: "Не обязательно. Он покрывает только рекламу, а всё остальное, что оплачивает бизнес, тоже должно выйти из остатка." },
      { q: "Почему нулевой расход не принимается?", a: "Деление на него не имеет значения: если ничего не потрачено, то и окупаемости расхода не существует." },
    ],
    relatedCalculatorIds: ["ad-roi", "cpm", "ctr"],
  },
};
