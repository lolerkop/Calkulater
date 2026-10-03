import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { bikeWheelSizeCopyEn } from './copy.en';
import { bikeWheelSizeCopyUk } from './copy.uk';
import { bikeWheelSizeCopyDe } from './copy.de';
import { bikeWheelSizeCopyEs } from './copy.es';
import { bikeWheelSizeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "bike-wheel-size",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: bikeWheelSizeCopyEn, uk: bikeWheelSizeCopyUk, de: bikeWheelSizeCopyDe, es: bikeWheelSizeCopyEs },
  referenceCases: bikeWheelSizeReferenceCases,
  publishedExample: { inputs: { mode: 'etrto', etrtoRim: 622, etrtoTire: 25, inches: 26 }, expected: ["2 111,15 мм"] },
  presentation: {
    id: "bike-wheel-size",
    name: "Калькулятор размера велоколеса",
    slug: "razmer-velokolesa",
    fullPath: "/sport/razmer-velokolesa/",
    category: "sport",
    icon: "bike",
    popularity: 43,
    isNew: false,
    shortDescription: "Оценка геометрии по ETRTO или расчёт по измеренному внешнему диаметру.",
    longDescription: "В режиме ETRTO два числа обозначают номинальную ширину покрышки и посадочный диаметр обода. Для оценки внешнего диаметра здесь высота покрышки принимается равной ширине — это допущение, а не определение ETRTO. Дюймовый режим считает геометрию по введённому внешнему диаметру; историческое название «26 дюймов» не обязательно является измерением.",
    seoTitle: "Калькулятор размера велоколеса: диаметр и длина окружности",
    seoDescription: "Оцените геометрию по ETRTO с допущением о высоте покрышки или рассчитайте окружность по измеренному диаметру.",
    h1: "Калькулятор размера велоколеса",
    keywords: ["длина окружности велоколеса", "ETRTO калькулятор", "размер колеса", "размер колеса для велокомпьютера"],
    fields: [
      {
        name: 'mode', label: 'Как задан размер', type: 'select', defaultValue: 'etrto',
        options: [
          { value: 'etrto', label: 'ETRTO, в миллиметрах' },
          { value: 'inches', label: 'В дюймах' },
        ],
      },
      { name: 'etrtoRim', label: 'Посадочный диаметр обода', type: 'number', unit: 'мм', defaultValue: 622, min: 0, step: 1, showIf: { field: 'mode', equals: 'etrto' } },
      { name: 'etrtoTire', label: 'Ширина покрышки', type: 'number', unit: 'мм', defaultValue: 25, min: 0, step: 1, showIf: { field: 'mode', equals: 'etrto' } },
      { name: 'inches', label: 'Диаметр колеса', type: 'number', unit: 'in', defaultValue: 26, min: 0, step: 0.5, showIf: { field: 'mode', equals: 'inches' } },
    ],
    resultLabels: {
      "circumference": "Длина окружности",
      "diameter": "Диаметр",
      "inches": "Диаметр в дюймах",
      "revsPerKm": "Оборотов на километр",
      "radius": "Радиус",
    },
    howToUse: [
    "Прочитайте маркировку: для 25-622 введите ширину 25 и посадочный диаметр 622 мм.",
    "Считайте результат ETRTO предварительной геометрической оценкой.",
    "В дюймовом режиме вводите измеренный внешний диаметр, а не только условное название размера.",
    "Для настройки велокомпьютера измерьте один оборот нагруженного колеса при рабочем давлении."
],
    howItWorks: "Оценка ETRTO: D≈BSD+2W, где W — номинальная ширина, принятая за радиальную высоту. Дюймы: D = d×25,4 мм. Затем C=πD, радиус=D/2, обороты на км=1 000 000/C. Нулевая ширина показывает только геометрию окружности обода, не пригодность колеса.",
    example: "25-622: D≈622+2×25=672 мм, C≈2111,15 мм=2,11115 м и около 473,68 оборота на км. Это оценка, не измеренный прокат конкретной покрышки.",
    faq: [
    {
        "q": "Как прочитать размер ETRTO на покрышке?",
        "a": "25-622 означает номинальную ширину 25 мм и посадочный диаметр 622 мм. Он помогает сопоставить посадку, но не проверяет всю совместимость обода, покрышки и рамы."
    },
    {
        "q": "Почему ширина покрышки удваивается в оценке?",
        "a": "Радиальная высота добавляется сверху и снизу. Здесь высоту приближённо заменяют шириной; реальная форма зависит от покрышки и обода."
    },
    {
        "q": "Почему условные дюймы отличаются от ETRTO?",
        "a": "Дюймовые названия исторически неоднозначны. 28 и 29 могут иметь посадку 622 мм; число 26 само по себе не определяет один посадочный диаметр."
    },
    {
        "q": "Насколько оценка окружности годится для велокомпьютера?",
        "a": "Прокат меняется с конструкцией, ободом, давлением и нагрузкой. Для настройки измерьте расстояние одного нагруженного оборота."
    },
    {
        "q": "Как передать окружность калькулятору передач?",
        "a": "Разделите миллиметры на 1000:2111,15 мм → 2,11115 м. Лучше передать измеренный прокат, если он есть."
    }
],
    disclaimer: "Предварительная геометрия с допущением высота≈ширина. Не подтверждает точный прокат, посадку, зазоры или безопасность установки покрышки.",
    relatedCalculatorIds: ["bike-gear-ratio", "tire-size", "speed-distance-time"],
  },
};
