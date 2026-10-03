import { validate } from './validate';
import { dateTimeWave15ContractContent } from '../../data/dateTimeWave15ContractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { timezoneDifferenceCopyEn } from './copy.en';
import { timezoneDifferenceCopyUk } from './copy.uk';
import { timezoneDifferenceCopyDe } from './copy.de';
import { timezoneDifferenceCopyEs } from './copy.es';
import { timezoneDifferenceReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "timezone-difference",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: timezoneDifferenceCopyEn, uk: timezoneDifferenceCopyUk, de: timezoneDifferenceCopyDe, es: timezoneDifferenceCopyEs },
  referenceCases: timezoneDifferenceReferenceCases,
  publishedExample: { inputs: { fromOffset: 3, toOffset: -5, hour: 14, minute: 30 }, expected: ["06:30"] },
  presentation: {
    id: "timezone-difference",
    name: "Калькулятор разницы часовых поясов",
    slug: "timezone-difference",
    fullPath: "/date-time/timezone-difference/",
    category: "date-time",
    icon: "globe",
    popularity: 39,
    isNew: false,
    shortDescription: "Перевод времени между двумя смещениями UTC с учётом перехода через полночь.",
    seoTitle: "Калькулятор разницы часовых поясов по смещению UTC",
    seoDescription: "Переведите время между двумя часовыми поясами по их смещениям UTC, включая дробные смещения и переход через полночь.",
    h1: "Калькулятор разницы часовых поясов",
    keywords: ["разница часовых поясов", "перевод времени", "смещение UTC", "который час в другом городе"],
    fields: [
      { name: 'fromOffset', label: 'Смещение UTC откуда', type: 'number', defaultValue: 3, min: -12, max: 14, step: 0.25, signed: true },
      { name: 'toOffset', label: 'Смещение UTC куда', type: 'number', defaultValue: -5, min: -12, max: 14, step: 0.25, signed: true },
      { name: 'hour', label: 'Часы', type: 'number', defaultValue: 14, min: 0, max: 23, step: 1 },
      { name: 'minute', label: 'Минуты', type: 'number', defaultValue: 30, min: 0, max: 59, step: 1 },
    ],
    resultLabels: {
      "target": "Время в точке назначения",
      "difference": "Разница",
      "shift": "Сдвиг суток",
      "day": "Календарный день",
      "source": "Исходное время",
    },
    relatedCalculatorIds: ["time-duration", "date-shift-calculator", "convert-time"],
  
    ...dateTimeWave15ContractContent.ru['timezone-difference'],
  },
};
