import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { fractionArithCopyEn } from './copy.en';
import { fractionArithCopyUk } from './copy.uk';
import { fractionArithReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "fraction-arith",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: fractionArithCopyEn, uk: fractionArithCopyUk },
  referenceCases: fractionArithReferenceCases,
  publishedExample: { inputs: { op: 'add', a: 1, b: 2, c: 1, d: 3 }, expected: ["5/6"] },
  presentation: {
    id: "fraction-arith",
    name: "Калькулятор дробей",
    slug: "fractions",
    fullPath: "/math/fractions/",
    category: "math",
    icon: "divide",
    popularity: 48,
    isNew: true,
    shortDescription: "Сложение, вычитание, умножение и деление дробей с точным сокращением.",
    longDescription:
      "Считает дроби точно, целыми числами, без перевода в десятичные. Это принципиально: одна треть в десятичной записи не представима, и любое округление по пути делает 1/3 + 2/3 равным 0,99999… вместо единицы. Здесь числитель и знаменатель остаются целыми до самого конца, результат сокращается на наибольший общий делитель, а знак выносится в числитель. Десятичное значение показывается рядом — как справка, а не как основа расчёта.",
    seoTitle: "Калькулятор дробей — сложение, вычитание, умножение, деление",
    seoDescription: "Складывайте, вычитайте, умножайте и делите обыкновенные дроби с точным результатом и автоматическим сокращением.",
    h1: "Калькулятор дробей",
    keywords: ["калькулятор дробей", "сложение дробей", "деление дробей", "сократить дробь"],
    fields: [
      {
        name: 'op', label: 'Действие', type: 'select', defaultValue: 'add',
        options: [
          { value: 'add', label: 'сложение' },
          { value: 'sub', label: 'вычитание' },
          { value: 'mul', label: 'умножение' },
          { value: 'div', label: 'деление' },
        ],
      },
      { name: 'a', label: 'Числитель первой дроби', type: 'number', defaultValue: 1, min: -1000000, max: 1000000, step: 1, signed: true },
      { name: 'b', label: 'Знаменатель первой дроби', type: 'number', defaultValue: 2, min: -1000000, max: 1000000, step: 1, signed: true },
      { name: 'c', label: 'Числитель второй дроби', type: 'number', defaultValue: 1, min: -1000000, max: 1000000, step: 1, signed: true },
      { name: 'd', label: 'Знаменатель второй дроби', type: 'number', defaultValue: 3, min: -1000000, max: 1000000, step: 1, signed: true },
    ],
    resultLabels: {
      "result": "Результат",
      "decimal": "Десятичное значение",
      "mixed": "Смешанное число",
      "reduced": "Сокращено на",
    },
    howToUse: ["Выберите действие.", "Введите числители и знаменатели обеих дробей.", "Прочитайте точный сокращённый результат."],
    howItWorks: "Сложение и вычитание приводятся к общему знаменателю b·d, умножение перемножает числители и знаменатели, деление умножает на перевёрнутую вторую дробь. Результат сокращается на НОД, знак выносится в числитель.",
    example: "1/2 + 1/3 = 5/6 — точно, без промежуточного округления.",
    faq: [
      { q: "Почему нельзя просто сложить десятичные значения?", a: "Потому что одна треть в десятичной записи бесконечна. Округлив её, вы получите 1/3 + 2/3 = 0,99999… вместо единицы, и ошибка будет накапливаться дальше." },
      { q: "Сокращается ли результат автоматически?", a: "Да, на наибольший общий делитель числителя и знаменателя. 6/12 показывается как 1/2, а множитель сокращения выводится отдельной строкой." },
      { q: "Куда девается знак минус?", a: "В числитель. Запись −1/2 и 1/−2 означают одно и то же, поэтому знаменатель всегда приводится к положительному виду." },
      { q: "Есть ли ограничение на размер чисел?", a: "Да, миллион по модулю на каждое число. Так все промежуточные произведения остаются в диапазоне точных целых, и результат гарантированно не теряет точность." },
    ],
    relatedCalculatorIds: ["proportion", "percent-calculator", "divisors"],
  },
};
