import { describe, expect, it } from 'vitest';
import { isValidIsoDate, parseIsoDate } from '../src/lib/date';

describe('ISO date parser', () => {
  it('parses valid leap-day dates', () => {
    const date = parseIsoDate('2024-02-29');
    expect(date?.getFullYear()).toBe(2024);
    expect(date?.getMonth()).toBe(1);
    expect(date?.getDate()).toBe(29);
  });

  it.each(['', '2026-02-29', '2026-02-31', '2026-13-01', '01.02.2026'])('rejects %s', (value) => {
    expect(parseIsoDate(value)).toBeNull();
    expect(isValidIsoDate(value)).toBe(false);
  });
});
