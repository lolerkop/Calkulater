import { measure as displayMeasure, read, finite, mode as selectedMode, INPUT, MODE, RANGE, exact, times, evaluated, quotient } from './buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';


export const compute: CalcFunction = (inputs) => {
  const scheme = selectedMode(inputs.scheme, 'uniform', ['uniform','point']);
  const load = read(inputs.load);
  const span = read(inputs.span);
  const e = read(inputs.e);
  const inertia = read(inputs.inertia);
  const fail = (message: string) => ({
    primary: { label: 'Прогиб', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (scheme === null) return fail(MODE);
  if (!finite(load,span,e,inertia)) return fail(INPUT);
  if (scheme !== 'uniform' && scheme !== 'point') return fail('Выберите схему нагружения из списка');
  if (!(load > 0)) return fail('Нагрузка должна быть больше нуля');
  if (!(span > 0)) return fail('Пролёт должен быть больше нуля');
  if (!(e > 0)) return fail('Модуль упругости должен быть больше нуля');
  if (!(inertia > 0)) return fail('Момент инерции сечения должен быть больше нуля');

  const eiD = times(exact(e),exact(inertia),exact(10));
  const ei = evaluated(eiD);
  const numerator = scheme === 'uniform' ? times(exact(5),exact(load),...Array.from({length:4},()=>exact(span)),exact(1e6)) : times(exact(load),...Array.from({length:3},()=>exact(span)),exact(1e6));
  const denominator = times(exact(scheme === 'uniform' ? 384 : 48),eiD);
  const mm = evaluated(numerator,denominator);
  const relative = evaluated(times(exact(span),exact(1000),denominator),numerator);
  const limit = quotient([span,1000],[250]);
  if (!finite(ei,mm,relative,limit)) return fail(RANGE);

  return {
    primary: { label: 'Прогиб', value: `${displayMeasure(mm)} мм` },
    secondary: [
      { label: 'Относительный прогиб', value: `1/${displayMeasure(relative)}` },
      { label: 'Жёсткость EI', value: `${displayMeasure(ei)} Н·м²` },
      { label: 'Пролёт', value: `${displayMeasure(span)} м` },
      { label: 'Предел 1/250', value: `${displayMeasure(limit)} мм` },
    ],
  };
};
