import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { waterHeatingCopyEn } from './copy.en';
import { waterHeatingCopyUk } from './copy.uk';
import { waterHeatingCopyDe } from './copy.de';
import { waterHeatingCopyEs } from './copy.es';
import { waterHeatingReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "water-heating",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: waterHeatingCopyEn, uk: waterHeatingCopyUk, de: waterHeatingCopyDe, es: waterHeatingCopyEs },
  referenceCases: waterHeatingReferenceCases,
  publishedExample: { inputs: { volume: 100, tFrom: 10, tTo: 60, power: 2, efficiency: 95 }, expected: ["3,06 ч"] },
  presentation: {
    ...contractContent.ru,
    id: "water-heating",
    name: "Калькулятор времени нагрева воды",
    slug: "vremya-nagreva-vody",
    fullPath: "/household/vremya-nagreva-vody/",
    category: "household",
    icon: "flame",
    popularity: 36,
    isNew: false,
    shortDescription: "Сколько времени греть воду заданной мощностью.",
    seoTitle: "Калькулятор времени нагрева воды — бойлер, ТЭН, чайник",
    seoDescription: "Рассчитайте время нагрева воды по объёму, начальной и конечной температуре, мощности нагревателя и КПД.",
    h1: "Калькулятор времени нагрева воды",
    keywords: ["время нагрева воды", "мощность бойлера", "нагрев воды", "киловатт-часы на нагрев"],
    fields: [
      { name: 'volume', label: 'Объём воды, л', type: 'number', defaultValue: 100, min: 0, step: 10 },
      { name: 'tFrom', label: 'Начальная температура, °C', type: 'number', defaultValue: 10, min: 0, max: 100, step: 1 },
      { name: 'tTo', label: 'Конечная температура, °C', type: 'number', defaultValue: 60, min: 0, max: 100, step: 1 },
      { name: 'power', label: 'Мощность нагревателя, кВт', type: 'number', defaultValue: 2, min: 0, step: 0.5 },
      { name: 'efficiency', label: 'КПД, %', type: 'number', defaultValue: 95, min: 0, max: 100, step: 1 },
    ],
    resultLabels: {
      "hours": "Время нагрева",
      "hm": "Часы и минуты",
      "kwh": "Энергия",
      "useful": "Полезная мощность",
      "dt": "Перепад температур",
    },
    relatedCalculatorIds: ["specific-heat", "heating-power", "electricity-usage"],
  },
};
