import {contextualField} from './contextualField';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { numberScaleNamesCopyEn } from './copy.en';
import { numberScaleNamesCopyUk } from './copy.uk';
import { numberScaleNamesCopyDe } from './copy.de';
import { numberScaleNamesCopyEs } from './copy.es';
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
  contextualField,
  copy: { en: numberScaleNamesCopyEn, uk: numberScaleNamesCopyUk, de: numberScaleNamesCopyDe, es: numberScaleNamesCopyEs },
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
    seoTitle: "Лакхи и кроры в миллионы — калькулятор шкал чисел",
    seoDescription: "Переведите лакхи и кроры в тысячи, миллионы и миллиарды и обратно, с показом величины сразу в трёх шкалах.",
    h1: "Калькулятор лакхов и кроров",
    keywords: ["лакх", "крор", "лакхи в миллионы", "индийская система чисел"],
    fields: [
      { name: 'value', unit: 'ед. выбранной шкалы', label: 'Значение', type: 'number', defaultValue: 25, min: 0, step: 1 },
      { name: 'from', label: 'Из шкалы', type: 'select', defaultValue: 'lakh', options: SCALE_OPTIONS },
      { name: 'to', label: 'В шкалу', type: 'select', defaultValue: 'million', options: SCALE_OPTIONS },
    ],
    resultLabels: {
      "result": "Результат", "inUnits": "В единицах", "inLakh": "В лакхах",
      "inCrore": "В крорах", "ratio": "Отношение шкал",
    },
    relatedCalculatorIds: ["number-to-words", "convert-digital", "roman-numerals"],
    ...contractContent.ru,
  },
};
