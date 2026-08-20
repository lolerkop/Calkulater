import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

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

  if (!(income > 0)) return fail('Доход должен быть больше нуля');
  if (!(dti > 0)) return fail('Долговая нагрузка должна быть больше нуля');
  if (dti > 100) return fail('Долговая нагрузка не может превышать ста процентов');
  if (rate < 0) return fail('Ставка не может быть отрицательной');
  if (!(years > 0)) return fail('Срок должен быть больше нуля');

  const payment = (income * dti) / 100;
  const i = rate / 1200;
  const n = years * 12;
  const amount = i === 0 ? payment * n : (payment * (1 - Math.pow(1 + i, -n))) / i;
  const total = payment * n;
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label: 'Максимальная сумма', value: money(amount) },
    secondary: [
      { label: 'Допустимый платёж', value: money(payment) },
      { label: 'Всего выплат', value: money(total) },
      { label: 'Переплата', value: money(total - amount) },
      { label: 'Платежей', value: fmtNumber(n, 0) },
    ],
  };
};
