import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

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
  return Number.isInteger(clean) ? String(clean) : fmtNumber(clean, 6);
};

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'log10');
  const value = toNumber(inputs.value);
  const base = mode === 'custom' ? toNumber(inputs.base) : mode === 'ln' ? Math.E : 10;

  const fail = (message: string) => ({
    primary: { label: 'Логарифм', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(value > 0)) return fail('Логарифм определён только для положительных чисел');
  if (!(base > 0)) return fail('Основание должно быть больше нуля');
  if (base === 1) return fail('Основание не может быть единицей');

  const result = tidy(Math.log(value) / Math.log(base));
  const baseName = mode === 'ln' ? 'e' : show(base);

  return {
    primary: { label: 'Логарифм', value: show(result) },
    secondary: [
      { label: 'Запись', value: `log${baseName === 'e' ? '' : ''}(${show(value)}) по основанию ${baseName} = ${show(result)}` },
      { label: 'Проверка возведением', value: `${baseName} в степени ${show(result)} = ${show(Math.pow(base, result))}` },
      { label: 'Натуральный логарифм', value: show(Math.log(value)) },
    ],
  };
};
