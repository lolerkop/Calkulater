import { buildingWave13ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { miterAngleCopyEn } from './copy.en';
import { miterAngleCopyUk } from './copy.uk';
import { miterAngleCopyDe } from './copy.de';
import { miterAngleCopyEs } from './copy.es';
import { miterAngleReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "miter-angle",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: miterAngleCopyEn, uk: miterAngleCopyUk, de: miterAngleCopyDe, es: miterAngleCopyEs },
  referenceCases: miterAngleReferenceCases,
  publishedExample: { inputs: { corner: 90 }, expected: ["45 °"] },
  presentation: {
    id: "miter-angle",
    name: "Калькулятор угла запила",
    slug: "ugol-zapila",
    fullPath: "/building/ugol-zapila/",
    category: "building",
    icon: "triangle",
    popularity: 33,
    isNew: false,
    shortDescription: "Угол реза двух планок для соединения на ус.",
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: "Калькулятор угла запила — соединение на ус",
    seoDescription: "Рассчитайте угол реза плинтуса или багета для соединения на ус: половина угла стыка и значение для шкалы торцовочной пилы.",
    h1: "Калькулятор угла запила",
    keywords: ["угол запила", "соединение на ус", "торцовочная пила", "угол реза плинтуса"],
    fields: [
      { name: 'corner', label: "Угол стыка", type: 'number', unit: "°", defaultValue: 90, min: 0, max: 180, step: 1 },
    ],
    resultLabels: {
      "cut": "Угол реза", "sawFrom90": "Угол на пиле от 90°",
      "corner": "Угол стыка", "sum": "Сумма двух резов",
    },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks: buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ["rafters", "stairs", "convert-angle"],
  },
};

