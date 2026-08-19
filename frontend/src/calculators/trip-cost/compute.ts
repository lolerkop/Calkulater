import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber, toStr } from '../../lib/format';

// Во сколько обойдётся поездка.
//
// Считается только то, что действительно тратится в дороге: топливо и платные
// дороги. Амортизация, износ и налоги сюда не входят — их доля на километр
// зависит от машины и пробега, и подставить её значило бы выдать догадку за
// расчёт.
const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

export const compute: CalcFunction = (inputs) => {
  const distance = toNumber(inputs.distance);
  const consumption = toNumber(inputs.consumption);
  const fuelPrice = toNumber(inputs.fuelPrice);
  const tolls = toNumber(inputs.tolls);
  const passengers = Math.round(toNumber(inputs.passengers));
  const roundTrip = toStr(inputs.roundTrip, 'no') === 'yes';

  const fail = (message: string) => ({
    primary: { label: 'Стоимость поездки', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(distance > 0)) return fail('Расстояние должно быть больше нуля');
  if (!(consumption > 0)) return fail('Расход должен быть больше нуля');
  if (!(fuelPrice > 0)) return fail('Цена топлива должна быть больше нуля');
  if (tolls < 0) return fail('Плата за дороги не может быть отрицательной');
  if (!(passengers >= 1)) return fail('Пассажиров должно быть не меньше одного');

  const way = distance * (roundTrip ? 2 : 1);
  const litres = (way / 100) * consumption;
  const fuel = litres * fuelPrice;
  const total = fuel + tolls;

  const secondary = [
    { label: 'Топливо', value: money(fuel) },
    { label: 'Израсходовано литров', value: `${fmtNumber(litres, 2)} л` },
    { label: 'Пройденное расстояние', value: `${fmtNumber(way, 0)} км` },
  ];

  if (tolls > 0) secondary.push({ label: 'Платные дороги', value: money(tolls) });
  if (passengers > 1) {
    secondary.push({ label: 'На человека', value: money(total / passengers) });
    secondary.push({ label: 'Пассажиров', value: fmtInt(passengers) });
  }

  return {
    primary: { label: 'Стоимость поездки', value: money(total) },
    secondary,
  };
};
