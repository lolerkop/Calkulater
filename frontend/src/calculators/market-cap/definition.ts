import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { marketCapCopyEn } from './copy.en';
import { marketCapCopyUk } from './copy.uk';
import { marketCapCopyDe } from './copy.de';
import { marketCapReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "market-cap",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: marketCapCopyEn, uk: marketCapCopyUk, de: marketCapCopyDe },
  referenceCases: marketCapReferenceCases,
  publishedExample: { inputs: { mode: 'cap', shares: 1000000, price: 250 }, expected: ["250 000 000,00 ₽"] },
  presentation: {
    id: "market-cap",
    name: "Калькулятор рыночной капитализации",
    slug: "market-cap",
    fullPath: "/finance/market-cap/",
    category: "finance",
    icon: "building-2",
    popularity: 43,
    isNew: false,
    shortDescription: "Рыночная капитализация компании по числу акций и цене одной акции.",
    longDescription:
      "Считает рыночную капитализацию — число акций в обращении, умноженное на цену одной. Это то, во сколько рынок оценивает компанию целиком, и по этому числу компании относят к крупным, средним или малым. Обратный ход даёт цену акции по известной капитализации. Важно, что капитализация — не стоимость бизнеса: она не учитывает долг и денежные средства, для этого есть отдельный показатель.",
    seoTitle: "Калькулятор рыночной капитализации — акции × цена",
    seoDescription: "Рассчитайте рыночную капитализацию компании по числу акций в обращении и цене акции или найдите цену по капитализации.",
    h1: "Калькулятор рыночной капитализации",
    keywords: ["калькулятор капитализации", "рыночная капитализация", "капитализация компании"],
    fields: [
      {
        name: 'mode', label: 'Что нужно найти', type: 'select', defaultValue: 'cap',
        options: [
          { value: 'cap', label: 'капитализацию' },
          { value: 'price', label: 'цену акции' },
        ],
      },
      { name: 'shares', label: 'Акций в обращении, шт', type: 'number', defaultValue: 1000000, min: 0, step: 1000 },
      { name: 'price', label: 'Цена одной акции, ₽', type: 'number', defaultValue: 250, min: 0, step: 0.01, showIf: { field: 'mode', equals: 'cap' } },
      { name: 'cap', label: 'Капитализация, ₽', type: 'number', defaultValue: 250000000, min: 0, step: 1000, showIf: { field: 'mode', equals: 'price' } },
    ],
    resultLabels: {
      "cap": "Капитализация",
      "price": "Цена одной акции",
      "shares": "Акций в обращении",
    },
    howToUse: ["Выберите, что нужно найти.", "Введите число акций и вторую известную величину.", "Прочитайте результат."],
    howItWorks: "Капитализация = число акций в обращении × цена одной акции; отсюда цена = капитализация ÷ число акций.",
    example: "Миллион акций по 250 ₽ дают капитализацию 250 000 000 ₽.",
    faq: [
      { q: "Капитализация — это стоимость компании?", a: "Не совсем. Это оценка её акций рынком. Стоимость бизнеса дополнительно учитывает долг и денежные средства, и для неё используется другой показатель." },
      { q: "Какие акции считать — все выпущенные или в обращении?", a: "В обращении. Выкупленные компанией акции в расчёт капитализации обычно не входят, поэтому число берут из отчётности, а не из устава." },
      { q: "Меняется ли капитализация в течение дня?", a: "Да, вместе с ценой акции. Расчёт даёт снимок на введённую цену и не подтягивает котировки." },
      { q: "Что такое разводнённая капитализация?", a: "Оценка с учётом будущих акций — опционов и конвертируемых бумаг. Здесь она не считается: используется текущее число акций в обращении." },
    ],
    relatedCalculatorIds: ["dividend-yield", "roi", "cagr"],
  },
};
