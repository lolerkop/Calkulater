import { number } from '../../lib/platform/scalarInputDisplay';
import { choice } from '../../lib/platform/financeWave11Input';
import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber } from '../../lib/format';

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
// стратегии сравниваются при одинаковом бюджете; результат зависит от
// минимальных платежей и правила переноса высвобожденных денег.
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
    const minimum = number(parts[parts.length - 1]);
    const rate = number(parts[parts.length - 2]);
    const balance = number(parts[parts.length - 3]);
    const name = parts.slice(0, parts.length - 3).join(' ');
    if (balance === null || rate === null || minimum === null || !name || !(balance > 0) || !(rate >= 0) || (rate > 0 && rate / 1200 === 0) || !(minimum > 0)) return null;
    debts.push({ name, balance, rate, minimum, closedAt: 0, interest: 0 });
  }
  return debts.length ? debts : null;
};

export const compute: CalcFunction = (inputs) => {
  const raw = typeof inputs.debts === 'string' ? inputs.debts : ''; 
  const extra = number(inputs.extra);
  const strategy = choice(inputs.strategy, ['avalanche', 'snowball'], 'avalanche');
  const fail = (message: string) => ({
    primary: { label: 'Срок погашения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  const debts = parseDebts(raw);
  if (!debts) return fail('Каждая строка: название, сумма, ставка и минимальный платёж');
  if (debts.length > MAX_DEBTS) return fail('Долгов не может быть больше 20');
  if (strategy === null) return fail('Выберите корректный режим расчёта');
  if (extra === null) return fail('Введите корректные значения');
  if (!(extra >= 0)) return fail('Свободные деньги не могут быть отрицательными');

  // A single non-amortizing minimum can become sufficient once another
  // debt closes. Only reject the initial system when no debt can shrink and
  // no extra or freed payment can trigger a first closure.
  if (extra === 0 && debts.every(d => d.minimum <= d.balance * (d.rate / 1200))) return fail('Платежи всех долгов не превышают проценты, свободных денег нет');

  const total = debts.reduce((sum, d) => sum + d.balance, 0);
  if (!Number.isFinite(total)) return fail('Результат выходит за числовые пределы расчёта');
  let months = 0;
  let interest = 0;
  const rows: string[][] = [];

  while (debts.some((d) => d.balance > 0)) {
    months += 1;
    if (months > MAX_MONTHS) return fail('Погашение не завершилось за 1200 месяцев: это предел симуляции, а не доказательство невозможности');
    const freed = extra + debts.filter((d) => d.balance <= 0).reduce((sum, d) => sum + d.minimum, 0);
    if (!Number.isFinite(freed)) return fail('Результат выходит за числовые пределы расчёта');
    for (const d of debts) {
      if (d.balance <= 0) continue;
      const charge = d.balance * (d.rate / 1200);
      if (d.rate > 0 && charge === 0) return fail('Результат выходит за числовые пределы расчёта');
      if (![charge, d.balance + charge, interest + charge, d.interest + charge].every(Number.isFinite)) return fail('Результат выходит за числовые пределы расчёта');
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
      if (d.balance <= 0 && !d.closedAt) { d.balance = 0; d.closedAt = months; }
    }
  }

  const order = [...debts].sort((a, b) => a.closedAt - b.closedAt);
  for (const [index, d] of order.entries()) {
    rows.push([String(index + 1), d.name, `${fmtInt(d.closedAt)} мес`, money(d.interest)]);
  }

  if (!Number.isFinite(total + interest)) return fail('Результат выходит за числовые пределы расчёта');
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
