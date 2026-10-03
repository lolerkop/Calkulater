import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { batteryChargeTimeCopyEn } from './copy.en';
import { batteryChargeTimeCopyUk } from './copy.uk';
import { batteryChargeTimeCopyDe } from './copy.de';
import { batteryChargeTimeCopyEs } from './copy.es';
import { batteryChargeTimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "battery-charge-time",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: batteryChargeTimeCopyEn, uk: batteryChargeTimeCopyUk, de: batteryChargeTimeCopyDe, es: batteryChargeTimeCopyEs },
  referenceCases: batteryChargeTimeReferenceCases,
  publishedExample: { inputs: { capacityAh: 100, currentA: 10, efficiency: 100 }, expected: ["10 ч 0 мин"] },
  presentation: {
    id: "battery-charge-time",
    name: "Калькулятор времени зарядки батареи",
    slug: "battery-charge-time",
    fullPath: "/electronics/battery-charge-time/",
    category: "electronics",
    icon: "battery-charging",
    popularity: 46,
    isNew: false,
    shortDescription: "Сколько времени займёт зарядка батареи при заданном токе.",
    
    seoTitle: "Калькулятор времени зарядки батареи — часы по ёмкости и току",
    
    h1: "Калькулятор времени зарядки батареи",
    keywords: ["время зарядки аккумулятора", "калькулятор зарядки батареи", "сколько заряжать аккумулятор"],
    fields: [
  {
    "name": "capacityAh",
    "label": "Добавляемый заряд",
    "type": "number",
    "defaultValue": 100,
    "min": 0,
    "step": 0.1,
    "unit": "А·ч"
  },
  {
    "name": "currentA",
    "label": "Ток зарядки",
    "type": "number",
    "defaultValue": 10,
    "min": 0,
    "step": 0.1,
    "unit": "А"
  },
  {
    "name": "efficiency",
    "label": "Доля сохранённого заряда η",
    "type": "number",
    "defaultValue": 100,
    "min": 1,
    "max": 100,
    "step": 1,
    "unit": "%"
  }
],
    resultLabels: {
      "time": "Время зарядки",
      "hours": "В часах",
      "energy": "Передано в батарею",
      "fromCharger": "Отдано зарядным устройством",
    },

    relatedCalculatorIds: ["battery-runtime", "inverter-power", "led-resistor"],
    ...contractContent.ru,
  },
};
