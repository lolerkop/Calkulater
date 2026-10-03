import { idealGasLawContractContent } from './contractContent';
// Уравнение состояния идеального газа: PV = nRT.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { idealGasLawCopyEn } from './copy.en';
import { idealGasLawCopyUk } from './copy.uk';
import { idealGasLawCopyDe } from './copy.de';
import { idealGasLawCopyEs } from './copy.es';
import { idealGasLawReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'ideal-gas-law',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: idealGasLawCopyEn, uk: idealGasLawCopyUk, de: idealGasLawCopyDe, es: idealGasLawCopyEs },
  referenceCases: idealGasLawReferenceCases,
  publishedExample: {
    inputs: { solve: 'p', n: 2, tempUnit: 'k', t: 300, volumeUnit: 'm3', v: 0.05, pressureUnit: 'pa' },
    expected: ['99 773,55 Па'],
  },
  presentation: {
    id: 'ideal-gas-law',
    name: 'Калькулятор уравнения состояния идеального газа',
    slug: 'ideal-gas-law',
    fullPath: '/chemistry/ideal-gas-law/',
    category: 'chemistry',
    icon: 'flask',
    popularity: 40,
    isNew: false,
    shortDescription: 'PV = nRT: давление или объём газа по остальным величинам.',
    longDescription:
      idealGasLawContractContent.ru.longDescription,
    seoTitle: 'Калькулятор уравнения состояния идеального газа — PV = nRT',
    seoDescription: 'Рассчитайте давление или объём идеального газа по уравнению PV = nRT с выбором единиц давления, объёма и температуры.',
    h1: 'Калькулятор уравнения состояния идеального газа',
    keywords: ['уравнение состояния идеального газа', 'pv nrt', 'уравнение менделеева клапейрона', 'газовая постоянная'],
    fields: [
      {
        name: 'solve', label: 'Что нужно найти', type: 'select', defaultValue: 'p',
        options: [
          { value: 'p', label: 'давление' },
          { value: 'v', label: 'объём' },
        ],
      },
      { name: 'n', label: 'Количество вещества', type: 'number', unit: 'mol', defaultValue: 2, min: 0, step: 0.1 },
      {
        name: 'tempUnit', label: 'Единица температуры', type: 'select', defaultValue: 'k',
        options: [
          { value: 'k', label: 'кельвины' },
          { value: 'c', label: 'градусы Цельсия' },
        ],
      },
      { name: 't', label: 'Температура', type: 'number', unit: 'K/°C', defaultValue: 300, step: 0.1, signed: true },
      {
        name: 'volumeUnit', label: 'Единица объёма', type: 'select', defaultValue: 'm3',
        options: [
          { value: 'm3', label: 'кубометры' },
          { value: 'l', label: 'литры' },
        ],
      },
      { name: 'v', label: 'Объём', type: 'number', unit: 'm³/L', defaultValue: 0.05, min: 0, step: 0.01, showIf: { field: 'solve', equals: 'p' } },
      {
        name: 'pressureUnit', label: 'Единица давления', type: 'select', defaultValue: 'pa',
        options: [
          { value: 'pa', label: 'паскали' },
          { value: 'kpa', label: 'килопаскали' },
          { value: 'atm', label: 'атмосферы' },
        ],
      },
      { name: 'p', label: 'Давление', type: 'number', unit: 'Pa/kPa/atm', defaultValue: 101325, min: 0, step: 100, showIf: { field: 'solve', equals: 'v' } },
    ],
    resultLabels: {
      pressure: 'Давление',
      volume: 'Объём',
      constant: 'Газовая постоянная',
      temperature: 'Температура',
    },
    howToUse: idealGasLawContractContent.ru.howToUse,
    howItWorks:
      idealGasLawContractContent.ru.howItWorks,
    example: idealGasLawContractContent.ru.example,
    faq: idealGasLawContractContent.ru.faq,
    disclaimer: idealGasLawContractContent.ru.disclaimer,
    relatedCalculatorIds: ['moles', 'molarity', 'solution-concentration'],
  },
};
