import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Кинетическая энергия: E = ½ · m · v².
//
// Скорость входит в КВАДРАТЕ, поэтому обратный ход по массе делит на v², и при
// нулевой скорости знаменатель обращается в ноль — этот случай отсекается до
// деления.

// Физические величины охватывают более широкий диапазон, чем размеры фигур,
// поэтому у краёв диапазона включается показательная запись: 10⁻¹² — законный
// результат, а обычное оформление показало бы его нулём.
const qty = (value: number): string => {
  const abs = Math.abs(value);
  if (abs > 0 && (abs < 1e-4 || abs >= 1e12)) {
    const [mantissa, exponent] = value.toExponential(3).split('e');
    return `${mantissa.replace('.', ',')}·10^${Number(exponent)}`;
  }
  return formatMeasure(value, fmtNumber);
};

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
