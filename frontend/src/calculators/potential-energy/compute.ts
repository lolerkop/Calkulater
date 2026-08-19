import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Потенциальная энергия: E = m · g · h.
//
// g — стандартное ускорение свободного падения, принятое по определению.
// Округление до 9,8 сдвигает третий знак результата, и при большой массе
// расхождение исчисляется сотнями джоулей, поэтому значение полное.
const G = 9.80665;

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
    primary: { label: 'Потенциальная энергия', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let m = 0;
  let h = 0;
  let e = 0;
  let primaryLabel = 'Потенциальная энергия';
  if (mode === 'E') {
    m = toNumber(inputs.m);
    h = toNumber(inputs.h);
    if (!(m > 0)) return fail('Масса должна быть больше нуля');
    if (h < 0) return fail('Высота не может быть отрицательной');
    e = m * G * h;
  } else if (mode === 'h') {
    e = toNumber(inputs.E);
    m = toNumber(inputs.m2);
    if (e < 0) return fail('Энергия не может быть отрицательной');
    if (!(m > 0)) return fail('Масса должна быть больше нуля');
    h = e / (m * G);
    primaryLabel = 'Высота';
  } else {
    e = toNumber(inputs.E2);
    h = toNumber(inputs.h2);
    if (e < 0) return fail('Энергия не может быть отрицательной');
    if (!(h > 0)) return fail('Высота должна быть больше нуля, иначе масса не определена');
    m = e / (G * h);
    primaryLabel = 'Масса';
  }

  const primaryValue = mode === 'E' ? `${qty(e)} Дж` : mode === 'h' ? `${qty(h)} м` : `${qty(m)} кг`;
  return {
    primary: { label: primaryLabel, value: primaryValue },
    secondary: [
      { label: 'Потенциальная энергия', value: `${qty(e)} Дж` },
      { label: 'Масса', value: `${qty(m)} кг` },
      { label: 'Высота', value: `${qty(h)} м` },
      { label: 'Ускорение свободного падения', value: `${qty(G)} м/с²` },
    ],
  };
};
