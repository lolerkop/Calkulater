// Единицы плотности. База — килограмм на кубометр. Составные единицы выражены
// через точные определения фунта, фута, дюйма и американского галлона, а не
// десятичными приближениями.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { densityNames, densityUnits } from './units';
import { densityCopyEn } from './copy.en';
import { densityCopyUk } from './copy.uk';
import { densityCopyDe } from './copy.de';
import { densityReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-density',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: densityCopyEn, uk: densityCopyUk, de: densityCopyDe },
  referenceCases: densityReferenceCases,
  publishedExample: { inputs: { value: 1, from: 'gcm3', to: 'kgm3' }, expected: ['1 000,00 кг/м³'] },
  presentation: {
    id: 'convert-density',
    name: 'Конвертер плотности',
    slug: 'convert-density',
    fullPath: '/converters/convert-density/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 47,
    isNew: false,
    shortDescription: 'Перевод плотности между кг/м³, г/см³ и фунтами на кубический фут.',
    longDescription:
      'Переводит плотность между килограммами на кубометр, граммами на кубический сантиметр, килограммами на литр, тоннами на кубометр, граммами на литр, фунтами на кубический фут и галлон и унциями на кубический дюйм. Плотность воды — примерно 1 г/см³, то есть 1000 кг/м³.',
    seoTitle: 'Конвертер плотности — кг/м³, г/см³, lb/ft³',
    seoDescription:
      'Перевод плотности между килограммами на кубометр, граммами на кубический сантиметр, килограммами на литр и фунтами на кубический фут.',
    h1: 'Конвертер плотности',
    keywords: ['конвертер плотности', 'кг/м3 в г/см3', 'плотность воды'],
    fields: [
      { name: 'value', label: 'Плотность', type: 'number', defaultValue: 1, min: 0 },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'gcm3', options: unitOptions(densityUnits, densityNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'kgm3', options: unitOptions(densityUnits, densityNames) },
    ],
    resultLabels: { result: 'Результат' },
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: 'Все единицы приводятся к килограмму на кубометр через точные множители.',
    example: 'Плотность воды — около 1 г/см³, то есть 1000 кг/м³ или примерно 62,43 фунта на кубический фут.',
    faq: [
      { q: 'Почему 1 г/см³ равен 1000 кг/м³?', a: 'В килограмме тысяча граммов, а в кубометре миллион кубических сантиметров: миллион делить на тысячу даёт тысячу.' },
      { q: 'Чему равна плотность воды?', a: 'Около 1 г/см³ при 4 °C. Точное значение зависит от температуры, поэтому конвертер переводит единицы, а не считает свойства вещества.' },
      { q: 'Можно ли перевести плотность в массу?', a: 'Нет: для этого нужен объём. Плотность — отношение массы к объёму, и конвертер работает только с самой этой величиной.' },
      { q: 'Какой галлон используется?', a: 'Американский: 3,785411784 литра. Британский галлон больше и здесь не применяется.' },
    ],
    relatedCalculatorIds: ['convert-mass', 'convert-volume', 'convert-flow'],
  },
};
