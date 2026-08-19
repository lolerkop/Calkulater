import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Аннуитет: равный платёж и график его разложения на проценты и тело долга.
//
// Отличие от кредитного калькулятора: тот считает продукт целиком — две схемы
// платежа, доплату, разовую комиссию — и отдаёт четыре итоговые цифры. Здесь
// считается сама аннуитетная формула и показывается, куда уходит каждый платёж,
// поэтому график и есть главный ответ страницы.
//
// Снос округления копится: проценты и тело округляются помесячно, и сумма
// одинаковых платежей не совпадает с долгом до копейки. Последний платёж
// забирает остаток целиком, поэтому итоговый баланс закрывается ровно в нуль,
// а не в −0,03 ₽.

const money = (value: number): string => `${fmtNumber(value, 2)} ₽`;
const round2 = (value: number): number => Number(value.toFixed(2));

export const compute: CalcFunction = (inputs) => {
  const amount = toNumber(inputs.amount);
  const rate = toNumber(inputs.rate);
  const months = Math.trunc(toNumber(inputs.months));
  const fail = (message: string) => ({
    primary: { label: 'Ежемесячный платёж', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(amount > 0)) return fail('Сумма должна быть больше нуля');
  if (!(rate >= 0)) return fail('Ставка не может быть отрицательной');
  if (!(months >= 1)) return fail('Срок должен быть хотя бы один месяц');
  if (months > 480) return fail('Срок не может превышать 480 месяцев');

  const i = rate / 12 / 100;
  // Нулевая ставка — не вырожденный случай формулы, а другой расчёт: при i = 0
  // знаменатель обращается в нуль, поэтому долг просто делится на срок.
  const payment = i === 0 ? round2(amount / months) : round2((amount * i) / (1 - (1 + i) ** -months));

  const rows: string[][] = [];
  let balance = amount;
  let paid = 0;
  let firstInterest = 0;
  let firstPrincipal = 0;
  let lastPayment = payment;

  for (let month = 1; month <= months; month += 1) {
    const interest = round2(balance * i);
    let principal = round2(payment - interest);
    let due = payment;
    if (month === months) {
      principal = round2(balance);
      due = round2(interest + principal);
      lastPayment = due;
    }
    balance = round2(balance - principal);
    paid = round2(paid + due);
    if (month === 1) {
      firstInterest = interest;
      firstPrincipal = principal;
    }
    rows.push([String(month), money(due), money(interest), money(principal), money(balance)]);
  }

  return {
    primary: { label: 'Ежемесячный платёж', value: money(payment) },
    secondary: [
      { label: 'Всего выплат', value: money(paid) },
      { label: 'Переплата', value: money(round2(paid - amount)) },
      { label: 'Первый месяц: проценты', value: money(firstInterest) },
      { label: 'Первый месяц: тело', value: money(firstPrincipal) },
      { label: 'Последний платёж', value: money(lastPayment) },
    ],
    table: {
      title: 'График платежей',
      columns: ['Месяц', 'Платёж', 'Проценты', 'Основной долг', 'Остаток'],
      rows,
    },
  };
};
