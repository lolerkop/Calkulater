// Доказательство того, что миграция сменила принадлежность данных, но не
// поведение продукта. Снимки сняты на baseline-ветке до единой правки;
// расхождение здесь означает, что миграция что-то изменила для посетителя.
//
// Снимок paint-calculator.uk.json обновлён в фазе 26UK: у калькулятора появился
// предметный украинский текст вместо общего шаблона. Расхождение было проверено
// поимённо и затрагивало ровно шесть полей из двадцати трёх — пять текстовых
// (longDescription, howToUse, howItWorks, example, faq) и производное от них
// seoContent. Семнадцать структурных полей — fields, slug, fullPath,
// resultLabels, category и остальные — совпали побайтно, поэтому доказательство
// эквивалентности миграции сохраняется целиком. Сам текст с этого момента
// защищён отдельными воротами scripts/verify-dist-content-quality.mjs.
//
// Снимки percent-calculator обновлены при наведении порядка в бейджах: значок
// «Новый» стоял на 358 калькуляторах из 376 и означал не новизну, а факт
// существования. Расхождение проверено поимённо и затрагивает ровно одно поле
// из двадцати трёх — isNew (true -> false). Все остальные поля, включая тексты,
// маршруты и структуру, совпали побайтно, поэтому доказательство
// эквивалентности миграции сохраняется. Плотность значков с этого момента
// защищена воротами scripts/verify-dist-badges.mjs.

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
