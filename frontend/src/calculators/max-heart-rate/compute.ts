import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Максимальный пульс и тренировочные зоны.
//
// Формул несколько, и они расходятся заметно: «220 − возраст» проще всех, но
// систематически завышает результат у пожилых и занижает у молодых; формула
// Танаки построена на измерениях и даёт другой наклон. Выбор оставлен
// посетителю, а не спрятан в код, потому что разница в 5–7 ударов меняет
// границы зон.
//
// Если задан пульс покоя, зоны считаются по резерву сердца (метод Карвонена):
// доля берётся не от максимума, а от разности между максимумом и покоем, и
// прибавляется к покою. Без пульса покоя резерв равен максимуму, и формула
// естественно вырождается в простые доли — отдельной ветки для этого не нужно.
//
// Границы зон округляются до целого: пульс считают ударами, а не долями удара.

const FORMULAS: Record<string, (age: number) => number> = {
  '220-age': (age) => 220 - age,
  tanaka: (age) => 208 - 0.7 * age,
  gulati: (age) => 206 - 0.88 * age,
};
const ZONES: Array<[number, number, string]> = [
  [50, 60, 'Разминка'],
  [60, 70, 'Жиросжигание'],
  [70, 80, 'Аэробная'],
  [80, 90, 'Анаэробная'],
  [90, 100, 'Максимальная'],
];

export const compute: CalcFunction = (inputs) => {
  const age = toNumber(inputs.age);
  const formula = toStr(inputs.formula, '220-age');
  const restingHr = toNumber(inputs.restingHr);

  const fail = (message: string) => ({
    primary: { label: 'Максимальный пульс', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(age >= 1) || age > 120) return fail('Возраст должен быть от 1 до 120 лет');
  if (restingHr < 0) return fail('Пульс покоя не может быть отрицательным');

  const maximum = (FORMULAS[formula] ?? FORMULAS['220-age'])(age);
  if (restingHr >= maximum) return fail('Пульс покоя не может быть выше максимального');

  const reserve = maximum - restingHr;
  const bound = (share: number) => restingHr + (reserve * share) / 100;

  const table: CalcResultTable = {
    title: 'Тренировочные зоны',
    columns: ['Зона', 'Доля резерва', 'Пульс, уд/мин'],
    rows: ZONES.map(([low, high, name]) => [
      name,
      `${fmtNumber(low, 0)}–${fmtNumber(high, 0)} %`,
      `${fmtNumber(bound(low), 0)}–${fmtNumber(bound(high), 0)}`,
    ]),
    note: restingHr > 0
      ? 'Зоны посчитаны по резерву сердца: доля берётся от разности максимума и пульса покоя.'
      : 'Пульс покоя не задан, поэтому зоны — прямые доли максимального пульса.',
  };

  return {
    primary: { label: 'Максимальный пульс', value: `${fmtNumber(maximum, 0)} уд/мин` },
    secondary: [
      { label: 'Резерв сердца', value: `${fmtNumber(reserve, 0)} уд/мин` },
      { label: 'Пульс покоя', value: `${fmtNumber(restingHr, 0)} уд/мин` },
      { label: 'Аэробная зона 70–80 %', value: `${fmtNumber(bound(70), 0)}–${fmtNumber(bound(80), 0)} уд/мин` },
      { label: 'Жиросжигающая зона 60–70 %', value: `${fmtNumber(bound(60), 0)}–${fmtNumber(bound(70), 0)} уд/мин` },
    ],
    table,
  };
};
