// Пространство имён локализации V2.
//
// Локальные ключи калькуляторов совпадают гораздо чаще, чем кажется: уже на
// пяти калькуляторах `mode` встречается трижды, а `income`, `a` и `b` — дважды.
// Плоская карта по имени ключа означала бы, что подпись, объявленная одним
// калькулятором, молча заменяет подпись другого. Именно это и произошло, когда
// комиссия объявила `mode`.
//
// Тесты ниже проверяют семантику области видимости, а не конкретные тексты:
// они должны падать при возврате к плоской карте, даже если все тексты изменят.

import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { v2Definitions } from '../../src/calculators/manifest.generated';
import { v2Localization } from '../../src/calculators/localization.generated';
import { lookupScoped, type ScopedLocalization } from '../../src/lib/platform/types';
import { getCalculatorById } from '../../src/lib/i18n';

describe('пространство имён локализации V2', () => {
  it('одинаковые локальные ключи действительно встречаются у разных калькуляторов', () => {
    const byField = new Map<string, Set<string>>();
    for (const definition of v2Definitions) {
      for (const field of definition.presentation.fields) {
        byField.set(field.name, (byField.get(field.name) ?? new Set()).add(definition.id));
      }
    }
    const repeated = [...byField.entries()].filter(([, ids]) => ids.size > 1);
    // Если это утверждение когда-нибудь перестанет выполняться, значит совпадений
    // больше нет и тесты ниже потеряли предмет — но пока их предостаточно.
    expect(repeated.length).toBeGreaterThan(0);
    expect(byField.get('mode')!.size).toBeGreaterThanOrEqual(3);
  });

  it('поиск по чужому идентификатору не возвращает значение соседа', () => {
    // Синтетическая раскладка: два калькулятора, один и тот же локальный ключ.
    const scoped: ScopedLocalization = {
      en: {
        'calc-a': { fields: { mode: 'A mode' }, options: { x: 'A option' }, results: { 'Итог': 'A total' } },
        'calc-b': { fields: { mode: 'B mode' }, options: { x: 'B option' }, results: { 'Итог': 'B total' } },
      },
      uk: {
        'calc-a': { fields: { mode: 'A режим' } },
        'calc-b': { fields: { mode: 'B режим' } },
      },
    };
    expect(lookupScoped(scoped, 'en', 'calc-a', 'fields', 'mode')).toBe('A mode');
    expect(lookupScoped(scoped, 'en', 'calc-b', 'fields', 'mode')).toBe('B mode');
    expect(lookupScoped(scoped, 'en', 'calc-a', 'options', 'x')).toBe('A option');
    expect(lookupScoped(scoped, 'en', 'calc-b', 'options', 'x')).toBe('B option');
    expect(lookupScoped(scoped, 'en', 'calc-a', 'results', 'Итог')).toBe('A total');
    expect(lookupScoped(scoped, 'en', 'calc-b', 'results', 'Итог')).toBe('B total');
    expect(lookupScoped(scoped, 'uk', 'calc-a', 'fields', 'mode')).toBe('A режим');
    // Неизвестный калькулятор не получает чужую подпись даже при совпадении ключа.
    expect(lookupScoped(scoped, 'en', 'calc-c', 'fields', 'mode')).toBeUndefined();
    // Русская локаль базовая и в переводе не участвует.
    expect(lookupScoped(scoped, 'ru', 'calc-a', 'fields', 'mode')).toBeUndefined();
  });

  it('собственная подпись mode не подменяет подписи соседей', () => {
    // Проценты и краска берут `mode` из общей легаси-карты и потому делят один
    // перевод — так было и до появления V2. Проверяется другое: комиссия
    // объявила собственную подпись, и она не протекла к ним.
    const modeLabel = (id: string, locale: 'en' | 'uk') =>
      getCalculatorById(id, locale)?.fields.find((field) => field.name === 'mode')?.label;

    for (const locale of ['en', 'uk'] as const) {
      const own = modeLabel('commission', locale);
      const percent = modeLabel('percent-calculator', locale);
      const paint = modeLabel('paint-calculator', locale);
      expect(own).toBeTruthy();
      expect(percent).toBeTruthy();
      expect(paint).toBeTruthy();
      expect(own).toBe(lookupScoped(v2Localization, locale, 'commission', 'fields', 'mode'));
      expect(own).not.toBe(percent);
      expect(own).not.toBe(paint);
      // Ни проценты, ни краска своей подписи не объявляли — значит остаются на легаси.
      expect(lookupScoped(v2Localization, locale, 'percent-calculator', 'fields', 'mode')).toBeUndefined();
      expect(lookupScoped(v2Localization, locale, 'paint-calculator', 'fields', 'mode')).toBeUndefined();
    }
  });

  it('повторяющаяся фраза результата не смешивается между калькуляторами', () => {
    const phrase = 'Проверьте данные';
    const owners = Object.entries(v2Localization.en)
      .filter(([, bundle]) => bundle.results?.[phrase])
      .map(([id]) => id);
    expect(owners.length).toBeGreaterThanOrEqual(2);
    for (const id of owners) {
      expect(lookupScoped(v2Localization, 'en', id, 'results', phrase)).toBeDefined();
    }
    // Калькулятор, который фразу не объявлял, через область видимости её не получает.
    expect(lookupScoped(v2Localization, 'en', 'percent-calculator', 'results', phrase)).toBeUndefined();
  });

  it('манифест локализации размечен по локали и калькулятору, а не по ключу', () => {
    for (const locale of ['en', 'uk'] as const) {
      for (const [id, bundle] of Object.entries(v2Localization[locale])) {
        expect(v2Definitions.some((definition) => definition.id === id)).toBe(true);
        for (const key of Object.keys(bundle)) {
          expect(['fields', 'options', 'results', 'values']).toContain(key);
        }
      }
    }
  });
});

describe('guard: локализация V2 не может стать глобальной', () => {
  const read = (path: string) => readFileSync(path, 'utf8');

  it('манифест локализации экспортирует только размеченную структуру', () => {
    const source = read('src/calculators/localization.generated.ts');
    const exported = [...source.matchAll(/^export const (\w+)/gm)].map((match) => match[1]);
    // Единственный экспорт — размеченный по калькуляторам. Появление здесь
    // плоской карты вроде `v2FieldLabels` вернуло бы класс коллизий.
    expect(exported).toEqual(['v2Localization']);
    expect(source).toMatch(/ScopedLocalization/);
  });

  it('общие карты локализации не смешиваются с данными V2', () => {
    // Плоское слияние в общие карты — ровно тот возврат к V1, который
    // guard обязан не пропустить.
    for (const path of ['src/lib/i18n.ts', 'src/lib/clientI18n.ts']) {
      const source = read(path);
      expect(source, path).not.toMatch(/\.\.\.v2(FieldLabels|OptionLabels|ResultPhrases|ResultValues)\b/);
    }
  });

  it('локализация V2 читается только через область видимости', () => {
    // Все обращения к манифесту идут через `lookupScoped`, которому
    // идентификатор калькулятора обязателен по сигнатуре.
    for (const path of [
      'src/lib/i18n.ts',
      'src/components/islands/calculator/resultLocalization.ts',
    ]) {
      const source = read(path);
      if (!source.includes('v2Localization')) continue;
      const direct = source.match(/v2Localization\s*\[/g) ?? [];
      expect(direct, `${path}: прямая индексация манифеста`).toEqual([]);
      expect(source).toMatch(/lookupScoped\(/);
    }
  });
});
