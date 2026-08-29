// Требуемая полоса для одновременных пользователей.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { networkBandwidthCopyEn } from './copy.en';
import { networkBandwidthCopyUk } from './copy.uk';
import { networkBandwidthCopyDe } from './copy.de';
import { networkBandwidthReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "network-bandwidth",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: networkBandwidthCopyEn, uk: networkBandwidthCopyUk, de: networkBandwidthCopyDe },
  referenceCases: networkBandwidthReferenceCases,
  publishedExample: { inputs: { users: 50, perUser: 5, overhead: 20, concurrency: 100 }, expected: ["300,0 Мбит/с"] },
  presentation: {
    id: "network-bandwidth",
    name: "Калькулятор пропускной способности сети",
    slug: "network-bandwidth",
    fullPath: "/computers/network-bandwidth/",
    category: "computers",
    icon: "monitor",
    popularity: 35,
    isNew: false,
    shortDescription: "Какая полоса нужна на заданное число одновременных пользователей.",
    longDescription:
      "Умножает число пользователей на долю активных одновременно и на полосу, нужную каждому, а затем добавляет выбранный вами запас. Ничего не спрятано в коэффициент «на протокол»: реальные накладные расходы зависят от протокола, кодека и сети, поэтому каждый множитель, влияющий на ответ, вынесен видимым полем.",
    seoTitle: "Калькулятор пропускной способности сети — полоса на пользователей",
    seoDescription:
      "Рассчитайте, какая полоса нужна офису, по числу одновременных пользователей, спросу на каждого и запасу.",
    h1: "Калькулятор пропускной способности сети",
    keywords: ["пропускная способность сети", "полоса на пользователя", "планирование интернета"],
    fields: [
      { name: 'users', label: 'Одновременных пользователей', type: 'number', defaultValue: 50, min: 1, step: 1 },
      { name: 'perUser', label: 'Полоса на пользователя, Мбит/с', type: 'number', defaultValue: 5, min: 0, step: 0.5 },
      { name: 'overhead', label: 'Запас, %', type: 'number', defaultValue: 0, min: 0, step: 5, optional: true },
      { name: 'concurrency', label: 'Активны одновременно, %', type: 'number', defaultValue: 100, min: 0, max: 100, step: 5 },
    ],
    resultLabels: { result: "Требуемая полоса", raw: "Без запаса", active: "Одновременно активны", mbs: "В мегабайтах в секунду" },
    howToUse: ["Укажите, сколько пользователей обслуживает канал.", "Введите полосу, нужную каждому.", "Задайте долю активных одновременно и запас."],
    howItWorks: "Сырая полоса = пользователи × доля активных × спрос на каждого; к требуемой добавляется запас.",
    example: "50 пользователей по 5 Мбит/с дают 250 Мбит/с сырьём и 300 Мбит/с с запасом в 20 процентов.",
    faq: [
      { q: "Считать всех пользователей или только активных?", a: "И тех и других, по отдельности. Введите общее число и задайте долю активных одновременно — сто рабочих мест редко смотрят видео разом." },
      { q: "Куда идёт процент запаса?", a: "Он добавляется поверх сырой величины. Больше за ним ничего не применяется: реальные накладные расходы протокола слишком разные, чтобы угадывать их за вас." },
      { q: "Какой запас разумен?", a: "Зависит от того, насколько неровный трафик. Поле существует именно для того, чтобы допущение осталось вашим и осталось видимым." },
      { q: "Почему мегабиты, а не мегабайты?", a: "Каналы продают в битах в секунду. Результат дополнительно показан в мегабайтах в секунду — для сравнения со скоростью загрузки." },
    ],
    relatedCalculatorIds: ["download-time", "files-on-disk", "convert-data-rate"],
  },
};
