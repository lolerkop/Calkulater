import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { momentOfInertiaCopyEn } from './copy.en';
import { momentOfInertiaCopyUk } from './copy.uk';
import { momentOfInertiaCopyDe } from './copy.de';
import { momentOfInertiaReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "moment-of-inertia",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: momentOfInertiaCopyEn, uk: momentOfInertiaCopyUk, de: momentOfInertiaCopyDe },
  referenceCases: momentOfInertiaReferenceCases,
  publishedExample: { inputs: { shape: 'disk', m: 2, r: 0.15 }, expected: ["0,0225 кг·м²"] },
  presentation: {
    id: "moment-of-inertia",
    name: "Калькулятор момента инерции",
    slug: "moment-inercii",
    fullPath: "/physics/moment-inercii/",
    category: "physics",
    icon: "circle",
    popularity: 32,
    isNew: false,
    shortDescription: "Момент инерции стержня, диска, кольца и шара относительно оси.",
    longDescription:
      "Момент инерции — мера сопротивления вращению, и он зависит не только от массы, но и от того, как масса распределена относительно оси. У кольца весь материал вынесен на радиус, поэтому его момент вдвое больше, чем у сплошного диска той же массы и радиуса. По той же причине стержень, вращаемый за конец, сопротивляется вчетверо сильнее, чем тот же стержень вокруг центра.",
    seoTitle: "Калькулятор момента инерции — стержень, диск, кольцо, шар",
    seoDescription: "Рассчитайте момент инерции тела относительно оси по массе и размеру для шести классических тел, с радиусом инерции.",
    h1: "Калькулятор момента инерции",
    keywords: ["момент инерции", "момент инерции диска", "момент инерции стержня", "радиус инерции"],
    fields: [
      {
        name: 'shape', label: 'Тело', type: 'select', defaultValue: 'disk',
        options: [
          { value: 'rod-center', label: 'стержень через центр' },
          { value: 'rod-end', label: 'стержень через конец' },
          { value: 'disk', label: 'сплошной диск' },
          { value: 'ring', label: 'тонкое кольцо' },
          { value: 'sphere-solid', label: 'сплошной шар' },
          { value: 'sphere-hollow', label: 'полая сфера' },
        ],
      },
      { name: 'm', label: 'Масса, кг', type: 'number', defaultValue: 2, min: 0, step: 0.1 },
      { name: 'r', label: 'Радиус или длина, м', type: 'number', defaultValue: 0.15, min: 0, step: 0.01 },
    ],
    resultLabels: {
      "inertia": "Момент инерции", "mass": "Масса", "size": "Размер",
      "gyration": "Радиус инерции", "body": "Тело",
    },
    howToUse: [
      "Выберите тело: ось вращения задана самим выбором.",
      "Для диска, кольца и шара вводите радиус, для стержня — его длину.",
      "Радиус инерции показывает, на каком расстоянии от оси нужно собрать всю массу, чтобы момент не изменился.",
      "Для составного тела считайте части отдельно и складывайте моменты относительно одной оси.",
    ],
    howItWorks: "Стержень через центр mL²/12, через конец mL²/3, диск mr²/2, кольцо mr², сплошной шар 2mr²/5, полая сфера 2mr²/3.",
    example: "Диск массой 2 кг радиусом 15 см имеет момент инерции 0,0225 кг·м².",
    faq: [
      { q: "Почему у кольца момент вдвое больше, чем у диска?", a: "У кольца вся масса на радиусе, а у диска она размазана от центра к краю. Момент растёт как квадрат расстояния, поэтому внутренние слои диска вносят вклад заметно меньше." },
      { q: "Зачем два варианта для стержня?", a: "Момент зависит от того, где проходит ось. Через центр он вчетверо меньше, чем через конец, — потому и качели легче раскачать за середину, чем за край." },
      { q: "Что показывает радиус инерции?", a: "Расстояние от оси, на котором нужно сосредоточить всю массу тела точкой, чтобы момент инерции остался прежним. Это удобная замена сложной формы одним числом." },
      { q: "Как считать составное тело?", a: "Сложить моменты частей относительно одной и той же оси. Если ось не проходит через центр части, к её моменту добавляется масса на квадрат смещения — теорема Штейнера, которая здесь не считается." },
    ],
    relatedCalculatorIds: ["physics-torque", "centripetal-force", "kinetic-energy"],
  },
};
