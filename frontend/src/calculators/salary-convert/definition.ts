import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { salaryConvertCopyEn } from './copy.en';
import { salaryConvertCopyUk } from './copy.uk';
import { salaryConvertCopyDe } from './copy.de';
import { salaryConvertReferenceCases } from './referenceCases';

const PERIODS = [
  { value: 'hour', label: 'в час' },
  { value: 'day', label: 'в день' },
  { value: 'week', label: 'в неделю' },
  { value: 'month', label: 'в месяц' },
  { value: 'year', label: 'в год' },
];

export const definition: CalculatorDefinitionV2 = {
  id: 'salary-convert',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: salaryConvertCopyEn, uk: salaryConvertCopyUk, de: salaryConvertCopyDe },
  referenceCases: salaryConvertReferenceCases,
  publishedExample: {
    inputs: { amount: 180000, fromPeriod: 'month', toPeriod: 'year' },
    expected: ['2 160 000,00 ₽'],
  },
  presentation: {
    id: 'salary-convert',
    name: 'Конвертер зарплаты по периодам',
    slug: 'salary-period-convert',
    fullPath: '/finance/salary-period-convert/',
    category: 'finance',
    icon: 'clock',
    popularity: 23,
    isNew: false,
    shortDescription: 'Перевод зарплаты между часом, днём, месяцем и годом.',
    longDescription:
      'Всё переводится через один знаменатель — рабочий час, — при дне в 8 часов, неделе в 40, месяце в 168 и годе в 2 016. Это рабочая норма, а не календарь, и поэтому год ровно в двенадцать раз больше такого месяца, без поправок на длину февраля и на праздники. Считать иначе — значит получать разные ответы для одной и той же зарплаты в зависимости от того, про какой месяц спрашивают. Все четыре периода показаны сразу, потому что настоящая задача обычно в сравнении предложений, названных в разных единицах, а переводить их по одному значит сравнивать по памяти.',
    seoTitle: 'Конвертер зарплаты: час, день, месяц, год',
    seoDescription:
      'Переведите зарплату между часом, днём, неделей, месяцем и годом по рабочей норме 168 часов в месяц с показом всех периодов сразу.',
    h1: 'Конвертер зарплаты по периодам',
    keywords: ['конвертер зарплаты', 'зарплата в час', 'годовая зарплата', 'ставка за день'],
    fields: [
      { name: 'amount', label: 'Сумма, ₽', type: 'number', defaultValue: 180000, min: 0, step: 1000 },
      { name: 'fromPeriod', label: 'Период суммы', type: 'select', defaultValue: 'month', options: PERIODS },
      { name: 'toPeriod', label: 'Перевести в', type: 'select', defaultValue: 'year', options: PERIODS },
    ],
    resultLabels: {
      converted: 'Зарплата за выбранный период',
      hour: 'В час',
      day: 'В день',
      month: 'В месяц',
      year: 'В год',
    },
    howToUse: [
      'Введите сумму, которая вам известна.',
      'Выберите период, к которому эта сумма относится.',
      'Выберите период, в который нужно перевести.',
      'Остальные периоды показаны рядом для сравнения.',
    ],
    howItWorks:
      'Сумма делится на часы своего периода и умножается на часы целевого. День 8 ч, неделя 40 ч, месяц 168 ч, год 2 016 ч.',
    example: '180 000 ₽ в месяц — это 2 160 000 ₽ в год и около 1 071,43 ₽ в час.',
    faq: [
      {
        q: 'Почему в месяце 168 часов, а не по календарю?',
        a: 'Потому что рабочий месяц из 21 дня по 8 часов — стандарт, принятый в договорах. Реальная длина месяцев давала бы разную часовую ставку для одной и той же зарплаты в каждом месяце года.',
      },
      {
        q: 'Учитываются ли отпуск и праздники?',
        a: 'Нет. Оплачиваемый отпуск фактически повышает часовую цену годовой зарплаты, а неоплачиваемый понижает; и то и другое лежит вне этого прямого перевода.',
      },
      {
        q: 'Стоит ли сравнивать предложения по часовой ставке?',
        a: 'Это самая честная общая единица, когда графики различаются. Сравнение четырёхдневной недели с пятидневной по месячной сумме прячет двадцатипроцентную разницу в часах.',
      },
      {
        q: 'Сумма берётся до налогов или после?',
        a: 'Та, которую вы ввели. Перевод пропорционален: начисленная на входе даёт начисленную на выходе, чистая — чистую.',
      },
    ],
    relatedCalculatorIds: ['overtime', 'freelance-rate', 'workday-cost'],
    disclaimer: FIN_DISCLAIMER,
  },
};
