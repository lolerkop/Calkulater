import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { brewRatioCopyEn } from './copy.en';
import { brewRatioCopyUk } from './copy.uk';
import { brewRatioReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "brew-ratio",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: brewRatioCopyEn, uk: brewRatioCopyUk },
  referenceCases: brewRatioReferenceCases,
  publishedExample: { inputs: { mode: 'coffee', water: 500, coffee: 30, ratio: 16 }, expected: ["31,25 г"] },
  presentation: {
    id: "brew-ratio",
    name: "Калькулятор соотношения кофе и воды",
    slug: "sootnoshenie-kofe-i-vody",
    fullPath: "/household/sootnoshenie-kofe-i-vody/",
    category: "household",
    icon: "shopping-basket",
    popularity: 36,
    isNew: false,
    shortDescription: "Сколько кофе на объём воды при заданном соотношении заварки.",
    longDescription:
      "Решает уравнение заварки в любую сторону: считает массу кофе под объём воды, объём воды под навеску или само соотношение по уже сваренной чашке. Соотношение записывается как 1:16 и означает граммы кофе на миллилитры воды. Отличие от пересчёта рецепта по порциям: там масштабируется весь список ингредиентов, здесь связаны ровно две величины, и обратная задача — «какое соотношение у меня получилось» — так же законна, как прямая.",
    seoTitle: "Калькулятор соотношения кофе и воды — навеска под объём",
    seoDescription: "Рассчитайте, сколько кофе нужно на заданный объём воды при соотношении 1:15, 1:16 или 1:18, или найдите соотношение по своей чашке.",
    h1: "Калькулятор соотношения кофе и воды",
    keywords: ["соотношение кофе и воды", "сколько кофе на 500 мл", "пропорция кофе воронка", "калькулятор заварки кофе"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'coffee',
        options: [
          { value: 'coffee', label: 'массу кофе' },
          { value: 'water', label: 'объём воды' },
          { value: 'ratio', label: 'соотношение' },
        ],
      },
      { name: 'water', label: 'Вода, мл', type: 'number', defaultValue: 500, min: 0, step: 10 },
      { name: 'coffee', label: 'Кофе, г', type: 'number', defaultValue: 30, min: 0, step: 0.5 },
      { name: 'ratio', label: 'Соотношение 1:k', type: 'number', defaultValue: 16, min: 0, step: 0.5 },
    ],
    resultLabels: {
      "coffee": "Кофе",
      "water": "Вода",
      "ratio": "Соотношение",
      "absorbed": "Гуща заберёт воды",
    },
    howToUse: [
      "Выберите, что ищете: навеску, объём воды или соотношение.",
      "Введите две известные величины — третья станет только для чтения.",
      "Для фильтра и воронки берите 1:15–1:17, для френч-пресса 1:12–1:15.",
      "Учтите строку про гущу: часть воды в чашку не попадёт.",
    ],
    howItWorks: "Вода = кофе × k, кофе = вода ÷ k, k = вода ÷ кофе. Миллилитр воды принимается за грамм: при температуре заварки расхождение меньше трёх процентов.",
    example: "500 мл воды при соотношении 1:16 требуют 31,25 г кофе.",
    faq: [
      { q: "Какое соотношение брать?", a: "Для воронки и фильтра обычно 1:15–1:17, для френч-пресса гуще — 1:12–1:15. Чем крупнее помол и короче контакт, тем меньше k." },
      { q: "Почему в чашке меньше, чем налито воды?", a: "Потому что молотый кофе удерживает примерно два грамма воды на грамм навески. Строка про гущу показывает эту потерю." },
      { q: "Чем это отличается от пересчёта рецепта по порциям?", a: "Там масштабируется весь список ингредиентов под другое число порций. Здесь связаны ровно две величины, и решать можно в любую сторону." },
      { q: "Считать воду в граммах или миллилитрах?", a: "Разницы почти нет: при температуре заварки миллилитр воды весит около грамма, и расхождение меньше погрешности бытовых весов." },
    ],
    relatedCalculatorIds: ["recipe-scale", "recipe-cost", "price-per-unit"],
  },
};
