import { describe, expect, it } from 'vitest';
import { getCalculatorById } from '../src/lib/i18n';
import { definition as power } from '../src/calculators/power-root/definition';
import { definition as quadratic } from '../src/calculators/quadratic-equation/definition';
import { definition as linear } from '../src/calculators/linear-equation/definition';
import { definition as system } from '../src/calculators/linear-system/definition';
import { definition as modulo } from '../src/calculators/modulo/definition';
import { definition as gcd } from '../src/calculators/gcd-lcm/definition';
import { definition as fraction } from '../src/calculators/fraction-arith/definition';
import { definition as factorial } from '../src/calculators/factorial/definition';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { getMathWave5MethodSources } from '../src/data/mathWave5MethodSources';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';

// Integration gate: root runs after registering full-copy precedence, sources
// and generated locale errors. This verifies effective publication, not prose length.
describe('math8 effective publication at all40 existing routes', () => {
  for (const tool of [power,quadratic,linear,system,modulo,gcd,fraction,factorial])
    for (const locale of ['ru','en','uk','de','es'] as const) it(`${tool.id}/${locale}`, () => {
      const page = getCalculatorById(tool.id,locale)!;
      const copy = locale === 'ru' ? tool.presentation : tool.copy?.[locale];
      expect(isCompleteCalculatorCopy(copy)).toBe(true);
      if (!isCompleteCalculatorCopy(copy)) throw new Error('incomplete owned copy');
      expect(page.slug).toBe(copy.slug); expect(page.seoTitle).toBe(copy.seoTitle); expect(page.seoDescription).toBe(copy.seoDescription);
      expect(page.longDescription).toBe(copy.longDescription); expect(page.howToUse).toEqual(copy.howToUse);
      expect(page.disclaimer).toBe(copy.disclaimer); expect(page.seoContent?.intro).toBe(copy.longDescription);
      expect(page.seoContent?.howItWorks).toBe(copy.howItWorks); expect(page.seoContent?.example).toBe(copy.example);
      expect(page.seoContent?.faq).toEqual(copy.faq);
      const expected = getMathWave5MethodSources(tool.id,locale);
      for(const source of expected) expect(getCalculatorEditorial(page, locale).sources).toContainEqual(source);
      expect(page.fields.map(field=>field.name)).toEqual(tool.presentation.fields.map(field=>field.name));
    });
});
