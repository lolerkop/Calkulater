import { contextualField } from './contextualField';
import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { rmsVoltageCopyEn } from './copy.en';
import { rmsVoltageCopyUk } from './copy.uk';
import { rmsVoltageCopyDe } from './copy.de';
import { rmsVoltageCopyEs } from './copy.es';
import { rmsVoltageReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "rms-voltage",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: rmsVoltageCopyEn, uk: rmsVoltageCopyUk, de: rmsVoltageCopyDe, es: rmsVoltageCopyEs },
  referenceCases: rmsVoltageReferenceCases,
  publishedExample: { inputs: { mode: "peak", value: 311, wave: "sine" }, expected: ["219,91 В"] },
  presentation: {
    id: "rms-voltage",
    name: "Калькулятор действующего напряжения",
    slug: "deystvuyushchee-napryazhenie",
    fullPath: "/electronics/deystvuyushchee-napryazhenie/",
    category: "electronics",
    icon: "bolt",
    popularity: 33,
    isNew: false,
    shortDescription: "Пересчёт амплитудного, размаха и действующего напряжения для синуса, меандра и треугольника.",
    
    seoTitle: "Калькулятор действующего напряжения — амплитуда, размах, RMS",
    seoDescription: "Пересчитайте амплитудное значение, размах и действующее напряжение для синуса, меандра и треугольного сигнала.",
    h1: "Калькулятор действующего напряжения",
    keywords: ["действующее напряжение", "RMS", "амплитудное значение", "коэффициент амплитуды"],
    fields: [
      {
        name: 'mode', label: 'Что задано', type: 'select', defaultValue: 'peak',
        options: [
          { value: 'peak', label: 'амплитудное значение' },
          { value: 'pp', label: 'размах' },
          { value: 'rms', label: 'действующее значение' },
        ],
      },
      {
        name: 'wave', label: 'Форма сигнала', type: 'select', defaultValue: 'sine',
        options: [
          { value: 'sine', label: 'синус' },
          { value: 'square', label: 'меандр' },
          { value: 'triangle', label: 'треугольник' },
        ],
      },
      { name: 'value', label: "Заданное напряжение", type: 'number', defaultValue: 311, min: 0, step: 1 , unit: "В" },
    ],
    resultLabels: {
      "rms": "Действующее напряжение", "peak": "Амплитудное значение", "pp": "Размах",
      "crest": "Коэффициент амплитуды", "mean": "Среднее по модулю",
    },
    
    
    
    
    relatedCalculatorIds: ["single-phase", "ohms-law", "voltage-divider"],
      
      ...contract.ru,
  },
};
