import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Досрочное погашение: что даёт регулярная доплата сверх платежа.
//
// Аннуитетный платёж по графику:
//   P = S · i / (1 − (1 + i)^−n),   i = ставка / 1200,  n = лет × 12
//
// Дальше кредит гасится ПОШАГОВО, месяц за месяцем: из платежа с доплатой
// вычитаются проценты на текущий остаток, разница уходит в тело. Иначе нельзя:
// каждая доплата уменьшает остаток, а значит и проценты следующего месяца,
// и закрытой формулы для такой цепочки нет.
//
// Экономия считается как разница между выплатами по графику и фактическими.
// Именно она, а не сокращение срока, отвечает на вопрос «сколько я сберёг».
//
// Если платёж с доплатой не покрывает даже процентов, долг растёт и погашение
// не наступит никогда — такой ввод отклоняется, а не считается шесть тысяч
// месяцев подряд.
const MAX_MONTHS = 6000;

export const compute: CalcFunction = (inputs) => {
  const amount = toNumber(inputs.amount);
  const rate = toNumber(inputs.rate);
  const years = toNumber(inputs.years);
  const extra = toNumber(inputs.extra);

  const fail = (message: string) => ({
    primary: { label: 'Экономия на процентах', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(amount > 0)) return fail('Сумма кредита должна быть больше нуля');
  if (rate < 0) return fail('Ставка не может быть отрицательной');
  if (!(years > 0)) return fail('Срок должен быть больше нуля');
  if (extra < 0) return fail('Доплата не может быть отрицательной');

  const monthly = rate / 1200;
  const scheduled = Math.round(years * 12);
  const payment = monthly ? (amount * monthly) / (1 - Math.pow(1 + monthly, -scheduled)) : amount / scheduled;

  let balance = amount;
  let months = 0;
  let paid = 0;
  while (balance > 1e-9 && months < MAX_MONTHS) {
    const interest = balance * monthly;
    let principal = payment + extra - interest;
    if (principal <= 0) return fail('Платёж с доплатой не покрывает проценты — долг не уменьшается');
    if (principal > balance) principal = balance;
    paid += interest + principal;
    balance -= principal;
    months += 1;
  }

  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label: 'Экономия на процентах', value: money(payment * scheduled - paid) },
    secondary: [
      { label: 'Платёж по графику', value: money(payment) },
      { label: 'Платежей вместо графика', value: fmtNumber(months, 0), accent: months < scheduled ? 'green' : undefined },
      { label: 'Платежей по графику', value: fmtNumber(scheduled, 0) },
      { label: 'Всего выплат', value: money(paid) },
    ],
  };
};
