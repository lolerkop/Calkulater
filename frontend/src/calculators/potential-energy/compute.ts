import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Потенциальная энергия: E = m · g · h.
//
// g — стандартное ускорение свободного падения, принятое по определению.
// Округление до 9,8 сдвигает третий знак результата, и при большой массе
// расхождение исчисляется сотнями джоулей, поэтому значение полное.
const G = 9.80665;

const qty = (value: number): string => formatQuantity(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'E');
  const fail = (message: string) => ({
    primary: { label: 'Потенциальная энергия', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const required: Record<string, readonly string[]> = {"E": ["m", "h"], "h": ["E", "m2"], "m": ["E2", "h2"]};
  if (!Object.hasOwn(required, mode)) return fail('Неизвестный режим расчёта');
  if (required[mode].some((key) => typeof inputs[key] === 'boolean' || !Number.isFinite(toNumber(inputs[key], Number.NaN)))) {
    return fail('Введите конечные числа для выбранного режима');
  }


  let m = 0;
  let h = 0;
  let e = 0;
  let primaryLabel = 'Потенциальная энергия';
  if (mode === 'E') {
    m = toNumber(inputs.m, Number.NaN);
    h = toNumber(inputs.h, Number.NaN);
    if (!(m > 0)) return fail('Масса должна быть больше нуля');
    if (h < 0) return fail('Высота не может быть отрицательной');
    const weight = m * G;
    e = Number.isFinite(weight) ? weight * h : m * (G * h);
  } else if (mode === 'h') {
    e = toNumber(inputs.E, Number.NaN);
    m = toNumber(inputs.m2, Number.NaN);
    if (e < 0) return fail('Энергия не может быть отрицательной');
    if (!(m > 0)) return fail('Масса должна быть больше нуля');
    const ratio = e / m;
    h = Number.isFinite(ratio) ? ratio / G : e / G / m;
    primaryLabel = 'Высота';
  } else {
    e = toNumber(inputs.E2, Number.NaN);
    h = toNumber(inputs.h2, Number.NaN);
    if (e < 0) return fail('Энергия не может быть отрицательной');
    if (!(h > 0)) return fail('Высота должна быть больше нуля, иначе масса не определена');
    const ratio = e / h;
    m = Number.isFinite(ratio) ? ratio / G : e / G / h;
    primaryLabel = 'Масса';
  }

  if (![m, h, e].every(Number.isFinite)) return fail('Результат выходит за числовой диапазон');

  const primaryValue = mode === 'E' ? `${qty(e)} Дж` : mode === 'h' ? `${qty(h)} м` : `${qty(m)} кг`;
  return {
    primary: { label: primaryLabel, value: primaryValue },
    secondary: [
      { label: 'Потенциальная энергия', value: `${qty(e)} Дж` },
      { label: 'Масса', value: `${qty(m)} кг` },
      { label: 'Высота', value: `${qty(h)} м` },
      { label: 'Ускорение свободного падения', value: `${qty(G)} м/с²` },
    ],
  };
};
