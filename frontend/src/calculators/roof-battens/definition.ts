import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { roofBattensCopyEn } from './copy.en';
import { roofBattensCopyUk } from './copy.uk';
import { roofBattensCopyDe } from './copy.de';
import { roofBattensReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "roof-battens",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: roofBattensCopyEn, uk: roofBattensCopyUk, de: roofBattensCopyDe },
  referenceCases: roofBattensReferenceCases,
  publishedExample: { inputs: { area: 60, step: 0.35, battenLength: 6, sectionWidth: 50, sectionHeight: 50, waste: 10 }, expected: ["188,57 м"] },
  presentation: {
    id: "roof-battens",
    name: "Калькулятор обрешётки",
    slug: "obreshetka",
    fullPath: "/building/obreshetka/",
    category: "building",
    icon: "layers",
    popularity: 45,
    isNew: false,
    shortDescription: "Погонные метры, бруски и объём древесины для обрешётки крыши.",
    longDescription:
      "Считает обрешётку по площади крыши, а не по её длине, потому что именно шаг решает, сколько погонных метров забирает каждый квадратный метр. Это отношение — единица, делённая на шаг, — выводится отдельной строкой, потому что им и пользуются при прикидке на месте. Бруски округляются вверх: доску продают целиком. Объём берётся из погонных метров и сечения в миллиметрах — именно так заказывают пиломатериал, кубометрами, а не штуками.",
    seoTitle: "Калькулятор обрешётки крыши: метры, бруски и объём",
    seoDescription: "Посчитайте погонные метры, число брусков и объём древесины для обрешётки крыши по площади и шагу.",
    h1: "Калькулятор обрешётки крыши",
    keywords: ["расчёт обрешётки", "шаг обрешётки", "объём древесины на крышу", "брусков на квадратный метр"],
    fields: [
      { name: 'area', label: 'Площадь крыши, м²', type: 'number', defaultValue: 60, min: 0, step: 1 },
      { name: 'step', label: 'Шаг обрешётки, м', type: 'number', defaultValue: 0.35, min: 0, step: 0.05 },
      { name: 'battenLength', label: 'Длина бруска, м', type: 'number', defaultValue: 6, min: 0, step: 0.5 },
      { name: 'sectionWidth', label: 'Ширина сечения, мм', type: 'number', defaultValue: 50, min: 0, step: 5 },
      { name: 'sectionHeight', label: 'Высота сечения, мм', type: 'number', defaultValue: 50, min: 0, step: 5 },
      { name: 'waste', label: 'Запас, %', type: 'number', defaultValue: 10, min: 0, max: 50, step: 1 },
    ],
    resultLabels: {
      "running": "Погонных метров",
      "pieces": "Брусков",
      "volume": "Объём древесины",
      "area": "Площадь крыши",
      "step": "Шаг обрешётки",
      "perM2": "Метров на квадратный метр",
    },
    howToUse: [
      "Введите площадь крыши — именно ската, а не застройки.",
      "Введите шаг обрешётки, которого требует ваше покрытие.",
      "Введите длину и сечение брусков, которые покупаете.",
      "Добавьте запас на резы и стыки.",
    ],
    howItWorks:
      "Погонные метры — это площадь, делённая на шаг, плюс запас. Брусков — эта длина, делённая на один брусок и округлённая вверх, а объём — погонные метры на сечение.",
    example: "60 м² с шагом 350 мм и запасом 10 % забирают 188,57 м, то есть 32 шестиметровых бруска.",
    faq: [
      { q: "Брать площадь крыши или площадь застройки?", a: "Площадь крыши — настоящую поверхность ската. Крыша под 30° примерно на 15 % больше здания, которое она накрывает, и калькулятор площади крыши даст это число." },
      { q: "Какой шаг выбрать?", a: "Его задаёт покрытие: черепица привязывает шаг к собственному шагу волны, металлический лист обычно 350–500 мм, а мягкие покрытия требуют сплошного настила вместо обрешётки." },
      { q: "Зачем нужен объём?", a: "Потому что пиломатериал стоит и поставляется кубометрами. Погонные метры говорят, что класть; объём — что заказывать." },
      { q: "Учтена ли контробрешётка?", a: "Нет. Если крыша имеет вентилируемый зазор, контробрешётка идёт поперёк с шагом стропил и считается отдельно." },
      { q: "Почему бруски округляются вверх?", a: "Округление происходит один раз: длина делится на один брусок. Каждый рез оставляет обрезок — именно на него и идёт запас." },
    ],
    relatedCalculatorIds: ["roof-area", "rafters", "board-volume"],
  },
};
