import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Уравнение состояния идеального газа: PV = nRT.
//
// R = 8,314462618 Дж/(моль·К) верна ТОЛЬКО в базовых единицах: паскали,
// кубометры, моли, кельвины. Поэтому каждая выбранная единица приводится к
// базовой ДО подстановки, а результат переводится обратно в выбранную уже
// после. Подставить литры и килопаскали в ту же формулу означало бы получить
// численно правдоподобный и при этом неверный ответ — ровно тот случай, ради
// которого единицы здесь заданы явно.

const R = 8.314462618;
const TO_PASCAL: Record<string, number> = { pa: 1, kpa: 1000, atm: 101325 };
const TO_CUBIC_METRE: Record<string, number> = { m3: 1, l: 0.001 };
const qty = (value: number): string => formatQuantity(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const solve = toStr(inputs.solve, 'p');
  const pressureUnit = toStr(inputs.pressureUnit, 'pa');
  const volumeUnit = toStr(inputs.volumeUnit, 'm3');
  const tempUnit = toStr(inputs.tempUnit, 'k');
  const pressureFactor = TO_PASCAL[pressureUnit] ?? 1;
  const volumeFactor = TO_CUBIC_METRE[volumeUnit] ?? 1;

  const p = toNumber(inputs.p) * pressureFactor;
  const v = toNumber(inputs.v) * volumeFactor;
  const n = toNumber(inputs.n);
  // Абсолютная температура: ноль по Цельсию — это 273,15 K, а не ноль.
  const t = tempUnit === 'c' ? toNumber(inputs.t) + 273.15 : toNumber(inputs.t);

  const fail = (label: string, message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const constants = [
    { label: 'Газовая постоянная', value: '8,314463 Дж/(моль·К)' },
    { label: 'Температура', value: `${qty(t)} К` },
  ];

  if (t < 0) return fail('Давление', 'Температура не может быть ниже абсолютного нуля');

  if (solve === 'p') {
    if (!(n > 0)) return fail('Давление', 'Количество вещества должно быть больше нуля');
    if (!(v > 0)) return fail('Давление', 'Объём должен быть больше нуля');
    return {
      primary: { label: 'Давление', value: `${qty((n * R * t) / v / pressureFactor)} ${pressureLabel(pressureUnit)}` },
      secondary: constants,
    };
  }
  if (solve === 'v') {
    if (!(n > 0)) return fail('Объём', 'Количество вещества должно быть больше нуля');
    if (!(p > 0)) return fail('Объём', 'Давление должно быть больше нуля');
    return {
      primary: { label: 'Объём', value: `${qty((n * R * t) / p / volumeFactor)} ${volumeLabel(volumeUnit)}` },
      secondary: constants,
    };
  }
  if (solve === 'n') {
    if (!(p > 0)) return fail('Количество вещества', 'Давление должно быть больше нуля');
    if (!(v > 0)) return fail('Количество вещества', 'Объём должен быть больше нуля');
    if (!(t > 0)) return fail('Количество вещества', 'Температура должна быть больше нуля');
    return {
      primary: { label: 'Количество вещества', value: `${qty((p * v) / (R * t))} моль` },
      secondary: constants,
    };
  }
  if (!(p > 0)) return fail('Температура', 'Давление должно быть больше нуля');
  if (!(v > 0)) return fail('Температура', 'Объём должен быть больше нуля');
  if (!(n > 0)) return fail('Температура', 'Количество вещества должно быть больше нуля');
  const kelvin = (p * v) / (n * R);
  return {
    primary: {
      label: 'Температура',
      value: tempUnit === 'c' ? `${qty(kelvin - 273.15)} °C` : `${qty(kelvin)} К`,
    },
    secondary: [{ label: 'Газовая постоянная', value: '8,314463 Дж/(моль·К)' }],
  };
};

function pressureLabel(unit: string): string {
  return unit === 'kpa' ? 'кПа' : unit === 'atm' ? 'атм' : 'Па';
}

function volumeLabel(unit: string): string {
  return unit === 'l' ? 'л' : 'м³';
}
