import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { gpaCopyEn } from './copy.en';
import { gpaCopyUk } from './copy.uk';
import { gpaCopyDe } from './copy.de';
import { gpaCopyEs } from './copy.es';
import { gpaReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "gpa",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: gpaCopyEn, uk: gpaCopyUk, de: gpaCopyDe, es: gpaCopyEs },
  referenceCases: gpaReferenceCases,
  publishedExample: { inputs: { grades: '5 3\n4 4\n3 2' }, expected: ["4,1111"] },
  presentation: {
  id: "gpa",
  name: "Калькулятор среднего балла",
  slug: "gpa",
  fullPath: "/education/gpa/",
  category: "education",
  icon: "graduation-cap",
  popularity: 39,
  isNew: false,
  shortDescription: "Средний балл с учётом веса предметов и простое среднее для сравнения.",
  seoTitle: "Калькулятор среднего балла с учётом кредитов",
  seoDescription: "Рассчитайте средний балл по списку оценок с весами и сравните его с простым средним без учёта кредитов.",
  h1: "Калькулятор среднего балла",
  keywords: ["средний балл", "GPA калькулятор", "средний балл с кредитами", "как посчитать GPA"],
  fields: [
      {
        name: 'grades', label: 'Оценки: по одной в строке, через пробел вес', type: 'textarea',
        defaultValue: '5 3\n4 4\n3 2',
      },
    ],
  resultLabels: {
      "gpa": "Средний балл",
      "weights": "Сумма весов",
      "products": "Сумма произведений",
      "subjects": "Предметов",
      "simple": "Простое среднее",
    },
  relatedCalculatorIds: ["final-grade", "test-score-percent", "weighted-mean"],
  ...contractContent.ru
},
};
