import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Подбор блинов на штангу.
//
// Жадный набор от большего блина к меньшему с допуском 1e-9. Допуск не
// украшение: 2,5 и 1,25 в двоичной записи неточны, и без него остаток
// 1,2499999999 дал бы на один блин меньше, чем нужно.
//
// Недобор выводится отдельной строкой, а не прячется: если набора точно в
// цель нет, честнее показать, на сколько не хватило, чем молча округлить вес.

const tokenize = (raw: string): string[] =>
  raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);

export const compute: CalcFunction = (inputs) => {
  const target = toNumber(inputs.target);
  const bar = toNumber(inputs.bar);
  const fail = (message: string) => ({
    primary: { label: 'Блины на сторону', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const available: number[] = [];
  for (const token of tokenize(toStr(inputs.plates, ''))) {
    const value = parseLocalizedNumber(token, 'ru');
    if (value === null) return fail(`Вес блина должен быть числом: ${token}`);
    if (!(value > 0)) return fail('Вес блина должен быть больше нуля');
    if (!available.includes(value)) available.push(value);
  }
  if (available.length === 0) return fail('Введите доступные блины');
  if (!(bar >= 0)) return fail('Вес грифа не может быть отрицательным');
  if (target < bar) return fail('Целевой вес меньше грифа');

  available.sort((a, b) => b - a);
  const perSide = (target - bar) / 2;
  const used: Array<{ plate: number; count: number }> = [];
  let left = perSide;
  for (const plate of available) {
    const count = Math.floor((left + 1e-9) / plate);
    if (count > 0) {
      used.push({ plate, count });
      left -= count * plate;
    }
  }
  const loaded = bar + 2 * used.reduce((sum, u) => sum + u.plate * u.count, 0);
  const measure = (value: number) => formatMeasure(value, fmtNumber);

  const table: CalcResultTable = {
    title: 'Набор на одну сторону',
    columns: ['Блин', 'Штук на сторону', 'Всего'],
    rows: used.map((u) => [measure(u.plate), fmtNumber(u.count, 0), measure(u.plate * u.count)]),
  };

  return {
    primary: {
      label: 'Блины на сторону',
      value: used.length ? used.map((u) => `${measure(u.plate)}×${u.count}`).join(' + ') : '—',
    },
    secondary: [
      { label: 'Фактический вес', value: `${measure(loaded)} кг` },
      { label: 'Недобор', value: `${measure(target - loaded)} кг` },
      { label: 'На сторону', value: `${measure(perSide)} кг` },
      { label: 'Блинов на сторону', value: fmtNumber(used.reduce((sum, u) => sum + u.count, 0), 0) },
    ],
    table,
  };
};
