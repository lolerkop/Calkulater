import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Треугольник. По трём сторонам — формула Герона, по основанию и высоте — ½ah.
//
// Неравенство треугольника проверяется ДО вычисления площади. Формула Герона на
// невозможном наборе сторон даёт отрицательное подкоренное выражение, и корень
// из него — NaN; обрезать его нулём нельзя, потому что ноль читается как ответ,
// а верный ответ здесь — «такой фигуры нет».
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
  const mode = toStr(inputs.mode, 'sss');
  const unit = SYMBOL[toStr(inputs.unit, 'cm')] ?? 'см';
  const fail = (message: string) => ({
    primary: { label: 'Площадь', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode === 'baseHeight') {
    const base = toNumber(inputs.base);
    const height = toNumber(inputs.height);
    if (!(base > 0) || !(height > 0)) return fail('Основание и высота должны быть больше нуля');
    return {
      primary: { label: 'Площадь', value: `${dim(base * height / 2)} ${unit}²` },
      secondary: [
        { label: 'Основание', value: `${dim(base)} ${unit}` },
        { label: 'Высота', value: `${dim(height)} ${unit}` },
      ],
    };
  }

  const a = toNumber(inputs.a);
  const b = toNumber(inputs.b);
  const c = toNumber(inputs.c);
  if (!(a > 0) || !(b > 0) || !(c > 0)) return fail('Все стороны должны быть больше нуля');
  if (a + b <= c || a + c <= b || b + c <= a) {
    return fail('Такого треугольника не существует: сумма двух сторон не превышает третью');
  }

  const p = (a + b + c) / 2;
  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  const sorted = [a, b, c].sort((x, y) => x - y);
  const [s1, s2, s3] = sorted;
  const lhs = s1 * s1 + s2 * s2;
  const rhs = s3 * s3;
  const tolerance = rhs * 1e-9;
  const kind = Math.abs(lhs - rhs) <= tolerance ? 'прямоугольный' : lhs > rhs ? 'остроугольный' : 'тупоугольный';

  return {
    primary: { label: 'Площадь', value: `${dim(area)} ${unit}²` },
    secondary: [
      { label: 'Периметр', value: `${dim(a + b + c)} ${unit}` },
      { label: 'Вид треугольника', value: kind },
    ],
  };
};
