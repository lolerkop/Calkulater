import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { stockDurationCopyEn } from './copy.en';
import { stockDurationCopyUk } from './copy.uk';
import { stockDurationCopyDe } from './copy.de';
import { stockDurationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "stock-duration",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: stockDurationCopyEn, uk: stockDurationCopyUk, de: stockDurationCopyDe },
  referenceCases: stockDurationReferenceCases,
  publishedExample: { inputs: { stock: 30, perDay: 2, reserveDays: 0 }, expected: ["15 дней"] },
  presentation: {
    id: "stock-duration",
    name: "Калькулятор запаса продукта",
    slug: "stock-duration",
    fullPath: "/household/stock-duration/",
    category: "household",
    icon: "package",
    popularity: 41,
    isNew: false,
    shortDescription: "На сколько дней хватит запаса при известном расходе.",
    longDescription:
      "Отвечает на бытовой вопрос «на сколько хватит»: делит имеющийся запас на суточный расход. Речь о запасе товара — корма, крупы, топлива, расходников, — а не о ценных бумагах. Если задать страховой запас в днях, калькулятор дополнительно скажет, через сколько дней пора заказывать, чтобы не остаться без него в момент доставки.",
    seoTitle: "Калькулятор запаса — на сколько дней хватит",
    seoDescription: "Рассчитайте, на сколько дней хватит запаса при известном суточном расходе, и когда пора делать новый заказ.",
    h1: "Калькулятор запаса продукта",
    keywords: ["на сколько хватит запаса", "калькулятор запаса", "когда заказывать снова", "расход в день"],
    fields: [
      { name: 'stock', label: 'Запас', type: 'number', defaultValue: 30, min: 0, step: 0.1 },
      { name: 'perDay', label: 'Расход в сутки', type: 'number', defaultValue: 2, min: 0, step: 0.1 },
      { name: 'reserveDays', label: 'Страховой запас, дней', type: 'number', defaultValue: 0, min: 0, step: 1, optional: true },
    ],
    resultLabels: {
      "days": "Хватит на",
      "order": "Заказать через",
      "perDay": "Расход в сутки",
    },
    howToUse: ["Введите имеющийся запас в удобных вам единицах.", "Укажите суточный расход в тех же единицах.", "При желании задайте страховой запас в днях."],
    howItWorks: "Срок = запас ÷ расход в сутки. Момент заказа = срок − страховой запас в днях.",
    example: "30 кг корма при расходе 2 кг в сутки хватит на 15 дней.",
    faq: [
      { q: "В каких единицах вводить запас?", a: "В любых, лишь бы запас и расход были в одних и тех же. Килограммы, литры, штуки — калькулятор делит одно на другое и работает с отношением." },
      { q: "Что такое страховой запас в днях?", a: "Это срок, который вы хотите иметь в запасе к моменту прихода новой партии, — обычно время доставки плюс небольшой буфер. Заказывать нужно раньше на эти дни." },
      { q: "Учитывается ли неравномерный расход?", a: "Нет, расход считается постоянным. При сезонных скачках берите средний расход пикового периода, а не годовой." },
      { q: "Речь о товарном запасе или об акциях?", a: "О товарном: корм, крупа, топливо, расходники. Финансовые бумаги здесь ни при чём." },
    ],
    relatedCalculatorIds: ["price-per-unit", "electricity-usage", "trip-cost"],
  },
};
