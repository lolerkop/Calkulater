import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { convertCookingWeightCopyEn } from './copy.en';
import { convertCookingWeightCopyUk } from './copy.uk';
import { convertCookingWeightCopyDe } from './copy.de';
import { convertCookingWeightCopyEs } from './copy.es';
import { convertCookingWeightReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "convert-cooking-weight",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: convertCookingWeightCopyEn, uk: convertCookingWeightCopyUk, de: convertCookingWeightCopyDe, es: convertCookingWeightCopyEs },
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
    isNew: false,
    shortDescription: "Стаканы, ложки и миллилитры в граммы — и обратно — для выбранного продукта.",
    longDescription:
      "Переводит выбранный кухонный объём в приблизительную массу и обратно по заданной плотности продукта. Плотность показана в результате и не является измерением вашей порции. Чашка этого калькулятора — 240 мл; сверяйте фактический объём мерной посуды и соглашение рецепта.",
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
    disclaimer: "Приближённый пересчёт с фиксированными плотностями. Чашка выбрана как 240 мл; для точной массы взвесьте продукт.",
    howToUse: [
      "Выберите продукт — именно плотность делает объём весом.",
      "Выберите единицу, которой меряете.",
      "Введите количество.",
      "Смените направление, если у вас граммы, а нужен объём."
    ],
    howItWorks:
      "Количество переводится в миллилитры множителем единицы и умножается на плотность продукта. В обратном направлении граммы делятся на плотность и переводятся назад в выбранную единицу.",
    example: "При принятой плотности муки 0,53 г/мл одна чашка 240 мл даёт оценку 127,2 г.",
    faq: [
      {
        "q": "Как понимать массы воды, муки и мёда?",
        "a": "Это оценки при плотностях модели: чашка 240 мл даёт 240 г воды при 1 г/мл, 127,2 г муки при 0,53 г/мл и 340,8 г мёда при 1,42 г/мл. Фактическая масса может отличаться."
      },
      {
        "q": "Насколько точны плотности?",
        "a": "Это фиксированные приблизительные значения, а не проверка конкретного продукта. Состав, влажность и способ наполнения меняют массу порции; точную массу определяют взвешиванием."
      },
      {
        "q": "Какой стакан используется?",
        "a": "Здесь выбрана чашка 240 мл. Такая величина используется, например, для пищевой маркировки FDA. Она отличается от метрической чашки 250 мл и американской обычной чашки около 236,59 мл; слово cup само по себе не определяет объём."
      },
      {
        "q": "Можно перевести граммы обратно в стаканы?",
        "a": "Да, смените направление. Используется та же плотность, поэтому перевод туда и обратно возвращает исходное число."
      },
      {
        "q": "Почему просто не взвесить?",
        "a": "Взвесьте, если есть весы. Это для рецептов в стаканах, когда у вас граммы, или наоборот."
      }
    ],
    relatedCalculatorIds: ["convert-cooking-volume", "convert-mass", "recipe-scale"],
  },
};
