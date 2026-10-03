import { waveContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { waveCopyEn } from './copy.en';
import { waveCopyUk } from './copy.uk';
import { waveCopyDe } from './copy.de';
import { waveCopyEs } from './copy.es';
import { waveReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'wave',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: waveCopyEn, uk: waveCopyUk, de: waveCopyDe, es: waveCopyEs },
  referenceCases: waveReferenceCases,
  publishedExample: {
    inputs: { mode: 'lambda', v: 343, f: 440, wavelength: 0 },
    expected: ['0,7795 м'],
  },
  presentation: {
    id: 'wave',
    name: 'Калькулятор длины волны и частоты',
    slug: 'wave-frequency',
    fullPath: '/physics/wave-frequency/',
    category: 'physics',
    icon: 'activity',
    popularity: 22,
    isNew: false,
    shortDescription: 'Связь скорости, частоты и длины волны в любом направлении.',

    seoTitle: 'Калькулятор длины волны, частоты и скорости',
    seoDescription:
      'Рассчитайте длину волны, частоту или скорость волны по двум известным величинам вместе с периодом колебания.',
    h1: 'Калькулятор длины волны и частоты',
    keywords: ['длина волны', 'частота', 'скорость волны', 'период колебания'],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'lambda',
        options: [
          { value: 'lambda', label: 'длину волны' },
          { value: 'f', label: 'частоту' },
          { value: 'v', label: 'скорость волны' },
        ],
      },
      { name: 'v', label: 'Скорость волны', unit: 'м/с', type: 'number', defaultValue: 343, min: 0, step: 1, showIf: { field: 'mode', oneOf: ["lambda", "f"] } },
      { name: 'f', label: 'Частота', unit: 'Гц', type: 'number', defaultValue: 440, min: 0, step: 10, showIf: { field: 'mode', oneOf: ["lambda", "v"] } },
      { name: 'wavelength', label: 'Длина волны', unit: 'м', type: 'number', defaultValue: 0.75, min: 0, step: 0.05, showIf: { field: 'mode', oneOf: ["f", "v"] } },
    ],
    resultLabels: {
      wavelength: 'Длина волны',
      frequency: 'Частота',
      speed: 'Скорость',
      period: 'Период',
    },




    ...waveContractContent.ru,
    relatedCalculatorIds: ['convert-frequency', 'speed-distance-time', 'acceleration'],
  },
};
