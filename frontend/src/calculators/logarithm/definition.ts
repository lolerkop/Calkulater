// Логарифм. Три режима: два с фиксированным основанием и один с произвольным.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { logarithmCopyEn } from './copy.en';
import { logarithmCopyUk } from './copy.uk';
import { logarithmCopyDe } from './copy.de';
import { logarithmReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'logarithm',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: logarithmCopyEn, uk: logarithmCopyUk, de: logarithmCopyDe },
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
    longDescription:
      'Находит показатель степени, в которую нужно возвести основание, чтобы получить число. Все три режима считаются одной формулой — натуральный логарифм числа, делённый на натуральный логарифм основания, — а результат сопровождается проверкой возведением в степень.',
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
    howToUse: ['Выберите тип логарифма.', 'Введите число больше нуля.', 'Для произвольного основания введите его.'],
    howItWorks:
      'log_b(x) = ln x ÷ ln b; десятичный и натуральный режимы лишь фиксируют основание.',
    example: 'Логарифм 1024 по основанию 2 равен 10, потому что два в десятой степени даёт 1024.',
    faq: [
      { q: 'Почему число должно быть положительным?', a: 'Никакая степень положительного основания не даёт нуля или отрицательного числа, поэтому логарифм там не определён.' },
      { q: 'Почему основание не может быть единицей?', a: 'Единица в любой степени остаётся единицей, и у уравнения нет единственного ответа.' },
      { q: 'Что такое e?', a: 'Основание натуральных логарифмов, примерно 2,71828. Оно появляется везде, где рост непрерывен.' },
      { q: 'Зачем строка проверки?', a: 'Она возводит основание в найденную степень. Совпадение с исходным числом подтверждает ответ сразу.' },
    ],
    relatedCalculatorIds: ['quadratic-equation', 'proportion', 'modulo'],
  },
};
