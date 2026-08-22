import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Время запекания: постоянная часть плюс норма на килограмм.
//
//   готовка = база + норма × масса
//   отдых   = готовка × доля / 100
//
// Постоянная часть не украшение формулы: она отвечает за прогрев корки и
// начальную стадию, которая почти не зависит от размера куска. Без неё
// маленький кусок получал бы пропорционально заниженное время.
//
// Отдых после духовки считается отдельной строкой, а не прибавкой к готовке:
// это разные стадии, и подавать нужно после второй, а вынимать — после первой.
// Минуты подачи целые: до секунды время запекания никто не выдерживает.
//
// Отличие от разварки: там пересчитывается ВЕС продукта между сырым и готовым
// состоянием, здесь — ВРЕМЯ, и вес только вход.
export const compute: CalcFunction = (inputs) => {
  const weight = toNumber(inputs.weight);
  const perKg = toNumber(inputs.minutes_per_kg);
  const base = toNumber(inputs.base_minutes);
  const restPct = toNumber(inputs.rest_pct);
  const fail = (message: string) => ({
    primary: { label: 'Время в духовке', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(weight > 0)) return fail('Масса должна быть больше нуля');
  if (!(perKg > 0)) return fail('Норма минут на килограмм должна быть больше нуля');
  if (!(base >= 0)) return fail('Постоянная часть не может быть отрицательной');
  if (!(restPct >= 0) || restPct > 50) return fail('Отдых должен быть от 0 до 50 %');

  const cook = base + perKg * weight;
  const rest = (cook * restPct) / 100;
  const hours = Math.floor(cook / 60);
  const minutes = Math.round(cook % 60);
  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: {
      label: 'Время в духовке',
      value: hours > 0 ? `${fmtInt(hours)} ч ${fmtInt(minutes)} мин` : `${fmtInt(minutes)} мин`,
    },
    secondary: [
      { label: 'Минут готовки', value: q(cook, 'мин') },
      { label: 'Отдых после духовки', value: q(rest, 'мин') },
      { label: 'Всего с отдыхом', value: q(cook + rest, 'мин') },
      { label: 'Норма на килограмм', value: q(perKg, 'мин') },
    ],
  };
};
