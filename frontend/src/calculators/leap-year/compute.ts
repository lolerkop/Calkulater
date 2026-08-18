import type { CalcFunction } from '../../lib/types';
import { toNumber } from '../../lib/format';

// Високосный год по григорианскому правилу.
//   год делится на 4 — високосный,
//   но год, делящийся на 100, — нет,
//   если только он не делится ещё и на 400.
// Отсюда 1900 не високосный, а 2000 високосный: именно на этом различии
// спотыкались календарные расчёты, где правило сокращали до «делится на 4».
//
// Год берётся числом, а не датой: правило зависит только от номера года, и
// поле даты вынудило бы выбирать месяц и день, которые ни на что не влияют.
const isLeap = (year: number) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

export const compute: CalcFunction = (inputs) => {
  const year = toNumber(inputs.year);

  if (!Number.isInteger(year) || year < 1) {
    return {
      primary: { label: 'Високосный год', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите целый год начиная с первого', accent: 'red' as const }],
    };
  }

  const leap = isLeap(year);
  let next = year + 1;
  while (!isLeap(next)) next += 1;
  let previous = year - 1;
  while (previous >= 1 && !isLeap(previous)) previous -= 1;

  return {
    primary: { label: 'Високосный год', value: leap ? 'Да' : 'Нет' },
    secondary: [
      { label: 'Дней в году', value: leap ? '366' : '365', accent: leap ? 'green' : 'neutral' },
      { label: 'Дней в феврале', value: leap ? '29' : '28' },
      { label: 'Следующий високосный', value: String(next) },
      ...(previous >= 1 ? [{ label: 'Предыдущий високосный', value: String(previous) }] : []),
    ],
  };
};
