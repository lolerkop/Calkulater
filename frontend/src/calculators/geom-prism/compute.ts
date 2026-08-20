import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol } from '../../lib/platform/measurement';

// Прямая призма с правильным многоугольником в основании.
//
//   апофема   = сторона / (2 · tg(π / n))
//   основание = периметр × апофема / 2
//   объём     = площадь основания × высота
//   боковая   = периметр × высота
//   полная    = 2 × основание + боковая
//
// Тангенс берётся от РАДИАН, а не от градусов: π / n — это половина
// центрального угла, и перевод в градусы здесь только добавил бы шаг,
// на котором ошибаются.
//
// Боковая поверхность у прямой призмы разворачивается в прямоугольник со
// сторонами «периметр» и «высота» — поэтому она считается умножением, а не
// суммированием граней: для правильного основания это одно и то же.
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
  const lateral = perimeter * height;

  return {
    primary: { label: 'Объём', value: `${dim(base * height)} ${unit}³` },
    secondary: [
      { label: 'Площадь основания', value: `${dim(base)} ${unit}²` },
      { label: 'Боковая поверхность', value: `${dim(lateral)} ${unit}²` },
      { label: 'Полная поверхность', value: `${dim(2 * base + lateral)} ${unit}²` },
      { label: 'Периметр основания', value: `${dim(perimeter)} ${unit}` },
    ],
  };
};
