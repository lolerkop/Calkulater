import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber, toStr } from '../../lib/format';

// Погашение нескольких долгов: снежный ком против лавины.
//
// Считается не формулой, а ПОМЕСЯЧНОЙ СИМУЛЯЦИЕЙ, потому что закрытый долг
// освобождает свой минимальный платёж, и дальше он идёт в следующий — эта
// обратная связь замкнутой формулой не выражается.
//
// Каждый месяц: на остаток начисляется ставка/12, вносится минимальный платёж,
// а всё свободное (личная надбавка плюс минимальные платежи уже закрытых
// долгов) добавляется ОДНОМУ целевому долгу. Снежный ком целит в наименьший
// остаток, лавина — в наибольшую ставку.
//
// Отличие от погашения карты: там один долг и один платёж. Здесь несколько
// долгов, и главный вопрос не «сколько месяцев», а «в каком порядке платить»:
// лавина всегда дешевле по процентам, снежный ком раньше даёт закрытый долг.
//
// Срок — целое по построению: это число шагов симуляции, а не округление
// дробного ответа.
const MAX_MONTHS = 1200;
const MAX_DEBTS = 20;

type Debt = { name: string; balance: number; rate: number; minimum: number; closedAt: number; interest: number };

const parseDebts = (raw: string): Debt[] | null => {
  const debts: Debt[] = [];
  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const parts = trimmed.split(/\s+/);
    if (parts.length < 4) return null;
    const minimum = toNumber(parts[parts.length - 1]);
    const rate = toNumber(parts[parts.length - 2]);
    const balance = toNumber(parts[parts.length - 3]);
    const name = parts.slice(0, parts.length - 3).join(' ');
    if (!name || !(balance > 0) || !(rate >= 0) || !(minimum > 0)) return null;
    debts.push({ name, balance, rate, minimum, closedAt: 0, interest: 0 });
  }
  return debts.length ? debts : null;
};

export const compute: CalcFunction = (inputs) => {
  const raw = toStr(inputs.debts, '');
  const extra = toNumber(inputs.extra);
  const strategy = toStr(inputs.strategy, 'avalanche');
  const fail = (message: string) => ({
    primary: { label: 'Срок погашения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  const debts = parseDebts(raw);
  if (!debts) return fail('Каждая строка: название, сумма, ставка и минимальный платёж');
  if (debts.length > MAX_DEBTS) return fail(`Долгов не может быть больше ${MAX_DEBTS}`);
  if (!(extra >= 0)) return fail('Свободные деньги не могут быть отрицательными');

  // Долг, минимальный платёж которого не покрывает даже проценты, не гасится
  // никогда — это не край диапазона, а неразрешимая постановка.
  const stuck = debts.find((d) => d.minimum <= (d.balance * d.rate) / 1200 && extra === 0);
  if (stuck) return fail(`Платёж по долгу «${stuck.name}» не покрывает проценты`);

  const total = debts.reduce((sum, d) => sum + d.balance, 0);
  let months = 0;
  let interest = 0;
  const rows: string[][] = [];

  while (debts.some((d) => d.balance > 0)) {
    months += 1;
    if (months > MAX_MONTHS) return fail('Долги не гасятся: платежей не хватает даже на проценты');
    const freed = extra + debts.filter((d) => d.balance <= 0).reduce((sum, d) => sum + d.minimum, 0);
    for (const d of debts) {
      if (d.balance <= 0) continue;
      const charge = (d.balance * d.rate) / 1200;
      interest += charge;
      d.interest += charge;
      d.balance += charge;
      d.balance -= Math.min(d.minimum, d.balance);
    }
    const live = debts.filter((d) => d.balance > 0);
    if (live.length) {
      const target = strategy === 'snowball'
        ? live.reduce((a, b) => (b.balance < a.balance ? b : a))
        : live.reduce((a, b) => (b.rate > a.rate ? b : a));
      target.balance -= Math.min(freed, target.balance);
    }
    for (const d of debts) {
      if (d.balance <= 1e-9 && !d.closedAt) { d.balance = 0; d.closedAt = months; }
    }
  }

  const order = [...debts].sort((a, b) => a.closedAt - b.closedAt);
  for (const [index, d] of order.entries()) {
    rows.push([String(index + 1), d.name, `${fmtInt(d.closedAt)} мес`, money(d.interest)]);
  }

  return {
    primary: { label: 'Срок погашения', value: `${fmtInt(months)} мес` },
    secondary: [
      { label: 'Переплата процентами', value: money(interest) },
      { label: 'Выплачено всего', value: money(total + interest) },
      { label: 'Первым закрывается', value: order[0].name },
      { label: 'Долгов', value: fmtInt(debts.length) },
    ],
    table: {
      title: 'Порядок погашения',
      columns: ['Очередь', 'Долг', 'Закрыт', 'Проценты по нему'],
      rows,
    },
  };
};
