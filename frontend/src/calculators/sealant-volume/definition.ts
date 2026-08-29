import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { sealantVolumeCopyEn } from './copy.en';
import { sealantVolumeCopyUk } from './copy.uk';
import { sealantVolumeCopyDe } from './copy.de';
import { sealantVolumeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "sealant-volume",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: sealantVolumeCopyEn, uk: sealantVolumeCopyUk, de: sealantVolumeCopyDe },
  referenceCases: sealantVolumeReferenceCases,
  publishedExample: { inputs: { width: 6, depth: 6, length: 12, cart: 310, waste: 10 }, expected: ["475,2 мл"] },
  presentation: {
    id: "sealant-volume",
    name: "Калькулятор расхода герметика",
    slug: "raskhod-germetika",
    fullPath: "/building/raskhod-germetika/",
    category: "building",
    icon: "wall",
    popularity: 28,
    isNew: false,
    shortDescription: "Расход герметика на шов заданного сечения и число картриджей.",
    longDescription:
      "Настоящий вопрос в магазине звучит не «сколько миллилитров», а «хватит ли одного картриджа». Поэтому рядом с объёмом стоит строка, сколько метров шва даёт один картридж: при сечении шесть на шесть обычный картридж проходит около восьми с половиной метров, а при десять на восемь — уже меньше четырёх. Арифметика удобная: миллиметр на миллиметр на метр даёт ровно один миллилитр.",
    seoTitle: "Калькулятор расхода герметика — объём и число картриджей",
    seoDescription: "Рассчитайте расход герметика по ширине, глубине и длине шва, узнайте число картриджей и метраж из одного картриджа.",
    h1: "Калькулятор расхода герметика",
    keywords: ["расход герметика", "герметик картридж", "сечение шва", "силиконовый герметик"],
    fields: [
      { name: 'width', label: 'Ширина шва, мм', type: 'number', defaultValue: 6, min: 0, step: 1 },
      { name: 'depth', label: 'Глубина шва, мм', type: 'number', defaultValue: 6, min: 0, step: 1 },
      { name: 'length', label: 'Длина шва, м', type: 'number', defaultValue: 12, min: 0, step: 0.5 },
      { name: 'cart', label: 'Объём картриджа, мл', type: 'number', defaultValue: 310, min: 0, step: 10 },
      { name: 'waste', label: 'Запас, %', type: 'number', defaultValue: 10, min: 0, max: 100, step: 5 },
    ],
    resultLabels: {
      "need": "Нужно герметика", "raw": "Без запаса", "cartridges": "Картриджей",
      "perCartridge": "Метров из одного картриджа", "section": "Сечение шва",
    },
    howToUse: [
      "Глубину шва обычно делают равной ширине или вдвое меньше — глубже герметик работает хуже и трескается.",
      "Стандартный картридж 310 мл, туба под пистолет 600 мл, малые упаковки 80 и 100 мл.",
      "Запас 10 процентов покрывает подрезку носика, пробный выдав и неровности шва.",
      "Для широких швов сначала ставят уплотнительный шнур: он ограничивает глубину и экономит герметик.",
    ],
    howItWorks: "Объём = ширина × глубина × длина; миллиметр на миллиметр на метр даёт ровно миллилитр; картриджи округляются вверх.",
    example: "Шов 6×6 мм длиной 12 м требует 475 мл с запасом — два картриджа по 310 мл.",
    faq: [
      { q: "Почему глубину не делают больше ширины?", a: "Герметик работает на растяжение, и слишком глубокий шов не даёт ему тянуться: он рвётся по краю. Правило простое — глубина равна ширине, а для широких швов вдвое меньше ширины." },
      { q: "Зачем нужен уплотнительный шнур?", a: "Он ограничивает глубину шва снизу и не даёт герметику прилипнуть к третьей поверхности. Шов на трёх сторонах не может свободно тянуться и трескается первым." },
      { q: "Насколько точен расход?", a: "Расчёт даёт геометрию шва. Реальный расход выше на подрезку носика, на первый неровный выдав и на то, что часть остаётся в картридже — это и покрывает запас." },
      { q: "Можно ли досчитать сколько дверей проходит один картридж?", a: "Строка «метров из одного картриджа» делает это напрямую: разделите её на периметр вашего проёма." },
    ],
    relatedCalculatorIds: ["epoxy-volume", "plaster", "paint-calculator"],
  },
};
