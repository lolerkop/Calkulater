import type { CalcFunction } from '../../lib/types';
import { read, unit, valid, dim, product, sum, exact, times, add, negative, sqrt, INPUT, MODE, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode;
  const fail = (message: string) => ({ primary: { label: mode === 'legHyp' ? 'Второй катет' : 'Гипотенуза', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode !== 'legs' && mode !== 'legHyp') return fail(MODE);
  const u = unit(inputs.unit); if (!u) return fail(UNIT);
  const a = read(inputs.a), supplied = read(mode === 'legs' ? inputs.b : inputs.c);
  if (![a, supplied].every(Number.isFinite)) return fail(INPUT);
  if (!valid(a, supplied)) return fail(mode === 'legs' ? 'Катеты должны быть больше нуля' : 'Катет и гипотенуза должны быть больше нуля');
  if (mode === 'legHyp' && !(supplied > a)) return fail('Гипотенуза должна быть длиннее катета');
  const b = mode === 'legs' ? supplied : sqrt(add(times(exact(supplied), exact(supplied)), negative(times(exact(a), exact(a)))));
  const c = mode === 'legs' ? Math.hypot(a, b) : supplied, area = product(a, b, 0.5), perimeter = sum(a, b, c);
  if (!valid(b, c, area, perimeter)) return fail(RANGE);
  return { primary: { label: mode === 'legs' ? 'Гипотенуза' : 'Второй катет', value: `${dim(mode === 'legs' ? c : b)} ${u}` }, secondary: [
    { label: 'Площадь', value: `${dim(area)} ${u}²` }, { label: 'Периметр', value: `${dim(perimeter)} ${u}` }, { label: mode === 'legs' ? 'Второй катет' : 'Гипотенуза', value: `${dim(mode === 'legs' ? b : c)} ${u}` },
  ] };
};
