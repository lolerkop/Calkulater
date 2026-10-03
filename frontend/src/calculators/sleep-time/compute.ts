import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { clock, enumValue, whole, wrapDay } from '../../lib/calculators/dateTimeNumeric';

// A declared 90-minute arithmetic model, without predicting physiological sleep stages.
const CYCLE_MINUTES = 90;
export const compute: CalcFunction = (inputs) => {
  const mode = enumValue(inputs.mode, ['bedtime', 'wake'], 'bedtime');
  const fail = (message: string) => ({ primary: { label: mode === 'wake' ? 'Когда лечь' : 'Когда вставать', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode === null) return fail('Выберите режим расчёта');
  const hour = whole(inputs.hour, 0, 23);
  const minute = whole(inputs.minute, 0, 59);
  const cycles = whole(inputs.cycles, 1, 12);
  const latency = whole(inputs.fallAsleep);
  if (hour === null) return fail('Час должен быть целым числом от 0 до 23');
  if (minute === null) return fail('Минуты должны быть целым числом от 0 до 59');
  if (cycles === null) return fail('Циклов должно быть целое число от 1 до 12');
  if (latency === null) return fail('Время на засыпание должно быть целым неотрицательным числом минут');
  const total = cycles * CYCLE_MINUTES + latency;
  if (!Number.isSafeInteger(total)) return fail('Результат выходит за числовой диапазон калькулятора');
  const base = hour * 60 + minute;
  // Reduce before adding the clock, keeping the full safe-integer range exact.
  const target = wrapDay(base + (mode === 'wake' ? -1 : 1) * (total % 1440));
  return { primary: { label: mode === 'wake' ? 'Когда лечь' : 'Когда вставать', value: clock(target) }, secondary: [
    { label: 'Всего в постели', value: `${fmtNumber(total, 0)} мин` },
    { label: 'Чистый сон', value: `${fmtNumber(cycles * CYCLE_MINUTES, 0)} мин` },
    { label: 'Циклов', value: fmtNumber(cycles, 0) },
  ] };
};
