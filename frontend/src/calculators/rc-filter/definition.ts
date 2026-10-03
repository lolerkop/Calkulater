import { contextualField } from './contextualField';
import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { rcFilterCopyEn } from './copy.en';
import { rcFilterCopyUk } from './copy.uk';
import { rcFilterCopyDe } from './copy.de';
import { rcFilterCopyEs } from './copy.es';
import { rcFilterReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "rc-filter",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: rcFilterCopyEn, uk: rcFilterCopyUk, de: rcFilterCopyDe, es: rcFilterCopyEs },
  referenceCases: rcFilterReferenceCases,
  publishedExample: { inputs: { r: 10000, c: 100 }, expected: ["159,15 Гц"] },
  presentation: {
    id: "rc-filter",
    name: "Калькулятор RC-цепи",
    slug: "rc-filtr",
    fullPath: "/electronics/rc-filtr/",
    category: "electronics",
    icon: "activity",
    popularity: 31,
    isNew: false,
    shortDescription: "Частота среза и постоянная времени резистора с конденсатором.",
    
    seoTitle: "Калькулятор RC-цепи — частота среза и постоянная времени",
    
    h1: "Калькулятор RC-цепи",
    keywords: ["rc фильтр", "частота среза", "постоянная времени rc", "фильтр нижних частот"],
    fields: [
      { name: 'r', label: "Сопротивление R", type: 'number', defaultValue: 10000, min: 0, step: 100 , unit: "Ом" },
      { name: 'c', label: "Ёмкость C", type: 'number', defaultValue: 100, min: 0, step: 10 , unit: "нФ" },
    ],
    resultLabels: {
      "cutoff": "Частота среза",
      "tau": "Постоянная времени",
      "settling": "Заряд почти до конца",
      "resistance": "Сопротивление",
      "capacitance": "Ёмкость",
    },
    
    
    
    
    relatedCalculatorIds: ["capacitor-basics", "resistor-network", "ohms-law"],
      
      ...contract.ru,
  },
};
