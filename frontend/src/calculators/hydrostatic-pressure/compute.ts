import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, qty } from '../../lib/platform/measurementScalar';
import { read, exact, times, add, evaluated, finite } from '../../lib/platform/electronicsNumericInput';
const G = 9.80665;
export const compute: CalcFunction = inputs => {
  const density = read(inputs.density), depth = read(inputs.depth);
  // This one optional offset has a deliberate blank/omitted zero contract.
  const p0 = inputs.p0 === undefined || (typeof inputs.p0 === 'string' && inputs.p0.trim() === '') ? 0 : read(inputs.p0);
  const fail = (value: string) => ({ primary: { label: 'Давление', value: '—' }, secondary: [{ label: 'Проверьте данные', value, accent: 'red' as const }] });
  if (!finite(density, depth, p0)) return fail(INPUT);
  if (!(density > 0)) return fail('Плотность должна быть больше нуля');
  if (depth < 0) return fail('Глубина не может быть отрицательной');
  if (p0 < 0) return fail('Внешнее давление не может быть отрицательным');
  const columnExact = times(exact(density), exact(G), exact(depth));
  const totalExact = add(columnExact, exact(p0));
  const column = evaluated(columnExact), total = evaluated(totalExact), bar = evaluated(totalExact, exact(1e5));
  if (!finite(column, total, bar)) return fail(RANGE);
  const secondary = [ { label: 'В барах', value: `${qty(bar)} бар` }, { label: 'Тип давления', value: p0 > 0 ? 'абсолютное' : 'избыточное' } ];
  if (p0 > 0) secondary.push({ label: 'Давление столба', value: `${qty(column)} Па` });
  return { primary: { label: 'Давление', value: `${qty(total)} Па` }, secondary };
};
