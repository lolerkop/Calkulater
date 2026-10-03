import { describe, expect, it } from 'vitest';
import { calcBodyFat } from '../src/lib/calculators/bodyFat';
import { resultPhrases, resultLabelPhrases } from '../src/lib/resultPhrases';
import { getCalculatorById } from '../src/lib/i18n';
import { runtimeFor } from '../src/calculators/runtime.generated';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';

describe('historical Navy measurement labels follow the chosen equation', () => {
  it('names the male navel measurement as abdomen, with unchanged independent example', () => {
    const result = calcBodyFat({ sex: 'male', height: 180, neck: 38, waist: 90 });
    expect(result.primary.value).toBe('19,9%');
    expect(result.secondary.find((row) => row.label === 'Обхват живота')?.value).toBe('90,0 см');
    expect(result.secondary.find((row) => row.label === 'Живот минус шея')?.value).toBe('52,0 см');
    expect(result.secondary.map((row) => row.label)).not.toContain('Обхват талии');
  });
  it('keeps the female natural waist and hip, with unchanged independent example', () => {
    const result = calcBodyFat({ sex: 'female', height: 165, neck: 32, waist: 72, hip: 96 });
    expect(result.primary.value).toBe('26,7%');
    expect(result.secondary.find((row) => row.label === 'Обхват талии')?.value).toBe('72,0 см');
    expect(result.secondary.find((row) => row.label === 'Обхват бёдер')?.value).toBe('96,0 см');
    expect(result.secondary.map((row) => row.label)).not.toContain('Обхват живота');
  });
  it('uses the same male measurement name in input and difference errors', () => {
    expect(calcBodyFat({ sex: 'male', height: 180, neck: 38, waist: 0 }).secondary[0].value).toBe('Введите обхват живота больше нуля');
    expect(calcBodyFat({ sex: 'male', height: 180, neck: 38, waist: 38 }).secondary[0].value).toBe('Обхват живота должен быть больше обхвата шеи');
  });
  for (const [locale, abdomen, difference] of [
    ['en', 'Abdomen circumference', 'Abdomen minus neck'],
    ['uk', 'Обхват живота', 'Живіт мінус шия'],
    ['de', 'Bauchumfang', 'Bauch minus Hals'],
    ['es', 'Perímetro abdominal', 'Abdomen menos cuello'],
  ] as const) {
    it(`${locale}: supplies measurement-specific native result and error phrases`, () => {
      expect(resultLabelPhrases['Обхват живота'][locale]).toBe(abdomen);
      expect(resultLabelPhrases['Живот минус шея'][locale]).toBe(difference);
      expect(resultPhrases['Введите обхват живота больше нуля'][locale]).toBeTruthy();
      expect(resultPhrases['Обхват живота должен быть больше обхвата шеи'][locale]).toBeTruthy();
    });
  }
});

describe('the published body-fat runtime supplies the measurement-specific vocabulary', () => {
  for (const [locale, abdomen, difference, expected] of [
    ['ru', 'Обхват живота', 'Живот минус шея', '19,9%'],
    ['en', 'Abdomen circumference', 'Abdomen minus neck', '19.9%'],
    ['uk', 'Обхват живота', 'Живіт мінус шия', '19,9%'],
    ['de', 'Bauchumfang', 'Bauch minus Hals', '19,9%'],
    ['es', 'Perímetro abdominal', 'Abdomen menos cuello', '19,9%'],
  ] as const) {
    it(`${locale}: labels the male navel measurement and preserves the independently verified example`, () => {
      const page = getCalculatorById('body-fat-calculator', locale)!;
      const runtime = runtimeFor(page.id);
      const result = localizeResult(runtime.compute({ sex: 'male', height: 180, neck: 38, waist: 90 }), locale, page.id, runtime);
      expect(result.primary.value).toBe(expected);
      expect(result.secondary.find((row) => row.label === abdomen)?.value).toMatch(/^90[.,]0 /);
      expect(result.secondary.find((row) => row.label === difference)?.value).toMatch(/^52[.,]0 /);
    });
    it(`${locale}: publishes a native male measurement error through the actual runtime`, () => {
      const page = getCalculatorById('body-fat-calculator', locale)!;
      const runtime = runtimeFor(page.id);
      const result = localizeResult(runtime.compute({ sex: 'male', height: 180, neck: 38, waist: 0 }), locale, page.id, runtime);
      expect(result.primary.value).toBe('—');
      expect(result.secondary[0].value).toBe(locale === 'ru' ? 'Введите обхват живота больше нуля' : resultPhrases['Введите обхват живота больше нуля'][locale]);
    });
  }
});
