import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Прямоугольник. Стороны задаются напрямую или одна из них выводится из площади.
//
// Единица длины общая для обеих сторон, поэтому пересчитывать нечего: площадь
// выводится в её квадрате, диагональ остаётся линейной.
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
  const mode = toStr(inputs.mode, 'sides');
  const unit = SYMBOL[toStr(inputs.unit, 'cm')] ?? 'см';
  const fail = (message: string) => ({
    primary: { label: 'Площадь', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let a = 0;
  let b = 0;
  if (mode === 'sides') {
    a = toNumber(inputs.a);
    b = toNumber(inputs.b);
    if (!(a > 0) || !(b > 0)) return fail('Обе стороны должны быть больше нуля');
  } else {
    const area = toNumber(inputs.area);
    a = toNumber(inputs.a);
    if (!(area > 0)) return fail('Площадь должна быть больше нуля');
    if (!(a > 0)) return fail('Известная сторона должна быть больше нуля');
    b = area / a;
  }
  if (!Number.isFinite(a) || !Number.isFinite(b)) return fail('Значение слишком велико для расчёта');

  const area = a * b;
  return {
    primary: { label: 'Площадь', value: `${dim(area)} ${unit}²` },
    secondary: [
      { label: 'Первая сторона', value: `${dim(a)} ${unit}` },
      { label: 'Вторая сторона', value: `${dim(b)} ${unit}` },
      { label: 'Периметр', value: `${dim(2 * (a + b))} ${unit}` },
      { label: 'Диагональ', value: `${dim(Math.hypot(a, b))} ${unit}` },
    ],
  };
};
