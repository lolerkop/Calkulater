import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';
import { INPUT, RANGE, read, qty } from '../../lib/platform/measurementScalar';
import { add, exact, negative, times } from '../../lib/platform/geometryNumericInput';
import { evaluated } from '../../lib/platform/electronicsNumericInput';

export const compute: CalcFunction = (inputs) => {
  const f = read(inputs.f), vSource = read(inputs.vSource), vObserver = read(inputs.vObserver), c = read(inputs.c);
  const fail = (message: string) => ({ primary: { label: 'Наблюдаемая частота', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (![f, vSource, vObserver, c].every(Number.isFinite)) return fail(INPUT);
  if (f <= 0) return fail('Частота источника должна быть больше нуля');
  if (c <= 0) return fail('Скорость волны должна быть больше нуля');
  if (Math.abs(vSource) >= c) return fail('Модуль скорости источника должен быть меньше скорости волны');
  if (vObserver <= -c) return fail('Наблюдатель должен удаляться медленнее волны');
  const denominator = add(exact(c), negative(exact(vSource)));
  const observed = evaluated(times(exact(f), add(exact(c), exact(vObserver))), denominator);
  const shiftNumerator = add(exact(vObserver), exact(vSource));
  const shift = evaluated(times(exact(f), shiftNumerator), denominator);
  const relative = evaluated(times(exact(100), shiftNumerator), denominator);
  if (![observed, shift, relative].every(Number.isFinite)) return fail(RANGE);
  const percentage = relative !== 0 && Math.abs(relative) < 1e-4 ? qty(relative) : formatStatistic(relative, fmtNumber);
  return {
    primary: { label: 'Наблюдаемая частота', value: `${qty(observed)} Гц` },
    secondary: [
      { label: 'Сдвиг частоты', value: `${qty(shift)} Гц` },
      { label: 'Относительный сдвиг', value: `${percentage} %` },
      { label: 'Скорость волны', value: `${qty(c)} м/с` },
      { label: 'Исходная частота', value: `${qty(f)} Гц` },
    ],
  };
};
