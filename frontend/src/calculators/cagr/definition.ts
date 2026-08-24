// CAGR — четвёртый калькулятор волны и первый, где важна точность
// дробной степени, а не только арифметика.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { cagrCopyEn } from './copy.en';
import { cagrCopyUk } from './copy.uk';
import { cagrReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'cagr',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: cagrCopyEn, uk: cagrCopyUk },
  referenceCases: cagrReferenceCases,
  publishedExample: { inputs: { begin: 100000, end: 200000, years: 5 }, expected: ['14,87 %', '100,00 %'] },
  presentation: {
    id: 'cagr',
    name: 'CAGR-калькулятор',
    slug: 'cagr',
    fullPath: '/finance/cagr/',
    category: 'finance',
    icon: 'trending-up',
    popularity: 56,
    isNew: false,
    shortDescription: 'Среднегодовой темп роста между двумя значениями.',
    longDescription:
      'Среднегодовой темп роста распределяет общий рост равномерно по сроку, поэтому удвоение за пять лет читается одним годовым числом, а не общей суммой. Это делает вложения разной длительности сопоставимыми.',
    seoTitle: 'CAGR-калькулятор — среднегодовой темп роста',
    seoDescription:
      'Расчёт среднегодового темпа роста между начальной и конечной стоимостью за любое число лет.',
    h1: 'CAGR-калькулятор',
    keywords: ['cagr калькулятор', 'среднегодовой рост', 'годовая доходность'],
    fields: [
      { name: 'begin', label: 'Начальная стоимость', type: 'number', defaultValue: 100000, min: 0 },
      { name: 'end', label: 'Конечная стоимость', type: 'number', defaultValue: 200000, min: 0 },
      { name: 'years', label: 'Количество лет', type: 'number', defaultValue: 5, min: 0, step: 0.5 },
    ],
    resultLabels: { cagr: 'Среднегодовой рост', total: 'Общий рост за срок' },
    howToUse: [
      'Введите начальную стоимость.',
      'Введите конечную стоимость.',
      'Укажите, сколько лет прошло между ними.',
    ],
    howItWorks: 'CAGR = (конечная / начальная) ^ (1 / лет) − 1, показанный в процентах.',
    example: 'Рост со 100 000 до 200 000 за пять лет — это 14,87 % в год.',
    faq: [
      { q: 'Почему нельзя просто разделить общий рост на годы?', a: 'Так теряется сложный процент. Удвоение за пять лет — это 14,87 % в год, а не 20 %: каждый год растёт поверх предыдущего.' },
      { q: 'Бывает ли CAGR отрицательным?', a: 'Да. Снижение даёт отрицательный годовой темп — это честный способ описать падающую стоимость.' },
      { q: 'Показывает ли CAGR колебания?', a: 'Нет, это сглаженное среднее. У двух вложений с одинаковыми началом, концом и сроком CAGR совпадёт, как бы по-разному они ни двигались внутри срока.' },
      { q: 'Что делать, если срок не целое число лет?', a: 'Введите дробное значение: полтора года — это 1,5.' },
    ],
    relatedCalculatorIds: ['compound-interest', 'savings-rate', 'deposit-calculator'],
    disclaimer: FIN_DISCLAIMER,
  },
};
