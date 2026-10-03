import type { CalcFunction } from '../../lib/types';
import { number as readNumber, integer as readInteger, validOutput } from '../../lib/platform/scalarInputDisplay';
import { fmtNumber } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

const MINUTES_IN_HOUR = 60;

export const compute: CalcFunction = (inputs) => {
  const availableMinutes = readNumber(inputs.availableMinutes);
  const demand = readInteger(inputs.demand);
  const actualCycle = readNumber(inputs.actualCycle);
  const fail = (message: string) => ({
    primary: { label: 'Такт производства', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (availableMinutes === null || demand === null || actualCycle === null) return fail('Введите корректные числовые данные');

  if (!(availableMinutes > 0)) return fail('Доступное время смены должно быть больше нуля');
  if (!(demand >= 1) || !Number.isInteger(demand)) return fail('Спрос — целое число единиц, не меньше одной');
  if (!(actualCycle >= 0)) return fail('Фактический цикл не может быть отрицательным');

  const takt = availableMinutes / demand;
  const perHour = MINUTES_IN_HOUR / takt;
  const load = (actualCycle / takt) * 100;
  const capacity = actualCycle > 0 ? availableMinutes / actualCycle : null;
  if (![takt, perHour, load].every(value => validOutput(value)) || !(takt > 0) || (capacity !== null && !validOutput(capacity, true))) return fail('Результат вне допустимого диапазона');

  return {
    primary: { label: 'Такт производства', value: `${formatMeasure(takt, fmtNumber)} мин/шт` },
    secondary: [
      { label: 'Единиц в час', value: formatMeasure(perHour, fmtNumber) },
      ...(capacity !== null ? [
        { label: 'Фактический цикл', value: `${formatMeasure(actualCycle, fmtNumber)} мин` },
        { label: 'Загрузка такта', value: `${formatStatistic(load, fmtNumber)} %` },
        { label: 'Возможный выпуск за смену', value: `${formatMeasure(capacity, fmtNumber)} шт` },
      ] : []),
    ],
  };
};
