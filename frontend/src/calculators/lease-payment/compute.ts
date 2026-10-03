import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { integer, number, optionalNumber, text } from '../../lib/platform/scalarInputDisplay';
import { divideRate } from '../../lib/platform/financeMath';
import { formatMeasure } from '../../lib/platform/measurement';

// Simplified depreciation plus an average-balance finance charge. The entered
// annual calculation rate defines moneyFactor=rate/2400 for THIS model; it is
// neither a universal leasing convention nor a disclosed legal lease APR.
// The total includes the advance and instalments, excluding residual buyout.
const measure = (value: number) => value !== 0 && (Math.abs(value) < 1e-7 || Math.abs(value) >= 1e21) ? text(value) : formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const price = number(inputs.price);
  const down = optionalNumber(inputs.down);
  const residualPct = number(inputs.residualPct);
  const months = integer(inputs.months);
  const rate = number(inputs.rate);
  const fail = (message: string) => ({
    primary: { label: 'Ежемесячный платёж', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (price === null || down === null || residualPct === null || rate === null) return fail('Введите корректные числовые данные');
  if (months === null) return fail('Количество должно быть целым в допустимом диапазоне');
  if (!(price > 0)) return fail('Стоимость предмета лизинга должна быть больше нуля');
  if (!(down >= 0)) return fail('Аванс не может быть отрицательным');
  if (down >= price) return fail('Аванс не может быть больше стоимости или равен ей');
  if (!(residualPct >= 0) || !(residualPct <= 100)) return fail('Остаточная доля задаётся от 0 до 100 процентов');
  if (!(months >= 1) || !Number.isInteger(months)) return fail('Срок — целое число месяцев, не меньше одного');
  if (!(rate >= 0)) return fail('Удорожание не может быть отрицательным');

  const residual = price * (residualPct / 100);
  const financed = price - down;
  if (financed < residual) return fail('Остаточная стоимость не может быть выше профинансированной суммы');

  const depreciation = (financed - residual) / months;
  const i = divideRate(rate, 1200);
  if (i === null) return fail('Результат вне допустимого диапазона');
  const charge = (financed / 2 + residual / 2) * i;
  const payment = depreciation + charge;
  const total = payment * months + down;
  if (![residual, financed, depreciation, charge, payment, total].every(Number.isFinite) || (residualPct > 0 && residual === 0) || (rate > 0 && charge === 0)) return fail('Результат вне допустимого диапазона');

  return {
    primary: { label: 'Ежемесячный платёж', value: `${measure(payment)} ₽` },
    secondary: [
      { label: 'Амортизационная часть', value: `${measure(depreciation)} ₽` },
      { label: 'Процентная часть', value: `${measure(charge)} ₽` },
      { label: 'Остаточная стоимость', value: `${measure(residual)} ₽` },
      { label: 'Всего выплат с авансом', value: `${measure(total)} ₽` },
    ],
  };
};
