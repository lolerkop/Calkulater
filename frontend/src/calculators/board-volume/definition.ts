import { buildingWave13ContractContent } from './contractContent';
import { validate } from './validate';
// Кубатура досок: объём пиломатериала и число досок в кубометре.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { boardVolumeCopyEn } from './copy.en';
import { boardVolumeCopyUk } from './copy.uk';
import { boardVolumeCopyDe } from './copy.de';
import { boardVolumeCopyEs } from './copy.es';
import { boardVolumeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'board-volume',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: boardVolumeCopyEn, uk: boardVolumeCopyUk, de: boardVolumeCopyDe, es: boardVolumeCopyEs },
  referenceCases: boardVolumeReferenceCases,
  publishedExample: { inputs: { length: 6, width: 150, thickness: 25, count: 50, pricePerM3: 0 }, expected: ['1,125 м³'] },
  presentation: {
    id: 'board-volume',
    name: 'Калькулятор кубатуры досок',
    slug: 'board-volume',
    fullPath: '/building/board-volume/',
    category: 'building',
    icon: 'wall',
    popularity: 48,
    isNew: false,
    shortDescription: 'Объём пиломатериала, объём одной доски и сколько досок в кубометре.',
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: 'Калькулятор кубатуры досок — объём пиломатериала',
    seoDescription: 'Рассчитайте объём досок в кубометрах по длине и сечению, объём одной доски и число досок в кубометре.',
    h1: 'Калькулятор кубатуры досок',
    keywords: ['кубатура досок', 'объём доски', 'сколько досок в кубе', 'калькулятор пиломатериала'],
    fields: [
      { name: 'length', label: "Длина доски", type: 'number', unit: "м", defaultValue: 6, min: 0, step: 0.1 },
      { name: 'width', label: "Ширина доски", type: 'number', unit: "мм", defaultValue: 150, min: 0, step: 1 },
      { name: 'thickness', label: "Толщина доски", type: 'number', unit: "мм", defaultValue: 25, min: 0, step: 1 },
      { name: 'count', label: 'Количество досок', type: 'number', defaultValue: 50, min: 1, step: 1 },
      { name: 'pricePerM3', label: "Цена за кубометр", type: 'number', unit: "₽/м³", defaultValue: 0, min: 0, step: 100, optional: true },
    ],
    resultLabels: { total: 'Общий объём', single: 'Объём одной доски', perCubic: 'Досок в кубометре', cost: 'Стоимость' },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks:
      buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ['room-volume', 'brick-calculator', 'screed-calculator'],
  },
};

