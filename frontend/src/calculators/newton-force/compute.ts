import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Второй закон Ньютона: F = m · a.
//
// Делитель режима проверяется до деления. При нулевом ускорении масса не
// определена, при нулевой массе не определено ускорение — в обоих случаях
// деление дало бы Infinity, то есть значение, которое выглядит как ответ.
const G = 9.80665;

const qty = (value: number): string => formatQuantity(value, fmtNumber);

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
