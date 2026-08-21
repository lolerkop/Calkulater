import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { bikeWheelSizeCopyEn } from './copy.en';
import { bikeWheelSizeCopyUk } from './copy.uk';
import { bikeWheelSizeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "bike-wheel-size",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: bikeWheelSizeCopyEn, uk: bikeWheelSizeCopyUk },
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
    isNew: true,
    shortDescription: "Диаметр и длина окружности велосипедного колеса по ETRTO или дюймам.",
    longDescription:
      "Два способа задать размер, потому что на ободе написано одно, а велосипедисты говорят другое. ETRTO даёт посадочный диаметр обода и ширину покрышки в миллиметрах, и диаметр колеса равен ободу плюс ДВЕ ширины — покрышка стоит и сверху, и снизу. Дюймовый размер — округлённое наследие, поэтому «26 дюймов» и ETRTO 559 дают разные числа: считается именно то, что введено. Длина окружности нужна велокомпьютеру и калькулятору передач, который принимает её как вход: взять её больше неоткуда, кроме как здесь или на коробке покрышки.",
    seoTitle: "Калькулятор размера велоколеса: диаметр и длина окружности",
    seoDescription: "Посчитайте диаметр, длину окружности и обороты на километр велосипедного колеса по ETRTO или дюймам.",
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
      { name: 'etrtoRim', label: 'Посадочный диаметр обода, мм', type: 'number', defaultValue: 622, min: 0, step: 1, showIf: { field: 'mode', equals: 'etrto' } },
      { name: 'etrtoTire', label: 'Ширина покрышки, мм', type: 'number', defaultValue: 25, min: 0, step: 1, showIf: { field: 'mode', equals: 'etrto' } },
      { name: 'inches', label: 'Диаметр колеса, дюймов', type: 'number', defaultValue: 26, min: 0, step: 0.5, showIf: { field: 'mode', equals: 'inches' } },
    ],
    resultLabels: {
      "circumference": "Длина окружности",
      "diameter": "Диаметр",
      "inches": "Диаметр в дюймах",
      "revsPerKm": "Оборотов на километр",
      "radius": "Радиус",
    },
    howToUse: [
      "Посмотрите на боковину покрышки: ETRTO — это два числа вида 25-622.",
      "Введите второе как обод, а первое как ширину покрышки.",
      "Или переключитесь на дюймы, если знаете только их.",
      "Используйте длину окружности для настройки велокомпьютера.",
    ],
    howItWorks:
      "В режиме ETRTO диаметр равен ободу плюс удвоенная ширина покрышки. В дюймовом режиме — дюймы, умноженные на 25,4. Длина окружности равна пи на диаметр, а обороты на километр — миллион миллиметров, делённый на неё.",
    example: "Покрышка 25-622 даёт колесо 672 мм и длину окружности 2 111,15 мм.",
    faq: [
      { q: "Где найти размер ETRTO?", a: "На боковине покрышки, двумя числами через дефис: 25-622 означает 25 мм шириной на ободе 622 мм. Это единственная маркировка размера, которая действительно стандартизована." },
      { q: "Почему ширина покрышки считается дважды?", a: "Потому что покрышка стоит с обеих сторон обода. Колесо растёт на одну ширину сверху и на одну снизу." },
      { q: "Почему дюймы и ETRTO не совпадают?", a: "Потому что дюймовые размеры — это исторические ярлыки, а не измерения. 26 дюймов — это 660,4 мм по арифметике, но 26-дюймовый MTB-обод это 559 мм: разница в покрышке и в округлении." },
      { q: "Достаточно ли точно это число для велокомпьютера?", a: "Это хорошее начало. Для настоящей точности прокатите колесо на один оборот под собственным весом и измерьте: нагруженная покрышка чуть меньше свободной." },
      { q: "Как это связано с калькулятором передач?", a: "Тот просит длину окружности колеса. Именно отсюда это число и берётся." },
    ],
    relatedCalculatorIds: ["bike-gear-ratio", "tire-size", "speed-distance-time"],
  },
};
