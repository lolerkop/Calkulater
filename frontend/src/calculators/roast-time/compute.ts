import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// User-selected linear recipe schedule; time does not establish safe doneness.
export const compute: CalcFunction = (inputs) => {
  const weight = toNumber(inputs.weight);
  const perKg = toNumber(inputs.minutes_per_kg);
  const base = toNumber(inputs.base_minutes);
  const restPct = toNumber(inputs.rest_pct);
  const fail = (message: string) => ({
    primary: { label: 'Время в духовке', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (weight === null || perKg === null || base === null || restPct === null) return fail('Введите корректные числовые данные');
  if (!(weight > 0)) return fail('Масса должна быть больше нуля');
  if (!(perKg > 0)) return fail('Норма минут на килограмм должна быть больше нуля');
  if (!(base >= 0)) return fail('Постоянная часть не может быть отрицательной');
  if (!(restPct >= 0) || restPct > 50) return fail('Отдых должен быть от 0 до 50 %');

  const cook = base + perKg * weight;
  const rest = (cook * restPct) / 100;
  const rounded = Math.round(cook);
  if (!validOutput(cook, true) || !validOutput(rest, restPct > 0) || !validOutput(cook + rest, true) || !Number.isSafeInteger(rounded)) return fail('Результат вне допустимого диапазона');
  const hours = Math.floor(rounded / 60);
  const minutes = rounded % 60;
  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    note: 'Линейный расчёт планирует время по заданному рецепту; безопасная готовность проверяется термометром для конкретного продукта. Процент отдыха не заменяет правила безопасности.',
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
