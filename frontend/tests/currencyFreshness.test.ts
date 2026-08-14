import { describe, expect, it } from 'vitest';
import {
  MAX_CURRENCY_SOURCE_CHECK_AGE_HOURS,
  assessCurrencySourceFreshness,
  currencySourceCheckAgeHours,
} from '../src/lib/currencyFreshness';

function assess({
  effectiveDate = '2026-08-15',
  lastSuccessfulCheckAt = '2026-08-15T12:00:00.000Z',
  lastSuccessfulEffectiveDate = effectiveDate,
  now = new Date('2026-08-16T12:00:00.000Z'),
}: {
  effectiveDate?: string;
  lastSuccessfulCheckAt?: string;
  lastSuccessfulEffectiveDate?: string;
  now?: Date;
} = {}) {
  return assessCurrencySourceFreshness({
    effectiveDate,
    lastSuccessfulCheckAt,
    lastSuccessfulEffectiveDate,
    now,
  });
}

describe('currency source freshness', () => {
  it('measures age from the successful source check', () => {
    expect(currencySourceCheckAgeHours(
      '2026-08-15T12:00:00.000Z',
      new Date('2026-08-17T12:00:00.000Z'),
    )).toBe(48);
  });

  it('accepts an old effective date when the official source check is fresh', () => {
    const result = assess({
      effectiveDate: '2024-12-29',
      lastSuccessfulEffectiveDate: '2024-12-29',
      lastSuccessfulCheckAt: '2025-01-09T05:17:00.000Z',
      now: new Date('2025-01-09T12:00:00.000Z'),
    });

    expect(result).toEqual({ fresh: true, reason: 'fresh', ageHours: 6.716666666666667 });
  });

  it('rejects a successful source check older than 96 hours', () => {
    const staleCheck = new Date(
      Date.parse('2026-08-16T12:00:00.000Z') -
      (MAX_CURRENCY_SOURCE_CHECK_AGE_HOURS + 1) * 3_600_000,
    ).toISOString();

    expect(assess({ lastSuccessfulCheckAt: staleCheck })).toMatchObject({
      fresh: false,
      reason: 'stale-successful-check',
      ageHours: 97,
    });
  });

  it('keeps the long 29 December to 10 January holiday period fresh after daily checks', () => {
    for (const day of [3, 4, 5, 6, 7, 8, 9]) {
      const now = new Date(`2025-01-${String(day).padStart(2, '0')}T12:00:00.000Z`);
      const checkedAt = new Date(now.getTime() - 6 * 3_600_000).toISOString();

      expect(assess({
        effectiveDate: '2024-12-29',
        lastSuccessfulEffectiveDate: '2024-12-29',
        lastSuccessfulCheckAt: checkedAt,
        now,
      })).toMatchObject({ fresh: true, reason: 'fresh' });
    }
  });

  it('rejects a missing successful-check timestamp', () => {
    expect(assess({ lastSuccessfulCheckAt: '' })).toMatchObject({
      fresh: false,
      reason: 'missing-successful-check',
    });
  });

  it.each([
    ['invalid', 'invalid-successful-check'],
    ['2026-08-15', 'invalid-successful-check'],
    ['2026-08-17T12:00:00.000Z', 'future-successful-check'],
  ] as const)('rejects successful-check timestamp %s', (lastSuccessfulCheckAt, reason) => {
    expect(assess({ lastSuccessfulCheckAt })).toMatchObject({ fresh: false, reason });
  });

  it('rejects a success status associated with another rates effective date', () => {
    expect(assess({
      effectiveDate: '2026-08-15',
      lastSuccessfulEffectiveDate: '2026-08-14',
    })).toMatchObject({
      fresh: false,
      reason: 'effective-date-mismatch',
    });
  });

  it('rejects an invalid rates effective date', () => {
    expect(assess({
      effectiveDate: '2026-02-31',
      lastSuccessfulEffectiveDate: '2026-02-31',
    })).toMatchObject({
      fresh: false,
      reason: 'invalid-effective-date',
    });
  });
});
