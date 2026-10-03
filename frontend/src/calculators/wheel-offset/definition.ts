import { automotiveWave10ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { wheelOffsetCopyEn } from './copy.en';
import { wheelOffsetCopyUk } from './copy.uk';
import { wheelOffsetCopyDe } from './copy.de';
import { wheelOffsetCopyEs } from './copy.es';
import { wheelOffsetReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "wheel-offset",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: wheelOffsetCopyEn, uk: wheelOffsetCopyUk, de: wheelOffsetCopyDe, es: wheelOffsetCopyEs },
  referenceCases: wheelOffsetReferenceCases,
  publishedExample: { inputs: { width: 7, offset: 35, newOffset: 45 }, expected: ["136,6 мм"] },
  presentation: {
    id: "wheel-offset",
    name: "Калькулятор вылета диска",
    slug: "vylet-diska",
    fullPath: "/automotive/vylet-diska/",
    category: "automotive",
    icon: "car",
    popularity: 35,
    isNew: false,
    shortDescription: "Вылет ET, вылет назад и смещение колеса при замене дисков.",
    seoTitle: "Калькулятор вылета диска — ET, backspacing и смещение колеса",
    seoDescription: "Рассчитайте вылет назад по ширине диска и ET и узнайте, насколько колесо сместится при замене вылета.",
    h1: "Калькулятор вылета диска",
    keywords: ["вылет диска", "ET диска", "backspacing", "смещение колеса"],
    fields: [
      { name: 'width', label: 'Ширина диска, дюймы', type: 'number', unit: "дюйм", defaultValue: 7, min: 0, step: 0.5 },
      { name: 'offset', label: 'Вылет ET, мм', type: 'number', unit: "мм", defaultValue: 35, signed: true, step: 1 },
      { name: 'newOffset', label: 'Новый вылет ET, мм', type: 'number', unit: "мм", defaultValue: 45, signed: true, step: 1 },
    ],
    resultLabels: {
      "backspacing": "Вылет назад",
      "widthMm": "Ширина диска",
      "shift": "Смещение колеса",
      "direction": "Куда сместится",
      "newBackspacing": "Вылет назад после замены",
    },
    relatedCalculatorIds: ["tire-size", "power-to-weight", "car-depreciation"],
    ...automotiveWave10ContractContent.ru,
  },
};
