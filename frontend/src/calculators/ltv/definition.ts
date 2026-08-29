// LTV: срок жизни задаётся напрямую или выводится из оттока.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { ltvCopyEn } from './copy.en';
import { ltvCopyUk } from './copy.uk';
import { ltvCopyDe } from './copy.de';
import { ltvReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "ltv",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: ltvCopyEn, uk: ltvCopyUk, de: ltvCopyDe },
  referenceCases: ltvReferenceCases,
  publishedExample: { inputs: { mode: 'months', arpu: 1200, months: 18, margin: 100 }, expected: ["21 600,00 ₽"] },
  presentation: {
    id: "ltv",
    name: "Калькулятор LTV",
    slug: "ltv",
    fullPath: "/business/ltv/",
    category: "business",
    icon: "trending-up",
    popularity: 36,
    isNew: false,
    shortDescription: "Ценность клиента по сроку жизни или по оттоку.",
    longDescription:
      "Умножает доход за период на срок жизни клиента и на валовую маржу. Срок либо задаётся напрямую, либо выводится из оттока как единица, делённая на его долю. Соглашений у LTV много, и это названо прямо, а не подразумевается, — так результат можно сопоставить с тем, как считает ваша команда.",
    seoTitle: "Калькулятор LTV — пожизненная ценность клиента",
    seoDescription:
      "Рассчитайте пожизненную ценность клиента по доходу за период, оттоку или сроку и валовой марже, с отношением LTV к CAC.",
    h1: "Калькулятор LTV",
    keywords: ["ltv калькулятор", "пожизненная ценность клиента", "ltv к cac"],
    fields: [
      {
        name: 'mode', label: 'Как задан срок', type: 'select', defaultValue: 'months',
        options: [
          { value: 'months', label: 'по сроку' },
          { value: 'churn', label: 'по оттоку' },
        ],
      },
      { name: 'arpu', label: 'Доход за период', type: 'number', defaultValue: 1200, unit: '₽', min: 0, step: 100 },
      { name: 'months', label: 'Срок жизни, месяцев', type: 'number', defaultValue: 18, min: 0, step: 1, showIf: { field: 'mode', equals: 'months' } },
      { name: 'churn', label: 'Отток за период, %', type: 'number', defaultValue: 5, min: 0, max: 100, step: 1, showIf: { field: 'mode', equals: 'churn' } },
      { name: 'margin', label: 'Валовая маржа, %', type: 'number', defaultValue: 100, min: 0, max: 100, step: 5 },
      { name: 'cac', label: 'Стоимость привлечения', type: 'number', defaultValue: 0, unit: '₽', min: 0, step: 500, optional: true },
    ],
    resultLabels: { result: "LTV", lifetime: "Срок жизни клиента", arpu: "Средний доход за период", ratio: "Отношение LTV к CAC" },
    howToUse: ["Выберите, известен вам срок или отток.", "Введите доход за период и валовую маржу.", "Добавьте стоимость привлечения для отношения LTV к CAC."],
    howItWorks: "LTV = доход за период × срок жизни × маржа; при известном оттоке срок равен единице, делённой на его долю.",
    example: "1200 в месяц при оттоке 5 процентов дают срок 20 месяцев и LTV 24 000.",
    faq: [
      { q: "Почему отток задаёт срок жизни?", a: "Если каждый период уходит постоянная доля, средний срок равен единице, делённой на эту долю. Пять процентов в месяц дают в среднем двадцать месяцев." },
      { q: "Нужно ли учитывать маржу?", a: "Если нужна прибыль, а не выручка, — да. Оставленные сто процентов дают показатель по выручке." },
      { q: "Какое отношение LTV к CAC считается здоровым?", a: "Зависит от бизнеса и срока окупаемости, поэтому цели здесь нет. Отношение приводится, чтобы вы сверили его со своей экономикой." },
      { q: "Почему нулевой отток не принимается?", a: "Он означал бы, что клиенты не уходят никогда, срок жизни стал бы бесконечным, а величина — бессмысленной." },
    ],
    relatedCalculatorIds: ["cac", "roas", "revenue-per-employee"],
  },
};
