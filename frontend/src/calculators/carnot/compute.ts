import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';
import { INPUT, RANGE, read, qty } from '../../lib/platform/measurementScalar';
import { add, exact, negative, times } from '../../lib/platform/geometryNumericInput';
import { evaluated } from '../../lib/platform/electronicsNumericInput';

export const compute: CalcFunction = (inputs) => {
  const tHot = read(inputs.tHot), tCold = read(inputs.tCold);
  const fail = (message: string) => ({ primary: { label: 'Предельный КПД', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (![tHot, tCold].every(Number.isFinite)) return fail(INPUT);
  if (tHot <= 0) return fail('Температура нагревателя должна быть больше нуля кельвинов');
  if (tCold <= 0) return fail('Температура холодильника должна быть больше нуля кельвинов');
  if (tCold >= tHot) return fail('Холодильник не может быть теплее нагревателя');
  const difference = add(exact(tHot), negative(exact(tCold)));
  const percent = evaluated(times(exact(100), difference), exact(tHot));
  const useful = evaluated(times(exact(1000), difference), exact(tHot));
  const discarded = evaluated(times(exact(1000), exact(tCold)), exact(tHot));
  const delta = evaluated(difference), fraction = evaluated(exact(tCold), exact(tHot));
  if (![percent, useful, discarded, delta, fraction].every(Number.isFinite)) return fail(RANGE);
  const percentage = percent < 1e-4 ? qty(percent) : formatStatistic(percent, fmtNumber);
  return {
    primary: { label: 'Предельный КПД', value: `${percentage} %` },
    secondary: [
      { label: 'Полезная работа из 1000 Дж тепла', value: `${qty(useful)} Дж` },
      { label: 'Отдано холодильнику', value: `${qty(discarded)} Дж` },
      { label: 'Перепад температур', value: `${qty(delta)} К` },
      { label: 'Отношение температур', value: qty(fraction) },
    ],
  };
};
