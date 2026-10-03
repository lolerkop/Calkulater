import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, MODE, qty } from '../../lib/platform/measurementScalar';
import { read, exact, times, evaluated, finite, mode } from '../../lib/platform/electronicsNumericInput';
const labels = { energy: 'Энергия', deltaT: 'Изменение температуры', mass: 'Масса' } as const;
const units = { energy: 'Дж', deltaT: 'К', mass: 'кг' } as const;
/** Heat received Q=cmΔT is signed; c and mass remain positive in every inverse. */
export const compute: CalcFunction = inputs => {
  const selected = mode(inputs.mode, 'energy', ['energy', 'deltaT', 'mass']) as keyof typeof labels | null;
  const label = selected ? labels[selected] : labels.energy;
  const fail = (value: string) => ({ primary: { label, value: '—' }, secondary: [{ label: 'Проверьте данные', value, accent: 'red' as const }] });
  if (!selected) return fail(MODE);
  const c = read(inputs.c);
  let mass = selected === 'mass' ? 0 : read(inputs.mass);
  let delta = selected === 'deltaT' ? 0 : read(inputs.dt);
  let energy = selected === 'energy' ? 0 : read(inputs.q);
  if (!finite(c, mass, delta, energy)) return fail(INPUT);
  if (!(c > 0)) return fail('Удельная теплоёмкость должна быть больше нуля');
  if (selected !== 'mass' && !(mass > 0)) return fail('Масса должна быть больше нуля');
  if (selected === 'mass') {
    if (delta === 0) return fail('Изменение температуры не может быть нулевым: делить на него нечего');
    if (energy === 0 || Math.sign(energy) !== Math.sign(delta)) return fail('Энергия и изменение температуры должны быть одного знака');
    mass = evaluated(exact(energy), times(exact(c), exact(delta)));
  } else if (selected === 'deltaT') delta = evaluated(exact(energy), times(exact(c), exact(mass)));
  else energy = evaluated(times(exact(c), exact(mass), exact(delta)));
  if (!finite(mass, delta, energy)) return fail(RANGE);
  const kwh = evaluated(exact(energy), exact(3600000));
  if (!finite(mass, delta, energy, kwh)) return fail(RANGE);
  const value = selected === 'mass' ? mass : selected === 'deltaT' ? delta : energy;
  const q = (n: number, unit: string) => `${qty(n)} ${unit}`;
  return { primary: { label, value: q(value, units[selected]) }, secondary: [
    { label: 'В киловатт-часах', value: q(kwh, 'кВт·ч') }, { label: 'Масса', value: q(mass, 'кг') },
    { label: 'Изменение температуры', value: q(delta, 'К') }, { label: 'Удельная теплоёмкость', value: q(c, 'Дж/(кг·К)') },
  ] };
};
