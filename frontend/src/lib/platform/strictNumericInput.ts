import { parseLocalizedNumber } from '../format';

/** Keep the UI decimal grammar; reject coercion and nonzero decimal underflow. */
export function finiteInput(raw: unknown): number | null {
  if (typeof raw !== 'number' && typeof raw !== 'string') return null;
  const value = parseLocalizedNumber(raw, 'ru');
  if (value === 0 && typeof raw === 'string' && /[1-9]/.test(raw)) return null;
  return value;
}

/** A decimal fraction must not become an integer merely through binary rounding. */
export function integerInput(raw: unknown): number | null {
  const value = finiteInput(raw);
  if (value === null || !Number.isSafeInteger(value)) return null;
  if (typeof raw === 'string') {
    const text = raw.replace(/\s/g, '');
    const dots = (text.match(/\./g) ?? []).length;
    const commas = (text.match(/,/g) ?? []).length;
    const decimal = dots && commas ? Math.max(text.lastIndexOf('.'), text.lastIndexOf(','))
      : dots + commas === 1 ? Math.max(text.lastIndexOf('.'), text.lastIndexOf(',')) : -1;
    if (decimal >= 0 && /[1-9]/.test(text.slice(decimal + 1))) return null;
  }
  return value;
}
