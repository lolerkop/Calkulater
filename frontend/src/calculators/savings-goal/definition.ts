import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { savingsGoalCopyEn } from './copy.en';
import { savingsGoalCopyUk } from './copy.uk';
import { savingsGoalCopyDe } from './copy.de';
import { savingsGoalReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "savings-goal",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: savingsGoalCopyEn, uk: savingsGoalCopyUk, de: savingsGoalCopyDe },
  referenceCases: savingsGoalReferenceCases,
  publishedExample: { inputs: { mode: 'payment', goal: 1000000, initial: 100000, rate: 8, years: 5, monthly: 15000 }, expected: ["11 582,09 ₽"] },
  presentation: {
    id: "savings-goal",
    name: "Калькулятор финансовой цели",
    slug: "finansovaya-cel",
    fullPath: "/finance/finansovaya-cel/",
    category: "finance",
    icon: "target",
    popularity: 49,
    isNew: false,
    shortDescription: "Сколько откладывать в месяц или за сколько цель достигается при заданном взносе.",
    longDescription:
      "Отвечает на два вопроса, которые на самом деле ставит накопительная цель: сколько в месяц или за сколько времени. Взнос решается из формулы аннуитета; срок замкнутой формы не имеет и считается помесячно, потому что взнос приходит в конце периода, а проценты начисляются на уже накопленное. Срок выводится целыми месяцами — половина месяца ничего не значит, когда платёж приходит целиком, — а цель, недостижимая за сто лет, называется недостижимой, а не показывается четырёхзначным числом месяцев.",
    seoTitle: "Калькулятор финансовой цели: взнос в месяц или срок накопления",
    seoDescription: "Посчитайте, сколько откладывать в месяц для достижения цели, или за сколько времени цель достигается при выбранном взносе.",
    h1: "Калькулятор финансовой цели",
    keywords: ["финансовая цель", "сколько откладывать в месяц", "срок накопления", "план накоплений"],
    fields: [
      {
        name: 'mode', label: 'Что посчитать', type: 'select', defaultValue: 'payment',
        options: [
          { value: 'payment', label: 'Взнос в месяц' },
          { value: 'term', label: 'За сколько накопится' },
        ],
      },
      { name: 'goal', label: 'Сумма цели', type: 'number', defaultValue: 1000000, min: 0, step: 10000 },
      { name: 'initial', label: 'Уже накоплено', type: 'number', defaultValue: 100000, min: 0, step: 10000 },
      { name: 'rate', label: 'Годовая ставка, %', type: 'number', defaultValue: 8, min: 0, max: 100, step: 0.1 },
      { name: 'years', label: 'Срок, лет', type: 'number', defaultValue: 5, min: 0, step: 0.5, showIf: { field: 'mode', equals: 'payment' } },
      { name: 'monthly', label: 'Ежемесячный взнос', type: 'number', defaultValue: 15000, min: 0, step: 1000, showIf: { field: 'mode', equals: 'term' } },
    ],
    resultLabels: {
      "payment": "Взнос в месяц",
      "term": "Срок",
      "months": "Месяцев",
      "years": "В годах",
      "contributions": "Всего взносов",
      "interest": "Начислено процентов",
      "final": "Итоговая сумма",
      "goal": "Цель",
    },
    howToUse: [
      "Выберите, что вам нужно: взнос в месяц или срок.",
      "Введите цель и то, что уже отложено.",
      "Введите годовую ставку — ноль тоже подходит, если деньги просто лежат.",
      "Введите срок или взнос, смотря по режиму.",
    ],
    howItWorks:
      "Месячная ставка — это годовая, делённая на двенадцать. Взнос берётся из формулы аннуитета, решённой относительно платежа. Срок находится добавлением взноса и начислением процентов помесячно, пока цель не достигнута.",
    example: "Цель 1 000 000 при уже накопленных 100 000 под 8 % за пять лет требует 11 582,09 в месяц.",
    faq: [
      { q: "Почему срок считается помесячно, а не формулой?", a: "Потому что замкнутая форма предполагает, что платёж всегда приходится на границу периода, и возвращает дробный месяц. Пошаговый счёт соответствует тому, как ведёт себя счёт на самом деле, и даёт целое число взносов." },
      { q: "Считается ли ставка неизменной?", a: "Да. Единая ставка на весь срок — это допущение, и оно видимое: настоящие вклады продлевают по той ставке, что есть в тот год." },
      { q: "Что если цель уже достигнута?", a: "Тогда взнос выходит нулевым, а результат показывает, во что вырастет имеющаяся сумма. Доплачивать нечего." },
      { q: "Проценты капитализируются ежемесячно?", a: "Да. Годовая ставка делится на двенадцать и применяется каждый месяц — именно так большинство счетов начисляет проценты." },
      { q: "Почему нельзя просто разделить цель на число месяцев?", a: "Потому что деньги на счёте растут сами. Разделив 900 000 на шестьдесят месяцев, вы получите 15 000 — и переплатите, потому что проценты сделают часть работы за вас: под 8 % годовых хватит 11 582,09." },
    ],
    relatedCalculatorIds: ["compound-interest", "emergency-fund", "time-value-money"],
  },
};
