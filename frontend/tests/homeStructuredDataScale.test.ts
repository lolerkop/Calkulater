// Структурированные данные не должны расти вместе с каталогом там, где страница
// каталог не выводит.
//
// Google требует, чтобы разметка была достоверным представлением содержимого
// страницы, и прямо запрещает размечать то, чего читатель не видит. Главная
// показывает около десяти карточек, а объявляла ItemList и CollectionPage.hasPart
// на все 48 калькуляторов — и то и другое росло с каталогом. Тест удерживает
// восстановленное соответствие: сколько калькуляторов страница показывает,
// столько и объявляет.

import { describe, expect, it } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';

const LOCALES = ['ru', 'en', 'uk'] as const;

function jsonLdBlocks(html: string): Record<string, any>[] {
  return [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
    .map((m) => { try { return JSON.parse(m[1]); } catch { return null; } })
    .filter(Boolean) as Record<string, any>[];
}

function calculatorLinks(html: string, locale: string): Set<string> {
  return new Set(
    [...html.matchAll(new RegExp(`href="(/${locale}/[a-z0-9-]+/[a-z0-9-]+/)"`, 'g'))].map((m) => m[1]),
  );
}

const built = existsSync(new URL('../dist/ru/index.html', import.meta.url));

describe.runIf(built)('масштаб структурированных данных', () => {
  for (const locale of LOCALES) {
    describe(locale, () => {
      const home = readFileSync(new URL(`../dist/${locale}/index.html`, import.meta.url), 'utf8');
      const catalog = readFileSync(new URL(`../dist/${locale}/calculators/index.html`, import.meta.url), 'utf8');

      it('главная объявляет не больше калькуляторов, чем показывает', () => {
        const list = jsonLdBlocks(home).find((d) => d['@type'] === 'ItemList');
        expect(list, 'на главной нет ItemList').toBeDefined();
        const declared = list!.itemListElement.length;
        const shown = calculatorLinks(home, locale).size;
        expect(declared, `объявлено ${declared}, показано ${shown}`).toBeLessThanOrEqual(shown);
      });

      it('каталог объявляет ровно то, что выводит', () => {
        const list = jsonLdBlocks(catalog).find((d) => d['@type'] === 'ItemList');
        expect(list).toBeDefined();
        expect(list!.itemListElement.length).toBe(calculatorLinks(catalog, locale).size);
      });

      it('CollectionPage нигде не перечисляет элементы второй раз', () => {
        for (const [page, html] of [['главная', home], ['каталог', catalog]] as const) {
          const collection = jsonLdBlocks(html).find((d) => d['@type'] === 'CollectionPage');
          if (!collection) continue;
          expect(collection.hasPart, `${page}: hasPart дублирует ItemList`).toBeUndefined();
          expect(collection.mainEntity?.['@id'], `${page}: нет ссылки на ItemList`).toMatch(/#itemlist$/);
        }
      });
    });
  }
});
