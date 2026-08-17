// Доказательство того, что миграция сменила принадлежность данных, но не
// поведение продукта. Снимки сняты на baseline-ветке до единой правки;
// расхождение здесь означает, что миграция что-то изменила для посетителя.

import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { getCalculatorById, locales } from '../../src/lib/i18n';

const MIGRATED = ['percent-calculator', 'paint-calculator'] as const;

describe('эквивалентность миграции на Platform V2', () => {
  for (const id of MIGRATED) {
    for (const locale of locales) {
      it(`${id} / ${locale} совпадает с baseline до миграции`, () => {
        const baseline = JSON.parse(readFileSync(`tests/platform/__baseline__/${id}.${locale}.json`, 'utf8'));
        expect(getCalculatorById(id, locale)).toEqual(baseline);
      });
    }
  }

  it('маршруты мигрированных калькуляторов не изменились', () => {
    expect(getCalculatorById('percent-calculator', 'ru')!.fullPath).toBe('/ru/finance/percent-calculator/');
    expect(getCalculatorById('paint-calculator', 'ru')!.fullPath).toBe('/ru/building/paint-calculator/');
  });
});
