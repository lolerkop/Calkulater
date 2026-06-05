import type { CalcFunction, CalcResult } from '../types';
import { fmtInt, fmtNumber, toNumber, toStr } from '../format';

export const calcPaint: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'manual');
  const areaInput = toNumber(inputs.area);
  const length = toNumber(inputs.length);
  const width = toNumber(inputs.width);
  const height = toNumber(inputs.height);
  const coats = Math.max(1, Math.round(toNumber(inputs.coats, 2)));
  const consumption = toNumber(inputs.consumption); // л/м² на 1 слой
  const canVolume = toNumber(inputs.canVolume); // л

  const area = mode === 'room'
    ? 2 * (length + width) * height
    : areaInput;

  if (area <= 0 || consumption <= 0 || canVolume <= 0) {
    return {
      primary: { label: 'Литры краски', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите положительные размеры', accent: 'red' }],
    };
  }

  const liters = area * consumption * coats;
  const cans = Math.ceil(liters / canVolume);
  const totalCanLiters = cans * canVolume;
  const reservePct = liters > 0 ? ((totalCanLiters - liters) / liters) * 100 : 0;

  return {
    primary: { label: 'Литры краски', value: `${fmtNumber(liters, 1)} л` },
    secondary: [
      { label: 'Площадь окрашивания', value: `${fmtNumber(area, 2)} м²` },
      { label: 'Слоёв', value: `${coats}` },
      { label: 'Количество банок', value: `${fmtInt(cans)} шт. × ${fmtNumber(canVolume, 1)} л` },
      { label: 'Запас', value: `${fmtNumber(reservePct, 1)} %` },
    ],
  };
};
