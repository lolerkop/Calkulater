import { coulombContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { coulombCopyEn } from './copy.en';
import { coulombCopyUk } from './copy.uk';
import { coulombCopyDe } from './copy.de';
import { coulombCopyEs } from './copy.es';
import { coulombReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "coulomb",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: coulombCopyEn, uk: coulombCopyUk, de: coulombCopyDe, es: coulombCopyEs },
  referenceCases: coulombReferenceCases,
  publishedExample: { inputs: { q1: 1, q2: -1, r: 10 }, expected: ["8,988·10^-7 Н"] },
  presentation: {
    id: "coulomb",
    name: "Калькулятор закона Кулона",
    slug: "zakon-kulona",
    fullPath: "/physics/zakon-kulona/",
    category: "physics",
    icon: "atom",
    popularity: 32,
    isNew: false,
    shortDescription: "Сила взаимодействия двух точечных зарядов.",

    seoTitle: "Калькулятор закона Кулона — сила взаимодействия зарядов",
    seoDescription: "Рассчитайте силу взаимодействия двух точечных зарядов по закону Кулона, с напряжённостью поля и потенциальной энергией.",
    h1: "Калькулятор закона Кулона",
    keywords: ["закон Кулона", "сила взаимодействия зарядов", "электростатика", "напряжённость поля"],
    fields: [
      { name: 'q1', label: 'Первый заряд', unit: 'нКл', type: 'number', defaultValue: 1, signed: true, step: 1 },
      { name: 'q2', label: 'Второй заряд', unit: 'нКл', type: 'number', defaultValue: -1, signed: true, step: 1 },
      { name: 'r', label: 'Расстояние', unit: 'см', type: 'number', defaultValue: 10, min: 0, step: 1 },
    ],
    resultLabels: {
      "force": "Сила взаимодействия",
      "kind": "Характер",
      "field": "Напряжённость поля первого заряда",
      "energy": "Потенциальная энергия",
      "r": "Расстояние",
    },




    ...coulombContractContent.ru,
    relatedCalculatorIds: ["gravitational-force", "inverse-square", "capacitor-basics"],
  },
};
