import { divideRate } from '../../lib/platform/financeMath';
import { number, validOutput } from '../../lib/platform/scalarInputDisplay';
import { displayMoney } from '../../lib/platform/financeDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, fmtPct } from '../../lib/format';
import { ceilUnits } from '../../lib/rounding';

// Погашение кредитной карты фиксированным платежом.
//
//   r = годовая ставка / 100 / 12
//   n = ⌈−ln(1 − B·r/P) / ln(1 + r)⌉        месяцев до нуля
//
// Условие существования решения записано прямо: платёж обязан превышать
// начисленный за месяц процент. Иначе долг не убывает, логарифм берётся от
// неположительного числа, и формула вернула бы NaN под видом ответа.
// Именно этим карта отличается от кредита: у кредита срок задан договором, у
// карты его выбирает сам платёж, и он же решает, кончится ли долг вообще.
//
// Месяцы — целые: банк списывает платёж раз в месяц, дробного платежа не бывает.
// Проценты не округляются, округляется только показ.
const MAX_MONTHS = 600;
const TABLE_ROWS = 36;

export const compute: CalcFunction = (inputs) => {
  const balance = number(inputs.balance);
  const apr = number(inputs.apr);
  const payment = number(inputs.payment);
  const fail = (message: string) => ({
    primary: { label: 'Срок погашения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (balance === null || apr === null || payment === null) return fail('Введите корректные значения');
  if (!(balance > 0)) return fail('Долг должен быть больше нуля');
  if (!(apr >= 0)) return fail('Ставка не может быть отрицательной');
  if (!(payment > 0)) return fail('Платёж должен быть больше нуля');

  const r = divideRate(apr, 1200);
  if (r === null) return fail('Результат выходит за числовые пределы расчёта');
  const monthlyInterest = balance * r;
  if (payment <= monthlyInterest) return fail('Платёж не покрывает даже процент — долг не убывает');

  const months = payment >= balance + monthlyInterest ? 1 : r === 0
    ? ceilUnits(balance / payment)
    : ceilUnits(-Math.log1p(-(monthlyInterest / payment)) / Math.log1p(r));
  if (!Number.isSafeInteger(months) || months < 1) return fail('Результат выходит за числовые пределы расчёта');
  if (months > MAX_MONTHS) return fail('Срок превышает 600 месяцев — увеличьте платёж');

  const money = displayMoney;
  const rows: string[][] = [];
  let bal = balance;
  let interest = 0;
  let firstPrincipal = 0;
  for (let month = 1; month <= months; month += 1) {
    const charged = bal * r;
    if (!validOutput(charged) || !validOutput(bal + charged)) return fail('Результат выходит за числовые пределы расчёта');
    const due = Math.min(payment, bal + charged);
    const principal = due - charged;
    interest += charged;
    if (month === 1) firstPrincipal = principal;
    bal = bal + charged - due;
    if (month <= TABLE_ROWS) {
      rows.push([String(month), money(due), money(charged), money(principal), money(Math.max(bal, 0))]);
    }
  }

  if (![interest, balance + interest, (interest / balance) * 100].every(value => validOutput(value))) return fail('Результат выходит за числовые пределы расчёта');
  return {
    primary: { label: 'Срок погашения', value: `${fmtInt(months)} мес` },
    secondary: [
      { label: 'Переплата процентами', value: money(interest) },
      { label: 'Выплачено всего', value: money(balance + interest) },
      { label: 'Доля переплаты', value: fmtPct((interest / balance) * 100) },
      { label: 'Первый месяц: проценты', value: money(monthlyInterest) },
      { label: 'Первый месяц: тело долга', value: money(firstPrincipal) },
    ],
    table: {
      title: 'График погашения',
      columns: ['Месяц', 'Платёж', 'Проценты', 'Основной долг', 'Остаток'],
      rows,
      note: months > TABLE_ROWS ? 'Показаны первые 36 месяцев' : undefined,
    },
  };
};
