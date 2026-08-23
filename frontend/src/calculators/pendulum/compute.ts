import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Период математического маятника: T = 2π√(L/g).
//
// В формуле нет массы — и это главное, что в ней удивляет: тяжёлый и лёгкий
// грузы на одинаковом подвесе качаются с одинаковым периодом. Зато есть g,
// поэтому маятник и служил первым точным прибором для его измерения.
//
// Период растёт как КОРЕНЬ длины: чтобы удвоить период, подвес нужно удлинить
// вчетверо. Отсюда и длина секундного маятника — около 25 сантиметров, а не
// метр, как часто думают: метровый качается почти две секунды.
//
// Формула справедлива для малых отклонений: при размахе больше примерно 15°
// период заметно растёт, и линейное приближение перестаёт работать.
const MINUTES = 60;

export const compute: CalcFunction = (inputs) => {
  const length = toNumber(inputs.length);
  const g = toNumber(inputs.g);
  const fail = (message: string) => ({
    primary: { label: 'Период колебаний', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(length > 0)) return fail('Длина подвеса должна быть больше нуля');
  if (!(g > 0)) return fail('Ускорение свободного падения должно быть больше нуля');

  const period = 2 * Math.PI * Math.sqrt(length / g);

  return {
    primary: { label: 'Период колебаний', value: `${formatMeasure(period, fmtNumber)} с` },
    secondary: [
      { label: 'Частота', value: `${formatMeasure(1 / period, fmtNumber)} Гц` },
      { label: 'Колебаний в минуту', value: formatMeasure(MINUTES / period, fmtNumber) },
      { label: 'Длина для периода 1 с', value: `${formatMeasure(g / (4 * Math.PI * Math.PI), fmtNumber)} м` },
      { label: 'Ускорение свободного падения', value: `${formatMeasure(g, fmtNumber)} м/с²` },
    ],
  };
};
