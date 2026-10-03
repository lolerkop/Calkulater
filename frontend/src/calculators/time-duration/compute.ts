import type { CalcFunction } from '../../lib/types';
import { fmtInt } from '../../lib/format';
import { clock, enumValue, whole, wrapDay } from '../../lib/calculators/dateTimeNumeric';
export { wrapDay } from '../../lib/calculators/dateTimeNumeric';

export const compute: CalcFunction = (inputs) => {
  const mode = enumValue(inputs.mode, ['difference', 'add', 'subtract'], 'difference');
  const fail = (message: string) => ({ primary: { label: mode === 'difference' ? 'Продолжительность' : 'Время', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode === null) return fail('Выберите режим расчёта');
  const startHour = whole(inputs.startHour, 0, 23);
  const startMinute = whole(inputs.startMinute, 0, 59);
  if (startHour === null || startMinute === null) return fail('Введите целые часы от 0 до 23 и минуты от 0 до 59');
  const start = startHour * 60 + startMinute;
  if (mode === 'difference') {
    const endHour = whole(inputs.endHour, 0, 23);
    const endMinute = whole(inputs.endMinute, 0, 59);
    if (endHour === null || endMinute === null) return fail('Введите целые часы от 0 до 23 и минуты от 0 до 59');
    const end = endHour * 60 + endMinute;
    const span = wrapDay(end - start);
    return { primary: { label: 'Продолжительность', value: `${fmtInt(Math.floor(span / 60))} ч ${fmtInt(span % 60)} мин` }, secondary: [
      { label: 'Всего минут', value: fmtInt(span) }, { label: 'Начало', value: clock(start) }, { label: 'Окончание', value: clock(end) },
      ...(end < start ? [{ label: 'Переход через полночь', value: 'да' }] : []),
    ] };
  }
  const spanHour = whole(inputs.spanHour, 0, 999);
  const spanMinute = whole(inputs.spanMinute, 0, 59);
  if (spanHour === null || spanMinute === null) return fail('Введите целую длительность: часы от 0 до 999, минуты от 0 до 59');
  const shift = spanHour * 60 + spanMinute;
  const result = wrapDay(start + (mode === 'subtract' ? -shift : shift));
  const crossed = mode === 'subtract' ? start - shift < 0 : start + shift >= 1440;
  return { primary: { label: 'Время', value: clock(result) }, secondary: [
    { label: 'Исходное время', value: clock(start) },
    { label: 'Длительность', value: `${fmtInt(Math.floor(shift / 60))} ч ${fmtInt(shift % 60)} мин` },
    ...(crossed ? [{ label: mode === 'subtract' ? 'Переход назад через границу суток' : 'Переход вперёд через границу суток', value: 'да' }] : []),
  ] };
};
