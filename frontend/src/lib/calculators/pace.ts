import type { CalcFunction } from '../types';
import { fmtNumber, toNumber } from '../format';

function fmtPace(secondsPerKm: number): string {
  if (!Number.isFinite(secondsPerKm) || secondsPerKm <= 0) return '—';
  if (secondsPerKm < 0.5) return '<0:01/км';
  const rounded = Math.round(secondsPerKm);
  return `${Math.floor(rounded / 60)}:${String(rounded % 60).padStart(2, '0')}/км`;
}
function fmtTime(totalSeconds: number): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) return '—';
  if (totalSeconds < 0.5) return '<0:01';
  const rounded = Math.round(totalSeconds);
  const h = Math.floor(rounded / 3600);
  const m = Math.floor((rounded % 3600) / 60);
  const s = rounded % 60;
  const pad = (x: number) => String(x).padStart(2, '0');
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}
export const calcPace: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Темп', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const read = (value: unknown, blank = false) => value === undefined || blank && value === '' ? 0 : typeof value === 'number' || typeof value === 'string' && value.trim() !== '' ? toNumber(value, Number.NaN) : Number.NaN;
  const distance = read(inputs.distance);
  const unit = inputs.unit ?? 'km';
  if (unit !== 'km' && unit !== 'mi') return fail('Выберите километры или мили');
  const hours = read(inputs.hours, true), minutes = read(inputs.minutes, true), seconds = read(inputs.seconds, true);
  if (!Number.isFinite(distance) || distance <= 0 || ![hours, minutes, seconds].every((x) => Number.isFinite(x) && x >= 0)) return fail('Введите конечную дистанцию больше нуля и неотрицательные часы, минуты и секунды');
  const distKm = unit === 'mi' ? distance * 1.609344 : distance;
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  const pacePerKm = totalSeconds / distKm;
  const speedKmh = distKm / totalSeconds * 3600;
  const pacePerMile = pacePerKm * 1.609344;
  // Riegel-style power law with the commonly used exponent 1.06. Forecasts
  // are separate from measured average pace and are not validated for walking.
  const forecasts = [5, 10, 21.0975, 42.195].map((d) => totalSeconds * Math.pow(d / distKm, 1.06));
  if (![distKm, totalSeconds, pacePerKm, speedKmh, pacePerMile, ...forecasts].every((x) => Number.isFinite(x) && x > 0)) return fail('Результат выходит за числовой диапазон');
  return {
    primary: { label: 'Темп', value: fmtPace(pacePerKm) },
    secondary: [
      { label: 'Средняя скорость', value: `${speedKmh < 0.005 ? speedKmh.toExponential(2) : fmtNumber(speedKmh, 2)} км/ч` },
      { label: 'Темп на милю', value: fmtPace(pacePerMile).replace('/км', '/миля') },
      ...['Прогноз на 5 км', 'Прогноз на 10 км', 'Прогноз на полумарафон', 'Прогноз на марафон'].map((label, i) => ({ label, value: fmtTime(forecasts[i]) })),
    ],
    table: { title: 'Равномерные отрезки', columns: ['Дистанция', 'Время'], rows: Array.from({ length: Math.min(10, Math.max(1, Math.floor(distKm))) }, (_, i) => [`${i + 1} км`, fmtTime(pacePerKm * (i + 1))]), note: 'Таблица предполагает равномерный темп на всей дистанции.' },
    note: 'Прогнозы используют степенную модель с показателем 1,06. Они не учитывают подготовку, рельеф и погоду; перенос на марафон может существенно завышать скорость.',
  };
};
