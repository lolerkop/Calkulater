// Перевод результата: правила, без словарей.
//
// Данные и правила разделены сознательно. Правила — сокращения единиц, счётные
// слова, символ валюты — универсальны и нужны каждой странице калькулятора.
// Словари же принадлежат тем калькуляторам, которые их фразы показывают, и
// приезжают в браузер вместе с ними. Раньше и то и другое лежало одним модулем,
// и каждая страница везла фразы всех калькуляторов на всех локалях сразу.

import { pluralRu } from './plural';
import type { Locale } from './clientI18n';

function escapeForRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replacePhrasesOnce(value: string, phrases: Record<string, string>): string {
  const present = Object.keys(phrases).filter((key) => value.includes(key));
  if (present.length === 0) return value;
  present.sort((a, b) => b.length - a.length);
  const pattern = new RegExp(present.map(escapeForRegExp).join('|'), 'g');
  return value.replace(pattern, (match) => phrases[match] ?? match);
}

// Счётные слова, встречающиеся в русских значениях результата. Раннер уже
// выбрал русскую форму по числу, но при переводе форму нужно выбрать заново по
// тому же числу: раньше здесь стояла константа, и «1 месяц» превращался в
// «1 months», а «1 місяців». Английский различает только единственное и
// множественное число; украинский, как и русский, использует три формы по двум
// последним цифрам, поэтому берётся общий для восточнославянских языков pluralRu.
//
// Число читается из самой строки вместе с неразрывными разделителями тысяч,
// которые расставил Intl в раннере: «6 784 дн.» — это 6784, а не 784.
const countWords: Array<{ source: RegExp; en: [string, string]; de: [string, string]; es: [string, string]; uk: [string, string, string] }> = [
  { source: /(\d+(?:\u00a0\d{3})*) (?:года|год|лет)/g, en: ['year', 'years'], de: ['Jahr', 'Jahre'], es: ['año', 'años'], uk: ['рік', 'роки', 'років'] },
  { source: /(\d+(?:\u00a0\d{3})*) (?:месяцев|месяца|месяц)/g, en: ['month', 'months'], de: ['Monat', 'Monate'], es: ['mes', 'meses'], uk: ['місяць', 'місяці', 'місяців'] },
  { source: /(\d+(?:\u00a0\d{3})*) (?:дней|дня|день)/g, en: ['day', 'days'], de: ['Tag', 'Tage'], es: ['día', 'días'], uk: ['день', 'дні', 'днів'] },
  // Сокращение «дн.» не изменяется по числу ни в русском, ни в украинском, но в
  // английском и немецком разворачивается в полное слово, которому форма уже нужна.
  { source: /(\d+(?:\u00a0\d{3})*) дн\./g, en: ['day', 'days'], de: ['Tag', 'Tage'], es: ['día', 'días'], uk: ['дн.', 'дн.', 'дн.'] },
];

function localizeCountWords(value: string, locale: 'en' | 'de' | 'es' | 'uk'): string {
  return countWords.reduce((text, unit) => text.replace(unit.source, (_match, digits: string) => {
    const count = Number(digits.replace(/\u00a0/g, ''));
    const word = locale === 'uk' ? pluralRu(count, unit.uk) : unit[locale][count === 1 ? 0 : 1];
    return `${digits} ${word}`;
  }), value);
}

// Русский ключ пишется один раз, переводы стоят рядом с ним. Раньше карта была
// разложена по локалям, и каждый ключ — иногда абзац в двести знаков — лежал в
// файле трижды. Файл уезжает в браузер на каждой странице калькулятора, поэтому
// три копии ключа платят все локали сразу.
//
// Плоский вид для подстановки собирается один раз на локаль и запоминается:
// подстановка вызывается на каждую строку результата.


// Подпись, которую раннер собирает вместе с числом лет: «Покупательная
// способность через 3». Точного ключа у неё быть не может — их столько, сколько
// возможных сроков, — поэтому переводится постоянная часть. Русский текст
// оставался в английской и украинской локалях именно из-за этого: перевод лежал
// в ведре `values`, а подписи строк ищутся в `results` и точным совпадением.
export const COMPOSED_PURCHASING_POWER = 'Покупательная способность через';

/**
 * Перевод значения результата по готовой карте фраз.
 *
 * Карта приходит снаружи: у калькулятора она своя, и общего словаря в браузере
 * больше нет. Подстановка однопроходная — строка, не совпавшая целиком, всё
 * равно переводится по фрагментам, потому что обозначения единиц приходят
 * фрагментом внутри значения («10,0000 м/с»). Сортировка по убыванию длины не
 * даёт короткому ключу перехватить совпадение у длинного, а один проход не даёт
 * переводу подставиться повторно в собственный же результат.
 */
export function localizeText(
  value: string,
  locale: Locale,
  phrases: Readonly<Record<string, string>>,
): string {
  if (locale === 'ru') return value;
  const currencyByLocale: Partial<Record<Locale, string>> = {
    en: '$',
    pl: 'zł',
    ro: 'lei',
    id: 'Rp',
    tr: '₺',
    vi: '₫',
    cs: 'Kč',
    uk: '₴',
    hu: 'Ft',
  };
  const currency = currencyByLocale[locale] ?? '€';
  const exact = phrases[value];
  // Словарь нужен и для фраз, встроенных в более длинный текст, поэтому строка,
  // не совпавшая целиком, всё равно проходит подстановку. Раньше это делалось
  // циклом последовательных replaceAll, и каждая следующая замена просматривала
  // текст, вставленный предыдущей: перевод, начинающийся со своего же ключа,
  // подставлялся повторно («Норма» → «Нормальний діапазон» → «Нормальний
  // діапазонльний діапазон»). Одна проходка по объединённому шаблону разбирает
  // каждую позицию ровно один раз, а сортировка по убыванию длины не даёт
  // короткому ключу перехватить совпадение у длинного.
  let localized = exact ?? replacePhrasesOnce(value, phrases);

  if (locale === 'en' || locale === 'uk' || locale === 'de' || locale === 'es') {
    localized = localizeCountWords(localized, locale);
  }

  // Сокращения каждой локали отделены от английских: без этого немецкая
  // страница писала «5 years» и «12 pcs.», а испанская написала бы то же самое —
  // английские слова внутри чужого значения.
  const units = locale === 'uk'
    ? { month: 'міс.', year: 'років', day: 'дн.', piece: 'шт.', liter: 'л', gram: 'г', kg: 'кг', cm: 'см', kcal: 'ккал', pace: '/км', hour: 'год', minute: 'хв' }
    : locale === 'de'
      ? { month: 'Mon.', year: 'Jahre', day: 'Tage', piece: 'Stk.', liter: 'l', gram: 'g', kg: 'kg', cm: 'cm', kcal: 'kcal', pace: '/km', hour: 'Std.', minute: 'Min.' }
      : locale === 'es'
        ? { month: 'meses', year: 'años', day: 'días', piece: 'uds.', liter: 'l', gram: 'g', kg: 'kg', cm: 'cm', kcal: 'kcal', pace: '/km', hour: 'h', minute: 'min' }
        : { month: 'mo.', year: 'years', day: 'days', piece: 'pcs.', liter: 'L', gram: 'g', kg: 'kg', cm: 'cm', kcal: 'kcal', pace: '/km', hour: 'h', minute: 'min' };

  return localized
    .replaceAll('₽', currency)
    .replace(/ккал/g, units.kcal)
    // Составные величины времени вида «8 ч 30 мин»: сокращения глобальны,
    // поэтому переводятся здесь, а не в локализации отдельного калькулятора.
    .replace(/ ч(?=$|\s)/g, ` ${units.hour}`)
    .replace(/ мин(?=$|\s|[),])/g, ` ${units.minute}`)
    .replace(/км\/ч/g, 'km/h')
    .replace(/\/км/g, units.pace)
    .replace(/\/миля/g, locale === 'uk' ? '/миля' : '/mi')
    .replace(/ км(?=$|\s|[),])/g, locale === 'uk' ? ' км' : ' km')
    .replace(/м²/g, 'm²')
    .replace(/м³/g, 'm³')
    .replace(/ м(?=$|\s|[),×])/g, locale === 'uk' ? ' м' : ' m')
    .replace(/ кг(?=$|\s|[),–])/g, ` ${units.kg}`)
    .replace(/ см(?=$|\s|[),])/g, ` ${units.cm}`)
    .replace(/ мес\./g, ` ${units.month}`)
    .replace(/ лет(?=$|\s|[),])/g, ` ${units.year}`)
    .replace(/ дн\./g, ` ${units.day}`)
    .replace(/ шт\./g, ` ${units.piece}`)
    .replace(/ л(?=$|\s|[),×])/g, ` ${units.liter}`)
    .replace(/ г(?=$|\s|[),])/g, ` ${units.gram}`);
}

/**
 * Перевод подписи строки результата.
 *
 * Сначала объявленный перевод, затем правила: одна и та же русская фраза у
 * разных калькуляторов может значить разное, поэтому карта всегда своя.
 */
export function localizeLabel(
  label: string,
  locale: Locale,
  labels?: Readonly<Record<string, string>>,
): string {
  if (locale === 'ru') return label;
  const direct = labels?.[label];
  if (direct) return direct;

  if (locale === 'uk') {
    return label
      .replace('НДС', 'ПДВ')
      .replace('НДФЛ', 'ПДФО')
      .replace(COMPOSED_PURCHASING_POWER, 'Купівельна спроможність через')
      .replace(' от ', ' від ')
      .replace(' за мес.', ' за місяць')
      .replace(' за год', ' за рік');
  }

  if (locale === 'de') {
    return label
      .replace('НДС', 'USt.')
      .replace('НДФЛ', 'Einkommensteuer')
      .replace(COMPOSED_PURCHASING_POWER, 'Kaufkraft nach')
      .replace(' от ', ' von ')
      .replace(' за мес.', ' im Monat')
      .replace(' за год', ' im Jahr');
  }

  if (locale === 'es') {
    return label
      .replace('НДС', 'IVA')
      .replace('НДФЛ', 'IRPF')
      .replace(COMPOSED_PURCHASING_POWER, 'Poder adquisitivo dentro de')
      .replace(' от ', ' de ')
      .replace(' за мес.', ' al mes')
      .replace(' за год', ' al año');
  }

  return label
    .replace('НДС', 'VAT')
    .replace('НДФЛ', 'Income tax')
    .replace(COMPOSED_PURCHASING_POWER, 'Purchasing power after')
    .replace(' от ', ' of ')
    .replace(' за мес.', ' per month')
    .replace(' за год', ' per year');
}
