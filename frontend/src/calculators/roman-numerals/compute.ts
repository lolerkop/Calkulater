import type { CalcFunction } from '../../lib/types';
import { integer, MODE, mode as readMode } from '../stats-descriptive/statisticsNumeric';

// Chosen modern canonical notation, I..MMMCMXCIX. Historical additive
// notation and overlines are outside this product's contract.
const PAIRS: [number, string][] = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
];
const VALUES: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

function toRoman(value: number): string {
  let rest = value;
  let out = '';
  for (const [amount, symbol] of PAIRS) {
    while (rest >= amount) {
      out += symbol;
      rest -= amount;
    }
  }
  return out;
}

function toArabic(text: string): number | null {
  const normalized = text.trim().toUpperCase();
  if (normalized.length > 15 || !/^[IVXLCDM]+$/.test(normalized)) return null;
  let total = 0;
  for (let i = 0; i < normalized.length; i += 1) {
    const current = VALUES[normalized[i]];
    const next = VALUES[normalized[i + 1]] ?? 0;
    total += current < next ? -current : current;
  }
  // Единственность записи проверяется обратным переводом: каноническая запись
  // числа совпадает с введённой, любая другая — нет.
  return total >= 1 && total <= 3999 && toRoman(total) === normalized ? total : null;
}

export const compute: CalcFunction = (inputs) => {
  const mode = readMode(inputs.mode, 'toRoman', ['toRoman', 'toArabic']);
  if (!mode) return { primary: { label: 'Римское число', value: '—' }, secondary: [{ label: 'Проверьте данные', value: MODE, accent: 'red' as const }] };

  if (mode === 'toArabic') {
    const parsed = typeof inputs.roman === 'string' ? toArabic(inputs.roman) : null;
    if (parsed === null) {
      return {
        primary: { label: 'Арабское число', value: '—' },
        secondary: [{ label: 'Проверьте данные', value: 'Введите каноническую римскую запись от I до MMMCMXCIX', accent: 'red' as const }],
      };
    }
    return {
      primary: { label: 'Арабское число', value: String(parsed) },
      secondary: [
        { label: 'Римская запись', value: toRoman(parsed) },
        { label: 'Символов в записи', value: String(toRoman(parsed).length) },
      ],
    };
  }

  const value = integer(inputs.arabic);
  if (!Number.isInteger(value) || value < 1 || value > 3999) {
    return {
      primary: { label: 'Римское число', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Римские числа записывают от 1 до 3999', accent: 'red' as const }],
    };
  }
  const roman = toRoman(value);
  return {
    primary: { label: 'Римское число', value: roman },
    secondary: [
      { label: 'Арабское число', value: String(value) },
      { label: 'Символов в записи', value: String(roman.length) },
    ],
  };
};
