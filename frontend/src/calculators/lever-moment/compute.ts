import type { CalcFunction } from '../../lib/types';
import { read, qty, RANGE, INPUT, MODE } from '../../lib/platform/measurementScalar';



// Opposed moments on an ideal massless lever, positive perpendicular arms.
export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode;
  const label = mode === 'distance2' ? 'Второе плечо' : 'Сила на втором плече';
  const fail = (message: string) => ({ primary: { label, value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode !== 'force2' && mode !== 'distance2') return fail(MODE);
  const f1 = read(inputs.f1), d1 = read(inputs.d1), supplied = read(mode === 'force2' ? inputs.d2 : inputs.f2);
  if (![f1, d1, supplied].every(Number.isFinite)) return fail(INPUT);
  if (f1 < 0) return fail('Первая сила не может быть отрицательной');
  if (!(d1 > 0)) return fail('Первое плечо должно быть больше нуля');
  if (!(supplied > 0)) return fail(mode === 'force2' ? 'Второе плечо должно быть больше нуля' : 'Вторая сила должна быть больше нуля');
  if (mode === 'distance2' && f1 === 0) return fail('Нулевая первая сила не даёт положительного второго плеча при ненулевой второй силе');
  const moment = f1 * d1;
  const value = moment / supplied;
  const arm2 = mode === 'distance2' ? value : supplied;
  const advantage = d1 / arm2;
  // Every displayed derived quantity, including moment and arm ratio, must be finite.
  if (![moment, value, arm2, advantage].every(Number.isFinite) || !(arm2 > 0) || !(advantage > 0) || (f1 > 0 && (moment === 0 || value === 0))) return fail(RANGE);
  const q = (n: number, unit: string) => `${qty(n)} ${unit}`;
  return { primary: { label, value: q(value, mode === 'force2' ? 'Н' : 'м') }, secondary: [
    { label: 'Выигрыш в силе', value: qty(advantage) }, { label: 'Момент первой силы', value: q(moment, 'Н·м') }, { label: 'Первое плечо', value: q(d1, 'м') }, { label: 'Второе плечо', value: q(arm2, 'м') },
  ] };
};
