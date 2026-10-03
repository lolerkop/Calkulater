import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { budgetSplitCopyEn } from './copy.en';
import { budgetSplitCopyUk } from './copy.uk';
import { budgetSplitCopyDe } from './copy.de';
import { budgetSplitCopyEs } from './copy.es';
import { budgetSplitReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "budget-split",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: { ...budgetSplitCopyEn, ...contractContent.en }, uk: { ...budgetSplitCopyUk, ...contractContent.uk }, de: { ...budgetSplitCopyDe, ...contractContent.de }, es: { ...budgetSplitCopyEs, ...contractContent.es } },
  referenceCases: budgetSplitReferenceCases,
  publishedExample: { inputs: { total: 60000, incomes: 'анна 80000\nборис 120000', mode: 'income' }, expected: ["36 000,00 ₽"] },
  presentation: {
    id: "budget-split",
    name: "Калькулятор деления общего бюджета",
    slug: "delenie-byudzheta",
    fullPath: "/finance/delenie-byudzheta/",
    category: "finance",
    icon: "wallet",
    popularity: 44,
    isNew: false,
    shortDescription: "Делит общую сумму между людьми поровну или пропорционально доходу.",
    seoTitle: "Калькулятор деления общего бюджета: поровну или по доходу",
    seoDescription: "Разделите аренду, коммуналку или общую покупку между людьми поровну или пропорционально доходу — взносы всегда сходятся с суммой.",
    h1: "Калькулятор деления общего бюджета",
    keywords: ["деление расходов", "общий бюджет", "разделить аренду по доходу", "пропорциональное деление затрат"],
    fields: [
      { name: 'total', label: 'Сумма к делению', unit: '₽', type: 'number', defaultValue: 60000, min: 0, step: 100 },
      {
        name: 'incomes', label: 'Участники: имя и доход в строке', type: 'textarea',
        // Умолчание не имеет пути локализации, поэтому имена здесь нейтральны:
        // русские слова утекли бы в английские данные.
        defaultValue: 'anna 80000\nboris 120000',
      },
      {
        name: 'mode', label: 'Как делить', type: 'select', defaultValue: 'income',
        options: [
          { value: 'income', label: 'Пропорционально доходу' },
          { value: 'equal', label: 'Поровну' },
        ],
      },
    ],
    resultLabels: {
      "max": "Наибольший взнос",
      "min": "Наименьший взнос",
      "people": "Участников",
      "total": "Сумма к делению",
      "check": "Проверка суммы",
      "table": "Кто сколько вносит",
    },
    ...contractContent.ru,
    relatedCalculatorIds: ["budget-50-30-20", "savings-rate", "emergency-fund"],
  },
};
