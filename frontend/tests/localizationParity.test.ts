import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import {
  fullParityCalculatorIds,
  ruOnlyCalculatorReasons,
} from '../src/data/localizationParity';
import {
  getAlternatesForCalculator,
  getCalculatorById,
  getCalculators,
  getEquivalentCalculatorPath,
  localeMeta,
} from '../src/lib/i18n';

describe('localization parity', () => {
  it('classifies all public calculators', () => {
    const classified = new Set([
      ...fullParityCalculatorIds,
      ...Object.keys(ruOnlyCalculatorReasons),
    ]);
    expect(calculators).toHaveLength(25);
    expect(fullParityCalculatorIds).toHaveLength(22);
    expect(Object.keys(ruOnlyCalculatorReasons)).toHaveLength(3);
    expect(classified.size).toBe(calculators.length);
    for (const calculator of calculators) expect(classified.has(calculator.id)).toBe(true);
    expect(getCalculators('ru')).toHaveLength(25);
    expect(getCalculators('en')).toHaveLength(22);
    expect(getCalculators('uk')).toHaveLength(22);
  });

  it('creates complete hreflang clusters only for full-parity calculators', () => {
    for (const id of fullParityCalculatorIds) {
      const alternates = getAlternatesForCalculator(id);
      expect(alternates.map((item) => item.locale)).toEqual(['ru', 'en', 'uk', 'x-default']);
      for (const locale of ['ru', 'en', 'uk'] as const) {
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
    expect(header).toContain('data-language-switcher="desktop"');
    expect(header).toContain('data-language-switcher="mobile"');
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
