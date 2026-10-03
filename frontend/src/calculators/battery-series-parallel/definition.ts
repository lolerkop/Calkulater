import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { validate } from './validate';
import { batterySeriesParallelCopyEn } from './copy.en';
import { batterySeriesParallelCopyUk } from './copy.uk';
import { batterySeriesParallelCopyDe } from './copy.de';
import { batterySeriesParallelCopyEs } from './copy.es';
import { batterySeriesParallelReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'battery-series-parallel',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: batterySeriesParallelCopyEn, uk: batterySeriesParallelCopyUk, de: batterySeriesParallelCopyDe, es: batterySeriesParallelCopyEs },
  referenceCases: batterySeriesParallelReferenceCases,
  publishedExample: {
    inputs: { cells: 12, cellVoltage: 3.7, cellCapacity: 3.4, series: 4, parallel: 3 },
    expected: ['14,8 В'],
  },
  presentation: {
    seoDescription: "Рассчитайте напряжение, ёмкость и энергию аккумуляторной сборки по параметрам ячейки и схеме последовательно-параллельного соединения.",
    id: 'battery-series-parallel',
    name: 'Калькулятор соединения аккумуляторов',
    slug: 'battery-series-parallel',
    fullPath: '/electronics/battery-series-parallel/',
    category: 'electronics',
    icon: 'battery',
    popularity: 22,
    isNew: false,
    shortDescription: 'Напряжение, ёмкость и энергия сборки по схеме соединения.',
    
    seoTitle: 'Калькулятор последовательного и параллельного соединения аккумуляторов',
    
    h1: 'Калькулятор соединения аккумуляторов',
    keywords: ['соединение аккумуляторов', 'последовательно и параллельно', 'напряжение сборки', 'ёмкость батареи'],
    fields: [
  {
    "name": "cells",
    "label": "Всего ячеек",
    "type": "number",
    "defaultValue": 12,
    "min": 1,
    "max": 500,
    "step": 1,
    "unit": "1"
  },
  {
    "name": "cellVoltage",
    "label": "Напряжение ячейки",
    "type": "number",
    "defaultValue": 3.7,
    "min": 0,
    "step": 0.1,
    "unit": "В"
  },
  {
    "name": "cellCapacity",
    "label": "Ёмкость ячейки",
    "type": "number",
    "defaultValue": 3.4,
    "min": 0,
    "step": 0.1,
    "unit": "А·ч"
  },
  {
    "name": "series",
    "label": "Ячеек последовательно",
    "type": "number",
    "defaultValue": 4,
    "min": 1,
    "max": 500,
    "step": 1,
    "unit": "1"
  },
  {
    "name": "parallel",
    "label": "Групп параллельно",
    "type": "number",
    "defaultValue": 3,
    "min": 1,
    "max": 500,
    "step": 1,
    "unit": "1"
  }
],
    resultLabels: {
      voltage: 'Напряжение сборки',
      capacity: 'Ёмкость сборки',
      energy: 'Энергия',
      cells: 'Ячеек',
    },

    relatedCalculatorIds: ['battery-runtime', 'battery-charge-time', 'resistor-network'],
    ...contractContent.ru,
  },
};
