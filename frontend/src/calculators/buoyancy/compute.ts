import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, read, qty } from '../../lib/platform/measurementScalar';
import { add, exact, negative, times } from '../../lib/platform/geometryNumericInput';
import { evaluated } from '../../lib/platform/electronicsNumericInput';

const G = 9.80665;
export const compute: CalcFunction = (inputs) => {
  const volume = read(inputs.volume), rhoFluid = read(inputs.rhoFluid), mass = read(inputs.mass);
  const fail = (message: string) => ({ primary: { label: 'Выталкивающая сила', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (![volume, rhoFluid, mass].every(Number.isFinite)) return fail(INPUT);
  if (volume <= 0) return fail('Объём тела должен быть больше нуля');
  if (rhoFluid <= 0) return fail('Плотность жидкости должна быть больше нуля');
  if (mass < 0) return fail('Масса не может быть отрицательной');
  const displaced = evaluated(times(exact(rhoFluid), exact(volume)));
  if (!Number.isFinite(displaced)) return fail(RANGE);
  // One represented displaced mass drives force and balance; no arbitrary tolerance.
  const force = evaluated(times(exact(displaced), exact(G)));
  const weight = evaluated(times(exact(mass), exact(G)));
  const difference = add(exact(displaced), negative(exact(mass)));
  const net = evaluated(times(difference, exact(G)));
  if (![force, weight, net].every(Number.isFinite)) return fail(RANGE);
  const behaviour = difference.coefficient > 0n ? 'всплывает' : difference.coefficient < 0n ? 'тонет' : 'нейтральная плавучесть';
  return {
    primary: { label: 'Выталкивающая сила', value: `${qty(force)} Н` },
    secondary: [
      { label: 'Вес тела', value: `${qty(weight)} Н` },
      { label: 'Равнодействующая', value: `${qty(net)} Н` },
      { label: 'Вытесненная масса', value: `${qty(displaced)} кг` },
      { label: 'Поведение в жидкости', value: behaviour },
    ],
  };
};
