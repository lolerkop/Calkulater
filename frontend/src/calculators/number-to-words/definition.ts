import {validate} from './validate';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { numberToWordsCopyEn } from './copy.en';
import { numberToWordsCopyUk } from './copy.uk';
import { numberToWordsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "number-to-words",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: numberToWordsCopyEn, uk: numberToWordsCopyUk },
  referenceCases: numberToWordsReferenceCases,
  publishedExample: { inputs: { value: 1234 }, expected: ["одна тысяча двести тридцать четыре"] },
  presentation: {
    id: "number-to-words",
    name: "Число прописью",
    slug: "chislo-propisyu",
    fullPath: "/converters/chislo-propisyu/",
    category: "converters",
    icon: "type",
    popularity: 39,
    isNew: false,
    shortDescription: "Запись целого числа словами; денежная строка фиксирована в RUB с00 копеек.",
    seoTitle: "Число прописью — запись числа словами онлайн",
    seoDescription: "Запишите целое число словами: от минус999 999 999 999 до999 999 999 999. Денежная строка фиксирована в рублях RUB с00 копеек.",
    h1: "Число прописью",
    keywords: ["число прописью", "сумма прописью", "число словами", "запись числа словами"],
    fields: [
      { name: 'value', label: 'Число', type: 'number', defaultValue: 1234, signed: true, step: 1 },
    ],
    resultLabels: {
      "words": "Прописью",
      "money": "Сумма прописью",
      "digits": "Цифрами",
      "triads": "Триад в записи",
      "digitCount": "Знаков в числе",
    },
    relatedCalculatorIds: ["coordinate-convert", "roman-numerals", "text-word-char-count"],
    ...contractContent.ru,
  },
};
