import type { CalcFunction } from '../../lib/types';
import { read, unit, valid, dim, product, exact, add, scale, number, sum, negative, times, sqrt, ratio, INPUT, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Площадь', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const u = unit(inputs.unit); if (!u) return fail(UNIT);
  const a = read(inputs.a), b = read(inputs.b), h = read(inputs.h);
  if (![a, b, h].every(Number.isFinite)) return fail(INPUT);
  if (!valid(a, b)) return fail('Основания должны быть больше нуля');
  if (!(h > 0)) return fail('Высота должна быть больше нуля');
  // The mean is formed before conversion; a+b may overflow although the mean is finite.
  const mid = number(scale(add(exact(a), exact(b)), -1)), area = product(mid, h);
  if (!valid(mid, area)) return fail(RANGE);
  const secondary = [{ label: 'Средняя линия', value: `${dim(mid)} ${u}` }];
  const absent = (value: unknown) => value === undefined || (typeof value === 'string' && value.trim() === '');
  const hasC = !absent(inputs.c), hasD = !absent(inputs.d);
  const c = hasC ? read(inputs.c) : 0, d = hasD ? read(inputs.d) : 0;
  if ((hasC && !Number.isFinite(c)) || (hasD && !Number.isFinite(d))) return fail(INPUT);
  if ((hasC && c < 0) || (hasD && d < 0)) return fail('Боковые стороны не могут быть отрицательными');
  // Existing numeric zero defaults explicitly mean that the optional side is not supplied.
  if ((c > 0) !== (d > 0)) return fail('Для периметра введите обе положительные боковые стороны или оставьте обе пустыми');
  if (c > 0 && d > 0) {
    if (c < h || d < h) return fail('Боковая сторона не может быть короче высоты');
    const cx = add(times(exact(c), exact(c)), negative(times(exact(h), exact(h))));
    const dy = add(times(exact(d), exact(d)), negative(times(exact(h), exact(h))));
    const x = sqrt(cx), y = sqrt(dy), gap = Math.abs(a - b);
    if ((cx.coefficient > 0n && x === 0) || (dy.coefficient > 0n && y === 0)) return fail(RANGE);
    // Convex parallel-base coordinates require gap=|±x±y|. Compare exact
    // sums of the represented projections, scaled by the projections themselves.
    // 64 epsilon covers evaluation rounding, not measurement uncertainty.
    const projectionSum = add(exact(x), exact(y));
    const projectionDifference = add(exact(x), negative(exact(y)));
    projectionDifference.coefficient = projectionDifference.coefficient < 0n ? -projectionDifference.coefficient : projectionDifference.coefficient;
    const residual = (candidate: typeof projectionSum) => {
      const difference = add(exact(gap), negative(candidate));
      difference.coefficient = difference.coefficient < 0n ? -difference.coefficient : difference.coefficient;
      const denominator = add(exact(gap), projectionSum);
      return denominator.coefficient === 0n ? 0 : ratio(difference, denominator);
    };
    if (Math.min(residual(projectionSum), residual(projectionDifference)) > 64 * Number.EPSILON) return fail('Основания, высота и боковые стороны не образуют одну трапецию');
    const perimeter = sum(a, b, c, d); if (!valid(perimeter)) return fail(RANGE);
    secondary.push({ label: 'Периметр', value: `${dim(perimeter)} ${u}` });
  }
  return { primary: { label: 'Площадь', value: `${dim(area)} ${u}²` }, secondary };
};
