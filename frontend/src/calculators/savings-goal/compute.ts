import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';

// Накопление к цели: сколько откладывать в месяц или за сколько накопится.
//
// Режим «взнос» решается формулой аннуитета относительно PMT; режим «срок»
// замкнутой формулы не имеет и считается помесячно, потому что взнос вносится
// в конце периода, а проценты начисляются на уже накопленное. Итерация
// ограничена сотней лет: цель, недостижимая за это время, честнее объявить
// недостижимой, чем показать четырёхзначный срок.
//
// Срок выводится ЦЕЛЫМИ месяцами: половина месяца ничего не значит, потому что
// взнос приходит целиком.

const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const MAX_MONTHS = 1200;

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'payment');
  const goal = toNumber(inputs.goal);
  const initial = toNumber(inputs.initial);
  const rate = toNumber(inputs.rate);
  const fail = (message: string) => ({
    primary: { label: mode === 'term' ? 'Срок' : 'Взнос в месяц', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(goal > 0)) return fail('Цель должна быть больше нуля');
  if (initial < 0) return fail('Начальная сумма не может быть отрицательной');
  if (rate < 0 || rate > 100) return fail('Ставка должна быть от 0 до 100 % годовых');

  const i = rate / 100 / 12;

  if (mode === 'term') {
    const monthly = toNumber(inputs.monthly);
    if (!(monthly > 0)) return fail('Ежемесячный взнос должен быть больше нуля');
    let balance = initial;
    let months = 0;
    while (balance < goal && months < MAX_MONTHS) {
      balance = balance * (1 + i) + monthly;
      months += 1;
    }
    if (balance < goal) return fail('За сто лет цель не достигается: увеличьте взнос');
    const contributions = monthly * months;
    return {
      primary: { label: 'Срок', value: `${fmtNumber(months, 0)} мес` },
      secondary: [
        { label: 'В годах', value: formatStatistic(months / 12, fmtNumber) },
        { label: 'Итоговая сумма', value: money(balance) },
        { label: 'Всего взносов', value: money(contributions) },
        { label: 'Начислено процентов', value: money(balance - initial - contributions) },
        { label: 'Цель', value: money(goal) },
      ],
    };
  }

  const years = toNumber(inputs.years);
  const months = Math.round(years * 12);
  if (!(months >= 1)) return fail('Срок должен быть не меньше месяца');
  const grown = initial * (1 + i) ** months;
  if (grown >= goal) {
    return {
      primary: { label: 'Взнос в месяц', value: money(0) },
      secondary: [
        { label: 'Месяцев', value: fmtNumber(months, 0) },
        { label: 'Всего взносов', value: money(0) },
        { label: 'Начислено процентов', value: money(grown - initial) },
        { label: 'Итоговая сумма', value: money(grown) },
        { label: 'Цель', value: money(goal) },
      ],
    };
  }
  const payment = i === 0
    ? (goal - grown) / months
    : ((goal - grown) * i) / ((1 + i) ** months - 1);
  const contributions = payment * months;

  return {
    primary: { label: 'Взнос в месяц', value: money(payment) },
    secondary: [
      { label: 'Месяцев', value: fmtNumber(months, 0) },
      { label: 'Всего взносов', value: money(contributions) },
      { label: 'Начислено процентов', value: money(goal - initial - contributions) },
      { label: 'Итоговая сумма', value: money(goal) },
      { label: 'Цель', value: money(goal) },
    ],
  };
};
