import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';
import { ceilUnits } from '../../lib/rounding';

// Ткань на шторы: ширина карниза, умноженная на коэффициент сборки, делится на
// ширину полотна и округляется вверх до целых полотнищ.
//
// Коэффициент сборки — то, во сколько раз ткани берут больше ширины карниза:
// от полутора при плоской подвеске до трёх у густой сборки. Именно он, а не
// длина, определяет расход и вид готовой шторы.
//
// Округление вверх идёт через выпущенный ceilUnits: обычный Math.ceil на
// двоичном хвосте вида 2.0000000000000004 добавил бы лишнее полотнище.
const CM_IN_M = 100;

export const compute: CalcFunction = (inputs) => {
  const windowWidth = toNumber(inputs.windowWidth);
  const fullness = toNumber(inputs.fullness);
  const fabricWidth = toNumber(inputs.fabricWidth);
  const height = toNumber(inputs.height);
  const hem = toNumber(inputs.hem);
  const fail = (message: string) => ({
    primary: { label: 'Ткани потребуется', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(windowWidth > 0)) return fail('Ширина карниза должна быть больше нуля');
  if (!(fullness > 0)) return fail('Коэффициент сборки должен быть больше нуля');
  if (!(fabricWidth > 0)) return fail('Ширина полотна должна быть больше нуля');
  if (!(height > 0)) return fail('Готовая высота должна быть больше нуля');
  if (!(hem >= 0)) return fail('Припуск не может быть отрицательным');

  const needed = windowWidth * fullness;
  const panels = ceilUnits(needed / fabricWidth);
  const cut = height + hem;

  return {
    primary: { label: 'Ткани потребуется', value: `${formatMeasure((panels * cut) / CM_IN_M, fmtNumber)} м` },
    secondary: [
      { label: 'Полотнищ', value: `${formatMeasure(panels, fmtNumber)} шт` },
      { label: 'Ширина в сборке', value: `${formatMeasure(needed, fmtNumber)} см` },
      { label: 'Длина отреза', value: `${formatMeasure(cut, fmtNumber)} см` },
      { label: 'Коэффициент сборки', value: formatMeasure(fullness, fmtNumber) },
    ],
  };
};
