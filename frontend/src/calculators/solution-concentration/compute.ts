import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Концентрация раствора: по массе, по объёму и в миллионных долях.
//
// Процент по массе и процент по объёму — разные величины, поэтому режим
// выбирается явно. Масса растворённого вещества не может превышать массу
// раствора: такой ввод отклоняется, а не обрезается до 100 % — обрезка
// превратила бы ошибку в правдоподобное число.

const pct = (value: number): string => `${fmtNumber(value, 2)}%`;

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'ww');
  const solute = toNumber(inputs.solute);
  const fail = (message: string) => ({
    primary: { label: 'Концентрация', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(solute > 0)) return fail('Масса вещества должна быть больше нуля');

  if (mode === 'wv') {
    const volume = toNumber(inputs.volume);
    if (!(volume > 0)) return fail('Объём раствора должен быть больше нуля');
    return {
      primary: { label: 'Концентрация', value: pct((solute / volume) * 100) },
      secondary: [{ label: 'Масса на литр', value: `${fmtNumber((solute / volume) * 1000, 2)} г/л` }],
    };
  }

  const solution = toNumber(inputs.solution);
  if (!(solution > 0)) return fail('Масса раствора должна быть больше нуля');
  if (solute > solution) return fail('Вещества не может быть больше, чем раствора');

  if (mode === 'ppm') {
    return {
      primary: { label: 'Концентрация', value: `${fmtNumber((solute / solution) * 1e6, 2)} ppm` },
      secondary: [{ label: 'Масса растворителя', value: `${fmtNumber(solution - solute, 2)} г` }],
    };
  }

  return {
    primary: { label: 'Концентрация', value: pct((solute / solution) * 100) },
    secondary: [
      { label: 'Масса растворителя', value: `${fmtNumber(solution - solute, 2)} г` },
      { label: 'В миллионных долях', value: `${fmtNumber((solute / solution) * 1e6, 2)} ppm` },
    ],
  };
};
