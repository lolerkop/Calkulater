import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { numberScaleNamesCopyEn } from './copy.en';
import { numberScaleNamesCopyUk } from './copy.uk';
import { numberScaleNamesReferenceCases } from './referenceCases';

const SCALE_OPTIONS = [
  { value: 'unit', label: 'единицы' },
  { value: 'thousand', label: 'тысячи' },
  { value: 'lakh', label: 'лакхи' },
  { value: 'million', label: 'миллионы' },
  { value: 'crore', label: 'кроры' },
  { value: 'billion', label: 'миллиарды' },
];

export const definition: CalculatorDefinitionV2 = {
  id: "number-scale-names",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: numberScaleNamesCopyEn, uk: numberScaleNamesCopyUk },
  referenceCases: numberScaleNamesReferenceCases,
  publishedExample: { inputs: { value: 25, from: 'lakh', to: 'million' }, expected: ["2,5"] },
  presentation: {
    id: "number-scale-names",
    name: "Калькулятор лакхов и кроров",
    slug: "lakh-i-kror",
    fullPath: "/converters/lakh-i-kror/",
    category: "converters",
    icon: "sigma",
    popularity: 33,
    isNew: false,
    shortDescription: "Перевод между лакхами, крорами и привычными тысячами и миллионами.",
    longDescription:
      "В южноазиатской системе счёт идёт не тройками: после тысячи стоит лакх — сто тысяч, а после него крор — десять миллионов. Поэтому «два крора» это не два миллиона, а двадцать, и запись 1,00,00,000 группируется иначе, чем привычная 10,000,000. Калькулятор переводит в обе стороны и сразу показывает величину в единицах, в лакхах и в крорах, чтобы порядок был виден целиком.",
    seoTitle: "Лакхи и кроры в миллионы — калькулятор шкал чисел",
    seoDescription: "Переведите лакхи и кроры в тысячи, миллионы и миллиарды и обратно, с показом величины сразу в трёх шкалах.",
    h1: "Калькулятор лакхов и кроров",
    keywords: ["лакх", "крор", "лакхи в миллионы", "индийская система чисел"],
    fields: [
      { name: 'value', label: 'Значение', type: 'number', defaultValue: 25, min: 0, step: 1 },
      { name: 'from', label: 'Из шкалы', type: 'select', defaultValue: 'lakh', options: SCALE_OPTIONS },
      { name: 'to', label: 'В шкалу', type: 'select', defaultValue: 'million', options: SCALE_OPTIONS },
    ],
    resultLabels: {
      "result": "Результат", "inUnits": "В единицах", "inLakh": "В лакхах",
      "inCrore": "В крорах", "ratio": "Отношение шкал",
    },
    howToUse: [
      "Введите число и выберите, в какой шкале оно записано.",
      "Выберите шкалу, в которую нужно перевести.",
      "Строки «в единицах», «в лакхах» и «в крорах» показывают ту же величину сразу в трёх видах.",
      "Для очень больших и очень малых значений ответ выводится с показателем степени.",
    ],
    howItWorks: "Каждая шкала — это множитель к единице: тысяча 10³, лакх 10⁵, миллион 10⁶, крор 10⁷, миллиард 10⁹.",
    example: "25 лакхов — это 2,5 миллиона, то есть 2 500 000.",
    faq: [
      { q: "Сколько это — один крор?", a: "Десять миллионов. Крор идёт после лакха, который равен ста тысячам, поэтому в кроре ровно сто лакхов." },
      { q: "Почему запись группируется иначе?", a: "Потому что после первой тройки цифры идут парами: 1,00,00,000 — это один крор. Западная запись 10,000,000 группирует всё по три." },
      { q: "Где используются эти названия?", a: "В Индии, Пакистане, Бангладеш, Непале и Шри-Ланке — в новостях, ценах на недвижимость и финансовой отчётности. Встретив их в тексте, легко ошибиться на порядок." },
      { q: "Почему у единицы в лакхах показатель степени?", a: "Одна единица — это 0,00001 лакха, а платформа переходит на показательную запись ниже 10⁻⁴, чтобы значение не превратилось в ноль при округлении." },
    ],
    relatedCalculatorIds: ["number-to-words", "convert-digital", "roman-numerals"],
  },
};
