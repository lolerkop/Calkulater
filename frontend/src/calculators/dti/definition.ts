// Кредитная нагрузка. Процентный вывод с пороговой оценкой.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { dtiCopyEn } from './copy.en';
import { dtiCopyUk } from './copy.uk';
import { dtiReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'dti',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: dtiCopyEn, uk: dtiCopyUk },
  referenceCases: dtiReferenceCases,
  publishedExample: { inputs: { payments: 45000, income: 150000 }, expected: ['30,00 %', 'Комфортная'] },
  presentation: {
    id: 'dti',
    name: 'Калькулятор кредитной нагрузки',
    slug: 'dti',
    fullPath: '/finance/dti/',
    category: 'finance',
    icon: 'percent',
    popularity: 50,
    isNew: false,
    shortDescription: 'Какая доля дохода уходит на обслуживание долгов.',
    longDescription:
      'Кредитная нагрузка делит ежемесячные платежи по долгам на месячный доход. Банки читают её как меру оставшегося запаса, а показанные здесь пороги — распространённые ориентиры, а не норма закона.',
    seoTitle: 'Калькулятор кредитной нагрузки — DTI и остаток дохода',
    seoDescription:
      'Расчёт кредитной нагрузки: доля дохода на платежи по долгам, оценка зоны и сумма, остающаяся после платежей.',
    h1: 'Калькулятор кредитной нагрузки',
    keywords: ['кредитная нагрузка', 'DTI', 'долговая нагрузка'],
    fields: [
      { name: 'payments', label: 'Ежемесячные платежи по долгам', type: 'number', defaultValue: 45000, min: 0 },
      { name: 'income', label: 'Месячный доход', type: 'number', defaultValue: 150000, min: 0 },
    ],
    resultLabels: { dti: 'Кредитная нагрузка', assessment: 'Оценка' },
    howToUse: ['Введите сумму ежемесячных платежей по долгам.', 'Введите месячный доход.', 'Прочитайте нагрузку и остаток.'],
    howItWorks:
      'DTI = платежи ÷ доход × 100. До 30 % нагрузка обычно комфортна, до 43 % повышена, выше — высока.',
    example: 'Платежи 45 000 при доходе 150 000 дают нагрузку 30 %.',
    faq: [
      { q: 'Какие платежи учитывать?', a: 'Регулярные обязательства: платежи по кредитам и ипотеке, минимальные платежи по картам, рассрочки. Аренду и коммунальные обычно не включают, если банк не требует иного.' },
      { q: 'Какой доход брать для расчёта нагрузки?', a: 'Берите сумму, которая реально доходит до вас. Доход до налогов занижает нагрузку.' },
      { q: 'Пороги — это норма?', a: 'Нет. Это распространённые ориентиры; каждый банк применяет свои границы и свой перечень того, что считать долгом.' },
      { q: 'Почему нагрузка бывает больше 100 %?', a: 'Платежи превышают доход. Калькулятор показывает это, а не обрезает, потому что сама ситуация и есть ответ.' },
    ],
    relatedCalculatorIds: ['credit-calculator', 'savings-rate', 'simple-interest'],
    disclaimer: FIN_DISCLAIMER,
  },
};
