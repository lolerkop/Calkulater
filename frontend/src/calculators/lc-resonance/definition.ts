import { contextualField } from './contextualField';
import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { lcResonanceCopyEn } from './copy.en';
import { lcResonanceCopyUk } from './copy.uk';
import { lcResonanceCopyDe } from './copy.de';
import { lcResonanceCopyEs } from './copy.es';
import { lcResonanceReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "lc-resonance",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: lcResonanceCopyEn, uk: lcResonanceCopyUk, de: lcResonanceCopyDe, es: lcResonanceCopyEs },
  referenceCases: lcResonanceReferenceCases,
  publishedExample: { inputs: { l: 100, c: 100 }, expected: ["50 329,21 Гц"] },
  presentation: {
    id: "lc-resonance",
    name: "Калькулятор резонансной частоты LC-контура",
    slug: "rezonansnaya-chastota-lc",
    fullPath: "/electronics/rezonansnaya-chastota-lc/",
    category: "electronics",
    icon: "zap",
    popularity: 30,
    isNew: false,
    shortDescription: "Частота колебательного контура по индуктивности и ёмкости.",
    
    seoTitle: "Калькулятор резонансной частоты LC-контура",
    seoDescription: "Рассчитайте резонансную частоту колебательного контура по индуктивности в микрогенри и ёмкости в нанофарадах.",
    h1: "Калькулятор резонансной частоты LC-контура",
    keywords: ["резонансная частота", "LC-контур", "колебательный контур", "формула Томсона"],
    fields: [
      { name: 'l', label: "Индуктивность", type: 'number', defaultValue: 100, min: 0, step: 1 , unit: "мкГн" },
      { name: 'c', label: "Ёмкость", type: 'number', defaultValue: 100, min: 0, step: 1 , unit: "нФ" },
    ],
    resultLabels: {
      "freq": "Резонансная частота", "khz": "В килогерцах", "period": "Период",
      "z": "Волновое сопротивление", "l": "Индуктивность",
    },
    
    
    
    
    relatedCalculatorIds: ["rc-filter", "capacitor-network", "resistor-network"],
      
      ...contract.ru,
  },
};
