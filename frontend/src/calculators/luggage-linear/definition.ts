import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { luggageLinearCopyEn } from './copy.en';
import { luggageLinearCopyUk } from './copy.uk';
import { luggageLinearCopyDe } from './copy.de';
import { luggageLinearCopyEs } from './copy.es';
import { luggageLinearReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "luggage-linear",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: luggageLinearCopyEn, uk: luggageLinearCopyUk, de: luggageLinearCopyDe, es: luggageLinearCopyEs },
  referenceCases: luggageLinearReferenceCases,
  publishedExample: { inputs: { l: 55, w: 40, h: 23, limit: 158 }, expected: ["118 см"] },
  presentation: {
    id: "luggage-linear",
    name: "Калькулятор линейных габаритов багажа",
    slug: "lineynye-gabarity-bagazha",
    fullPath: "/household/lineynye-gabarity-bagazha/",
    category: "household",
    icon: "package",
    popularity: 34,
    isNew: false,
    shortDescription: "Сумма трёх сторон чемодана против нормы авиакомпании.",
    seoTitle: "Калькулятор линейных габаритов багажа — сумма трёх сторон",
    h1: "Калькулятор линейных габаритов багажа",
    keywords: ["линейные габариты багажа", "сумма трёх сторон", "норма чемодана", "158 см"],
    fields: [
  {
    "name": "l",
    "label": "Длина",
    "type": "number",
    "defaultValue": 55,
    "min": 0,
    "step": 1,
    "unit": "см"
  },
  {
    "name": "w",
    "label": "Ширина",
    "type": "number",
    "defaultValue": 40,
    "min": 0,
    "step": 1,
    "unit": "см"
  },
  {
    "name": "h",
    "label": "Высота",
    "type": "number",
    "defaultValue": 23,
    "min": 0,
    "step": 1,
    "unit": "см"
  },
  {
    "name": "limit",
    "label": "Норма авиакомпании",
    "type": "number",
    "defaultValue": 158,
    "min": 0,
    "step": 1,
    "unit": "см"
  }
],
    resultLabels: {
  "sum": "Линейные габариты",
  "left": "Запас до предела",
  "inches": "В дюймах",
  "volume": "Объём коробки",
  "limit": "По введённому пределу"
},
    relatedCalculatorIds: ["trip-budget", "room-volume", "convert-length"],
    ...contract.ru,
  },
};
