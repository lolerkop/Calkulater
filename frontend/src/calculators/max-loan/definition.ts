import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { maxLoanCopyEn } from './copy.en';
import { maxLoanCopyUk } from './copy.uk';
import { maxLoanCopyDe } from './copy.de';
import { maxLoanCopyEs } from './copy.es';
import { maxLoanReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "max-loan",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: maxLoanCopyEn, uk: maxLoanCopyUk, de: maxLoanCopyDe, es: maxLoanCopyEs },
  referenceCases: maxLoanReferenceCases,
  publishedExample: { inputs: { income: 120000, dtiPct: 40, rate: 18, years: 20 }, expected: ["3 110 195,14 ₽"] },
  presentation: {
    id: "max-loan",
    name: "Калькулятор максимальной суммы кредита",
    slug: "max-loan",
    fullPath: "/finance/max-loan/",
    category: "finance",
    icon: "banknote",
    popularity: 16,
    isNew: false,
    shortDescription: "Максимальная сумма кредита по доходу, допустимой нагрузке, ставке и сроку.",
    seoTitle: "Калькулятор максимальной суммы кредита по доходу",
    seoDescription: "Рассчитайте максимальную сумму кредита по доходу, допустимой долговой нагрузке, процентной ставке и сроку.",
    h1: "Калькулятор максимальной суммы кредита",
    keywords: ["максимальная сумма кредита", "кредит по доходу", "долговая нагрузка", "сколько дадут кредит"],
    fields: [
      {
        "name": "income",
        "label": "Доход в месяц",
        "type": "number",
        "defaultValue": 120000,
        "min": 0,
        "step": 5000,
        "unit": "₽"
      },
      {
        "name": "dtiPct",
        "label": "Выбранная доля на новый платёж, %",
        "type": "number",
        "defaultValue": 40,
        "min": 0,
        "max": 100,
        "step": 1
      },
      {
        "name": "rate",
        "label": "Номинальная ставка, % годовых",
        "type": "number",
        "defaultValue": 18,
        "min": 0,
        "step": 0.1
      },
      {
        "name": "years",
        "label": "Срок, лет",
        "type": "number",
        "defaultValue": 20,
        "min": 0.08333333333333333,
        "step": 0.08333333333333333
      }
    ],
    resultLabels: {
      "amount": "Максимальная сумма",
      "payment": "Допустимый платёж",
      "total": "Всего выплат",
      "overpay": "Переплата",
      "payments": "Платежей",
    },
    ...contractContent.ru,
    relatedCalculatorIds: ["credit-calculator", "dti", "mortgage-calculator"],
  },
};
