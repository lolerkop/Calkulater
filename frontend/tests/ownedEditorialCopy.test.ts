import { describe, expect, it } from 'vitest';
import { v2Definitions } from '../src/calculators/manifest.generated';
import { getCalculatorById } from '../src/lib/i18n';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';
import { fieldUnitLabel } from '../src/lib/fieldUnitLabel';

describe('authored calculator translations survive publication', () => {
  it('keeps full per-calculator uk/de/es copy instead of overriding it with the central older text', () => {
    let checked = 0;
    for (const definition of v2Definitions.filter((item) => item.lifecycle === 'released')) {
      for (const locale of ['uk', 'de', 'es'] as const) {
        const copy = definition.copy?.[locale];
        if (!isCompleteCalculatorCopy(copy)) continue;
        const page = getCalculatorById(definition.id, locale);
        expect(page, locale + '/' + definition.id).toBeDefined();
        expect(page!.longDescription).toBe(copy.longDescription);
        expect(page!.seoContent!.howItWorks).toBe(copy.howItWorks);
        expect(page!.seoContent!.example).toBe(copy.example);
        expect(page!.faq).toEqual(copy.faq);
        checked++;
      }
    }
    expect(checked).toBeGreaterThan(0);
  });
  it('identifies metadata-only copy as incomplete', () => {
    const definition = v2Definitions.find((item) => item.copy?.en)!;
    expect(isCompleteCalculatorCopy({ ...definition.copy!.en!, howItWorks: '' })).toBe(false);
  });
  it('describes BMI physical units and Spanish fields in the published language', () => {
    for (const locale of ['ru', 'en', 'uk', 'de', 'es'] as const) {
      const bmi = getCalculatorById('bmi-calculator', locale)!;
      expect(fieldUnitLabel(bmi.fields.find((field) => field.name === 'height')!, locale)).toMatch(/см|cm/);
      expect(fieldUnitLabel(bmi.fields.find((field) => field.name === 'weight')!, locale)).toMatch(/кг|kg/);
    }
    expect(fieldUnitLabel({ name: 'mode', label: 'Modo', type: 'select' }, 'es')).toBe('opción de la lista');
  });
});
