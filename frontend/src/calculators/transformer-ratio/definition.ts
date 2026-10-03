import { validate } from './validate';
import { contextualField } from './contextualField';
import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { transformerRatioCopyEn } from './copy.en';
import { transformerRatioCopyUk } from './copy.uk';
import { transformerRatioCopyDe } from './copy.de';
import { transformerRatioCopyEs } from './copy.es';
import { transformerRatioReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "transformer-ratio",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  contextualField,
  copy: { en: transformerRatioCopyEn, uk: transformerRatioCopyUk, de: transformerRatioCopyDe, es: transformerRatioCopyEs },
  referenceCases: transformerRatioReferenceCases,
  publishedExample: {
    inputs: { mode: 'secondaryVoltage', n1: 500, n2: 100, v1: 220, v2: 44, i1: 2 },
    expected: ["44 В"],
  },
  presentation: {
    id: "transformer-ratio",
    name: "Калькулятор коэффициента трансформации",
    slug: "koefficient-transformacii",
    fullPath: "/electronics/koefficient-transformacii/",
    category: "electronics",
    icon: "repeat",
    popularity: 31,
    isNew: false,
    shortDescription: "Витки, напряжения и токи идеального трансформатора.",
    
    seoTitle: "Калькулятор коэффициента трансформации — витки, напряжение, ток",
    seoDescription: "Рассчитайте вторичное напряжение и ток идеального трансформатора по числу витков или найдите нужное отношение обмоток.",
    h1: "Калькулятор коэффициента трансформации",
    keywords: ["коэффициент трансформации", "витки трансформатора", "вторичное напряжение", "идеальный трансформатор"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'secondaryVoltage',
        options: [
          { value: 'secondaryVoltage', label: 'вторичное напряжение' },
          { value: 'turnsRatio', label: 'отношение витков' },
        ],
      },
      { name: 'n1', label: "Витки первичной обмотки N1", type: 'number', defaultValue: 500, min: 0, step: 10, showIf: { field: 'mode', equals: 'secondaryVoltage' } , unit: "витков" },
      { name: 'n2', label: "Витки вторичной обмотки N2", type: 'number', defaultValue: 100, min: 0, step: 10, showIf: { field: 'mode', equals: 'secondaryVoltage' } , unit: "витков" },
      { name: 'v1', label: "Первичное напряжение RMS", type: 'number', defaultValue: 220, min: 0, step: 1 , unit: "В" },
      { name: 'v2', label: "Нужное вторичное напряжение RMS", type: 'number', defaultValue: 44, min: 0, step: 1, showIf: { field: 'mode', equals: 'turnsRatio' } , unit: "В" },
      { name: 'i1', label: "Первичный ток RMS", type: 'number', defaultValue: 2, min: 0, step: 0.1 , unit: "А" },
    ],
    resultLabels: {
      "value": "Вторичное напряжение", "ratio": "Отношение витков", "i2": "Вторичный ток",
      "power": "Мощность", "type": "Тип",
    },
    
    
    
    
    relatedCalculatorIds: ["single-phase", "kva-kw", "voltage-divider"],
      
      ...contract.ru,
  },
};
