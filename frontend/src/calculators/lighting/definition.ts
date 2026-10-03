import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { lightingCopyEn } from './copy.en';
import { lightingCopyUk } from './copy.uk';
import { lightingCopyDe } from './copy.de';
import { lightingCopyEs } from './copy.es';
import { lightingReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "lighting",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: lightingCopyEn, uk: lightingCopyUk, de: lightingCopyDe, es: lightingCopyEs },
  referenceCases: lightingReferenceCases,
  publishedExample: { inputs: { area: 18, norm: 150, lampLumens: 800, lossFactor: 0.8 }, expected: ["3 375 лм"] },
  presentation: {
    ...contractContent.ru,
    id: "lighting",
    name: "Калькулятор освещения комнаты",
    slug: "osveshchenie-komnaty",
    fullPath: "/household/osveshchenie-komnaty/",
    category: "household",
    icon: "lightbulb",
    popularity: 46,
    isNew: false,
    shortDescription: "Сколько люмен нужно комнате и во сколько ламп это выходит.",
    seoTitle: "Калькулятор освещения комнаты: люмены и число ламп",
    seoDescription: "Посчитайте, сколько люмен нужно комнате для выбранной освещённости и во сколько ламп заданного потока это выходит.",
    h1: "Калькулятор освещения комнаты",
    keywords: ["расчёт освещения", "люмены на комнату", "сколько ламп", "освещённость калькулятор"],
    fields: [
      { name: 'area', label: 'Площадь комнаты, м²', type: 'number', defaultValue: 18, min: 0, step: 1 },
      { name: 'norm', label: 'Норма освещённости, лк', type: 'number', defaultValue: 150, min: 0, step: 10 },
      { name: 'lampLumens', label: 'Световой поток лампы, лм', type: 'number', defaultValue: 800, min: 0, step: 50 },
      { name: 'lossFactor', label: "Коэффициент сохранения света", type: 'number', defaultValue: 0.8, min: 0.4, max: 1, step: 0.05 },
    ],
    resultLabels: {
      "lumens": "Нужно люмен",
      "lamps": "Ламп",
      "perM2": "Люмен на квадратный метр",
      "norm": "Норма освещённости",
      "loss": "Коэффициент запаса",
      "installed": "Установленный поток",
    },
    relatedCalculatorIds: ["electricity-usage", "heating-power", "room-volume"],
  },
};
