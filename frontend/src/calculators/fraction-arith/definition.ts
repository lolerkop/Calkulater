import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { validate } from './validate';
import { fractionArithCopyEn } from './copy.en';
import { fractionArithCopyUk } from './copy.uk';
import { fractionArithCopyDe } from './copy.de';
import { fractionArithCopyEs } from './copy.es';
import { fractionArithReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "fraction-arith",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: fractionArithCopyEn, uk: fractionArithCopyUk, de: fractionArithCopyDe, es: fractionArithCopyEs },
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
    isNew: false,
    shortDescription: "Сложение, вычитание, умножение и деление дробей с точным сокращением.",
    longDescription:
      "Складывает, вычитает, умножает и делит две дроби, сохраняя целые числители и знаменатели до сокращения. Одна треть не имеет конечного десятичного представления; округление промежуточных десятичных значений может изменить ответ. Точное 1/3 + 2/3 равно 1, но это не означает, что любой численный способ обязательно даст 0,99999… Десятичная строка — округлённая справка, основным результатом остаётся точная сокращённая дробь.",
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
    faq: [{"q": "Почему нельзя просто сложить десятичные значения?", "a": "Дробная запись сохраняет точное отношение целых. Например, округлив 1/3 и 2/3 до 0,33 и 0,67, вы потеряете точность каждого слагаемого, даже если их сумма случайно останется 1. Здесь сокращение выполняется до десятичного отображения."}, {"q": "Сокращается ли результат автоматически?", "a": "Да, на наибольший общий делитель числителя и знаменателя. 6/12 показывается как 1/2, а множитель сокращения выводится отдельной строкой."}, {"q": "Куда девается знак минус?", "a": "В числитель. Запись −1/2 и 1/−2 означают одно и то же, поэтому знаменатель всегда приводится к положительному виду."}, {"q": "Есть ли ограничение на размер чисел?", "a": "Да, миллион по модулю на каждое число. Так все промежуточные произведения остаются в диапазоне точных целых, и результат гарантированно не теряет точность."}],
    disclaimer: "Каждый числитель и знаменатель — целое по модулю до 1000000. Оба знаменателя ненулевые; при делении ненулевым должен быть и числитель второй дроби. Нулевой числитель допустим. Точная дробь не округляется, десятичное значение показывается до шести знаков; при 0 < |x| < 10⁻⁶ применяется научная запись с семью значащими цифрами.",
    relatedCalculatorIds: ["proportion", "percent-calculator", "divisors"],
  },
};
