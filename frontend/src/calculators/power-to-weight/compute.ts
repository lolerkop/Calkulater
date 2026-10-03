import type { CalcFunction } from '../../lib/types';
import { add, exact, evaluated, finite, INPUT, mode, MODE, optional, positive, quotient, RANGE, read, scalar, times } from '../engine-displacement/automotiveNumeric';
const WATTS_PER_PS = 735.49875;
export const compute: CalcFunction = inputs => {
  const selected = mode(inputs.powerUnit, 'ps', ['ps', 'kw']);
  const power = read(inputs.power), mass = read(inputs.mass), payload = optional(inputs.payload);
  const fail = (message: string) => ({ primary: { label: 'Удельная мощность', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!selected) return fail(MODE);
  if (!finite(power, mass, payload)) return fail(INPUT);
  if (!(power > 0)) return fail('Мощность должна быть больше нуля');
  if (!(mass > 0)) return fail('Масса должна быть больше нуля');
  if (payload < 0) return fail('Дополнительная нагрузка не может быть отрицательной');
  const totalExact = add(exact(mass), exact(payload)), totalMass = evaluated(totalExact);
  const kwExact = times(exact(power), exact(selected === 'kw' ? 1000 : WATTS_PER_PS));
  const kilowatts = evaluated(kwExact, exact(1000)), metricHp = evaluated(kwExact, exact(WATTS_PER_PS));
  const perTonne = evaluated(kwExact, totalExact), hpPerTonne = evaluated(times(kwExact, exact(1000)), times(totalExact, exact(WATTS_PER_PS)));
  const kgPerHp = evaluated(times(totalExact, exact(WATTS_PER_PS)), kwExact);
  const unloaded = payload > 0 ? evaluated(kwExact, exact(mass)) : 0;
  if (!positive(totalMass, kilowatts, metricHp, perTonne, hpPerTonne, kgPerHp) || (payload > 0 && !positive(unloaded))) return fail(RANGE);
  const secondary = [
    { label: 'Лошадиных сил на тонну', value: `${scalar(hpPerTonne)} л.с./т` }, { label: 'Килограммов на силу', value: `${scalar(kgPerHp)} кг/л.с.` },
    { label: 'Мощность', value: `${scalar(kilowatts)} кВт = ${scalar(metricHp)} л.с.` }, { label: 'Расчётная масса', value: `${scalar(totalMass, 0)} кг` },
  ];
  if (payload > 0) secondary.push({ label: 'Без нагрузки было бы', value: `${scalar(unloaded)} кВт/т` });
  return { primary: { label: 'Удельная мощность', value: `${scalar(perTonne)} кВт/т` }, secondary };
};
