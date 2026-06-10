import type { CalcFunction, CalcResult } from '../types';
import { fmtInt, fmtNumber, toNumber } from '../format';

export function laminatePacks(length: number, width: number, packArea: number, reservePct: number): {
  area: number;
  areaWithReserve: number;
  packs: number;
} {
  const area = length * width;
  const areaWithReserve = area * (1 + reservePct / 100);
  const packs = packArea > 0 ? Math.ceil(areaWithReserve / packArea) : 0;
  return { area, areaWithReserve, packs };
}

export const calcLaminate: CalcFunction = (inputs) => {
  const length = toNumber(inputs.length);
  const width = toNumber(inputs.width);
  const packArea = toNumber(inputs.packArea);
  const reserve = toNumber(inputs.reserve);
  const packPrice = Math.max(0, toNumber(inputs.packPrice));
  const underlayPrice = Math.max(0, toNumber(inputs.underlayPrice));

  if (length <= 0 || width <= 0 || packArea <= 0) {
    return {
      primary: { label: 'Количество упаковок', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите положительные размеры', accent: 'red' }],
    };
  }

  const { area, areaWithReserve, packs } = laminatePacks(length, width, packArea, reserve);

  return {
    primary: { label: 'Количество упаковок', value: `${fmtInt(packs)} шт.` },
    secondary: [
      { label: 'Площадь пола', value: `${fmtNumber(area, 2)} м²` },
      { label: 'Площадь с запасом', value: `${fmtNumber(areaWithReserve, 2)} м²` },
      { label: 'Площадь упаковки', value: `${fmtNumber(packArea, 2)} м²` },
      { label: 'Запас', value: `${fmtNumber(reserve, 0)} %` },
      ...(packPrice > 0 || underlayPrice > 0
        ? [{
            label: 'Ориентировочная стоимость',
            value: `${fmtNumber(packs * packPrice + area * underlayPrice, 2)} ₽`,
            accent: 'green' as const,
          }]
        : []),
    ],
  };
};
