import { describe, expect, it } from 'vitest';
import { getCalculatorById } from '../src/lib/i18n';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { getPhysicsMethodSources } from '../src/data/physicsMethodSources';

describe('published source boundaries', () => {
  for (const locale of ['ru', 'en', 'uk', 'de', 'es'] as const) {
    it(`${locale}: exposes the confirmed historical nox factor without claiming modern acceptance`, () => {
      const calculator = getCalculatorById('convert-illuminance', locale)!;
      const editorial = getCalculatorEditorial(calculator, locale);
      expect(editorial.limitation).toMatch(/nox/);
      expect(editorial.limitation).toMatch(/0[.,]001/);
      // Actual original Table I was read after the old unresolved-source guard.
      // Documentary support concerns the historical factor, not current SI acceptance.
      expect(editorial.limitation).toContain('Luxenberg (1965)');
      const scope = {
        ru: 'Оно не подтверждает включение nox в современную SI или нормативы освещения',
        en: 'It does not establish current SI or lighting-standard acceptance of nox',
        uk: 'Воно не підтверджує включення nox до сучасної SI чи нормативів освітлення',
        de: 'Das belegt keine heutige Anerkennung von Nox im SI oder in Beleuchtungsnormen',
        es: 'Esto no demuestra la aceptación actual de nox en el SI ni en normas de iluminación',
      };
      expect(editorial.limitation).toContain(scope[locale]);
      expect(editorial.sources.map(source => source.href)).toContain('https://vtda.org/pubs/InformationDisplay_SIDJournal/InformationDisplay_V02N03-1965%20MayJune.pdf');
      expect(editorial.sources.map(source => source.href)).toContain('https://doi.org/10.1002/j.2637-496X.1965.tb05118.x');
      expect(editorial.reviewedAt).toBeUndefined();
    });
    it(`${locale}: cites the actual physical model and keeps horsepower conventions separate`, () => {
      const kinetic = getPhysicsMethodSources('kinetic-energy', locale);
      expect(kinetic.map((source) => source.href)).toContain('https://openstax.org/books/university-physics-volume-1/pages/7-2-kinetic-energy');
      const power = getCalculatorEditorial(getCalculatorById('physics-power', locale)!, locale);
      expect(power.sources.some((source) => source.href?.includes('/7-4-power'))).toBe(true);
      expect(power.sources.some((source) => source.href?.includes('nist-guide-si-appendix-b9'))).toBe(true);
      expect(power.method).toMatch(/735[.,]49875/);
    });
  }
  it('does not attach these sources to an unrelated subject', () => {
    expect(getPhysicsMethodSources('ph-poh', 'en')).toEqual([]);
    expect(getCalculatorEditorial(getCalculatorById('convert-length', 'en')!, 'en').limitation).not.toMatch(/nox/);
  });
});
