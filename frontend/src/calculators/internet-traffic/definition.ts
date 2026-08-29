import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { internetTrafficCopyEn } from './copy.en';
import { internetTrafficCopyUk } from './copy.uk';
import { internetTrafficCopyDe } from './copy.de';
import { internetTrafficReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "internet-traffic",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: internetTrafficCopyEn, uk: internetTrafficCopyUk, de: internetTrafficCopyDe },
  referenceCases: internetTrafficReferenceCases,
  publishedExample: { inputs: { mbps: 5, hoursPerDay: 3, days: 30, quotaGb: 100 }, expected: ["202,5 ГБ"] },
  presentation: {
    id: "internet-traffic",
    name: "Калькулятор интернет-трафика",
    slug: "internet-traffic",
    fullPath: "/computers/internet-traffic/",
    category: "computers",
    icon: "globe",
    popularity: 39,
    isNew: false,
    shortDescription: "Сколько гигабайт набежит за месяц при заданной скорости потока и часах в день.",
    longDescription:
      "Считает объём, который набегает при постоянном потреблении: скорость потока умножается на время, а не делится на него. Восьмёрка в знаменателе — перевод битов в байты, и именно она чаще всего теряется: канал меряют в мегабитах, а лимит оператора в гигабайтах, и путаница между ними даёт ошибку ровно в восемь раз. Если задать лимит, добавляется срок, на который его хватит, и превышение — то есть ответ на вопрос «доживу ли я до конца месяца», а не только «сколько это в гигабайтах».",
    seoTitle: "Калькулятор интернет-трафика за месяц",
    seoDescription: "Рассчитайте расход интернет-трафика за месяц по скорости потока и часам просмотра в день, а также хватит ли лимита оператора.",
    h1: "Калькулятор интернет-трафика",
    keywords: ["расход интернет-трафика", "сколько трафика уходит", "трафик за месяц", "хватит ли лимита"],
    fields: [
      { name: 'mbps', label: 'Скорость потока, Мбит/с', type: 'number', defaultValue: 5, min: 0, step: 0.5 },
      { name: 'hoursPerDay', label: 'Часов в день', type: 'number', defaultValue: 3, min: 0, step: 0.5 },
      { name: 'days', label: 'Дней в периоде', type: 'number', defaultValue: 30, min: 0, step: 1 },
      { name: 'quotaGb', label: 'Лимит оператора, ГБ', type: 'number', defaultValue: 0, min: 0, step: 10, optional: true },
    ],
    resultLabels: {
      "total": "Трафик за период",
      "perDay": "В день",
      "perHour": "В час",
      "lasts": "Хватит дней при лимите",
      "excess": "Превышение лимита",
      "left": "Остаток лимита",
    },
    howToUse: [
      "Введите скорость потока: у стандартного качества это 3–5 Мбит/с, у 4K — около 25.",
      "Укажите, сколько часов в день идёт просмотр или звонок.",
      "Задайте длину периода — обычно 30 или 31 день.",
      "Впишите лимит оператора, если хотите проверить, хватит ли его.",
    ],
    howItWorks:
      "Скорость в мегабитах делится на восемь, чтобы получить мегабайты в секунду, умножается на 3600 секунд и переводится в гигабайты. Дальше — на часы в день и на дни периода.",
    example: "Три часа в день на пяти мегабитах дают 6,75 ГБ в сутки и 202,5 ГБ за месяц — вдвое больше лимита в 100 ГБ.",
    faq: [
      { q: "Почему скорость делится на восемь?", a: "Потому что канал меряют в мегабитах, а объём — в мегабайтах, и в байте восемь бит. Без деления расход завышается ровно в восемь раз." },
      { q: "Какую скорость потока указывать?", a: "Ту, на которой реально идёт воспроизведение: около 3–5 Мбит/с для обычного качества, 8 для Full HD и порядка 25 для 4K. Точное значение показывает статистика плеера." },
      { q: "Учитывается ли фоновый трафик?", a: "Нет. Обновления, синхронизация и мессенджеры добавляют сверху, поэтому реальный расход обычно немного выше расчётного." },
      { q: "Что показывает срок при лимите?", a: "На сколько дней хватит лимита при том же ежедневном потреблении. Дробное число означает, что лимит закончится в середине дня." },
      { q: "Гигабайт здесь десятичный?", a: "Да, 10⁹ байт — так считают операторы, когда объявляют лимит. Разница с двоичным гигабайтом составляет около 7 %." },
    ],
    relatedCalculatorIds: ["network-bandwidth", "download-time", "convert-data-rate"],
  },
};
