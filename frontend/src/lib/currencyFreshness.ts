export const MAX_CURRENCY_RATE_AGE_HOURS = 96;

export function currencyRateAgeHours(sourceDate: string, now = new Date()): number {
  const sourceTime = Date.parse(sourceDate);
  const nowTime = now.getTime();
  if (!Number.isFinite(sourceTime) || !Number.isFinite(nowTime)) return Number.POSITIVE_INFINITY;
  return Math.max(0, (nowTime - sourceTime) / 3_600_000);
}

export function currencyRatesAreStale(sourceDate: string, now = new Date()): boolean {
  return currencyRateAgeHours(sourceDate, now) > MAX_CURRENCY_RATE_AGE_HOURS;
}
