import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { calculators } from '../src/data/calculators';
import {
  getCalculatorById,
  getCalculators,
  getCategories,
  isCalculatorAvailableInLocale,
  locales,
} from '../src/lib/i18n';

describe('routing content: i18n routes', () => {
  it('uses a neutral root page and localized home pages', async () => {
    const root = await import('../src/pages/index.astro?raw');
    const localizedHome = await import('../src/pages/[locale]/index.astro?raw');

    expect(root.default).toContain('locale-gateway');
    expect(root.default).toContain('noindex={true}');
    expect(root.default).toContain('locales.map');
    expect(root.default).toContain('gateway-${locale}');
    expect(localizedHome.default).toContain('getStaticPaths');
    expect(localizedHome.default).toContain('locales.map');
    expect(localizedHome.default).toContain('home-hero-actions');
    expect(localizedHome.default).toContain('SearchBox');
    expect(localizedHome.default).toContain('CategoryCard');
    expect(localizedHome.default).toContain('CalculatorCard');
  });

  it('builds localized catalog, category and calculator pages', async () => {
    const catalog = await import('../src/pages/[locale]/calculators.astro?raw');
    const category = await import('../src/pages/[locale]/[category]/index.astro?raw');
    const calculator = await import('../src/pages/[locale]/[category]/[calculator].astro?raw');

    expect(catalog.default).toContain('CalculatorCatalog');
    expect(catalog.default).toContain('locale={locale}');
    expect(category.default).toContain('getCategories(locale)');
    expect(category.default).toContain('getCalculatorsByCategory(category.id, locale)');
    expect(calculator.default).toContain('findCalculatorBySlug');
    expect(calculator.default).toContain('CalculatorIsland calc={islandCalc} locale={locale}');
    expect(calculator.default).toContain('getAlternatesForCalculator');
    expect(calculator.default).toContain('calculator-freshness');
  });

  it('keeps localized public locales scoped to global calculators only', () => {
    expect(locales).toEqual(['ru', 'en', 'es', 'de', 'fr', 'pt', 'it', 'pl', 'nl', 'ro', 'id', 'tr', 'vi', 'cs', 'uk', 'sk', 'hu']);
    for (const locale of locales) {
      if (locale === 'ru') continue;
      expect(getCalculatorById('income-tax-calculator', locale)).toBeUndefined();
      expect(getCalculatorById('vat-calculator', locale)).toBeUndefined();
      expect(isCalculatorAvailableInLocale('discount-calculator', locale)).toBe(true);
      expect(getCalculators(locale).length).toBe(19);
    }
    expect(getCalculatorById('income-tax-calculator', 'ru')).toBeTruthy();
    expect(getCalculatorById('vat-calculator', 'ru')).toBeTruthy();
    expect(getCalculators('ru').length).toBe(calculators.length);
  });

  it('uses localized category and calculator slugs', () => {
    expect(getCategories('en').map((category) => category.slug)).toContain('fitness');
    expect(getCategories('en').map((category) => category.slug)).toContain('home-improvement');
    expect(getCategories('es').map((category) => category.slug)).toContain('finanzas');
    expect(getCategories('de').map((category) => category.slug)).toContain('heimwerken');
    expect(getCategories('fr').map((category) => category.slug)).toContain('finances');
    expect(getCategories('fr').map((category) => category.slug)).toContain('maison');
    expect(getCategories('pt').map((category) => category.slug)).toContain('financas');
    expect(getCategories('pt').map((category) => category.slug)).toContain('casa');
    expect(getCategories('it').map((category) => category.slug)).toContain('finanza');
    expect(getCategories('it').map((category) => category.slug)).toContain('casa');
    expect(getCategories('pl').map((category) => category.slug)).toContain('finanse');
    expect(getCategories('pl').map((category) => category.slug)).toContain('remont');
    expect(getCategories('nl').map((category) => category.slug)).toContain('financien');
    expect(getCategories('nl').map((category) => category.slug)).toContain('klussen');
    expect(getCategories('ro').map((category) => category.slug)).toContain('finante');
    expect(getCategories('ro').map((category) => category.slug)).toContain('renovari');
    expect(getCategories('id').map((category) => category.slug)).toContain('keuangan');
    expect(getCategories('id').map((category) => category.slug)).toContain('renovasi');
    expect(getCategories('tr').map((category) => category.slug)).toContain('finans');
    expect(getCategories('tr').map((category) => category.slug)).toContain('tadilat');
    expect(getCategories('vi').map((category) => category.slug)).toContain('tai-chinh');
    expect(getCategories('vi').map((category) => category.slug)).toContain('sua-nha');
    expect(getCategories('cs').map((category) => category.slug)).toContain('finance');
    expect(getCategories('cs').map((category) => category.slug)).toContain('rekonstrukce');
    expect(getCategories('uk').map((category) => category.slug)).toContain('finansy');
    expect(getCategories('uk').map((category) => category.slug)).toContain('remont');
    expect(getCategories('sk').map((category) => category.slug)).toContain('financie');
    expect(getCategories('sk').map((category) => category.slug)).toContain('rekonstrukcia');
    expect(getCategories('hu').map((category) => category.slug)).toContain('penzugyek');
    expect(getCategories('hu').map((category) => category.slug)).toContain('felujitas');
    expect(getCalculatorById('credit-calculator', 'en')?.fullPath).toBe('/en/finance/loan-calculator/');
    expect(getCalculatorById('percent-calculator', 'en')?.fullPath).toBe('/en/finance/percentage-calculator/');
    expect(getCalculatorById('working-days-calculator', 'en')?.fullPath).toBe('/en/date-time/business-days-calculator/');
    expect(getCalculatorById('percent-calculator', 'es')?.fullPath).toBe('/es/finanzas/calculadora-porcentajes/');
    expect(getCalculatorById('percent-calculator', 'de')?.fullPath).toBe('/de/finanzen/prozentrechner/');
    expect(getCalculatorById('percent-calculator', 'fr')?.fullPath).toBe('/fr/finances/calculateur-pourcentage/');
    expect(getCalculatorById('bmi-calculator', 'fr')?.fullPath).toBe('/fr/sante/calculatrice-imc/');
    expect(getCalculatorById('percent-calculator', 'pt')?.fullPath).toBe('/pt/financas/calculadora-percentagem/');
    expect(getCalculatorById('bmi-calculator', 'pt')?.fullPath).toBe('/pt/fitness/calculadora-imc/');
    expect(getCalculatorById('percent-calculator', 'it')?.fullPath).toBe('/it/finanza/calcolatore-percentuale/');
    expect(getCalculatorById('bmi-calculator', 'it')?.fullPath).toBe('/it/fitness/calcolatore-bmi/');
    expect(getCalculatorById('percent-calculator', 'pl')?.fullPath).toBe('/pl/finanse/kalkulator-procentowy/');
    expect(getCalculatorById('bmi-calculator', 'pl')?.fullPath).toBe('/pl/fitness/kalkulator-bmi/');
    expect(getCalculatorById('percent-calculator', 'nl')?.fullPath).toBe('/nl/financien/percentage-calculator/');
    expect(getCalculatorById('bmi-calculator', 'nl')?.fullPath).toBe('/nl/fitness/bmi-calculator/');
    expect(getCalculatorById('percent-calculator', 'ro')?.fullPath).toBe('/ro/finante/calculator-procente/');
    expect(getCalculatorById('bmi-calculator', 'ro')?.fullPath).toBe('/ro/fitness/calculator-bmi/');
    expect(getCalculatorById('percent-calculator', 'id')?.fullPath).toBe('/id/keuangan/kalkulator-persentase/');
    expect(getCalculatorById('bmi-calculator', 'id')?.fullPath).toBe('/id/fitness/kalkulator-bmi/');
    expect(getCalculatorById('percent-calculator', 'tr')?.fullPath).toBe('/tr/finans/yuzde-hesaplayici/');
    expect(getCalculatorById('bmi-calculator', 'tr')?.fullPath).toBe('/tr/fitness/bmi-hesaplayici/');
    expect(getCalculatorById('percent-calculator', 'vi')?.fullPath).toBe('/vi/tai-chinh/may-tinh-phan-tram/');
    expect(getCalculatorById('bmi-calculator', 'vi')?.fullPath).toBe('/vi/fitness/may-tinh-bmi/');
    expect(getCalculatorById('percent-calculator', 'cs')?.fullPath).toBe('/cs/finance/procentni-kalkulacka/');
    expect(getCalculatorById('bmi-calculator', 'cs')?.fullPath).toBe('/cs/fitness/bmi-kalkulacka/');
    expect(getCalculatorById('percent-calculator', 'uk')?.fullPath).toBe('/uk/finansy/kalkulyator-vidsotkiv/');
    expect(getCalculatorById('bmi-calculator', 'uk')?.fullPath).toBe('/uk/fitness/kalkulyator-bmi/');
    expect(getCalculatorById('percent-calculator', 'sk')?.fullPath).toBe('/sk/financie/percentualna-kalkulacka/');
    expect(getCalculatorById('bmi-calculator', 'sk')?.fullPath).toBe('/sk/fitness/bmi-kalkulacka/');
    expect(getCalculatorById('percent-calculator', 'hu')?.fullPath).toBe('/hu/penzugyek/szazalekkalkulator/');
    expect(getCalculatorById('bmi-calculator', 'hu')?.fullPath).toBe('/hu/fitness/bmi-kalkulator/');
    expect(getCalculatorById('credit-calculator', 'ru')?.fullPath).toBe('/ru/finance/credit-calculator/');
  });
});

describe('routing content: localized components', () => {
  it('passes locale through layout, header, footer and cards', async () => {
    const layout = await import('../src/components/Layout.astro?raw');
    const header = await import('../src/components/Header.astro?raw');
    const footer = await import('../src/components/Footer.astro?raw');
    const calculatorCard = await import('../src/components/CalculatorCard.astro?raw');
    const categoryCard = await import('../src/components/CategoryCard.astro?raw');

    expect(layout.default).toContain('<html lang={meta.htmlLang}>');
    expect(layout.default).toContain('<Header locale={locale} alternates={alternates} />');
    expect(layout.default).toContain('<Footer locale={locale} />');
    expect(header.default).toContain('localeCatalog(locale)');
    expect(header.default).toContain('header-lang-');
    expect(footer.default).toContain('getPopularCalculators(locale)');
    expect(calculatorCard.default).toContain('getCategoryById(calc.category, locale)');
    expect(categoryCard.default).toContain('href={`/${locale}/${category.slug}/`}');
  });

  it('localizes React islands while keeping shareable URLs', async () => {
    const searchBox = await import('../src/components/islands/SearchBox.tsx?raw');
    const catalog = await import('../src/components/islands/CalculatorCatalog.tsx?raw');
    const island = await import('../src/components/islands/CalculatorIsland.tsx?raw');

    expect(searchBox.default).toContain('../../lib/clientI18n');
    expect(catalog.default).toContain('../../lib/clientI18n');
    expect(island.default).toContain('../../lib/clientI18n');
    expect(searchBox.default).not.toContain('../../lib/i18n');
    expect(catalog.default).not.toContain('../../lib/i18n');
    expect(island.default).not.toContain('../../lib/i18n');
    expect(searchBox.default).toContain('localeCatalog(locale)');
    expect(searchBox.default).toContain('searchCopyByLocale');
    expect(searchBox.default).toContain('Buscar calculadoras');
    expect(searchBox.default).toContain('Rechner suchen');
    expect(searchBox.default).toContain('Szukaj kalkulatorow');
    expect(searchBox.default).toContain('Rekentools zoeken');
    expect(searchBox.default).toContain('Cauta calculatoare');
    expect(searchBox.default).toContain('Cari kalkulator');
    expect(searchBox.default).toContain('Hesaplayıcı ara');
    expect(searchBox.default).toContain('Tìm máy tính');
    expect(searchBox.default).toContain('Hledat kalkulačky');
    expect(searchBox.default).toContain('Пошук калькуляторів');
    expect(searchBox.default).toContain('Hľadať kalkulačky');
    expect(searchBox.default).toContain('Kalkulátorok keresése');
    expect(catalog.default).toContain('quickQueriesByLocale');
    expect(catalog.default).toContain('catalogCopyByLocale');
    expect(catalog.default).toContain('Buscar en el catálogo');
    expect(catalog.default).toContain('Katalogsuche');
    expect(catalog.default).toContain('Wyszukiwanie w katalogu');
    expect(catalog.default).toContain('Zoeken in catalogus');
    expect(catalog.default).toContain('Cautare in catalog');
    expect(catalog.default).toContain('Pencarian katalog');
    expect(catalog.default).toContain('Katalog araması');
    expect(catalog.default).toContain('Tìm trong danh mục');
    expect(catalog.default).toContain('Hledat v katalogu');
    expect(catalog.default).toContain('Пошук у каталозі');
    expect(catalog.default).toContain('Hľadať v katalógu');
    expect(catalog.default).toContain('Keresés a katalógusban');
    expect(island.default).toContain('locale?: Locale');
    expect(island.default).toContain('calculatorCopyByLocale');
    expect(island.default).toContain('localizeResult');
    expect(island.default).toContain("qs + '#calculator'");
    expect(island.default).toContain('buildQueryString');
  });
});

describe('routing content: SEO plumbing', () => {
  it('adds hreflang alternate links and locale-aware JSON-LD helpers', async () => {
    const seo = await import('../src/components/Seo.astro?raw');
    const seoLib = await import('../src/lib/seo.ts?raw');

    expect(seo.default).toContain('rel="alternate"');
    expect(seo.default).toContain('hreflang');
    expect(seo.default).toContain('localeMeta[item.locale].htmlLang');
    expect(seoLib.default).toContain('websiteJsonLdForLocale');
    expect(seoLib.default).toContain('inLanguage');
    expect(seoLib.default).toContain('priceCurrency: localeMeta[locale].defaultCurrency');
    expect(seoLib.default).toContain('/calculators/');
  });

  it('ships Netlify redirects for old unprefixed URLs', () => {
    const redirectsPath = fileURLToPath(new URL('../public/_redirects', import.meta.url));
    const redirects = readFileSync(redirectsPath, 'utf8');

    expect(redirects).toContain('/calculators/ /ru/calculators/ 301!');
    expect(redirects).toContain('/finance/* /ru/finance/:splat 301!');
    expect(redirects).toContain('/sport/* /ru/sport/:splat 301!');
  });
});
