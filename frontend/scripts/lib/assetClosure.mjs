// Замыкание импортов собранного маршрута.
//
// Считает то, что браузер обязан скачать на холодную загрузку страницы:
// корни из HTML плюс всё, что они статически импортируют, без повторов.
// Это и есть «нагрузка страницы» — величина, которую видит посетитель,
// в отличие от суммарного выпуска сборки.
//
// Имена чанков намеренно не используются как признак: Rollup выносит
// совместно используемый модуль в чанк с произвольным именем, и фильтр
// по имени однажды уже пропустил настоящее нарушение изоляции.

import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const IMPORT_PATTERNS = [/from"\.\/([A-Za-z0-9_.[\]-]+\.js)"/g, /import"\.\/([A-Za-z0-9_.[\]-]+\.js)"/g];

/** Статические импорты одного чанка. */
export function importsOf(astroDir, name) {
  const source = fs.readFileSync(path.join(astroDir, name), 'utf8');
  const found = new Set();
  for (const pattern of IMPORT_PATTERNS) {
    for (const match of source.matchAll(pattern)) found.add(match[1]);
  }
  return found;
}

/** Корни страницы: ссылки на чанки, встречающиеся в HTML. */
export function rootsOf(html) {
  return [...new Set([...html.matchAll(/\/_astro\/([A-Za-z0-9_.[\]-]+\.js)/g)].map((m) => m[1]))];
}

/**
 * Транзитивное замыкание. Отсутствующие файлы пропускаются: HTML может
 * ссылаться на ресурс, которого нет в этой сборке, и падать на этом
 * измерителю незачем.
 */
export function closure(astroDir, roots) {
  const seen = new Set();
  const stack = [...roots];
  while (stack.length > 0) {
    const name = stack.pop();
    if (seen.has(name) || !fs.existsSync(path.join(astroDir, name))) continue;
    seen.add(name);
    stack.push(...importsOf(astroDir, name));
  }
  return seen;
}

/** Размер замыкания маршрута: raw и gzip, без двойного счёта общих модулей. */
export function routeClosureSize(astroDir, htmlPath) {
  const modules = closure(astroDir, rootsOf(fs.readFileSync(htmlPath, 'utf8')));
  let raw = 0;
  let gzip = 0;
  for (const name of modules) {
    const bytes = fs.readFileSync(path.join(astroDir, name));
    raw += bytes.length;
    gzip += zlib.gzipSync(bytes).length;
  }
  return { modules, raw, gzip };
}
