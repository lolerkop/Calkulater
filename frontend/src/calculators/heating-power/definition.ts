import { validate } from './validate';
import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { heatingPowerCopyEn } from './copy.en';
import { heatingPowerCopyUk } from './copy.uk';
import { heatingPowerCopyDe } from './copy.de';
import { heatingPowerCopyEs } from './copy.es';
import { heatingPowerReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "heating-power",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: heatingPowerCopyEn, uk: heatingPowerCopyUk, de: heatingPowerCopyDe, es: heatingPowerCopyEs },
  referenceCases: heatingPowerReferenceCases,
  publishedExample: { inputs: { area: 20, height: 2.7, wattsPerM3: 40, windows: 1 }, expected: ["2,26 кВт"] },
  presentation: {
    ...contractContent.ru,
    id: "heating-power",
    name: "Калькулятор мощности отопления",
    slug: "heating-power",
    fullPath: "/household/heating-power/",
    category: "household",
    icon: "home",
    popularity: 40,
    isNew: false,
    shortDescription: "Мощность обогревателя или радиатора по объёму помещения и удельной норме.",
    seoTitle: "Калькулятор мощности отопления помещения",
    seoDescription: "Рассчитайте необходимую мощность отопления по объёму помещения, удельной норме и числу окон — в киловаттах и ваттах.",
    h1: "Калькулятор мощности отопления",
    keywords: ["мощность отопления", "мощность обогревателя", "расчёт радиатора", "сколько киловатт на комнату"],
    fields: [
      { name: 'area', label: 'Площадь помещения, м²', type: 'number', defaultValue: 20, min: 0, step: 1 },
      { name: 'height', label: 'Высота потолка, м', type: 'number', defaultValue: 2.7, min: 0, step: 0.1 },
      { name: 'wattsPerM3', label: 'Удельная норма, Вт/м³', type: 'number', defaultValue: 40, min: 0, step: 1 },
      { name: 'windows', label: 'Число окон', type: 'number', defaultValue: 1, min: 0, step: 1 },
    ],
    resultLabels: {
      "power": "Требуемая мощность",
      "watts": "В ваттах",
      "volume": "Объём помещения",
      "norm": "Норма на объём",
      "windows": "Надбавка на окна",
    },
    relatedCalculatorIds: ["electricity-usage", "room-volume", "insulation"],
  },
};
