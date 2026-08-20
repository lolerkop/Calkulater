import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol } from '../../lib/platform/measurement';

// Правильная пирамида: правильный многоугольник в основании, вершина над центром.
//
//   апофема основания = сторона / (2 · tg(π / n))
//   апофема боковой   = √(высота² + апофема основания²)
//   объём             = площадь основания × высота / 3
//   боковая           = периметр × апофема боковой / 2
//
// Двух апофем здесь две разные, и путать их нельзя. Апофема основания лежит
// В основании и идёт от центра к середине стороны; апофема боковой грани —
// это наклонная высота треугольной грани, и именно она входит в площадь
// боковой поверхности. Вторая всегда больше первой, потому что является
// гипотенузой с высотой пирамиды.
//
// Треть в объёме — не приближение: любой конус и любая пирамида занимают
// ровно треть цилиндра или призмы той же высоты с тем же основанием.
const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const sides = toNumber(inputs.sides);
  const side = toNumber(inputs.side);
  const height = toNumber(inputs.height);

  const fail = (message: string) => ({
    primary: { label: 'Объём', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!Number.isInteger(sides)) return fail('Число сторон основания должно быть целым');
  if (!(sides >= 3)) return fail('Сторон основания должно быть не меньше трёх');
  if (!(side > 0)) return fail('Длина стороны должна быть больше нуля');
  if (!(height > 0)) return fail('Высота должна быть больше нуля');

  const perimeter = side * sides;
  const apothem = side / (2 * Math.tan(Math.PI / sides));
  const base = (perimeter * apothem) / 2;
  const slant = Math.hypot(height, apothem);
  const lateral = (perimeter * slant) / 2;

  return {
    primary: { label: 'Объём', value: `${dim((base * height) / 3)} ${unit}³` },
    secondary: [
      { label: 'Площадь основания', value: `${dim(base)} ${unit}²` },
      { label: 'Апофема', value: `${dim(slant)} ${unit}` },
      { label: 'Боковая поверхность', value: `${dim(lateral)} ${unit}²` },
      { label: 'Полная поверхность', value: `${dim(base + lateral)} ${unit}²` },
    ],
  };
};
