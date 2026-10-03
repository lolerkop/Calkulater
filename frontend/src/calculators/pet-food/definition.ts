import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { petFoodCopyEn } from './copy.en';
import { petFoodCopyUk } from './copy.uk';
import { petFoodCopyDe } from './copy.de';
import { petFoodCopyEs } from './copy.es';
import { petFoodReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'pet-food',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: petFoodCopyEn, uk: petFoodCopyUk, de: petFoodCopyDe, es: petFoodCopyEs },
  referenceCases: petFoodReferenceCases,
  publishedExample: {
    inputs: { weight: 22, factor: 1.6, kcalPer100: 350 },
    expected: ['325,06 г'],
  },
  presentation: {
    ...contractContent.ru,
    id: 'pet-food',
    name: 'Калькулятор корма для питомца',
    slug: 'pet-food',
    fullPath: '/household/pet-food/',
    category: 'household',
    icon: 'heart',
    popularity: 21,
    isNew: false,
    shortDescription: 'Суточная норма корма по массе, множителю потребности и калорийности.',
    seoTitle: 'Калькулятор корма для питомца: суточная норма',
    seoDescription:
      'Рассчитайте суточную норму корма для кошки или собаки по массе тела, множителю энергопотребности и калорийности корма на 100 граммов.',
    h1: 'Калькулятор корма для питомца',
    keywords: ['норма корма', 'сколько корма собаке', 'энергопотребность питомца', 'RER'],
    fields: [
      { name: 'weight', label: 'Масса тела, кг', type: 'number', defaultValue: 22, min: 0, step: 0.5 },
      { name: 'factor', label: 'Множитель энергопотребности', type: 'number', defaultValue: 1.6, min: 0, step: 0.1 },
      { name: 'kcalPer100', label: 'Калорийность корма, ккал на 100 г', type: 'number', defaultValue: 350, min: 0, step: 10 },
    ],
    resultLabels: {
      grams: 'Норма корма в сутки',
      energy: 'Потребность в энергии',
      rer: 'Обмен покоя (RER)',
      weight: 'Масса питомца',
    },
    relatedCalculatorIds: ['pet-age', 'calorie-calculator', 'activity-calories'],
  },
};
