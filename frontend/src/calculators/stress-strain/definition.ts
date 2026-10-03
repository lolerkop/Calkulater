import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { stressStrainCopyEn } from './copy.en';
import { stressStrainCopyUk } from './copy.uk';
import { stressStrainCopyDe } from './copy.de';
import { stressStrainCopyEs } from './copy.es';
import { stressStrainReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "stress-strain",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: stressStrainCopyEn, uk: stressStrainCopyUk, de: stressStrainCopyDe, es: stressStrainCopyEs },
  referenceCases: stressStrainReferenceCases,
  publishedExample: { inputs: { mode: 'stress', force: 10000, area: 100, length: 1000, delta: 0.5, e: 200000 }, expected: ["100 МПа"] },
  presentation: {
    id: "stress-strain",
    name: "Калькулятор напряжения и модуля Юнга",
    slug: "napryazhenie-i-deformaciya",
    fullPath: "/physics/napryazhenie-i-deformaciya/",
    category: "physics",
    icon: "arrow-left-right",
    popularity: 30,
    isNew: false,
    shortDescription: "Напряжение, относительная деформация и модуль Юнга при растяжении.",
    seoTitle: "Калькулятор напряжения и модуля Юнга — растяжение образца",
    seoDescription: "Рассчитайте напряжение, относительную деформацию и модуль Юнга при растяжении по силе, сечению, длине и удлинению образца.",
    h1: "Калькулятор напряжения и модуля Юнга",
    keywords: ["модуль Юнга", "напряжение растяжения", "относительная деформация", "расчёт удлинения"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'stress',
        options: [
          { value: 'stress', label: 'напряжение' },
          { value: 'modulus', label: 'модуль Юнга' },
          { value: 'elongation', label: 'удлинение' },
        ],
      },
      { name: 'force', label: "Осевая сила", type: 'number', signed: true, defaultValue: 10000, step: 100 , unit: "Н" },
      { name: 'area', label: "Площадь сечения", type: 'number', defaultValue: 100, min: 0, step: 1 , unit: "мм²" },
      { name: 'length', label: "Исходная длина", type: 'number', defaultValue: 1000, min: 0, step: 10 , unit: "мм" },
      { name: 'delta', label: "Удлинение", type: 'number', signed: true, defaultValue: 0.5, step: 0.1, showIf: {field:'mode',oneOf:['stress','modulus']} , unit: "мм" },
      { name: 'e', label: "Модуль Юнга", type: 'number', defaultValue: 200000, min: 0, step: 1000, showIf:{field:'mode',equals:'elongation'} , unit: "МПа" },
    ],
    resultLabels: {
      "stress": "Напряжение",
      "strain": "Относительная деформация",
      "modulus": "Модуль Юнга",
      "elongation": "Удлинение",
      "area": "Площадь сечения",
    },
    relatedCalculatorIds: ["hooke-law", "metal-weight", "physics-power"],
      ...contract.ru,
  },
};
