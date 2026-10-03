import { describe, expect, it } from 'vitest';
import { definition as concentration } from '../src/calculators/solution-concentration/definition';
import { definition as molarity } from '../src/calculators/molarity/definition';
import { definition as moles } from '../src/calculators/moles/definition';
import { definition as ph } from '../src/calculators/ph-poh/definition';
import { definition as radiation } from '../src/calculators/convert-radiation/definition';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';
import { getCalculatorById } from '../src/lib/i18n';

// This checks the public-copy boundary: central historical translations must
// not silently replace the methods, caveats or concentration bases owned here.
// Localized result-error rendering still requires the integration generation.
describe('published chemistry wave4 copy', () => {
  for (const tool of [concentration, molarity, moles, ph, radiation]) {
    it.each(['ru', 'en', 'uk', 'de', 'es'] as const)(`${tool.id}/%s preserves the reviewed public body`, locale => {
      const own = locale === 'ru' ? tool.presentation : tool.copy![locale];
      if (!isCompleteCalculatorCopy(own)) throw new Error('Reviewed full copy required');
      const page = getCalculatorById(tool.id, locale)!;
      expect(page).toBeDefined();
      expect(page.fullPath).toMatch(new RegExp(`^/${locale}/`));
      expect(page.slug).toBe(own.slug);
      expect(page.seoContent?.intro).toBe(own.longDescription);
      expect(page.seoContent?.howItWorks).toBe(own.howItWorks);
      expect(page.seoContent?.example).toBe(own.example);
      expect(page.seoContent?.tips).toBe(own.howToUse.join(' '));
      expect(page.seoContent?.faq).toEqual(own.faq);
      expect(page.disclaimer).toBe(own.disclaimer);
    });
  }
});
