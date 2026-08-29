import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { slabFoundationCopyEn } from './copy.en';
import { slabFoundationCopyUk } from './copy.uk';
import { slabFoundationCopyDe } from './copy.de';
import { slabFoundationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "slab-foundation",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: slabFoundationCopyEn, uk: slabFoundationCopyUk, de: slabFoundationCopyDe },
  referenceCases: slabFoundationReferenceCases,
  publishedExample: { inputs: { length: 10, width: 8, thickness: 0.3, meshStep: 0.2, rebarDiameter: 12, waste: 5 }, expected: ["25,2 м³"] },
  presentation: {
    id: "slab-foundation",
    name: "Калькулятор плитного фундамента",
    slug: "plitnyy-fundament",
    fullPath: "/building/plitnyy-fundament/",
    category: "building",
    icon: "layers",
    popularity: 54,
    isNew: false,
    shortDescription: "Объём бетона и арматурная сетка для плитного фундамента.",
    longDescription:
      "Считает обе половины плитного фундамента: бетон, который вы зальёте, и сталь, которую в него положите. Число прутков вдоль стороны — это сторона, делённая на шаг, округлённая вниз, плюс один: пруток у дальнего края не является необязательным, и без этой единицы сетка оказалась бы на ряд короче у каждого края. Слоёв два, верхний и нижний, поэтому длина удваивается. Погонная масса берётся из площади сечения и плотности стали 7850 кг/м³ — это справочная величина, а не подобранный коэффициент, и она даёт привычные 0,888 кг/м для двенадцатого диаметра.",
    seoTitle: "Калькулятор плитного фундамента: бетон и арматура",
    seoDescription: "Посчитайте объём бетона и длину с весом арматурной сетки для плитного фундамента.",
    h1: "Калькулятор плитного фундамента",
    keywords: ["плитный фундамент", "бетон для плиты", "расчёт арматурной сетки", "объём бетона фундамента"],
    fields: [
      { name: 'length', label: 'Длина плиты, м', type: 'number', defaultValue: 10, min: 0, step: 0.5 },
      { name: 'width', label: 'Ширина плиты, м', type: 'number', defaultValue: 8, min: 0, step: 0.5 },
      { name: 'thickness', label: 'Толщина плиты, м', type: 'number', defaultValue: 0.3, min: 0, step: 0.05 },
      { name: 'meshStep', label: 'Шаг сетки, м', type: 'number', defaultValue: 0.2, min: 0, step: 0.05 },
      { name: 'rebarDiameter', label: 'Диаметр арматуры, мм', type: 'number', defaultValue: 12, min: 0, step: 1 },
      { name: 'waste', label: 'Запас, %', type: 'number', defaultValue: 5, min: 0, max: 50, step: 1 },
    ],
    resultLabels: {
      "concrete": "Объём бетона",
      "area": "Площадь плиты",
      "net": "Чистый объём",
      "waste": "Запас",
      "rebarLength": "Длина арматуры",
      "rebarMass": "Вес арматуры",
      "bars": "Прутков",
    },
    howToUse: [
      "Введите длину, ширину и толщину плиты.",
      "Введите шаг сетки — 200 мм распространённый выбор.",
      "Введите диаметр арматуры в миллиметрах.",
      "Добавьте запас на потери при доставке и заливке.",
    ],
    howItWorks:
      "Бетон — это длина на ширину на толщину плюс запас. Прутков в каждом направлении — противоположная сторона, делённая на шаг, округлённая вниз, плюс один, и вся сетка удваивается на два слоя. Погонная масса — площадь круга прутка на плотность стали.",
    example: "Плита 10 на 8 толщиной 0,3 м с сеткой 200 мм из прутка 12 мм требует 25,2 м³ бетона и 1 452,46 кг стали.",
    faq: [
      { q: "Почему плюс один пруток?", a: "Потому что прутки начинаются от одного края и должны дойти до другого. Десять шагов на двух метрах означает одиннадцать прутков, а не десять." },
      { q: "Всегда ли верны два слоя?", a: "Для плитного фундамента обычно да: верхний слой работает на одно направление изгиба, нижний на другое. Тонкую плиту на плотном грунте иногда делают с одним." },
      { q: "Откуда 0,888 кг на метр?", a: "Из геометрии: круг 12 мм — это 113,1 мм², а сталь при 7850 кг/м³ даёт 0,888 кг на каждый метр. Это арифметика, а не таблица." },
      { q: "Учтены ли нахлёсты прутков?", a: "Нет. Прутки длиннее плиты требуют нахлёста, длина которого зависит от диаметра и класса бетона. Добавьте его в запас, если ваши прутки короче плиты." },
      { q: "Зачем отдельный калькулятор, если объём считает общий бетонный?", a: "Потому что плите нужна не только заливка. Здесь сразу считается сетка в двух слоях с плюс одним прутком у края — того, чего расчёт объёма фигуры не даёт." },
    ],
    relatedCalculatorIds: ["concrete", "strip-foundation", "room-volume"],
  },
};
