import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Обрешётка: погонные метры, бруски и кубатура.
//
// Считается по площади ската, а не по его длине: шаг обрешётки задаёт, сколько
// погонных метров приходится на квадратный метр, и это отношение — единица,
// делённая на шаг, — выводится отдельной строкой, потому что именно им обычно
// и пользуются при прикидке.
//
// Бруски округляются вверх: доска нужной длины продаётся целиком. Объём
// считается от погонных метров и сечения в миллиметрах — по нему заказывают
// пиломатериал кубометрами.

export const compute: CalcFunction = (inputs) => {
  const area = toNumber(inputs.area);
  const step = toNumber(inputs.step);
  const battenLength = toNumber(inputs.battenLength);
  const sectionWidth = toNumber(inputs.sectionWidth);
  const sectionHeight = toNumber(inputs.sectionHeight);
  const waste = toNumber(inputs.waste);
  const fail = (message: string) => ({
    primary: { label: 'Погонных метров', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(area > 0)) return fail('Площадь крыши должна быть больше нуля');
  if (!(step > 0)) return fail('Шаг обрешётки должен быть больше нуля');
  if (!(battenLength > 0)) return fail('Длина бруска должна быть больше нуля');
  if (!(sectionWidth > 0) || !(sectionHeight > 0)) return fail('Сечение бруска должно быть больше нуля');
  if (waste < 0 || waste > 50) return fail('Запас должен быть от 0 до 50 %');

  const running = (area / step) * (1 + waste / 100);
  const pieces = Math.ceil(running / battenLength);
  const volume = running * (sectionWidth / 1000) * (sectionHeight / 1000);
  const measure = (x: number) => formatMeasure(x, fmtNumber);

  return {
    primary: { label: 'Погонных метров', value: `${measure(running)} м` },
    secondary: [
      { label: 'Брусков', value: fmtNumber(pieces, 0) },
      { label: 'Объём древесины', value: `${measure(volume)} м³` },
      { label: 'Площадь крыши', value: `${measure(area)} м²` },
      { label: 'Шаг обрешётки', value: `${measure(step)} м` },
      { label: 'Метров на квадратный метр', value: measure(1 / step) },
    ],
  };
};
