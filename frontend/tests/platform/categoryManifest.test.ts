// Структурные инварианты таксономии.
//
// Проверяется то же, что и у калькуляторов: общий код не должен перечислять
// категории руками, а генератор обязан быть детерминированным и ловить
// столкновения до сборки.

import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { categoryDefinitions, categoryIds, categoryById } from '../../src/categories/manifest.generated';
import { discoverCategoryIds, orderOf, renderManifest } from '../../scripts/generate-category-manifest.mts';

const DIR = new URL('../../src/categories', import.meta.url).pathname;
const root = new URL('../../', import.meta.url).pathname;

describe('манифест категорий', () => {
  it('обнаруживает ровно те категории, что лежат в директориях', () => {
    expect([...categoryIds].sort()).toEqual(discoverCategoryIds(DIR).sort());
  });

  it('порядок задан полем order, а не позицией в списке', () => {
    const orders = categoryDefinitions.map((definition) => orderOf(definition.id, DIR));
    expect(orders).toEqual([...orders].sort((a, b) => a - b));
  });

  it('порядок не повторяется', () => {
    const orders = categoryDefinitions.map((definition) => definition.order);
    expect(new Set(orders).size, `порядки: ${orders.join(', ')}`).toBe(orders.length);
  });

  it('идентификаторы не повторяются', () => {
    expect(new Set(categoryIds).size).toBe(categoryIds.length);
  });

  it('генерация детерминирована', () => {
    const once = renderManifest(discoverCategoryIds(DIR), DIR);
    const twice = renderManifest(discoverCategoryIds(DIR), DIR);
    expect(once).toBe(twice);
    expect(once).toBe(readFileSync(`${DIR}/manifest.generated.ts`, 'utf8'));
  });

  it('каждая категория несёт обязательные поля', () => {
    for (const definition of categoryDefinitions) {
      expect(definition.id, 'нет id').toBeTruthy();
      expect(definition.icon, `${definition.id}: нет иконки`).toBeTruthy();
      expect(definition.searchAliases.length, `${definition.id}: пустые псевдонимы`).toBeGreaterThan(0);
      expect(definition.guidance.useCases.length, `${definition.id}: нет сценариев`).toBeGreaterThan(0);
      expect(definition.guidance.checklist.length, `${definition.id}: нет чек-листа`).toBeGreaterThan(0);
      expect(definition.guidance.mistakes.length, `${definition.id}: нет ошибок`).toBeGreaterThan(0);
    }
  });

  it('копирайт и вопросы есть на всех собираемых локалях', () => {
    for (const definition of categoryDefinitions) {
      for (const locale of ['ru', 'en', 'uk'] as const) {
        const copy = definition.copy[locale];
        expect(copy, `${definition.id}/${locale}: нет копирайта`).toBeDefined();
        for (const field of ['name', 'slug', 'description', 'longDescription', 'seoTitle', 'seoDescription', 'h1'] as const) {
          expect(copy[field]?.length, `${definition.id}/${locale}.${field} пусто`).toBeGreaterThan(0);
        }
        expect(definition.faq[locale]?.length, `${definition.id}/${locale}: нет вопросов`).toBeGreaterThan(0);
        expect(definition.editorial[locale]?.length, `${definition.id}/${locale}: нет оговорки`).toBeGreaterThan(0);
      }
    }
  });

  it('поиск по идентификатору совпадает со списком', () => {
    for (const id of categoryIds) expect(categoryById[id].id).toBe(id);
  });
});

describe('категория из одного калькулятора', () => {
  it('правило соседей применяется только там, где соседи есть', () => {
    // Раньше проверка была безусловной, и категория с единственным
    // калькулятором становилась невозможной: в Phase 7 из-за этого пришлось
    // переносить калькулятор между партиями. Здесь закреплено, что условие
    // проверяет наличие соседей, а не требует их.
    const source = readFileSync(`${root}tests/dataQuality.test.ts`, 'utf8');
    expect(source, 'условие на соседей исчезло').toContain('if (peers.length === 0) continue;');
  });

  it('шаблон калькулятора не оставляет блок связанных пустым', () => {
    // Явные связи, а при их отсутствии — соседи по категории. Для одиночной
    // категории соседей нет, и работают явные связи.
    const page = readFileSync(`${root}src/pages/[locale]/[category]/[calculator].astro`, 'utf8');
    expect(page).toContain('related.length > 0 ? related : categoryFallback');
  });
});

describe('общий код не перечисляет категории', () => {
  const shared = ['src/lib/types.ts', 'src/lib/search.ts', 'src/lib/calculatorGuidance.ts',
    'src/data/calculatorEditorial.ts', 'src/data/categories.ts'];

  it('ни один общий файл не содержит исчерпывающего списка категорий', () => {
    // Одно-два упоминания законны: категория может встретиться в комментарии
    // или в псевдонимах поиска. Нарушением считается перечисление, из которого
    // придётся вписывать девятую категорию.
    for (const file of shared) {
      const source = readFileSync(`${root}${file}`, 'utf8');
      const mentioned = categoryIds.filter((id) => source.includes(`'${id}'`) || source.includes(`\n  ${id}:`));
      expect(mentioned.length, `${file} перечисляет категории: ${mentioned.join(', ')}`).toBeLessThan(categoryIds.length);
    }
  });

  it('в браузер не уезжает копирайт категорий', () => {
    // Полный манифест тянет копирайт, вопросы, подсказки и оговорки восьми
    // категорий на семнадцати локалях. Поиск исполняется на клиенте, и когда он
    // импортировал общий манифест, замыкание маршрута выросло с 88,9 до 109 КиБ.
    // Проверка держит разделение: клиентские файлы берут только псевдонимы.
    const client = ['src/lib/search.ts', 'src/components/islands/CalculatorCatalog.tsx'];
    for (const file of client) {
      const source = readFileSync(`${root}${file}`, 'utf8');
      expect(source, `${file} импортирует полный манифест категорий`).not.toContain("categories/manifest.generated");
    }
  });

  it('лёгкий манифест содержит только псевдонимы', () => {
    const source = readFileSync(`${root}src/categories/aliases.generated.ts`, 'utf8');
    for (const forbidden of ['seoTitle', 'longDescription', 'faq', 'useCases', 'editorial']) {
      expect(source, `в лёгкий манифест просочилось ${forbidden}`).not.toContain(forbidden);
    }
  });

  it('i18n больше не хранит копирайт категорий', () => {
    const source = readFileSync(`${root}src/lib/i18n.ts`, 'utf8');
    expect(source).not.toContain('const enCategories');
    expect(source).not.toContain('const localizedCategoryFaq = {');
  });
});
