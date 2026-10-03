/** Proleptic Gregorian date-only helpers; UTC avoids local DST/date-line omissions. */
export const CALENDAR_DAY_MS = 86_400_000;

export function calendarDateUtc(year: number, monthIndex: number, day: number): Date {
  const date = new Date(0);
  date.setUTCFullYear(year, monthIndex, day);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

export function parseCalendarDateUtc(value: unknown): Date | null {
  if (typeof value !== 'string') return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]) - 1;
  const day = Number(match[3]);
  if (year < 1 || year > 9999) return null;
  const date = calendarDateUtc(year, month, day);
  return date.getUTCFullYear() === year && date.getUTCMonth() === month && date.getUTCDate() === day ? date : null;
}

/** Preserve this existing API's local Date getters for its external consumers. */
export function parseIsoDate(value: string): Date | null {
  const utc = parseCalendarDateUtc(value);
  if (!utc) return null;
  const date = new Date(0);
  date.setFullYear(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate());
  date.setHours(0, 0, 0, 0);
  return date.getFullYear() === utc.getUTCFullYear() && date.getMonth() === utc.getUTCMonth() && date.getDate() === utc.getUTCDate() ? date : null;
}

export function isValidIsoDate(value: string): boolean {
  return parseCalendarDateUtc(value) !== null;
}

export function calendarDayNumberUtc(date: Date): number {
  return date.getTime() / CALENDAR_DAY_MS;
}

export function formatCalendarDateUtc(date: Date): string {
  return `${String(date.getUTCFullYear()).padStart(4, '0')}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')}`;
}

export function localCalendarToUtc(date: Date): Date {
  return calendarDateUtc(date.getFullYear(), date.getMonth(), date.getDate());
}

export function utcCalendarToLocal(date: Date): Date {
  const local = new Date(0);
  local.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  local.setHours(0, 0, 0, 0);
  return local;
}

export function isSupportedCalendarDate(date: Date): boolean {
  return Number.isFinite(date.getTime()) && date.getUTCFullYear() >= 1 && date.getUTCFullYear() <= 9999;
}

export function addCalendarMonthsUtc(date: Date, totalMonths: number): Date {
  const shifted = date.getUTCFullYear() * 12 + date.getUTCMonth() + totalMonths;
  const year = Math.floor(shifted / 12);
  const month = shifted - year * 12;
  const lastDay = calendarDateUtc(year, month + 1, 0).getUTCDate();
  return calendarDateUtc(year, month, Math.min(date.getUTCDate(), lastDay));
}
