import { mathWave8ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { quartileCopyEn } from './copy.en';
import { quartileCopyUk } from './copy.uk';
import { quartileCopyDe } from './copy.de';
import { quartileCopyEs } from './copy.es';
import { quartileReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "quartile",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: quartileCopyEn, uk: quartileCopyUk, de: quartileCopyDe, es: quartileCopyEs },
  referenceCases: quartileReferenceCases,
  publishedExample: { inputs: { values: "2 4 4 5 7 9 11 12" }, expected: ["6"] },
  presentation: {
    id: "quartile",
    name: "Калькулятор квартилей и перцентилей",
    slug: "kvartili",
    fullPath: "/math/kvartili/",
    category: "math",
    icon: "sigma",
    popularity: 29,
    isNew: true,
    shortDescription: "Квартили, межквартильный размах, границы усов и выбросы по списку чисел.",
    seoTitle: "Калькулятор квартилей, межквартильного размаха и выбросов",
    seoDescription: "Посчитайте Q1, медиану, Q3, межквартильный размах, границы усов и число выбросов по списку чисел.",
    h1: "Калькулятор квартилей и перцентилей",
    keywords: ["квартили", "межквартильный размах", "выбросы", "ящик с усами"],
    fields: [
      {
        name: 'values', unit: 'ед. данных', label: 'Числа через пробел или с новой строки', type: 'textarea',
        defaultValue: '2 4 4 5 7 9 11 12',
      },
    ],
    resultLabels: {
      "median": "Медиана", "q1": "Первый квартиль", "q3": "Третий квартиль",
      "iqr": "Межквартильный размах", "whiskers": "Границы усов",
      "outliers": "Выбросов", "count": "Значений",
    },
    relatedCalculatorIds: ["stats-descriptive", "weighted-mean", "z-score"],
    ...mathWave8ContractContent.ru,
  },
};
