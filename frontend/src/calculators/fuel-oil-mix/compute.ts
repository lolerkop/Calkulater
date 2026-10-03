import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';
import { add, exact, evaluated, finite, INPUT, measure, positive, quotient, RANGE, read, times } from '../engine-displacement/automotiveNumeric';
export const compute: CalcFunction = inputs => {
  const fuel = read(inputs.fuel), ratio = read(inputs.ratio);
  const fail = (message: string) => ({ primary: { label: 'Масла', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!finite(fuel, ratio)) return fail(INPUT);
  if (!(fuel > 0)) return fail('Объём топлива должен быть больше нуля');
  // This is the declared product range, not a universal engine safety limit.
  if (ratio < 20 || ratio > 100) return fail('Пропорция допустима от 1:20 до 1:100');
  const oilMl = quotient([fuel, 1000], [ratio]);
  const parts = add(exact(ratio), exact(1));
  const mix = evaluated(times(exact(fuel), parts), exact(ratio));
  const share = evaluated(exact(100), parts);
  if (!positive(oilMl, mix, share)) return fail(RANGE);
  return { primary: { label: 'Масла', value: `${measure(oilMl)} мл` }, secondary: [
    { label: 'Объём смеси', value: `${measure(mix)} л` }, { label: 'Доля масла', value: `${formatStatistic(share, fmtNumber)} %` },
    { label: 'Соотношение', value: `1:${measure(ratio)}` }, { label: 'Бензина', value: `${measure(fuel)} л` },
  ] };
};
