import type { CalcFunction } from '../../lib/types';
import { add, exact, INPUT, negative, nonzeroFinite, RANGE, ratio, read, shown, stat } from '../stats-descriptive/statisticsNumeric';

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Z-оценка', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const x = read(inputs.x), mean = read(inputs.mean), sd = read(inputs.sd);
  if (![x, mean, sd].every(Number.isFinite)) return fail(INPUT);
  if (!(sd > 0)) return fail('Стандартное отклонение должно быть больше нуля');
  const deviation = add(exact(x), negative(exact(mean))), z = ratio(deviation, exact(sd));
  if (!nonzeroFinite(z, deviation)) return fail(RANGE);
  const position = deviation.coefficient > 0n ? 'выше среднего' : deviation.coefficient < 0n ? 'ниже среднего' : 'равно среднему';
  return { primary: { label: 'Z-оценка', value: stat(z) }, secondary: [{ label: 'Отклонение', value: shown(deviation) }, { label: 'Положение', value: position }] };
};
