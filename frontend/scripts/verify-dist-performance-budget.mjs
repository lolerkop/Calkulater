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

const root = path.resolve('dist');
const astro = path.join(root, '_astro');

const budgets = {
  // ── производительность маршрута (жёстко) ──
  routeJsClosureGzip: 95 * 1024,
  routeHtmlGzip: 15 * 1024,
  catalogHtmlBaseGzip: 5.5 * 1024,
  catalogHtmlPerCardGzip: 0.42 * 1024,
  catalogHtmlCeilingGzip: 30 * 1024,
  // Локальная главная — вторая страница, размер которой определяется числом
  // калькуляторов, а не собственным содержимым: она встраивает JSON-LD со всем
  // каталогом и данные поиска по всем калькуляторам. Плоский маршрутный бюджет
  // измерял её неверно и сорвался бы на 42-м калькуляторе по причине, не
  // связанной с самой страницей. Коэффициенты сняты измерением: 36 → 48
  // калькуляторов дало 223 Б/калькулятор на ru, 248 на uk, 194 на en.
  indexHtmlBaseGzip: 8 * 1024,
  indexHtmlPerCalculatorGzip: 0.29 * 1024,
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

// ── производительность маршрутов ──
const routes = [];
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
}

// Число опубликованных калькуляторов: каталог перечисляет ровно их.
let publishedCount = 0;

// ── каталог: наклонный бюджет ──
for (const file of htmlFiles.filter(isCatalog)) {
  const rel = path.relative(root, file);
  const html = fs.readFileSync(file, 'utf8');
  // Карточки считаются по оболочке, а не по testid: внутри карточки есть ещё
  // два элемента с testid того же префикса — бейджи «новинка» и «популярное».
  // Из-за них каталог насчитывал на две карточки больше и получал лишний запас.
  const cards = (html.match(/calculator-card-shell/g) ?? []).length;
  publishedCount = Math.max(publishedCount, cards);
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
console.log(
  `Architecture: shared island ${kib(report.architecture.sharedIslandGzip)}, `
  + `${runtimeChunks.length} calculator runtimes, largest ${kib(report.architecture.maxCalculatorRuntimeGzip)}.`,
);
console.log(
  `Build scale (monitoring): ${htmlFiles.length} routes, ${jsFiles.length} JS files, `
  + `JS ${kib(totalJsGzip)}, HTML ${kib(totalHtmlGzip)}, CSS ${kib(totalCssGzip)} gzip.`,
);
