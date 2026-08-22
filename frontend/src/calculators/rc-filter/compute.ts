import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';

// RC-цепь: постоянная времени и частота среза.
//
//   τ = R·C            (секунды, если R в омах, C в фарадах)
//   fc = 1/(2π·R·C)    (герцы)
//
// Одно и то же звено — и фильтр, и задержка: под ним видят частоту, на которой
// сигнал слабеет на 3 дБ, и время, за которое конденсатор заряжается до 63 %.
// Обе величины — одна и та же τ, поэтому считаются вместе.
//
// Ёмкость вводится в нанофарадах, потому что так их маркируют. Внутри перевод
// в фарады обязателен: герц определён через секунду, а секунда — через фарад
// и ом, и смешивать нанофарады с омами напрямую нельзя.
//
// Порядок звена первый: наклон 20 дБ на декаду. Двухзвенных и активных
// фильтров эта формула не описывает — там появляется добротность, которой у
// одиночной RC-цепи нет.
//
// Показ через `formatQuantity`: τ наносекундной цепи равна 10⁻⁹ с, и обычная
// запись превратила бы её в ноль. Показатель степени здесь не украшение.
const CHARGE_PERIODS = 5;

export const compute: CalcFunction = (inputs) => {
  const r = toNumber(inputs.r);
  const c = toNumber(inputs.c);
  const fail = (message: string) => ({
    primary: { label: 'Частота среза', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(r > 0)) return fail('Сопротивление должно быть больше нуля');
  if (!(c > 0)) return fail('Ёмкость должна быть больше нуля');

  const farads = c * 1e-9;
  const tau = r * farads;
  const cutoff = 1 / (2 * Math.PI * tau);
  const q = (value: number, unit: string) => `${formatQuantity(value, fmtNumber)} ${unit}`;
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Частота среза', value: q(cutoff, 'Гц') },
    secondary: [
      { label: 'Постоянная времени', value: q(tau, 'с') },
      { label: 'Заряд почти до конца', value: q(tau * CHARGE_PERIODS, 'с') },
      { label: 'Сопротивление', value: m(r, 'Ом') },
      { label: 'Ёмкость', value: m(c, 'нФ') },
    ],
  };
};
