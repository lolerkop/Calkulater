import type { CalcFunction, CalcResult } from '../types';
import { fmtInt, fmtNumber, toNumber } from '../format';

export const calcWallpaper: CalcFunction = (inputs) => {
  const length = toNumber(inputs.length);
  const width = toNumber(inputs.width);
  const height = toNumber(inputs.height);
  const rollWidth = toNumber(inputs.rollWidth);
  const rollLength = toNumber(inputs.rollLength);
  const windows = Math.max(0, Math.round(toNumber(inputs.windows)));
  const doors = Math.max(0, Math.round(toNumber(inputs.doors)));
  const pattern = toNumber(inputs.pattern); // cm
  const rollPrice = toNumber(inputs.rollPrice);

  if (length <= 0 || width <= 0 || height <= 0 || rollWidth <= 0 || rollLength <= 0) {
    return {
      primary: { label: 'Количество рулонов', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите положительные размеры', accent: 'red' }],
    };
  }

  const perimeter = 2 * (length + width);
  // Усреднённая площадь окон/дверей: окно 1.5 м², дверь 1.8 м²
  const wallArea = perimeter * height - windows * 1.5 - doors * 1.8;

  // Длина одного полотна с учётом раппорта
  const patternM = pattern / 100;
  const stripLength = patternM > 0
    ? Math.ceil(height / patternM) * patternM
    : height;
  // Сколько полотен помещается в одном рулоне
  const stripsPerRoll = Math.floor(rollLength / stripLength);
  // Сколько всего полотен нужно (по ширине стен)
  const effectiveWallWidth = Math.max(0, wallArea) / height;
  const totalStrips = Math.ceil(effectiveWallWidth / rollWidth);
  // Количество рулонов
  const rolls = stripsPerRoll > 0 ? Math.ceil(totalStrips / stripsPerRoll) : Infinity;
  // Запас
  const totalRollArea = rolls * rollWidth * rollLength;
  const reservePct = wallArea > 0 ? Math.max(0, ((totalRollArea - wallArea) / wallArea) * 100) : 0;

  return {
    primary: {
      label: 'Количество рулонов',
      value: isFinite(rolls) ? `${fmtInt(rolls)} шт.` : '—',
    },
    secondary: [
      { label: 'Площадь стен', value: `${fmtNumber(Math.max(0, wallArea), 2)} м²` },
      { label: 'Периметр', value: `${fmtNumber(perimeter, 2)} м` },
      { label: 'Количество полотен', value: `${fmtInt(totalStrips)} шт.` },
      { label: 'Полотен из рулона', value: `${fmtInt(stripsPerRoll)} шт.` },
      { label: 'Запас', value: `${fmtNumber(reservePct, 1)} %` },
      ...(rollPrice > 0 ? [{ label: 'Стоимость обоев', value: `${fmtNumber(rolls * rollPrice, 2)} ₽`, accent: 'green' as const }] : []),
    ],
  };
};
