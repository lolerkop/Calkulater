import { validate } from './validate';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { depreciationMethodsCopyEn } from './copy.en';
import { depreciationMethodsCopyUk } from './copy.uk';
import { depreciationMethodsCopyDe } from './copy.de';
import { depreciationMethodsCopyEs } from './copy.es';
import { depreciationMethodsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "depreciation-methods",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: { ...depreciationMethodsCopyEn, ...contractContent.en }, uk: { ...depreciationMethodsCopyUk, ...contractContent.uk }, de: { ...depreciationMethodsCopyDe, ...contractContent.de }, es: { ...depreciationMethodsCopyEs, ...contractContent.es } },
  referenceCases: depreciationMethodsReferenceCases,
  publishedExample: {
    inputs: { cost: 1200000, salvage: 200000, life: 5, method: 'straight', year: 1 },
    expected: ["200 000,00 ₽"],
  },
  presentation: {
    id: "depreciation-methods",
    name: "Калькулятор амортизации актива",
    slug: "amortizaciya-aktiva",
    fullPath: "/finance/amortizaciya-aktiva/",
    category: "finance",
    icon: "trending-up",
    popularity: 34,
    isNew: false,
    shortDescription: "Амортизация тремя методами с ликвидационной стоимостью и таблицей по годам.",
    seoTitle: "Калькулятор амортизации — линейный, убывающий остаток, сумма чисел лет",
    seoDescription: "Рассчитайте амортизацию актива тремя методами с учётом ликвидационной стоимости: за год, накопленную и остаточную стоимость с таблицей по годам.",
    h1: "Калькулятор амортизации актива",
    keywords: ["амортизация", "линейный метод амортизации", "убывающий остаток", "сумма чисел лет"],
    fields: [
      { name: 'cost', label: 'Первоначальная стоимость', unit: '₽', type: 'number', defaultValue: 1200000, min: 0, step: 10000 },
      { name: 'salvage', label: 'Ликвидационная стоимость', unit: '₽', type: 'number', defaultValue: 200000, min: 0, step: 10000 },
      { name: 'life', label: 'Срок службы, лет', type: 'number', defaultValue: 5, min: 1, max: 50, step: 1 },
      {
        name: 'method', label: 'Метод', type: 'select', defaultValue: 'straight',
        options: [
          { value: 'straight', label: 'линейный' },
          { value: 'ddb', label: 'двойной убывающий остаток' },
          { value: 'syd', label: 'сумма чисел лет' },
        ],
      },
      { name: 'year', label: 'Год расчёта', type: 'number', defaultValue: 1, min: 1, step: 1 },
    ],
    resultLabels: {
      "yearly": "Амортизация за год",
      "accumulated": "Накопленная амортизация",
      "book": "Остаточная стоимость",
      "base": "Амортизируемая база",
      "share": "Доля списанного",
      "table": "Амортизация по годам",
    },
    ...contractContent.ru,
    relatedCalculatorIds: ["car-depreciation", "inflation", "real-return"],
  },
};
