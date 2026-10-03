import { automotiveWave10ContractContent } from './contractContent';
import { validate } from './validate';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { carDepreciationCopyEn } from './copy.en';
import { carDepreciationCopyUk } from './copy.uk';
import { carDepreciationCopyDe } from './copy.de';
import { carDepreciationCopyEs } from './copy.es';
import { carDepreciationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'car-depreciation',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: carDepreciationCopyEn, uk: carDepreciationCopyUk, de: carDepreciationCopyDe, es: carDepreciationCopyEs },
  referenceCases: carDepreciationReferenceCases,
  publishedExample: {
    inputs: { price: 2400000, years: 4, ratePct: 12, firstYearPct: 20 },
    expected: ['1 308 426,24 ₽'],
  },
  presentation: {
    id: 'car-depreciation',
    name: 'Калькулятор амортизации автомобиля',
    slug: 'car-depreciation',
    fullPath: '/automotive/car-depreciation/',
    category: 'automotive',
    icon: 'car',
    popularity: 22,
    isNew: false,
    shortDescription: 'Остаточная стоимость автомобиля через несколько лет владения.',
    seoTitle: 'Калькулятор амортизации автомобиля: остаточная стоимость',
    seoDescription:
      'Рассчитайте остаточную стоимость автомобиля по цене покупки, сроку владения, годовой ставке потери и отдельной потере за первый год.',
    h1: 'Калькулятор амортизации автомобиля',
    keywords: ['амортизация автомобиля', 'остаточная стоимость', 'потеря стоимости авто', 'износ автомобиля'],
    fields: [
      { name: 'price', label: 'Цена покупки, ₽', type: 'number', unit: "₽", defaultValue: 2400000, min: 0, step: 50000 },
      { name: 'years', label: 'Лет владения', type: 'number', unit: "лет", defaultValue: 4, min: 0, max: 30, step: 1 },
      { name: 'ratePct', label: 'Годовая потеря после первого года, %', type: 'number', unit: "%", defaultValue: 12, min: 0, step: 1 },
      { name: 'firstYearPct', label: 'Потеря за первый год, %', type: 'number', unit: "%", defaultValue: 20, min: 0, step: 1 },
    ],
    resultLabels: {
      value: 'Стоимость через срок',
      lost: 'Потеряно в деньгах',
      lostPct: 'Потеряно, доля',
      price: 'Цена покупки',
    },
    relatedCalculatorIds: ['fuel-consumption', 'trip-cost', 'tire-size'],
    ...automotiveWave10ContractContent.ru,
  },
};
