import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';
import { exact, ratio, times } from '../../lib/platform/geometryNumericInput';
import { finite, whole } from '../../lib/calculators/dateTimeNumeric';

// Equal clock times deliberately mean a 24-hour shift in this calculator.
export const compute: CalcFunction = (inputs) => {
  const startHour = whole(inputs.startHour, 0, 23);
  const startMin = whole(inputs.startMin, 0, 59);
  const endHour = whole(inputs.endHour, 0, 23);
  const endMin = whole(inputs.endMin, 0, 59);
  const breakMin = whole(inputs.breakMin);
  const days = whole(inputs.days, 1);
  const rate = finite(inputs.ratePerHour);
  const fail = (message: string) => ({ primary: { label: 'Часов за период', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (startHour === null || startMin === null || endHour === null || endMin === null) return fail('Введите целые часы от 0 до 23 и минуты от 0 до 59');
  if (days === null) return fail('Число смен должно быть целым положительным числом');
  if (breakMin === null) return fail('Перерыв должен быть целым неотрицательным числом минут');
  if (rate === null || rate < 0) return fail('Ставка должна быть конечным неотрицательным числом');
  let span = endHour * 60 + endMin - startHour * 60 - startMin;
  if (span <= 0) span += 1440;
  const net = span - breakMin;
  if (net <= 0) return fail('Перерыв не может быть длиннее смены');
  const totalMinutes = BigInt(net) * BigInt(days);
  if (totalMinutes > BigInt(Number.MAX_SAFE_INTEGER)) return fail('Результат выходит за числовой диапазон калькулятора');
  const total = Number(totalMinutes) / 60;
  const pay = ratio(times(exact(Number(totalMinutes)), exact(rate)), exact(60));
  if (!Number.isFinite(pay) || rate > 0 && pay <= 0) return fail('Результат выходит за числовой диапазон калькулятора');
  const scientificMoney = () => { const [mantissa, exponent] = pay.toExponential(3).split('e'); return `${mantissa.replace('.', ',')}·10^${Number(exponent)}`; };
  const money = pay > 0 && pay < 0.005 ? scientificMoney() : fmtNumber(pay, 2);
  return { primary: { label: 'Часов за период', value: `${formatMeasure(total, fmtNumber)} ч` }, secondary: [
    { label: 'Часов в смену', value: `${formatMeasure(net / 60, fmtNumber)} ч` },
    { label: 'В часах и минутах', value: `${Math.floor(net / 60)} ч ${net % 60} мин` },
    { label: 'Длина смены до перерыва', value: `${Math.floor(span / 60)} ч ${span % 60} мин` },
    { label: 'Заработок', value: `${money} ден. ед.` },
  ] };
};
