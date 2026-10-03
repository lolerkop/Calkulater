import { validate } from './validate';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { dcaCopyEn } from './copy.en';
import { dcaCopyUk } from './copy.uk';
import { dcaCopyDe } from './copy.de';
import { dcaCopyEs } from './copy.es';
import { dcaReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "dca",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: { ...dcaCopyEn, ...contractContent.en }, uk: { ...dcaCopyUk, ...contractContent.uk }, de: { ...dcaCopyDe, ...contractContent.de }, es: { ...dcaCopyEs, ...contractContent.es } },
  referenceCases: dcaReferenceCases,
  publishedExample: { inputs: { monthly: 10000, months: 12, priceGrowthPct: 2, startPrice: 5000 }, expected: ["134 120,90 ₽"] },
  presentation: {
    id: "dca",
    name: "Калькулятор усреднения цены (DCA)",
    slug: "dca",
    fullPath: "/finance/dca/",
    category: "finance",
    icon: "trending-up",
    popularity: 31,
    isNew: false,
    shortDescription: "Средняя цена и результат при регулярных покупках на одинаковую сумму.",
    seoTitle: "DCA-калькулятор: усреднение цены при регулярных покупках",
    seoDescription: "Рассчитайте среднюю цену покупки, вложенную сумму и результат при регулярных вложениях одинаковой суммы.",
    h1: "Калькулятор усреднения цены (DCA)",
    keywords: ["DCA калькулятор", "усреднение цены", "регулярные покупки", "средняя цена покупки"],
    fields: [
      { name: 'monthly', label: 'Взнос в месяц', unit: '₽', type: 'number', defaultValue: 10000, min: 0, step: 1000 },
      { name: 'months', label: 'Месяцев', type: 'number', defaultValue: 12, min: 1, max: 12000, step: 1 },
      { name: 'startPrice', label: 'Начальная цена за единицу', unit: '₽', type: 'number', defaultValue: 5000, min: 0, step: 100 },
      { name: 'priceGrowthPct', label: 'Рост цены в месяц, %', type: 'number', defaultValue: 2, step: 0.5, signed: true },
    ],
    resultLabels: {
      "value": "Итоговая стоимость",
      "invested": "Вложено всего",
      "units": "Куплено единиц",
      "avg": "Средняя цена",
      "profit": "Результат",
      "lastPrice": "Цена последней покупки",
      "table": "По месяцам",
    },
    ...contractContent.ru,
    relatedCalculatorIds: ["crypto-pnl", "real-return", "position-size"],
  },
};
