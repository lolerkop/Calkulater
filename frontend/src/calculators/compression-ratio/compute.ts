import type { CalcFunction } from '../../lib/types';
import { add, exact, evaluated, finite, INPUT, measure, positive, RANGE, ratio, read } from '../engine-displacement/automotiveNumeric';
export const compute: CalcFunction = inputs => {
  const displacement = read(inputs.displacement), chamber = read(inputs.chamber);
  const fail = (message: string) => ({ primary: { label: 'Степень сжатия', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!finite(displacement, chamber)) return fail(INPUT);
  if (!positive(displacement)) return fail('Рабочий объём цилиндра должен быть больше нуля');
  if (!positive(chamber)) return fail('Объём камеры сгорания должен быть больше нуля');
  const fullExact = add(exact(displacement), exact(chamber)), full = evaluated(fullExact), cr = ratio(fullExact, exact(chamber));
  if (!positive(full, cr)) return fail(RANGE);
  return { primary: { label: 'Степень сжатия', value: measure(cr) }, secondary: [
    { label: 'Полный объём цилиндра', value: `${measure(full)} см³` }, { label: 'Объём камеры сгорания', value: `${measure(chamber)} см³` },
    { label: 'Рабочий объём цилиндра', value: `${measure(displacement)} см³` }, { label: 'Записью', value: `${measure(cr)}:1` },
  ] };
};
