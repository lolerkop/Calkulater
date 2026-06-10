import type { CalcFunction, CalcResult } from '../types';
import { fmtInt, fmtNumber, toNumber, toStr } from '../format';

export const calcTile: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'room');
  const length = toNumber(inputs.length);
  const width = toNumber(inputs.width);
  const manualArea = toNumber(inputs.manualArea);
  const tileLength = toNumber(inputs.tileLength); // cm
  const tileWidth = toNumber(inputs.tileWidth); // cm
  const packArea = toNumber(inputs.packArea);
  const reserve = toNumber(inputs.reserve);
  const glueConsumption = toNumber(inputs.glueConsumption, 5);
  const packPrice = toNumber(inputs.packPrice);

  const area = mode === 'room' ? length * width : manualArea;

  if (area <= 0 || tileLength <= 0 || tileWidth <= 0 || packArea <= 0) {
    return {
      primary: { label: 'Количество плиток', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите положительные размеры', accent: 'red' }],
    };
  }

  const areaWithReserve = area * (1 + reserve / 100);
  const tileAreaM2 = (tileLength / 100) * (tileWidth / 100);
  const tiles = Math.ceil(areaWithReserve / tileAreaM2);
  const packs = Math.ceil(areaWithReserve / packArea);
  const glueKg = areaWithReserve * Math.max(0, glueConsumption);
  const totalPrice = packs * Math.max(0, packPrice);

  return {
    primary: { label: 'Количество плиток', value: `${fmtInt(tiles)} шт.` },
    secondary: [
      { label: 'Площадь', value: `${fmtNumber(area, 2)} м²` },
      { label: 'Площадь с запасом', value: `${fmtNumber(areaWithReserve, 2)} м²` },
      { label: 'Количество упаковок', value: `${fmtInt(packs)} шт.` },
      { label: 'Примерный расход клея', value: `${fmtInt(glueKg)} кг` },
      ...(packPrice > 0 ? [{ label: 'Стоимость плитки', value: `${fmtNumber(totalPrice, 2)} ₽`, accent: 'green' as const }] : []),
    ],
  };
};
