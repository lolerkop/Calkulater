import type { CalcFunction } from '../../lib/types';
import { read, qty, RANGE, INPUT, MODE } from '../../lib/platform/measurementScalar';



// Non-negative mean normal pressure. atm is a unit, not an ambient correction.
const PASCALS_PER_ATM = 101325;
export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode;
  const label = mode === 'F' ? 'Сила' : mode === 'A' ? 'Площадь' : 'Давление';
  const fail = (message: string) => ({ primary: { label, value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode !== 'p' && mode !== 'F' && mode !== 'A') return fail(MODE);
  let f: number, a: number, p: number;
  if (mode === 'p') {
    f = read(inputs.F); a = read(inputs.A);
    if (![f, a].every(Number.isFinite)) return fail(INPUT);
    if (f < 0) return fail('Сила не может быть отрицательной');
    if (!(a > 0)) return fail('Площадь должна быть больше нуля');
    p = f / a;
  } else if (mode === 'F') {
    p = read(inputs.p); a = read(inputs.A2);
    if (![p, a].every(Number.isFinite)) return fail(INPUT);
    if (p < 0) return fail('Давление не может быть отрицательным');
    if (!(a > 0)) return fail('Площадь должна быть больше нуля');
    f = p * a;
  } else {
    f = read(inputs.F2); p = read(inputs.p2);
    if (![f, p].every(Number.isFinite)) return fail(INPUT);
    if (!(f > 0)) return fail('Для положительной площади сила и давление должны быть больше нуля');
    if (!(p > 0)) return fail('Давление должно быть больше нуля');
    a = f / p;
  }
  const atm = p / PASCALS_PER_ATM;
  if (![f, a, p, atm].every(Number.isFinite) || !(a > 0) || (mode === 'p' && f > 0 && p === 0) || (mode === 'F' && p > 0 && f === 0) || (p > 0 && atm === 0)) return fail(RANGE);
  return { primary: { label, value: mode === 'p' ? `${qty(p)} Па` : mode === 'F' ? `${qty(f)} Н` : `${qty(a)} м²` }, secondary: [
    { label: 'Давление', value: `${qty(p)} Па` }, { label: 'Сила', value: `${qty(f)} Н` }, { label: 'Площадь', value: `${qty(a)} м²` }, { label: 'В атмосферах', value: `${qty(atm)} атм` },
  ] };
};
