import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Геометрия шины по маркировке вида 205/55 R16.
//
// Три числа маркировки записаны в РАЗНЫХ единицах, и в этом весь расчёт:
// ширина — миллиметры, профиль — процент от ширины, а диаметр диска — дюймы.
// Высота профиля поэтому не берётся из маркировки напрямую: 55 — это не
// миллиметры, а 55 % от 205, то есть 112,75 мм.
//
// Внешний диаметр складывается из диска и ДВУХ боковин — снизу и сверху,
// поэтому высота профиля входит удвоенной.

const mm = (value: number) => formatMeasure(value, fmtNumber);
const INCH_MM = 25.4;

export const compute: CalcFunction = (inputs) => {
  const width = toNumber(inputs.width);
  const profile = toNumber(inputs.profile);
  const diameter = toNumber(inputs.diameter);

  const fail = (message: string) => ({
    primary: { label: 'Внешний диаметр', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(width > 0)) return fail('Ширина шины должна быть больше нуля');
  if (!(profile > 0)) return fail('Профиль должен быть больше нуля');
  if (!(diameter > 0)) return fail('Диаметр диска должен быть больше нуля');

  const sidewall = (width * profile) / 100;
  const outer = diameter * INCH_MM + 2 * sidewall;
  const circumference = Math.PI * outer;

  return {
    primary: { label: 'Внешний диаметр', value: `${mm(outer)} мм` },
    secondary: [
      { label: 'Высота профиля', value: `${mm(sidewall)} мм` },
      { label: 'Длина окружности', value: `${mm(circumference)} мм` },
      { label: 'Оборотов на километр', value: mm(1e6 / circumference) },
      { label: 'Диаметр в дюймах', value: mm(outer / INCH_MM) },
    ],
  };
};
