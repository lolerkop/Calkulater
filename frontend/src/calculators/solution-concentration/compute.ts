import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Массовая доля (w/w), массовая концентрация (w/v) и ppm по массе.
//
// Массовая доля и масса на объём — разные величины, поэтому режим
// выбирается явно. Масса растворённого вещества не может превышать массу
// раствора: такой ввод отклоняется, а не обрезается до 100 % — обрезка
// превратила бы ошибку в правдоподобное число.

const number = (value: unknown): number | null => typeof value === 'number' || typeof value === 'string' ? parseLocalizedNumber(value) : null;
const positive = (value: number | null): value is number => value !== null && value > 0;
const qty = (value: number): string => value !== 0 && (Math.abs(value) < 0.01 || Math.abs(value) >= 1e12)
  ? formatQuantity(value, fmtNumber) : fmtNumber(value, 2);
const pct = (value: number): string => `${qty(value)}%`;

function scaledRatio(a: number, b: number, scale: number): number | undefined {
  if (a === 0) return 0;
  return [(a / b) * scale, (a * scale) / b, a / (b / scale)]
    .find(value => Number.isFinite(value) && value > 0);
}

export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'ww' : inputs.mode;
  const solute = number(inputs.solute);
  const fail = (message: string) => ({
    primary: { label: 'Концентрация', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  // ppm remains an existing API mode; the public form offers ww and wv.
  if (mode !== 'ww' && mode !== 'wv' && mode !== 'ppm') return fail('Неизвестная форма концентрации');
  if (solute === null || solute < 0) return fail('Масса вещества должна быть конечным неотрицательным числом');

  if (mode === 'wv') {
    const volume = number(inputs.volume);
    if (!positive(volume)) return fail('Объём раствора должен быть конечным числом больше нуля');
    const percent = scaledRatio(solute, volume, 100);
    const perLitre = scaledRatio(solute, volume, 1000);
    if (percent === undefined || perLitre === undefined) return fail('Результат вне допустимого диапазона');
    return {
      primary: { label: 'Концентрация', value: pct(percent) },
      secondary: [{ label: 'Масса на литр', value: `${qty(perLitre)} г/л` }],
    };
  }

  const solution = number(inputs.solution);
  if (!positive(solution)) return fail('Масса раствора должна быть конечным числом больше нуля');
  if (solute > solution) return fail('Вещества не может быть больше, чем раствора');

  const percent = scaledRatio(solute, solution, 100);
  const ppm = scaledRatio(solute, solution, 1e6);
  if (ppm === undefined || (mode !== 'ppm' && percent === undefined)) return fail('Результат вне допустимого диапазона');
  const solvent = `${qty(solution - solute)} г`;
  if (mode === 'ppm') {
    return {
      primary: { label: 'Концентрация', value: `${qty(ppm)} ppm` },
      secondary: [{ label: 'Масса растворителя', value: solvent }],
    };
  }

  return {
    primary: { label: 'Концентрация', value: pct(percent!) },
    secondary: [
      { label: 'Масса растворителя', value: solvent },
      { label: 'В миллионных долях', value: `${qty(ppm)} ppm` },
    ],
  };
};
