import type { CalcFunction } from '../../lib/types';
import { read, unit, valid, dim, product, sum, INPUT, MODE, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Площадь', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const mode = inputs.mode, u = unit(inputs.unit);
  if (mode !== 'sides' && mode !== 'areaSide') return fail(MODE);
  if (!u) return fail(UNIT);
  const a = read(inputs.a), supplied = read(mode === 'sides' ? inputs.b : inputs.area);
  if (![a, supplied].every(Number.isFinite)) return fail(INPUT);
  if (!(a > 0)) return fail(mode === 'sides' ? 'Обе стороны должны быть больше нуля' : 'Известная сторона должна быть больше нуля');
  if (!(supplied > 0)) return fail(mode === 'sides' ? 'Обе стороны должны быть больше нуля' : 'Площадь должна быть больше нуля');
  const b = mode === 'sides' ? supplied : supplied / a, area = mode === 'areaSide' ? supplied : product(a, b);
  const perimeter = sum(product(2, a), product(2, b)), diagonal = Math.hypot(a, b);
  if (!valid(a, b, area, perimeter, diagonal)) return fail(RANGE);
  return { primary: { label: 'Площадь', value: `${dim(area)} ${u}²` }, secondary: [
    { label: 'Первая сторона', value: `${dim(a)} ${u}` }, { label: 'Вторая сторона', value: `${dim(b)} ${u}` }, { label: 'Периметр', value: `${dim(perimeter)} ${u}` }, { label: 'Диагональ', value: `${dim(diagonal)} ${u}` },
  ] };
};
