import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { claddingBoardsCopyEn } from './copy.en';
import { claddingBoardsCopyUk } from './copy.uk';
import { claddingBoardsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "cladding-boards",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: claddingBoardsCopyEn, uk: claddingBoardsCopyUk },
  referenceCases: claddingBoardsReferenceCases,
  publishedExample: { inputs: { wall_area: 30, board_len: 3, board_width: 0.19, overlap: 0.02, waste: 10 }, expected: ["65 шт"] },
  presentation: {
    id: "cladding-boards",
    name: "Калькулятор обшивки стены доской",
    slug: "obshivka-doskoy",
    fullPath: "/building/obshivka-doskoy/",
    category: "building",
    icon: "layers",
    popularity: 34,
    isNew: false,
    shortDescription: "Сколько досок нужно на стену с учётом нахлёста и запаса.",
    longDescription:
      "Считает количество досок на обшивку стены внахлёст. Главная поправка — сам нахлёст: доска шириной 190 мм, положенная с перекрытием 20 мм, закрывает только 170, и расчёт «площадь стены поделить на площадь доски» занижает количество примерно на десятую часть. Отличие от расчёта досок кубометрами: там считается объём пиломатериала и его стоимость, здесь — покрытие площади, и ответ измеряется штуками и погонными метрами.",
    seoTitle: "Калькулятор обшивки стены доской — количество досок с нахлёстом",
    seoDescription: "Рассчитайте, сколько досок нужно на обшивку стены: полезная ширина с учётом нахлёста, запас на подрезку и погонные метры.",
    h1: "Калькулятор обшивки стены доской",
    keywords: ["расчёт обшивки доской", "сколько досок на стену", "калькулятор имитации бруса", "обшивка внахлёст"],
    fields: [
      { name: 'wall_area', label: 'Площадь стены, м²', type: 'number', defaultValue: 30, min: 0, step: 0.5 },
      { name: 'board_len', label: 'Длина доски, м', type: 'number', defaultValue: 3, min: 0, step: 0.1 },
      { name: 'board_width', label: 'Ширина доски, м', type: 'number', defaultValue: 0.19, min: 0, step: 0.01 },
      { name: 'overlap', label: 'Нахлёст, м', type: 'number', defaultValue: 0.02, min: 0, step: 0.005 },
      { name: 'waste', label: 'Запас на подрезку, %', type: 'number', defaultValue: 10, min: 0, max: 50, step: 1 },
    ],
    resultLabels: {
      "boards": "Досок",
      "effWidth": "Полезная ширина доски",
      "need": "Площадь с запасом",
      "coverage": "Перекроют",
      "linear": "Погонных метров доски",
      "lost": "Съедает нахлёст",
    },
    howToUse: [
      "Введите площадь стены без вычета проёмов, если хотите запас на них.",
      "Укажите длину и полную ширину доски по каталогу.",
      "Задайте нахлёст — насколько соседние доски перекрывают друг друга.",
      "Добавьте запас на подрезку: обычно от 5 до 15 %.",
    ],
    howItWorks: "Полезная ширина = ширина − нахлёст. Досок = площадь стены с запасом, делённая на произведение длины доски и полезной ширины, с округлением вверх.",
    example: "Стена 30 м², доска 3 × 0,19 м с нахлёстом 0,02 м и запасом 10 % требует 65 досок — 195 погонных метров.",
    faq: [
      { q: "Почему нельзя просто поделить площадь на площадь доски?", a: "Потому что нахлёст съедает часть каждой доски. При ширине 190 мм и перекрытии 20 мм работает только 170 мм, и без этой поправки досок не хватит примерно на десятую часть." },
      { q: "Чем это отличается от расчёта досок кубометрами?", a: "Там считают объём пиломатериала и его стоимость. Здесь считают покрытие площади с учётом перекрытия, и ответ — штуки и погонные метры." },
      { q: "Какой нахлёст брать?", a: "У имитации бруса и вагонки он задан профилем шипа и обычно 10–20 мм. У простой доски внахлёст его выбирают сами, чаще 20–30 мм." },
      { q: "Вычитать ли окна и двери?", a: "Можно вычесть, но тогда запас лучше поднять: короткие обрезки над проёмами и под ними редко идут в дело целиком." },
    ],
    relatedCalculatorIds: ["board-volume", "wood-weight", "drywall"],
  },
};
