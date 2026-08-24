import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { vacationAccrualCopyEn } from './copy.en';
import { vacationAccrualCopyUk } from './copy.uk';
import { vacationAccrualReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'vacation-accrual',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: vacationAccrualCopyEn, uk: vacationAccrualCopyUk },
  referenceCases: vacationAccrualReferenceCases,
  publishedExample: {
    inputs: { daysPerYear: 28, monthsWorked: 7, daysUsed: 5 },
    expected: ['11,333 дн.'],
  },
  presentation: {
    id: 'vacation-accrual',
    name: 'Калькулятор накопления отпуска',
    slug: 'vacation-accrual',
    fullPath: '/finance/vacation-accrual/',
    category: 'finance',
    icon: 'calendar',
    popularity: 22,
    isNew: false,
    shortDescription: 'Остаток отпуска по годовой норме, отработанным месяцам и использованному.',
    longDescription:
      'Отпуск начисляется равномерно, а не выдаётся целиком в январе: отработав половину года, вы заработали половину годовой нормы, что бы ни было записано в календаре. При норме двадцать восемь дней это 2,333 дня в месяц — дробное число, которое бухгалтерия не станет округлять в вашу пользу, и именно поэтому остаток редко выходит целым. Отрицательный остаток показывается как есть: отпуск, взятый авансом, — обычная договорённость, а не ошибка ввода, и спрятать его нулём значило бы неверно назвать сумму, которую пришлось бы вернуть при увольнении завтра.',
    seoTitle: 'Калькулятор накопления дней отпуска',
    seoDescription:
      'Рассчитайте остаток отпуска по годовой норме дней, числу отработанных месяцев и уже использованным дням.',
    h1: 'Калькулятор накопления отпуска',
    keywords: ['накопление отпуска', 'остаток отпуска', 'дни отпуска', 'отпуск за месяц'],
    fields: [
      { name: 'daysPerYear', label: 'Годовая норма отпуска, дней', type: 'number', defaultValue: 28, min: 0, max: 90, step: 1 },
      { name: 'monthsWorked', label: 'Отработано месяцев', type: 'number', defaultValue: 7, min: 0, max: 12, step: 1 },
      { name: 'daysUsed', label: 'Уже использовано дней', type: 'number', defaultValue: 5, min: 0, step: 1 },
    ],
    resultLabels: {
      balance: 'Остаток отпуска',
      accrued: 'Накоплено',
      perMonth: 'За месяц',
      used: 'Использовано',
    },
    howToUse: [
      'Введите годовую норму отпуска в днях.',
      'Укажите, сколько месяцев отработано в рабочем году.',
      'Введите количество уже использованных дней.',
      'Неполные месяцы обычно считаются полными — уточните местное правило.',
    ],
    howItWorks:
      'За месяц = годовая норма ÷ 12. Накоплено = эта величина × отработанные месяцы. Остаток — накопленное минус использованное.',
    example: 'При норме 28 дней после 7 месяцев и 5 использованных дней остаётся 11,333 дня.',
    faq: [
      {
        q: 'Почему месячная норма получается дробной?',
        a: 'Потому что двадцать восемь дней не делятся на двенадцать месяцев нацело. Расчётные системы хранят дробь и закрывают её при увольнении, а не округляют каждый месяц.',
      },
      {
        q: 'Может ли остаток быть отрицательным?',
        a: 'Да, и это означает отпуск, взятый авансом. Обычная договорённость; отрицательное число — то, что удержали бы при увольнении сегодня.',
      },
      {
        q: 'Считаются ли неполные месяцы?',
        a: 'В большинстве систем неполный месяц сверх определённого порога считается полным, но сам порог различается. Вводите целые месяцы так, как их считает ваше правило.',
      },
      {
        q: 'Переносится ли неиспользованный отпуск?',
        a: 'Это зависит от законодательства и договора. Где-то перенос разрешён со сроком давности, где-то требуется компенсация, и ни то ни другое этот расчёт не охватывает.',
      },
    ],
    relatedCalculatorIds: ['work-hours', 'salary-convert', 'workday-cost'],
    disclaimer: FIN_DISCLAIMER,
  },
};
