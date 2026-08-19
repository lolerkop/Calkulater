import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Кинетическая энергия: E = ½ · m · v².
//
// Скорость входит в КВАДРАТЕ, поэтому обратный ход по массе делит на v², и при
// нулевой скорости знаменатель обращается в ноль — этот случай отсекается до
// деления.

const qty = (value: number): string => formatQuantity(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'E');
  const fail = (message: string) => ({
    primary: { label: 'Кинетическая энергия', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let m = 0;
  let v = 0;
  let e = 0;
  let primaryLabel = 'Кинетическая энергия';
  if (mode === 'E') {
    m = toNumber(inputs.m);
    v = toNumber(inputs.v);
    if (!(m > 0)) return fail('Масса должна быть больше нуля');
    if (v < 0) return fail('Скорость не может быть отрицательной');
    e = 0.5 * m * v * v;
  } else if (mode === 'v') {
    e = toNumber(inputs.E);
    m = toNumber(inputs.m2);
    if (e < 0) return fail('Энергия не может быть отрицательной');
    if (!(m > 0)) return fail('Масса должна быть больше нуля');
    v = Math.sqrt((2 * e) / m);
    primaryLabel = 'Скорость';
  } else {
    e = toNumber(inputs.E2);
    v = toNumber(inputs.v2);
    if (e < 0) return fail('Энергия не может быть отрицательной');
    if (!(v > 0)) return fail('Скорость должна быть больше нуля, иначе масса не определена');
    m = (2 * e) / (v * v);
    primaryLabel = 'Масса';
  }

  const primaryValue = mode === 'E' ? `${qty(e)} Дж` : mode === 'v' ? `${qty(v)} м/с` : `${qty(m)} кг`;
  return {
    primary: { label: primaryLabel, value: primaryValue },
    secondary: [
      { label: 'Кинетическая энергия', value: `${qty(e)} Дж` },
      { label: 'Масса', value: `${qty(m)} кг` },
      { label: 'Скорость', value: `${qty(v)} м/с` },
    ],
  };
};
