import { validate } from './validate';
import { dateTimeWave15ContractContent } from '../../data/dateTimeWave15ContractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { workHoursCopyEn } from './copy.en';
import { workHoursCopyUk } from './copy.uk';
import { workHoursCopyDe } from './copy.de';
import { workHoursCopyEs } from './copy.es';
import { workHoursReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "work-hours",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: workHoursCopyEn, uk: workHoursCopyUk, de: workHoursCopyDe, es: workHoursCopyEs },
  referenceCases: workHoursReferenceCases,
  publishedExample: {
    inputs: { startHour: 9, startMin: 0, endHour: 18, endMin: 0, breakMin: 60, days: 21, ratePerHour: 500 },
    expected: ["168 ч"],
  },
  presentation: {
    id: "work-hours",
    name: "Калькулятор рабочих часов",
    slug: "work-hours",
    fullPath: "/date-time/work-hours/",
    category: "date-time",
    icon: "repeat",
    popularity: 42,
    isNew: false,
    shortDescription: "Часы за период по началу и концу смены с перерывом, включая ночные смены.",
    seoTitle: "Калькулятор рабочих часов за смену и месяц",
    seoDescription: "Посчитайте отработанные часы по времени начала и конца смены с вычетом перерыва, включая ночные смены через полночь.",
    h1: "Калькулятор рабочих часов",
    keywords: ["калькулятор рабочих часов", "учёт отработанного времени", "часы за смену", "ночная смена расчёт"],
    fields: [
      { name: 'startHour', label: 'Начало смены, часы', type: 'number', defaultValue: 9, min: 0, max: 23, step: 1 },
      { name: 'startMin', label: 'Начало смены, минуты', type: 'number', defaultValue: 0, min: 0, max: 59, step: 1 },
      { name: 'endHour', label: 'Конец смены, часы', type: 'number', defaultValue: 18, min: 0, max: 23, step: 1 },
      { name: 'endMin', label: 'Конец смены, минуты', type: 'number', defaultValue: 0, min: 0, max: 59, step: 1 },
      { name: 'breakMin', label: 'Перерыв, минут', type: 'number', defaultValue: 60, min: 0, step: 1 },
      { name: 'days', label: 'Число смен', type: 'number', defaultValue: 21, min: 1, step: 1 },
      { name: 'ratePerHour', label: 'Ставка за час', unit: 'ден. ед./ч', type: 'number', defaultValue: 500, min: 0, step: 10 },
    ],
    resultLabels: {
      "total": "Часов за период",
      "perShift": "Часов в смену",
      "hm": "В часах и минутах",
      "span": "Длина смены до перерыва",
      "pay": "Заработок",
    },
    relatedCalculatorIds: ["working-days-calculator", "time-duration", "workday-cost"],
  
    ...dateTimeWave15ContractContent.ru['work-hours'],
  },
};
