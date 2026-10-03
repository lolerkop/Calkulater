import { mathWave8ContractContent } from './contractContent';
import { validate } from './validate';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { roundingCopyEn } from './copy.en';
import { roundingCopyUk } from './copy.uk';
import { roundingCopyDe } from './copy.de';
import { roundingCopyEs } from './copy.es';
import { roundingReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'rounding',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: roundingCopyEn, uk: roundingCopyUk, de: roundingCopyDe, es: roundingCopyEs },
  referenceCases: roundingReferenceCases,
  publishedExample: {
    inputs: { value: 2748.536, digits: 2, mode: 'half' },
    expected: ['2 748,54'],
  },
  presentation: {
    id: 'rounding',
    name: 'Калькулятор округления',
    slug: 'rounding',
    fullPath: '/math/rounding/',
    category: 'math',
    icon: 'sigma',
    popularity: 22,
    isNew: false,
    shortDescription: 'Округление до заданного числа знаков к ближайшему, вниз или вверх.',
    seoTitle: 'Калькулятор округления чисел до знаков',
    seoDescription:
      'Округлите число до заданного количества десятичных знаков тремя способами — к ближайшему, вниз и вверх — с показом отброшенной разницы.',
    h1: 'Калькулятор округления',
    keywords: ['калькулятор округления', 'округлить до знаков', 'округление вниз', 'округление вверх'],
    fields: [
      { name: 'value', label: 'Число для округления', type: 'number', defaultValue: 2748.536, signed: true, step: 0.001 },
      { name: 'digits', label: 'Десятичных знаков', type: 'number', defaultValue: 2, min: 0, max: 10, step: 1 },
      {
        name: 'mode', label: 'Направление округления', type: 'select', defaultValue: 'half',
        options: [
          { value: 'half', label: 'к ближайшему' },
          { value: 'down', label: 'вниз (пол)' },
          { value: 'up', label: 'вверх (потолок)' },
        ],
      },
    ],
    resultLabels: {
      rounded: 'Округлённое значение',
      original: 'Исходное значение',
      diff: 'Разница',
      digits: 'Знаков',
    },
    relatedCalculatorIds: ['percent-calculator', 'difference-abs-rel', 'proportion'],
    ...mathWave8ContractContent.ru,
  },
};
