import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

// Такт производства: доступное время смены, делённое на спрос за эту же смену.
//
// Такт — это не производительность и не скорость линии, а ритм, который задаёт
// заказчик: сколько времени можно тратить на одну единицу, чтобы успевать.
// Поэтому загрузка считается как отношение ФАКТИЧЕСКОГО цикла к такту: больше
// ста процентов означает, что линия не успевает, а не что она перерабатывает.
const MINUTES_IN_HOUR = 60;

export const compute: CalcFunction = (inputs) => {
  const availableMinutes = toNumber(inputs.availableMinutes);
  const demand = toNumber(inputs.demand);
  const actualCycle = toNumber(inputs.actualCycle);
  const fail = (message: string) => ({
    primary: { label: 'Такт производства', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(availableMinutes > 0)) return fail('Доступное время смены должно быть больше нуля');
  if (!(demand >= 1) || !Number.isInteger(demand)) return fail('Спрос — целое число единиц, не меньше одной');
  if (!(actualCycle >= 0)) return fail('Фактический цикл не может быть отрицательным');

  const takt = availableMinutes / demand;

  return {
    primary: { label: 'Такт производства', value: `${formatMeasure(takt, fmtNumber)} мин/шт` },
    secondary: [
      { label: 'Единиц в час', value: formatMeasure(MINUTES_IN_HOUR / takt, fmtNumber) },
      { label: 'Фактический цикл', value: `${formatMeasure(actualCycle, fmtNumber)} мин` },
      { label: 'Загрузка такта', value: `${formatStatistic((actualCycle / takt) * 100, fmtNumber)} %` },
      {
        label: 'Возможный выпуск за смену',
        value: `${formatMeasure(actualCycle > 0 ? availableMinutes / actualCycle : 0, fmtNumber)} шт`,
      },
    ],
  };
};
