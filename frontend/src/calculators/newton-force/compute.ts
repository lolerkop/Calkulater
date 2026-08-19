import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Второй закон Ньютона: F = m · a.
//
// Делитель режима проверяется до деления. При нулевом ускорении масса не
// определена, при нулевой массе не определено ускорение — в обоих случаях
// деление дало бы Infinity, то есть значение, которое выглядит как ответ.
const G = 9.80665;

// Физические величины охватывают куда более широкий диапазон, чем размеры
// фигур: сила в 10⁻¹² Н — законный результат, а не ошибка ввода. Обычное
// оформление показало бы её нулём, поэтому у краёв диапазона включается
// показательная запись.
const qty = (value: number): string => {
  const abs = Math.abs(value);
  if (abs > 0 && (abs < 1e-4 || abs >= 1e12)) {
    const [mantissa, exponent] = value.toExponential(3).split('e');
    return `${mantissa.replace('.', ',')}·10^${Number(exponent)}`;
  }
  return formatMeasure(value, fmtNumber);
};

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'F');
  const fail = (message: string) => ({
    primary: { label: 'Сила', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let m = 0;
  let a = 0;
  let f = 0;
  let primaryLabel = 'Сила';
  if (mode === 'F') {
    m = toNumber(inputs.m);
    a = toNumber(inputs.a);
    if (!(m > 0)) return fail('Масса должна быть больше нуля');
    if (a < 0) return fail('Ускорение не может быть отрицательным');
    f = m * a;
  } else if (mode === 'm') {
    f = toNumber(inputs.F);
    a = toNumber(inputs.a2);
    if (f < 0) return fail('Сила не может быть отрицательной');
    if (!(a > 0)) return fail('Ускорение должно быть больше нуля, иначе масса не определена');
    m = f / a;
    primaryLabel = 'Масса';
  } else {
    f = toNumber(inputs.F2);
    m = toNumber(inputs.m2);
    if (f < 0) return fail('Сила не может быть отрицательной');
    if (!(m > 0)) return fail('Масса должна быть больше нуля, иначе ускорение не определено');
    a = f / m;
    primaryLabel = 'Ускорение';
  }

  const primaryValue = mode === 'F' ? `${qty(f)} Н` : mode === 'm' ? `${qty(m)} кг` : `${qty(a)} м/с²`;
  return {
    primary: { label: primaryLabel, value: primaryValue },
    secondary: [
      { label: 'Сила', value: `${qty(f)} Н` },
      { label: 'Масса', value: `${qty(m)} кг` },
      { label: 'Ускорение', value: `${qty(a)} м/с²` },
      { label: 'Вес у поверхности Земли', value: `${qty(m * G)} Н` },
    ],
  };
};
