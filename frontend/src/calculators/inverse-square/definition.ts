import { inverseSquareContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { inverseSquareCopyEn } from './copy.en';
import { inverseSquareCopyUk } from './copy.uk';
import { inverseSquareCopyDe } from './copy.de';
import { inverseSquareCopyEs } from './copy.es';
import { inverseSquareReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "inverse-square",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: inverseSquareCopyEn, uk: inverseSquareCopyUk, de: inverseSquareCopyDe, es: inverseSquareCopyEs },
  referenceCases: inverseSquareReferenceCases,
  publishedExample: { inputs: { i1: 1000, d1: 1, d2: 3 }, expected: ["111,11"] },
  presentation: {
    id: "inverse-square",
    name: "Калькулятор закона обратных квадратов",
    slug: "zakon-obratnyh-kvadratov",
    fullPath: "/physics/zakon-obratnyh-kvadratov/",
    category: "physics",
    icon: "activity",
    popularity: 31,
    isNew: false,
    shortDescription: "Как падает интенсивность с расстоянием от точечного источника.",

    seoTitle: "Калькулятор закона обратных квадратов — интенсивность и расстояние",
    seoDescription: "Рассчитайте изменение линейной интенсивности или освещённости с расстоянием от точечного источника по закону обратных квадратов.",
    h1: "Калькулятор закона обратных квадратов",
    keywords: ["закон обратных квадратов", "интенсивность и расстояние", "освещённость", "падение уровня"],
    fields: [
      { name: 'i1', label: 'Интенсивность на исходном расстоянии', unit: 'ед. I₁', type: 'number', defaultValue: 1000, min: 0, step: 1 },
      { name: 'd1', label: 'Исходное расстояние', unit: 'ед. длины', type: 'number', defaultValue: 1, min: 0, step: 0.1 },
      { name: 'd2', label: 'Новое расстояние', unit: 'ед. длины', type: 'number', defaultValue: 3, min: 0, step: 0.1 },
    ],
    resultLabels: {
      "i2": "Интенсивность на новом расстоянии", "factor": "Во сколько раз изменилась",
      "distanceRatio": "Отношение расстояний", "percent": "В процентах от исходной",
      "i1": "Исходная интенсивность",
    },




    ...inverseSquareContractContent.ru,
    relatedCalculatorIds: ["lighting", "decibel", "doppler"],
  },
};
