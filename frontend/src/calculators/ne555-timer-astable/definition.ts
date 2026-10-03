import { contextualField } from './contextualField';
import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { timer555CopyEn } from './copy.en';
import { timer555CopyUk } from './copy.uk';
import { timer555CopyDe } from './copy.de';
import { ne555TimerAstableCopyEs } from './copy.es';
import { timer555ReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "ne555-timer-astable",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: timer555CopyEn, uk: timer555CopyUk, de: timer555CopyDe, es: ne555TimerAstableCopyEs },
  referenceCases: timer555ReferenceCases,
  publishedExample: { inputs: { r1: 10, r2: 47, c: 100 }, expected: ["138,72 Гц"] },
  presentation: {
    id: "ne555-timer-astable",
    name: "Калькулятор автоколебательного таймера NE555",
    slug: "taymer-ne555",
    fullPath: "/electronics/taymer-ne555/",
    category: "electronics",
    icon: "chip",
    popularity: 29,
    isNew: true,
    
    seoTitle: "Калькулятор NE555 — частота, период и скважность мультивибратора",
    h1: "Калькулятор автоколебательного таймера NE555",
    keywords: ["NE555", "мультивибратор", "скважность", "генератор импульсов"],
    fields: [
      { name: 'r1', label: "Сопротивление R1", type: 'number', defaultValue: 10, min: 0, step: 1 , unit: "кОм" },
      { name: 'r2', label: "Сопротивление R2", type: 'number', defaultValue: 47, min: 0, step: 1 , unit: "кОм" },
      { name: 'c', label: "Ёмкость C", type: 'number', defaultValue: 100, min: 0, step: 10 , unit: "нФ" },
    ],
    resultLabels: {
      "freq": "Частота", "period": "Период", "high": "Время высокого уровня",
      "low": "Время низкого уровня", "duty": "Скважность",
    },
    
    
    
    
    relatedCalculatorIds: ["lc-resonance", "rc-filter", "resistor-network"],
      
      ...contract.ru,
  },
};
