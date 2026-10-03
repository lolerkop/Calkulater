import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber } from '../../lib/format';
import { read, INPUT, RANGE } from '../../lib/platform/measurementScalar';
import { positiveRatio } from '../../lib/platform/scaledPositiveRatio';
import { formatQuantity } from '../../lib/platform/measurement';
const fixed = (n: number, digits: number) => n > 0 && (n < 0.5 * 10 ** -digits || n >= 1e12) ? formatQuantity(n, fmtNumber) : fmtNumber(n, digits);
const duration = (hours: number) => {
  if (hours < 1 / 120 || hours >= 1e12) return formatQuantity(hours, fmtNumber) + ' ч';
  const minutes = Math.round(hours * 60);
  return fmtInt(Math.floor(minutes / 60)) + ' ч ' + (minutes % 60) + ' мин';
};
export const compute: CalcFunction = (inputs) => {
  const capacity = read(inputs.capacity), voltage = read(inputs.voltage), load = read(inputs.load), dod = read(inputs.dod), efficiency = read(inputs.efficiency);
  const fail = (message: string) => ({ primary: { label: 'Время работы', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (![capacity, voltage, load, dod, efficiency].every(Number.isFinite)) return fail(INPUT);
  if (!(capacity > 0)) return fail('Ёмкость должна быть больше нуля');
  if (!(voltage > 0)) return fail('Напряжение должно быть больше нуля');
  if (!(load > 0)) return fail('Мощность нагрузки должна быть больше нуля');
  if (!(dod > 0 && dod <= 100)) return fail('Глубина разряда должна быть больше 0 и не больше 100 %');
  if (!(efficiency > 0 && efficiency <= 100)) return fail('КПД должен быть больше 0 и не больше 100 %');
  const full = positiveRatio([capacity, voltage], []);
  const energy = positiveRatio([capacity, voltage, dod, efficiency], [100, 100]);
  const hours = positiveRatio([capacity, voltage, dod, efficiency], [100, 100, load]);
  if (![full, energy, hours].every(n => Number.isFinite(n) && n > 0)) return fail(RANGE);
  return { primary: { label: 'Время работы', value: fixed(hours, 2) + ' ч' }, secondary: [
    { label: 'Часы и минуты', value: duration(hours) },
    { label: 'Полезная энергия', value: fixed(energy, 1) + ' Вт·ч' },
    { label: 'Полная энергия батареи', value: fixed(full, 1) + ' Вт·ч' },
  ] };
};
