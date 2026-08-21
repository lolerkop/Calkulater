import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Плитный фундамент: бетон и арматурная сетка.
//
// Прутков вдоль стороны получается ⌊сторона / шаг⌋ + 1: крайний пруток
// обязателен, и без единицы сетка оказалась бы на один ряд короче у каждого
// края. Слоёв два — верхний и нижний, — поэтому длина удваивается.
//
// Погонная масса арматуры считается из площади сечения и плотности стали
// 7850 кг/м³: это точная справочная величина, а не подобранный коэффициент,
// и она даёт для двенадцатого диаметра привычные 0,888 кг/м.

const STEEL_DENSITY = 7850;

export const compute: CalcFunction = (inputs) => {
  const length = toNumber(inputs.length);
  const width = toNumber(inputs.width);
  const thickness = toNumber(inputs.thickness);
  const step = toNumber(inputs.meshStep);
  const diameter = toNumber(inputs.rebarDiameter);
  const waste = toNumber(inputs.waste);
  const fail = (message: string) => ({
    primary: { label: 'Объём бетона', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(length > 0) || !(width > 0) || !(thickness > 0)) return fail('Размеры плиты должны быть больше нуля');
  if (!(step > 0)) return fail('Шаг сетки должен быть больше нуля');
  if (!(diameter > 0)) return fail('Диаметр арматуры должен быть больше нуля');
  if (waste < 0 || waste > 50) return fail('Запас должен быть от 0 до 50 %');

  const net = length * width * thickness;
  const total = net * (1 + waste / 100);
  const barsAlongLength = Math.floor(width / step) + 1;
  const barsAlongWidth = Math.floor(length / step) + 1;
  const rebarLength = (barsAlongLength * length + barsAlongWidth * width) * 2;
  const massPerMetre = Math.PI * (diameter / 2000) ** 2 * STEEL_DENSITY;
  const measure = (x: number) => formatMeasure(x, fmtNumber);

  return {
    primary: { label: 'Объём бетона', value: `${measure(total)} м³` },
    secondary: [
      { label: 'Площадь плиты', value: `${measure(length * width)} м²` },
      { label: 'Чистый объём', value: `${measure(net)} м³` },
      { label: 'Запас', value: `${measure(total - net)} м³` },
      { label: 'Длина арматуры', value: `${measure(rebarLength)} м` },
      { label: 'Вес арматуры', value: `${measure(rebarLength * massPerMetre)} кг` },
      { label: 'Прутков', value: fmtNumber((barsAlongLength + barsAlongWidth) * 2, 0) },
    ],
  };
};
