import type { CalcFunction } from '../../lib/types';
import { INPUT, integer, MODE, mode, read } from '../stats-descriptive/statisticsNumeric';

// Quantize the shortest decimal representation of the normalized binary64
// input. Decimal ties are away from zero, unlike Math.round's negative ties.
function decimal(value: number): { coefficient: bigint; places: number } {
  const [mantissa, exponent = '0'] = value.toString().split('e');
  const parts = mantissa.split('.'), places = (parts[1]?.length ?? 0) - Number(exponent);
  let coefficient = BigInt(parts.join(''));
  if (places < 0) coefficient *= 10n ** BigInt(-places);
  return { coefficient, places: Math.max(0, places) };
}
function text(coefficient: bigint, places: number): string {
  if (!coefficient) return '0';
  const negative = coefficient < 0n, digits = (negative ? -coefficient : coefficient).toString().padStart(places + 1, '0');
  const whole = (places ? digits.slice(0, -places) : digits).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');
  const fraction = places ? digits.slice(-places).replace(/0+$/, '') : '';
  return `${negative ? '-' : ''}${whole}${fraction ? ',' + fraction : ''}`;
}
export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Округлённое значение', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const value = read(inputs.value), digits = integer(inputs.digits), selected = mode(inputs.mode, 'half', ['half', 'down', 'up']);
  if (!selected) return fail(MODE);
  if (!Number.isFinite(value)) return fail(INPUT);
  if (!Number.isFinite(digits)) return fail('Число знаков должно быть целым');
  if (digits < 0) return fail('Число знаков не может быть отрицательным');
  if (digits > 10) return fail('Больше десяти знаков не поддерживается');
  const original = decimal(value);
  let rounded: bigint;
  if (original.places <= digits) rounded = original.coefficient * 10n ** BigInt(digits - original.places);
  else {
    const step = 10n ** BigInt(original.places - digits), remainder = original.coefficient % step;
    rounded = original.coefficient / step;
    if (selected === 'down' && remainder < 0n) rounded--;
    else if (selected === 'up' && remainder > 0n) rounded++;
    else if (selected === 'half' && (remainder < 0n ? -remainder : remainder) * 2n >= step) rounded += original.coefficient < 0n ? -1n : 1n;
  }
  const places = Math.max(digits, original.places);
  const difference = rounded * 10n ** BigInt(places - digits) - original.coefficient * 10n ** BigInt(places - original.places);
  return { primary: { label: 'Округлённое значение', value: text(rounded, digits) }, secondary: [
    { label: 'Исходное значение', value: text(original.coefficient, original.places) },
    { label: 'Разница', value: text(difference, places) }, { label: 'Знаков', value: String(digits) },
  ] };
};
