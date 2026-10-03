import { measure as displayMeasure, read, finite, INPUT, RANGE, exact, add, times, negative, evaluated, mul, quotient, decimal, dmul, dadd, ceilDecimal, reserveDecimal } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber } from '../../lib/format';

export const compute: CalcFunction = (inputs) => {
  const wallArea = read(inputs.wall_area);
  const boardLen = read(inputs.board_len);
  const boardWidth = read(inputs.board_width);
  const overlap = read(inputs.overlap);
  const waste = read(inputs.waste);
  const fail = (message: string) => ({
    primary: { label: 'Досок', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!finite(wallArea,boardLen,boardWidth,overlap,waste)) return fail(INPUT);
  if (!(wallArea > 0)) return fail('Площадь стены должна быть больше нуля');
  if (!(boardLen > 0)) return fail('Длина доски должна быть больше нуля');
  if (!(boardWidth > 0) || overlap < 0) return fail(INPUT);
  const effWidthD = add(exact(boardWidth),negative(exact(overlap)));
  const effWidth = evaluated(effWidthD);
  if (!(effWidth > 0)) return fail('Нахлёст должен быть меньше ширины доски');
  if (!(waste >= 0) || waste > 50) return fail('Запас должен быть от 0 до 50 %');

  const perBoardD = times(exact(boardLen),effWidthD);
  const needD = times(exact(wallArea),add(exact(100),exact(waste)));
  const need = evaluated(needD,exact(100));
  const effDecimal = dadd(decimal(boardWidth),decimal(-overlap));
  const boards = ceilDecimal(reserveDecimal(decimal(wallArea),waste),dmul(decimal(boardLen),effDecimal));
  const covered = Number.isFinite(boards) ? evaluated(times(exact(boards),perBoardD)) : NaN;
  const running = Number.isFinite(boards) ? mul(boards,boardLen) : NaN;
  const loss = quotient([overlap,100],[boardWidth]);
  if (!finite(effWidth,need,boards,covered,running,loss)) return fail(RANGE);
  const q = (value: number, unit: string) => `${displayMeasure(value)} ${unit}`;

  return {
    primary: { label: 'Досок', value: `${fmtInt(boards)} шт` },
    secondary: [
      { label: 'Полезная ширина доски', value: q(effWidth, 'м') },
      { label: 'Площадь с запасом', value: q(need, 'м²') },
      { label: 'Перекроют', value: q(covered, 'м²') },
      { label: 'Погонных метров доски', value: q(running, 'м') },
      { label: 'Съедает нахлёст', value: q(loss, '%') },
    ],
  };
};
