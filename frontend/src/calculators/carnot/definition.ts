import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { carnotCopyEn } from './copy.en';
import { carnotCopyUk } from './copy.uk';
import { carnotCopyDe } from './copy.de';
import { carnotCopyEs } from './copy.es';
import { carnotReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "carnot",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: carnotCopyEn, uk: carnotCopyUk, de: carnotCopyDe, es: carnotCopyEs },
  referenceCases: carnotReferenceCases,
  publishedExample: { inputs: { tHot: 800, tCold: 300 }, expected: ["62,5 %"] },
  presentation: {
    id: "carnot",
    name: "Калькулятор КПД цикла Карно",
    slug: "kpd-cikla-karno",
    fullPath: "/physics/kpd-cikla-karno/",
    category: "physics",
    icon: "activity",
    popularity: 27,
    isNew: false,
    shortDescription: "Предельный КПД тепловой машины по двум температурам.",
    seoTitle: "Калькулятор КПД цикла Карно — предел тепловой машины",
    seoDescription: "Рассчитайте предельный КПД тепловой машины по температурам нагревателя и холодильника в кельвинах.",
    h1: "Калькулятор КПД цикла Карно",
    keywords: ["КПД цикла Карно", "предельный КПД", "тепловая машина", "второе начало термодинамики"],
    fields: [
      { name: 'tHot', label: "Температура нагревателя", type: 'number', defaultValue: 800, min: 0, step: 1 , unit: "К" },
      { name: 'tCold', label: "Температура холодильника", type: 'number', defaultValue: 300, min: 0, step: 1 , unit: "К" },
    ],
    resultLabels: {
      "efficiency": "Предельный КПД", "work": "Полезная работа из 1000 Дж тепла",
      "rejected": "Отдано холодильнику", "delta": "Перепад температур", "ratio": "Отношение температур",
    },
    relatedCalculatorIds: ["specific-heat", "physics-power", "thermal-conduction"],
      ...contract.ru,
  },
};
