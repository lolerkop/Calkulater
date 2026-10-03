import type { CalcFunction } from '../../lib/types';
import { fmtInt } from '../../lib/format';
import { exact, evaluated, finite, INPUT, integer, INTEGER, measure, positive, quotient, RANGE, read, times } from './automotiveNumeric';
export const compute: CalcFunction = inputs => {
  const bore = read(inputs.bore), stroke = read(inputs.stroke), cylinders = integer(inputs.cylinders);
  const fail = (message: string) => ({ primary: { label: 'Рабочий объём', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!finite(bore, stroke)) return fail(INPUT);
  if (!positive(bore)) return fail('Диаметр цилиндра должен быть больше нуля');
  if (!positive(stroke)) return fail('Ход поршня должен быть больше нуля');
  if (!Number.isSafeInteger(cylinders) || cylinders < 1) return fail('Цилиндров должно быть целое число, не меньше одного');
  const oneExact = times(exact(Math.PI), exact(bore), exact(bore), exact(stroke));
  const one = evaluated(oneExact, exact(4000)), total = evaluated(times(oneExact, exact(cylinders)), exact(4000));
  const litres = evaluated(times(oneExact, exact(cylinders)), exact(4000000)), relation = quotient([stroke], [bore]);
  if (!positive(one, total, litres, relation)) return fail(RANGE);
  return { primary: { label: 'Рабочий объём', value: `${measure(total)} см³` }, secondary: [
    { label: 'Объём одного цилиндра', value: `${measure(one)} см³` }, { label: 'В литрах', value: `${measure(litres)} л` },
    { label: 'Отношение хода к диаметру', value: measure(relation) }, { label: 'Цилиндров', value: `${fmtInt(cylinders)} шт` },
  ] };
};
