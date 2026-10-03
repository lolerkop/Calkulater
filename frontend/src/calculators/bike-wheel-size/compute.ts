import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode ?? 'etrto';
  const read = (value: unknown) => typeof value === 'number' || typeof value === 'string' && value.trim() !== '' ? toNumber(value, Number.NaN) : Number.NaN;
  const fail = (message: string) => ({ primary: { label: 'Длина окружности', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  let diameter: number;
  if (mode === 'etrto') {
    const rim = read(inputs.etrtoRim), tire = read(inputs.etrtoTire);
    if (!Number.isFinite(rim) || rim <= 0) return fail('Посадочный диаметр обода должен быть больше нуля');
    if (!Number.isFinite(tire) || tire < 0) return fail('Ширина покрышки должна быть конечным неотрицательным числом');
    // Nominal tire WIDTH is used as an approximation of radial HEIGHT.
    // ETRTO does not assert this equality; loaded rolling circumference differs.
    diameter = rim + 2 * tire;
  } else if (mode === 'inches') {
    const inches = read(inputs.inches);
    if (!Number.isFinite(inches) || inches <= 0) return fail('Диаметр в дюймах должен быть больше нуля');
    diameter = inches * 25.4;
  } else return fail('Неизвестный режим');
  const circumference = Math.PI * diameter;
  if (![diameter, circumference, 1000000 / circumference].every((x) => Number.isFinite(x) && x > 0)) return fail('Результат выходит за числовой диапазон');
  const measure = (x: number) => formatMeasure(x, fmtNumber);
  return {
    primary: { label: 'Длина окружности', value: `${measure(circumference)} мм` },
    secondary: [
      { label: 'Диаметр', value: `${measure(diameter)} мм` },
      { label: 'Диаметр в дюймах', value: measure(diameter / 25.4) },
      { label: 'Оборотов на километр', value: measure(1000000 / circumference) },
      { label: 'Радиус', value: `${measure(diameter / 2)} мм` },
    ],
    note: mode === 'etrto' ? 'Оценка: высота покрышки принята равной её номинальной ширине. Для велокомпьютера измерьте прокат нагруженного колеса.' : 'Введённый диаметр считается измеренным внешним диаметром, а не условным дюймовым названием размера.',
  };
};
