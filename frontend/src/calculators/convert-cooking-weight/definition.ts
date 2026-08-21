import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { convertCookingWeightCopyEn } from './copy.en';
import { convertCookingWeightCopyUk } from './copy.uk';
import { convertCookingWeightReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "convert-cooking-weight",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: convertCookingWeightCopyEn, uk: convertCookingWeightCopyUk },
  referenceCases: convertCookingWeightReferenceCases,
  publishedExample: { inputs: { value: 1, unit: 'cup', product: 'flour', direction: 'toGrams' }, expected: ["127,2"] },
  presentation: {
    id: "convert-cooking-weight",
    name: "Конвертер кулинарного веса",
    slug: "kulinarnyy-ves",
    fullPath: "/converters/kulinarnyy-ves/",
    category: "converters",
    icon: "shopping-basket",
    popularity: 50,
    isNew: true,
    shortDescription: "Стаканы, ложки и миллилитры в граммы — и обратно — для выбранного продукта.",
    longDescription:
      "Переводит кухонный объём в вес, для чего нужно не только число, но и продукт: стакан муки и стакан мёда различаются почти втрое. Плотности — это маленькая таблица, принадлежащая самому калькулятору, и использованная плотность всегда выводится отдельной строкой: число без неё не было бы числом, которое можно проверить. Стакан здесь метрический, 240 мл, и об этом сказано вслух, а не молча предположено: американский стакан — 236,6 мл, и именно тихое расхождение между ними и портит рецепты.",
    seoTitle: "Конвертер кулинарного веса: стаканы и ложки в граммы",
    seoDescription: "Переведите стаканы, столовые ложки и миллилитры в граммы для муки, сахара, мёда и других продуктов — и обратно.",
    h1: "Конвертер кулинарного веса",
    keywords: ["стаканы в граммы", "кулинарный вес", "ложка в граммах", "объём в вес на кухне"],
    fields: [
      { name: 'value', label: 'Количество', type: 'number', defaultValue: 1, min: 0, step: 0.1 },
      {
        name: 'unit', label: 'Единица объёма', type: 'select', defaultValue: 'cup',
        options: [
          { value: 'ml', label: 'Миллилитры' },
          { value: 'l', label: 'Литры' },
          { value: 'cup', label: 'Стаканы (240 мл)' },
          { value: 'tbsp', label: 'Столовые ложки (15 мл)' },
          { value: 'tsp', label: 'Чайные ложки (5 мл)' },
        ],
      },
      {
        name: 'product', label: 'Продукт', type: 'select', defaultValue: 'flour',
        options: [
          { value: 'water', label: 'Вода' },
          { value: 'milk', label: 'Молоко' },
          { value: 'flour', label: 'Мука' },
          { value: 'sugar', label: 'Сахар' },
          { value: 'salt', label: 'Соль' },
          { value: 'rice', label: 'Рис' },
          { value: 'oil', label: 'Растительное масло' },
          { value: 'honey', label: 'Мёд' },
          { value: 'butter', label: 'Сливочное масло' },
        ],
      },
      {
        name: 'direction', label: 'Направление', type: 'select', defaultValue: 'toGrams',
        options: [
          { value: 'toGrams', label: 'Объём в граммы' },
          { value: 'toVolume', label: 'Граммы в объём' },
        ],
      },
    ],
    resultLabels: {
      "result": "Результат",
      "density": "Плотность продукта",
      "ml": "В миллилитрах",
      "source": "Исходное значение",
    },
    howToUse: [
      "Выберите продукт — именно плотность делает объём весом.",
      "Выберите единицу, которой меряете.",
      "Введите количество.",
      "Смените направление, если у вас граммы, а нужен объём.",
    ],
    howItWorks:
      "Количество переводится в миллилитры множителем единицы и умножается на плотность продукта. В обратном направлении граммы делятся на плотность и переводятся назад в выбранную единицу.",
    example: "Один метрический стакан муки при 0,53 г/мл — это 127,2 г.",
    faq: [
      { q: "Почему важен продукт?", a: "Потому что вес на миллилитр — это свойство вещества. Стакан воды весит 240 г, стакан муки около 127 г, а стакан мёда около 341 г." },
      { q: "Насколько точны плотности?", a: "Это привычные кухонные величины, и калькулятор показывает ту, которую использовал. Сыпучие продукты зависят от того, как их насыпали: мука ложкой, зачерпнутая или утрамбованная различается на четверть." },
      { q: "Какой стакан используется?", a: "Метрический, 240 мл. Если рецепт американский, его стакан — 236,6 мл, примерно на 1,4 % меньше: для выпечки это важно, для супа нет." },
      { q: "Можно перевести граммы обратно в стаканы?", a: "Да, смените направление. Используется та же плотность, поэтому перевод туда и обратно возвращает исходное число." },
      { q: "Почему просто не взвесить?", a: "Взвесьте, если есть весы. Это для рецептов в стаканах, когда у вас граммы, или наоборот." },
    ],
    relatedCalculatorIds: ["convert-cooking-volume", "convert-mass", "recipe-scale"],
  },
};
