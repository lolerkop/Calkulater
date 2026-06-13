import { describe, expect, it } from 'vitest';
import { getCalculators, getCategories } from '../src/lib/i18n';

const russianMarkers = [
  'Частые вопросы',
  'Доллар США',
  'Молдавский лей',
  'Румынский лей',
  'Польский злотый',
  'Фунт стерлингов',
  'Швейцарский франк',
  'Турецкая лира',
  'официальный справочный',
  'Дата обновления',
  'Источник',
];

describe('active locale isolation', () => {
  it('does not expose Cyrillic strings in English calculator and category data', () => {
    const data = JSON.stringify({ calculators: getCalculators('en'), categories: getCategories('en') });
    const fragments = [...data.matchAll(/[^"\\]*[\u0400-\u04ff][^"\\]*/gu)].map((match) => match[0]);
    expect([...new Set(fragments)]).toEqual([]);
  });

  it('does not expose known Russian fallback strings in Ukrainian data', () => {
    const data = JSON.stringify({ calculators: getCalculators('uk'), categories: getCategories('uk') });
    for (const marker of russianMarkers) expect(data).not.toContain(marker);
  });
});
