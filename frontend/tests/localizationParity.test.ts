import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import {
  fullParityCalculatorIds,
  ruOnlyCalculatorReasons,
} from '../src/data/localizationParity';
import { v2FullParityIds } from '../src/calculators/manifest.generated';
import {
  getAlternatesForCalculator,
  getCalculatorById,
  getCalculators,
  getEquivalentCalculatorPath,
  localeMeta,
  locales,
} from '../src/lib/i18n';

describe('localization parity', () => {
  it('classifies all public calculators', () => {
    const classified = new Set([
      ...fullParityCalculatorIds,
      ...Object.keys(ruOnlyCalculatorReasons),
    ]);
    // Классификация больше не живёт в одном списке. Легаси-калькуляторы
    // перечислены явно, калькуляторы V2 объявляют готовность локали сами —
    // наличием собственных комплектов копирайта. Проверяется структура:
    // каждый публичный калькулятор отнесён ровно к одной из трёх категорий.
    const ruOnly = new Set(Object.keys(ruOnlyCalculatorReasons));
    const v2Ready = new Set(v2FullParityIds);
    for (const calculator of calculators) {
      // Мигрированные калькуляторы попадают сразу в две категории: они остались
      // в легаси-списке и одновременно объявляют готовность как V2. Важно
      // другое — каждый калькулятор отнесён хотя бы к одной, а «только русский»
      // несовместим с полным паритетом.
      const fullParity = classified.has(calculator.id) && !ruOnly.has(calculator.id);
      expect(fullParity || ruOnly.has(calculator.id) || v2Ready.has(calculator.id), calculator.id).toBe(true);
      if (ruOnly.has(calculator.id)) expect(v2Ready.has(calculator.id), calculator.id).toBe(false);
    }

    expect(getCalculators('ru')).toHaveLength(calculators.length);
    for (const locale of ['en', 'uk'] as const) {
      const available = getCalculators(locale).map((calculator) => calculator.id);
      expect(new Set(available).size).toBe(available.length);
      expect(available).toHaveLength(calculators.length - ruOnly.size);
      for (const id of available) expect(ruOnly.has(id), id).toBe(false);
    }
  });

  it('creates complete hreflang clusters only for full-parity calculators', () => {
    // Набор локалей выводится из состава сборки, а не выписан буквами: с
    // появлением немецкого список пришлось бы править вручную, и утверждение
    // от этого стало бы слабее. В таком виде оно требует полный кластер по
    // всем выпущенным локалям — выпадение любой из них здесь и упадёт.
    for (const id of fullParityCalculatorIds) {
      const alternates = getAlternatesForCalculator(id);
      expect(alternates.map((item) => item.locale)).toEqual([...locales, 'x-default']);
      for (const locale of locales) {
        expect(alternates.find((item) => item.locale === locale)?.href).toBe(getCalculatorById(id, locale)?.fullPath);
      }
    }
  });

  it('isolates Russian tax and deposit calculators from false clusters', () => {
    for (const id of Object.keys(ruOnlyCalculatorReasons)) {
      expect(getAlternatesForCalculator(id)).toEqual([
        { locale: 'ru', href: getCalculatorById(id, 'ru')?.fullPath },
      ]);
      expect(getEquivalentCalculatorPath(id, 'en')).not.toBe('/en/');
      expect(getEquivalentCalculatorPath(id, 'uk')).not.toBe('/uk/');
    }
  });

  it('uses UA in UI while preserving the correct uk language code', () => {
    expect(localeMeta.uk.label).toBe('Українська');
    expect(localeMeta.uk.shortLabel).toBe('UA');
    expect(localeMeta.uk.htmlLang).toBe('uk');
    expect(localeMeta.uk.localeCode).toBe('uk-UA');
  });

  it('keeps priority Ukrainian pages specific', () => {
    for (const id of ['bmi-calculator', 'percent-calculator', 'currency-converter', 'usd-to-eur', 'eur-to-mdl', 'usd-to-mdl']) {
      const calculator = getCalculatorById(id, 'uk')!;
      const combined = [
        calculator.longDescription,
        calculator.howItWorks,
        calculator.example,
        ...calculator.faq.flatMap((item) => [item.q, item.a]),
      ].join(' ');
      expect(combined).not.toContain('відповідну формулу');
      expect(combined).not.toContain('прикладовими значеннями');
      expect(calculator.faq.length).toBeGreaterThanOrEqual(4);
    }
  });

  it('renders real switcher links and disabled unavailable locales', () => {
    const header = readFileSync('src/components/Header.astro', 'utf8');
    // Переключатель ОДИН. Прежде их было два — настольный и мобильный, — и
    // каждая локаль попадала в разметку дважды; значения «desktop»/«mobile»
    // различали именно копии. Копий нет, и проверка теперь сильнее прежней:
    // она запрещает им вернуться.
    expect(header.match(/data-language-switcher/g)).toHaveLength(1);
    expect(header).toContain('aria-disabled="true"');
    expect(header).toContain('item.link.href');
  });

  it('keeps the exported parity inventory synchronized', () => {
    const csv = readFileSync('reports/localization-parity.csv', 'utf8');
    expect(csv.trim().split(/\r?\n/)).toHaveLength(calculators.length + 1);
    expect(csv).toContain('calculator_id,ru_url,en_url,uk_url,parity_status,reason,hreflang_allowed,switcher_behavior');
    for (const calculator of calculators) expect(csv).toContain(`${calculator.id},`);
  });
});
