import type { CalcFunction } from '../../lib/types';
import { whole } from '../../lib/calculators/dateTimeNumeric';

const isLeap = (year: number) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
export const compute: CalcFunction = (inputs) => {
  const year = whole(inputs.year, 1, 9999);
  if (year === null) return { primary: { label: 'Високосный год', value: '—' }, secondary: [{ label: 'Проверьте данные', value: 'Введите целый год от 1 до 9999', accent: 'red' }] };
  const leap = isLeap(year);
  let next = year + 1;
  while (next <= 9999 && !isLeap(next)) next++;
  let previous = year - 1;
  while (previous >= 1 && !isLeap(previous)) previous--;
  return { primary: { label: 'Високосный год', value: leap ? 'Да' : 'Нет' }, secondary: [
    { label: 'Дней в году', value: leap ? '366' : '365', accent: leap ? 'green' : 'neutral' },
    { label: 'Дней в феврале', value: leap ? '29' : '28' },
    { label: 'Следующий високосный', value: next <= 9999 ? String(next) : '—' },
    ...(previous >= 1 ? [{ label: 'Предыдущий високосный', value: String(previous) }] : []),
  ] };
};
