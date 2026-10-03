import type { CalcFunction } from '../../lib/types';
import { read, qty, RANGE, INPUT, MODE } from '../../lib/platform/measurementScalar';



// One-dimensional signed momentum p = m v; energy remains non-negative.
export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode;
  const label = mode === 'v' ? 'Скорость' : mode === 'm' ? 'Масса' : 'Импульс';
  const fail = (message: string) => ({ primary: { label, value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode !== 'p' && mode !== 'v' && mode !== 'm') return fail(MODE);
  let m: number, v: number, p: number;
  if (mode === 'p') {
    m = read(inputs.m); v = read(inputs.v);
    if (![m, v].every(Number.isFinite)) return fail(INPUT);
    if (!(m > 0)) return fail('Масса должна быть больше нуля');
    p = m * v;
  } else if (mode === 'v') {
    p = read(inputs.p); m = read(inputs.m2);
    if (![m, p].every(Number.isFinite)) return fail(INPUT);
    if (!(m > 0)) return fail('Масса должна быть больше нуля');
    v = p / m;
  } else {
    p = read(inputs.p2); v = read(inputs.v2);
    if (![p, v].every(Number.isFinite)) return fail(INPUT);
    if (v === 0) return fail('При нулевой скорости массу по импульсу найти нельзя');
    if (p === 0 || Math.sign(p) !== Math.sign(v)) return fail('Для положительной массы импульс и скорость должны иметь одинаковый ненулевой знак');
    m = p / v;
  }
  if (![m, v, p].every(Number.isFinite) || !(m > 0) || (mode === 'p' && v !== 0 && p === 0) || (mode === 'v' && p !== 0 && v === 0)) return fail(RANGE);
  // Dividing either factor first avoids overflow of p*v when the energy is finite.
  const energy = v === 0 ? 0 : [(p / 2) * v, p * (v / 2), (p * v) / 2].find(x => Number.isFinite(x) && x > 0);
  if (energy === undefined) return fail(RANGE);
  return { primary: { label, value: mode === 'p' ? `${qty(p)} кг·м/с` : mode === 'v' ? `${qty(v)} м/с` : `${qty(m)} кг` }, secondary: [
    { label: 'Импульс', value: `${qty(p)} кг·м/с` }, { label: 'Масса', value: `${qty(m)} кг` }, { label: 'Скорость', value: `${qty(v)} м/с` },
    { label: 'Кинетическая энергия', value: `${qty(energy)} Дж` },
  ] };
};
