import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Линолеум: раскрой рулона по комнате.
//
// У рулонного покрытия своя математика, не такая, как у ламината: покупается
// не площадь, а погонные метры рулона фиксированной ширины. Полосы кладутся
// вдоль длины комнаты, и их число — ширина комнаты, делённая на ширину рулона,
// округлённая вверх. Отсюда же берутся швы: их на единицу меньше числа полос,
// и комната шириной ровно в рулон обходится без них.
//
// Обрезки показаны отдельно: разница между купленным и уложенным — это то,
// что останется лежать в углу, и знать её лучше заранее.

export const compute: CalcFunction = (inputs) => {
  const length = toNumber(inputs.length);
  const width = toNumber(inputs.width);
  const rollWidth = toNumber(inputs.rollWidth);
  const reserve = toNumber(inputs.reserve);
  const fail = (message: string) => ({
    primary: { label: 'Погонных метров', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(length > 0) || !(width > 0)) return fail('Размеры комнаты должны быть больше нуля');
  if (!(rollWidth > 0)) return fail('Ширина рулона должна быть больше нуля');
  if (reserve < 0 || reserve > 50) return fail('Запас должен быть от 0 до 50 %');

  const strips = Math.ceil(width / rollWidth);
  const running = strips * length * (1 + reserve / 100);
  const bought = running * rollWidth;
  const area = length * width;
  const measure = (x: number) => formatMeasure(x, fmtNumber);

  return {
    primary: { label: 'Погонных метров', value: `${measure(running)} м` },
    secondary: [
      { label: 'Полос', value: fmtNumber(strips, 0) },
      { label: 'Площадь пола', value: `${measure(area)} м²` },
      { label: 'Куплено', value: `${measure(bought)} м²` },
      { label: 'Обрезки', value: `${measure(bought - area)} м²` },
      { label: 'Швов', value: fmtNumber(Math.max(0, strips - 1), 0) },
    ],
  };
};
