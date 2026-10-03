import { contextualField } from './contextualField';
import { contract } from './contractContent';
// Потребление инвертора по выходной мощности и КПД.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { inverterPowerCopyEn } from './copy.en';
import { inverterPowerCopyUk } from './copy.uk';
import { inverterPowerCopyDe } from './copy.de';
import { inverterPowerCopyEs } from './copy.es';
import { inverterPowerReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "inverter-power",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: inverterPowerCopyEn, uk: inverterPowerCopyUk, de: inverterPowerCopyDe, es: inverterPowerCopyEs },
  referenceCases: inverterPowerReferenceCases,
  publishedExample: { inputs: { outputPower: 1000, efficiency: 85, batteryVoltage: 12 }, expected: ["1 176,5 Вт"] },
  presentation: {
    id: "inverter-power",
    name: "Калькулятор мощности инвертора",
    slug: "inverter-power",
    fullPath: "/electronics/inverter-power/",
    category: "electronics",
    icon: "zap",
    popularity: 33,
    isNew: false,
    shortDescription: "Сколько инвертор тянет от батареи при заданном КПД.",
    
    seoTitle: "Калькулятор мощности инвертора — потребление и ток батареи",
    seoDescription:
      "Рассчитайте потребляемую мощность, ток от батареи и потери инвертора по выходной мощности, КПД и напряжению.",
    h1: "Калькулятор мощности инвертора",
    keywords: ["мощность инвертора", "ток инвертора", "кпд инвертора"],
    fields: [
      { name: 'outputPower', label: "Активная выходная мощность", type: 'number', defaultValue: 1000, min: 0, step: 50 , unit: "Вт" },
      { name: 'efficiency', label: "КПД при заданной нагрузке", type: 'number', defaultValue: 85, min: 0, max: 100, step: 1 , unit: "%" },
      { name: 'batteryVoltage', label: "Напряжение на клеммах батареи", type: 'number', defaultValue: 12, min: 0, step: 1 , unit: "В" },
    ],
    resultLabels: { result: "Потребляемая мощность", current: "Ток от батареи", loss: "Потери", output: "Полезная мощность" },
    
    
    
    
    relatedCalculatorIds: ["ohms-law", "battery-runtime", "convert-power"],
      
      ...contract.ru,
  },
};
