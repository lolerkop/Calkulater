import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';

function numericInput(value: unknown): number {
  return typeof value === 'number' || typeof value === 'string' ? toNumber(value, NaN) : NaN;
}

// Constant positive annual flows discounted at the end of each year. The
// fractional final year linearly interpolates that year's discounted flow,
// preserving the original model; this is not a dated receipt schedule.
// Infinity means true non-recovery; NaN means a numerical range limitation.
export function discountedPaybackYears(investment: number, cashflow: number, r: number): number {
  const simple = investment / cashflow;
  if (r === 0) return simple;
  const ceiling = cashflow / r;
  if (ceiling <= investment) return Infinity;
  const logGrowth = Math.log1p(r);
  const q = simple * r;
  let threshold: number;
  if (q < 0.5) {
    // Keep simple outside the logarithm: both ratios tend to one near zero.
    // This avoids 1+r rounding to 1, and an underflowed q becoming zero years.
    const qFactor = q === 0 ? 1 : -Math.log1p(-q) / q;
    threshold = simple * qFactor * (r / logGrowth);
  } else {
    // Near the perpetual-flow boundary, 1-q can round to zero. Subtract the
    // remaining cash-flow ceiling before taking logarithms instead.
    const logRemaining = Number.isFinite(ceiling)
      ? Math.log(ceiling - investment) - Math.log(ceiling)
      : Math.log((cashflow - investment * r) / cashflow);
    threshold = -logRemaining / logGrowth;
  }
  if (!(threshold > 0) || !Number.isFinite(threshold)) return NaN;
  if (threshold <= 1) return simple * (1 + r);
  const year = Math.ceil(threshold);
  if (!Number.isSafeInteger(year)) return NaN;
  // Equivalent to residual investment / discountedFlow(year), avoiding the
  // cancellation of two nearly equal accumulated monetary amounts.
  const gap = year - threshold;
  const exponent = gap * logGrowth;
  // A subnormal rate can make gap*logGrowth underflow although gap itself
  // is representable. expm1(x)/x tends to one, so retain that factor.
  const correction = exponent === 0 ? gap * (logGrowth / r) : Math.expm1(exponent) / r;
  return year - correction;
}

function measure(value: number): string {
  return value !== 0 && (Math.abs(value) < 1e-7 || Math.abs(value) >= 1e15)
    ? formatQuantity(value, fmtNumber) : formatMeasure(value, fmtNumber);
}

export const compute: CalcFunction = (inputs) => {
  const investment = numericInput(inputs.investment);
  const cashflow = numericInput(inputs.cashflow);
  const rate = numericInput(inputs.rate);
  const fail = (message: string) => ({
    primary: { label: 'Простой срок окупаемости', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (![investment, cashflow, rate].every(Number.isFinite)) return fail('Введите конечные числовые значения.');
  if (!(investment > 0)) return fail('Вложение должно быть больше нуля');
  if (!(cashflow > 0)) return fail('Годовой денежный поток должен быть больше нуля');
  if (rate < 0) return fail('Ставка дисконтирования не может быть отрицательной');
  const simple = investment / cashflow;
  const r = rate / 100;
  if (!(simple > 0) || !Number.isFinite(simple) || (rate > 0 && r === 0)) return fail('Результат вне допустимого диапазона');
  const discounted = discountedPaybackYears(investment, cashflow, r);
  if (discounted === Infinity) return fail('При такой ставке дисконтированные потоки не покроют вложение никогда');
  if (!(discounted > 0) || !Number.isFinite(discounted) || !Number.isFinite(simple * 12)) return fail('Результат вне допустимого диапазона');
  return {
    primary: { label: 'Простой срок окупаемости', value: `${measure(simple)} лет` },
    secondary: [
      { label: 'В месяцах', value: `${measure(simple * 12)} мес` },
      { label: 'Дисконтированный срок', value: `${measure(discounted)} лет` },
      { label: 'Годовой поток', value: `${measure(cashflow)} ₽` },
      { label: 'Возврат за простой срок', value: `${measure(investment)} ₽` },
    ],
  };
};
