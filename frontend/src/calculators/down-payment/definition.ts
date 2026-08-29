import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { downPaymentCopyEn } from './copy.en';
import { downPaymentCopyUk } from './copy.uk';
import { downPaymentCopyDe } from './copy.de';
import { downPaymentReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "down-payment",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: downPaymentCopyEn, uk: downPaymentCopyUk, de: downPaymentCopyDe },
  referenceCases: downPaymentReferenceCases,
  publishedExample: { inputs: { mode: 'percent', price: 5000000, percent: 20 }, expected: ["1 000 000,00 ₽"] },
  presentation: {
    id: "down-payment",
    name: "Калькулятор первоначального взноса",
    slug: "down-payment",
    fullPath: "/finance/down-payment/",
    category: "finance",
    icon: "wallet",
    popularity: 47,
    isNew: false,
    shortDescription: "Первоначальный взнос и сумма кредита по цене и доле взноса.",
    longDescription:
      "Разделяет цену покупки на две части: то, что вы платите сразу, и то, что берёте в кредит. Считает в обе стороны — от доли к сумме взноса и от накопленной суммы к её доле, что важнее: чаще известно, сколько денег уже собрано, а не какой процент это составит. Ставку и срок кредита страница не трогает: это отдельный расчёт платежа, а здесь решается вопрос «хватает ли на взнос».",
    seoTitle: "Калькулятор первоначального взноса — сумма взноса и кредита",
    seoDescription: "Рассчитайте первоначальный взнос по цене и проценту либо процент по накопленной сумме, а также остаток, который придётся взять в кредит.",
    h1: "Калькулятор первоначального взноса",
    keywords: ["калькулятор первоначального взноса", "первоначальный взнос по ипотеке", "сумма кредита после взноса"],
    fields: [
      {
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'percent',
        options: [
          { value: 'percent', label: 'доля взноса в процентах' },
          { value: 'amount', label: 'накопленная сумма' },
        ],
      },
      { name: 'price', label: 'Цена покупки, ₽', type: 'number', defaultValue: 5000000, min: 0, step: 1000 },
      { name: 'percent', label: 'Первоначальный взнос, %', type: 'number', defaultValue: 20, min: 0, max: 100, step: 1, showIf: { field: 'mode', equals: 'percent' } },
      { name: 'downPayment', label: 'Накоплено, ₽', type: 'number', defaultValue: 1500000, min: 0, step: 1000, showIf: { field: 'mode', equals: 'amount' } },
    ],
    resultLabels: {
      "down": "Первоначальный взнос",
      "loan": "Сумма кредита",
      "share": "Доля взноса",
      "rest": "Осталось накопить",
    },
    howToUse: ["Введите цену покупки.", "Укажите долю взноса или уже накопленную сумму.", "Прочитайте взнос, остаток в кредит и долю."],
    howItWorks: "Взнос = цена × доля ÷ 100; сумма кредита = цена − взнос. В обратном режиме доля = взнос ÷ цена × 100.",
    example: "При цене 5 000 000 ₽ и взносе 20 % вы платите сразу 1 000 000 ₽, а в кредит берёте 4 000 000 ₽.",
    faq: [
      { q: "Учитывается ли ставка по кредиту?", a: "Нет. Здесь делится цена: сколько платится сразу и сколько остаётся занять. Ежемесячный платёж по ставке и сроку считается отдельным калькулятором кредита." },
      { q: "Что делать, если известна только накопленная сумма?", a: "Выберите режим «накопленная сумма»: доля посчитается сама, и сразу будет видно, дотягивает ли она до требуемого банком минимума." },
      { q: "Почему взнос не может превышать цену?", a: "Потому что тогда кредит не нужен вовсе, а «отрицательной суммы кредита» не бывает. Такой ввод почти всегда означает опечатку в разрядах." },
      { q: "Входят ли в цену расходы на оформление?", a: "Нет. Введите ту цену, от которой банк считает взнос; страховки, оценка и пошлины планируются отдельно." },
    ],
    relatedCalculatorIds: ["mortgage-calculator", "credit-calculator", "savings-rate"],
  },
};
