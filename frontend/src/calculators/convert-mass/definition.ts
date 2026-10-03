// Конвертер массы. Множительное преобразование с точными имперскими константами.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { massNames, massUnits } from './units';
import { massCopyEn } from './copy.en';
import { massCopyUk } from './copy.uk';
import { massCopyDe } from './copy.de';
import { convertMassCopyEs } from './copy.es';
import { massReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-mass',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: massCopyEn, uk: massCopyUk, de: massCopyDe, es: convertMassCopyEs },
  referenceCases: massReferenceCases,
  publishedExample: { inputs: { value: 1, from: 'lb', to: 'g' }, expected: ['453,5924 г'] },
  presentation: {
    id: 'convert-mass',
    name: 'Конвертер массы',
    slug: 'convert-mass',
    fullPath: '/converters/convert-mass/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 57,
    isNew: false,
    shortDescription: 'Перевод массы между метрическими и имперскими единицами.',
    longDescription:
      "Переводит массу между миллиграммами, граммами, килограммами, тоннами, унциями, фунтами и стоунами. Коэффициенты единиц определены точно; вычисление и вывод результата имеют конечную точность.",
    seoTitle: 'Конвертер массы — килограммы, фунты, унции',
    seoDescription:
      'Перевод массы между миллиграммами, граммами, килограммами, тоннами, унциями, фунтами и стоунами.',
    h1: 'Конвертер массы',
    keywords: ['конвертер массы', 'кг в фунты', 'унции в граммы'],
    fields: [
      { name: 'value', label: 'Масса', type: 'number', defaultValue: 1, min: 0 },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'kg', options: unitOptions(massUnits, massNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'lb', options: unitOptions(massUnits, massNames) },
    ],
    resultLabels: { result: 'Результат' },
    disclaimer: "Результат — округлённый перевод единиц. Проверьте введённое значение и выбранные единицы.",
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: "У каждой единицы задан точный множитель к килограмму, и перевод идёт через эту базу.",
    example: "Фунт равен ровно 453,59237 грамма, а стоун — четырнадцати фунтам.",
    faq: [
      {
        "q": "Точен ли перевод фунтов?",
        "a": "Фунт авердюпуа определён точно: 1 lb = 0,45359237 кг. Однако вычисление с конечной точностью и округление вывода могут сокращать число показанных знаков."
      },
      {
        "q": "Чем отличается унция от тройской унции?",
        "a": "Здесь используется унция авердюпуа — обычная торговая. Тройская унция для драгоценных металлов тяжелее и в этот конвертер не входит."
      },
      {
        "q": "Что такое стоун?",
        "a": "Британская единица в 14 фунтов, около 6,35 кг. Ей до сих пор измеряют вес человека в Великобритании и Ирландии."
      },
      {
        "q": "Масса и вес — одно и то же?",
        "a": "В быту да, но строго говоря вес зависит от силы тяжести. Конвертер работает с массой."
      }
    ],
    relatedCalculatorIds: ['convert-volume', 'convert-length', 'convert-power'],
  },
};
