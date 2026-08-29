import { pluralRu } from './plural';


export const clientLocales = ['ru', 'en', 'es', 'de', 'fr', 'pt', 'it', 'pl', 'nl', 'ro', 'id', 'tr', 'vi', 'cs', 'uk', 'sk', 'hu'] as const;
export type Locale = (typeof clientLocales)[number];

export function localeCatalog(locale: Locale): string {
  return `/${locale}/calculators/`;
}

export const clientUi = {
  ru: {
    all: 'Все',
    allCalculators: 'Все калькуляторы',
    newest: 'Новые',
    open: 'Открыть',
    popular: 'Популярное',
    popularBadge: 'Популярный',
    newBadge: 'Новый',
  },
  en: {
    all: 'All',
    allCalculators: 'All calculators',
    newest: 'New',
    open: 'Open',
    popular: 'Popular',
    popularBadge: 'Popular',
    newBadge: 'New',
  },
  es: {
    all: 'Todas',
    allCalculators: 'Todas las calculadoras',
    newest: 'Nuevas',
    open: 'Abrir',
    popular: 'Popular',
    popularBadge: 'Popular',
    newBadge: 'Nuevo',
  },
  de: {
    all: 'Alle',
    allCalculators: 'Alle Rechner',
    newest: 'Neu',
    open: 'Öffnen',
    popular: 'Beliebt',
    popularBadge: 'Beliebt',
    newBadge: 'Neu',
  },
  fr: {
    all: 'Toutes',
    allCalculators: 'Toutes les calculatrices',
    newest: 'Nouveautés',
    open: 'Ouvrir',
    popular: 'Populaire',
    popularBadge: 'Populaire',
    newBadge: 'Nouveau',
  },
  pt: {
    all: 'Todas',
    allCalculators: 'Todas as calculadoras',
    newest: 'Novas',
    open: 'Abrir',
    popular: 'Popular',
    popularBadge: 'Popular',
    newBadge: 'Novo',
  },
  it: {
    all: 'Tutti',
    allCalculators: 'Tutti i calcolatori',
    newest: 'Novità',
    open: 'Apri',
    popular: 'Popolari',
    popularBadge: 'Popolare',
    newBadge: 'Nuovo',
  },
  pl: {
    all: 'Wszystkie',
    allCalculators: 'Wszystkie kalkulatory',
    newest: 'Nowe',
    open: 'Otworz',
    popular: 'Popularne',
    popularBadge: 'Popularne',
    newBadge: 'Nowe',
  },
  nl: {
    all: 'Alles',
    allCalculators: 'Alle rekentools',
    newest: 'Nieuw',
    open: 'Open',
    popular: 'Populair',
    popularBadge: 'Populair',
    newBadge: 'Nieuw',
  },
  ro: {
    all: 'Toate',
    allCalculators: 'Toate calculatoarele',
    newest: 'Noi',
    open: 'Deschide',
    popular: 'Populare',
    popularBadge: 'Popular',
    newBadge: 'Nou',
  },
  id: {
    all: 'Semua',
    allCalculators: 'Semua kalkulator',
    newest: 'Baru',
    open: 'Buka',
    popular: 'Populer',
    popularBadge: 'Populer',
    newBadge: 'Baru',
  },
  tr: {
    all: 'Tümü',
    allCalculators: 'Tüm hesaplayıcılar',
    newest: 'Yeni',
    open: 'Aç',
    popular: 'Popüler',
    popularBadge: 'Popüler',
    newBadge: 'Yeni',
  },
  vi: {
    all: 'Tất cả',
    allCalculators: 'Tất cả máy tính',
    newest: 'Mới',
    open: 'Mở',
    popular: 'Phổ biến',
    popularBadge: 'Phổ biến',
    newBadge: 'Mới',
  },
  cs: {
    all: 'Vše',
    allCalculators: 'Všechny kalkulačky',
    newest: 'Nové',
    open: 'Otevřít',
    popular: 'Populární',
    popularBadge: 'Populární',
    newBadge: 'Nové',
  },
  uk: {
    all: 'Усі',
    allCalculators: 'Усі калькулятори',
    newest: 'Нові',
    open: 'Відкрити',
    popular: 'Популярне',
    popularBadge: 'Популярний',
    newBadge: 'Новий',
  },
  sk: {
    all: 'Všetko',
    allCalculators: 'Všetky kalkulačky',
    newest: 'Nové',
    open: 'Otvoriť',
    popular: 'Populárne',
    popularBadge: 'Populárne',
    newBadge: 'Nové',
  },
  hu: {
    all: 'Mind',
    allCalculators: 'Összes kalkulátor',
    newest: 'Új',
    open: 'Megnyitás',
    popular: 'Népszerű',
    popularBadge: 'Népszerű',
    newBadge: 'Új',
  },
} satisfies Record<Locale, Record<string, string>>;

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
const countWords: Array<{ source: RegExp; en: [string, string]; de: [string, string]; uk: [string, string, string] }> = [
  { source: /(\d+(?:\u00a0\d{3})*) (?:года|год|лет)/g, en: ['year', 'years'], de: ['Jahr', 'Jahre'], uk: ['рік', 'роки', 'років'] },
  { source: /(\d+(?:\u00a0\d{3})*) (?:месяцев|месяца|месяц)/g, en: ['month', 'months'], de: ['Monat', 'Monate'], uk: ['місяць', 'місяці', 'місяців'] },
  { source: /(\d+(?:\u00a0\d{3})*) (?:дней|дня|день)/g, en: ['day', 'days'], de: ['Tag', 'Tage'], uk: ['день', 'дні', 'днів'] },
  // Сокращение «дн.» не изменяется по числу ни в русском, ни в украинском, но в
  // английском и немецком разворачивается в полное слово, которому форма уже нужна.
  { source: /(\d+(?:\u00a0\d{3})*) дн\./g, en: ['day', 'days'], de: ['Tag', 'Tage'], uk: ['дн.', 'дн.', 'дн.'] },
];

function localizeCountWords(value: string, locale: 'en' | 'de' | 'uk'): string {
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
const phrasesByLocale = new Map<Locale, Record<string, string>>();

function sharedPhrases(locale: Locale): Record<string, string> {
  const cached = phrasesByLocale.get(locale);
  if (cached) return cached;
  const flat: Record<string, string> = {};
  for (const [key, byLocale] of Object.entries(resultPhrases)) {
    const value = byLocale[locale] ?? byLocale.en;
    if (value) flat[key] = value;
  }
  phrasesByLocale.set(locale, flat);
  return flat;
}

/**
 * Перевод значения результата.
 *
 * `ownPhrases` — карта `values` самого калькулятора. Она сливается поверх общей
 * и проходит ту же однопроходную подстановку, а не отдельным точным поиском.
 * Причина измерена: обозначения единиц приходят фрагментом внутри строки
 * («10,0000 м/с»), поэтому точный поиск по целой строке не срабатывал никогда,
 * и на английской странице оставалась кириллица. Хуже того, общий хвост
 * замен ниже правит подстроки вслепую и превращал «см²» в «сm²» — кириллическая
 * «с» с латинским «m²». Приоритет калькулятора снимает обе проблемы разом:
 * его ключ длиннее и забирает совпадение первым, а к моменту хвоста кириллицы
 * в строке уже не остаётся.
 */
export function localizedResultText(
  value: string,
  locale: Locale,
  ownPhrases?: Readonly<Record<string, string>>,
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
  const shared = sharedPhrases(locale);
  const phrases = ownPhrases ? { ...shared, ...ownPhrases } : shared;
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

  if (locale === 'en' || locale === 'uk' || locale === 'de') {
    localized = localizeCountWords(localized, locale);
  }

  // Немецкие сокращения отделены от английских: без этого немецкая страница
  // писала «5 years» и «12 pcs.» — английские слова внутри немецкого значения.
  const units = locale === 'uk'
    ? { month: 'міс.', year: 'років', day: 'дн.', piece: 'шт.', liter: 'л', gram: 'г', kg: 'кг', cm: 'см', kcal: 'ккал', pace: '/км', hour: 'год', minute: 'хв' }
    : locale === 'de'
      ? { month: 'Mon.', year: 'Jahre', day: 'Tage', piece: 'Stk.', liter: 'l', gram: 'g', kg: 'kg', cm: 'cm', kcal: 'kcal', pace: '/km', hour: 'Std.', minute: 'Min.' }
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

type ResultValueMap = Partial<Record<Locale, Record<string, string>>> & {
  en: Record<string, string>;
};

const resultPhrases: Record<string, Partial<Record<Locale, string>>> = {
  'Введите положительные размеры и толщину': { en: 'Enter positive dimensions and thickness', de: 'Trage positive Maße und eine positive Dicke ein', uk: 'Введіть додатні розміри та товщину' },
  'Вес мешка должен быть больше нуля': { en: 'The bag weight must be greater than zero', de: 'Das Sackgewicht muss größer als null sein', uk: 'Вага мішка має бути більшою за нуль' },
  'Введите себестоимость больше нуля': { en: 'Enter a cost greater than zero', de: 'Trage Selbstkosten größer als null ein', uk: 'Введіть собівартість більшу за нуль' },
  'Маржа должна быть меньше 100%': { en: 'The margin must be below 100%', de: 'Die Marge muss unter 100 % liegen', uk: 'Маржа має бути меншою за 100%' },
  'Цена продажи ниже себестоимости, поэтому наценка и маржа отрицательные.': { en: 'The selling price is below the cost, so both markup and margin are negative.', de: 'Der Verkaufspreis liegt unter den Selbstkosten, deshalb sind Aufschlag und Marge negativ.', uk: 'Ціна продажу нижча за собівартість, тому націнка й маржа відʼємні.' },
  'Введите цену больше нуля': { en: 'Enter a price greater than zero', de: 'Trage einen Preis über null ein', uk: 'Введіть ціну більшу за нуль' },
  'Выберите исходную дату': { en: 'Select a start date', de: 'Wähle ein Ausgangsdatum', uk: 'Оберіть початкову дату' },
  'Интервал не может быть отрицательным': { en: 'The interval cannot be negative', de: 'Der Abstand kann nicht negativ sein', uk: 'Інтервал не може бути відʼємним' },
  'Сумма кредита должна быть положительной': { en: 'The loan amount must be greater than zero', de: 'Der Darlehensbetrag muss größer als null sein', uk: 'Сума кредиту має бути більшою за нуль' },
  'Постоянные затраты не могут быть отрицательными': { en: 'Fixed costs cannot be negative', de: 'Die Fixkosten können nicht negativ sein', uk: 'Постійні витрати не можуть бути відʼємними' },
  'Цена продажи должна быть больше нуля': { en: 'The selling price must be greater than zero', de: 'Der Verkaufspreis muss größer als null sein', uk: 'Ціна продажу має бути більшою за нуль' },
  'Переменные затраты не могут быть отрицательными': { en: 'Variable costs cannot be negative', de: 'Die variablen Kosten können nicht negativ sein', uk: 'Змінні витрати не можуть бути відʼємними' },
  'Переменные затраты не ниже цены продажи, поэтому маржинальная прибыль не положительна. При таких условиях увеличение продаж не приводит к безубыточности: сначала нужно поднять цену или снизить переменные затраты.': { en: 'The variable cost is not below the selling price, so the contribution margin is not positive. Under these conditions selling more never reaches break-even: the price has to go up or the variable cost has to come down first.', de: 'Die variablen Kosten liegen nicht unter dem Verkaufspreis, deshalb ist der Deckungsbeitrag nicht positiv. Unter diesen Bedingungen führt mehr Absatz nie zur Gewinnschwelle: zuerst muss der Preis steigen oder die variablen Kosten müssen sinken.', uk: 'Змінні витрати не нижчі за ціну продажу, тому маржинальний прибуток не є додатним. За таких умов збільшення продажів не приводить до беззбитковості: спочатку потрібно підняти ціну або знизити змінні витрати.' },
  'Плановый объём меньше точки безубыточности, поэтому запас прочности отрицательный, а расчёт показывает убыток.': { en: 'The planned volume is below the break-even point, so the margin of safety is negative and the calculation shows a loss.', de: 'Die geplante Menge liegt unter der Gewinnschwelle, deshalb ist die Sicherheitsspanne negativ und die Rechnung weist einen Verlust aus.', uk: 'Плановий обсяг менший за точку беззбитковості, тому запас міцності відʼємний, а розрахунок показує збиток.' },
  'Обхваты, метод ВМС США': { en: 'U.S. Navy circumference method', de: 'Umfänge, Methode der US Navy', uk: 'Метод ВМС США за обхватами' },
  'Это оценка по обхватам, а не измерение. Погрешность метода составляет несколько процентных пунктов и растёт при неточных замерах ленты. Результат не является медицинским заключением.': { en: 'This is an estimate from circumferences, not a measurement. The method is accurate to within a few percentage points, and the error grows with imprecise tape work. The result is not a medical assessment.', de: 'Das ist eine Schätzung aus Umfängen und keine Messung. Die Methode trifft auf wenige Prozentpunkte genau, und der Fehler wächst bei ungenauem Anlegen des Maßbands. Das Ergebnis ist kein medizinischer Befund.', uk: 'Це оцінка за обхватами, а не вимірювання. Похибка методу становить кілька відсоткових пунктів і зростає за неточних замірів стрічкою. Результат не є медичним висновком.' },
  'Обхват талии должен быть больше обхвата шеи': { en: 'The waist circumference must be larger than the neck circumference', de: 'Der Taillenumfang muss größer als der Halsumfang sein', uk: 'Обхват талії має бути більшим за обхват шиї' },
  'Сумма обхватов талии и бёдер должна быть больше обхвата шеи': { en: 'Waist plus hip circumference must be larger than the neck circumference', de: 'Taillen- und Hüftumfang zusammen müssen größer als der Halsumfang sein', uk: 'Сума обхватів талії та стегон має бути більшою за обхват шиї' },
  'Сочетание обхватов выходит за пределы применимости метода — проверьте измерения': { en: 'This combination of circumferences falls outside the range where the method applies — check the measurements', de: 'Diese Kombination von Umfängen liegt außerhalb des Bereichs, in dem die Methode gilt — prüfe die Messungen', uk: 'Поєднання обхватів виходить за межі застосовності методу — перевірте виміри' },
  'Введите рост больше нуля': { en: 'Enter a height greater than zero', de: 'Trage eine Größe über null ein', uk: 'Введіть зріст більший за нуль' },
  'Введите обхват шеи больше нуля': { en: 'Enter a neck circumference greater than zero', de: 'Trage einen Halsumfang über null ein', uk: 'Введіть обхват шиї більший за нуль' },
  'Введите обхват талии больше нуля': { en: 'Enter a waist circumference greater than zero', de: 'Trage einen Taillenumfang über null ein', uk: 'Введіть обхват талії більший за нуль' },
  'Введите обхват бёдер больше нуля': { en: 'Enter a hip circumference greater than zero', de: 'Trage einen Hüftumfang über null ein', uk: 'Введіть обхват стегон більший за нуль' },
  'Введите положительные размеры стены': { en: 'Enter positive wall dimensions', de: 'Trage positive Wandmaße ein', uk: 'Введіть додатні розміри стіни' },
  'Введите положительные размеры камня': { en: 'Enter positive unit dimensions', de: 'Trage positive Steinmaße ein', uk: 'Введіть додатні розміри каменю' },
  'Толщина шва не может быть отрицательной': { en: 'The mortar joint cannot be negative', de: 'Die Fugendicke kann nicht negativ sein', uk: 'Товщина шва не може бути відʼємною' },
  'Площадь проёмов не может быть отрицательной': { en: 'The area of openings cannot be negative', de: 'Die Fläche der Öffnungen kann nicht negativ sein', uk: 'Площа прорізів не може бути відʼємною' },
  'Запас не может быть отрицательным': { en: 'The waste allowance cannot be negative', de: 'Die Reserve kann nicht negativ sein', uk: 'Запас не може бути відʼємним' },
  'Проёмы занимают всю стену — кладка не требуется': { en: 'The openings fill the whole wall — there is nothing to build', de: 'Die Öffnungen füllen die ganze Wand — es ist nichts zu mauern', uk: 'Прорізи займають усю стіну — класти нічого' },
  'Расчёт выполнен для одного слоя кладки по видимой плоскости стены. Кладка в кирпич и толще, перевязка, простенки и доборные элементы не моделируются, поэтому перед закупкой сверьтесь с проектом.': { en: 'The calculation covers a single leaf of masonry measured on the visible face of the wall. Walls one brick thick or more, bonding patterns, piers and special units are not modelled, so check your drawings before ordering.', de: 'Gerechnet ist eine einschalige Wand, gemessen an der sichtbaren Wandfläche. Wände von einem Stein Dicke und mehr, Verband, Pfeiler und Ergänzungssteine werden nicht abgebildet, prüfe vor dem Einkauf also die Planung.', uk: 'Розрахунок виконано для одного шару кладки по видимій площині стіни. Кладка в цеглину й товща, перевʼязка, простінки та добірні елементи не моделюються, тому перед закупівлею звіртеся з проєктом.' },
  'официальный справочный': { en: 'official reference rate', de: 'amtlicher Referenzkurs', uk: 'офіційний довідковий' },
  'Это не курс в реальном времени. Используются официальные справочные курсы центральных банков на указанную дату. Банки и обменные пункты могут использовать другие курсы и комиссии.': { en: 'These are not real-time rates. The calculation uses official central-bank reference rates for the displayed date. Banks and exchange services may use different rates and fees.', de: 'Das sind keine Echtzeitkurse. Verwendet werden die amtlichen Referenzkurse der Zentralbanken zum angezeigten Datum. Banken und Wechselstuben können andere Kurse und Gebühren ansetzen.', uk: 'Це не курс у реальному часі. Розрахунок використовує офіційні довідкові курси центральних банків на вказану дату. Банки та обмінні сервіси можуть застосовувати інші курси й комісії.' },
  'Курсы успешно обновлены при последней сборке сайта.': { en: 'Rates were updated successfully during the latest site build.', de: 'Die Kurse wurden beim letzten Bau der Website erfolgreich aktualisiert.', uk: 'Курси успішно оновлено під час останнього складання сайту.' },
  'Дата курса старше четырёх дней. Данные могут быть устаревшими.': { en: 'The reference-rate date is more than four days old. The data may be stale.', de: 'Das Kursdatum liegt mehr als vier Tage zurück. Die Daten können veraltet sein.', uk: 'Дата довідкового курсу старша за чотири дні. Дані можуть бути застарілими.' },
  'Не удалось обновить курсы при последней сборке. Используются последние сохранённые данные.': { en: 'The latest build could not update the rates. The last saved data is being used.', de: 'Beim letzten Bau ließen sich die Kurse nicht aktualisieren. Verwendet werden die zuletzt gespeicherten Daten.', uk: 'Під час останнього складання не вдалося оновити курси. Використовуються останні збережені дані.' },
  'Европейский центральный банк': { en: 'European Central Bank', de: 'Europäische Zentralbank', uk: 'Європейський центральний банк' },
  'Национальный банк Украины': { en: 'National Bank of Ukraine', de: 'Nationalbank der Ukraine', uk: 'Національний банк України' },
  'Национальный банк Молдовы': { en: 'National Bank of Moldova', de: 'Nationalbank der Republik Moldau', uk: 'Національний банк Молдови' },
  'Exchange Rate API': { en: 'Exchange Rate API', de: 'Exchange Rate API', uk: 'Exchange Rate API' },
  'Резервный источник': { en: 'Fallback source', de: 'Ersatzquelle', uk: 'Резервне джерело' },
  'Основной источник был недоступен, курс получен из резервного.': { en: 'The primary source was unavailable, so this rate came from the fallback source.', de: 'Die Hauptquelle war nicht erreichbar, der Kurs stammt aus der Ersatzquelle.', uk: 'Основне джерело було недоступне, тому курс отримано з резервного.' },
  'Курсы обновлены при последней сборке; часть валют получена из резервного источника.': { en: 'Rates were updated during the latest build; some currencies came from the fallback source.', de: 'Die Kurse wurden beim letzten Bau aktualisiert; ein Teil der Währungen stammt aus der Ersatzquelle.', uk: 'Курси оновлено під час останнього складання; частину валют отримано з резервного джерела.' },
  'Доллар США': { en: 'US dollar', de: 'US-Dollar', uk: 'Долар США' },
  'Евро': { en: 'Euro', de: 'Euro', uk: 'Євро' },
  'Молдавский лей': { en: 'Moldovan leu', de: 'Moldauischer Leu', uk: 'Молдовський лей' },
  'Румынский лей': { en: 'Romanian leu', de: 'Rumänischer Leu', uk: 'Румунський лей' },
  'Гривна': { en: 'Ukrainian hryvnia', de: 'Hrywnja', uk: 'Українська гривня' },
  'Польский злотый': { en: 'Polish zloty', de: 'Polnischer Złoty', uk: 'Польський злотий' },
  'Фунт стерлингов': { en: 'Pound sterling', de: 'Pfund Sterling', uk: 'Фунт стерлінгів' },
  'Швейцарский франк': { en: 'Swiss franc', de: 'Schweizer Franken', uk: 'Швейцарський франк' },
  'Турецкая лира': { en: 'Turkish lira', de: 'Türkische Lira', uk: 'Турецька ліра' },
  'Норма': { en: 'Healthy range', de: 'Normalbereich', uk: 'Нормальний діапазон' },
  'Недостаток веса': { en: 'Underweight', de: 'Untergewicht', uk: 'Недостатня вага' },
  'Выраженный дефицит': { en: 'Severely underweight', de: 'Starkes Untergewicht', uk: 'Виражений дефіцит ваги' },
  'Избыточный вес': { en: 'Overweight', de: 'Übergewicht', uk: 'Надмірна вага' },
  'Ожирение I степени': { en: 'Obesity class I', de: 'Adipositas Grad I', uk: 'Ожиріння I ступеня' },
  'Ожирение II степени': { en: 'Obesity class II', de: 'Adipositas Grad II', uk: 'Ожиріння II ступеня' },
  'Ожирение III степени': { en: 'Obesity class III', de: 'Adipositas Grad III', uk: 'Ожиріння III ступеня' },
  'Поддерживайте текущий режим.': { en: 'Keep your current routine.', de: 'Behalte deine derzeitige Routine bei.', uk: 'Підтримуйте поточний режим.' },
  'Стоит набрать немного массы.': { en: 'Consider gaining some weight.', de: 'Etwas zuzunehmen wäre sinnvoll.', uk: 'Варто трохи збільшити масу тіла.' },
  'Рекомендуется снизить вес.': { en: 'Consider reducing your weight.', de: 'Eine Gewichtsabnahme ist ratsam.', uk: 'Рекомендується знизити вагу.' },
  'Обратитесь к специалисту.': { en: 'Consult a healthcare professional.', de: 'Wende dich an eine Fachkraft.', uk: 'Зверніться до фахівця.' },
  'Необходима консультация врача.': { en: 'A medical consultation is recommended.', de: 'Eine ärztliche Beratung ist nötig.', uk: 'Рекомендована консультація лікаря.' },
  'Срочно к врачу.': { en: 'Seek medical advice promptly.', de: 'Suche zeitnah ärztlichen Rat.', uk: 'Якнайшвидше зверніться до лікаря.' },
  'Срочно обратитесь к врачу.': { en: 'Seek medical advice promptly.', de: 'Suche zeitnah ärztlichen Rat.', uk: 'Якнайшвидше зверніться до лікаря.' },
  'Показан размер первого (наибольшего) платежа. Далее платёж снижается.': { en: 'The first and largest payment is shown. Later payments gradually decrease.', de: 'Gezeigt ist die erste und höchste Rate. Danach sinkt die Rate allmählich.', uk: 'Показано перший і найбільший платіж. Наступні платежі поступово зменшуються.' },
  'Показан размер первого (наибольшего) платежа.': { en: 'The first and largest payment is shown.', de: 'Gezeigt ist die erste und höchste Rate.', uk: 'Показано перший і найбільший платіж.' },
  'Точность формулы снижается при повторениях больше 10.': { en: 'The estimate becomes less accurate above 10 repetitions.', de: 'Über 10 Wiederholungen wird die Schätzung ungenauer.', uk: 'Точність оцінки знижується, якщо повторень більше 10.' },
  'ИМТ — ориентировочный показатель для взрослых. Он может быть менее точным для спортсменов, беременных и людей старшего возраста.': { en: 'BMI is a screening measure for adults. It can be less accurate for athletes, pregnant people, and older adults.', de: 'Der BMI ist ein Orientierungswert für Erwachsene. Bei Sportlern, Schwangeren und älteren Menschen kann er weniger genau sein.', uk: 'ІМТ є орієнтовним показником для дорослих. Він може бути менш точним для спортсменів, вагітних і людей старшого віку.' },
  'Показаны первые 12 месяцев и последний платеж.': { en: 'The first 12 months and the final payment are shown.', de: 'Gezeigt sind die ersten 12 Monate und die letzte Rate.', uk: 'Показано перші 12 місяців і останній платіж.' },
  'Таблица предполагает равномерный темп на всей дистанции.': { en: 'The table assumes an even pace over the entire distance.', de: 'Die Tabelle setzt ein gleichmäßiges Tempo über die ganze Strecke voraus.', uk: 'Таблиця передбачає рівномірний темп на всій дистанції.' },
  'Получилось очень низкое значение калорий. Не используйте такой дефицит без консультации врача или диетолога.': { en: 'The calculated calorie target is very low. Do not use this deficit without advice from a doctor or registered dietitian.', de: 'Der berechnete Kalorienwert ist sehr niedrig. Nutze ein solches Defizit nicht ohne ärztlichen oder ernährungsfachlichen Rat.', uk: 'Розрахована калорійність дуже низька. Не використовуйте такий дефіцит без консультації лікаря або дієтолога.' },
  'Расчёт служит стартовой оценкой. Корректируйте калорийность по динамике веса за 2–3 недели.': { en: 'Use this as a starting estimate and adjust calories based on your weight trend over 2–3 weeks.', de: 'Nimm das als Ausgangsschätzung und passe die Kalorien nach dem Gewichtsverlauf über 2–3 Wochen an.', uk: 'Використовуйте результат як початкову оцінку та коригуйте калорійність за динамікою ваги протягом 2–3 тижнів.' },
  'Введите положительные значения': { en: 'Enter positive values', de: 'Trage positive Werte ein', uk: 'Введіть додатні значення' },
  'Введите положительные размеры': { en: 'Enter positive dimensions', de: 'Trage positive Maße ein', uk: 'Введіть додатні розміри' },
  'Введите рост и вес': { en: 'Enter height and weight', de: 'Trage Größe und Gewicht ein', uk: 'Введіть зріст і вагу' },
  'Введите рост, вес и возраст': { en: 'Enter height, weight, and age', de: 'Trage Größe, Gewicht und Alter ein', uk: 'Введіть зріст, вагу та вік' },
  'Введите дистанцию и время': { en: 'Enter distance and time', de: 'Trage Strecke und Zeit ein', uk: 'Введіть дистанцію та час' },
  'Введите вес и количество повторений': { en: 'Enter weight and repetitions', de: 'Trage Gewicht und Wiederholungen ein', uk: 'Введіть вагу та кількість повторень' },
  'Выберите дату рождения': { en: 'Select a birth date', de: 'Wähle ein Geburtsdatum', uk: 'Оберіть дату народження' },
  'Выберите начало и конец': { en: 'Select start and end dates', de: 'Wähle Anfang und Ende', uk: 'Оберіть початкову та кінцеву дати' },
  'Дата конца раньше начала': { en: 'The end date is before the start date', de: 'Das Enddatum liegt vor dem Anfangsdatum', uk: 'Кінцева дата передує початковій' },
  'Дата расчёта раньше даты рождения': { en: 'The calculation date is before the birth date', de: 'Das Rechendatum liegt vor dem Geburtsdatum', uk: 'Дата розрахунку передує даті народження' },
  'Неизвестная валюта': { en: 'Unknown currency', de: 'Unbekannte Währung', uk: 'Невідома валюта' },
  'Целое не может быть равно нулю': { en: 'The whole value cannot be zero', de: 'Das Ganze kann nicht null sein', uk: 'Ціле значення не може дорівнювати нулю' },
  'Исходное значение не может быть равно нулю': { en: 'The starting value cannot be zero', de: 'Der Ausgangswert kann nicht null sein', uk: 'Початкове значення не може дорівнювати нулю' },
  'Процент от числа': { en: 'Percentage of a number', de: 'Prozent einer Zahl', uk: 'Відсоток від числа' },
  'Часть от целого': { en: 'Part as a percentage of a whole', de: 'Anteil am Ganzen', uk: 'Частка від цілого у відсотках' },
  'Прибавить процент': { en: 'Add a percentage', de: 'Prozent addieren', uk: 'Додати відсоток' },
  'Вычесть процент': { en: 'Subtract a percentage', de: 'Prozent abziehen', uk: 'Відняти відсоток' },
  'Процентное изменение': { en: 'Percentage change', de: 'Prozentuale Änderung', uk: 'Відсоткова зміна' },
  'Проценты': { en: 'Percentages', de: 'Prozent', uk: 'Відсотки' },
  'Воскресенье': { en: 'Sunday', de: 'Sonntag', uk: 'Неділя' },
  'Понедельник': { en: 'Monday', de: 'Montag', uk: 'Понеділок' },
  'Вторник': { en: 'Tuesday', de: 'Dienstag', uk: 'Вівторок' },
  'Среда': { en: 'Wednesday', de: 'Mittwoch', uk: 'Середа' },
  'Четверг': { en: 'Thursday', de: 'Donnerstag', uk: 'Четвер' },
  'Пятница': { en: 'Friday', de: 'Freitag', uk: 'П’ятниця' },
  'Суббота': { en: 'Saturday', de: 'Samstag', uk: 'Субота' },
};;


// Подписи строк результата. Русский ключ пишется один раз, переводы стоят
// рядом с ним: три отдельные карты держали в файле три копии каждого ключа, и
// этот файл уезжает в браузер на каждой странице калькулятора.
//
// Пустая клетка означает, что для локали перевода нет: тогда работает хвост
// подстановок в localizedResultLabel, а не чужой язык.
// Экспортируется ради ворот от утечек: тест обязан отличать «перевода нет» от
// «перевод совпадает с русским». По выводу функции их не различить —
// «Запас» по-украински тоже «Запас», — а по факту объявления различить можно.
export const resultLabelPhrases: Record<string, Partial<Record<Locale, string>>> = {
  'Количество камней': { en: 'Units needed', uk: 'Кількість каменів', de: 'Anzahl der Steine' },
  'Площадь кладки': { en: 'Masonry area', uk: 'Площа кладки', de: 'Mauerwerksfläche' },
  'Площадь проёмов': { en: 'Openings area', uk: 'Площа прорізів' },
  'Камней без запаса': { en: 'Units without waste', uk: 'Каменів без запасу', de: 'Steine ohne Reserve' },
  'Расчётный модуль камня': { en: 'Working module per unit', uk: 'Розрахунковий модуль каменю', de: 'Rechenmodul des Steins' },
  'Камней на квадратный метр': { en: 'Units per square metre', uk: 'Каменів на квадратний метр', de: 'Steine je Quadratmeter' },
  'Процент жира': { en: 'Body fat percentage', uk: 'Відсоток жиру', de: 'Körperfettanteil' },
  'Метод расчёта': { en: 'Method', uk: 'Метод розрахунку', de: 'Rechenweg' },
  'Обхват талии': { en: 'Waist circumference', uk: 'Обхват талії', de: 'Taillenumfang' },
  'Обхват шеи': { en: 'Neck circumference', uk: 'Обхват шиї', de: 'Halsumfang' },
  'Обхват бёдер': { en: 'Hip circumference', uk: 'Обхват стегон', de: 'Hüftumfang' },
  'Талия минус шея': { en: 'Waist minus neck', uk: 'Талія мінус шия', de: 'Taille minus Hals' },
  'Талия плюс бёдра минус шея': { en: 'Waist plus hips minus neck', uk: 'Талія плюс стегна мінус шия', de: 'Taille plus Hüfte minus Hals' },
  'Точка безубыточности': { en: 'Break-even point', uk: 'Точка беззбитковості', de: 'Gewinnschwelle' },
  'Маржинальная прибыль с единицы': { en: 'Contribution margin per unit', uk: 'Маржинальний прибуток з одиниці', de: 'Deckungsbeitrag je Einheit' },
  'Коэффициент маржинальной прибыли': { en: 'Contribution margin ratio', uk: 'Коефіцієнт маржинального прибутку', de: 'Deckungsbeitragsquote' },
  'Расчётный объём без округления': { en: 'Calculated volume before rounding', uk: 'Розрахунковий обсяг без округлення', de: 'Rechnerische Menge ohne Rundung' },
  'Выручка при расчётном объёме': { en: 'Revenue at the calculated volume', uk: 'Виручка за розрахункового обсягу', de: 'Umsatz bei der rechnerischen Menge' },
  'Выручка при целом числе единиц': { en: 'Revenue at whole units', uk: 'Виручка за цілого числа одиниць', de: 'Umsatz bei ganzen Einheiten' },
  'Выручка при плане продаж': { en: 'Revenue at the planned volume', uk: 'Виручка за планового обсягу', de: 'Umsatz bei der geplanten Menge' },
  'Маржинальная прибыль при плане': { en: 'Contribution at the planned volume', uk: 'Маржинальний прибуток за планом', de: 'Deckungsbeitrag bei der geplanten Menge' },
  'Прибыль при плане': { en: 'Profit at the planned volume', uk: 'Прибуток за планом', de: 'Gewinn bei der geplanten Menge' },
  'Запас прочности': { en: 'Margin of safety', uk: 'Запас міцності', de: 'Sicherheitsspanne' },
  'Запас прочности, %': { en: 'Margin of safety, %', uk: 'Запас міцності, %', de: 'Sicherheitsspanne, %' },
  'Переменные затраты на единицу': { en: 'Variable cost per unit', uk: 'Змінні витрати на одиницю' },
  'Ежемесячный платеж': { en: 'Monthly payment', uk: 'Щомісячний платіж', de: 'Monatliche Rate' },
  'Общая сумма выплат': { en: 'Total repayment', uk: 'Загальна сума виплат', de: 'Summe aller Zahlungen' },
  'Переплата': { en: 'Overpayment', uk: 'Переплата', de: 'Mehrkosten' },
  'Сумма процентов': { en: 'Interest amount', uk: 'Сума відсотків', de: 'Zinsen insgesamt' },
  'Срок': { en: 'Term', uk: 'Строк', de: 'Laufzeit' },
  'Проверьте данные': { en: 'Check inputs', uk: 'Перевірте дані', de: 'Prüfe die Werte' },
  'Введите положительные значения': { en: 'Enter positive values' },
  'Итоговая сумма': { en: 'Final amount', uk: 'Підсумкова сума', de: 'Endbetrag' },
  'Начисленные проценты': { en: 'Interest earned', uk: 'Нараховані відсотки' },
  'Сумма пополнений': { en: 'Total contributions', uk: 'Сума поповнень' },
  'Внесённая сумма': { en: 'Invested amount', uk: 'Внесена сума', de: 'Eingezahlter Betrag' },
  'Прибыль': { en: 'Profit', uk: 'Прибуток', de: 'Gewinn' },
  'Сумма кредита': { en: 'Loan amount', uk: 'Сума кредиту', de: 'Darlehensbetrag' },
  'Общая стоимость с взносом': { en: 'Total cost with down payment', uk: 'Загальна вартість із внеском', de: 'Gesamtkosten samt Anzahlung' },
  'Общая стоимость': { en: 'Total cost', uk: 'Загальна вартість', de: 'Gesamtkosten' },
  'Цена со скидкой': { en: 'Discounted price', uk: 'Ціна зі знижкою', de: 'Preis nach Rabatt' },
  'Размер скидки': { en: 'Discount amount', uk: 'Розмір знижки', de: 'Rabattbetrag' },
  'Процент скидки': { en: 'Discount percentage', uk: 'Відсоток знижки', de: 'Rabatt in Prozent' },
  'Исходная цена': { en: 'Original price', uk: 'Початкова ціна', de: 'Ursprünglicher Preis' },
  'Результат': { en: 'Result', uk: 'Результат', de: 'Ergebnis' },
  'Курс': { en: 'Rate', uk: 'Курс', de: 'Wechselkurs' },
  'Из': { en: 'From', uk: 'З', de: 'Von' },
  'В': { en: 'To', uk: 'У', de: 'Nach' },
  'Тип курса': { en: 'Rate type', uk: 'Тип курсу', de: 'Art des Kurses' },
  'Дата курса': { en: 'Rate date', uk: 'Дата курсу', de: 'Kursdatum' },
  'Дата обновления': { en: 'Update date', uk: 'Дата оновлення', de: 'Stand vom' },
  'Статус обновления': { en: 'Update status', uk: 'Статус оновлення', de: 'Stand der Aktualisierung' },
  'Последняя попытка обновления': { en: 'Last update attempt', uk: 'Остання спроба оновлення', de: 'Letzter Aktualisierungsversuch' },
  'Источник': { en: 'Source', uk: 'Джерело', de: 'Quelle' },
  'ИМТ': { en: 'BMI', uk: 'ІМТ', de: 'BMI' },
  'Категория': { en: 'Category', uk: 'Категорія', de: 'Kategorie' },
  'Комментарий': { en: 'Note', uk: 'Коментар', de: 'Hinweis' },
  'Рост': { en: 'Height', uk: 'Зріст', de: 'Körpergröße' },
  'Вес': { en: 'Weight', uk: 'Вага', de: 'Gewicht' },
  'Дневная норма': { en: 'Daily target', uk: 'Добова норма', de: 'Tagesbedarf' },
  'Базовый обмен (BMR)': { en: 'Basal metabolic rate (BMR)', uk: 'Базовий обмін (BMR)', de: 'Grundumsatz (BMR)' },
  'Белки': { en: 'Protein', uk: 'Білки', de: 'Eiweiß' },
  'Жиры': { en: 'Fat', uk: 'Жири', de: 'Fett' },
  'Углеводы': { en: 'Carbs', uk: 'Вуглеводи', de: 'Kohlenhydrate' },
  'Темп': { en: 'Pace', uk: 'Темп', de: 'Tempo' },
  'Средняя скорость': { en: 'Average speed', uk: 'Середня швидкість', de: 'Durchschnittsgeschwindigkeit' },
  'Прогноз на 5 км': { en: '5K prediction', uk: 'Прогноз на 5 км', de: 'Prognose für 5 km' },
  'Прогноз на 10 км': { en: '10K prediction', uk: 'Прогноз на 10 км', de: 'Prognose für 10 km' },
  'Прогноз на полумарафон': { en: 'Half marathon prediction', uk: 'Прогноз на півмарафон', de: 'Prognose für den Halbmarathon' },
  'Прогноз на марафон': { en: 'Marathon prediction', uk: 'Прогноз на марафон', de: 'Prognose für den Marathon' },
  'Примерный 1ПМ': { en: 'Estimated 1RM', uk: 'Орієнтовний 1ПМ', de: 'Geschätztes 1RM' },
  'Количество плиток': { en: 'Tiles needed', uk: 'Кількість плиток', de: 'Anzahl der Fliesen' },
  'Площадь': { en: 'Area', uk: 'Площа', de: 'Fläche' },
  'Площадь с запасом': { en: 'Area with reserve', uk: 'Площа із запасом', de: 'Fläche mit Reserve' },
  'Количество упаковок': { en: 'Packs needed', uk: 'Кількість упаковок', de: 'Anzahl der Pakete' },
  'Примерный расход клея': { en: 'Approximate adhesive', uk: 'Орієнтовна витрата клею', de: 'Ungefährer Kleberbedarf' },
  'Количество рулонов': { en: 'Rolls needed', uk: 'Кількість рулонів', de: 'Anzahl der Rollen' },
  'Площадь стен': { en: 'Wall area', uk: 'Площа стін', de: 'Wandfläche' },
  'Периметр': { en: 'Perimeter', uk: 'Периметр', de: 'Umfang' },
  'Количество полотен': { en: 'Strips needed', uk: 'Кількість полотен', de: 'Anzahl der Bahnen' },
  'Полотен из рулона': { en: 'Strips per roll', uk: 'Полотен із рулону', de: 'Bahnen je Rolle' },
  'Запас': { en: 'Reserve', uk: 'Запас', de: 'Reserve' },
  'Заданный запас': { en: 'Added reserve', uk: 'Доданий запас', de: 'Gewählte Reserve' },
  'Остаток из-за целых банок': { en: 'Remainder from full cans', uk: 'Залишок через цілі банки', de: 'Rest durch ganze Dosen' },
  'Литры краски': { en: 'Paint liters', uk: 'Літри фарби', de: 'Farbe in Litern' },
  'Площадь окрашивания': { en: 'Paint area', uk: 'Площа фарбування', de: 'Zu streichende Fläche' },
  'Слоёв': { en: 'Coats', uk: 'Шарів', de: 'Anstriche' },
  'Количество банок': { en: 'Cans needed', uk: 'Кількість банок', de: 'Anzahl der Dosen' },
  'Площадь пола': { en: 'Floor area', uk: 'Площа підлоги', de: 'Bodenfläche' },
  'Площадь упаковки': { en: 'Pack coverage', uk: 'Площа упаковки', de: 'Fläche eines Pakets' },
  'Возраст': { en: 'Age', uk: 'Вік', de: 'Alter' },
  'Полных лет': { en: 'Full years', uk: 'Повних років', de: 'Volle Jahre' },
  'Месяцев (сверх лет)': { en: 'Months after years', uk: 'Місяців понад повні роки', de: 'Monate (über die Jahre hinaus)' },
  'Месяцев': { en: 'Months', uk: 'Місяців', de: 'Monate' },
  'Дней (сверх месяцев)': { en: 'Days after months', uk: 'Днів понад повні місяці', de: 'Tage (über die Monate hinaus)' },
  'Дней': { en: 'Days', uk: 'Днів', de: 'Tage' },
  'Всего прожито дней': { en: 'Total days lived', uk: 'Усього прожито днів', de: 'Gelebte Tage insgesamt' },
  'Рабочие дни': { en: 'Business days', uk: 'Робочі дні', de: 'Arbeitstage' },
  'Календарные дни': { en: 'Calendar days', uk: 'Календарні дні', de: 'Kalendertage' },
  'Итоговая дата': { en: 'Resulting date', uk: 'Підсумкова дата', de: 'Ergebnisdatum' },
  'День недели': { en: 'Day of the week', uk: 'День тижня', de: 'Wochentag' },
  'Исходная дата': { en: 'Start date', uk: 'Початкова дата', de: 'Ausgangsdatum' },
  'Всего календарных дней': { en: 'Total calendar days', uk: 'Усього календарних днів', de: 'Kalendertage insgesamt' },
  'Номер дня в году': { en: 'Day of the year', uk: 'Номер дня в році', de: 'Tag des Jahres' },
  'Номер недели (ISO)': { en: 'ISO week number', uk: 'Номер тижня (ISO)', de: 'Kalenderwoche (ISO)' },
  'Объём раствора': { en: 'Mortar volume', uk: 'Об’єм розчину', de: 'Estrichvolumen' },
  'Толщина слоя': { en: 'Layer thickness', uk: 'Товщина шару', de: 'Schichtdicke' },
  'Сухая смесь': { en: 'Dry mix', uk: 'Суха суміш', de: 'Trockenmischung' },
  'Мешков': { en: 'Bags', uk: 'Мішків', de: 'Säcke' },
  'Стоимость смеси': { en: 'Dry mix cost', uk: 'Вартість суміші', de: 'Kosten der Trockenmischung' },
  'Цена продажи': { en: 'Selling price', uk: 'Ціна продажу', de: 'Verkaufspreis' },
  'Себестоимость': { en: 'Cost', uk: 'Собівартість', de: 'Selbstkosten' },
  'Прибыль с единицы': { en: 'Profit per unit', uk: 'Прибуток з одиниці', de: 'Gewinn je Einheit' },
  'Наценка': { en: 'Markup', uk: 'Націнка', de: 'Aufschlag' },
  'Маржа': { en: 'Margin', uk: 'Маржа', de: 'Marge' },
  'Прибыль за партию': { en: 'Profit for the batch', uk: 'Прибуток за партію', de: 'Gewinn der Partie' },
  'Выходные дни': { en: 'Weekend days', uk: 'Вихідні дні', de: 'Wochenendtage' },
  'Исключённые даты': { en: 'Excluded dates', uk: 'Виключені дати', de: 'Ausgeschlossene Daten' },
  'Режим': { en: 'Mode', uk: 'Режим', de: 'Aufgabe' },
  'Значение A': { en: 'Value A', uk: 'Значення A', de: 'Wert A' },
  'Значение B': { en: 'Value B', uk: 'Значення B', de: 'Wert B' },
  'Подсказка': { en: 'Hint', uk: 'Підказка' },
  'Ошибка': { en: 'Error', uk: 'Помилка', de: 'Fehler' },
  'Абсолютная разница': { en: 'Absolute difference', uk: 'Абсолютна різниця', de: 'Absoluter Unterschied' },
  'Изменение': { en: 'Change', uk: 'Зміна', de: 'Veränderung' },
  'Налог': { en: 'Tax', uk: 'Податок' },
  'Начислено (до налога)': { en: 'Gross income', uk: 'Нараховано до оподаткування' },
  'На руки (после налога)': { en: 'Net income', uk: 'Сума після оподаткування' },
  'Эффективная ставка': { en: 'Effective rate', uk: 'Ефективна ставка' },
  'Сумма без НДС': { en: 'Amount before VAT', uk: 'Сума без ПДВ' },
  'Сумма с НДС': { en: 'Amount including VAT', uk: 'Сума з ПДВ' },
  '50% от 1ПМ': { en: '50% of 1RM', uk: '50% від 1ПМ', de: '50 % vom 1RM' },
  '60% от 1ПМ': { en: '60% of 1RM', uk: '60% від 1ПМ', de: '60 % vom 1RM' },
  '70% от 1ПМ': { en: '70% of 1RM', uk: '70% від 1ПМ', de: '70 % vom 1RM' },
  '80% от 1ПМ': { en: '80% of 1RM', uk: '80% від 1ПМ', de: '80 % vom 1RM' },
  '90% от 1ПМ': { en: '90% of 1RM', uk: '90% від 1ПМ', de: '90 % vom 1RM' },
  'Последний платеж': { en: 'Final payment', uk: 'Останній платіж', de: 'Letzte Rate' },
  'Средний платеж': { en: 'Average payment', uk: 'Середній платіж', de: 'Durchschnittliche Rate' },
  'Первоначальный взнос': { en: 'Down payment', uk: 'Перший внесок', de: 'Anzahlung' },
  'График первых платежей': { en: 'Payment schedule', uk: 'Графік платежів', de: 'Plan der ersten Raten' },
  'Месяц': { en: 'Month', uk: 'Місяць', de: 'Monat' },
  'Платеж': { en: 'Payment', uk: 'Платіж', de: 'Rate' },
  'Основной долг': { en: 'Principal', uk: 'Основний борг', de: 'Tilgung' },
  'Проценты': { en: 'Interest', uk: 'Відсотки', de: 'Zinsen' },
  'Остаток': { en: 'Balance', uk: 'Залишок', de: 'Restschuld' },
  'Ориентир здорового веса': { en: 'Healthy weight reference', uk: 'Орієнтир здорової ваги', de: 'Richtwert für gesundes Gewicht' },
  'Формула Бжицки': { en: 'Brzycki formula', uk: 'Формула Бжицького', de: 'Formel von Brzycki' },
  'Формула Лэндера': { en: 'Lander formula', uk: 'Формула Лендера', de: 'Formel von Lander' },
  'Средняя оценка': { en: 'Average estimate', uk: 'Середня оцінка', de: 'Mittelwert der Schätzungen' },
  'Темп на милю': { en: 'Pace per mile', uk: 'Темп на милю', de: 'Tempo je Meile' },
  'Равномерные отрезки': { en: 'Even splits', uk: 'Рівномірні відрізки', de: 'Gleichmäßige Abschnitte' },
  'Дистанция': { en: 'Distance', uk: 'Дистанція', de: 'Strecke' },
  'Время': { en: 'Time', uk: 'Час', de: 'Zeit' },
  'День недели рождения': { en: 'Birth weekday', uk: 'День тижня народження', de: 'Wochentag der Geburt' },
  'Следующий день рождения': { en: 'Next birthday', uk: 'Наступний день народження', de: 'Nächster Geburtstag' },
  'До дня рождения': { en: 'Days until birthday', uk: 'До дня народження', de: 'Bis zum Geburtstag' },
  'Стоимость плитки': { en: 'Tile cost', uk: 'Вартість плитки', de: 'Kosten der Fliesen' },
  'Стоимость обоев': { en: 'Wallpaper cost', uk: 'Вартість шпалер', de: 'Kosten der Tapeten' },
  'Стоимость краски': { en: 'Paint cost', uk: 'Вартість фарби', de: 'Kosten der Farbe' },
  'Ориентировочная стоимость': { en: 'Estimated cost', uk: 'Орієнтовна вартість', de: 'Ungefähre Kosten' },
  'Плановый платеж с доплатой': { en: 'Planned payment with extra', uk: 'Плановий платіж із доплатою', de: 'Rate samt Sondertilgung' },
  'Разовая комиссия': { en: 'One-time fee', uk: 'Разова комісія', de: 'Einmalige Gebühr' },
  'Сокращение срока': { en: 'Term reduction', uk: 'Скорочення строку', de: 'Verkürzung der Laufzeit' },
  'Расход в месяц со страховкой': { en: 'Monthly cost with insurance', uk: 'Щомісячні витрати зі страхуванням', de: 'Monatliche Ausgabe samt Versicherung' },
  'Страховка и расходы за срок': { en: 'Insurance and costs over the term', uk: 'Страхування та витрати за весь строк', de: 'Versicherung und Kosten über die Laufzeit' },
  'Эффективная годовая ставка': { en: 'Effective annual rate', uk: 'Ефективна річна ставка' },
  'Динамика вклада': { en: 'Deposit growth', uk: 'Динаміка вкладу' },
  'Динамика по годам': { en: 'Year-by-year growth', uk: 'Динаміка за роками', de: 'Entwicklung nach Jahren' },
  'Год': { en: 'Year', uk: 'Рік', de: 'Jahr' },
  'Капитал': { en: 'Balance', uk: 'Капітал', de: 'Kapital' },
  'Внесено': { en: 'Contributed', uk: 'Внесено', de: 'Eingezahlt' },
  'Баланс': { en: 'Balance', uk: 'Баланс' },
  'Поддержание веса (TDEE)': { en: 'Weight maintenance (TDEE)', uk: 'Підтримання ваги (TDEE)', de: 'Gewicht halten (TDEE)' },
  'Дополнительная скидка': { en: 'Additional discount', uk: 'Додаткова знижка', de: 'Zusätzlicher Rabatt' },
  'Итого за товары': { en: 'Total for all items', uk: 'Разом за всі товари', de: 'Summe für die Artikel' },
  'Стоимость ламината': { de: 'Kosten des Laminats' },
  'Стоимость подложки': { de: 'Kosten der Trittschalldämmung' },
  'Стоимость камня': { de: 'Kosten der Steine' },
  'Ошибка формата': { de: 'Formatfehler' },
};




// Подписи результата легаси-калькуляторов по-немецки. У калькуляторов V2 своя
// карта в их собственной локализации; сюда попадает то, что живёт в общем
// каталоге и иначе вернулось бы английским.


// Подпись, которую раннер собирает вместе с числом лет: «Покупательная
// способность через 3». Точного ключа у неё быть не может — их столько, сколько
// возможных сроков, — поэтому переводится постоянная часть. Русский текст
// оставался в английской и украинской локалях именно из-за этого: перевод лежал
// в ведре `values`, а подписи строк ищутся в `results` и точным совпадением.
const COMPOSED_PURCHASING_POWER = 'Покупательная способность через';

export function localizedResultLabel(label: string, locale: Locale): string {
  if (locale === 'ru') return label;
  const direct = resultLabelPhrases[label]?.[locale];
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

  return label
    .replace('НДС', 'VAT')
    .replace('НДФЛ', 'Income tax')
    .replace(COMPOSED_PURCHASING_POWER, 'Purchasing power after')
    .replace(' от ', ' of ')
    .replace(' за мес.', ' per month')
    .replace(' за год', ' per year');
}
