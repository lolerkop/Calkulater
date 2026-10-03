import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, MODE, qty } from '../../lib/platform/measurementScalar';
import { read, exact, times, evaluated, finite, mode } from '../../lib/platform/electronicsNumericInput';
const labels = { force: 'Сила', extension: 'Удлинение', stiffness: 'Жёсткость' } as const;
const units = { force: 'Н', extension: 'м', stiffness: 'Н/м' } as const;
/** F=kx is the signed holding force. The spring's restoring force is −kx. */
export const compute: CalcFunction = inputs => {
  const selected = mode(inputs.mode, 'force', ['force', 'extension', 'stiffness']) as keyof typeof labels | null;
  const label = selected ? labels[selected] : labels.force;
  const fail = (value: string) => ({ primary: { label, value: '—' }, secondary: [{ label: 'Проверьте данные', value, accent: 'red' as const }] });
  if (!selected) return fail(MODE);
  let k = selected === 'stiffness' ? 0 : read(inputs.k);
  let x = selected === 'extension' ? 0 : read(inputs.x);
  let f = selected === 'force' ? 0 : read(inputs.f);
  if (!finite(k, x, f)) return fail(INPUT);
  if (selected !== 'stiffness' && !(k > 0)) return fail('Жёсткость должна быть больше нуля');
  let energy: number;
  if (selected === 'stiffness') {
    if (x === 0) return fail('Удлинение не может быть нулевым: делить на него нечего');
    if (f === 0 || Math.sign(f) !== Math.sign(x)) return fail('Сила и деформация должны быть направлены в одну сторону');
    k = evaluated(exact(f), exact(x));
    energy = evaluated(times(exact(f), exact(x)), exact(2));
  } else if (selected === 'extension') {
    x = evaluated(exact(f), exact(k));
    energy = evaluated(times(exact(f), exact(f)), times(exact(2), exact(k)));
  } else {
    f = evaluated(times(exact(k), exact(x)));
    energy = evaluated(times(exact(k), exact(x), exact(x)), exact(2));
  }
  if (!finite(k, x, f, energy)) return fail(RANGE);
  const value = selected === 'stiffness' ? k : selected === 'extension' ? x : f;
  const q = (n: number, unit: string) => `${qty(n)} ${unit}`;
  return { primary: { label, value: q(value, units[selected]) }, secondary: [
    { label: 'Энергия пружины', value: q(energy, 'Дж') }, { label: 'Жёсткость', value: q(k, 'Н/м') },
    { label: 'Удлинение', value: q(x, 'м') }, { label: 'Сила', value: q(f, 'Н') },
  ] };
};
