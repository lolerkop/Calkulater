import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { beamStressCopyEn } from './copy.en';
import { beamStressCopyUk } from './copy.uk';
import { beamStressReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "beam-stress",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: beamStressCopyEn, uk: beamStressCopyUk },
  referenceCases: beamStressReferenceCases,
  publishedExample: { inputs: { moment: 4500, section: 'rect', b: 100, h: 200, d: 100 }, expected: ["6,75 МПа"] },
  presentation: {
    id: "beam-stress",
    name: "Калькулятор напряжения изгиба балки",
    slug: "napryazhenie-izgiba-balki",
    fullPath: "/building/napryazhenie-izgiba-balki/",
    category: "building",
    icon: "rectangle-horizontal",
    popularity: 30,
    isNew: false,
    shortDescription: "Напряжение изгиба по моменту и форме сечения балки.",
    longDescription:
      "Всё решает момент сопротивления сечения. У прямоугольника он равен b·h²/6, и высота входит в квадрате: доска, поставленная на ребро, держит втрое больше той же доски, положенной плашмя. Отличие от растяжения существенное — там напряжение равномерно по сечению и считается силой на площадь, а при изгибе оно распределено линейно от нейтральной оси и достигает максимума на крайнем волокне, поэтому одной площади сечения мало, нужна его форма.",
    seoTitle: "Калькулятор напряжения изгиба балки — момент сопротивления",
    seoDescription: "Рассчитайте напряжение изгиба в балке по изгибающему моменту и форме сечения: прямоугольник или круг, с моментом сопротивления.",
    h1: "Калькулятор напряжения изгиба балки",
    keywords: ["напряжение изгиба", "момент сопротивления", "расчёт балки", "изгибающий момент"],
    fields: [
      { name: 'moment', label: 'Изгибающий момент, Н·м', type: 'number', defaultValue: 4500, min: 0, step: 100 },
      {
        name: 'section', label: 'Сечение', type: 'select', defaultValue: 'rect',
        options: [
          { value: 'rect', label: 'прямоугольник' },
          { value: 'circle', label: 'круг' },
        ],
      },
      { name: 'b', label: 'Ширина сечения, мм', type: 'number', defaultValue: 100, min: 0, step: 10, showIf: { field: 'section', equals: 'rect' } },
      { name: 'h', label: 'Высота сечения, мм', type: 'number', defaultValue: 200, min: 0, step: 10, showIf: { field: 'section', equals: 'rect' } },
      { name: 'd', label: 'Диаметр, мм', type: 'number', defaultValue: 100, min: 0, step: 10, showIf: { field: 'section', equals: 'circle' } },
    ],
    resultLabels: {
      "stress": "Напряжение изгиба", "modulus": "Момент сопротивления",
      "moment": "Изгибающий момент", "section": "Сечение", "size": "Определяющий размер сечения",
    },
    howToUse: [
      "Введите изгибающий момент в ньютон-метрах: для балки на двух опорах с грузом посередине это сила на пролёт делить на четыре.",
      "Размеры сечения задаются в миллиметрах.",
      "Для прямоугольника высота — это размер вдоль действия нагрузки, то есть по вертикали.",
      "Сравните результат с допускаемым напряжением своего материала — оно зависит от марки и здесь не задано.",
    ],
    howItWorks: "Момент сопротивления: прямоугольник b·h²/6, круг π·d³/32. Напряжение = момент ÷ момент сопротивления.",
    example: "Прямоугольное сечение 100×200 мм при моменте 4,5 кН·м даёт напряжение 6,75 МПа.",
    faq: [
      { q: "Почему доска на ребре держит намного больше?", a: "Потому что высота сечения входит в момент сопротивления в квадрате. Поворот доски 50×150 с плашмя на ребро увеличивает её сопротивление изгибу втрое." },
      { q: "Чем это отличается от расчёта на растяжение?", a: "При растяжении напряжение равномерно по сечению и равно силе на площадь. При изгибе оно линейно меняется от нейтральной оси и максимально у края, поэтому форма сечения важнее его площади." },
      { q: "Почему нет допускаемого напряжения?", a: "Оно зависит от марки стали, породы дерева и коэффициентов запаса по нормам. Зашивать одно число значило бы выдавать частный случай за общее правило." },
      { q: "Это полный расчёт балки?", a: "Нет. Здесь только напряжение изгиба в упругой области и в одной плоскости. Прогиб, устойчивость, срез и кручение считаются отдельно." },
    ],
    relatedCalculatorIds: ["stress-strain", "metal-weight", "rafters"],
  },
};
