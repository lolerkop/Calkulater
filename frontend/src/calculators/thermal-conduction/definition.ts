import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { thermalConductionCopyEn } from './copy.en';
import { thermalConductionCopyUk } from './copy.uk';
import { thermalConductionCopyDe } from './copy.de';
import { thermalConductionCopyEs } from './copy.es';
import { thermalConductionReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "thermal-conduction",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: thermalConductionCopyEn, uk: thermalConductionCopyUk, de: thermalConductionCopyDe, es: thermalConductionCopyEs },
  referenceCases: thermalConductionReferenceCases,
  publishedExample: { inputs: { area: 10, thickness: 0.2, k: 0.04, dt: 25 }, expected: ["50 Вт"] },
  presentation: {
    id: "thermal-conduction",
    name: "Калькулятор теплопередачи через слой",
    slug: "teploperedacha-cherez-sloy",
    fullPath: "/physics/teploperedacha-cherez-sloy/",
    category: "physics",
    icon: "flame",
    popularity: 29,
    isNew: false,
    shortDescription: "Тепловой поток, сопротивление и коэффициент теплопередачи слоя.",
    seoTitle: "Калькулятор теплопередачи через слой — поток и сопротивление",
    seoDescription: "Рассчитайте тепловой поток через слой утеплителя или стены: сопротивление, коэффициент теплопередачи и плотность потока.",
    h1: "Калькулятор теплопередачи через слой",
    keywords: ["теплопередача через стену", "термическое сопротивление слоя", "коэффициент теплопередачи", "тепловой поток калькулятор"],
    fields: [
      { name: 'area', label: "Площадь", type: 'number', defaultValue: 10, min: 0, step: 0.5 , unit: "м²" },
      { name: 'thickness', label: "Толщина слоя", type: 'number', defaultValue: 0.2, min: 0, step: 0.01 , unit: "м" },
      { name: 'k', label: "Теплопроводность λ", type: 'number', defaultValue: 0.04, min: 0, step: 0.01 , unit: "Вт/(м·К)" },
      { name: 'dt', label: "Перепад температур", type: 'number', defaultValue: 25, signed: true, step: 1 , unit: "К" },
    ],
    resultLabels: {
      "flow": "Тепловой поток",
      "flux": "Плотность потока",
      "resistance": "Сопротивление слоя",
      "uValue": "Коэффициент теплопередачи",
      "perDay": "За сутки",
    },
    // `physics-power` — сосед по разделу: тепловой поток измеряется ваттами,
    // то есть той же мощностью. Связь добавлена при публикации: правило
    // «со страницы виден хотя бы один родственник по разделу» проверяется
    // только у публичных калькуляторов, и пока волна была удержана,
    // проверить его было не на чем.
    relatedCalculatorIds: ["heating-power", "physics-power", "insulation", "underfloor-heating"],
      ...contract.ru,
  },
};
