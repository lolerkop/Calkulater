import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';
import { ceilUnits } from '../../lib/rounding';

// Плинтус по периметру комнаты за вычетом дверных проёмов.
//
// Считать «по площади» здесь бессмысленно: плинтус живёт по периметру, и
// главная ошибка — забыть вычесть проёмы, а потом купить лишнюю планку. Вторая
// ошибка обратная: вычесть проёмы и забыть про запас на подрезку углов, где
// каждая планка теряет длину на косой рез.
//
// Планки считаются вверх целыми: половину планки в магазине не продают.
const PERCENT = 100;

export const compute: CalcFunction = (inputs) => {
  const length = toNumber(inputs.length);
  const width = toNumber(inputs.width);
  const doors = toNumber(inputs.doors);
  const doorWidth = toNumber(inputs.doorWidth);
  const plank = toNumber(inputs.plank);
  const waste = toNumber(inputs.waste);
  const fail = (message: string) => ({
    primary: { label: 'Длина с запасом', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(length > 0)) return fail('Длина комнаты должна быть больше нуля');
  if (!(width > 0)) return fail('Ширина комнаты должна быть больше нуля');
  if (!(doors >= 0)) return fail('Число проёмов не может быть отрицательным');
  if (!(doorWidth >= 0)) return fail('Ширина проёма не может быть отрицательной');
  if (!(plank > 0)) return fail('Длина планки должна быть больше нуля');
  if (!(waste >= 0)) return fail('Запас не может быть отрицательным');

  const perimeter = 2 * (length + width);
  const openings = doors * doorWidth;
  const net = perimeter - openings;
  if (!(net > 0)) return fail('Проёмы длиннее периметра — проверьте данные');

  const withWaste = net * (1 + waste / PERCENT);
  const planks = ceilUnits(withWaste / plank);

  return {
    primary: { label: 'Длина с запасом', value: `${formatMeasure(withWaste, fmtNumber)} м` },
    secondary: [
      { label: 'Периметр комнаты', value: `${formatMeasure(perimeter, fmtNumber)} м` },
      { label: 'Вычет на проёмы', value: `${formatMeasure(openings, fmtNumber)} м` },
      { label: 'Планок', value: `${planks} шт` },
      { label: 'Куплено с запасом', value: `${formatMeasure(planks * plank, fmtNumber)} м` },
    ],
  };
};
