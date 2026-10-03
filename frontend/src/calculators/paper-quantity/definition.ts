import {validate} from './validate';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { paperQuantityCopyEn } from './copy.en';
import { paperQuantityCopyUk } from './copy.uk';
import { paperQuantityCopyDe } from './copy.de';
import { paperQuantityCopyEs } from './copy.es';
import { paperQuantityReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "paper-quantity",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: paperQuantityCopyEn, uk: paperQuantityCopyUk, de: paperQuantityCopyDe, es: paperQuantityCopyEs },
  referenceCases: paperQuantityReferenceCases,
  publishedExample: { inputs: { format: "a4", grammage: 80, sheets: 500 }, expected: ["2,495 кг"] },
  presentation: {
    id: "paper-quantity",
    name: "Калькулятор веса и количества бумаги",
    slug: "ves-i-kolichestvo-bumagi",
    fullPath: "/converters/ves-i-kolichestvo-bumagi/",
    category: "converters",
    icon: "layers",
    popularity: 35,
    isNew: false,
    shortDescription: "Масса пачки по формату, плотности и числу листов.",
    seoTitle: "Калькулятор веса бумаги — по формату, плотности и числу листов",
    seoDescription: "Рассчитайте массу пачки бумаги по формату A0–A6, плотности в граммах на квадратный метр и числу листов.",
    h1: "Калькулятор веса и количества бумаги",
    keywords: ["вес бумаги", "плотность бумаги", "граммы на квадратный метр", "формат A4"],
    fields: [
      {
        name: 'format', label: 'Формат листа', type: 'select', defaultValue: 'a4',
        options: [
          { value: 'a0', label: 'A0 — 841×1189 мм' },
          { value: 'a1', label: 'A1 — 594×841 мм' },
          { value: 'a2', label: 'A2 — 420×594 мм' },
          { value: 'a3', label: 'A3 — 297×420 мм' },
          { value: 'a4', label: 'A4 — 210×297 мм' },
          { value: 'a5', label: 'A5 — 148×210 мм' },
          { value: 'a6', label: 'A6 — 105×148 мм' },
        ],
      },
      { name: 'grammage', unit: 'г/м²', label: 'Плотность', type: 'number', defaultValue: 80, min: 0, step: 1 },
      { name: 'sheets', label: 'Листов', type: 'number', defaultValue: 500, min: 1, step: 1 },
    ],
    resultLabels: {
      "total": "Масса пачки", "sheetMass": "Масса одного листа", "area": "Площадь листа",
      "size": "Размер листа", "perKg": "Листов в килограмме",
    },
    relatedCalculatorIds: ["convert-mass", "convert-area", "files-on-disk"],
    ...contractContent.ru,
  },
};
