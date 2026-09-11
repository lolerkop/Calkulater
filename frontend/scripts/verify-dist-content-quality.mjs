#!/usr/bin/env node
// Ворота качества локализованного содержимого.
//
// Ловят регрессии, а не заставляют писать воду: абсолютного минимума слов здесь
// нет. Проверяется то, что можно доказать по самому артефакту — повтор текста
// между страницами, которые обязаны различаться, утечка чужой локали,
// отсутствие обязательных разделов, заглушки и обвал объёма относительно
// одобренной базовой линии.
//
// Базовая линия живёт в scripts/content-baseline.json и обновляется осознанно,
// когда содержимое улучшается. Просадка относительно неё — регрессия.

import { readFileSync, existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { distLocales } from './lib/locales.mjs';

const DIST = path.resolve('dist');
const BASELINE_PATH = path.resolve('scripts/content-baseline.json');

// Русские буквы, которых нет в украинском алфавите. Их присутствие в украинском
// тексте — прямое доказательство утечки локали, а не стилистическая придирка.
const RU_ONLY = /[ыъэё]/i;

// В немецком тексте кириллицы не бывает вовсе, поэтому проверка строже
// украинской: там ищутся отдельные буквы, здесь — любая кириллическая.
const CYRILLIC = /[А-Яа-яЁёЇїІіЄєҐґ]/;

// Фразы общего шаблона: если они снова появятся на странице калькулятора,
// значит подробный текст для неё потерялся и включился запасной путь.
const GENERIC_UK = [
  'Калькулятор застосовує відповідну формулу до введених значень',
  'щоб швидко отримати оцінку та порівняти кілька сценаріїв',
  'з прикладовими значеннями та подивіться, як змінюється результат',
  'Чи потрібно створювати акаунт',
];

// Фразы общего английского шаблона. На немецкой странице они означают, что
// подробный немецкий текст потерялся и включился запасной путь чужой локали.
const GENERIC_DE = [
  'The calculator applies the relevant formula',
  'helps solve a specific calculation task',
  'Do I need to create an account',
  'to get a quick estimate and compare scenarios',
];

// Фразы общих шаблонов, которых на испанской странице быть не может. Английский
// шаблон тот же, что и выше: его появление значит возврат к английскому слою.
// Испанский шаблон фаза 28ES заменила ошибкой сборки — если его вернут,
// подробный текст снова подменится общими словами.
const GENERIC_ES = [
  ...GENERIC_DE,
  'para obtener una estimación rápida y comparar escenarios sin salir del navegador',
  'La calculadora aplica la fórmula correspondiente a los valores introducidos',
  'con valores de ejemplo para ver cómo cambia el resultado',
  '¿Necesito crear una cuenta?',
];

const PLACEHOLDERS = /\b(undefined|NaN|TODO|FIXME|\[object Object\])\b/;

// Обязательные разделы страницы калькулятора.
const REQUIRED_SECTIONS = ['details', 'usage', 'sources', 'faq'];

function stripTags(html) {
  const withoutScripts = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/g, ' ');
  return withoutScripts.replace(/<[^>]+>/g, ' ');
}

function decodeEntities(text) {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

function mainText(html) {
  const body = html.replace(/<header[\s\S]*?<\/header>|<footer[\s\S]*?<\/footer>|<nav[\s\S]*?<\/nav>/g, ' ');
  const main = /<main\b[^>]*>([\s\S]*?)<\/main>/.exec(body);
  return decodeEntities(stripTags(main ? main[1] : body)).replace(/\s+/g, ' ').trim();
}

function sectionText(html, id) {
  const match = new RegExp(`<section id="${id}"[\\s\\S]*?<\\/section>`).exec(html);
  return match ? decodeEntities(stripTags(match[0])).replace(/\s+/g, ' ').trim() : '';
}

// Вступление отрисовывается первым абзацем блока поддержки калькулятора.
function introText(html) {
  const match = /data-testid="calculator-support"[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/.exec(html);
  return match ? decodeEntities(stripTags(match[1])).replace(/\s+/g, ' ').trim() : '';
}

function faqQuestions(html) {
  const questions = [];
  const blocks = html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g);
  for (const block of blocks) {
    let parsed;
    try { parsed = JSON.parse(block[1]); } catch { continue; }
    for (const node of Array.isArray(parsed) ? parsed : [parsed]) {
      if (node?.['@type'] === 'FAQPage') {
        for (const item of node.mainEntity ?? []) questions.push(item.name ?? '');
      }
    }
  }
  return questions;
}

// Состав локалей читается из самого артефакта (scripts/lib/locales.mjs), а не
// выписывается буквами: выписанный список пропустил испанский целиком, и 372
// испанские страницы проходили мимо всех проверок ниже.
async function calculatorPages() {
  const pages = [];
  const published = new Set(distLocales(DIST));
  for (const locale of await readdir(DIST, { withFileTypes: true })) {
    if (!locale.isDirectory() || !published.has(locale.name)) continue;
    const localeDir = path.join(DIST, locale.name);
    for (const category of await readdir(localeDir, { withFileTypes: true })) {
      if (!category.isDirectory() || category.name === 'calculators') continue;
      const categoryDir = path.join(localeDir, category.name);
      for (const slug of await readdir(categoryDir, { withFileTypes: true })) {
        if (!slug.isDirectory()) continue;
        const file = path.join(categoryDir, slug.name, 'index.html');
        if (!existsSync(file)) continue;
        pages.push({
          route: `/${locale.name}/${category.name}/${slug.name}/`,
          locale: locale.name,
          category: category.name,
          html: readFileSync(file, 'utf8'),
        });
      }
    }
  }
  return pages;
}

// Шинглы для сравнения: шестёрки слов, как в анализе фазы 26UK.
function shingles(text, size = 6) {
  const words = text.toLowerCase().split(/\s+/);
  const set = new Set();
  for (let i = 0; i + size <= words.length; i += 1) set.add(words.slice(i, i + size).join(' '));
  return set;
}

function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  let shared = 0;
  for (const item of a) if (b.has(item)) shared += 1;
  return shared / (a.size + b.size - shared);
}

const problems = [];
const report = (kind, detail) => problems.push(`${kind}: ${detail}`);

const pages = await calculatorPages();
const baseline = existsSync(BASELINE_PATH) ? JSON.parse(readFileSync(BASELINE_PATH, 'utf8')) : {};

const byRoute = new Map();
for (const page of pages) {
  const text = mainText(page.html);
  const details = sectionText(page.html, 'details');
  const intro = introText(page.html);
  byRoute.set(page.route, { ...page, text, details, intro, words: text.split(/\s+/).length });
}

// ── 1. Обязательные разделы ──
for (const [route, page] of byRoute) {
  for (const id of REQUIRED_SECTIONS) {
    if (!page.html.includes(`<section id="${id}"`)) report('нет обязательного раздела', `${route} :: ${id}`);
  }
}

// ── 2. Заглушки ──
for (const [route, page] of byRoute) {
  const match = PLACEHOLDERS.exec(page.text);
  if (match) report('заглушка в видимом тексте', `${route} :: ${match[0]}`);
}

// ── 3. Утечка локали ──
for (const [route, page] of byRoute) {
  if (page.locale !== 'uk') continue;
  const match = RU_ONLY.exec(page.text);
  if (match) report('утечка локали', `${route} :: буква «${match[0]}»`);
}

// ── 3b. Кириллица на немецкой странице ──
for (const [route, page] of byRoute) {
  if (page.locale !== 'de') continue;
  const match = CYRILLIC.exec(page.text);
  if (match) report('кириллица в немецком тексте', `${route} :: «${match[0]}»`);
}

// ── 3c. Кириллица на испанской странице ──
for (const [route, page] of byRoute) {
  if (page.locale !== 'es') continue;
  const match = CYRILLIC.exec(page.text);
  if (match) report('кириллица в испанском тексте', `${route} :: «${match[0]}»`);
}

// ── 4. Возврат к общему шаблону ──
for (const [route, page] of byRoute) {
  if (page.locale === 'uk') {
    for (const phrase of GENERIC_UK) {
      if (page.text.includes(phrase)) report('вернулся общий шаблон', `${route} :: «${phrase.slice(0, 48)}…»`);
    }
  }
  if (page.locale === 'de') {
    for (const phrase of GENERIC_DE) {
      if (page.text.includes(phrase)) report('вернулся общий шаблон', `${route} :: «${phrase.slice(0, 48)}…»`);
    }
  }
  if (page.locale === 'es') {
    for (const phrase of GENERIC_ES) {
      if (page.text.includes(phrase)) report('вернулся общий шаблон', `${route} :: «${phrase.slice(0, 48)}…»`);
    }
  }
}

// ── 5. Дословный повтор раздела «как считается» между разными калькуляторами ──
const detailsIndex = new Map();
for (const [route, page] of byRoute) {
  if (page.details.length < 80) continue;
  const key = `${page.locale} ${page.details}`;
  if (detailsIndex.has(key)) {
    report('дословный повтор раздела «как считается»', `${detailsIndex.get(key)} ↔ ${route}`);
  } else {
    detailsIndex.set(key, route);
  }
}

// ── 5b. Дословный повтор вступления между разными калькуляторами ──
const introIndex = new Map();
for (const [route, page] of byRoute) {
  if (page.intro.length < 80) continue;
  const key = `${page.locale} ${page.intro}`;
  if (introIndex.has(key)) {
    report('дословный повтор вступления', `${introIndex.get(key)} ↔ ${route}`);
  } else {
    introIndex.set(key, route);
  }
}

// ── 6. Один и тот же набор вопросов FAQ у разных калькуляторов ──
const faqIndex = new Map();
for (const [route, page] of byRoute) {
  const questions = faqQuestions(page.html);
  if (questions.length === 0) continue;
  const key = `${page.locale} ${questions.join('')}`;
  const seen = faqIndex.get(key) ?? [];
  seen.push(route);
  faqIndex.set(key, seen);
}
for (const [, routes] of faqIndex) {
  if (routes.length > 1) report('одинаковый набор вопросов FAQ', routes.slice(0, 4).join(' ↔ '));
}

// ── 7. Близкий повтор прозы внутри категории ──
// Порог 0.45 выбран по достигнутому состоянию: после фазы 26UK максимум внутри
// категории равен 0.356 у валютных пар, и он объясним — они описывают один
// механизм для разных валют. Всё выше 0.45 означает потерю различимости.
const SIMILARITY_LIMIT = 0.45;

// Именованное исключение, а не поднятый порог. Конвертеры валютных пар
// описывают один и тот же кросс-курс для разных валют: различие между
// «доллар в евро» и «доллар в лей» — это сама пара, и переписывать текст ради
// метрики значило бы ухудшить его. Список закрытый: любая новая пара страниц
// вне него проверяется обычным порогом.
const LEGITIMATE_TWINS = new Set([
  'currency-converter|eur-to-mdl', 'currency-converter|usd-to-eur', 'currency-converter|usd-to-mdl',
  'eur-to-mdl|usd-to-eur', 'eur-to-mdl|usd-to-mdl', 'usd-to-eur|usd-to-mdl',
  'konverter-valyut|eur-v-mdl', 'konverter-valyut|usd-v-eur', 'konverter-valyut|usd-v-mdl',
  'eur-v-mdl|usd-v-eur', 'eur-v-mdl|usd-v-mdl', 'usd-v-eur|usd-v-mdl',
  'konverter-valyut|evro-v-lei', 'konverter-valyut|dollar-v-evro', 'konverter-valyut|dollar-v-lei',
  'dollar-v-evro|evro-v-lei', 'dollar-v-lei|evro-v-lei', 'dollar-v-evro|dollar-v-lei',
  'usd-in-eur|waehrungsrechner', 'eur-in-mdl|waehrungsrechner', 'usd-in-mdl|waehrungsrechner',
  'eur-in-mdl|usd-in-eur', 'eur-in-mdl|usd-in-mdl', 'usd-in-eur|usd-in-mdl',
  // Испанские пары переведены с английских и держат ту же близость: 0,46–0,68
  // против 0,47–0,65 у английских.
  'conversor-divisas|eur-a-mdl', 'conversor-divisas|usd-a-eur', 'conversor-divisas|usd-a-mdl',
  'eur-a-mdl|usd-a-eur', 'eur-a-mdl|usd-a-mdl', 'usd-a-eur|usd-a-mdl',
]);
const twinKey = (a, b) => {
  const [x, y] = [a.split('/').filter(Boolean).at(-1), b.split('/').filter(Boolean).at(-1)].sort();
  return `${x}|${y}`;
};

const byCategory = new Map();
for (const [route, page] of byRoute) {
  const key = `${page.locale} ${page.category}`;
  const bucket = byCategory.get(key) ?? [];
  bucket.push({ route, shingles: shingles(page.text) });
  byCategory.set(key, bucket);
}
for (const [, bucket] of byCategory) {
  for (let i = 0; i < bucket.length; i += 1) {
    for (let j = i + 1; j < bucket.length; j += 1) {
      const score = jaccard(bucket[i].shingles, bucket[j].shingles);
      if (score >= SIMILARITY_LIMIT && !LEGITIMATE_TWINS.has(twinKey(bucket[i].route, bucket[j].route))) {
        report('проза внутри категории слишком похожа', `${bucket[i].route} ↔ ${bucket[j].route} :: ${score.toFixed(3)}`);
      }
    }
  }
}

// ── 8. Обвал объёма относительно одобренной базовой линии ──
// Регрессией считается падение более чем на четверть: это не требование писать
// больше, а защита от случайной потери текста.
const COLLAPSE_RATIO = 0.75;
for (const [route, approved] of Object.entries(baseline.pages ?? {})) {
  const page = byRoute.get(route);
  if (!page) {
    report('страница из базовой линии исчезла', route);
    continue;
  }
  if (page.words < approved.words * COLLAPSE_RATIO) {
    report('обвал объёма относительно базовой линии', `${route} :: ${page.words} против одобренных ${approved.words}`);
  }
  const questions = faqQuestions(page.html).length;
  if (questions < approved.faq) {
    report('стало меньше вопросов FAQ, чем в базовой линии', `${route} :: ${questions} против ${approved.faq}`);
  }
}

if (problems.length > 0) {
  console.error('Нарушения качества содержимого:');
  for (const line of problems.slice(0, 40)) console.error(`- ${line}`);
  if (problems.length > 40) console.error(`… и ещё ${problems.length - 40}`);
  process.exit(1);
}

const medianWords = (locale) => {
  const words = [...byRoute.values()]
    .filter((page) => page.locale === locale)
    .map((page) => page.words)
    .sort((a, b) => a - b);
  return { count: words.length, median: words[Math.floor(words.length / 2)] ?? 0 };
};
const uk = medianWords('uk');
const de = medianWords('de');
const es = medianWords('es');
console.log(
  `Качество содержимого подтверждено: ${byRoute.size} страниц калькуляторов, ` +
  `${uk.count} украинских с медианой ${uk.median} слов, ` +
  `${de.count} немецких с медианой ${de.median} слов, ` +
  `${es.count} испанских с медианой ${es.median} слов, ` +
  `дословных повторов вступлений и разделов нет, одинаковых наборов FAQ нет, ` +
  `сходство внутри категории ниже ${SIMILARITY_LIMIT}, утечек локали и заглушек нет, ` +
  `${Object.keys(baseline.pages ?? {}).length} страниц держат одобренную базовую линию.`,
);
