import type { CalcFunction } from '../../lib/types';
import { read, unit, valid, dim, product, sum, exact, times, sqrt, INPUT, MODE, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Площадь', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const mode = inputs.mode, u = unit(inputs.unit);
  if (mode !== 'height' && mode !== 'sides') return fail(MODE);
  if (!u) return fail(UNIT);
  const a = read(inputs.a), supplied = read(mode === 'sides' ? inputs.b : inputs.h);
  if (![a, supplied].every(Number.isFinite)) return fail(INPUT);
  if (!(a > 0)) return fail('Сторона должна быть больше нуля');
  if (!(supplied > 0)) return fail(mode === 'sides' ? 'Вторая сторона должна быть больше нуля' : 'Высота должна быть больше нуля');
  if (mode === 'height') {
    const area = product(a, supplied); if (!valid(area)) return fail(RANGE);
    return { primary: { label: 'Площадь', value: `${dim(area)} ${u}²` }, secondary: [{ label: 'Периметр', value: '—' }, { label: 'Основание', value: `${dim(a)} ${u}` }, { label: 'Высота', value: `${dim(supplied)} ${u}` }] };
  }
  const b = supplied, angle = read(inputs.angle);
  if (!Number.isFinite(angle)) return fail(INPUT);
  if (!(angle > 0 && angle < 180)) return fail('Угол должен быть больше 0 и меньше 180 градусов');
  // Complementary reduction gives exact sin90=1, and no clamp discards a genuine positive small angle.
  const acute = Math.min(angle, 180 - angle), radians = acute * (Math.PI / 180);
  const sin = acute === 90 ? 1 : Math.sin(radians), halfSin = Math.sin(radians / 2), halfCos = Math.cos(radians / 2);
  // For |r| < 2^-511, sin(r)/r differs from1 by at most r²/6,
  // and cos(r/2) differs from1 by at most r²/8: both < 2^-1022.
  // Keep the degree factor inside the exact scaled product so a representable
  // area/height cannot be lost when the standalone radian conversion becomes0.
  const ultraTiny = radians < 2 ** -511;
  const area = ultraTiny ? product(a, b, acute, Math.PI / 180) : product(a, b, sin);
  const height = ultraTiny ? product(b, acute, Math.PI / 180) : product(b, sin);
  const perimeter = sum(product(2, a), product(2, b));
  // Stable half-angle identities avoid subtracting almost equal squared diagonals.
  const difference = Math.abs(a - b), crossRoot = sqrt(times(exact(a), exact(b)));
  const large = Math.hypot(difference, product(2, crossRoot, ultraTiny ? 1 : halfCos));
  const smallCross = ultraTiny ? product(crossRoot, acute, Math.PI / 180) : product(2, crossRoot, halfSin);
  const small = Math.hypot(difference, smallCross);
  if (!valid(area, height, perimeter, large, small)) return fail(RANGE);
  return { primary: { label: 'Площадь', value: `${dim(area)} ${u}²` }, secondary: [{ label: 'Периметр', value: `${dim(perimeter)} ${u}` }, { label: 'Высота к стороне a', value: `${dim(height)} ${u}` }, { label: 'Большая диагональ', value: `${dim(large)} ${u}` }, { label: 'Меньшая диагональ', value: `${dim(small)} ${u}` }] };
};
