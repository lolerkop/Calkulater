import type { CalcFunction, CalcResult } from '../types';
import { fmtNumber, toNumber, toStr } from '../format';

function fmtPace(secondsPerKm: number): string {
  if (!isFinite(secondsPerKm) || secondsPerKm <= 0) return '—';
  const rounded = Math.round(secondsPerKm);
  const m = Math.floor(rounded / 60);
  const s = rounded % 60;
  return `${m}:${String(s).padStart(2, '0')}/км`;
}

function fmtTime(totalSeconds: number): string {
  if (!isFinite(totalSeconds) || totalSeconds <= 0) return '—';
  const rounded = Math.round(totalSeconds);
  const h = Math.floor(rounded / 3600);
  const m = Math.floor((rounded % 3600) / 60);
  const s = rounded % 60;
  const pad = (x: number) => String(x).padStart(2, '0');
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

export const calcPace: CalcFunction = (inputs) => {
  const distance = toNumber(inputs.distance);
  const unit = toStr(inputs.unit, 'km');
  const hours = toNumber(inputs.hours);
  const minutes = toNumber(inputs.minutes);
  const seconds = toNumber(inputs.seconds);

  const distKm = unit === 'mi' ? distance * 1.609344 : distance;
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (distKm <= 0 || totalSeconds <= 0) {
    return {
      primary: { label: 'Темп', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите дистанцию и время', accent: 'red' }],
    };
  }

  const pacePerKm = totalSeconds / distKm; // seconds per km
  const speedKmh = (distKm / totalSeconds) * 3600;
  const pacePerMile = pacePerKm * 1.609344;

  // Riegel formula: T2 = T1 * (D2/D1)^1.06
  const riegel = (d2: number) => totalSeconds * Math.pow(d2 / distKm, 1.06);

  return {
    primary: { label: 'Темп', value: fmtPace(pacePerKm) },
    secondary: [
      { label: 'Средняя скорость', value: `${fmtNumber(speedKmh, 2)} км/ч` },
      { label: 'Темп на милю', value: fmtPace(pacePerMile).replace('/км', '/миля') },
      { label: 'Прогноз на 5 км', value: fmtTime(riegel(5)) },
      { label: 'Прогноз на 10 км', value: fmtTime(riegel(10)) },
      { label: 'Прогноз на полумарафон', value: fmtTime(riegel(21.0975)) },
      { label: 'Прогноз на марафон', value: fmtTime(riegel(42.195)) },
    ],
    table: {
      title: 'Равномерные отрезки',
      columns: ['Дистанция', 'Время'],
      rows: Array.from({ length: Math.min(10, Math.max(1, Math.floor(distKm))) }, (_, index) => {
        const split = index + 1;
        return [`${split} км`, fmtTime(pacePerKm * split)];
      }),
      note: 'Таблица предполагает равномерный темп на всей дистанции.',
    },
  };
};
