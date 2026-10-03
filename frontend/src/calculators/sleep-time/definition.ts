import { validate } from './validate';
import { dateTimeWave15ContractContent } from '../../data/dateTimeWave15ContractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { sleepTimeCopyEn } from './copy.en';
import { sleepTimeCopyUk } from './copy.uk';
import { sleepTimeCopyDe } from './copy.de';
import { sleepTimeCopyEs } from './copy.es';
import { sleepTimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'sleep-time',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: sleepTimeCopyEn, uk: sleepTimeCopyUk, de: sleepTimeCopyDe, es: sleepTimeCopyEs },
  referenceCases: sleepTimeReferenceCases,
  publishedExample: {
    inputs: { mode: 'bedtime', hour: 23, minute: 0, cycles: 5, fallAsleep: 15 },
    expected: ['06:45'],
  },
  presentation: {
    id: 'sleep-time',
    name: 'Калькулятор времени сна',
    slug: 'sleep-time',
    fullPath: '/date-time/sleep-time/',
    category: 'date-time',
    icon: 'clock',
    popularity: 22,
    isNew: false,
    shortDescription: "Время подъёма или отхода ко сну по условным 90-минутным блокам.",
    seoTitle: 'Калькулятор времени сна по циклам в 90 минут',
    seoDescription: "Сравните время подъёма и отхода ко сну по фиксированным блокам 90 минут и времени на засыпание; расчёт не определяет реальные фазы сна.",
    h1: 'Калькулятор времени сна',
    keywords: ["время сна", "когда лечь спать", "время подъёма", "90 минут расчёт"],
    fields: [
      {
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'bedtime',
        options: [
          { value: 'bedtime', label: 'когда ложусь спать' },
          { value: 'wake', label: 'когда нужно встать' },
        ],
      },
      { name: 'hour', label: 'Час', type: 'number', defaultValue: 23, min: 0, max: 23, step: 1 },
      { name: 'minute', label: 'Минуты', type: 'number', defaultValue: 0, min: 0, max: 59, step: 1 },
      { name: 'cycles', label: '90-минутных блоков', type: 'number', defaultValue: 5, min: 1, max: 12, step: 1 },
      { name: 'fallAsleep', label: 'Время на засыпание, мин', type: 'number', defaultValue: 15, min: 0, step: 1 },
    ],
    resultLabels: {
      wake: 'Когда вставать',
      bedtime: 'Когда лечь',
      total: 'Всего в постели',
      sleep: 'Чистый сон',
      cycles: 'Циклов',
    },
    relatedCalculatorIds: ['time-duration', 'timezone-difference', 'water-intake'],
  
    ...dateTimeWave15ContractContent.ru['sleep-time'],
  },
};
