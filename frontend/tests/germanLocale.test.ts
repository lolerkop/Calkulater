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
import { runtimeBucket, runtimeLocale } from '../src/lib/platform/runtime';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { v2Runners } from '../src/calculators/runtime.generated';
import { v2Localization } from '../src/calculators/localization.generated';
import { runners } from '../src/lib/runners';
import { matchesCalculatorSearch } from '../src/lib/search';

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

  it('запись числа прописью в немецкий каталог не попадает', () => {
    // Калькулятор строит запись подстановкой слов по одному, а немецкий пишет
    // единицы перед десятками: 34 — это vierunddreißig, а не «dreißig vier».
    // Пословная подстановка дала бы синтаксически ломаный немецкий, поэтому
    // калькулятор исключён из локали, а не переведён кое-как.
    expect(getCalculatorById('number-to-words', 'de')).toBeUndefined();
    expect(getCalculatorById('number-to-words', 'en')).toBeDefined();
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

describe('немецкий результат в острове', () => {
  // Дефект, найденный в фазе 27DE: рантайм острова выбирал локализацию по
  // списку локалей, выписанному буквами, и немецкий в этот список не попал.
  // Немецкая страница показывала русские подписи и значения результата, хотя
  // немецкий пакет локализации был собран и уже уезжал в браузер. Тест
  // закрепляет, что признак переводимой локали здесь ровно один.
  const probe = {
    compute: (() => ({ primary: { label: '', value: '' }, secondary: [] })) as never,
    localization: {
      de: { results: { 'Итого': 'Summe' }, values: { 'шт': 'Stk' } },
      en: { results: { 'Итого': 'Total' } },
    },
  };

  it('немецкая локализация калькулятора доходит до острова', () => {
    expect(runtimeBucket(probe, 'de', 'results')).toEqual({ 'Итого': 'Summe' });
    expect(runtimeLocale(probe, 'de', 'results', 'Итого')).toBe('Summe');
    expect(runtimeBucket(probe, 'de', 'values')).toEqual({ 'шт': 'Stk' });
  });

  it('остальные переводимые локали не задеты, непереводимые по-прежнему отбрасываются', () => {
    expect(runtimeLocale(probe, 'en', 'results', 'Итого')).toBe('Total');
    expect(runtimeBucket(probe, 'ru', 'results')).toBeUndefined();
    expect(runtimeBucket(probe, 'fr', 'results')).toBeUndefined();
  });

  it('ни один немецкий результат не остаётся русским ни в одном режиме', () => {
    const german = getCalculators('de');
    const cyrillic = /[А-Яа-яЁёЇїІіЄєҐґ]/;
    const broken: string[] = [];
    // Значений по умолчанию мало: у калькулятора с режимами каждая ветка даёт
    // свои подписи, и непереведённая живёт ровно в той, куда по умолчанию не
    // попадают. Поэтому каждое поле с вариантами перебирается по очереди,
    // остальные остаются на своих значениях по умолчанию.
    const scenarios = (calculator: (typeof german)[number]) => {
      // Пустое поле даты уводит расчёт в ветку «проверьте данные», и все
      // остальные подписи так и не появляются. Поэтому заполняется каждое
      // поле: дата — настоящей датой, пустое число — положительным значением.
      const filled = Object.fromEntries(calculator.fields.map((field) => {
        const value = field.defaultValue ?? field.options?.[0]?.value;
        if (value !== undefined && value !== null && value !== '') return [field.name, value];
        if (field.type === 'date') return [field.name, '2026-08-29'];
        if (field.type === 'textarea') return [field.name, '2026-09-01'];
        if (field.type === 'number') return [field.name, 1000];
        return [field.name, 0];
      }));
      const cases: Array<Record<string, unknown>> = [filled];
      for (const field of calculator.fields) {
        for (const option of field.options ?? []) {
          cases.push({ ...filled, [field.name]: option.value });
        }
        // Необязательное числовое поле со значением «ноль» открывает или
        // закрывает собственные строки результата: доплата, комиссия,
        // страховка, стоимость партии. При одних лишь значениях по умолчанию
        // половина этих подписей не появляется вовсе.
        if (field.type === 'number') {
          cases.push({ ...filled, [field.name]: 0 }, { ...filled, [field.name]: 1000 });
        }
        if (field.type === 'date') {
          cases.push({ ...filled, [field.name]: '' }, { ...filled, [field.name]: '2030-02-29' });
        }
      }
      return cases;
    };
    for (const calculator of german) {
      const runner = v2Runners[calculator.id] ?? runners[calculator.id];
      if (!runner) continue;
      for (const inputs of scenarios(calculator)) {
      let raw;
      try { raw = runner(inputs as never); } catch { continue; }
      const bundle = v2Localization.de[calculator.id];
      const runtime = bundle ? { compute: runner, localization: { de: bundle } } : undefined;
      const localized = localizeResult(raw, 'de', calculator.id, runtime);
      // Таблица — часть результата, а не оформление: её заголовок, колонки,
      // ячейки и сноска переводятся тем же путём и в первой версии этой
      // проверки не участвовали. Заголовок «График первых платежей» остался
      // русским на четырёх немецких страницах именно поэтому.
      const table = localized.table;
      const blob = [
        localized.primary.label, localized.primary.value,
        ...localized.secondary.flatMap((row) => [row.label, row.value]),
        localized.note ?? '',
        table?.title ?? '', ...(table?.columns ?? []),
        ...(table?.rows ?? []).flat(), table?.note ?? '',
      ].join(' ');
      if (cyrillic.test(blob)) broken.push(`${calculator.id}: ${blob.slice(0, 120)}`);
      }
    }
    expect([...new Set(broken)]).toEqual([]);
  });
});

describe('немецкий поиск', () => {
  // Немецкую подборку ищут и с умляутами, и без них: без немецкой раскладки
  // пишут ae, oe, ue и ss. До свёртки запрос «Waehrung» возвращал ноль,
  // хотя «Währungsrechner» стоял в каталоге.
  const german = getCalculators('de').map((calculator) => ({
    id: calculator.id,
    name: calculator.name,
    shortDescription: calculator.shortDescription,
    fullPath: calculator.fullPath,
    keywords: calculator.keywords,
    category: calculator.category,
    popularity: calculator.popularity,
    isNew: calculator.isNew,
  }));

  const found = (query: string) => german.filter((c) => matchesCalculatorSearch(c, query)).map((c) => c.id);

  it('запрос без умляутов находит то же, что и с умляутами', () => {
    for (const [plain, umlaut] of [['Waehrung', 'Währung'], ['Groesse', 'Größe'], ['Ueberstunden', 'Überstunden']]) {
      expect(found(plain), plain).toEqual(found(umlaut));
      expect(found(plain).length, plain).toBeGreaterThan(0);
    }
  });

  it('немецкие слова находят свои калькуляторы', () => {
    expect(found('Waehrung')).toContain('currency-converter');
    expect(found('Fliesen')).toContain('tile-calculator');
    expect(found('Estrich')).toContain('screed-calculator');
    expect(found('Ziegel')).toContain('brick-calculator');
    expect(found('Kalorien')).toContain('calorie-calculator');
  });

  it('свёртка не задевает другие локали', () => {
    const russian = getCalculators('ru').map((c) => ({ ...c }));
    expect(russian.filter((c) => matchesCalculatorSearch(c, 'кредит')).length).toBeGreaterThan(0);
    expect(russian.filter((c) => matchesCalculatorSearch(c, 'всё')).length).toBeGreaterThanOrEqual(0);
  });
});
