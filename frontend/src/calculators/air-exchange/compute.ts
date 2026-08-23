import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Потребный расход воздуха: объём помещения, умноженный на кратность
// воздухообмена.
//
// Кратность — это сколько раз за час весь воздух помещения заменяется целиком.
// Она задаётся полем, а не зашита таблицей: у жилой комнаты, кухни, санузла,
// цеха и лаборатории значения различаются в разы, и подставлять чужую норму
// опаснее, чем спросить. Тот же приём выпущен у расчёта мощности отопления,
// где норма ватт на кубометр тоже вынесена в поле.
const M3H_IN_LS = 3.6;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

export const compute: CalcFunction = (inputs) => {
  const area = toNumber(inputs.area);
  const height = toNumber(inputs.height);
  const ach = toNumber(inputs.ach);
  const fail = (message: string) => ({
    primary: { label: 'Требуемый расход воздуха', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(area > 0)) return fail('Площадь помещения должна быть больше нуля');
  if (!(height > 0)) return fail('Высота потолка должна быть больше нуля');
  if (!(ach > 0)) return fail('Кратность воздухообмена должна быть больше нуля');

  const volume = area * height;
  const flow = volume * ach;

  return {
    primary: { label: 'Требуемый расход воздуха', value: `${formatMeasure(flow, fmtNumber)} м³/ч` },
    secondary: [
      { label: 'Объём помещения', value: `${formatMeasure(volume, fmtNumber)} м³` },
      { label: 'В литрах в секунду', value: `${formatMeasure(flow / M3H_IN_LS, fmtNumber)} л/с` },
      { label: 'Смен воздуха в сутки', value: formatMeasure(ach * HOURS_IN_DAY, fmtNumber) },
      { label: 'В кубометрах в минуту', value: `${formatMeasure(flow / MINUTES_IN_HOUR, fmtNumber)} м³/мин` },
    ],
  };
};
