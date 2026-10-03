import type { CalcFunction } from '../../lib/types';
import { number as readNumber, integer as readInteger, validOutput } from '../../lib/platform/scalarInputDisplay';
import { displayMoney, displayNumber } from '../../lib/platform/financeDisplay';
import { fmtNumber } from '../../lib/format';

export const compute: CalcFunction = (inputs) => {
  const materials = readNumber(inputs.materials);
  const labor = readNumber(inputs.labor);
  const overhead = readNumber(inputs.overhead);
  const units = readInteger(inputs.units);

  const fail = (message: string) => ({
    primary: { label: 'Себестоимость единицы', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (materials === null || labor === null || overhead === null || units === null) return fail('Введите корректные числовые данные');

  if (materials < 0 || labor < 0 || overhead < 0) return fail('Затраты не могут быть отрицательными');
  if (!(units > 0)) return fail('Тираж должен быть больше нуля');

  const total = materials + labor + overhead;
  const perUnit = total / units;
  if (![total, perUnit].every(value => validOutput(value)) || (total > 0 && !(perUnit > 0))) return fail('Результат вне допустимого диапазона');
  const money = displayMoney;

  return {
    primary: { label: 'Себестоимость единицы', value: money(perUnit) },
    secondary: [
      { label: 'Всего затрат', value: money(total) },
      { label: 'Единиц', value: fmtNumber(units, 0) },
      ...(total > 0 ? [{ label: 'Доля материалов', value: `${displayNumber((materials / total) * 100, 2)}%` }] : []),
    ],
  };
};
