import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Скорость потока в трубе: v = Q / S.
//
// Диаметр берётся ВНУТРЕННИЙ: наружный отличается на две толщины стенки, и
// у полипропилена эта разница доходит до трети сечения. Площадь входит
// квадратом, поэтому ошибка в диаметре обходится вдвое дороже ошибки в расходе.
//
// Расход в кубометрах в час — так его задают насосы и счётчики; литры в секунду
// и в минуту выведены отдельными строками, потому что в разных таблицах
// подбора встречаются все три.
const SECONDS_IN_HOUR = 3600;
const MINUTES_IN_HOUR = 60;
const L_IN_M3 = 1000;
const MM_IN_M = 1000;
const MM2_IN_M2 = 1e6;

export const compute: CalcFunction = (inputs) => {
  const flow = toNumber(inputs.flow);
  const diameter = toNumber(inputs.diameter);
  const fail = (message: string) => ({
    primary: { label: 'Скорость потока', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(flow > 0)) return fail('Расход должен быть больше нуля');
  if (!(diameter > 0)) return fail('Внутренний диаметр должен быть больше нуля');

  const area = (Math.PI * Math.pow(diameter / MM_IN_M, 2)) / 4;

  return {
    primary: { label: 'Скорость потока', value: `${formatMeasure(flow / SECONDS_IN_HOUR / area, fmtNumber)} м/с` },
    secondary: [
      { label: 'Площадь сечения', value: `${formatMeasure(area * MM2_IN_M2, fmtNumber)} мм²` },
      { label: 'Расход в литрах в секунду', value: `${formatMeasure((flow * L_IN_M3) / SECONDS_IN_HOUR, fmtNumber)} л/с` },
      { label: 'Расход в литрах в минуту', value: `${formatMeasure((flow * L_IN_M3) / MINUTES_IN_HOUR, fmtNumber)} л/мин` },
      { label: 'Внутренний диаметр', value: `${formatMeasure(diameter, fmtNumber)} мм` },
    ],
  };
};
