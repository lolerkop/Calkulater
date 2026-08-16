import type { CalcFunction } from '../types';
import { fmtInt, fmtNumber, toNumber, toStr } from '../format';

// Округление вверх с допуском на двоичную погрешность: 10 × 5 × 18 × 1.1 даёт
// 990.0000000000001, и обычный Math.ceil превратил бы это в лишний килограмм,
// а на границе — и в лишний мешок.
function ceilWithTolerance(value: number): number {
  return Math.ceil(Math.round(value * 1e9) / 1e9);
}

// Калькулятор стяжки пола: объём раствора и количество сухой смеси.
// Все свойства материала вводит пользователь — расход и вес мешка берутся
// с упаковки, поэтому расчёт не зависит от конкретной марки смеси.
export const calcScreed: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'room');
  const length = toNumber(inputs.length);
  const width = toNumber(inputs.width);
  const manualArea = toNumber(inputs.manualArea);
  const thickness = toNumber(inputs.thickness); // см
  const mixConsumption = toNumber(inputs.mixConsumption, 18); // кг/м² на 1 см слоя
  const bagWeight = toNumber(inputs.bagWeight, 25); // кг
  const reserve = toNumber(inputs.reserve);
  const bagPrice = toNumber(inputs.bagPrice);

  const area = mode === 'room' ? length * width : manualArea;

  if (area <= 0 || thickness <= 0) {
    return {
      primary: { label: 'Объём раствора', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите положительные размеры и толщину', accent: 'red' }],
    };
  }

  if (bagWeight <= 0) {
    return {
      primary: { label: 'Объём раствора', value: '—' },
      secondary: [{ label: 'Ошибка', value: 'Вес мешка должен быть больше нуля', accent: 'red' }],
    };
  }

  const reserveFactor = 1 + Math.max(0, reserve) / 100;
  const volume = area * (thickness / 100) * reserveFactor;
  const dryMixKg = area * thickness * Math.max(0, mixConsumption) * reserveFactor;
  const bags = ceilWithTolerance(dryMixKg / bagWeight);
  const totalPrice = bags * Math.max(0, bagPrice);

  return {
    primary: { label: 'Объём раствора', value: `${fmtNumber(volume, 3)} м³` },
    secondary: [
      { label: 'Площадь', value: `${fmtNumber(area, 2)} м²` },
      { label: 'Толщина слоя', value: `${fmtNumber(thickness, 1)} см` },
      { label: 'Сухая смесь', value: `${fmtInt(ceilWithTolerance(dryMixKg))} кг` },
      { label: 'Мешков', value: `${fmtInt(bags)} шт.`, accent: 'green' },
      ...(bagPrice > 0 ? [{ label: 'Стоимость смеси', value: `${fmtNumber(totalPrice, 2)} ₽` }] : []),
    ],
  };
};
