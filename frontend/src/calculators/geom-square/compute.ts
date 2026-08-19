import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Квадрат. Сторона может быть задана напрямую, через площадь или через периметр.
//
// Единица длины не пересчитывается и не может быть пересчитана неверно: все
// размеры фигуры вводятся в одной единице, поэтому число ответа от неё не
// зависит — меняется только подпись. Площадь получает квадрат единицы, диагональ
// остаётся линейной. Именно здесь чаще всего ошибаются вручную, переводя площадь
// линейным множителем.
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
  const mode = toStr(inputs.mode, 'side');
  const unit = SYMBOL[toStr(inputs.unit, 'cm')] ?? 'см';
  const fail = (message: string) => ({
    primary: { label: 'Площадь', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let side = 0;
  if (mode === 'side') {
    side = toNumber(inputs.side);
    if (!(side > 0)) return fail('Сторона должна быть больше нуля');
  } else if (mode === 'area') {
    const area = toNumber(inputs.area);
    if (!(area > 0)) return fail('Площадь должна быть больше нуля');
    side = Math.sqrt(area);
  } else {
    const perimeter = toNumber(inputs.perimeter);
    if (!(perimeter > 0)) return fail('Периметр должен быть больше нуля');
    side = perimeter / 4;
  }
  if (!Number.isFinite(side)) return fail('Значение слишком велико для расчёта');

  const area = side * side;
  return {
    primary: { label: 'Площадь', value: `${dim(area)} ${unit}²` },
    secondary: [
      { label: 'Сторона', value: `${dim(side)} ${unit}` },
      { label: 'Периметр', value: `${dim(side * 4)} ${unit}` },
      { label: 'Диагональ', value: `${dim(side * Math.SQRT2)} ${unit}` },
    ],
  };
};
