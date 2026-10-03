import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';
import { clock, utcOffsetMinutes, whole, wrapDay } from '../../lib/calculators/dateTimeNumeric';

// Fixed offsets only; neither timezone rules nor daylight-saving transitions.
export const compute: CalcFunction = (inputs) => {
  const from = utcOffsetMinutes(inputs.fromOffset);
  const to = utcOffsetMinutes(inputs.toOffset);
  const fail = (message: string) => ({ primary: { label: 'Время в точке назначения', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (from === null || to === null) return fail('Смещение UTC должно быть от −12 до +14 и соответствовать целому числу минут');
  const hour = whole(inputs.hour, 0, 23);
  const minute = whole(inputs.minute, 0, 59);
  if (hour === null || minute === null) return fail('Введите целые часы от 0 до 23 и минуты от 0 до 59');
  const source = hour * 60 + minute;
  const difference = to - from;
  const total = source + difference;
  const shift = Math.floor(total / 1440);
  return { primary: { label: 'Время в точке назначения', value: clock(wrapDay(total)) }, secondary: [
    { label: 'Разница', value: `${formatMeasure(difference / 60, fmtNumber)} ч` },
    { label: 'Сдвиг суток', value: fmtNumber(shift, 0) },
    { label: 'Календарный день', value: shift === 0 ? 'те же сутки' : shift === 1 ? 'следующие сутки' : shift === -1 ? 'предыдущие сутки' : shift === 2 ? 'через двое суток' : 'двое суток назад' },
    { label: 'Исходное время', value: clock(source) },
  ] };
};
