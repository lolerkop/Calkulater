import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Механическое давление: p = F ÷ A.
//
// Считается именно отношение силы к площади. Атмосферное давление не
// добавляется: манометрическое и абсолютное различаются на 101 325 Па, и
// подмешивать это молча нельзя.
const PASCALS_PER_ATM = 101325;

const qty = (value: number): string => formatQuantity(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'p');
  const fail = (message: string) => ({
    primary: { label: 'Давление', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let f = 0;
  let a = 0;
  let p = 0;
  let primaryLabel = 'Давление';
  if (mode === 'p') {
    f = toNumber(inputs.F);
    a = toNumber(inputs.A);
    if (!(f > 0)) return fail('Сила должна быть больше нуля');
    if (!(a > 0)) return fail('Площадь должна быть больше нуля');
    p = f / a;
  } else if (mode === 'F') {
    p = toNumber(inputs.p);
    a = toNumber(inputs.A2);
    if (!(p > 0)) return fail('Давление должно быть больше нуля');
    if (!(a > 0)) return fail('Площадь должна быть больше нуля');
    f = p * a;
    primaryLabel = 'Сила';
  } else {
    f = toNumber(inputs.F2);
    p = toNumber(inputs.p2);
    if (!(f > 0)) return fail('Сила должна быть больше нуля');
    if (!(p > 0)) return fail('Давление должно быть больше нуля');
    a = f / p;
    primaryLabel = 'Площадь';
  }

  const primaryValue = mode === 'p' ? `${qty(p)} Па` : mode === 'F' ? `${qty(f)} Н` : `${qty(a)} м²`;
  return {
    primary: { label: primaryLabel, value: primaryValue },
    secondary: [
      { label: 'Давление', value: `${qty(p)} Па` },
      { label: 'Сила', value: `${qty(f)} Н` },
      { label: 'Площадь', value: `${qty(a)} м²` },
      { label: 'В атмосферах', value: `${qty(p / PASCALS_PER_ATM)} атм` },
    ],
  };
};
