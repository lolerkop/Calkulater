import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomConeCopyEn } from './copy.en';
import { geomConeCopyUk } from './copy.uk';
import { geomConeCopyDe } from './copy.de';
import { geomConeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-cone",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: geomConeCopyEn, uk: geomConeCopyUk, de: geomConeCopyDe },
  referenceCases: geomConeReferenceCases,
  publishedExample: { inputs: { unit: 'm', r: 3, h: 4 }, expected: ["37,699 м³"] },
  presentation: {
    id: "geom-cone",
    name: "Калькулятор конуса",
    slug: "cone",
    fullPath: "/geometry/cone/",
    category: "geometry",
    icon: "cone",
    popularity: 42,
    isNew: false,
    shortDescription: "Объём, образующая и поверхность конуса по радиусу и высоте.",
    longDescription:
      "Считает конус — форму кучи песка, воронки, бункера и крыши-шатра. Кроме объёма выводится образующая: это длина по скату от вершины до края основания, и именно она нужна для раскроя обшивки, тогда как высота — вертикаль от вершины до центра. Их путают чаще всего, а разница заметна: при радиусе 3 и высоте 4 образующая равна 5.",
    seoTitle: "Калькулятор конуса — объём, образующая, поверхность",
    seoDescription: "Рассчитайте объём конуса, длину образующей, боковую и полную площадь поверхности по радиусу и высоте.",
    h1: "Калькулятор конуса",
    keywords: ["калькулятор конуса", "объём конуса", "образующая конуса", "площадь поверхности конуса"],
    fields: [
      {
        name: 'unit', label: 'Единица длины', type: 'select', defaultValue: 'cm',
        options: [
          { value: 'mm', label: 'миллиметры' },
          { value: 'cm', label: 'сантиметры' },
          { value: 'm', label: 'метры' },
        ],
      },
      { name: 'r', label: 'Радиус основания', type: 'number', defaultValue: 3, min: 0, step: 0.1 },
      { name: 'h', label: 'Высота', type: 'number', defaultValue: 4, min: 0, step: 0.1 },
    ],
    resultLabels: {
      "volume": "Объём",
      "slant": "Образующая",
      "lateral": "Боковая поверхность",
      "total": "Полная поверхность",
    },
    howToUse: ["Выберите единицу длины.", "Введите радиус основания и вертикальную высоту.", "Прочитайте объём, образующую и поверхности."],
    howItWorks: "V = π · r² · h ÷ 3, образующая l = √(r² + h²), боковая поверхность πrl, полная πr(r + l).",
    example: "Конус радиусом 3 м и высотой 4 м имеет образующую 5 м и объём 37,699 м³.",
    faq: [
      { q: "Чем образующая отличается от высоты?", a: "Высота — вертикаль от вершины до центра основания, образующая — наклонная от вершины до края. Образующая всегда длиннее, и для раскроя обшивки нужна именно она." },
      { q: "Почему объём конуса втрое меньше объёма цилиндра?", a: "Потому что конус с тем же основанием и той же высотой занимает ровно треть цилиндра — это классический результат стереометрии." },
      { q: "Как посчитать кучу песка?", a: "Измерьте радиус у основания и высоту в центре. Насыпь принимается идеальным конусом, поэтому реальный объём будет немного меньше." },
      { q: "Что входит в полную поверхность?", a: "Боковая поверхность плюс круглое основание. Для открытой воронки нужна только боковая." },
    ],
    relatedCalculatorIds: ["geom-cylinder", "geom-sphere", "geom-circle"],
  },
};
