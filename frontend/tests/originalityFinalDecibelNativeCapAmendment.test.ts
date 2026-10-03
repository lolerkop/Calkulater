import { expect, it } from 'vitest';
import { compute } from '../src/calculators/decibel/compute';
import { localization } from '../src/calculators/decibel/localization';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';

it('decibel keeps the 10000-level cap and its native English number through actual result localization', () => {
  // Independent count/provenance: exactly10000 common-reference0dB terms add to
  // 10log10(10000)=40dB; semicolon/newline delimiters do not create extra terms.
  const allowed = Array<string>(10000).fill('0').join(';\n');
  const accepted = compute({ mode: 'sum', levels: allowed });
  expect(accepted.primary.value).toBe('40 дБ');
  expect(accepted.secondary[0].value.replace(/\s/g, '')).toBe('10000');

  const excessive = Array<string>(10001).fill('0').join(';\n');
  const rejected = compute({ mode: 'sum', levels: excessive });
  expect(rejected.primary.value).toBe('—');
  expect(rejected.secondary[0].value).toBe('Введите не более 10 000 уровней');

  // The real presentation pipeline used to reinterpret nativeEnglish10,000
  // as a Russian decimal, producing10.000. Keep the numericalcapmeaning10000.
  const presented = localizeResult(rejected, 'en', 'decibel', { compute, localization });
  expect(presented.primary.value).toBe('—');
  expect(presented.secondary[0].value).toBe('Enter at most 10000 levels');
  expect(presented.secondary[0].value).not.toMatch(/10[.,]000|NaN|Infinity|undefined/);
});
