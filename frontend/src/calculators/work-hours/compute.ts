import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Рабочие часы за период по началу и концу смены.
//
// Считает не рабочие ДНИ календаря, а фактические часы: из длины смены
// вычитается перерыв, остаток умножается на число смен. Ночная смена
// обрабатывается отдельно — если конец меньше начала, смена переходит через
// полночь, и разность становится отрицательной. Прибавление суток здесь не
// поправка на удобство, а единственный способ получить восемь часов из
// «22:00 — 06:00» вместо минус шестнадцати.
//
// Перерыв длиннее смены отклоняется: отрицательное рабочее время не бывает, и
// показать его как «−1 ч» значило бы выдать правдоподобную бессмыслицу.

const MINUTES_IN_DAY = 1440;

export const compute: CalcFunction = (inputs) => {
  const startHour = toNumber(inputs.startHour);
  const startMin = toNumber(inputs.startMin);
  const endHour = toNumber(inputs.endHour);
  const endMin = toNumber(inputs.endMin);
  const breakMin = toNumber(inputs.breakMin);
  const days = toNumber(inputs.days);
  const ratePerHour = toNumber(inputs.ratePerHour);

  const fail = (message: string) => ({
    primary: { label: 'Часов за период', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(days > 0)) return fail('Число смен должно быть больше нуля');
  if (breakMin < 0) return fail('Перерыв не может быть отрицательным');
  if (ratePerHour < 0) return fail('Ставка не может быть отрицательной');

  let span = endHour * 60 + endMin - (startHour * 60 + startMin);
  if (span <= 0) span += MINUTES_IN_DAY;
  const net = span - breakMin;
  if (!(net > 0)) return fail('Перерыв не может быть длиннее смены');

  const hoursPerShift = net / 60;
  const total = hoursPerShift * days;

  return {
    primary: { label: 'Часов за период', value: `${formatMeasure(total, fmtNumber)} ч` },
    secondary: [
      { label: 'Часов в смену', value: `${formatMeasure(hoursPerShift, fmtNumber)} ч` },
      { label: 'В часах и минутах', value: `${Math.floor(net / 60)} ч ${net % 60} мин` },
      { label: 'Длина смены до перерыва', value: `${Math.floor(span / 60)} ч ${span % 60} мин` },
      { label: 'Заработок', value: `${fmtNumber(total * ratePerHour, 2)} ₽` },
    ],
  };
};
