import { describe, expect, it } from 'vitest';
import { getCalculatorById } from '../src/lib/i18n';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { definition as simple } from '../src/calculators/simple-interest/definition';
import { definition as margin } from '../src/calculators/contribution-margin/definition';
import { definition as payback } from '../src/calculators/payback-period/definition';
import { definition as week } from '../src/calculators/week-number/definition';
import { definition as cac } from '../src/calculators/cac/definition';
import { definition as cpa } from '../src/calculators/cpa-cpl-cpi/definition';
import { definition as conversion } from '../src/calculators/conversion-rate/definition';
import { methodSources as simpleSources } from '../src/calculators/simple-interest/methodSources';
import { methodSources as marginSources } from '../src/calculators/contribution-margin/methodSources';
import { methodSources as paybackSources } from '../src/calculators/payback-period/methodSources';
import { methodSources as weekSources } from '../src/calculators/week-number/methodSources';
import { methodSources as cacSources } from '../src/calculators/cac/methodSources';
import { methodSources as cpaSources } from '../src/calculators/cpa-cpl-cpi/methodSources';
import { methodSources as conversionSources } from '../src/calculators/conversion-rate/methodSources';
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const tools = [simple, margin, payback, week, cac, cpa, conversion];
const sourceSets = [simpleSources, marginSources, paybackSources, weekSources, cacSources, cpaSources, conversionSources];
const routes: Record<string, readonly string[]> = {
  'simple-interest': ['/ru/finance/simple-interest/', '/en/finance/simple-interest/', '/uk/finansy/prosti-vidsotky/', '/de/finanzen/einfache-zinsen-rechner/', '/es/finanzas/interes-simple/'],
  'contribution-margin': ['/ru/business/contribution-margin/', '/en/business/contribution-margin/', '/uk/business/marzhynalnyi-dokhid/', '/de/business/deckungsbeitrag-rechner/', '/es/negocios/margen-de-contribucion/'],
  'payback-period': ['/ru/business/srok-okupaemosti/', '/en/business/payback-period/', '/uk/business/termin-okupnosti/', '/de/business/amortisationsdauer-rechner/', '/es/negocios/plazo-de-recuperacion/'],
  'week-number': ['/ru/date-time/week-number/', '/en/date-time/week-number-calculator/', '/uk/daty/kalkulyator-nomera-tyzhnya/', '/de/datum-zeit/kalenderwoche-berechnen/', '/es/fechas/numero-de-semana/'],
};
const expectedDefaults: Record<string, Record<string, string | number>> = {
  'simple-interest': { mode: 'interest', principal: 100000, rate: 8, interest: 24000, years: 3 },
  'contribution-margin': { price: 500, variable: 300, volume: 0 },
  'payback-period': { investment: 1000000, cashflow: 300000, rate: 0 },
  'week-number': { date: '2026-08-18' },
  'cac': { spend: 100000, customers: 50, ltv: 0 },
  'cpa-cpl-cpi': { mode: 'cpa', cost: 84000, actions: 320 },
  'conversion-rate': { visitors: 8000, conversions: 240, cost: 0 },
};
const bodyKeys = ['longDescription', 'howToUse', 'howItWorks', 'example', 'faq', 'disclaimer'] as const;

describe('wave 4 actual published copy, routes and subject method bibliography', () => {
  for (const [index, tool] of tools.entries()) for (const [localeIndex, locale] of locales.entries()) it(`${tool.id}/${locale}: actual body and SEO use the authored subject copy`, () => {
    const actual = getCalculatorById(tool.id, locale); expect(actual).toBeDefined();
    const copy = locale === 'ru' ? tool.presentation : tool.copy![locale];
    for (const key of bodyKeys) expect(actual![key]).toEqual(copy![key]);
    expect(actual!.seoContent?.intro).toBe(copy!.longDescription);
    expect(actual!.seoContent?.howItWorks).toBe(copy!.howItWorks);
    expect(actual!.seoContent?.example).toBe(copy!.example);
    expect(actual!.seoContent?.tips).toBe(copy!.howToUse!.join(' '));
    expect(actual!.seoContent?.faq).toEqual(copy!.faq);
    const baselineFloor = tool.id === 'conversion-rate' && locale !== 'uk' ? 5 : 4;
    expect(actual!.faq.length).toBeGreaterThanOrEqual(baselineFloor);
    expect(new Set(actual!.faq.map(item => item.q)).size).toBe(actual!.faq.length);
    expect(JSON.stringify(bodyKeys.map(key => actual![key]))).not.toMatch(/\b(?:undefined|NaN|Infinity)\b|проверка ИИ|AI formula|KI-Prüfung|revisión de IA/i);
    if (routes[tool.id]) expect(actual!.fullPath).toBe(routes[tool.id][localeIndex]);
    expect(actual!.name).toBe(copy!.name); expect(actual!.h1).toBe(copy!.h1);
    expect(Object.fromEntries(actual!.fields.map(field => [field.name, field.defaultValue]))).toEqual(expectedDefaults[tool.id]);
    const editorial = getCalculatorEditorial(actual!, locale);
    expect(editorial.method).toBe(actual!.howItWorks); expect(editorial.sources).toEqual(sourceSets[index][locale]);
    expect(editorial.limitation).toContain(actual!.disclaimer);
    for (const source of editorial.sources) expect(source.href).toMatch(/^https:\/\/(www\.investor\.gov|www\.consumerfinance\.gov|www\.accaglobal\.com|docs\.python\.org|stripe\.com|support\.google\.com|developers\.google\.com)\//);
  });
  it('the four financial/calendar subjects retain separate topic-specific FAQ in each locale', () => {
    for (const locale of locales) {
      const questions = tools.slice(0, 4).flatMap(tool => getCalculatorById(tool.id, locale)!.faq.map(item => item.q));
      expect(new Set(questions).size).toBe(questions.length);
    }
  });
});
