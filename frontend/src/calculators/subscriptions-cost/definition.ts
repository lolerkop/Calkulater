import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { subscriptionsCostCopyEn } from './copy.en';
import { subscriptionsCostCopyUk } from './copy.uk';
import { subscriptionsCostCopyDe } from './copy.de';
import { subscriptionsCostCopyEs } from './copy.es';
import { subscriptionsCostReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "subscriptions-cost",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: subscriptionsCostCopyEn, uk: subscriptionsCostCopyUk, de: subscriptionsCostCopyDe, es: subscriptionsCostCopyEs },
  referenceCases: subscriptionsCostReferenceCases,
  publishedExample: { inputs: { items: 'стриминг 299 1\nоблако 1990 12\nмузыка 169 1' }, expected: ["633,83 ₽"] },
  presentation: {
    id: "subscriptions-cost",
    name: "Калькулятор стоимости подписок",
    slug: "stoimost-podpisok",
    fullPath: "/household/stoimost-podpisok/",
    category: "household",
    icon: "repeat",
    popularity: 45,
    isNew: false,
    shortDescription: "Приводит месячные и годовые подписки к одному сравнимому числу за месяц.",
    seoTitle: "Калькулятор стоимости подписок: месяц и год одним числом",
    seoDescription: "Сложите стриминг, облако и другие подписки с разными периодами оплаты в одну месячную и годовую стоимость.",
    h1: "Калькулятор стоимости подписок",
    keywords: ["стоимость подписок", "итог подписок за месяц", "годовая стоимость подписок", "сравнить тарифы подписок"],
    fields: [
  {
    "name": "items",
    "label": "Подписки: название, цена и период в месяцах в строке",
    "type": "textarea",
    "defaultValue": "streaming 299 1\ncloud 1990 12\nmusic 169 1"
  }
],
    resultLabels: {
  "perMonth": "В месяц",
  "perYear": "В год",
  "count": "Подписок",
  "topName": "Самая дорогая",
  "topPerMonth": "Её вклад в месяц",
  "table": "Подписки в пересчёте на месяц"
},
    relatedCalculatorIds: ["stock-duration", "price-per-unit", "trip-budget"],
    ...contract.ru,
  },
};
