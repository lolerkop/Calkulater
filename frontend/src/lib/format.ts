// Утилиты форматирования чисел и валют в локали ru-RU.

export function fmtNumber(n: number, fractionDigits = 2): string {
  if (!isFinite(n)) return '—';
  return new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(n);
}

export function fmtInt(n: number): string {
  if (!isFinite(n)) return '—';
  return new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(Math.round(n));
}

export function fmtMoney(n: number, currency = '₽'): string {
  return `${fmtNumber(n, 0)} ${currency}`.trim();
}

export function fmtPct(n: number, fractionDigits = 2): string {
  return `${fmtNumber(n, fractionDigits)}%`;
}

export type NumberLocale = 'ru' | 'uk' | 'en' | string;

export function parseLocalizedNumber(value: string | number, locale: NumberLocale = 'ru'): number | null {
  if (typeof value === 'number') return Number.isFinite(value) ? value : null;

  const compact = value.trim().replace(/[\s\u00a0\u202f]/g, '');
  if (!compact || !/^[+-]?[\d.,]+$/.test(compact)) return null;

  const sign = compact.startsWith('-') ? '-' : compact.startsWith('+') ? '+' : '';
  const unsigned = sign ? compact.slice(1) : compact;
  const commaCount = (unsigned.match(/,/g) ?? []).length;
  const dotCount = (unsigned.match(/\./g) ?? []).length;
  let normalized = unsigned;

  if (commaCount > 0 && dotCount > 0) {
    const decimalSeparator = unsigned.lastIndexOf(',') > unsigned.lastIndexOf('.') ? ',' : '.';
    const thousandsSeparator = decimalSeparator === ',' ? '.' : ',';
    const parts = unsigned.split(decimalSeparator);
    if (parts.length !== 2 || !parts[1] || !new RegExp(`^\\d{1,3}(\\${thousandsSeparator}\\d{3})*$`).test(parts[0])) return null;
    normalized = parts[0].split(thousandsSeparator).join('') + '.' + parts[1];
  } else if (commaCount > 0) {
    const parts = unsigned.split(',');
    const validGrouping = /^\d{1,3}(,\d{3})+$/.test(unsigned);
    if (parts.length > 2 && !validGrouping) return null;
    const looksGrouped = parts.length > 2 || (locale === 'en' && validGrouping);
    normalized = looksGrouped ? parts.join('') : unsigned.replace(',', '.');
  } else if (dotCount > 0) {
    const parts = unsigned.split('.');
    const validGrouping = /^\d{1,3}(\.\d{3})+$/.test(unsigned);
    if (parts.length > 2 && !validGrouping) return null;
    const looksGrouped = parts.length > 2 || (locale !== 'en' && validGrouping);
    normalized = looksGrouped ? parts.join('') : unsigned;
  }

  if (!/^\d+(?:\.\d+)?$/.test(normalized)) return null;
  const parsed = Number(`${sign}${normalized}`);
  return Number.isFinite(parsed) ? parsed : null;
}

export function toNumber(v: string | number | boolean | undefined, fallback = 0): number {
  if (typeof v === 'number') return v;
  if (typeof v === 'boolean') return v ? 1 : 0;
  if (!v) return fallback;
  return parseLocalizedNumber(String(v)) ?? fallback;
}

export function toStr(v: string | number | boolean | undefined, fallback = ''): string {
  if (v === undefined || v === null) return fallback;
  return String(v);
}

export function pluralRu(n: number, forms: [string, string, string]): string {
  const abs = Math.abs(n) % 100;
  const last = abs % 10;
  if (abs > 10 && abs < 20) return forms[2];
  if (last > 1 && last < 5) return forms[1];
  if (last === 1) return forms[0];
  return forms[2];
}

export function fmtDuration(totalSeconds: number): string {
  if (!isFinite(totalSeconds) || totalSeconds < 0) return '—';
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.round(totalSeconds % 60);
  const pad = (x: number) => String(x).padStart(2, '0');
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}
