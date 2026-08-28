import { describe, expect, it } from 'vitest';
import { parseLocalizedNumber } from '../src/lib/format';
import {
  allLocales,
  getCalculators,
  getCalculatorById,
  getCategories,
  locales,
  localeMeta,
} from '../src/lib/i18n';
import { deCalculatorContent } from '../src/data/deCalculatorContent';

// Контракт немецкой локали, заложенный в фазе 27DE-F.
//
// Немецкий отличается от остальных локалей тем, что выпускается постепенно:
// каталог содержит ровно те калькуляторы, для которых есть настоящий немецкий
// текст. Тесты закрепляют и сам контракт локали, и это ограничение.

describe('немецкая локаль: признание и метаданные', () => {
  it('de публичная локаль сборки', () => {
    expect(locales).toContain('de');
    expect(allLocales).toContain('de');
  });

  it('метаданные соответствуют немецкому контракту', () => {
    const meta = localeMeta.de;
    expect(meta.htmlLang).toBe('de');
    expect(meta.localeCode).toBe('de-DE');
    expect(meta.ogLocale).toBe('de_DE');
    expect(meta.defaultCurrency).toBe('EUR');
    expect(meta.label).toBe('Deutsch');
  });
});

describe('немецкий разбор чисел', () => {
  // Немецкий десятичный разделитель — запятая, разряды отделяются пробелом или
  // точкой. Разбор уже это умеет, и тесты фиксируют поведение как контракт.
  const de = (v: string) => parseLocalizedNumber(v, 'de');

  it('запятая — десятичный разделитель', () => {
    expect(de('1,5')).toBe(1.5);
    expect(de('0,001')).toBe(0.001);
    expect(de('-0,5')).toBe(-0.5);
    expect(de('+2,5')).toBe(2.5);
    // Различающий случай: у английского это разряды и получается 1234,
    // у немецкого запятая десятичная всегда. Без этой строки подмена
    // немецкого разделителя на английский прошла бы незамеченной.
    expect(de('1,234')).toBe(1.234);
    expect(de('12,345')).toBe(12.345);
  });

  it('точка как разряд вместе с десятичной запятой', () => {
    expect(de('1.234,56')).toBe(1234.56);
    expect(de('12.345,67')).toBe(12345.67);
    expect(de('-1.234,56')).toBe(-1234.56);
  });

  it('пробел и неразрывный пробел разделяют разряды', () => {
    expect(de('1 234,56')).toBe(1234.56);
    expect(de('1 234,56')).toBe(1234.56);
    expect(de('1 234,56')).toBe(1234.56);
  });

  it('одиночная точка остаётся десятичной — сознательное отступление', () => {
    // По немецкой типографике «1.234» — это тысяча двести тридцать четыре.
    // Здесь она читается как 1,234, и это решение, а не упущение: адреса
    // общего доступа сериализуются через String(), то есть всегда с точкой как
    // десятичным разделителем. Прочитать «18.015» из ссылки как 18015 значило
    // бы ошибиться в тысячу раз при перезагрузке страницы. Однозначные немецкие
    // формы записи разрядов — пробелом и точкой вместе с запятой — работают.
    expect(de('1.234')).toBe(1.234);
    expect(de('18.015')).toBe(18.015);
    expect(de('999.999')).toBe(999.999);
  });

  it('мусор отвергается, а не достраивается', () => {
    expect(de('1 23')).toBeNull();
    expect(de('abc')).toBeNull();
    expect(de('')).toBeNull();
  });

  it('немецкий разбор не меняет остальные локали', () => {
    expect(parseLocalizedNumber('1,234', 'en')).toBe(1234);
    expect(parseLocalizedNumber('1,234', 'ru')).toBe(1.234);
    expect(parseLocalizedNumber('1,234', 'uk')).toBe(1.234);
  });
});

describe('немецкие категории', () => {
  const german = getCategories('de');

  it('все шестнадцать категорий переведены', () => {
    expect(german).toHaveLength(16);
    for (const category of german) {
      expect(category.name.length, category.id).toBeGreaterThan(0);
      expect(category.slug.length, category.id).toBeGreaterThan(0);
    }
  });

  it('слаги немецкие, а не скопированные из английского', () => {
    const en = Object.fromEntries(getCategories('en').map((c) => [c.id, c.slug]));
    const copied = german.filter((c) => c.slug === en[c.id] && !['fitness', 'business', 'computer'].includes(c.slug));
    expect(copied.map((c) => c.id)).toEqual([]);
  });

  it('слаги уникальны и пригодны для адреса', () => {
    const slugs = german.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug, slug).toMatch(/^[a-z0-9-]+$/);
      expect(slug, slug).not.toMatch(/-de$|-2$/);
    }
  });

  it('немецкие слаги не сталкиваются со служебными адресами', () => {
    const reserved = new Set(['calculators', 'about', 'contacts', 'privacy']);
    for (const category of german) {
      expect(reserved.has(category.slug), category.slug).toBe(false);
    }
  });
});

describe('немецкий каталог калькуляторов', () => {
  const german = getCalculators('de');

  it('каталог не пуст и покрывает каждую категорию', () => {
    expect(german.length).toBeGreaterThan(0);
    const covered = new Set(german.map((c) => c.category));
    expect(covered.size).toBe(getCategories('de').length);
  });

  it('каждый немецкий калькулятор владеет подробным немецким текстом', () => {
    for (const calculator of german) {
      const detailed = deCalculatorContent[calculator.id];
      expect(detailed, calculator.id).toBeDefined();
      expect(detailed!.longDescription!.length, calculator.id).toBeGreaterThan(80);
      expect(detailed!.howToUse!.length, calculator.id).toBeGreaterThan(1);
      expect(detailed!.faq!.length, calculator.id).toBeGreaterThan(1);
    }
  });

  it('слаги калькуляторов уникальны внутри категории и без механических суффиксов', () => {
    const byCategory = new Map<string, string[]>();
    for (const calculator of german) {
      const list = byCategory.get(calculator.category) ?? [];
      list.push(calculator.slug);
      byCategory.set(calculator.category, list);
    }
    for (const [category, slugs] of byCategory) {
      expect(new Set(slugs).size, category).toBe(slugs.length);
    }
    for (const calculator of german) {
      expect(calculator.slug, calculator.id).toMatch(/^[a-z0-9-]+$/);
      expect(calculator.slug, calculator.id).not.toMatch(/-de$/);
    }
  });

  it('русскоязычные по существу калькуляторы в немецкий каталог не попадают', () => {
    for (const id of ['income-tax-calculator', 'vat-calculator', 'deposit-calculator']) {
      expect(getCalculatorById(id, 'de'), id).toBeUndefined();
    }
  });

  it('в немецком тексте нет кириллицы и незакрытых подстановок', () => {
    const cyrillic = /[А-Яа-яЁёЇїІіЄєҐґ]/;
    for (const calculator of german) {
      const detailed = deCalculatorContent[calculator.id]!;
      const blob = [
        calculator.name, calculator.shortDescription, calculator.seoTitle, calculator.h1,
        detailed.longDescription, detailed.howItWorks, detailed.example,
        ...(detailed.howToUse ?? []),
        ...(detailed.faq ?? []).flatMap((item) => [item.q, item.a]),
      ].join(' ');
      expect(cyrillic.test(blob), calculator.id).toBe(false);
      expect(blob, calculator.id).not.toMatch(/\{\w+\}/);
      expect(blob, calculator.id).not.toMatch(/\b(undefined|NaN|Infinity)\b/);
    }
  });

  it('немецкие описания не повторяют друг друга дословно', () => {
    const intros = german.map((c) => deCalculatorContent[c.id]!.longDescription);
    expect(new Set(intros).size).toBe(intros.length);
  });
});
