import { contextualField } from './contextualField';
import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { voltageDividerCopyEn } from './copy.en';
import { voltageDividerCopyUk } from './copy.uk';
import { voltageDividerCopyDe } from './copy.de';
import { voltageDividerCopyEs } from './copy.es';
import { voltageDividerReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "voltage-divider",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: voltageDividerCopyEn, uk: voltageDividerCopyUk, de: voltageDividerCopyDe, es: voltageDividerCopyEs },
  referenceCases: voltageDividerReferenceCases,
  publishedExample: { inputs: { vin: 12, r1: 10000, r2: 4700 }, expected: ["3,837 В"] },
  presentation: {
    id: "voltage-divider",
    name: "Калькулятор делителя напряжения",
    slug: "delitel-napryazheniya",
    fullPath: "/electronics/delitel-napryazheniya/",
    category: "electronics",
    icon: "divide",
    popularity: 36,
    isNew: false,
    shortDescription: "Выходное напряжение, ток и мощность плеч делителя на двух резисторах.",
    
    seoTitle: "Калькулятор делителя напряжения — выход, ток и мощность плеч",
    seoDescription: "Рассчитайте выходное напряжение делителя на двух резисторах, ток через него и мощность каждого плеча по входному напряжению и номиналам.",
    h1: "Калькулятор делителя напряжения",
    keywords: ["делитель напряжения", "расчёт делителя", "два резистора напряжение", "понизить напряжение резисторами"],
    fields: [
      { name: 'vin', label: "Входное напряжение", type: 'number', defaultValue: 12, signed: true, step: 1 , unit: "В" },
      { name: 'r1', label: "Верхний резистор R1", type: 'number', defaultValue: 10000, min: 0, step: 100 , unit: "Ом" },
      { name: 'r2', label: "Нижний резистор R2", type: 'number', defaultValue: 4700, min: 0, step: 100 , unit: "Ом" },
    ],
    resultLabels: {
      "vout": "Выходное напряжение",
      "current": "Ток через делитель",
      "ratio": "Доля от входного",
      "p1": "Мощность верхнего плеча",
      "p2": "Мощность нижнего плеча",
    },
    
    
    
    
    relatedCalculatorIds: ["ohms-law", "resistor-network", "rc-filter"],
      
      ...contract.ru,
  },
};
