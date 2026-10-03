import { describe, expect, it } from 'vitest';
import { getChemistrySpecialMethodSources } from '../src/data/chemistrySpecialMethodSources';

const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const sourceContracts = [
  {
    id: 'molar-mass',
    url: 'https://www.ciaaw.org/abridged-atomic-weights.htm',
    institution: 'CIAAW',
    scope: {
      ru: ['округлённые', 'обычных материалов', 'неопределённостью'],
      en: ['rounded', 'normal materials', 'uncertainties'],
      uk: ['округлені', 'звичайних матеріалів', 'невизначеністю'],
      de: ['gerundete', 'normale Materialien', 'Unsicherheiten'],
      es: ['redondeados', 'materiales normales', 'incertidumbres'],
    },
  },
  {
    id: 'convert-cooking-weight',
    url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-guidelines-determining-metric-equivalents-household-measures',
    institution: 'FDA',
    scope: {
      ru: ['240 мл', 'маркировки пищевой ценности в США', 'плотности ингредиентов этот источник не подтверждает'],
      en: ['240 mL', 'US nutrition labeling', 'does not establish ingredient densities'],
      uk: ['240 мл', 'маркування харчової цінності у США', 'не підтверджує густини інгредієнтів'],
      de: ['240 ml', 'US-Nährwertkennzeichnung', 'belegt keine Dichten der Zutaten'],
      es: ['240 ml', 'etiquetado nutricional de EE. UU.', 'no establece las densidades de los ingredientes'],
    },
  },
  {
    id: 'convert-fuel-economy',
    url: 'https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9',
    institution: 'NIST',
    scope: {
      ru: ['международная миля', 'американский и имперский галлоны', 'mpg'],
      en: ['international mile', 'US and imperial gallons', 'mpg'],
      uk: ['міжнародна миля', 'американський та імперський галони', 'mpg'],
      de: ['internationale Meile', 'US-Gallone und imperiale Gallone', 'mpg'],
      es: ['milla internacional', 'galón estadounidense y galón imperial', 'mpg'],
    },
  },
] as const;

describe('primary method references for the chemistry and special-converter corrections', () => {
  for (const contract of sourceContracts) {
    for (const locale of locales) {
      it(`${contract.id}/${locale}: names the checked primary source and its limited scope`, () => {
        const sources = getChemistrySpecialMethodSources(contract.id, locale);
        expect(sources).toHaveLength(1);
        expect(sources[0].href).toBe(contract.url);
        expect(sources[0].label).toContain(contract.institution);
        for (const phrase of contract.scope[locale]) expect(sources[0].label).toContain(phrase);
        expect(sources[0].label).not.toMatch(/VERIFIED|guaranteed|certified|гарантирован/i);
        if (locale !== 'en') {
          expect(sources[0].label).not.toBe(getChemistrySpecialMethodSources(contract.id, 'en')[0].label);
        }
      });
    }
  }

  for (const locale of locales) {
    it(`dilution/${locale}: does not use SI or mass-fraction references as proof of C1V1`, () => {
      expect(getChemistrySpecialMethodSources('dilution', locale)).toEqual([]);
    });
  }

  it('returns no decorative reference for unknown calculators, including inherited object keys', () => {
    for (const id of ['ph-poh', '', 'constructor', '__proto__']) {
      expect(getChemistrySpecialMethodSources(id, 'en')).toEqual([]);
    }
  });

  it('uses the established English fallback for an unsupported locale', () => {
    for (const contract of sourceContracts) {
      expect(getChemistrySpecialMethodSources(contract.id, 'fr')).toEqual(getChemistrySpecialMethodSources(contract.id, 'en'));
    }
  });

  it('returns independent source objects so a caller cannot alter another page’s references', () => {
    const sources = getChemistrySpecialMethodSources('molar-mass', 'en');
    sources[0].label = 'changed by a caller';
    sources[0].href = 'https://example.test/';
    const original = getChemistrySpecialMethodSources('molar-mass', 'en');
    expect(original[0].href).toBe(sourceContracts[0].url);
    expect(original[0].label).toContain('rounded values');
  });
});
