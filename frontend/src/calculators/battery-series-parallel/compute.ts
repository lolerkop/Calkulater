import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { read, INPUT, RANGE } from '../../lib/platform/measurementScalar';
import { integerInput } from '../../lib/platform/strictNumericInput';
import { positiveRatio } from '../../lib/platform/scaledPositiveRatio';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';
export const compute: CalcFunction = (inputs) => {
  const cells = integerInput(inputs.cells), series = integerInput(inputs.series), parallel = integerInput(inputs.parallel);
  const v = read(inputs.cellVoltage), c = read(inputs.cellCapacity);
  const fail = (message: string) => ({ primary: { label: 'Напряжение сборки', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (cells === null || series === null || parallel === null) return fail('Число ячеек и групп должно быть целым от 1 до 500');
  if (![v, c].every(Number.isFinite)) return fail(INPUT);
  if (cells > 500 || series > 500 || parallel > 500) return fail('Число ячеек и групп должно быть целым от 1 до 500');
  if (cells < 1) return fail('Ячеек должно быть не меньше одной');
  if (!(v > 0)) return fail('Напряжение ячейки должно быть больше нуля');
  if (!(c > 0)) return fail('Ёмкость ячейки должна быть больше нуля');
  if (series < 1 || parallel < 1) return fail('Число групп должно быть не меньше одной');
  if (BigInt(series) * BigInt(parallel) !== BigInt(cells)) return fail('Последовательных × параллельных должно равняться числу ячеек');
  const voltage = positiveRatio([v, series], []), capacity = positiveRatio([c, parallel], []), energy = positiveRatio([v, c, cells], []);
  if (![voltage, capacity, energy].every(n => Number.isFinite(n) && n > 0)) return fail(RANGE);
  const q = (n: number, unit: string) => (n < 1e-4 || n >= 1e12 ? formatQuantity(n, fmtNumber) : formatMeasure(n, fmtNumber)) + ' ' + unit;
  return { primary: { label: 'Напряжение сборки', value: q(voltage, 'В') }, secondary: [
    { label: 'Ёмкость сборки', value: q(capacity, 'А·ч') },
    { label: 'Энергия', value: q(energy, 'Вт·ч') },
    { label: 'Ячеек', value: fmtNumber(cells, 0) },
  ] };
};
