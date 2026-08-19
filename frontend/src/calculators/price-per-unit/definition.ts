import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { pricePerUnitCopyEn } from './copy.en';
import { pricePerUnitCopyUk } from './copy.uk';
import { pricePerUnitReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "price-per-unit",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: pricePerUnitCopyEn, uk: pricePerUnitCopyUk },
  referenceCases: pricePerUnitReferenceCases,
  publishedExample: { inputs: { mode: 'single', unit: 'kg', price: 150, amount: 0.5 }, expected: ["300,00 ₽ за кг"] },
  presentation: {
    id: "price-per-unit",
    name: "Калькулятор цены за единицу",
    slug: "price-per-unit",
    fullPath: "/household/price-per-unit/",
    category: "household",
    icon: "shopping-basket",
    popularity: 47,
    isNew: true,
    shortDescription: "Цена за килограмм, литр или штуку и сравнение двух упаковок.",
    longDescription:
      "Приводит цену упаковки к цене за единицу — за килограмм, литр или штуку — и сравнивает два варианта между собой. Это тот расчёт, который магазин делает неудобным: 150 ₽ за 500 г и 260 ₽ за килограмм выглядят сопоставимо, хотя первая упаковка дороже на 15 %. Сравнение показывает обе удельные цены и переплату, а не только победителя.",
    seoTitle: "Калькулятор цены за единицу — сравнение упаковок",
    seoDescription: "Рассчитайте цену за килограмм, литр или штуку и сравните две упаковки, чтобы понять, какая выгоднее.",
    h1: "Калькулятор цены за единицу",
    keywords: ["цена за единицу", "цена за килограмм", "сравнить упаковки", "что выгоднее купить"],
    fields: [
      {
        name: 'mode', label: 'Что делаем', type: 'select', defaultValue: 'single',
        options: [
          { value: 'single', label: 'цена за единицу' },
          { value: 'compare', label: 'сравнить две упаковки' },
        ],
      },
      {
        name: 'unit', label: 'Единица', type: 'select', defaultValue: 'kg',
        options: [
          { value: 'kg', label: 'килограмм' },
          { value: 'l', label: 'литр' },
          { value: 'pcs', label: 'штука' },
        ],
      },
      { name: 'price', label: 'Цена упаковки, ₽', type: 'number', defaultValue: 150, min: 0, step: 1, showIf: { field: 'mode', equals: 'single' } },
      { name: 'amount', label: 'Количество в упаковке', type: 'number', defaultValue: 0.5, min: 0, step: 0.01, showIf: { field: 'mode', equals: 'single' } },
      { name: 'priceA', label: 'Цена упаковки A, ₽', type: 'number', defaultValue: 150, min: 0, step: 1, showIf: { field: 'mode', equals: 'compare' } },
      { name: 'amountA', label: 'Количество в упаковке A', type: 'number', defaultValue: 0.5, min: 0, step: 0.01, showIf: { field: 'mode', equals: 'compare' } },
      { name: 'priceB', label: 'Цена упаковки B, ₽', type: 'number', defaultValue: 260, min: 0, step: 1, showIf: { field: 'mode', equals: 'compare' } },
      { name: 'amountB', label: 'Количество в упаковке B', type: 'number', defaultValue: 1, min: 0, step: 0.01, showIf: { field: 'mode', equals: 'compare' } },
    ],
    resultLabels: {
      "unitPrice": "Цена за единицу",
      "a": "Упаковка A",
      "b": "Упаковка B",
      "cheaper": "Выгоднее",
      "overpay": "Переплата за единицу",
    },
    howToUse: ["Выберите единицу измерения товара.", "Введите цену и количество в упаковке.", "Для сравнения переключитесь в режим двух упаковок."],
    howItWorks: "Цена за единицу = цена упаковки ÷ количество в ней. При сравнении обе удельные цены считаются одинаково, и разница показывается как переплата за единицу.",
    example: "150 ₽ за 500 г — это 300 ₽ за кг, дороже килограммовой упаковки за 260 ₽.",
    faq: [
      { q: "Зачем приводить цену к единице?", a: "Потому что упаковки редко бывают одинаковыми, и сравнить их «на глаз» нельзя. Приведение к килограмму или литру делает цены сопоставимыми." },
      { q: "Что вводить в поле количества?", a: "Количество в тех единицах, которые выбраны выше: для граммов переведите в килограммы, для миллилитров — в литры." },
      { q: "Что показывает переплата?", a: "На сколько дороже обходится единица товара в менее выгодной упаковке. Умножив её на нужный объём, вы увидите переплату целиком." },
      { q: "Учитываются ли скидки и акции?", a: "Нет, вводите итоговую цену, которую платите на кассе. Скидка уже должна быть в ней учтена." },
    ],
    relatedCalculatorIds: ["discount-calculator", "shipping-per-unit", "stock-duration"],
  },
};
