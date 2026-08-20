import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Сопротивление цепи резисторов.
//
// Отгруженный ohms-law связывает U, I, R и P для ОДНОГО резистора. Здесь другая
// задача: несколько резисторов и способ их соединения.
//
// Наименьший и наибольший номиналы показаны рядом с итогом не для красоты.
// Параллельное соединение всегда даёт меньше самого маленького номинала, а
// последовательное — больше самого большого; две эти строки позволяют посетителю
// проверить ответ, не пересчитывая цепь.

const tokenize = (raw: string): string[] =>
  raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);

export const compute: CalcFunction = (inputs) => {
  const parallel = toStr(inputs.mode, 'series') === 'parallel';
  const fail = (message: string) => ({
    primary: { label: 'Общее сопротивление', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const values: number[] = [];
  for (const token of tokenize(toStr(inputs.resistances, ''))) {
    const value = parseLocalizedNumber(token, 'ru');
    if (value === null) return fail(`Не число: ${token}`);
    if (!(value > 0)) return fail('Сопротивление должно быть больше нуля');
    values.push(value);
  }
  if (values.length < 2) return fail('Нужно хотя бы два резистора');

  const total = parallel
    ? 1 / values.reduce((sum, r) => sum + 1 / r, 0)
    : values.reduce((sum, r) => sum + r, 0);

  const ohm = (value: number) => `${formatMeasure(value, fmtNumber)} Ом`;

  return {
    primary: { label: 'Общее сопротивление', value: ohm(total) },
    secondary: [
      { label: 'Резисторов', value: fmtNumber(values.length, 0) },
      { label: 'Наименьший', value: ohm(Math.min(...values)) },
      { label: 'Наибольший', value: ohm(Math.max(...values)) },
      {
        label: 'Соединение',
        value: parallel ? 'параллельное' : 'последовательное',
      },
    ],
  };
};
