import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { pipeFlowCopyEn } from './copy.en';
import { pipeFlowCopyUk } from './copy.uk';
import { pipeFlowCopyDe } from './copy.de';
import { pipeFlowCopyEs } from './copy.es';
import { pipeFlowReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "pipe-flow",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: pipeFlowCopyEn, uk: pipeFlowCopyUk, de: pipeFlowCopyDe, es: pipeFlowCopyEs },
  referenceCases: pipeFlowReferenceCases,
  publishedExample: { inputs: { flow: 10, diameter: 50 }, expected: ["1,415 м/с"] },
  presentation: {
    id: "pipe-flow",
    name: "Калькулятор скорости потока в трубе",
    slug: "skorost-potoka-v-trube",
    fullPath: "/physics/skorost-potoka-v-trube/",
    category: "physics",
    icon: "droplets",
    popularity: 34,
    isNew: false,
    shortDescription: "Скорость воды в трубе по расходу и внутреннему диаметру.",
    seoTitle: "Калькулятор скорости потока в трубе — по расходу и диаметру",
    seoDescription: "Рассчитайте скорость воды в трубе по расходу в кубометрах в час и внутреннему диаметру, с площадью сечения и расходом в литрах.",
    h1: "Калькулятор скорости потока в трубе",
    keywords: ["скорость потока в трубе", "расход воды", "внутренний диаметр трубы", "подбор диаметра"],
    fields: [
      { name: 'flow', label: "Расход", type: 'number', defaultValue: 10, min: 0, step: 1 , unit: "м³/ч" },
      { name: 'diameter', label: "Внутренний диаметр", type: 'number', defaultValue: 50, min: 0, step: 1 , unit: "мм" },
    ],
    resultLabels: {
      "velocity": "Скорость потока",
      "area": "Площадь сечения",
      "lps": "Расход в литрах в секунду",
      "lpm": "Расход в литрах в минуту",
      "diameter": "Внутренний диаметр",
    },
    relatedCalculatorIds: ["pool-fill-time", "hydrostatic-pressure", "pressure"],
      ...contract.ru,
  },
};
