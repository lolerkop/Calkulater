import { contextualField } from './contextualField';
import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { coaxialCableImpedanceCopyEn } from './copy.en';
import { coaxialCableImpedanceCopyUk } from './copy.uk';
import { coaxialCableImpedanceCopyDe } from './copy.de';
import { coaxialCableImpedanceCopyEs } from './copy.es';
import { coaxialCableImpedanceReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "coaxial-cable-impedance",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: coaxialCableImpedanceCopyEn, uk: coaxialCableImpedanceCopyUk, de: coaxialCableImpedanceCopyDe, es: coaxialCableImpedanceCopyEs },
  referenceCases: coaxialCableImpedanceReferenceCases,
  publishedExample: { inputs: { dIn: 0.9, dOut: 2.95, eps: 2.25 }, expected: ["47,433 Ом"] },
  presentation: {
    id: "coaxial-cable-impedance",
    name: "Калькулятор волнового сопротивления коаксиального кабеля",
    slug: "volnovoe-soprotivlenie-kabelya",
    fullPath: "/electronics/volnovoe-soprotivlenie-kabelya/",
    category: "electronics",
    icon: "chip",
    popularity: 26,
    isNew: false,
    shortDescription: "Волновое сопротивление коаксиала по диаметрам жилы, оплётки и диэлектрику.",
    
    seoTitle: "Калькулятор волнового сопротивления коаксиального кабеля",
    seoDescription: "Рассчитайте волновое сопротивление коаксиального кабеля по диаметрам жилы и оплётки, ёмкость на метр и коэффициент укорочения.",
    h1: "Калькулятор волнового сопротивления коаксиального кабеля",
    keywords: ["волновое сопротивление", "коаксиальный кабель", "коэффициент укорочения", "50 Ом"],
    fields: [
      { name: 'dIn', label: "Наружный диаметр центральной жилы", type: 'number', defaultValue: 0.9, min: 0, step: 0.1 , unit: "мм" },
      { name: 'dOut', label: "Внутренний диаметр экрана", type: 'number', defaultValue: 2.95, min: 0, step: 0.1 , unit: "мм" },
      { name: 'eps', label: "Относительная проницаемость εr", type: 'number', defaultValue: 2.25, min: 1, step: 0.05 , unit: "1" },
    ],
    resultLabels: {
      "impedance": "Волновое сопротивление", "capacitance": "Ёмкость на метр",
      "vf": "Коэффициент укорочения", "delay": "Задержка на метр",
      "ratio": "Отношение диаметров",
    },
    
    
    
    
    relatedCalculatorIds: ["voltage-drop", "lc-resonance", "capacitor-basics"],
      
      ...contract.ru,
  },
};
