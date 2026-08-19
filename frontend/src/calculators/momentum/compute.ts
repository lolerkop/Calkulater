import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Импульс: p = m · v.
//
// В отличие от кинетической энергии скорость входит в ПЕРВОЙ степени, поэтому
// обратный ход по массе — обычное деление, и нулевая скорость его запрещает.

const qty = (value: number): string => formatQuantity(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'p');
  const fail = (message: string) => ({
    primary: { label: 'Импульс', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let m = 0;
  let v = 0;
  let p = 0;
  let primaryLabel = 'Импульс';
  if (mode === 'p') {
    m = toNumber(inputs.m);
    v = toNumber(inputs.v);
    if (!(m > 0)) return fail('Масса должна быть больше нуля');
    if (v < 0) return fail('Скорость не может быть отрицательной');
    p = m * v;
  } else if (mode === 'v') {
    p = toNumber(inputs.p);
    m = toNumber(inputs.m2);
    if (p < 0) return fail('Импульс не может быть отрицательным');
    if (!(m > 0)) return fail('Масса должна быть больше нуля');
    v = p / m;
    primaryLabel = 'Скорость';
  } else {
    p = toNumber(inputs.p2);
    v = toNumber(inputs.v2);
    if (p < 0) return fail('Импульс не может быть отрицательным');
    if (!(v > 0)) return fail('Скорость должна быть больше нуля, иначе масса не определена');
    m = p / v;
    primaryLabel = 'Масса';
  }

  const primaryValue = mode === 'p' ? `${qty(p)} кг·м/с` : mode === 'v' ? `${qty(v)} м/с` : `${qty(m)} кг`;
  return {
    primary: { label: primaryLabel, value: primaryValue },
    secondary: [
      { label: 'Импульс', value: `${qty(p)} кг·м/с` },
      { label: 'Масса', value: `${qty(m)} кг` },
      { label: 'Скорость', value: `${qty(v)} м/с` },
      { label: 'Кинетическая энергия', value: `${qty((p * v) / 2)} Дж` },
    ],
  };
};
