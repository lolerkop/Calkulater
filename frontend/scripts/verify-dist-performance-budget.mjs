// Бюджеты производительности, версия 2.
//
// Прежняя версия смешивала две несовместимые вещи: то, что переживает
// посетитель одной страницы, и то, что выпускает сборка целиком. Пока
// приложение было одним бандлом, разницы не было. С разделением рантайма
// по калькуляторам эти величины пошли в разные стороны: нагрузка страницы
// упала с 92,6 до 88,1 КиБ gzip, а суммарный выпуск вырос со 106,8 до 111,3,
// потому что в dist теперь лежат десять чанков, из которых посетитель
// скачивает ровно один. Старый гейт объявлял это ухудшением.
//
// Поэтому метрики разделены на три группы.
//
//   ПРОИЗВОДИТЕЛЬНОСТЬ МАРШРУТА — жёсткие блокеры. Считается замыкание
//   импортов от корней страницы: то, что браузер обязан скачать на холодную.
//
//   МАСШТАБ АРХИТЕКТУРЫ — жёсткие блокеры. Ловят вырождение разделения:
//   раздувшийся общий чанк или чанк калькулятора, проглотивший весь остров.
//
//   МАСШТАБ ВЫПУСКА — жёсткие блокеры, но НОРМИРОВАННЫЕ НА ЧИСЛЕННОСТЬ.
//   Суммарный выпуск сам по себе мерой не является: он растёт линейно с
//   числом калькуляторов (1266 Б на калькулятор, R² = 0,99933 по девяти
//   историческим сборкам), потому что архитектура намеренно даёт каждому
//   калькулятору отдельный чанк. Абсолютный потолок на такой величине
//   измеряет численность продукта, а не дефект, и Phase 19S заменила его
//   наклонным бюджетом плюс прямыми мерами дублирования. Выведение
//   постоянных — в `js-scale.mjs`.
//
// Каталог вынесен отдельно намеренно. Это одна настоящая страница, и её вес
// растёт вместе с числом карточек — на 0,42 КиБ gzip на калькулятор по
// измерениям 28 → 36. Фиксированный потолок здесь означал бы «нельзя
// добавлять калькуляторы», а не «страница стала тяжёлой». Поэтому бюджет
// каталога — наклонный, с явным потолком, который и есть точка пересмотра
// его архитектуры.

import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { routeClosureSize } from './lib/assetClosure.mjs';

import {
  CATALOG_CERTIFIED_TOTAL,
  CATALOG_HTML_CEILING_GZIP,
  CATALOG_SCALE_RESERVE,
  catalogPageCountFor,
  catalogScaleTarget,
} from './catalog-scale.mjs';
import {
  JS_ASSET_BYTES_CEILING,
  JS_DEPLOY_FILE_CEILING,
  JS_OWN_MEDIAN_GZIP,
  JS_OWN_P95_GZIP,
  JS_PER_CALCULATOR_GZIP,
  JS_SHARED_GZIP_CEILING,
  JS_UBIQUITOUS_BYTES_PER_CHUNK,
  jsScaleBudget,
  percentile,
  ubiquitousMass,
} from './js-scale.mjs';
import {
  CATEGORY_ITEM_LIST_MAX,
  CATEGORY_MEMBERSHIP_LOOKAHEAD,
  CATEGORY_MEMBERSHIP_TARGET,
  categoryMembershipTarget,
} from './category-membership-scale.mjs';

const root = path.resolve('dist');
const astro = path.join(root, '_astro');

const budgets = {
  // ── производительность маршрута (жёстко) ──
  routeJsClosureGzip: 95 * 1024,
  routeHtmlGzip: 15 * 1024,
  // Props острова поиска. Индекс переехал в отдельный файл на локаль и
  // забирается по первому обращению к поиску; в разметке от него остаётся
  // только локаль. Раньше здесь лежал весь корпус — около 46 КБ сырого JSON
  // и больше половины веса страницы 404. Порог с большим запасом пропускает
  // локаль и подписи, но возврат массива калькуляторов роняет сборку.
  searchBoxPropsRaw: 512,
  // ── масштаб полосы разделов ──
  // Сколько ПОЛНЫХ перечней разделов вправе нести обычная страница. Сейчас их
  // два: полоса в шапке и перечень в подвале. Третьим был мобильный дубль
  // шапки — та же таксономия, отрендеренная второй раз в разметке, где 181 B
  // на раздел уходили на шесть утилит Tailwind, повторённых у каждой ссылки.
  // Вместе с подвалом раздел стоил три вхождения и ≈58 B gzip на КАЖДОЙ
  // странице, и обычный маршрут упирался в 15 КиБ уже на шестнадцатом разделе.
  // Порог ловит именно возврат этой архитектуры: не «многовато байт», а
  // «таксономия снова размножена по разметке».
  categoryListsPerRoute: 2,
  // До скольких разделов архитектура обязана дожить, не выйдя за routeHtmlGzip.
  // Отдельного потолка здесь НЕТ: проверяется тот же жёсткий 15 КиБ.
  categoryScaleTarget: 25,
  // Наклон пересчитан после того, как сетку забрал Astro, а из острова ушли
  // сериализованные калькуляторы: 0,14 КиБ на калькулятор на синтетике 48→100
  // и около 0,17 на реальных текстах. Порог 0,20 оставляет запас на разброс
  // копирайта, но ловит возврат второго представления каталога.
  catalogHtmlBaseGzip: 8 * 1024,
  catalogHtmlPerCardGzip: 0.2 * 1024,
  catalogHtmlCeilingGzip: CATALOG_HTML_CEILING_GZIP,
  // ── масштаб каталога ──
  // До скольких калькуляторов подборка обязана дожить, не выйдя за
  // catalogHtmlCeilingGzip. Своего потолка здесь НЕТ: проверяется тот же 30 КиБ.
  //
  // Phase 17S подняла цель с 200 до 300 — это НЕ послабление бюджета: потолок
  // остался тем же, изменилось лишь то, как далеко вперёд обязана смотреть
  // проверка.
  catalogCertifiedTotal: CATALOG_CERTIFIED_TOTAL,
  // Задел вперёд от ТЕКУЩЕГО числа карточек.
  //
  // Нужен потому, что фиксированная цель однажды остаётся позади. Ровно это и
  // случилось: при 200 в настройке и 203 на сайте прогноз молча выключился —
  // помощник возвращал null, строка отчёта исчезла, и проверка стала пустой в
  // тот самый момент, когда предупреждение было нужнее всего. Теперь проверка
  // всегда смотрит минимум на столько карточек вперёд, сколько бы их ни стало.
  catalogScaleReserve: CATALOG_SCALE_RESERVE,
  // Сколько калькуляторов вправе перечислять ItemList каталога. Разметка не
  // должна расти вместе с подборкой: полный перечень стоил 6,75 КиБ gzip —
  // четверть страницы — и повторял имя, описание и адрес каждой карточки,
  // тогда как обходчик берёт их из настоящих ссылок.
  catalogItemListMax: 24,
  // ── масштаб ОДНОГО раздела ──
  // Страница раздела обязана вывести всех своих членов прямой ссылкой: это её
  // работа и для читателя, и для обходчика. Значит всё, что стоит на карточке,
  // повторяется столько раз, сколько в разделе калькуляторов, и ровно столько
  // же раз повторяется запись ItemList. Раздел — второе после каталога место,
  // где вес определяется размером САЙТА, а не содержимым страницы.
  //
  // Своего потолка здесь нет: прогноз меряется тем же routeHtmlGzip.
  categoryMembershipTarget: CATEGORY_MEMBERSHIP_TARGET,
  categoryMembershipLookahead: CATEGORY_MEMBERSHIP_LOOKAHEAD,
  categoryItemListMax: CATEGORY_ITEM_LIST_MAX,
  // Локальная главная — вторая страница, размер которой определяется числом
  // калькуляторов, а не собственным содержимым: она встраивает JSON-LD со всем
  // каталогом и данные поиска по всем калькуляторам. Плоский маршрутный бюджет
  // измерял её неверно и сорвался бы на 42-м калькуляторе по причине, не
  // связанной с самой страницей. Коэффициенты сняты измерением: 36 → 48
  // калькуляторов дало 223 Б/калькулятор на ru, 248 на uk, 194 на en.
  // Главная перестала объявлять весь каталог в структурированных данных,
  // поэтому её наклон упал с 0,22 до 0,07 КиБ на калькулятор (синтетика
  // 48→100), около 0,08 на реальных текстах. Порог 0,12 держит запас.
  // Гидратационные props каталога обязаны оставаться постоянными по числу
  // калькуляторов. До правки остров получал весь массив и при сорока восьми
  // калькуляторах это было 33 878 сырых байт; теперь он получает только
  // категории и локаль — около 950. Порог в 4 КиБ ловит возврат массива
  // задолго до того, как это станет заметно на общем весе страницы.
  catalogPropsRaw: 4 * 1024,
  indexHtmlBaseGzip: 9 * 1024,
  indexHtmlPerCalculatorGzip: 0.12 * 1024,
  indexHtmlCeilingGzip: 24 * 1024,
  cssTotalGzip: 40 * 1024,

  // ── масштаб архитектуры (жёстко) ──
  // 28,0 КиБ при разделении против 33,5 при возврате к жадным импортам —
  // потолок выбран так, чтобы откат падал, а честный рост острова имел запас.
  sharedIslandGzip: 30 * 1024,
  calculatorRuntimeGzip: 8 * 1024,

  // ── масштаб выпуска (нормирован на число калькуляторов, см. js-scale.mjs) ──
  jsSharedGzipCeiling: JS_SHARED_GZIP_CEILING,
  jsPerCalculatorGzip: JS_PER_CALCULATOR_GZIP,
  jsOwnMedianGzip: JS_OWN_MEDIAN_GZIP,
  jsOwnP95Gzip: JS_OWN_P95_GZIP,
  jsUbiquitousBytesPerChunk: JS_UBIQUITOUS_BYTES_PER_CHUNK,
  deployFileCeiling: JS_DEPLOY_FILE_CEILING,
  assetBytesCeiling: JS_ASSET_BYTES_CEILING,
  totalHtmlGzipPerRoute: 12 * 1024,

  // ── ассеты (без изменений) ──
  fontFileGzip: 28 * 1024,
  fontTotalGzip: 125 * 1024,
  imageTotalGzip: 250 * 1024,
};

const issues = [];
const kib = (bytes) => `${(bytes / 1024).toFixed(1)} KiB`;
const gzipSize = (file) => zlib.gzipSync(fs.readFileSync(file)).length;

function listFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full));
    else out.push(full);
  }
  return out;
}

if (!fs.existsSync(root)) {
  console.error('dist directory not found. Run astro build first.');
  process.exit(1);
}

// Замыкание вынесено в отдельный модуль: его проверяют тесты на фикстурах,
// потому что именно от него зависит корректность всех бюджетов маршрута.
const closureOf = (htmlPath) => {
  const result = routeClosureSize(astro, htmlPath);
  return { modules: result.modules.size, raw: result.raw, gzip: result.gzip };
};

const files = listFiles(root);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const jsFiles = files.filter((file) => file.endsWith('.js'));
const cssFiles = files.filter((file) => file.endsWith('.css'));
const fontFiles = files.filter((file) => file.endsWith('.woff2'));
const imageFiles = files.filter((file) => /\.(?:avif|gif|jpe?g|png|svg|webp)$/i.test(file));

// Подборка — это КОРЕНЬ и все её страницы: бюджет маршрута и потолок
// одинаково относятся к каждой из них.
const isCatalog = (file) => /[/\\]calculators[/\\](page[/\\]\d+[/\\])?index\.html$/.test(file);
// Главная локали: dist/<locale>/index.html и только она.
const isLocaleIndex = (file) => /[/\\][a-z]{2}[/\\]index\.html$/.test(file);
const scalesWithCatalog = (file) => isCatalog(file) || isLocaleIndex(file);

// ── масштаб полосы разделов ──
//
// Проверяется СВОЙСТВО собранной страницы, а не текст исходника: сколько раз
// таксономия целиком разложена по разметке и во что это обойдётся, когда
// разделов станет вдвое больше. Грепом по Header.astro такое не поймать —
// дубль может вернуться из любого компонента.

// Полный перечень разделов — это набор ссылок на страницы разделов с общим
// префиксом data-testid. Раздел опознаётся по АДРЕСУ ссылки, а не по имени
// testid: иначе вложенные префиксы схлопывают проверку — «header-nav-mobile-math»
// подходит под шаблон «header-nav-<что-то>», и вернувшийся дубль растворяется
// в наборе вместо того, чтобы быть замеченным. Это ровно тот случай, на котором
// первая редакция проверки и провалилась под мутацией.
const categoryListPrefixes = (html) => {
  const groups = new Map();
  const anchor = /<a [^>]*?href="\/[a-z]{2}\/([a-z0-9-]+)\/"[^>]*?data-testid="([a-z0-9-]+)"/g;
  for (const [, slug, testid] of html.matchAll(anchor)) {
    if (!testid.endsWith(`-${slug}`)) continue;
    const prefix = testid.slice(0, -(slug.length + 1));
    if (!groups.has(prefix)) groups.set(prefix, new Set());
    groups.get(prefix).add(slug);
  }
  if (groups.size === 0) return { slugs: [], prefixes: [] };
  const widest = Math.max(...[...groups.values()].map((set) => set.size));
  // Пять — порог шума: хлебные крошки и «похожие» ссылки не образуют перечня.
  if (widest < 5) return { slugs: [], prefixes: [] };
  const full = [...groups.entries()].filter(([, set]) => set.size === widest);
  return { slugs: [...full[0][1]], prefixes: full.map(([prefix]) => prefix) };
};

// Синтетический рост: настоящая разметка одного раздела клонируется под новые
// slug и подпись. Байты те же, что выдал бы генератор, — счёт не на глазок.
// Подписи нарочно длиннее реальных, чтобы оценка была консервативной.
const SYNTHETIC_LABELS = [
  ['Недвижимость', 'scale-realty'], ['Путешествия', 'scale-travel'],
  ['Здоровье и медицина', 'scale-health'], ['Садоводство', 'scale-garden'],
  ['Инвестиции', 'scale-investing'], ['Налогообложение', 'scale-taxation'],
  ['Логистика', 'scale-logistics'], ['Энергетика', 'scale-energy'],
  ['Текстиль и швейное дело', 'scale-textile'], ['Астрономия', 'scale-astronomy'],
  ['Химия', 'scale-chemistry'], ['Геодезия', 'scale-geodesy'],
  ['Музыка и звук', 'scale-audio'], ['Фотография', 'scale-photo'],
  ['Криптовалюты', 'scale-crypto'], ['Страхование', 'scale-insurance'],
  ['Юриспруденция', 'scale-legal'], ['Метеорология', 'scale-weather'],
];

const grownToCategories = (html, slug, label, target, present) => {
  let grown = html;
  const templates = [
    new RegExp(`<a [^>]*data-testid="header-nav-${slug}"[^>]*>[\\s\\S]*?</a>`),
    new RegExp(`<li> <a [^>]*data-testid="footer-link-${slug}"[^>]*>[\\s\\S]*?</a> </li>`),
  ];
  for (const pattern of templates) {
    const found = grown.match(pattern);
    if (!found) continue;
    let extra = '';
    for (let i = 0; i < target - present; i += 1) {
      const [synthLabel, synthSlug] = SYNTHETIC_LABELS[i % SYNTHETIC_LABELS.length];
      extra += found[0]
        .split(`/${slug}/`).join(`/${synthSlug}-${i}/`)
        .split(`-${slug}"`).join(`-${synthSlug}-${i}"`)
        .split(label).join(`${synthLabel} ${i}`);
    }
    grown = grown.replace(found[0], found[0] + extra);
  }
  return grown;
};

// ── производительность маршрутов ──
const routes = [];
const categoryScale = [];
let categoryScaleReport = null;

for (const file of htmlFiles) {
  const rel = path.relative(root, file);
  const htmlGzip = gzipSize(file);
  const closure = closureOf(file);
  routes.push({ route: `/${rel}`, htmlGzip, jsClosureGzip: closure.gzip, jsClosureRaw: closure.raw, modules: closure.modules, catalog: scalesWithCatalog(file) });

  if (closure.gzip > budgets.routeJsClosureGzip) {
    issues.push(`${rel}: initial JS closure gzip ${kib(closure.gzip)} exceeds ${kib(budgets.routeJsClosureGzip)}`);
  }
  if (!scalesWithCatalog(file) && htmlGzip > budgets.routeHtmlGzip) {
    issues.push(`${rel}: HTML gzip ${kib(htmlGzip)} exceeds ${kib(budgets.routeHtmlGzip)}`);
  }

  const html = fs.readFileSync(file, 'utf8');

  // Сколько раз таксономия целиком разложена по этой странице.
  if (!scalesWithCatalog(file)) {
    const { slugs, prefixes } = categoryListPrefixes(html);
    if (slugs.length > 0 && prefixes.length > budgets.categoryListsPerRoute) {
      issues.push(
        `${rel}: полных перечней разделов ${prefixes.length} (${prefixes.sort().join(', ')}) — `
        + `больше ${budgets.categoryListsPerRoute}; таксономия снова размножена по разметке, `
        + 'и цена раздела выросла кратно числу копий',
      );
    }
    categoryScale.push({ rel, file, html, slugs, prefixes });
  }

  const searchIsland = html.match(/<astro-island[^>]*SearchBox[^>]*>/);
  if (searchIsland) {
    const props = (searchIsland[0].match(/props="(.*?)"/s) ?? [])[1] ?? '';
    if (props.length > budgets.searchBoxPropsRaw) {
      issues.push(`${rel}: SearchBox props ${props.length} B exceeds ${budgets.searchBoxPropsRaw} B — поисковый индекс вернулся в разметку`);
    }
  }
}

// Во что обойдётся рост таксономии. Худший обычный маршрут выращивается до
// целевого числа разделов настоящей разметкой раздела и меряется тем же
// gzip и тем же порогом routeHtmlGzip — отдельного потолка здесь нет.
const worstOrdinary = categoryScale
  .map((entry) => ({ ...entry, gzip: gzipSize(entry.file) }))
  .sort((a, b) => b.gzip - a.gzip)[0];

if (worstOrdinary && worstOrdinary.slugs.length > 0) {
  const present = worstOrdinary.slugs.length;
  const target = budgets.categoryScaleTarget;
  // Образцом берётся раздел с ПРОСТОЙ текстовой подписью: у ссылки на каталог
  // подпись разложена по двум span для узкой и широкой раскладки, и клонировать
  // её как шаблон нельзя — подстановка испортила бы разметку.
  const sample = worstOrdinary.slugs
    .map((slug) => {
      const anchor = worstOrdinary.html.match(
        new RegExp(`<a [^>]*data-testid="header-nav-${slug}"[^>]*>([^<]+)</a>`),
      );
      return anchor ? { slug, label: anchor[1].trim() } : null;
    })
    .find((entry) => entry && entry.label.length > 0);

  if (present < target && sample) {
    const grown = grownToCategories(worstOrdinary.html, sample.slug, sample.label, target, present);
    const grownGzip = zlib.gzipSync(Buffer.from(grown)).length;
    categoryScaleReport = { route: worstOrdinary.rel, present, target, now: worstOrdinary.gzip, grown: grownGzip };
    if (grownGzip > budgets.routeHtmlGzip) {
      issues.push(
        `${worstOrdinary.rel}: при ${target} разделах HTML gzip ${kib(grownGzip)} превысит `
        + `${kib(budgets.routeHtmlGzip)} (сейчас ${kib(worstOrdinary.gzip)} при ${present}) — `
        + 'цена раздела вернулась к прежнему наклону',
      );
    }
  }
}


// Число опубликованных калькуляторов: подборка перечисляет ровно их, но теперь
// не одной страницей, а набором страниц.
let publishedCount = 0;

const CATALOG_CARD = /<a href="[^"]*"[^>]*data-catalog-card[\s\S]*?<\/a>/g;
const PAGINATION = /<nav class="catalog-pagination"[\s\S]*?<\/nav>/;

/**
 * Худшая страница подборки при заданной численности каталога.
 *
 * Модель строится из НАСТОЯЩЕЙ страницы: берётся её каркас, заполняется САМЫМИ
 * ТЯЖЁЛЫМИ настоящими карточками до полного размера страницы и снабжается
 * навигацией на нужное число страниц. Заполнение самыми тяжёлыми карточками —
 * сознательно пессимистичная калибровка: настоящая страница смешивает тяжёлые
 * и лёгкие, поэтому модель не может оказаться оптимистичнее факта.
 *
 * Синтетика живёт в памяти проверки: ни одного адреса, идентификатора или файла
 * из неё не попадает ни в исходники, ни в сборку, ни в карту сайта.
 */
function worstCatalogPage(html, totalTarget, pageSize) {
  const cards = html.match(CATALOG_CARD);
  if (!cards || cards.length === 0) return null;
  const pageCount = catalogPageCountFor(totalTarget, pageSize);
  const heaviest = [...cards].sort((a, b) => b.length - a.length);
  const fill = Array.from({ length: pageSize }, (_, index) => {
    const donor = heaviest[index % heaviest.length];
    return donor
      .replace(/href="\/([a-z]{2})\/([a-z0-9-]+)\/([a-z0-9-]+)\/"/, (m, l, cat, slug) => `href="/${l}/${cat}/${slug}-scale${index}/"`)
      .replace(/(<h3[^>]*>\s*)([^<]+?)(\s*<\/h3>)/, (m, a, t, b) => `${a}${t} ${index}${b}`)
      .replace(/(<p[^>]*>\s*)([^<]+?)(\s*<\/p>)/, (m, a, t, b) => `${a}${t} ${index}.${b}`);
  }).join('');

  // Навигация растёт вместе с ЧИСЛОМ страниц: перечислены все, чтобы глубина
  // перехода оставалась в два клика.
  const navMatch = html.match(PAGINATION);
  let nav = navMatch ? navMatch[0] : '';
  if (nav) {
    const item = nav.match(/<li>[\s\S]*?<\/li>/);
    if (item) {
      const items = Array.from({ length: pageCount }, (_, index) =>
        item[0].replace(/page\/\d+\//, `page/${index + 1}/`).replace(/>(\d+)</, `>${index + 1}<`)).join('');
      nav = nav.replace(/<ol class="catalog-pagination-list">[\s\S]*?<\/ol>/, `<ol class="catalog-pagination-list">${items}</ol>`);
    }
  }

  let grown = html.replace(cards.join(''), fill);
  if (grown === html) grown = html.replace(cards[cards.length - 1], fill);
  if (navMatch) grown = grown.replace(navMatch[0], nav);
  return { html: grown, pageCount };
}

let catalogScaleReport = null;
const catalogPageSizes = new Map();

// ── подборка: ограниченная страница плюс сертификация набора страниц ──
for (const file of htmlFiles.filter(isCatalog)) {
  const rel = path.relative(root, file);
  const html = fs.readFileSync(file, 'utf8');
  const cards = (html.match(CATALOG_CARD) ?? []).length;
  const size = gzipSize(file);

  // Гидратационные props обязаны оставаться O(категорий + размера страницы).
  const propsRaw = [...html.matchAll(/props="([^"]*)"/g)].reduce((sum, match) => sum + Buffer.byteLength(match[1]), 0);
  if (propsRaw > budgets.catalogPropsRaw) {
    issues.push(
      `${rel}: catalog hydration props ${propsRaw} B exceed ${budgets.catalogPropsRaw} B — `
      + 'the full calculator array is being serialised into the island again',
    );
  }

  if (size > budgets.catalogHtmlCeilingGzip) {
    issues.push(
      `${rel}: catalog HTML gzip ${kib(size)} exceeds the ${kib(budgets.catalogHtmlCeilingGzip)} ceiling`,
    );
  }

  // Структурированные данные подборки не растут ни вместе с ней, ни вместе со
  // страницей.
  const itemList = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
    .map((match) => { try { return JSON.parse(match[1]); } catch { return null; } })
    .find((block) => block && block['@type'] === 'ItemList');
  if (itemList && itemList.itemListElement.length > budgets.catalogItemListMax) {
    issues.push(
      `${rel}: ItemList перечисляет ${itemList.itemListElement.length} калькуляторов при пределе `
      + `${budgets.catalogItemListMax} — разметка снова растёт вместе с подборкой`,
    );
  }

  catalogPageSizes.set(rel, { html, cards, size });
}

// Численность подборки считается по КОРНЮ подборки: там стоит счётчик, и он
// называет весь каталог, а не срез.
for (const [rel, entry] of catalogPageSizes) {
  if (!/\/calculators\/index\.html$/.test(rel)) continue;
  const declared = entry.html.match(/([0-9]+)\s*<\/span>/);
  const total = declared ? Number(declared[1]) : entry.cards;
  publishedCount = Math.max(publishedCount, total);

  // Размер страницы — это срез корня подборки; если страниц одна, он равен
  // численности, и модель всё равно строит набор на целевой численности.
  const pageSize = Math.max(entry.cards, 1);
  const target = catalogScaleTarget(total);
  const model = worstCatalogPage(entry.html, target, pageSize);
  if (!model) {
    issues.push(`${rel}: модель масштаба подборки не построена — проверка стала бы пустой`);
    continue;
  }
  const worst = zlib.gzipSync(Buffer.from(model.html)).length;
  if (!catalogScaleReport || worst > catalogScaleReport.worst) {
    catalogScaleReport = {
      route: rel, total, pageSize, now: entry.size, target, pages: model.pageCount, worst,
    };
  }
  if (worst > budgets.catalogHtmlCeilingGzip) {
    issues.push(
      `${rel}: при ${target} калькуляторах худшая страница подборки ${kib(worst)} превысит `
      + `${kib(budgets.catalogHtmlCeilingGzip)} (сейчас ${kib(entry.size)} при ${entry.cards} карточках на странице, `
      + `${model.pageCount} страниц) — размер страницы или вес карточки выросли`,
    );
  }
}

// ── масштаб одного раздела: рост вместе с числом его калькуляторов ──
//
// Растить надо ВСЁ, что растёт вместе с членством: и карточки, и то, что
// объявляет о них разметка. Вырастить одно, не вырастив другое, — ошибка,
// которая занижает цену члена вдвое.
//
// Расти надо ПОДЛИННЫМИ текстами. Первая редакция этой проверки клонировала
// карточки самого раздела, дописывая к заголовку номер. gzip такие клоны
// схлопывает: цена члена вышла 36 B при настоящих 84–101 на живой прозе, и
// проверка обещала сотню калькуляторов там, где страница ломалась на
// девяноста. Поэтому пул берётся со ВСЕХ разделов сборки: заголовки различны,
// проза живая, и оценка не льстит. Она, наоборот, строга: доноры приходят из
// чужих разделов и делят с разделом меньше слов, чем делили бы настоящие
// новые члены.
//
// Раздел опознаётся по СВОЙСТВАМ собранной страницы, а не по списку slug:
// адрес вида /<локаль>/<раздел>/, карточки калькуляторов, все ссылки которых
// ведут внутрь этого же раздела, и ItemList, который не длиннее показанного.
// Расхождение — не повод молча пропустить страницу, а поломка самой выборки:
// измерять после этого нечего, и проверка обязана упасть.

const isCategoryIndex = (file) => /[/\\][a-z]{2}[/\\][a-z0-9-]+[/\\]index\.html$/.test(file)
  && !isCatalog(file) && !isLocaleIndex(file);

const CATEGORY_CARD = /<a [^>]*class="[^"]*calculator-card-shell[^"]*"[^>]*>[\s\S]*?<\/a>/g;
const CALCULATOR_HREF = /^\/[a-z]{2}\/[a-z0-9-]+\/[a-z0-9-]+\/$/;
const cardHref = (card) => (card.match(/href="([^"]*)"/) ?? [])[1] ?? '';
const cardTitle = (card) => (card.match(/<h3[^>]*>\s*([^<]*?)\s*<\/h3>/) ?? [])[1] ?? '';
const cardDescription = (card) => (card.match(/<p[^>]*>\s*([^<]*?)\s*<\/p>/) ?? [])[1] ?? '';

const jsonLdRaw = (html) => [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
  .map((match) => { try { return { raw: match[1], data: JSON.parse(match[1]) }; } catch { return null; } })
  .filter(Boolean);

// Клон записи ItemList, не зависящий от её формы: и плоский ListItem, и
// вложенный WebApplication обновляются одинаково. Форма — не дело этой
// проверки; её дело — чтобы записей стало столько, сколько объявила бы
// выросшая страница.
const cloneListEntry = (entry, position, url, name, description) => {
  const walk = (value) => {
    if (Array.isArray(value)) return value.map(walk);
    if (value && typeof value === 'object') {
      const out = {};
      for (const [key, inner] of Object.entries(value)) {
        if (key === 'position') out[key] = position;
        else if (key === 'url') out[key] = url;
        else if (key === 'name') out[key] = name;
        else if (key === 'description') out[key] = description;
        else out[key] = walk(inner);
      }
      return out;
    }
    return value;
  };
  return walk(entry);
};

const categoryMembership = [];

for (const file of htmlFiles.filter(isCategoryIndex)) {
  const rel = path.relative(root, file);
  const [, locale, slug] = rel.replace(/\\/g, '/').match(/^([a-z]{2})\/([a-z0-9-]+)\/index\.html$/);
  const html = fs.readFileSync(file, 'utf8');
  const cards = html.match(CATEGORY_CARD) ?? [];
  const list = jsonLdRaw(html).find((block) => block.data['@type'] === 'ItemList');
  // Раздел от статической страницы отличает наличие ItemList: у «о проекте»,
  // «контактов» и «политики» карточек нет и списка тоже.
  if (cards.length === 0 && !list) continue;

  if (!list) {
    issues.push(`${rel}: раздел выводит ${cards.length} карточек, но не объявляет ItemList`);
    continue;
  }
  if (cards.length === 0) {
    issues.push(
      `${rel}: ItemList объявляет ${list.data.itemListElement.length} калькуляторов, `
      + 'а выборка не нашла ни одной карточки — измерять нечего',
    );
    continue;
  }
  const outside = cards.map(cardHref).filter((href) => !(href.startsWith(`/${locale}/${slug}/`) && CALCULATOR_HREF.test(href)));
  if (outside.length > 0) {
    issues.push(
      `${rel}: выборка карточек захватила ${outside.length} ссылок вне раздела `
      + `(${outside.slice(0, 3).join(', ')}) — считается не членство, а что-то другое`,
    );
    continue;
  }
  const declared = list.data.itemListElement.length;
  if (declared > cards.length) {
    issues.push(
      `${rel}: ItemList объявляет ${declared} калькуляторов, а страница показывает ${cards.length} — `
      + 'разметка описывает то, чего читатель не видит',
    );
    continue;
  }
  if (declared > budgets.categoryItemListMax) {
    issues.push(
      `${rel}: ItemList перечисляет ${declared} калькуляторов при пределе ${budgets.categoryItemListMax} — `
      + 'разметка снова растёт вместе с разделом',
    );
    continue;
  }
  categoryMembership.push({
    rel, file, html, cards, list, declared, members: cards.length, gzip: gzipSize(file),
  });
}

// Пул подлинных карточек со всех разделов: заголовки различны, тексты живые.
const membershipPool = [];
const poolTitles = new Set();
for (const entry of categoryMembership) {
  for (const card of entry.cards) {
    const title = cardTitle(card);
    if (!title || poolTitles.has(title)) continue;
    poolTitles.add(title);
    membershipPool.push(card);
  }
}

let categoryMembershipReport = null;

if (categoryMembership.length === 0) {
  issues.push('масштаб раздела: не найдено ни одной страницы раздела — проверка стала бы пустой');
} else {
  // Цель одна для всех разделов, поэтому задел вперёд считается от самого
  // крупного: иначе он окажется единственным, кого прогноз перестанет догонять.
  const largest = Math.max(...categoryMembership.map((entry) => entry.members));
  const target = categoryMembershipTarget(
    largest, budgets.categoryMembershipTarget, budgets.categoryMembershipLookahead,
  );

  for (const entry of categoryMembership) {
    // Свои карточки из пула исключаются: раздел не может вырасти сам собой.
    const own = new Set(entry.cards.map(cardHref));
    const donors = membershipPool.filter((card) => !own.has(cardHref(card)));
    const need = target - entry.members;
    if (donors.length < need) {
      issues.push(
        `${entry.rel}: подлинных карточек для роста ${donors.length}, нужно ${need} — `
        + 'прогноз пришлось бы строить на повторах, и оценка вышла бы льстивой',
      );
      continue;
    }

    // Список растёт по тому же правилу, по которому его строит страница:
    // перечисляется верх подборки, не длиннее предела. Раздел, который сейчас
    // мельче предела, объявляет всех — но, дорастив до цели, объявит предел, и
    // прогноз обязан считать именно так. Считать иначе значит либо льстить
    // (оставить список коротким там, где он вырос бы), либо пугать (растить
    // список там, где страница его ограничивает).
    const listTarget = Math.min(target, budgets.categoryItemListMax);
    const items = [...entry.list.data.itemListElement];
    let extra = '';
    for (let i = 0; i < need; i += 1) {
      const donor = donors[i];
      const href = `/${entry.rel.replace(/\\/g, '/').replace(/index\.html$/, '')}${cardHref(donor).split('/').filter(Boolean).pop()}/`;
      const name = cardTitle(donor);
      const about = cardDescription(donor);
      extra += donor.replace(/href="[^"]*"/, `href="${href}"`);
      if (items.length < listTarget) {
        items.push(cloneListEntry(
          entry.list.data.itemListElement[i % entry.list.data.itemListElement.length],
          items.length + 1, `https://calcuway.com${href}`, name, about,
        ));
      }
    }
    const template = entry.cards[entry.cards.length - 1];
    const grown = entry.html
      .replace(template, template + extra)
      .replace(entry.list.raw, JSON.stringify({ ...entry.list.data, numberOfItems: items.length, itemListElement: items }));

    // Прогноз обязан ЧТО-ТО вырастить. Пустой рост — не «запас есть», а
    // сломанная выборка.
    const expectedItems = Math.max(entry.declared, listTarget);
    if (extra.length === 0 || items.length !== expectedItems || grown.length <= entry.html.length) {
      issues.push(
        `${entry.rel}: прогноз масштаба раздела не построен (${entry.members} → ${target}, `
        + `прирост разметки ${grown.length - entry.html.length} B, записей ${items.length} `
        + `при ожидаемых ${expectedItems}) — проверка масштаба стала бы пустой`,
      );
      continue;
    }

    const grownGzip = zlib.gzipSync(Buffer.from(grown)).length;
    if (!categoryMembershipReport || grownGzip > categoryMembershipReport.grown) {
      categoryMembershipReport = {
        route: entry.rel, members: entry.members, target, now: entry.gzip, grown: grownGzip,
      };
    }
    if (grownGzip > budgets.routeHtmlGzip) {
      issues.push(
        `${entry.rel}: при ${target} калькуляторах в разделе HTML gzip ${kib(grownGzip)} превысит `
        + `${kib(budgets.routeHtmlGzip)} (сейчас ${kib(entry.gzip)} при ${entry.members}) — `
        + 'цена члена раздела вернулась к прежнему наклону',
      );
    }
  }
}

// ── главная локали: тот же наклонный бюджет, своя пара коэффициентов ──
for (const file of htmlFiles.filter(isLocaleIndex)) {
  const rel = path.relative(root, file);
  const allowed = budgets.indexHtmlBaseGzip + publishedCount * budgets.indexHtmlPerCalculatorGzip;
  const size = gzipSize(file);
  if (size > budgets.indexHtmlCeilingGzip) {
    issues.push(
      `${rel}: locale index HTML gzip ${kib(size)} exceeds the ${kib(budgets.indexHtmlCeilingGzip)} ceiling — `
      + 'the home page embeds the whole catalogue and needs a scale redesign before more calculators',
    );
  } else if (size > allowed) {
    issues.push(
      `${rel}: locale index HTML gzip ${kib(size)} exceeds ${kib(allowed)} allowed for ${publishedCount} calculators `
      + `(${kib(budgets.indexHtmlPerCalculatorGzip)}/calculator) — the page grew, not the catalogue`,
    );
  }
}

// ── масштаб архитектуры ──
const islandChunks = jsFiles.filter((file) => /CalculatorIsland\.[A-Za-z0-9_-]+\.js$/.test(file));
const sharedIsland = islandChunks.sort((a, b) => fs.statSync(b).size - fs.statSync(a).size)[0];
if (sharedIsland) {
  const size = gzipSize(sharedIsland);
  if (size > budgets.sharedIslandGzip) {
    issues.push(`${path.relative(root, sharedIsland)}: shared island gzip ${kib(size)} exceeds ${kib(budgets.sharedIslandGzip)}`);
  }
}
const runtimeChunks = jsFiles.filter((file) => /[/\\]island\.[A-Za-z0-9_-]+\.js$/.test(file));
for (const file of runtimeChunks) {
  const size = gzipSize(file);
  if (size > budgets.calculatorRuntimeGzip) {
    issues.push(
      `${path.relative(root, file)}: calculator runtime gzip ${kib(size)} exceeds ${kib(budgets.calculatorRuntimeGzip)} — `
      + 'a per-calculator chunk should not carry shared UI',
    );
  }
}

// ── масштаб выпуска (нормирован на численность) ──
const totalJsGzip = jsFiles.reduce((sum, file) => sum + gzipSize(file), 0);
const ownChunkGzip = runtimeChunks.map(gzipSize).sort((a, b) => a - b);
const ownSumGzip = ownChunkGzip.reduce((sum, size) => sum + size, 0);
const sharedJsGzip = totalJsGzip - ownSumGzip;
const jsBudget = jsScaleBudget(runtimeChunks.length, budgets.jsSharedGzipCeiling, budgets.jsPerCalculatorGzip);
const ubiquitous = ubiquitousMass(runtimeChunks.map((file) => fs.readFileSync(file, 'utf8')));
const ownMedianGzip = percentile(ownChunkGzip, 0.5);
const ownP95Gzip = percentile(ownChunkGzip, 0.95);
const largestAsset = files.reduce((a, b) => (fs.statSync(b).size > fs.statSync(a).size ? b : a), files[0]);
const largestAssetBytes = fs.statSync(largestAsset).size;
const totalHtmlGzip = htmlFiles.reduce((sum, file) => sum + gzipSize(file), 0);
const totalCssGzip = cssFiles.reduce((sum, file) => sum + gzipSize(file), 0);
const totalFontGzip = fontFiles.reduce((sum, file) => sum + gzipSize(file), 0);
const totalImageGzip = imageFiles.reduce((sum, file) => sum + gzipSize(file), 0);

// Наклонный бюджет вместо абсолютного потолка: постоянная часть общего кода
// плюс надбавка на каждый выпущенный калькулятор. Один новый калькулятор,
// получивший один изолированный чанк, не может провалить эту проверку.
if (totalJsGzip > jsBudget) {
  issues.push(
    `total emitted JS gzip ${kib(totalJsGzip)} exceeds the ${kib(jsBudget)} scale budget for `
    + `${runtimeChunks.length} calculators (${kib(budgets.jsSharedGzipCeiling)} shared + `
    + `${kib(budgets.jsPerCalculatorGzip)} each) — shared code is being duplicated into calculator chunks`,
  );
}
// Постоянная часть отдельно: иначе стоимость можно перенести из чанков
// в общий код и пролезть под надбавкой.
if (sharedJsGzip > budgets.jsSharedGzipCeiling) {
  issues.push(`shared JS gzip ${kib(sharedJsGzip)} exceeds ${kib(budgets.jsSharedGzipCeiling)} — code shared by every route must not grow with the catalogue`);
}
// Форма распределения: среднее размывается, медиана и p95 — нет.
if (ownMedianGzip > budgets.jsOwnMedianGzip) {
  issues.push(`median calculator chunk gzip ${kib(ownMedianGzip)} exceeds ${kib(budgets.jsOwnMedianGzip)} — a typical calculator runtime should not carry shared UI`);
}
if (ownP95Gzip > budgets.jsOwnP95Gzip) {
  issues.push(`p95 calculator chunk gzip ${kib(ownP95Gzip)} exceeds ${kib(budgets.jsOwnP95Gzip)} — the heavy tail of calculator runtimes is growing`);
}
// Прямая мера дублирования: сколько байт несёт КАЖДЫЙ калькулятор.
// Сегодня это три строки импорта и обёртка острова.
if (ubiquitous.bytes > budgets.jsUbiquitousBytesPerChunk) {
  const worst = ubiquitous.fragments.slice(0, 3).map((f) => `${f.bytes} B in ${f.count} chunks`).join(', ');
  issues.push(
    `every calculator chunk carries ${ubiquitous.bytes} B of shared code, above ${budgets.jsUbiquitousBytesPerChunk} B `
    + `(${ubiquitous.fragments.length} fragments; largest: ${worst}) — shared code is inlined instead of imported`,
  );
}
// Хостинг — теми ограничениями, которые у платформы действительно есть.
if (files.length > budgets.deployFileCeiling) {
  issues.push(`deployment holds ${files.length} files, above the ${budgets.deployFileCeiling} Cloudflare Pages limit`);
}
if (largestAssetBytes > budgets.assetBytesCeiling) {
  issues.push(`${path.relative(root, largestAsset)}: ${kib(largestAssetBytes)} exceeds the ${kib(budgets.assetBytesCeiling)} Cloudflare Pages per-asset limit`);
}
const htmlTotalBudget = htmlFiles.length * budgets.totalHtmlGzipPerRoute;
if (totalHtmlGzip > htmlTotalBudget) {
  issues.push(`total HTML gzip ${kib(totalHtmlGzip)} exceeds ${kib(htmlTotalBudget)} for ${htmlFiles.length} routes`);
}
if (totalCssGzip > budgets.cssTotalGzip) issues.push(`total CSS gzip ${kib(totalCssGzip)} exceeds ${kib(budgets.cssTotalGzip)}`);
for (const file of fontFiles) {
  const size = gzipSize(file);
  if (size > budgets.fontFileGzip) issues.push(`${path.relative(root, file)}: font gzip ${kib(size)} exceeds ${kib(budgets.fontFileGzip)}`);
}
if (totalFontGzip > budgets.fontTotalGzip) issues.push(`total font gzip ${kib(totalFontGzip)} exceeds ${kib(budgets.fontTotalGzip)}`);
if (totalImageGzip > budgets.imageTotalGzip) issues.push(`total image gzip ${kib(totalImageGzip)} exceeds ${kib(budgets.imageTotalGzip)}`);

const worstJs = routes.reduce((a, b) => (b.jsClosureGzip > a.jsClosureGzip ? b : a), routes[0]);
const worstHtml = routes.filter((r) => !r.catalog).reduce((a, b) => (b.htmlGzip > a.htmlGzip ? b : a), routes[0]);
const report = {
  routePerformance: {
    worstJsClosure: { route: worstJs.route, gzip: worstJs.jsClosureGzip },
    worstHtml: { route: worstHtml.route, gzip: worstHtml.htmlGzip },
    catalog: routes.filter((r) => r.catalog).map((r) => ({ route: r.route, gzip: r.htmlGzip })),
  },
  architecture: {
    sharedIslandGzip: sharedIsland ? gzipSize(sharedIsland) : 0,
    calculatorRuntimeChunks: runtimeChunks.length,
    maxCalculatorRuntimeGzip: runtimeChunks.length > 0 ? Math.max(...runtimeChunks.map(gzipSize)) : 0,
  },
  buildScale: { routes: htmlFiles.length, jsFiles: jsFiles.length, totalJsGzip, totalHtmlGzip, totalCssGzip },
  jsScale: {
    calculators: runtimeChunks.length,
    totalJsGzip,
    budgetGzip: jsBudget,
    sharedJsGzip,
    ownSumGzip,
    ownMedianGzip,
    ownP95Gzip,
    ubiquitousBytes: ubiquitous.bytes,
    ubiquitousFragments: ubiquitous.fragments.length,
    deployFiles: files.length,
    largestAssetBytes,
  },
};
fs.writeFileSync(path.join(root, 'performance-budget.json'), `${JSON.stringify(report, null, 2)}\n`);

if (issues.length > 0) {
  console.error('Performance budget issues found in dist:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(
  `Verified route performance: worst JS closure ${kib(worstJs.jsClosureGzip)} (${worstJs.route}), `
  + `worst HTML ${kib(worstHtml.htmlGzip)} (${worstHtml.route}).`,
);
if (catalogScaleReport) {
  console.log(
    `Catalog scale: ${catalogScaleReport.total} calculators on ${catalogScaleReport.pageSize}-card pages`
    + ` ${kib(catalogScaleReport.now)} → certified at ${catalogScaleReport.target} calculators`
    + ` (${catalogScaleReport.pages} pages, worst page ${kib(catalogScaleReport.worst)},`
    + ` ceiling ${kib(budgets.catalogHtmlCeilingGzip)}, ${catalogScaleReport.route}).`,
  );
}
if (categoryScaleReport) {
  console.log(
    `Category scale: ${categoryScaleReport.present} sections ${kib(categoryScaleReport.now)}`
    + ` → ${categoryScaleReport.target} sections ${kib(categoryScaleReport.grown)}`
    + ` (ceiling ${kib(budgets.routeHtmlGzip)}, ${categoryScaleReport.route}).`,
  );
}
if (categoryMembershipReport) {
  console.log(
    `Category membership scale: ${categoryMembershipReport.members} calculators ${kib(categoryMembershipReport.now)}`
    + ` → ${categoryMembershipReport.target} calculators ${kib(categoryMembershipReport.grown)}`
    + ` (ceiling ${kib(budgets.routeHtmlGzip)}, ${categoryMembershipReport.route}).`,
  );
}
console.log(
  `Architecture: shared island ${kib(report.architecture.sharedIslandGzip)}, `
  + `${runtimeChunks.length} calculator runtimes, largest ${kib(report.architecture.maxCalculatorRuntimeGzip)}.`,
);
console.log(
  `Build scale (monitoring): ${htmlFiles.length} routes, ${jsFiles.length} JS files, `
  + `JS ${kib(totalJsGzip)}, HTML ${kib(totalHtmlGzip)}, CSS ${kib(totalCssGzip)} gzip.`,
);
console.log(
  `JS scale: ${runtimeChunks.length} calculators, total ${kib(totalJsGzip)} of ${kib(jsBudget)} budget `
  + `(shared ${kib(sharedJsGzip)} of ${kib(budgets.jsSharedGzipCeiling)}, own median ${kib(ownMedianGzip)}, `
  + `p95 ${kib(ownP95Gzip)}), every chunk carries ${ubiquitous.bytes} B of ${budgets.jsUbiquitousBytesPerChunk} B shared, `
  + `${files.length} deployed files of ${budgets.deployFileCeiling}.`,
);
