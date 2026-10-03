import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { contextualField } from './contextualField';
import { compute } from './compute';
import { decibelCopyEn } from './copy.en';
import { decibelCopyUk } from './copy.uk';
import { decibelCopyDe } from './copy.de';
import { decibelCopyEs } from './copy.es';
import { decibelReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "decibel",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: decibelCopyEn, uk: decibelCopyUk, de: decibelCopyDe, es: decibelCopyEs },
  referenceCases: decibelReferenceCases,
  publishedExample: { inputs: { mode: 'sum', levels: '80 80', p1: 1, p2: 2, kind: 'power' }, expected: ["83,01 дБ"] },
  presentation: {
    id: "decibel",
    name: "Калькулятор децибелов",
    slug: "decibely",
    fullPath: "/physics/decibely/",
    category: "physics",
    icon: "activity",
    popularity: 32,
    isNew: false,
    shortDescription: "Сложение уровней шума и перевод отношения величин в децибелы.",
    seoTitle: "Калькулятор децибелов — сложение уровней шума и отношение в дБ",
    seoDescription: "Сложите уровни шума нескольких источников по правилам логарифмической шкалы и переведите отношение мощностей или амплитуд в децибелы.",
    h1: "Калькулятор децибелов",
    keywords: ["децибелы", "сложение уровней шума", "перевод в дБ", "отношение мощностей"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'sum',
        options: [
          { value: 'sum', label: 'сумму уровней' },
          { value: 'ratio', label: 'отношение в децибелах' },
        ],
      },
      { name: 'levels', label: "Уровни через пробел", type: 'textarea', defaultValue: '80 80', placeholder: '80 75 68', showIf: { field: 'mode', equals: 'sum' } , unit: "дБ" },
      { name: 'p1', label: 'Исходная величина', unit: 'общая единица', type: 'number', defaultValue: 1, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'ratio' } },
      { name: 'p2', label: 'Конечная величина', unit: 'общая единица', type: 'number', defaultValue: 2, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'ratio' } },
      {
        name: 'kind', label: 'Тип величины', type: 'select', defaultValue: 'power',
        options: [
          { value: 'power', label: 'мощность' },
          { value: 'amplitude', label: 'амплитуда' },
        ],
        showIf: { field: 'mode', equals: 'ratio' },
      },
    ],
    resultLabels: {
      "level": "Уровень",
      "sources": "Источников",
      "loudest": "Самый громкий",
      "added": "Прибавка к самому громкому",
      "arithmetic": "Арифметическая сумма (так НЕ считают)",
      "power": "Во сколько раз по мощности",
      "amplitude": "Во сколько раз по амплитуде",
    },
    relatedCalculatorIds: ["logarithm", "wave", "physics-power"],
      ...contract.ru,
  },
};
