import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Угол запила для соединения двух планок «на ус»: рез = угол стыка / 2.
//
// Пилу при этом выставляют НЕ на этот угол, а на дополнение до 90°: шкала
// торцовочной пилы отсчитывается от поперечного реза, а не от плоскости
// заготовки. Отсюда и путаница с прямым углом, где оба числа случайно
// совпадают и равны 45° — на любом другом угле они расходятся, и попытка
// запомнить «ставим половину» даёт брак.
//
// Развёрнутый и нулевой угол отвергаются: 180° — это не стык, а прямая планка,
// 0° — сложенные вплотную заготовки. Ни то, ни другое не режут.
const STRAIGHT = 180;
const SQUARE = 90;

export const compute: CalcFunction = (inputs) => {
  const corner = toNumber(inputs.corner);
  const fail = (message: string) => ({
    primary: { label: 'Угол реза', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(corner > 0) || !(corner < STRAIGHT)) return fail('Угол стыка задаётся от 1 до 179 градусов');

  const cut = corner / 2;
  const measure = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Угол реза', value: measure(cut, '°') },
    secondary: [
      { label: 'Угол на пиле от 90°', value: measure(SQUARE - cut, '°') },
      { label: 'Угол стыка', value: measure(corner, '°') },
      { label: 'Сумма двух резов', value: measure(cut * 2, '°') },
    ],
  };
};
