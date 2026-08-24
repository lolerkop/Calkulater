import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { decibelCopyEn } from './copy.en';
import { decibelCopyUk } from './copy.uk';
import { decibelReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "decibel",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: decibelCopyEn, uk: decibelCopyUk },
  referenceCases: decibelReferenceCases,
  publishedExample: { inputs: { mode: 'sum', levels: '80 80', p1: 1, p2: 2, kind: 'power' }, expected: ["83,01 дБ"] },
  presentation: {
    id: "decibel",
    name: "Калькулятор децибелов",
    slug: "decibely",
    fullPath: "/physics/decibely/",
    category: "physics",
    icon: "activity",
    popularity: 32,
    isNew: false,
    shortDescription: "Сложение уровней шума и перевод отношения величин в децибелы.",
    longDescription:
      "Уровни в децибелах не складываются арифметически, и это главное заблуждение о шуме: два источника по 80 дБ дают не 160, а 83,01 дБ. Складываются мощности, а децибел — логарифм их отношения, поэтому сумма считается через возврат к линейной шкале. Удвоение мощности всегда даёт ровно +3,01 дБ, с какого уровня ни начинай. Второй режим переводит отношение величин в децибелы, и множитель там разный: у мощности 10, у амплитуды 20, потому что мощность пропорциональна квадрату амплитуды.",
    seoTitle: "Калькулятор децибелов — сложение уровней шума и отношение в дБ",
    seoDescription: "Сложите уровни шума нескольких источников по правилам логарифмической шкалы и переведите отношение мощностей или амплитуд в децибелы.",
    h1: "Калькулятор децибелов",
    keywords: ["децибелы", "сложение уровней шума", "перевод в дБ", "отношение мощностей"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'sum',
        options: [
          { value: 'sum', label: 'сумму уровней' },
          { value: 'ratio', label: 'отношение в децибелах' },
        ],
      },
      { name: 'levels', label: 'Уровни через пробел, дБ', type: 'textarea', defaultValue: '80 80', placeholder: '80 75 68', showIf: { field: 'mode', equals: 'sum' } },
      { name: 'p1', label: 'Исходная величина', type: 'number', defaultValue: 1, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'ratio' } },
      { name: 'p2', label: 'Конечная величина', type: 'number', defaultValue: 2, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'ratio' } },
      {
        name: 'kind', label: 'Тип величины', type: 'select', defaultValue: 'power',
        options: [
          { value: 'power', label: 'мощность' },
          { value: 'amplitude', label: 'амплитуда' },
        ],
        showIf: { field: 'mode', equals: 'ratio' },
      },
    ],
    resultLabels: {
      "level": "Уровень",
      "sources": "Источников",
      "loudest": "Самый громкий",
      "added": "Прибавка к самому громкому",
      "arithmetic": "Арифметическая сумма (так НЕ считают)",
      "power": "Во сколько раз по мощности",
      "amplitude": "Во сколько раз по амплитуде",
    },
    howToUse: [
      "Для суммы перечислите уровни источников через пробел: 80 75 68.",
      "Сравните ответ со строкой арифметической суммы — разница и есть суть логарифмической шкалы.",
      "Для перевода отношения выберите, мощность у вас или амплитуда: множитель разный.",
      "Отношение считается как конечная величина к исходной.",
    ],
    howItWorks: "Сумма уровней = 10·log₁₀(Σ10^(Lᵢ/10)). Отношение по мощности = 10·log₁₀(p₂/p₁), по амплитуде — 20·log₁₀(p₂/p₁).",
    example: "Два источника по 80 дБ вместе дают 83,01 дБ, а не 160.",
    faq: [
      { q: "Почему два источника по 80 дБ дают 83, а не 160?", a: "Потому что децибел — логарифм отношения мощностей, а не сама величина. Складываются мощности: две одинаковые дают удвоение, а удвоение мощности это ровно +3,01 дБ." },
      { q: "Всегда ли удвоение даёт +3 дБ?", a: "Да, и это свойство логарифма: прибавка не зависит от исходного уровня. От 40 дБ и от 100 дБ удвоение мощности одинаково добавляет 3,01 дБ." },
      { q: "Когда множитель 10, а когда 20?", a: "Десять — для мощности, интенсивности и энергии. Двадцать — для амплитуды, напряжения и звукового давления, потому что мощность пропорциональна их квадрату." },
      { q: "Можно ли так складывать громкость на слух?", a: "Нет. Расчёт складывает физические уровни. Субъективная громкость растёт медленнее: удвоение мощности слышно как небольшую прибавку, а вдвое громче ощущается примерно при +10 дБ." },
    ],
    relatedCalculatorIds: ["logarithm", "wave", "physics-power"],
  },
};
