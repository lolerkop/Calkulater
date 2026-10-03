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
//
// Фаза originality percent/discount: у процентов устранены неподдерживаемые
// обещания обратного режима и появился предметный контракт для пяти операций,
// нулевой/отрицательной базы и процентных пунктов. В RU/EN/UK снимках обновлены
// ровно девять проверенных редакционных полей: shortDescription,
// seoDescription, longDescription, howToUse, howItWorks, example, faq,
// disclaimer и производное seoContent. Перед записью проверено, что никаких
// других отличий нет: маршруты, поля, значения по умолчанию, имена, h1,
// seoTitle, каталог и связанные инструменты сохранены. Исторические снимки краски сохранены; отдельный файл проверенных
// предметных изменений фиксирует точные before/after литералы. Полное
// сравнение объектов и исходных SHA256 ниже остаётся обязательным.

import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { amendedFieldHelp } from '../helpers/targetedFinishFieldHelp';
import paintAmendments from './__baseline__/paint-originality-reviewed-amendments.json';
import { getCalculatorById, locales } from '../../src/lib/i18n';

const MIGRATED = ['percent-calculator', 'paint-calculator'] as const;

// Локали, существовавшие на момент миграции. Немецкий и испанский появились
// позже, поэтому снимка «до миграции» для них не существует и существовать не
// может: снятый сегодня файл сравнивал бы вывод сам с собой и ничего не
// доказывал. Область доказательства — ровно те локали, которые миграция могла
// задеть.
const POST_MIGRATION_LOCALES = new Set(['de', 'es']);
const PRE_MIGRATION_LOCALES = locales.filter((locale) => !POST_MIGRATION_LOCALES.has(locale));

describe('эквивалентность миграции на Platform V2', () => {
  for (const id of MIGRATED) {
    for (const locale of PRE_MIGRATION_LOCALES) {
      // Снимки сняты для локалей, в которых калькулятор существует.
      if (!getCalculatorById(id, locale)) continue;
      it(`${id} / ${locale} совпадает с сохранённым baseline и явными предметными поправками`, () => {
        const baselinePath = `tests/platform/__baseline__/${id}.${locale}.json`;
        const bytes = readFileSync(baselinePath);
        const baseline = JSON.parse(bytes.toString('utf8'));
        if (id === 'paint-calculator') {
          // Deliberate subject work is a bounded amendment to the original
          // migration evidence. Original files are preserved, and every
          // old/new literal is checked before the full object comparison.
          const amendment = paintAmendments.records.find(record => record.locale === locale)!;
          expect(amendment.baseline).toBe(baselinePath);
          expect(createHash('sha256').update(bytes).digest('hex')).toBe(amendment.baselineSha256);
          expect(amendment.changes.map(change => change.key)).toEqual(paintAmendments.approvedTopLevelKeys[locale as 'ru'|'en'|'uk']);
          for (const change of amendment.changes) {
            expect(baseline[change.key]).toEqual(change.before);
            baseline[change.key] = change.after;
          }
        }
        baseline.fields = baseline.fields.map((field: any) => amendedFieldHelp(id,locale,field));
        expect(getCalculatorById(id, locale)).toEqual(baseline);
      });
    }
  }

  it('маршруты мигрированных калькуляторов не изменились', () => {
    expect(getCalculatorById('percent-calculator', 'ru')!.fullPath).toBe('/ru/finance/percent-calculator/');
    expect(getCalculatorById('paint-calculator', 'ru')!.fullPath).toBe('/ru/building/paint-calculator/');
  });
});
