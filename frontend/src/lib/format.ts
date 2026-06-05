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

export function toNumber(v: string | number | boolean | undefined, fallback = 0): number {
  if (typeof v === 'number') return v;
  if (typeof v === 'boolean') return v ? 1 : 0;
  if (!v) return fallback;
  const n = parseFloat(String(v).replace(',', '.'));
  return isFinite(n) ? n : fallback;
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
