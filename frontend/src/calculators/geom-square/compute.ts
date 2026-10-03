import type { CalcFunction } from '../../lib/types';
import { read, unit, valid, dim, product, INPUT, MODE, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Площадь', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const mode = inputs.mode, u = unit(inputs.unit);
  if (mode !== 'side' && mode !== 'area' && mode !== 'perimeter') return fail(MODE);
  if (!u) return fail(UNIT);
  const supplied = read(inputs[mode]);
  if (!Number.isFinite(supplied)) return fail(INPUT);
  if (!(supplied > 0)) return fail(mode === 'side' ? 'Сторона должна быть больше нуля' : mode === 'area' ? 'Площадь должна быть больше нуля' : 'Периметр должен быть больше нуля');
  const side = mode === 'side' ? supplied : mode === 'area' ? Math.sqrt(supplied) : supplied / 4;
  const area = mode === 'area' ? supplied : product(side, side), perimeter = mode === 'perimeter' ? supplied : product(4, side), diagonal = product(side, Math.SQRT2);
  if (!valid(side, area, perimeter, diagonal)) return fail(RANGE);
  return { primary: { label: 'Площадь', value: `${dim(area)} ${u}²` }, secondary: [
    { label: 'Сторона', value: `${dim(side)} ${u}` }, { label: 'Периметр', value: `${dim(perimeter)} ${u}` }, { label: 'Диагональ', value: `${dim(diagonal)} ${u}` },
  ] };
};
