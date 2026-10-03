import type { CalcFunction } from '../../lib/types';
import { add, exact, evaluated, finite, INPUT, measure, minus, positive, RANGE, read, times } from '../engine-displacement/automotiveNumeric';
const INCH = 25.4, FLANGE = 12.7;
export const compute: CalcFunction = inputs => {
  const width = read(inputs.width), offset = read(inputs.offset), newOffset = read(inputs.newOffset);
  const fail = (message: string) => ({ primary: { label: 'Вылет назад', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!finite(width, offset, newOffset)) return fail(INPUT);
  if (!(width > 0)) return fail('Ширина диска должна быть больше нуля');
  const widthExact = times(exact(width), exact(INCH)), widthMm = evaluated(widthExact);
  // +12.7 mm is the inherited nominal flange allowance, not a measured dimension.
  const backspacing = evaluated(add(widthExact, times(exact(offset), exact(2)), exact(2 * FLANGE)), exact(2));
  const replacement = evaluated(add(widthExact, times(exact(newOffset), exact(2)), exact(2 * FLANGE)), exact(2));
  const shift = minus(offset, newOffset);
  if (!positive(widthMm) || !finite(backspacing, replacement, shift)) return fail(RANGE);
  if (backspacing < 0 || replacement < 0) return fail('Расчётный отступ до внутреннего края не может быть отрицательным');
  return { primary: { label: 'Вылет назад', value: `${measure(backspacing)} мм` }, secondary: [
    { label: 'Ширина диска', value: `${measure(widthMm)} мм` }, { label: 'Смещение колеса', value: `${measure(Math.abs(shift))} мм` },
    { label: 'Куда сместится', value: shift > 0 ? 'наружу' : shift < 0 ? 'внутрь' : 'без смещения' }, { label: 'Вылет назад после замены', value: `${measure(replacement)} мм` },
  ] };
};
