import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { roastTimeCopyEn } from './copy.en';
import { roastTimeCopyUk } from './copy.uk';
import { roastTimeCopyDe } from './copy.de';
import { roastTimeCopyEs } from './copy.es';
import { roastTimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "roast-time",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: roastTimeCopyEn, uk: roastTimeCopyUk, de: roastTimeCopyDe, es: roastTimeCopyEs },
  referenceCases: roastTimeReferenceCases,
  publishedExample: { inputs: { weight: 5, minutes_per_kg: 40, base_minutes: 20, rest_pct: 20 }, expected: ["3 ч 40 мин"] },
  presentation: {
    ...contractContent.ru,
    id: "roast-time",
    name: "Калькулятор времени запекания",
    slug: "vremya-zapekaniya",
    fullPath: "/household/vremya-zapekaniya/",
    category: "household",
    icon: "flame",
    popularity: 35,
    isNew: false,
    shortDescription: "Сколько держать мясо в духовке по массе и норме на килограмм.",
    seoTitle: "Калькулятор времени запекания — минуты по массе и норме",
    seoDescription: "Рассчитайте время запекания мяса или птицы: постоянная часть, норма минут на килограмм и отдых после духовки.",
    h1: "Калькулятор времени запекания",
    keywords: ["время запекания", "сколько запекать индейку", "минут на килограмм мяса", "калькулятор духовки"],
    fields: [
      { name: 'weight', label: 'Масса, кг', type: 'number', defaultValue: 5, min: 0, step: 0.1 },
      { name: 'minutes_per_kg', label: 'Минут на килограмм', type: 'number', defaultValue: 40, min: 0, step: 1 },
      { name: 'base_minutes', label: 'Постоянная часть, мин', type: 'number', defaultValue: 20, min: 0, step: 1 },
      { name: 'rest_pct', label: 'Отдых после духовки, %', type: 'number', defaultValue: 20, min: 0, max: 50, step: 1 },
    ],
    resultLabels: {
      "time": "Время в духовке",
      "cook": "Минут готовки",
      "rest": "Отдых после духовки",
      "total": "Всего с отдыхом",
      "perKg": "Норма на килограмм",
    },
    relatedCalculatorIds: ["cooked-weight", "recipe-scale", "calories-per-serving"],
  },
};
