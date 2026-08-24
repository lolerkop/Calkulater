import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomCylinderCopyEn } from './copy.en';
import { geomCylinderCopyUk } from './copy.uk';
import { geomCylinderReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-cylinder",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: geomCylinderCopyEn, uk: geomCylinderCopyUk },
  referenceCases: geomCylinderReferenceCases,
  publishedExample: { inputs: { unit: 'm', r: 3, h: 10 }, expected: ["282,74 м³"] },
  presentation: {
    id: "geom-cylinder",
    name: "Калькулятор цилиндра",
    slug: "cylinder",
    fullPath: "/geometry/cylinder/",
    category: "geometry",
    icon: "cylinder",
    popularity: 45,
    isNew: false,
    shortDescription: "Объём, боковая и полная поверхность цилиндра по радиусу и высоте.",
    longDescription:
      "Считает цилиндр — форму бочки, трубы, бака и колодезного кольца. Кроме объёма выводятся две поверхности, и путать их не стоит: боковая нужна, когда считают обёртку или утеплитель на трубу, полная — когда красят ёмкость целиком вместе с донцем и крышкой. Объём выводится в кубе выбранной единицы, поверхность — в квадрате.",
    seoTitle: "Калькулятор цилиндра — объём и площадь поверхности",
    seoDescription: "Рассчитайте объём, боковую и полную площадь поверхности цилиндра по радиусу и высоте.",
    h1: "Калькулятор цилиндра",
    keywords: ["калькулятор цилиндра", "объём цилиндра", "площадь поверхности цилиндра", "объём бочки"],
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
      { name: 'h', label: 'Высота', type: 'number', defaultValue: 10, min: 0, step: 0.1 },
    ],
    resultLabels: {
      "volume": "Объём",
      "lateral": "Боковая поверхность",
      "total": "Полная поверхность",
      "base": "Площадь основания",
    },
    howToUse: ["Выберите единицу длины.", "Введите радиус основания и высоту.", "Прочитайте объём и обе поверхности."],
    howItWorks: "V = π · r² · h, боковая поверхность 2πrh, полная 2πr(r + h) — то есть боковая плюс два основания.",
    example: "Цилиндр радиусом 3 м и высотой 10 м имеет объём 282,743 м³ и боковую поверхность 188,496 м².",
    faq: [
      { q: "Чем боковая поверхность отличается от полной?", a: "Боковая — только стенка, развёртка которой является прямоугольником 2πr на h. Полная добавляет к ней два круглых основания." },
      { q: "Как перевести объём в литры?", a: "Один кубический дециметр равен литру, а кубометр — тысяче литров. Считайте объём в метрах и умножайте на 1000." },
      { q: "Подходит ли расчёт для трубы?", a: "Для наружного объёма и площади — да. Внутренний просвет трубы считается отдельно по внутреннему радиусу, толщина стенки здесь не учитывается." },
      { q: "Что вводить, если известен диаметр?", a: "Половину диаметра. Радиус вдвое меньше, и подстановка диаметра завысила бы объём вчетверо." },
    ],
    relatedCalculatorIds: ["geom-sphere", "geom-cone", "geom-circle"],
  },
};
