#!/usr/bin/env node
// Локальная страница «не найдено» кладётся туда, где её ищет хостинг.
//
// Cloudflare отдаёт БЛИЖАЙШИЙ `404.html` вверх по дереву каталогов
// (`not_found_handling: 404-page`), поэтому `/de/404.html` перехватывает любой
// несуществующий адрес под `/de/`, а корневой `/404.html` остаётся запасным
// для путей без локали. Ни правил в `_redirects`, ни воркера не нужно.
//
// Astro при `build.format: 'directory'` кладёт страницу как
// `/{locale}/404/index.html`. Этот шаг переносит её в `/{locale}/404.html` и
// убирает каталог: иначе в артефакте остался бы обычный маршрут `/{locale}/404/`,
// отвечающий 200 — то самое «мягкое 404», которого быть не должно.

import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const locales = process.argv.slice(2);
const moved = [];

for (const locale of locales.length ? locales : ['ru', 'en', 'uk', 'de']) {
  const from = path.join(DIST, locale, '404', 'index.html');
  const to = path.join(DIST, locale, '404.html');
  if (!existsSync(from)) continue;
  mkdirSync(path.dirname(to), { recursive: true });
  writeFileSync(to, readFileSync(from));
  rmSync(path.join(DIST, locale, '404'), { recursive: true, force: true });
  moved.push(`${locale}/404.html`);
}

if (moved.length === 0) {
  console.error('Локальные страницы 404 не собраны: искали dist/<locale>/404/index.html');
  process.exit(1);
}
console.log(`Локальные страницы «не найдено» размещены: ${moved.join(', ')}.`);
