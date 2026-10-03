// Логарифм. Три режима: два с фиксированным основанием и один с произвольным.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { logarithmCopyEn } from './copy.en';
import { logarithmCopyUk } from './copy.uk';
import { logarithmCopyDe } from './copy.de';
import { logarithmCopyEs } from './copy.es';
import { logarithmReferenceCases } from './referenceCases';

import { contractContent } from './contractContent';

export const definition: CalculatorDefinitionV2 = {
  id: 'logarithm',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: logarithmCopyEn, uk: logarithmCopyUk, de: logarithmCopyDe, es: logarithmCopyEs },
  referenceCases: logarithmReferenceCases,
  publishedExample: { inputs: { mode: 'custom', value: 1024, base: 2 }, expected: ['10'] },
  presentation: {
    id: 'logarithm',
    name: 'Калькулятор логарифма',
    slug: 'logarithm',
    fullPath: '/math/logarithm/',
    category: 'math',
    icon: 'calculator',
    popularity: 43,
    isNew: false,
    shortDescription: 'Десятичный, натуральный и логарифм по любому основанию.',
    seoTitle: 'Калькулятор логарифма — по основанию 10, натуральный и любой',
    seoDescription:
      'Вычислите логарифм по основанию 10, по основанию e или по любому другому, с проверкой области определения.',
    h1: 'Калькулятор логарифма',
    keywords: ['калькулятор логарифма', 'логарифм по основанию 2', 'натуральный логарифм'],
    fields: [
      {
        name: 'mode', label: 'Тип логарифма', type: 'select', defaultValue: 'log10',
        options: [
          { value: 'log10', label: 'Десятичный, основание 10' },
          { value: 'ln', label: 'Натуральный, основание e' },
          { value: 'custom', label: 'Произвольное основание' },
        ],
      },
      { name: 'value', label: 'Число', type: 'number', defaultValue: 1000, min: 0 },
      { name: 'base', label: 'Основание', type: 'number', defaultValue: 2, min: 0, showIf: { field: 'mode', equals: 'custom' } },
    ],
    resultLabels: { result: 'Логарифм', check: 'Проверка возведением' },
    relatedCalculatorIds: ['quadratic-equation', 'proportion', 'modulo'],
    ...contractContent.ru,
  },
};
