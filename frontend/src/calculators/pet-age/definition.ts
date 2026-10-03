import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { petAgeCopyEn } from './copy.en';
import { petAgeCopyUk } from './copy.uk';
import { petAgeCopyDe } from './copy.de';
import { petAgeCopyEs } from './copy.es';
import { petAgeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'pet-age',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: petAgeCopyEn, uk: petAgeCopyUk, de: petAgeCopyDe, es: petAgeCopyEs },
  referenceCases: petAgeReferenceCases,
  publishedExample: {
    inputs: { species: 'cat', years: 7 },
    expected: ['44'],
  },
  presentation: {
    ...contractContent.ru,
    id: 'pet-age',
    name: 'Калькулятор возраста питомца',
    slug: 'pet-age',
    fullPath: '/household/pet-age/',
    category: 'household',
    icon: 'heart',
    popularity: 21,
    isNew: false,
    shortDescription: 'Возраст кошки или собаки в человеческих годах по ветеринарной таблице.',
    seoTitle: 'Калькулятор возраста питомца в человеческих годах',
    seoDescription:
      'Переведите возраст кошки или собаки в человеческие годы по нелинейной ветеринарной таблице с отдельной надбавкой для крупных пород.',
    h1: 'Калькулятор возраста питомца',
    keywords: ['возраст кошки', 'возраст собаки', 'человеческие годы', 'ветеринарная таблица'],
    fields: [
      {
        name: 'species', label: 'Вид и размер', type: 'select', defaultValue: 'cat',
        options: [
          { value: 'cat', label: 'кошка' },
          { value: 'dog-small', label: 'мелкая собака, до 10 кг' },
          { value: 'dog-large', label: 'крупная собака, свыше 25 кг' },
        ],
      },
      { name: 'years', label: 'Возраст в годах', type: 'number', defaultValue: 7, min: 0, step: 0.1 },
    ],
    resultLabels: {
      human: 'Возраст в человеческих годах',
      years: 'Возраст питомца, лет',
      perYear: 'Прибавка за каждый следующий год',
    },
    relatedCalculatorIds: ['age-calculator', 'pet-food', 'time-duration'],
  },
};
