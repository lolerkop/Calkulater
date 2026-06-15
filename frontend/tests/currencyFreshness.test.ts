import { describe, expect, it } from 'vitest';
import {
  MAX_CURRENCY_RATE_AGE_HOURS,
  currencyRateAgeHours,
  currencyRatesAreStale,
} from '../src/lib/currencyFreshness';

describe('currency freshness', () => {
  const now = new Date('2026-06-15T12:00:00Z');

  it('keeps recent source data usable', () => {
    expect(currencyRateAgeHours('2026-06-13T12:00:00Z', now)).toBe(48);
    expect(currencyRatesAreStale('2026-06-13T12:00:00Z', now)).toBe(false);
  });

  it('marks data beyond the configured limit as stale', () => {
    const staleDate = new Date(now.getTime() - (MAX_CURRENCY_RATE_AGE_HOURS + 1) * 3_600_000).toISOString();
    expect(currencyRatesAreStale(staleDate, now)).toBe(true);
  });

  it('rejects invalid source dates', () => {
    expect(currencyRateAgeHours('invalid', now)).toBe(Number.POSITIVE_INFINITY);
    expect(currencyRatesAreStale('invalid', now)).toBe(true);
  });
});
