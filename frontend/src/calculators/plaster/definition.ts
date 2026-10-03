import { buildingWave13ContractContent } from './contractContent';
// Штукатурка: сухая смесь по площади стены и толщине слоя.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { plasterCopyEn } from './copy.en';
import { plasterCopyUk } from './copy.uk';
import { plasterCopyDe } from './copy.de';
import { plasterCopyEs } from './copy.es';
import { plasterReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'plaster',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: plasterCopyEn, uk: plasterCopyUk, de: plasterCopyDe, es: plasterCopyEs },
  referenceCases: plasterReferenceCases,
  publishedExample: { inputs: { mode: 'area', area: 20, thickness: 10, consumption: 8.5, bagWeight: 30 }, expected: ['1 700,00 кг'] },
  presentation: {
    id: 'plaster',
    name: 'Калькулятор штукатурки',
    slug: 'plaster',
    fullPath: '/building/plaster/',
    category: 'building',
    icon: 'wall',
    popularity: 51,
    isNew: false,
    shortDescription: 'Сколько сухой смеси нужно на стену при заданной толщине слоя.',
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: 'Калькулятор штукатурки — расход смеси на стену',
    seoDescription: 'Рассчитайте массу штукатурной смеси и число мешков по площади стены, толщине слоя и расходу.',
    h1: 'Калькулятор штукатурки',
    keywords: ['калькулятор штукатурки', 'расход штукатурки', 'штукатурка на м2', 'сколько мешков штукатурки'],
    fields: [
      {
        name: 'mode', label: 'Как задать площадь', type: 'select', defaultValue: 'area',
        options: [
          { value: 'area', label: 'площадью' },
          { value: 'dimensions', label: 'длиной и высотой' },
        ],
      },
      { name: 'area', label: "Площадь стены", type: 'number', unit: "м²", defaultValue: 20, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'area' } },
      { name: 'length', label: "Длина стены", type: 'number', unit: "м", defaultValue: 5, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'dimensions' } },
      { name: 'height', label: "Высота стены", type: 'number', unit: "м", defaultValue: 2.7, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'dimensions' } },
      { name: 'thickness', label: "Толщина слоя", type: 'number', unit: "мм", defaultValue: 10, min: 0, max: 100, step: 1 },
      { name: 'consumption', label: "Расход смеси", type: 'number', unit: "кг/м²/мм", defaultValue: 8.5, min: 0, step: 0.1 },
      { name: 'bagWeight', label: "Вес мешка", type: 'number', unit: "кг", defaultValue: 30, min: 0, step: 1 },
    ],
    resultLabels: { mass: 'Масса сухой смеси', bags: 'Мешков', perSquare: 'Расход на м²', area: 'Площадь' },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks:
      buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ['screed-calculator', 'paint-calculator', 'wallpaper-calculator'],
  },
};

