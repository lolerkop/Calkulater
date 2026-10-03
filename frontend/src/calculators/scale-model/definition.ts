import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { scaleModelCopyEn } from './copy.en';
import { scaleModelCopyUk } from './copy.uk';
import { scaleModelCopyDe } from './copy.de';
import { scaleModelCopyEs } from './copy.es';
import { scaleModelReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "scale-model",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: scaleModelCopyEn, uk: scaleModelCopyUk, de: scaleModelCopyDe, es: scaleModelCopyEs },
  referenceCases: scaleModelReferenceCases,
  publishedExample: { inputs: { mode: 'toModel', real: 4350, model: 50, scale: 87 }, expected: ["50 мм"] },
  presentation: {
    id: "scale-model",
    name: "Калькулятор масштаба модели",
    slug: "masshtab-modeli",
    fullPath: "/converters/masshtab-modeli/",
    category: "converters",
    icon: "shapes",
    popularity: 30,
    isNew: false,
    shortDescription: "Пересчёт размеров между натурой и моделью при масштабе 1:N.",
    seoTitle: "Калькулятор масштаба модели — 1:87, 1:43, 1:72",
    seoDescription: "Переведите размер натуры в размер модели и обратно при любом масштабе, а по паре размеров найдите сам масштаб.",
    h1: "Калькулятор масштаба модели",
    keywords: ["масштаб модели", "1:87", "1:43", "перевод масштаба", "размер модели"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'toModel',
        options: [
          { value: 'toModel', label: 'размер модели' },
          { value: 'toReal', label: 'размер натуры' },
          { value: 'findScale', label: 'масштаб' },
        ],
      },
      { name: 'real', label: 'Размер натуры, мм', type: 'number', defaultValue: 4350, min: 0, step: 10, showIf: { field: 'mode', oneOf: ["toModel", "findScale"] } },
      { name: 'model', label: 'Размер модели, мм', type: 'number', defaultValue: 50, min: 0, step: 1, showIf: { field: 'mode', oneOf: ["toReal", "findScale"] } },
      { name: 'scale', label: 'Знаменатель масштаба, 1:N', type: 'number', defaultValue: 87, min: 0, step: 1, showIf: { field: 'mode', oneOf: ["toModel", "toReal"] } },
    ],
    resultLabels: {
      "model": "Размер модели",
      "real": "Размер натуры",
      "scale": "Масштаб",
      "times": "Отношение натуры к модели",
    },
    relatedCalculatorIds: ["proportion", "convert-length", "modular-scale"],
    ...contractContent.ru,
  },
};
