import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { freelanceRateCopyEn } from './copy.en';
import { freelanceRateCopyUk } from './copy.uk';
import { freelanceRateCopyDe } from './copy.de';
import { freelanceRateCopyEs } from './copy.es';
import { freelanceRateReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "freelance-rate",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: { ...freelanceRateCopyEn, ...contractContent.en }, uk: { ...freelanceRateCopyUk, ...contractContent.uk }, de: { ...freelanceRateCopyDe, ...contractContent.de }, es: { ...freelanceRateCopyEs, ...contractContent.es } },
  referenceCases: freelanceRateReferenceCases,
  publishedExample: {
    inputs: { targetIncome: 150000, workDays: 21, hoursPerDay: 6, billablePct: 70, expenses: 15000, taxPct: 6 },
    expected: ["1 990,16 ₽"],
  },
  presentation: {
    id: "freelance-rate",
    name: "Калькулятор ставки фрилансера",
    slug: "freelance-rate",
    fullPath: "/finance/freelance-rate/",
    category: "finance",
    icon: "banknote",
    popularity: 40,
    isNew: false,
    shortDescription: "Часовая ставка, которая даёт нужный доход после налога и неоплачиваемых часов.",
    seoTitle: "Калькулятор ставки фрилансера — цена часа работы",
    seoDescription: "Рассчитайте часовую ставку фрилансера по желаемому доходу с учётом налога, расходов и доли неоплачиваемых часов.",
    h1: "Калькулятор ставки фрилансера",
    keywords: ["ставка фрилансера", "цена часа работы", "сколько брать за час", "расчёт часовой ставки"],
    fields: [
      { name: 'targetIncome', label: 'Желаемый доход на руки в месяц', unit: '₽', type: 'number', defaultValue: 150000, min: 0, step: 1000 },
      { name: 'workDays', label: 'Рабочих дней в месяце', type: 'number', defaultValue: 21, min: 0, step: 1 },
      { name: 'hoursPerDay', label: 'Рабочих часов в дне', type: 'number', defaultValue: 6, min: 0, step: 0.5 },
      { name: 'billablePct', label: 'Доля оплачиваемых часов, %', type: 'number', defaultValue: 70, min: 0, max: 100, step: 1 },
      { name: 'expenses', label: 'Расходы на работу в месяц', unit: '₽', type: 'number', defaultValue: 0, min: 0, step: 1000, optional: true },
      { name: 'taxPct', label: 'Ставка налога, %', type: 'number', defaultValue: 6, min: 0, max: 99, step: 0.5 },
    ],
    resultLabels: {
      "rate": "Ставка за час",
      "billableHours": "Оплачиваемых часов",
      "gross": "Нужно выставить счетов",
      "dayRate": "Ставка за день",
      "expenses": "Расходы на работу",
      "tax": "Налог",
    },
    ...contractContent.ru,
    relatedCalculatorIds: ["workday-cost", "income-tax-calculator", "savings-rate"],
  },
};
