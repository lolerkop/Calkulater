import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { arpuArppuCopyEn } from './copy.en';
import { arpuArppuCopyUk } from './copy.uk';
import { arpuArppuCopyDe } from './copy.de';
import { arpuArppuReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "arpu-arppu",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: arpuArppuCopyEn, uk: arpuArppuCopyUk, de: arpuArppuCopyDe },
  referenceCases: arpuArppuReferenceCases,
  publishedExample: { inputs: { revenue: 500000, users: 12500, payingUsers: 900 }, expected: ["40,00 ₽"] },
  presentation: {
    id: "arpu-arppu",
    name: "Калькулятор ARPU и ARPPU",
    slug: "arpu-arppu",
    fullPath: "/business/arpu-arppu/",
    category: "business",
    icon: "wallet",
    popularity: 21,
    isNew: false,
    shortDescription: "Средняя выручка на пользователя и на платящего, а также доля платящих.",
    longDescription:
      "Считает две средние величины, у которых различается знаменатель, и именно он всё и решает. ARPU делит выручку на всех пользователей, ARPPU — только на платящих. Первая падает вместе с ростом бесплатной аудитории, вторая нет, поэтому судить по одной без другой нельзя: растущий ARPPU при падающем ARPU означает, что платит всё меньше людей, но каждый — всё больше. Доля платящих связывает обе величины: ARPU равен ARPPU, умноженному на эту долю, и когда платят все, две метрики совпадают.",
    seoTitle: "Калькулятор ARPU и ARPPU: выручка на пользователя",
    seoDescription: "Рассчитайте ARPU и ARPPU по выручке, числу пользователей и числу платящих, а также долю платящей аудитории.",
    h1: "Калькулятор ARPU и ARPPU",
    keywords: ["ARPU", "ARPPU", "выручка на пользователя", "доля платящих"],
    fields: [
      { name: 'revenue', label: 'Выручка за период, ₽', type: 'number', defaultValue: 500000, min: 0, step: 10000 },
      { name: 'users', label: 'Всего пользователей', type: 'number', defaultValue: 12500, min: 0, step: 100 },
      { name: 'payingUsers', label: 'Из них платящих', type: 'number', defaultValue: 900, min: 0, step: 10 },
    ],
    resultLabels: {
      "arpu": "ARPU",
      "arppu": "ARPPU",
      "share": "Доля платящих",
      "revenue": "Выручка",
      "users": "Пользователей",
      "paying": "Платящих",
    },
    howToUse: [
      "Введите выручку за период.",
      "Укажите общее число пользователей за тот же период.",
      "Укажите, сколько из них заплатили.",
      "Период у всех трёх величин должен совпадать.",
    ],
    howItWorks:
      "ARPU = выручка ÷ все пользователи. ARPPU = выручка ÷ платящие пользователи. Доля платящих = платящие ÷ все. Отсюда следует, что ARPU = ARPPU × доля платящих.",
    example: "При выручке 500 000 ₽, 12 500 пользователях и 900 платящих ARPU равен 40,00 ₽, а ARPPU — 555,56 ₽.",
    faq: [
      { q: "Чем ARPU отличается от среднего чека?", a: "Средний чек делит выручку на ЗАКАЗЫ, а ARPU — на пользователей. Один пользователь может сделать несколько заказов, поэтому ARPU обычно выше среднего чека." },
      { q: "Какую из двух метрик смотреть?", a: "Обе. ARPU показывает, сколько приносит вся аудитория, ARPPU — насколько ценен платящий. Растущий ARPPU при падающем ARPU означает, что платит всё меньше людей, но каждый больше." },
      { q: "Почему ARPPU не показывается при нуле платящих?", a: "Потому что делить выручку не на кого. Показать бесконечность вместо честного отсутствия строки было бы хуже, чем не показывать ничего." },
      { q: "Как связаны ARPU, ARPPU и доля платящих?", a: "ARPU = ARPPU × доля платящих. Поэтому поднять ARPU можно двумя путями: заставить платящих платить больше или увеличить их долю." },
      { q: "Должны ли все три величины относиться к одному периоду?", a: "Да, обязательно. Период годится любой, чаще берут месяц, но смешивать месячную выручку с годовой аудиторией нельзя — метрика потеряет смысл." },
    ],
    relatedCalculatorIds: ["aov", "ltv", "mrr-arr"],
  },
};
