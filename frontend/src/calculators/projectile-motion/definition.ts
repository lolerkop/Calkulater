import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { projectileMotionCopyEn } from './copy.en';
import { projectileMotionCopyUk } from './copy.uk';
import { projectileMotionCopyDe } from './copy.de';
import { projectileMotionCopyEs } from './copy.es';
import { projectileMotionReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "projectile-motion",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: projectileMotionCopyEn, uk: projectileMotionCopyUk, de: projectileMotionCopyDe, es: projectileMotionCopyEs },
  referenceCases: projectileMotionReferenceCases,
  publishedExample: { inputs: { v0: 20, angle: 45, h0: 0 }, expected: ["40,789 м"] },
  presentation: {
    id: "projectile-motion",
    name: "Калькулятор броска под углом",
    slug: "brosok-pod-uglom",
    fullPath: "/physics/brosok-pod-uglom/",
    category: "physics",
    icon: "move-right",
    popularity: 32,
    isNew: false,
    shortDescription: "Дальность, время полёта и высшая точка броска под углом.",
    seoTitle: "Калькулятор броска под углом — дальность, время, высота",
    seoDescription: "Рассчитайте дальность полёта, время и высшую точку тела, брошенного под углом к горизонту с заданной высоты.",
    h1: "Калькулятор броска под углом",
    keywords: ["бросок под углом к горизонту", "дальность полёта тела", "баллистика калькулятор", "время полёта тела"],
    fields: [
      { name: 'v0', label: "Начальная скорость", type: 'number', defaultValue: 20, min: 0, step: 1 , unit: "м/с" },
      { name: 'angle', label: "Угол к горизонту", type: 'number', defaultValue: 45, min: 0, max: 90, step: 1 , unit: "°" },
      { name: 'h0', label: "Высота броска", type: 'number', defaultValue: 0, min: 0, step: 0.5 , unit: "м" },
    ],
    resultLabels: {
      "range": "Дальность",
      "time": "Время полёта",
      "apex": "Высшая точка",
      "vx": "Горизонтальная составляющая",
      "vy": "Вертикальная составляющая",
      "toApex": "Время до высшей точки",
    },
    relatedCalculatorIds: ["kinetic-energy", "acceleration", "potential-energy"],
      ...contract.ru,
  },
};
