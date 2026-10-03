import type { CalcFunction } from '../../lib/types';
import { number, validOutput } from '../../lib/platform/scalarInputDisplay';
import { displayWholeMoney as fmtMoney, displayNumber } from '../../lib/platform/financeDisplay';
import { choice } from '../../lib/platform/financeWave11Input';

// C=A*p/100. Inverse modes use the same base; this is a proportional fee,
// without a minimum fee, tier, tax, or a charge added above the transaction.
export const compute: CalcFunction = (inputs) => {
  const mode = choice(inputs.mode, ['fromAmount', 'fromCommission', 'rate'], 'fromAmount');
  const a = number(inputs.a);
  const b = number(inputs.b);
  const fail = (reason: string) => ({
    primary: { label: 'Комиссия', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: reason, accent: 'red' as const }],
  });
  if (mode === null) return fail('Выберите корректный режим расчёта');
  if (a === null || b === null || a < 0 || b < 0) return fail('Введите корректные значения');
  if (mode === 'fromCommission' && b === 0) return fail('Ставка комиссии должна быть больше нуля');
  if (mode === 'rate' && a === 0) return fail('Сумма сделки должна быть больше нуля');
  const amount = mode === 'fromCommission' ? a / (b / 100) : a;
  const commission = mode === 'fromCommission' ? a : mode === 'rate' ? b : a * (b / 100);
  const rate = mode === 'rate' ? (b / a) * 100 : b;
  const payout = amount - commission;
  if (![amount, commission, rate, payout].every(value => validOutput(value))) return fail('Результат выходит за числовые пределы расчёта');
  if ((a > 0 && b > 0 && (amount === 0 || commission === 0 || rate === 0))) return fail('Результат выходит за числовые пределы расчёта');
  const rateText = `${displayNumber(rate, 2)} %`;
  return {
    primary: mode === 'rate' ? { label: 'Ставка комиссии', value: rateText }
      : mode === 'fromCommission' ? { label: 'Сумма сделки', value: fmtMoney(amount) }
        : { label: 'Комиссия', value: fmtMoney(commission) },
    secondary: [
      ...(mode === 'fromCommission' ? [] : [{ label: 'Сумма сделки', value: fmtMoney(amount) }]),
      ...(mode === 'fromAmount' ? [] : [{ label: 'Комиссия', value: fmtMoney(commission) }]),
      ...(mode === 'rate' ? [] : [{ label: 'Ставка комиссии', value: rateText }]),
      { label: 'К получению', value: fmtMoney(payout), accent: payout >= 0 ? 'green' : 'red' },
    ],
  };
};
