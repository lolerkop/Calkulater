import { describe, expect, it } from 'vitest';
import { runtimeFor, v2Runtimes, legacyRuntimes } from '../src/calculators/runtime.generated';
import { selectRuntimeLocalization } from '../src/lib/platform/runtime';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
const ids = [...Object.keys(v2Runtimes), ...Object.keys(legacyRuntimes)];
const locales = ['ru','en','uk','de','es'] as const;
describe('active page language serialization', () => {
  it('covers all 376 separately executable calculators', () => expect(new Set(ids).size).toBe(376));
  for (const id of ids) for (const locale of locales) it(`${id}: ${locale} preserves complete phrases without other languages`, () => {
    const runtime = runtimeFor(id);
    const before = JSON.stringify(runtime.localization);
    const actual = selectRuntimeLocalization(runtime, locale);
    const expected = locale === 'ru' || !runtime.localization?.[locale as 'en'] ? {} : { [locale]: runtime.localization[locale as 'en'] };
    expect(actual).toEqual(expected);
    const serialized = JSON.parse(JSON.stringify(actual));
    expect(serialized).toEqual(expected);
    expect(JSON.stringify(runtime.localization)).toBe(before);
    for (const [key, value] of Object.entries(runtime.localization?.[locale as 'en']?.values ?? {})) {
      const raw = { primary: { label: key, value: key }, secondary: [{label:key,value:key}] };
      expect(localizeResult(raw,locale,id,{...runtime,localization:serialized})).toEqual(localizeResult(raw,locale,id,runtime));
    }
  });
  it('does not expose foreign phrases for an unknown language', () => expect(selectRuntimeLocalization(runtimeFor(ids[0]),'xx')).toEqual({}));
});
