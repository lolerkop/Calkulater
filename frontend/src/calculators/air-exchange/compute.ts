import { measure as displayMeasure, read, finite, INPUT, RANGE, mul, quotient } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';


export const compute: CalcFunction = (inputs) => {
  const area = read(inputs.area);
  const height = read(inputs.height);
  const ach = read(inputs.ach);
  const fail = (message: string) => ({
    primary: { label: 'Требуемый расход воздуха', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!finite(area,height,ach)) return fail(INPUT);
  if (!(area > 0)) return fail('Площадь помещения должна быть больше нуля');
  if (!(height > 0)) return fail('Высота потолка должна быть больше нуля');
  if (!(ach > 0)) return fail('Кратность воздухообмена должна быть больше нуля');

  const volume = mul(area,height);
  const flow = mul(area,height,ach);
  const ls = quotient([area,height,ach],[3.6]);
  const day = mul(ach,24);
  const minute = quotient([area,height,ach],[60]);
  if (!finite(volume,flow,ls,day,minute)) return fail(RANGE);

  return {
    primary: { label: 'Требуемый расход воздуха', value: `${displayMeasure(flow)} м³/ч` },
    secondary: [
      { label: 'Объём помещения', value: `${displayMeasure(volume)} м³` },
      { label: 'В литрах в секунду', value: `${displayMeasure(ls)} л/с` },
      { label: 'Смен воздуха в сутки', value: displayMeasure(day) },
      { label: 'В кубометрах в минуту', value: `${displayMeasure(minute)} м³/мин` },
    ],
  };
};
