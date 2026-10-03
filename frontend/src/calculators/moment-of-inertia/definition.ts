import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { momentOfInertiaCopyEn } from './copy.en';
import { momentOfInertiaCopyUk } from './copy.uk';
import { momentOfInertiaCopyDe } from './copy.de';
import { momentOfInertiaCopyEs } from './copy.es';
import { momentOfInertiaReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "moment-of-inertia",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: momentOfInertiaCopyEn, uk: momentOfInertiaCopyUk, de: momentOfInertiaCopyDe, es: momentOfInertiaCopyEs },
  referenceCases: momentOfInertiaReferenceCases,
  publishedExample: { inputs: { shape: 'disk', m: 2, r: 0.15 }, expected: ["0,0225 кг·м²"] },
  presentation: {
    id: "moment-of-inertia",
    name: "Калькулятор момента инерции",
    slug: "moment-inercii",
    fullPath: "/physics/moment-inercii/",
    category: "physics",
    icon: "circle",
    popularity: 32,
    isNew: false,
    shortDescription: "Момент инерции стержня, диска, кольца и шара относительно оси.",
    seoTitle: "Калькулятор момента инерции — стержень, диск, кольцо, шар",
    seoDescription: "Рассчитайте момент инерции тела относительно оси по массе и размеру для шести классических тел, с радиусом инерции.",
    h1: "Калькулятор момента инерции",
    keywords: ["момент инерции", "момент инерции диска", "момент инерции стержня", "радиус инерции"],
    fields: [
      {
        name: 'shape', label: 'Тело', type: 'select', defaultValue: 'disk',
        options: [
          { value: 'rod-center', label: 'стержень через центр' },
          { value: 'rod-end', label: 'стержень через конец' },
          { value: 'disk', label: 'сплошной диск' },
          { value: 'ring', label: 'тонкое кольцо' },
          { value: 'sphere-solid', label: 'сплошной шар' },
          { value: 'sphere-hollow', label: 'полая сфера' },
        ],
      },
      { name: 'm', label: "Масса", type: 'number', defaultValue: 2, min: 0, step: 0.1 , unit: "кг" },
      { name: 'r', label: "Радиус или длина", type: 'number', defaultValue: 0.15, min: 0, step: 0.01 , unit: "м" },
    ],
    resultLabels: {
      "inertia": "Момент инерции", "mass": "Масса", "size": "Размер",
      "gyration": "Радиус инерции", "body": "Тело",
    },
    relatedCalculatorIds: ["physics-torque", "centripetal-force", "kinetic-energy"],
      ...contract.ru,
  },
};
