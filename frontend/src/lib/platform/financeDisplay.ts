import { fmtNumber } from '../format';
import { formatQuantity } from './measurement';
import { text } from './scalarInputDisplay';

// Three actual consumers previously had the identical whole-money formatter:
// DTI, savings-rate and budget-50-30-20. Their formulas stay in their own files.
// The other five tools use ordinary two-decimal money. Preserve inherited
// nonzero rounded displays; a nonzero value that would display as zero instead
// uses the existing finer/scientific quantity format. No parsing lives here.
export function displayNumber(value: number, digits = 2): string {
  return Number.isFinite(value) && value !== 0 && Number(value.toFixed(digits)) === 0
    ? formatQuantity(value, fmtNumber) : text(value, digits);
}
export const displayMoney = (value: number): string => `${displayNumber(value)} ₽`;
export const displayWholeMoney = (value: number): string => `${displayNumber(value, value !== 0 && Math.abs(value) < 1 ? 2 : 0)} ₽`;
