import { describe, expect, it } from 'vitest';
import { getCalculatorById } from '../src/lib/i18n';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { getCalculatorSpecificLimitation } from '../src/data/calculatorSpecificLimitations';
import { definition as gpa } from '../src/calculators/gpa/definition';

const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const grading = {ru:/одной шкале/,en:/one grading scale/,uk:/одній шкалі/,de:/dieselbe Skala/,es:/una sola escala/};
const institutions = {ru:/правила.*учебного заведения/i,en:/institutional rules/i,uk:/правила закладу/i,de:/Regeln einer Hochschule/,es:/normas de una institución/};
const codepoints = {ru:/кодовыми точками/,en:/code points/,uk:/кодові точки/,de:/Codepunkte/,es:/puntos de código/};

describe('specific method-card model boundaries', () => {
  for (const locale of locales) {
    it(`${locale}: GPA shows the grading convention rather than a percentage calculator rule`, () => {
      const page = getCalculatorById('gpa', locale)!;
      const text = getCalculatorEditorial(page, locale).limitation;
      expect(text).toMatch(grading[locale]); expect(text).toMatch(institutions[locale]);
      expect(text).not.toMatch(/процент|відсот|percent|Prozent|porcentaje/i);
    });
    it(`${locale}: exact divisor arithmetic is bounded by input and preview size`, () => {
      const text = getCalculatorEditorial(getCalculatorById('divisors', locale)!, locale).limitation;
      expect(text).toContain('1000000000000'); expect(text).toContain('40');
      expect(text).not.toMatch(/числовой точности браузера|ordinary numeric precision|числової точності браузера|übliche Zahlengenauigkeit|precisión numérica habitual/i);
    });
    it(`${locale}: text counts retain Unicode code-point and whitespace conventions`, () => {
      expect(getCalculatorEditorial(getCalculatorById('text-word-char-count', locale)!, locale).limitation).toMatch(codepoints[locale]);
    });
    it(`${locale}: quartile outlier flags retain the declared interpolation convention`, () => {
      const text = getCalculatorEditorial(getCalculatorById('quartile', locale)!, locale).limitation;
      expect(text).toMatch(/(?:type|Typ|tipo) 7/); expect(text).toContain('(n−1)·p');
    });
    it(`${locale}: inertial time dilation states its scope without assigning terrestrial gravity`, () => {
      const text = getCalculatorEditorial(getCalculatorById('relativity-dilation', locale)!, locale).limitation;
      expect(text).toContain('t=γτ'); expect(text).not.toMatch(/9[.,]80665/);
    });
    it(`${locale}: depreciation explicitly rejects fractional years within a capped horizon`, () => {
      expect(getCalculatorEditorial(getCalculatorById('car-depreciation', locale)!, locale).limitation).toContain('0–30');
    });
  }
  for (const id of ['tile-calculator','wallpaper-calculator','paint-calculator','screed-calculator','brick-calculator','sealant-volume','skirting','tank-volume']) {
    it(`${id}/ru: the already-specific notice remains exactly the source-card limitation`, () => {
      const page = getCalculatorById(id, 'ru')!;
      expect(getCalculatorSpecificLimitation(id, 'ru')).toBeUndefined();
      expect(getCalculatorEditorial(page, 'ru').limitation).toBe(page.disclaimer);
    });
  }
  for (const locale of ['ru','en','uk','de'] as const) {
    it(`date-shift-calculator/${locale}: preserves the existing bounded notice`, () => {
      const page = getCalculatorById('date-shift-calculator', locale)!;
      expect(getCalculatorSpecificLimitation(page.id, locale)).toBeUndefined();
      expect(getCalculatorEditorial(page, locale).limitation).toBe(page.disclaimer);
    });
  }
  it('room-volume/ru: its form and card state geometric bounds without material-consumption claims', () => {
    const page = getCalculatorById('room-volume', 'ru')!;
    const text = getCalculatorEditorial(page, 'ru').limitation;
    expect(text).toContain('площади-взвешенной средней высоты');
    expect(page.disclaimer).toContain('площади-взвешенной средней высоты');
    expect(text + page.disclaimer).not.toMatch(/расход|материал|укладки/);
  });
  // One grade has exactly its own mean, independently of weighting arithmetic.
  for (const [grades, expected] of [['1e-5', '1,000·10^-5'], ['0.0001', '0,0001'], ['1000000000000', '1,000·10^12'], ['0', '0']] as const) {
    it(`GPA display retains the independently known single-grade mean ${grades}`, () => {
      expect(gpa.compute({ grades }).primary.value).toBe(expected);
    });
  }
  it('missing IDs and unsupported native copies do not manufacture an English limitation', () => {
    expect(getCalculatorSpecificLimitation('unreviewed-calculator', 'en')).toBeUndefined();
    expect(getCalculatorSpecificLimitation('gpa', 'fr')).toBeUndefined();
    expect(getCalculatorSpecificLimitation('number-to-words', 'de')).toBeUndefined();
    expect(getCalculatorById('number-to-words', 'de')).toBeUndefined();
  });
});
