import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import { divideRate, scheduledLoanInterest, wholeMonthsFromYears } from '../../lib/platform/financeMath';

// Максимальная сумма кредита по доходу — обратная задача к кредитному
// калькулятору: тот идёт от суммы к платежу, здесь от посильного платежа к сумме.
//
// Сумма — это приведённая стоимость аннуитета: платёж·(1−(1+i)⁻ⁿ)/i. При нулевой
// ставке формула делится на нуль, и предел берётся отдельной ветвью: без
// процентов сумма равна просто сумме всех платежей.
//
// Результат — это ПОТОЛОК по формуле, а не одобренная сумма. Банк смотрит ещё и
// на историю, стаж и залог, и об этом сказано в тексте страницы.

export const compute: CalcFunction = (inputs) => {
  const income = toNumber(inputs.income);
  const dti = toNumber(inputs.dtiPct);
  const rate = toNumber(inputs.rate);
  const years = toNumber(inputs.years);
  const fail = (message: string) => ({
    primary: { label: 'Максимальная сумма', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (income === null || dti === null || rate === null || years === null) return fail('Введите корректные числовые данные');

  if (!(income > 0)) return fail('Доход должен быть больше нуля');
  if (!(dti > 0)) return fail('Долговая нагрузка должна быть больше нуля');
  if (dti > 100) return fail('Долговая нагрузка не может превышать ста процентов');
  if (rate < 0) return fail('Ставка не может быть отрицательной');
  if (!(years >= 1 / 12)) return fail('Срок должен быть не меньше месяца');

  const payment = income * (dti / 100);
  const i = divideRate(rate, 1200);
  const n = wholeMonthsFromYears(years);
  if (i === null || n === null) return fail('Результат вне допустимого диапазона');
  const factor = i === 0 ? n : -Math.expm1(-n * Math.log1p(i)) / i;
  const amount = payment * factor;
  const total = payment * n;
  const interest = scheduledLoanInterest(amount, i, n);
  if (![payment, amount, total, interest].every(v => validOutput(v)) || payment <= 0 || amount <= 0 || interest < 0) return fail('Результат вне допустимого диапазона');
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label: 'Максимальная сумма', value: money(amount) },
    secondary: [
      { label: 'Допустимый платёж', value: money(payment) },
      { label: 'Всего выплат', value: money(total) },
      { label: 'Переплата', value: money(interest) },
      { label: 'Платежей', value: fmtNumber(n, 0) },
    ],
  };
};
