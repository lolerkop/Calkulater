import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { terminalVelocityCopyEn } from './copy.en';
import { terminalVelocityCopyUk } from './copy.uk';
import { terminalVelocityCopyDe } from './copy.de';
import { terminalVelocityCopyEs } from './copy.es';
import { terminalVelocityReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "terminal-velocity",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: terminalVelocityCopyEn, uk: terminalVelocityCopyUk, de: terminalVelocityCopyDe, es: terminalVelocityCopyEs },
  referenceCases: terminalVelocityReferenceCases,
  publishedExample: { inputs: { m: 80, a: 0.7, cd: 1, rho: 1.225 }, expected: ["42,776 м/с"] },
  presentation: {
    id: "terminal-velocity",
    name: "Калькулятор предельной скорости падения",
    slug: "predelnaya-skorost-padeniya",
    fullPath: "/physics/predelnaya-skorost-padeniya/",
    category: "physics",
    icon: "atom",
    popularity: 26,
    isNew: false,
    shortDescription: "Предельная скорость падения при сопротивлении воздуха с временем и путём разгона.",
    seoTitle: "Калькулятор предельной скорости падения в воздухе",
    seoDescription: "Рассчитайте предельную скорость падения по массе, площади и коэффициенту сопротивления, а также время и путь разгона.",
    h1: "Калькулятор предельной скорости падения",
    keywords: ["предельная скорость", "сопротивление воздуха", "коэффициент сопротивления", "свободное падение"],
    fields: [
      { name: 'm', label: "Масса", type: 'number', defaultValue: 80, min: 0, step: 1 , unit: "кг" },
      { name: 'a', label: "Площадь сечения потоку", type: 'number', defaultValue: 0.7, min: 0, step: 0.05 , unit: "м²" },
      { name: 'cd', label: "Коэффициент сопротивления", type: 'number', defaultValue: 1, min: 0, step: 0.05 , unit: "1" },
      { name: 'rho', label: "Плотность воздуха", type: 'number', defaultValue: 1.225, min: 0, step: 0.005 , unit: "кг/м³" },
    ],
    resultLabels: {
      "speed": "Предельная скорость", "kmh": "В километрах в час",
      "drag": "Сила сопротивления при этой скорости",
      "time": "Время разгона до 95 процентов", "path": "Путь до 95 процентов",
    },
    relatedCalculatorIds: ["free-fall", "air-density", "inclined-plane"],
      ...contract.ru,
  },
};
