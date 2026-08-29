import type { CalcFunction } from '../../lib/types';
import { fmtNumber, preserveNonZero, toNumber, toStr } from '../../lib/format';

// Закон Ома: U = I·R, и мощность P = U·I.
//
// Три режима отличаются только тем, какая пара величин известна, поэтому
// отдельного кода на каждый нет — вычисляется недостающая, а дальше все
// четыре величины выводятся одинаково. Делитель режима проверяется строго:
// при нулевом токе сопротивление не определено, при нулевом сопротивлении
// не определён ток, и в обоих случаях деление дало бы Infinity, то есть
// значение, которое выглядит как ответ.
//
// Нулевое напряжение при ненулевом сопротивлении — законный случай: ток и
// мощность равны нулю, схема просто обесточена. Отвергать его нельзя.
// Предварительное округление сохранено: оно задаёт привычный разряд у больших
// величин. Отменяется оно ровно в одном случае — когда обнуляет ненулевое
// значение: 0,001 Ом превращалось в «0,00 Ом» ещё до форматирования, и спасение
// по значащим цифрам не могло сработать, потому что число уже было нулём.
const num = (value: number, digits: number) => fmtNumber(preserveNonZero(value, digits), digits);

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'vi');
  const voltage = toNumber(inputs.voltage);
  const current = toNumber(inputs.current);
  const resistance = toNumber(inputs.resistance);

  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let u = voltage;
  let i = current;
  let r = resistance;
  let primaryLabel = 'Сопротивление';
  let primaryValue = '';

  if (mode === 'vi') {
    if (voltage < 0 || current < 0) return fail('Значения не могут быть отрицательными');
    if (!(current > 0)) return fail('Ток должен быть больше нуля, иначе сопротивление не определено');
    r = voltage / current;
    primaryLabel = 'Сопротивление';
    primaryValue = `${num(r, 2)} Ом`;
  } else if (mode === 'vr') {
    if (voltage < 0 || resistance < 0) return fail('Значения не могут быть отрицательными');
    if (!(resistance > 0)) return fail('Сопротивление должно быть больше нуля, иначе ток не определён');
    i = voltage / resistance;
    primaryLabel = 'Ток';
    primaryValue = `${num(i, 3)} А`;
  } else {
    if (current < 0 || resistance < 0) return fail('Значения не могут быть отрицательными');
    u = current * resistance;
    primaryLabel = 'Напряжение';
    primaryValue = `${num(u, 2)} В`;
  }

  const power = u * i;

  return {
    primary: { label: primaryLabel, value: primaryValue },
    secondary: [
      { label: 'Мощность', value: `${num(power, 2)} Вт` },
      { label: 'Напряжение', value: `${num(u, 2)} В` },
      { label: 'Ток', value: `${num(i, 3)} А` },
      { label: 'Сопротивление', value: r > 0 ? `${num(r, 2)} Ом` : '—' },
    ],
  };
};
