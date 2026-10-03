import { describe, expect, it } from 'vitest';
import { nbuRequestUrl } from '../scripts/update-currency-rates.mjs';

describe('NBU effective date selection', () => {
  it('requests the current Kyiv date even after a next-day rate may be announced', () => {
    expect(new URL(nbuRequestUrl(new Date('2026-10-01T14:00:00Z'))).searchParams.get('date')).toBe('20261001');
  });
  it('uses the bank calendar date rather than the execution hosts UTC day', () => {
    expect(new URL(nbuRequestUrl(new Date('2026-10-01T22:00:00Z'))).searchParams.get('date')).toBe('20261002');
    expect(new URL(nbuRequestUrl(new Date('2026-01-01T22:30:00Z'))).searchParams.get('date')).toBe('20260102');
  });
});
