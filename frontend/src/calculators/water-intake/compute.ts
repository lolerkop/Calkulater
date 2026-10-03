import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Validate the active numeric contract before arithmetic; malformed values must
// never turn into a valid zero or a health interpretation.
const number = (value: unknown) => typeof value === 'string' || typeof value === 'number' ? toNumber(value, NaN) : NaN;

// Existing educational scenario retained. No primary validation found for these
// three adopted coefficients; this must not be presented as a drinking norm.
export const compute: CalcFunction = (inputs) => {
  const fail = (value: string) => ({ primary: { label: 'Оценка жидкости по модели', value: '—' }, secondary: [{ label: 'Проверьте данные', value, accent: 'red' as const }] });
  const weight = number(inputs.weight), minutes = number(inputs.activityMinutes);
  const weather = inputs.hotWeather;
  if (!['yes', 'no', true, false].includes(weather as string | boolean)) return fail('Укажите жаркую погоду: да или нет');
  if (![weight, minutes].every(Number.isFinite)) return fail('Введите конечные числа для выбранного режима');
  if (!(weight > 0)) return fail('Масса тела должна быть больше нуля');
  if (minutes < 0) return fail('Минуты нагрузки не могут быть отрицательными');
  const hot = weather === 'yes' || weather === true;
  const base = weight * .033, extra = minutes * (.35 / 30), subtotal = base + extra;
  const total = subtotal * (hot ? 1.1 : 1), heat = hot ? subtotal * .1 : 0, glasses = total / .25;
  if (![base, extra, total, heat, glasses].every(Number.isFinite)) return fail('Результат выходит за числовой диапазон');
  const measure = (x: number) => formatMeasure(x, fmtNumber);
  return { primary: { label: 'Оценка жидкости по модели', value: `${measure(total)} л` }, secondary: [
    { label: 'Часть от массы', value: `${measure(base)} л` }, { label: 'Часть от нагрузки', value: `${measure(extra)} л` },
    { label: 'Поправка модели на жару', value: `${measure(heat)} л` }, { label: 'Эквивалент стаканов по 250 мл', value: measure(glasses) },
  ], note: 'Коэффициенты 33 мл/кг, 350 мл/30 мин и +10 % в жару — допущения этой модели. Итог не предписывает объём питья и не учитывает индивидуальные ограничения жидкости.' };
};
