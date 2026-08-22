import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';
import { ceilUnits } from '../../lib/rounding';

// Обшивка стены доской внахлёст.
//
//   полезная ширина = ширина − нахлёст
//   нужная площадь  = площадь стены × (1 + запас/100)
//   досок           = ⌈нужная площадь / (длина × полезная ширина)⌉
//
// Нахлёст съедает часть каждой доски, и именно поэтому расчёт «площадь делить
// на площадь доски» занижает количество: доска шириной 190 мм с нахлёстом 20 мм
// закрывает 170. Отличие от расчёта досок кубометрами: та страница считает
// ОБЪЁМ пиломатериала и его цену, здесь считается ПОКРЫТИЕ площади с учётом
// перекрытия, и ответ — штуки, а не кубометры.
//
// Доски — целые предметы, поэтому остаток округляется вверх; двоичный шум у
// целого при этом не превращается в лишнюю доску.
export const compute: CalcFunction = (inputs) => {
  const wallArea = toNumber(inputs.wall_area);
  const boardLen = toNumber(inputs.board_len);
  const boardWidth = toNumber(inputs.board_width);
  const overlap = toNumber(inputs.overlap);
  const waste = toNumber(inputs.waste);
  const fail = (message: string) => ({
    primary: { label: 'Досок', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(wallArea > 0)) return fail('Площадь стены должна быть больше нуля');
  if (!(boardLen > 0)) return fail('Длина доски должна быть больше нуля');
  const effWidth = boardWidth - overlap;
  if (!(effWidth > 0)) return fail('Нахлёст должен быть меньше ширины доски');
  if (!(waste >= 0) || waste > 50) return fail('Запас должен быть от 0 до 50 %');

  const perBoard = boardLen * effWidth;
  const need = wallArea * (1 + waste / 100);
  const boards = ceilUnits(need / perBoard);
  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Досок', value: `${fmtInt(boards)} шт` },
    secondary: [
      { label: 'Полезная ширина доски', value: q(effWidth, 'м') },
      { label: 'Площадь с запасом', value: q(need, 'м²') },
      { label: 'Перекроют', value: q(boards * perBoard, 'м²') },
      { label: 'Погонных метров доски', value: q(boards * boardLen, 'м') },
      { label: 'Съедает нахлёст', value: q(overlap / boardWidth * 100, '%') },
    ],
  };
};
