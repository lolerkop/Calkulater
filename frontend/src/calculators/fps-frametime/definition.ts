import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
// FPS и время кадра. Две обратные величины, один переключатель направления.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { fpsFrametimeCopyEn } from './copy.en';
import { fpsFrametimeCopyUk } from './copy.uk';
import { fpsFrametimeCopyDe } from './copy.de';
import { fpsFrametimeCopyEs } from './copy.es';
import { fpsFrametimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'fps-frametime',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: fpsFrametimeCopyEn, uk: fpsFrametimeCopyUk, de: fpsFrametimeCopyDe, es: fpsFrametimeCopyEs },
  referenceCases: fpsFrametimeReferenceCases,
  publishedExample: { inputs: { mode: 'fps', fps: 60 }, expected: ['16,667 мс'] },
  presentation: {
    ...contractContent.ru,
    id: 'fps-frametime',
    name: 'Калькулятор FPS и времени кадра',
    slug: 'fps-frametime',
    fullPath: '/computers/fps-frametime/',
    category: 'computers',
    icon: 'monitor',
    popularity: 36,
    isNew: false,
    seoTitle: 'Калькулятор FPS и времени кадра — миллисекунды на кадр',
    h1: 'Калькулятор FPS и времени кадра',
    keywords: ['fps в миллисекунды', 'калькулятор времени кадра', 'frame time'],
    fields: [
  {
    "name": "mode",
    "label": "Направление",
    "type": "select",
    "defaultValue": "fps",
    "options": [
      {
        "value": "fps",
        "label": "частота → время кадра"
      },
      {
        "value": "ms",
        "label": "время кадра → частота"
      }
    ]
  },
  {
    "name": "fps",
    "label": "Частота кадров",
    "type": "number",
    "defaultValue": 60,
    "unit": "FPS",
    "showIf": {
      "field": "mode",
      "equals": "fps"
    },
    "min": 0,
    "step": 1
  },
  {
    "name": "frameTime",
    "label": "Время кадра",
    "type": "number",
    "defaultValue": 16.667,
    "unit": "мс",
    "showIf": {
      "field": "mode",
      "equals": "ms"
    },
    "min": 0,
    "step": 0.001
  }
],
    resultLabels: { result: 'Результат', fps: 'Частота кадров', frameTime: 'Время кадра', perMinute: 'Кадров за минуту' },
    relatedCalculatorIds: ['aspect-ratio', 'download-time', 'convert-frequency'],
  },
};
