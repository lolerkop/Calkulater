import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import { annuityPayment, divideRate, wholeMonthsFromYears } from '../../lib/platform/financeMath';
import { formatMeasure } from '../../lib/platform/measurement';

// Кредит под залог жилья: сколько банк готов выдать сверх уже имеющегося долга.
//
// Предел считается от СТОИМОСТИ жилья по допустимой доле залога, а не от
// собственного капитала: банк смотрит на то, сколько всего долга висит на
// объекте. Поэтому доступная сумма — это предел минус текущий остаток, и она
// может оказаться нулём при полностью выбранном пределе.
//
// Доля залога вводится пользователем: у разных банков и разных программ она
// разная, и зашивать сюда «обычные 80 процентов» значило бы выдать чужое
// правило за расчёт.
const MONTHS = 12;
const PERCENT = 100;

export const compute: CalcFunction = (inputs) => {
  const value = toNumber(inputs.value);
  const balance = toNumber(inputs.balance);
  const ltv = toNumber(inputs.ltv);
  const rate = toNumber(inputs.rate);
  const years = toNumber(inputs.years);
  const fail = (message: string) => ({
    primary: { label: 'Доступная сумма', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (value === null || balance === null || ltv === null || rate === null || years === null) return fail('Введите корректные числовые данные');

  if (!(value > 0)) return fail('Стоимость жилья должна быть больше нуля');
  if (!(balance >= 0)) return fail('Остаток долга не может быть отрицательным');
  if (balance > value) return fail('Остаток долга не может превышать стоимость жилья');
  if (!(ltv > 0 && ltv <= PERCENT)) return fail('Доля залога задаётся от 0 до 100 процентов');
  if (!(rate >= 0)) return fail('Ставка не может быть отрицательной');
  if (!(years >= 1 / MONTHS)) return fail('Срок должен быть не меньше месяца');
  const months = wholeMonthsFromYears(years);
  if (months === null) return fail('Результат вне допустимого диапазона');

  const limit = value * (ltv / PERCENT);
  const available = Math.max(0, limit - balance);
  const own = value - balance;
  const annualRate = divideRate(rate, PERCENT);
  const monthlyRate = annualRate === null ? null : divideRate(annualRate, MONTHS);
  if (monthlyRate === null) return fail('Результат вне допустимого диапазона');
  const payment = annuityPayment(available, monthlyRate, months);
  const share = own / value * PERCENT;
  if (![limit, available, own, payment, share].every(v => validOutput(v)) || limit <= 0 || (available > 0 && payment <= 0)) return fail('Результат вне допустимого диапазона');

  return {
    primary: { label: 'Доступная сумма', value: `${formatMeasure(available, fmtNumber)} ₽` },
    secondary: [
      { label: 'Собственный капитал в жилье', value: `${formatMeasure(own, fmtNumber)} ₽` },
      { label: 'Предел по доле залога', value: `${formatMeasure(limit, fmtNumber)} ₽` },
      { label: 'Доля собственного капитала', value: `${formatMeasure(share, fmtNumber)} %` },
      { label: 'Платёж по такому кредиту', value: `${formatMeasure(payment, fmtNumber)} ₽` },
    ],
  };
};
