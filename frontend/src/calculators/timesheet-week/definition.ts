import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import { timesheetWeekCopyEn } from './copy.en';
import { timesheetWeekCopyUk } from './copy.uk';
import { timesheetWeekCopyDe } from './copy.de';
import { timesheetWeekCopyEs } from './copy.es';
import { timesheetWeekReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "timesheet-week",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: timesheetWeekCopyEn, uk: timesheetWeekCopyUk, de: timesheetWeekCopyDe, es: timesheetWeekCopyEs },
  referenceCases: timesheetWeekReferenceCases,
  publishedExample: {
    inputs: { lines: "09:00,18:00,60\n09:00,18:00,60\n09:00,17:30,45\n10:00,19:00,60\n09:00,14:00,0", rate: 500, normal: 40 },
    expected: ["36,75 ч"],
  },
  presentation: {
    "id": "timesheet-week",
    "name": "Калькулятор табеля рабочего времени",
    "slug": "tabel-rabochego-vremeni",
    "fullPath": "/business/tabel-rabochego-vremeni/",
    "category": "business",
    "icon": "briefcase",
    "popularity": 29,
    "isNew": true,
    "shortDescription": "Часы за неделю по строкам «начало, конец, перерыв», со сверхурочными и заработком.",
    "seoTitle": "Калькулятор табеля рабочего времени за неделю",
    "seoDescription": "Посчитайте часы за неделю по сменам с перерывами, получите сверхурочные сверх нормы и начисленную сумму.",
    "h1": "Калькулятор табеля рабочего времени",
    "keywords": [
        "табель рабочего времени",
        "учёт часов",
        "сверхурочные",
        "ночная смена"
    ],
    "fields": [
        {
            "name": "lines",
            "label": "Смены: начало, конец, перерыв в минутах",
            "type": "textarea",
            "defaultValue": "09:00,18:00,60\n09:00,18:00,60\n09:00,17:30,45\n10:00,19:00,60\n09:00,14:00,0"
        },
        {
            "name": "rate",
            "label": "Ставка за час",
            "type": "number",
            "defaultValue": 500,
            "min": 0,
            "step": 50,
            "unit": "₽"
        },
        {
            "name": "normal",
            "label": "Норма часов за период",
            "type": "number",
            "defaultValue": 40,
            "min": 0,
            "step": 1,
            "unit": "h"
        }
    ],
    "resultLabels": {
        "total": "Всего часов",
        "days": "Дней в табеле",
        "hm": "В часах и минутах",
        "overtime": "Сверхурочных",
        "pay": "Начислено"
    },
    "relatedCalculatorIds": [
        "employee-cost",
        "workday-cost",
        "cycle-time"
    ] ,
    ...contractContent.ru,
  },
};
