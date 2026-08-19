import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Круг. Радиус восстанавливается из любой известной величины, дальше всё общее.
//
// π берётся из Math.PI, а не приближением 3,14: на радиусе в несколько метров
// приближение уже расходится с точным значением в сантиметрах длины окружности.
// Разряды подбираются по величине: у площади в квадратных миллиметрах и у
// объёма в кубометрах разумная точность разная, а хвост нулей читать мешает.
const dim = (value: number): string => {
  const abs = Math.abs(value);
  const digits = abs >= 100 ? 2 : abs >= 1 ? 3 : abs >= 0.01 ? 4 : 6;
  const text = fmtNumber(Number(value.toFixed(digits)), digits);
  return text.includes(',') ? text.replace(/0+$/, '').replace(/,$/, '') : text;
};

// Значение поля — ASCII-код единицы; в разметку идёт локализуемый символ.
// Кириллица в value утекала бы в английские данные калькулятора.
const SYMBOL: Record<string, string> = { mm: 'мм', cm: 'см', m: 'м' };

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'radius');
  const unit = SYMBOL[toStr(inputs.unit, 'cm')] ?? 'см';
  const fail = (message: string) => ({
    primary: { label: 'Площадь', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let r = 0;
  if (mode === 'radius') {
    r = toNumber(inputs.r);
    if (!(r > 0)) return fail('Радиус должен быть больше нуля');
  } else if (mode === 'diameter') {
    const d = toNumber(inputs.d);
    if (!(d > 0)) return fail('Диаметр должен быть больше нуля');
    r = d / 2;
  } else if (mode === 'circumference') {
    const c = toNumber(inputs.c);
    if (!(c > 0)) return fail('Длина окружности должна быть больше нуля');
    r = c / (2 * Math.PI);
  } else {
    const area = toNumber(inputs.area);
    if (!(area > 0)) return fail('Площадь должна быть больше нуля');
    r = Math.sqrt(area / Math.PI);
  }
  if (!Number.isFinite(r)) return fail('Значение слишком велико для расчёта');

  return {
    primary: { label: 'Площадь', value: `${dim(Math.PI * r * r)} ${unit}²` },
    secondary: [
      { label: 'Радиус', value: `${dim(r)} ${unit}` },
      { label: 'Диаметр', value: `${dim(2 * r)} ${unit}` },
      { label: 'Длина окружности', value: `${dim(2 * Math.PI * r)} ${unit}` },
    ],
  };
};
