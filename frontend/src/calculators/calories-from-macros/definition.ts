// Калории из БЖУ — вывод нескольких величин с долями. Формула тривиальна,
// поэтому калькулятор проверяет именно представление набора результатов.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { SPORT_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { caloriesCopyEn } from './copy.en';
import { caloriesCopyUk } from './copy.uk';
import { caloriesReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'calories-from-macros',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: caloriesCopyEn, uk: caloriesCopyUk },
  referenceCases: caloriesReferenceCases,
  publishedExample: { inputs: { protein: 100, fat: 50, carbs: 200 }, expected: ['1 650 ккал', '24,24 %'] },
  presentation: {
    id: 'calories-from-macros',
    name: 'Калькулятор калорий из БЖУ',
    slug: 'calories-from-macros',
    fullPath: '/sport/calories-from-macros/',
    category: 'sport',
    icon: 'flame',
    popularity: 51,
    isNew: true,
    shortDescription: 'Калории из белков, жиров и углеводов.',
    longDescription:
      'Переводит граммы белков, жиров и углеводов в калории по коэффициентам Этуотера и показывает, какую долю от итога даёт каждый макронутриент. Соотношение долей обычно важнее самой калорийности: два рациона с одинаковым итогом могут сильно различаться по составу, и план питания нацелен как раз на пропорцию.',
    seoTitle: 'Калькулятор калорий из БЖУ — белки, жиры, углеводы',
    seoDescription:
      'Переведите граммы белков, жиров и углеводов в калории и посмотрите долю каждого макронутриента.',
    h1: 'Калькулятор калорий из БЖУ',
    keywords: ['калории из бжу', 'калорийность макронутриентов', 'коэффициенты этуотера'],
    fields: [
      { name: 'protein', label: 'Белки', type: 'number', unit: 'г', defaultValue: 100, min: 0 },
      { name: 'fat', label: 'Жиры', type: 'number', unit: 'г', defaultValue: 50, min: 0 },
      { name: 'carbs', label: 'Углеводы', type: 'number', unit: 'г', defaultValue: 200, min: 0 },
    ],
    resultLabels: { total: 'Всего калорий', protein: 'Из белков', fat: 'Из жиров', carbs: 'Из углеводов' },
    howToUse: ['Введите граммы белков.', 'Введите граммы жиров.', 'Введите граммы углеводов.'],
    howItWorks: 'Калории = 4 × белки + 9 × жиры + 4 × углеводы.',
    example: '100 г белков, 50 г жиров и 200 г углеводов дают 1 650 ккал.',
    faq: [
      { q: 'Почему у жиров коэффициент 9, а не 4?', a: 'Жиры энергетически плотнее белков и углеводов. Коэффициенты Этуотера отражают энергию, которую организм действительно извлекает.' },
      { q: 'Учитываются ли клетчатка и алкоголь?', a: 'Нет, калькулятор считает только три основных макронутриента: у клетчатки и алкоголя другие коэффициенты.' },
      { q: 'Насколько точны коэффициенты?', a: 'Это общепринятые средние значения. Реальное усвоение зависит от продукта и человека, поэтому результат — рабочая оценка.' },
      { q: 'Зачем нужны доли?', a: 'Два рациона с одинаковой калорийностью могут сильно различаться по составу, и план обычно нацелен именно на соотношение.' },
    ],
    relatedCalculatorIds: ['calorie-calculator', 'bmi-calculator', 'body-fat-calculator'],
    disclaimer: SPORT_DISCLAIMER,
  },
};
