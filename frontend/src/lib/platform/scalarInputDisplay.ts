import { fmtNumber, isIntegralNumberText, parseLocalizedNumber } from '../format';
import { formatQuantity } from './measurement';

export const number = (value: unknown): number | null => {
  if (typeof value !== 'number' && typeof value !== 'string') return null;
  const parsed = parseLocalizedNumber(value);
  return parsed === 0 && typeof value === 'string' && /[1-9]/.test(value) ? null : parsed;
};
export const optionalNumber = (value: unknown): number | null => value === undefined || (typeof value === 'string' && value.trim() === '') ? 0 : number(value);
export const integer = (value: unknown): number | null => {
  const parsed = number(value);
  return parsed !== null && Number.isSafeInteger(parsed)
    && (typeof value === 'number' || typeof value === 'string')
    && isIntegralNumberText(value) !== false ? parsed : null;
};
export const optionalInteger = (value: unknown): number | null => value === undefined || (typeof value === 'string' && value.trim() === '') ? 0 : integer(value);
export const text = (value: number, digits = 2): string => value !== 0 && (Math.abs(value) < 1e-7 || Math.abs(value) >= 1e21) ? formatQuantity(value, fmtNumber) : fmtNumber(value, digits);
export const money = (value: number): string => `${text(value)} ₽`;
export const validOutput = (value: number, positive = false): boolean => Number.isFinite(value) && (!positive || value > 0);
