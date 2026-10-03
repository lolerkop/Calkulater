import { fmtNumber, parseLocalizedNumber } from '../format';
import { formatQuantity } from './measurement';

// Only active fields are read. Missing, blank, boolean and non-finite values are errors.
export const read = (value: unknown): number => {
  if (typeof value === 'number') return Number.isFinite(value) ? value : NaN;
  if (typeof value !== 'string') return NaN;
  const text = value.trim();
  if (/^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)[eE][+-]?\d+$/.test(text)) {
    const number = Number(text.replace(',', '.'));
    return Number.isFinite(number) && (number !== 0 || !/[1-9]/.test(text.split(/[eE]/)[0])) ? number : NaN;
  }
  const number = parseLocalizedNumber(text);
  return number !== null && (number !== 0 || !/[1-9]/.test(text)) ? number : NaN;
};
export const qty = (value: number): string => formatQuantity(value, fmtNumber);
export const RANGE = 'Результат выходит за числовой диапазон; проверьте масштаб исходных величин';
export const INPUT = 'Введите конечные числа во все активные поля';
export const MODE = 'Выберите поддерживаемый режим расчёта';
