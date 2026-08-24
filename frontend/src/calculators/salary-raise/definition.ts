import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { salaryRaiseCopyEn } from './copy.en';
import { salaryRaiseCopyUk } from './copy.uk';
import { salaryRaiseReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'salary-raise',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: salaryRaiseCopyEn, uk: salaryRaiseCopyUk },
  referenceCases: salaryRaiseReferenceCases,
  publishedExample: {
    inputs: { mode: 'fromNew', oldSalary: 120000, newSalary: 148000 },
    expected: ['23,33%'],
  },
  presentation: {
    id: 'salary-raise',
    name: 'Калькулятор повышения зарплаты',
    slug: 'salary-raise',
    fullPath: '/finance/salary-raise/',
    category: 'finance',
    icon: 'trending-up',
    popularity: 23,
    isNew: false,
    shortDescription: 'Процент повышения по новой сумме или новая сумма по проценту.',
    longDescription:
      'Два направления нужны потому, что переговоры идут в процентах, а решения принимаются в деньгах. По новой сумме калькулятор возвращает процент, по проценту — сумму. Оба показывают рядом разницу в деньгах, и это то самое число, которое что-то меняет: десять процентов на маленькой зарплате и три на большой могут оказаться одинаковой суммой. Понижение показывается честным отрицательным процентом, а не прячется нулём: арифметика работает одинаково в обе стороны, и притворяться иначе значило бы неверно описать произошедшее.',
    seoTitle: 'Калькулятор повышения зарплаты в процентах',
    seoDescription:
      'Рассчитайте процент повышения зарплаты по прежней и новой сумме или новую сумму по заданному проценту, с разницей в деньгах.',
    h1: 'Калькулятор повышения зарплаты',
    keywords: ['повышение зарплаты', 'процент повышения', 'новая зарплата', 'разница в зарплате'],
    fields: [
      {
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'fromNew',
        options: [
          { value: 'fromNew', label: 'новая зарплата' },
          { value: 'fromPct', label: 'процент повышения' },
        ],
      },
      { name: 'oldSalary', label: 'Прежняя зарплата, ₽', type: 'number', defaultValue: 120000, min: 0, step: 5000 },
      { name: 'newSalary', label: 'Новая зарплата, ₽', type: 'number', defaultValue: 148000, min: 0, step: 5000, showIf: { field: 'mode', equals: 'fromNew' } },
      { name: 'raisePct', label: 'Повышение, %', type: 'number', defaultValue: 15, signed: true, step: 1, showIf: { field: 'mode', equals: 'fromPct' } },
    ],
    resultLabels: {
      change: 'Изменение',
      newSalary: 'Новая зарплата',
      delta: 'Разница',
      before: 'Было',
      after: 'Стало',
      multiple: 'Множитель',
    },
    howToUse: [
      'Выберите, что вам известно: новая зарплата или процент.',
      'Введите прежнюю зарплату.',
      'Введите новую сумму либо процент повышения.',
      'Сравнивайте предложения по разнице в деньгах, а не по одному проценту.',
    ],
    howItWorks:
      'Процент = (стало ÷ было − 1) × 100. Обратный ход даёт стало = было × (1 + процент ÷ 100).',
    example: 'Рост со 120 000 до 148 000 — это повышение на 23,33 % и 28 000 ₽ в месяц сверху.',
    faq: [
      {
        q: 'Процент считать от начисленной зарплаты или от суммы на руки?',
        a: 'От начисленной: именно её называют трудовые договоры. Повышение начисленной суммы не переходит один к одному в сумму на руки, когда в дело вступают ставки налога.',
      },
      {
        q: 'Съедает ли инфляция повышение зарплаты?',
        a: 'Нет. Повышение на пять процентов при инфляции восемь — это снижение в реальном выражении, и сопоставление этих двух чисел является отдельным расчётом.',
      },
      {
        q: 'Почему понижение показано отрицательным процентом?',
        a: 'Потому что оно им и является. Обрезав его до нуля, мы спрятали бы направление изменения, а арифметика в обе стороны ведёт себя одинаково.',
      },
      {
        q: 'Зачем показывать разницу в деньгах?',
        a: 'Потому что проценты скрывают базу. Три процента на большой зарплате бывают выгоднее десяти на маленькой, и увидеть это позволяет только денежная колонка.',
      },
    ],
    relatedCalculatorIds: ['salary-convert', 'percent-calculator', 'inflation'],
    disclaimer: FIN_DISCLAIMER,
  },
};
