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
//   МАСШТАБ СБОРКИ — наблюдение с запасом. Суммарный выпуск важен для
//   хостинга и как сигнал о патологическом дублировании, но не является
//   мерой того, что чувствует посетитель.
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
  CATALOG_HTML_CEILING_GZIP,
  CATALOG_SCALE_LOOKAHEAD_CARDS,
  CATALOG_SCALE_TARGET_CARDS,
  catalogScaleTarget,
} from './catalog-scale.mjs';

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
  catalogScaleTargetCards: CATALOG_SCALE_TARGET_CARDS,
  // Задел вперёд от ТЕКУЩЕГО числа карточек.
  //
  // Нужен потому, что фиксированная цель однажды остаётся позади. Ровно это и
  // случилось: при 200 в настройке и 203 на сайте прогноз молча выключился —
  // помощник возвращал null, строка отчёта исчезла, и проверка стала пустой в
  // тот самый момент, когда предупреждение было нужнее всего. Теперь проверка
  // всегда смотрит минимум на столько карточек вперёд, сколько бы их ни стало.
  catalogScaleLookaheadCards: CATALOG_SCALE_LOOKAHEAD_CARDS,
  // Сколько калькуляторов вправе перечислять ItemList каталога. Разметка не
  // должна расти вместе с подборкой: полный перечень стоил 6,75 КиБ gzip —
  // четверть страницы — и повторял имя, описание и адрес каждой карточки,
  // тогда как обходчик берёт их из настоящих ссылок.
  catalogItemListMax: 24,
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

  // ── масштаб сборки (наблюдение, щедрый потолок) ──
  totalJsGzipCeiling: 400 * 1024,
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

const isCatalog = (file) => /[/\\]calculators[/\\]index\.html$/.test(file);
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


// Число опубликованных калькуляторов: каталог перечисляет ровно их.
let publishedCount = 0;

// Синтетический рост подборки: настоящая разметка карточки клонируется под
// новые адреса и уникальный видимый текст. Байты те же, что выдал бы генератор,
// а уникальный текст не даёт gzip схлопнуть клоны и делает оценку строгой.
const CATALOG_CARD = /<a href="[^"]*"[^>]*data-catalog-card[\s\S]*?<\/a>/g;

/**
 * Выращивает подборку до `target` карточек настоящей разметкой карточки.
 *
 * Условие `cards.length >= target` здесь СОЗНАТЕЛЬНО отсутствует: именно оно
 * гасило прогноз, как только сайт перерастал цель. Вызывающая сторона обязана
 * передавать target больше текущего числа карточек (см. catalogScaleTarget).
 */
function grownToCards(html, target) {
  const cards = html.match(CATALOG_CARD);
  if (!cards || cards.length === 0 || target <= cards.length) return null;
  const last = cards[cards.length - 1];
  let extra = '';
  for (let i = 0; i < target - cards.length; i += 1) {
    extra += cards[i % cards.length]
      .replace(/href="\/([a-z]{2})\/([a-z0-9-]+)\/([a-z0-9-]+)\/"/, (m, l, cat, slug) => `href="/${l}/${cat}/${slug}-scale${i}/"`)
      .replace(/(<h3[^>]*>\s*)([^<]+?)(\s*<\/h3>)/, (m, a, t, b) => `${a}${t} ${i}${b}`)
      .replace(/(<p[^>]*>\s*)([^<]+?)(\s*<\/p>)/, (m, a, t, b) => `${a}${t} ${i}.${b}`);
  }
  return html.replace(last, last + extra);
}

let catalogScaleReport = null;

// ── каталог: наклонный бюджет ──
for (const file of htmlFiles.filter(isCatalog)) {
  const rel = path.relative(root, file);
  const html = fs.readFileSync(file, 'utf8');
  // Карточка опознаётся по ссылке на калькулятор, а не по классу разметки.
  // Класс `calculator-card-shell` принадлежал астро-карточкам из блока
  // <noscript>, который дублировал уже отрисованный на сервере остров; блок
  // удалён, и счёт по классу дал бы ноль. Уникальная ссылка на калькулятор —
  // то, что каталог обязан вывести при любом рендерере.
  const cards = new Set([...html.matchAll(/href="\/[a-z]{2}\/[a-z0-9-]+\/[a-z0-9-]+\/"/g)].map((m) => m[0])).size;
  publishedCount = Math.max(publishedCount, cards);

  // Сетку рисует Astro; остров только показывает и прячет готовые карточки.
  // Признак — размер сериализованных props, а не имя файла: имена содержат хеш
  // и меняются от сборки к сборке.
  const propsRaw = [...html.matchAll(/props="([^"]*)"/g)].reduce((sum, match) => sum + Buffer.byteLength(match[1]), 0);
  if (propsRaw > budgets.catalogPropsRaw) {
    issues.push(
      `${rel}: catalog hydration props ${propsRaw} B exceed ${budgets.catalogPropsRaw} B — `
      + 'the full calculator array is being serialised into the island again',
    );
  }
  const allowed = budgets.catalogHtmlBaseGzip + cards * budgets.catalogHtmlPerCardGzip;
  const size = gzipSize(file);
  if (size > budgets.catalogHtmlCeilingGzip) {
    issues.push(
      `${rel}: catalog HTML gzip ${kib(size)} exceeds the ${kib(budgets.catalogHtmlCeilingGzip)} ceiling — `
      + 'the all-cards catalog needs a scale redesign before more calculators',
    );
  } else if (size > allowed) {
    issues.push(
      `${rel}: catalog HTML gzip ${kib(size)} exceeds ${kib(allowed)} allowed for ${cards} cards `
      + `(${kib(budgets.catalogHtmlPerCardGzip)}/card) — a card grew, not the catalogue`,
    );
  }

  // Структурированные данные каталога не растут вместе с подборкой.
  const itemList = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
    .map((match) => { try { return JSON.parse(match[1]); } catch { return null; } })
    .find((block) => block && block['@type'] === 'ItemList');
  if (itemList && itemList.itemListElement.length > budgets.catalogItemListMax) {
    issues.push(
      `${rel}: ItemList перечисляет ${itemList.itemListElement.length} калькуляторов при пределе `
      + `${budgets.catalogItemListMax} — разметка снова растёт вместе с подборкой`,
    );
  }

  // Во что обойдётся рост подборки. Страница выращивается до целевого числа
  // карточек НАСТОЯЩЕЙ разметкой карточки и меряется тем же gzip и тем же
  // потолком catalogHtmlCeilingGzip — отдельного порога здесь нет.
  const scaleTarget = catalogScaleTarget(cards);
  const grown = grownToCards(html, scaleTarget);
  if (!grown) {
    issues.push(
      `${rel}: прогноз масштаба подборки не построен при ${cards} карточках — `
      + 'проверка масштаба стала бы пустой',
    );
  } else {
    const grownGzip = zlib.gzipSync(Buffer.from(grown)).length;
    if (!catalogScaleReport || grownGzip > catalogScaleReport.grown) {
      catalogScaleReport = { route: rel, cards, target: scaleTarget, now: size, grown: grownGzip };
    }
    if (grownGzip > budgets.catalogHtmlCeilingGzip) {
      issues.push(
        `${rel}: при ${scaleTarget} калькуляторах HTML gzip ${kib(grownGzip)} превысит `
        + `${kib(budgets.catalogHtmlCeilingGzip)} (сейчас ${kib(size)} при ${cards}) — `
        + 'цена карточки вернулась к прежнему наклону',
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

// ── масштаб сборки (наблюдение) ──
const totalJsGzip = jsFiles.reduce((sum, file) => sum + gzipSize(file), 0);
const totalHtmlGzip = htmlFiles.reduce((sum, file) => sum + gzipSize(file), 0);
const totalCssGzip = cssFiles.reduce((sum, file) => sum + gzipSize(file), 0);
const totalFontGzip = fontFiles.reduce((sum, file) => sum + gzipSize(file), 0);
const totalImageGzip = imageFiles.reduce((sum, file) => sum + gzipSize(file), 0);

if (totalJsGzip > budgets.totalJsGzipCeiling) {
  issues.push(`total emitted JS gzip ${kib(totalJsGzip)} exceeds the ${kib(budgets.totalJsGzipCeiling)} architecture ceiling — check for duplicated shared code`);
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
    `Catalog scale: ${catalogScaleReport.cards} calculators ${kib(catalogScaleReport.now)}`
    + ` → ${catalogScaleReport.target} calculators ${kib(catalogScaleReport.grown)}`
    + ` (ceiling ${kib(budgets.catalogHtmlCeilingGzip)}, ${catalogScaleReport.route}).`,
  );
}
if (categoryScaleReport) {
  console.log(
    `Category scale: ${categoryScaleReport.present} sections ${kib(categoryScaleReport.now)}`
    + ` → ${categoryScaleReport.target} sections ${kib(categoryScaleReport.grown)}`
    + ` (ceiling ${kib(budgets.routeHtmlGzip)}, ${categoryScaleReport.route}).`,
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
