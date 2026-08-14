export const MAX_CURRENCY_RATE_AGE_HOURS = 96;
export const MAX_CURRENCY_SOURCE_CHECK_AGE_HOURS = 96;

export type CurrencySourceFreshnessReason =
  | 'fresh'
  | 'invalid-effective-date'
  | 'effective-date-mismatch'
  | 'missing-successful-check'
  | 'invalid-successful-check'
  | 'future-successful-check'
  | 'stale-successful-check';

export interface CurrencySourceFreshnessAssessment {
  fresh: boolean;
  reason: CurrencySourceFreshnessReason;
  ageHours: number;
}

const ISO_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const ISO_TIMESTAMP_PATTERN = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

function isValidIsoDate(value: string): boolean {
  const match = ISO_DATE_PATTERN.exec(value);
  if (!match) return false;

  const [, yearText, monthText, dayText] = match;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const parsed = new Date(0);
  parsed.setUTCHours(0, 0, 0, 0);
  parsed.setUTCFullYear(year, month - 1, day);
  return parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day;
}

export function currencySourceCheckAgeHours(checkedAt: string, now = new Date()): number {
  if (!ISO_TIMESTAMP_PATTERN.test(checkedAt)) return Number.NaN;
  const checkedTime = Date.parse(checkedAt);
  const nowTime = now.getTime();
  if (!Number.isFinite(checkedTime) || !Number.isFinite(nowTime)) return Number.NaN;
  if (new Date(checkedTime).toISOString() !== checkedAt) return Number.NaN;
  return (nowTime - checkedTime) / 3_600_000;
}

export function assessCurrencySourceFreshness({
  effectiveDate,
  lastSuccessfulCheckAt,
  lastSuccessfulEffectiveDate,
  now = new Date(),
}: {
  effectiveDate: string;
  lastSuccessfulCheckAt: string;
  lastSuccessfulEffectiveDate: string;
  now?: Date;
}): CurrencySourceFreshnessAssessment {
  if (!isValidIsoDate(effectiveDate)) {
    return { fresh: false, reason: 'invalid-effective-date', ageHours: Number.NaN };
  }
  if (lastSuccessfulEffectiveDate !== effectiveDate) {
    return { fresh: false, reason: 'effective-date-mismatch', ageHours: Number.NaN };
  }
  if (!lastSuccessfulCheckAt) {
    return { fresh: false, reason: 'missing-successful-check', ageHours: Number.NaN };
  }

  const ageHours = currencySourceCheckAgeHours(lastSuccessfulCheckAt, now);
  if (!Number.isFinite(ageHours)) {
    return { fresh: false, reason: 'invalid-successful-check', ageHours };
  }
  if (ageHours < 0) {
    return { fresh: false, reason: 'future-successful-check', ageHours };
  }
  if (ageHours > MAX_CURRENCY_SOURCE_CHECK_AGE_HOURS) {
    return { fresh: false, reason: 'stale-successful-check', ageHours };
  }
  return { fresh: true, reason: 'fresh', ageHours };
}

export function currencyRateAgeHours(sourceDate: string, now = new Date()): number {
  const sourceTime = Date.parse(sourceDate);
  const nowTime = now.getTime();
  if (!Number.isFinite(sourceTime) || !Number.isFinite(nowTime)) return Number.POSITIVE_INFINITY;
  return Math.max(0, (nowTime - sourceTime) / 3_600_000);
}

export function currencyRatesAreStale(sourceDate: string, now = new Date()): boolean {
  return currencyRateAgeHours(sourceDate, now) > MAX_CURRENCY_RATE_AGE_HOURS;
}
