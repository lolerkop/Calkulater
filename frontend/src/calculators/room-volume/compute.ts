import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Объём помещения. Два режима отличаются тем, что известно о поле:
//   dimensions — длина и ширина, поэтому считаются ещё периметр и стены;
//   area       — только площадь, и стены посчитать не из чего.
//
//   объём       = площадь пола × высота
//   периметр    = 2 × (длина + ширина)
//   площадь стен = периметр × высота
//
// Нулевая или отрицательная высота либо площадь делают объём бессмысленным,
// поэтому проверяются отдельно, а не одним общим условием.
export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'dimensions');
  const height = toNumber(inputs.height);
  const length = toNumber(inputs.length);
  const width = toNumber(inputs.width);
  const areaInput = toNumber(inputs.area);

  const fail = (reason: string) => ({
    primary: { label: 'Объём помещения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: reason, accent: 'red' as const }],
  });
  if (height <= 0) return fail('Высота должна быть больше нуля');

  const byDimensions = mode === 'dimensions';
  if (byDimensions && (length <= 0 || width <= 0)) return fail('Длина и ширина должны быть больше нуля');
  if (!byDimensions && areaInput <= 0) return fail('Площадь должна быть больше нуля');

  const floor = byDimensions ? length * width : areaInput;
  const volume = floor * height;

  return {
    primary: { label: 'Объём помещения', value: `${fmtNumber(volume, 2)} м³` },
    secondary: [
      { label: 'Площадь пола', value: `${fmtNumber(floor, 2)} м²` },
      { label: 'Высота', value: `${fmtNumber(height, 2)} м` },
      ...(byDimensions
        ? [
            { label: 'Периметр', value: `${fmtNumber(2 * (length + width), 2)} м` },
            { label: 'Площадь стен', value: `${fmtNumber(2 * (length + width) * height, 2)} м²` },
          ]
        : []),
    ],
  };
};
