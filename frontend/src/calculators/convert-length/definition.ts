// Конвертер длины — первый сентинел движка конвертеров.
// Чисто множительное преобразование с самым большим набором единиц в волне.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { lengthNames, lengthUnits } from './units';
import { lengthCopyEn } from './copy.en';
import { lengthCopyUk } from './copy.uk';
import { lengthCopyDe } from './copy.de';
import { convertLengthCopyEs } from './copy.es';
import { lengthReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-length',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: lengthCopyEn, uk: lengthCopyUk, de: lengthCopyDe, es: convertLengthCopyEs },
  referenceCases: lengthReferenceCases,
  publishedExample: { inputs: { value: 1, from: 'in', to: 'cm' }, expected: ['2,5400 см'] },
  presentation: {
    id: 'convert-length',
    name: 'Конвертер длины',
    slug: 'convert-length',
    fullPath: '/converters/convert-length/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 60,
    isNew: false,
    shortDescription: 'Перевод длины между метрическими и имперскими единицами.',
    longDescription:
      "Переводит длину между метрическими и имперскими единицами: миллиметры, сантиметры, метры, километры, дюймы, футы, ярды, мили и морские мили. Коэффициенты единиц определены точно; вычисление и вывод результата имеют конечную точность.",
    seoTitle: 'Конвертер длины — метры, футы, дюймы, мили',
    seoDescription:
      'Перевод длины между метрами, сантиметрами, километрами, дюймами, футами, ярдами, милями и морскими милями.',
    h1: 'Конвертер длины',
    keywords: ['конвертер длины', 'метры в футы', 'дюймы в см'],
    fields: [
      { name: 'value', label: 'Значение', type: 'number', defaultValue: 1, min: 0 },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'm', options: unitOptions(lengthUnits, lengthNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'ft', options: unitOptions(lengthUnits, lengthNames) },
    ],
    resultLabels: { result: 'Результат' },
    disclaimer: "Результат — округлённый перевод единиц. Проверьте введённое значение и выбранные единицы.",
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: "У каждой единицы задан точный множитель к метру, и перевод идёт через эту базу.",
    example: "Дюйм равен ровно 2,54 см, а миля — ровно 1609,344 м.",
    faq: [
      {
        "q": "Точны ли переводы имперских единиц?",
        "a": "Использованы международные определения: 1 дюйм = 0,0254 м, 1 фут = 0,3048 м. Коэффициенты точны по определению, но численный вывод округляется. Исторический американский геодезический фут сюда не входит."
      },
      {
        "q": "Что такое морская миля?",
        "a": "Ровно 1852 метра, используется в морской и воздушной навигации. Она длиннее сухопутной мили в 1609,344 м."
      },
      {
        "q": "Работает ли конвертер в обе стороны?",
        "a": "Да. Поменяйте местами исходную и целевую единицу, и перевод пойдёт в обратном направлении."
      },
      {
        "q": "Почему одинаковые единицы возвращают значение без изменений?",
        "a": "Перевод единицы в саму себя не идёт через базу, поэтому не возникает погрешности плавающей арифметики."
      }
    ],
    relatedCalculatorIds: ['convert-area', 'convert-volume', 'convert-mass'],
  },
};
