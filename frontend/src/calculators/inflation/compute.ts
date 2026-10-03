import type { CalcFunction } from '../../lib/types';
import { displayNumber as text, displayMoney as money } from '../../lib/platform/financeDisplay';
import { number } from '../../lib/platform/scalarInputDisplay';
import { divideRate } from '../../lib/platform/financeMath';

// Constant annual price growth; purchasing power is the reciprocal price factor.
export const compute: CalcFunction = (inputs) => {
  const amount = number(inputs.amount);
  const ratePct = number(inputs.ratePct);
  const years = number(inputs.years);
  const fail = (message: string) => ({
    primary: { label: 'Покупательная способность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (amount === null || ratePct === null || years === null) return fail('Введите корректные числовые данные');
  if (!(amount > 0)) return fail('Сумма должна быть больше нуля');
  if (!(ratePct > -100)) return fail('Инфляция не может достигать минус ста процентов');
  if (!(years > 0)) return fail('Срок должен быть больше нуля');
  const rateMagnitude = divideRate(Math.abs(ratePct), 100);
  if (rateMagnitude === null) return fail('Результат вне допустимого диапазона');
  const rate = Math.sign(ratePct) * rateMagnitude;
  // Close to−100%, adding1 after dividing the negative percent can erase
  // significant digits. The percent-space difference100+p is exact here.
  const logFactor = ratePct < -50 ? Math.log((100 + ratePct) / 100) : Math.log1p(rate);
  const exponent = years * logFactor;
  const factor = Math.exp(exponent);
  const real = amount / factor;
  const future = amount * factor;
  // expm1 preserves a small loss even when the displayed balances round alike.
  const lossFraction = -Math.expm1(-exponent);
  const lost = amount * lossFraction;
  const share = lossFraction * 100;
  if (![exponent, factor, real, future, lost, share].every(Number.isFinite)
    || factor <= 0 || real <= 0 || future <= 0
    || (ratePct !== 0 && (exponent === 0 || lost === 0 || share === 0))) return fail('Результат вне допустимого диапазона');
  return {
    primary: { label: 'Покупательная способность', value: money(real) },
    secondary: [
      { label: 'Столько же в будущих деньгах', value: money(future) },
      { label: 'Потеряно покупательной способности', value: money(lost) },
      { label: 'Доля потери', value: `${text(share)}%` },
      { label: 'Множитель цен', value: text(factor, 4) },
    ],
  };
};
