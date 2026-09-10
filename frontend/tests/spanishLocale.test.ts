import { describe, expect, it } from 'vitest';
import {
  getAlternatesForCalculator, getCalculatorById, getCalculators, getCategories,
  isCalculatorAvailableInLocale, localeMeta, locales, ui,
} from '../src/lib/i18n';
import { runtimeFor } from '../src/calculators/runtime.generated';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { buildInitialValues } from '../src/lib/shareLink';
import { matchesCalculatorSearch, normalizeSearchText } from '../src/lib/search';
import { esCalculatorContent } from '../src/data/esCalculatorContent';

const CYRILLIC = /[А-Яа-яЁё]/;
const esCalculators = getCalculators('es');
const esCategories = getCategories('es');

describe('испанская локаль: состав', () => {
  it('публична и стоит в контракте локалей', () => {
    expect(locales).toContain('es');
    expect(localeMeta.es.htmlLang).toBe('es');
    expect(localeMeta.es.localeCode).toBe('es-ES');
    expect(localeMeta.es.defaultCurrency).toBe('EUR');
  });

  it('каталог содержит ровно те калькуляторы, у которых есть испанский текст', () => {
    for (const calculator of esCalculators) {
      expect(esCalculatorContent[calculator.id], calculator.id).toBeDefined();
    }
    // И наоборот: калькулятор без подробного текста в каталог не попадает.
    // Это и есть ворота доступности — заглушка хуже отсутствия страницы.
    for (const id of Object.keys(esCalculatorContent)) {
      expect(isCalculatorAvailableInLocale(id, 'es'), id).toBe(true);
    }
  });

  it('ни одна испанская категория не пуста', () => {
    expect(esCategories).toHaveLength(16);
    for (const category of esCategories) {
      const members = esCalculators.filter((item) => item.category === category.id);
      expect(members.length, `${category.id}: испанский раздел без калькуляторов`).toBeGreaterThan(0);
    }
  });

  it('слаги категорий испанские и без коллизий', () => {
    const slugs = esCategories.map((category) => category.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug, slug).toMatch(/^[a-z-]+$/);
    expect(esCategories.find((c) => c.id === 'math')?.slug).toBe('matematicas');
    expect(esCategories.find((c) => c.id === 'geometry')?.slug).toBe('geometria');
  });
});

describe('испанская локаль: чужого языка нет', () => {
  it('оболочка категорий переведена целиком', () => {
    for (const category of esCategories) {
      const blob = [
        category.name, category.description, category.longDescription,
        category.seoTitle, category.seoDescription, category.h1,
        ...category.faq.flatMap((item) => [item.q, item.a]),
      ].join(' ');
      expect(CYRILLIC.test(blob), `${category.id}: кириллица в испанском разделе`).toBe(false);
    }
  });

  it('подписи полей, опций и строк результата не остаются русскими', () => {
    for (const calculator of esCalculators) {
      for (const field of calculator.fields) {
        const parts = [field.label, field.unit ?? '', field.placeholder ?? '', field.help ?? '',
          ...(field.options ?? []).map((option) => option.label)];
        for (const part of parts) {
          expect(CYRILLIC.test(part), `${calculator.id}/${field.name}: «${part}»`).toBe(false);
        }
      }
      for (const [key, label] of Object.entries(calculator.resultLabels ?? {})) {
        expect(CYRILLIC.test(label), `${calculator.id}/${key}: «${label}»`).toBe(false);
      }
    }
  });

  it('посчитанный результат переводится целиком', () => {
    for (const calculator of esCalculators) {
      const runtime = runtimeFor(calculator.id);
      const base = buildInitialValues(calculator.fields) as Record<string, unknown>;
      // Перебираются и режимы: русские подписи percent-calculator сидели именно
      // в них, а сценарий «значения по умолчанию» их не открывал вовсе.
      const scenarios: Record<string, unknown>[] = [
        base,
        Object.fromEntries(Object.entries(base).map(([k, v]) => [k, typeof v === 'number' ? 1000 : v])),
      ];
      for (const field of calculator.fields) {
        for (const option of field.options ?? []) {
          scenarios.push({ ...base, [field.name]: option.value });
        }
      }
      for (const values of scenarios) {
        let result;
        try { result = runtime.compute(values as never); } catch { continue; }
        if (!result?.primary) continue;
        const localized = localizeResult(result, 'es', calculator.id, runtime);
        const blob = [
          localized.primary.label, localized.primary.value,
          ...localized.secondary.flatMap((row) => [row.label, row.value]),
          localized.note ?? '', localized.table?.title ?? '',
          ...(localized.table?.columns ?? []), ...(localized.table?.rows ?? []).flat(),
          localized.table?.note ?? '',
        ].join(' ');
        expect(CYRILLIC.test(blob), `${calculator.id}: ${blob.slice(0, 160)}`).toBe(false);
      }
    }
  });

  it('оговорка калькулятора испанская, а не английская', () => {
    for (const calculator of esCalculators) {
      expect(calculator.disclaimer, calculator.id).toBeTruthy();
      expect(calculator.disclaimer, calculator.id).not.toContain('Results are reference estimates');
    }
  });
});

describe('испанская локаль: hreflang', () => {
  it('кластер испанского калькулятора взаимен и ведёт на существующие адреса', () => {
    for (const calculator of esCalculators) {
      const alternates = getAlternatesForCalculator(calculator.id);
      const es = alternates.find((item) => item.locale === 'es');
      expect(es, calculator.id).toBeDefined();
      expect(es!.href).toBe(calculator.fullPath);
      for (const item of alternates) {
        if (item.locale === 'x-default') continue;
        expect(getCalculatorById(calculator.id, item.locale), `${calculator.id}/${item.locale}`).toBeDefined();
      }
    }
  });

  it('калькулятор без испанской страницы не получает испанский hreflang', () => {
    // Отрицательный контроль привязан к документированному исключению: испанского
    // числительного алгоритма нет, поэтому этот калькулятор остаётся без испанской
    // страницы и после полной локализации — проверять на нём безопасно всегда.
    expect(isCalculatorAvailableInLocale('number-to-words', 'es')).toBe(false);
    const withoutSpanish = getCalculators('en').filter((item) => !isCalculatorAvailableInLocale(item.id, 'es'));
    expect(withoutSpanish.map((item) => item.id)).toContain('number-to-words');
    for (const calculator of withoutSpanish) {
      const alternates = getAlternatesForCalculator(calculator.id);
      expect(alternates.some((item) => item.locale === 'es'), calculator.id).toBe(false);
    }
  });

  it('русскоязычные калькуляторы не получают испанский', () => {
    for (const id of ['deposit-calculator', 'income-tax-calculator', 'vat-calculator']) {
      expect(isCalculatorAvailableInLocale(id, 'es'), id).toBe(false);
      expect(getAlternatesForCalculator(id).map((item) => item.locale)).toEqual(['ru']);
    }
  });
});

describe('испанский поиск', () => {
  const index = esCalculators.map((calculator) => ({
    ...calculator,
    categoryName: esCategories.find((category) => category.id === calculator.category)?.name,
  }));
  const find = (query: string) => index.filter((item) => matchesCalculatorSearch(item, query)).map((item) => item.id);

  it('ударения снимаются: набранное без них находит то же самое', () => {
    for (const [accented, plain] of [['préstamo', 'prestamo'], ['interés', 'interes'], ['crédito', 'credito'], ['cálculo', 'calculo']]) {
      expect(normalizeSearchText(accented), accented).toBe(normalizeSearchText(plain));
    }
    expect(find('prestamo')).toEqual(find('préstamo'));
    expect(find('interes')).toEqual(find('interés'));
    expect(find('prestamo').length).toBeGreaterThan(0);
  });

  it('«ñ» остаётся значимой буквой: año и ano — разные слова', () => {
    expect(normalizeSearchText('año')).not.toBe(normalizeSearchText('ano'));
    expect(find('año')).toContain('age-calculator');
    expect(find('ano')).not.toContain('age-calculator');
  });

  it('диерезис читается и по-испански, и по-немецки', () => {
    const probe = {
      id: 'probe', name: 'Pingüino', shortDescription: '', fullPath: '/es/x/',
      keywords: [], category: 'math' as const, popularity: 1, isNew: false,
    };
    for (const query of ['pinguino', 'pingüino']) {
      expect(matchesCalculatorSearch(probe, query), query).toBe(true);
    }
  });

  it('немецкая свёртка не сломана', () => {
    const de = getCalculators('de');
    const dcats = getCategories('de');
    const dindex = de.map((calculator) => ({
      ...calculator,
      categoryName: dcats.find((category) => category.id === calculator.category)?.name,
    }));
    const hits = (query: string) => dindex.filter((item) => matchesCalculatorSearch(item, query)).length;
    expect(hits('waehrung')).toBeGreaterThan(0);
    expect(hits('waehrung')).toBe(hits('währung'));
  });
});

describe('испанская оболочка интерфейса', () => {
  it('ui.es заполнена целиком и по-испански', () => {
    const ruKeys = Object.keys(ui.ru);
    expect(Object.keys(ui.es)).toEqual(ruKeys);
    // Названия языков в переключателе пишутся своим алфавитом во всех локалях:
    // «Русская версия» на испанской странице — это подпись ссылки на русскую
    // версию, а не утечка. Так же устроена и проверка артефакта.
    const nativeLanguageNames = new Set(['ruVersion', 'enVersion']);
    for (const key of ruKeys) {
      if (nativeLanguageNames.has(key)) continue;
      const value = (ui.es as Record<string, unknown>)[key];
      if (typeof value !== 'string') continue;
      expect(CYRILLIC.test(value), `ui.es.${key}: «${value}»`).toBe(false);
    }
  });
});
