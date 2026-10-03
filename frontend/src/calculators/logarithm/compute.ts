import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Логарифм: показатель степени, в которую нужно возвести основание.
//
// Все три режима — одна формула log_b(x) = ln x / ln b; десятичный и
// натуральный отличаются лишь фиксированным основанием, поэтому отдельного
// кода не требуют. Область определения проверяется до вычисления: JavaScript
// вернул бы −Infinity для нуля и NaN для отрицательного, и такое значение
// попало бы в результат под видом ответа.
// Деление двух натуральных логарифмов почти никогда не даёт точного целого:
// ln1000 / ln10 равно 2,9999999999999996. Двенадцать значащих разрядов
// отбрасывают этот хвост, не трогая настоящие дробные значения, и только
// после этого решается, целое перед нами или нет.
const tidy = (value: number) => Number(value.toPrecision(12));
const show = (value: number) => {
  const clean = tidy(value);
  // A positive input must not appear as zero, or a valid near-one base as one.
  // Scientific notation also keeps extreme but finite operands readable.
  if (clean !== 0 && (Math.abs(clean) < 1e-6 || Math.abs(clean) >= 1e21)) {
    return clean.toExponential(6).replace('.', ',');
  }
  if (value !== 1 && clean === 1) return value.toPrecision(17).replace('.', ',');
  if (clean !== 1 && Number(clean.toFixed(6)) === 1) return clean.toPrecision(12).replace('.', ',');
  return Number.isInteger(clean) ? String(clean) : fmtNumber(clean, 6);
};

// Required fields reject coercions; a blank optional amount means zero.
function numericInput(value: unknown, optional = false): number {
  if (optional && (value === undefined || (typeof value === 'string' && value.trim() === ''))) return 0;
  if (typeof value !== 'number' && typeof value !== 'string') return NaN;
  return toNumber(value, NaN);
}

export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'log10' : inputs.mode;
  const value = numericInput(inputs.value);
  const base = mode === 'custom' ? numericInput(inputs.base) : mode === 'ln' ? Math.E : 10;

  const fail = (message: string) => ({
    primary: { label: 'Логарифм', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (typeof mode !== 'string' || !['log10', 'ln', 'custom'].includes(mode)) return fail('Выберите допустимый режим расчёта.');
  if (![value, base].every(Number.isFinite)) return fail('Введите конечные числовые значения.');
  if (!(value > 0)) return fail('Логарифм определён только для положительных чисел');
  if (!(base > 0)) return fail('Основание должно быть больше нуля');
  if (base === 1) return fail('Основание не может быть единицей');

  const result = tidy(Math.log(value) / Math.log(base));
  const check = Math.pow(base, result);
  if (![result, check].every(Number.isFinite) || check <= 0) return fail('Результат выходит за пределы числовой точности.');
  const baseName = mode === 'ln' ? 'e' : show(base);

  return {
    primary: { label: 'Логарифм', value: show(result) },
    secondary: [
      { label: 'Запись', value: `log${baseName === 'e' ? '' : ''}(${show(value)}) по основанию ${baseName} = ${show(result)}` },
      { label: 'Проверка возведением', value: `${baseName} в степени ${show(result)} = ${show(check)}` },
      { label: 'Натуральный логарифм', value: show(Math.log(value)) },
    ],
  };
};
