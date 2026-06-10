import type { CalcFunction, CalcResult } from '../types';
import { fmtInt, fmtNumber, toNumber, toStr } from '../format';

export const calcPaint: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'manual');
  const areaInput = toNumber(inputs.area);
  const length = toNumber(inputs.length);
  const width = toNumber(inputs.width);
  const height = toNumber(inputs.height);
  const windows = Math.max(0, Math.round(toNumber(inputs.windows)));
  const doors = Math.max(0, Math.round(toNumber(inputs.doors)));
  const coats = Math.max(1, Math.round(toNumber(inputs.coats, 2)));
  const consumption = toNumber(inputs.consumption); // л/м² на 1 слой
  const canVolume = toNumber(inputs.canVolume); // л
  const reserve = Math.max(0, toNumber(inputs.reserve));
  const canPrice = Math.max(0, toNumber(inputs.canPrice));

  const area = mode === 'room'
    ? Math.max(0, 2 * (length + width) * height - windows * 1.5 - doors * 1.8)
    : areaInput;

  if (area <= 0 || consumption <= 0 || canVolume <= 0) {
    return {
      primary: { label: 'Литры краски', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите положительные размеры', accent: 'red' }],
    };
  }

  const baseLiters = area * consumption * coats;
  const liters = baseLiters * (1 + reserve / 100);
  const cans = Math.ceil(liters / canVolume);
  const totalCanLiters = cans * canVolume;
  const reservePct = liters > 0 ? ((totalCanLiters - liters) / liters) * 100 : 0;

  return {
    primary: { label: 'Литры краски', value: `${fmtNumber(liters, 1)} л` },
    secondary: [
      { label: 'Площадь окрашивания', value: `${fmtNumber(area, 2)} м²` },
      { label: 'Слоёв', value: `${coats}` },
      { label: 'Количество банок', value: `${fmtInt(cans)} шт. × ${fmtNumber(canVolume, 1)} л` },
      ...(reserve > 0 ? [{ label: 'Заданный запас', value: `${fmtNumber(reserve, 1)} %` }] : []),
      { label: 'Остаток из-за целых банок', value: `${fmtNumber(reservePct, 1)} %` },
      ...(canPrice > 0 ? [{ label: 'Стоимость краски', value: `${fmtNumber(cans * canPrice, 2)} ₽`, accent: 'green' as const }] : []),
    ],
  };
};
