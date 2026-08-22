import { describe, expect, it } from 'vitest';
import {
  CATALOG_CERTIFIED_TOTAL,
  CATALOG_HTML_CEILING_GZIP,
  CATALOG_SCALE_RESERVE,
  catalogPageCountFor,
  catalogScaleTarget,
} from '../scripts/catalog-scale.mjs';
import {
  CATALOG_PAGE_SIZE,
  catalogPageCount,
  catalogPageOffset,
  catalogPagePath,
  catalogPageSlice,
} from '../src/lib/catalogPagination';
import { getCalculators } from '../src/lib/i18n';

// Закон масштаба подборки.
//
// Он изменён Catalog Scale 4 и здесь закреплён в новой форме. Прежний измерял
// одну растущую страницу; подборка стала страничной, вес страницы перестал
// зависеть от численности каталога, и мерить надо ХУДШУЮ страницу набора на
// целевой численности. Потолок в 30 КиБ при этом не менялся.
//
// Проверка по-прежнему ловит главное — ВЫРОЖДЕНИЕ проверки: цель обязана быть
// строго впереди текущей численности, сколько бы калькуляторов ни стало.

describe('цель сертификации подборки', () => {
  it('всегда строго больше текущей численности', () => {
    for (const total of [0, 1, 48, 276, 300, 499, 500, 501, 750, 2000]) {
      expect(catalogScaleTarget(total), `при ${total} калькуляторах`).toBeGreaterThan(total);
    }
  });

  it('не опускается ниже сертифицированной численности', () => {
    for (const total of [0, 48, 276, 400]) {
      expect(catalogScaleTarget(total)).toBeGreaterThanOrEqual(CATALOG_CERTIFIED_TOTAL);
    }
  });

  it('после перерастания сертификации смотрит на задел вперёд', () => {
    expect(catalogScaleTarget(CATALOG_CERTIFIED_TOTAL + 10))
      .toBe(CATALOG_CERTIFIED_TOTAL + 10 + CATALOG_SCALE_RESERVE);
  });

  it('сертифицировано 500, потолок маршрута остался 30 КиБ', () => {
    expect(CATALOG_CERTIFIED_TOTAL).toBe(500);
    expect(CATALOG_SCALE_RESERVE).toBeGreaterThan(0);
    expect(CATALOG_HTML_CEILING_GZIP).toBe(30 * 1024);
  });
});

describe('страничность подборки', () => {
  const rows = Array.from({ length: 500 }, (_, index) => index);

  it('страницы дают ТОЧНОЕ разбиение: без пропусков и без дублей', () => {
    for (const total of [1, 149, 150, 151, 276, 300, 500, 750]) {
      const items = rows.slice(0, total).concat(
        Array.from({ length: Math.max(0, total - rows.length) }, (_, index) => rows.length + index),
      );
      const pages = catalogPageCount(items.length);
      const seen: number[] = [];
      for (let page = 1; page <= pages; page += 1) {
        const slice = catalogPageSlice(items, page);
        expect(slice.length, `${total}/${page}: срез не больше размера страницы`).toBeLessThanOrEqual(CATALOG_PAGE_SIZE);
        expect(slice.length, `${total}/${page}: срез не пуст`).toBeGreaterThan(0);
        seen.push(...slice);
      }
      expect(seen.length, `${total}: сумма срезов`).toBe(items.length);
      expect(new Set(seen).size, `${total}: без дублей`).toBe(items.length);
      expect(seen).toEqual(items);
    }
  });

  it('число страниц совпадает у страницы и у гейта', () => {
    for (const total of [1, 150, 151, 276, 500, 750]) {
      expect(catalogPageCount(total)).toBe(catalogPageCountFor(total, CATALOG_PAGE_SIZE));
    }
  });

  it('первая страница сохраняет канонический адрес, алиаса page/1 нет', () => {
    expect(catalogPagePath('/ru/calculators/', 1)).toBe('/ru/calculators/');
    expect(catalogPagePath('/ru/calculators/', 2)).toBe('/ru/calculators/page/2/');
    expect(catalogPagePath('/uk/calculators/', 4)).toBe('/uk/calculators/page/4/');
  });

  it('глобальная позиция первой записи страницы считается от начала подборки', () => {
    expect(catalogPageOffset(1)).toBe(0);
    expect(catalogPageOffset(2)).toBe(CATALOG_PAGE_SIZE);
    expect(catalogPageOffset(4)).toBe(CATALOG_PAGE_SIZE * 3);
  });

  it('при 500 калькуляторах страниц немного, глубина перехода остаётся два клика', () => {
    // Все страницы перечислены ссылками на каждой странице, поэтому глубина
    // «корень → страница N → калькулятор» не зависит от их числа. Проверяется
    // само число: десятки страниц сделали бы навигацию нечитаемой.
    expect(catalogPageCount(500)).toBeLessThanOrEqual(6);
    expect(catalogPageCount(750)).toBeLessThanOrEqual(8);
  });

  it('текущая подборка укладывается в объявленное число страниц', () => {
    const total = getCalculators('ru').length;
    expect(catalogPageCount(total)).toBe(Math.ceil(total / CATALOG_PAGE_SIZE));
  });
});
