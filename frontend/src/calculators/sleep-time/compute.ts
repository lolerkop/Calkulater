import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Время подъёма или отхода ко сну по циклам сна.
//
//   всего в постели = циклы × 90 минут + время на засыпание
//   лечь в X   → встать через это время
//   встать в X → лечь за это время до
//
// Девяносто минут — принятая средняя длительность цикла, а не измерение
// конкретного человека: у разных людей цикл идёт от 80 до 110 минут, и смысл
// расчёта не в точности, а в том, чтобы просыпаться МЕЖДУ циклами, а не
// посреди глубокой фазы. Именно поэтому цель — целое число циклов, а не
// «восемь часов»: пробуждение в середине цикла ощущается разбитым даже после
// долгого сна.
//
// Время сворачивается по кругу суток: лечь в 23:00 и проспать девять часов
// значит встать в 08:00 следующего дня, а не в 32:00.
const CYCLE_MINUTES = 90;
const DAY_MINUTES = 24 * 60;

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'bedtime');
  const hour = Math.floor(toNumber(inputs.hour));
  const minute = Math.floor(toNumber(inputs.minute));
  const cycles = Math.floor(toNumber(inputs.cycles));
  const fallAsleep = toNumber(inputs.fallAsleep);

  const fail = (message: string) => ({
    primary: { label: mode === 'wake' ? 'Когда лечь' : 'Когда вставать', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(hour >= 0 && hour < 24)) return fail('Час должен быть от 0 до 23');
  if (!(minute >= 0 && minute < 60)) return fail('Минуты должны быть от 0 до 59');
  if (!(cycles >= 1)) return fail('Циклов должно быть не меньше одного');
  if (fallAsleep < 0) return fail('Время на засыпание не может быть отрицательным');

  const total = cycles * CYCLE_MINUTES + fallAsleep;
  const base = hour * 60 + minute;
  const target = (((mode === 'wake' ? base - total : base + total) % DAY_MINUTES) + DAY_MINUTES) % DAY_MINUTES;
  const pad = (value: number) => String(Math.floor(value)).padStart(2, '0');

  return {
    primary: {
      label: mode === 'wake' ? 'Когда лечь' : 'Когда вставать',
      value: `${pad(target / 60)}:${pad(target % 60)}`,
    },
    secondary: [
      { label: 'Всего в постели', value: `${fmtNumber(total, 0)} мин` },
      { label: 'Чистый сон', value: `${fmtNumber(cycles * CYCLE_MINUTES, 0)} мин` },
      { label: 'Циклов', value: fmtNumber(cycles, 0) },
    ],
  };
};
