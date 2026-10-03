import { contextualField } from './contextualField';
import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { headphonePowerCopyEn } from './copy.en';
import { headphonePowerCopyUk } from './copy.uk';
import { headphonePowerCopyDe } from './copy.de';
import { headphonePowerCopyEs } from './copy.es';
import { headphonePowerReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "headphone-power",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: headphonePowerCopyEn, uk: headphonePowerCopyUk, de: headphonePowerCopyDe, es: headphonePowerCopyEs },
  referenceCases: headphonePowerReferenceCases,
  publishedExample: { inputs: { sensitivity: 100, impedance: 32, power: 10 }, expected: ["110 дБ"] },
  presentation: {
    id: "headphone-power",
    name: "Калькулятор мощности для наушников",
    slug: "moshchnost-dlya-naushnikov",
    fullPath: "/electronics/moshchnost-dlya-naushnikov/",
    category: "electronics",
    icon: "zap",
    popularity: 34,
    isNew: false,
    
    
    seoTitle: "Калькулятор мощности для наушников — громкость и напряжение",
    
    h1: "Калькулятор мощности для наушников",
    keywords: ["мощность для наушников", "чувствительность наушников", "импеданс наушников", "усилитель для наушников"],
    fields: [
      { name: 'sensitivity', signed: true, label: "Чувствительность на 1 мВт", type: 'number', defaultValue: 100,  step: 1 , unit: "дБ" },
      { name: 'impedance', label: "Номинальный импеданс (активная модель)", type: 'number', defaultValue: 32, min: 0, step: 1 , unit: "Ом" },
      { name: 'power', label: "Подводимая мощность", type: 'number', defaultValue: 10, min: 0, step: 1 , unit: "мВт" },
    ],
    resultLabels: {
      "spl": "Оценка уровня SPL", "gain": "Прибавка от мощности",
      "voltage": "Напряжение на выходе", "current": "Ток", "impedance": "Импеданс",
    },
    
    
    
    
    relatedCalculatorIds: ["ohms-law", "decibel", "battery-runtime"],
      
      ...contract.ru,
  },
};
