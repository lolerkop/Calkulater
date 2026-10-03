import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
// Какой балл нужен на экзамене для желаемой итоговой.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { finalGradeCopyEn } from './copy.en';
import { finalGradeCopyUk } from './copy.uk';
import { finalGradeCopyDe } from './copy.de';
import { finalGradeCopyEs } from './copy.es';
import { finalGradeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "final-grade",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: finalGradeCopyEn, uk: finalGradeCopyUk, de: finalGradeCopyDe, es: finalGradeCopyEs },
  referenceCases: finalGradeReferenceCases,
  publishedExample: { inputs: { current: 78, target: 85, weight: 30 }, expected: ["101,33%"] },
  presentation: {
  id: "final-grade",
  name: "Калькулятор нужной оценки",
  slug: "final-grade",
  fullPath: "/education/final-grade/",
  category: "education",
  icon: "graduation-cap",
  popularity: 31,
  isNew: false,
  shortDescription: "Какой балл нужен на экзамене, чтобы выйти на цель.",
  seoTitle: "Калькулятор нужной оценки — какой балл нужен на экзамене",
  seoDescription:
      "Узнайте, какой балл нужен на экзамене для желаемой итоговой оценки при известных текущей оценке и весе экзамена.",
  h1: "Калькулятор нужной оценки",
  keywords: ["нужная оценка", "балл на экзамене", "вес экзамена"],
  fields: [
      { name: 'current', label: 'Текущая оценка', type: 'number', unit: '%', defaultValue: 78, min: 0, max: 100, step: 1 },
      { name: 'target', label: 'Желаемая итоговая', type: 'number', unit: '%', defaultValue: 85, min: 0, max: 100, step: 1 },
      { name: 'weight', label: 'Вес экзамена', type: 'number', unit: '%', defaultValue: 30, min: 0, max: 100, step: 5 },
    ],
  resultLabels: { result: "Нужный балл", contribution: "Вклад текущей оценки", weight: "Вес экзамена" },
  relatedCalculatorIds: ["test-score-percent", "reading-speed", "percent-calculator"],
  ...contractContent.ru
},
};
