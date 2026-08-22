import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

// Объём ёмкости и объём налитого при заданном уровне.
//
// Вертикальный цилиндр и прямоугольная ёмкость считаются площадью основания на
// уровень. Горизонтальный цилиндр — нет: сечение налитой части там СЕГМЕНТ
// круга, и его площадь равна r²(θ − sin θ)/2, где θ — центральный угол,
// θ = 2·arccos((r − h)/r). Именно поэтому половина высоты горизонтальной
// цистерны даёт ровно половину объёма, а четверть высоты — заметно меньше
// четверти объёма.
//
// Отличие от цилиндра из геометрии: тот даёт полный объём тела. Здесь есть
// уровень налива и положение ёмкости, и главный ответ — сколько ЖИДКОСТИ внутри.
const SHAPES = ['vertical-cylinder', 'horizontal-cylinder', 'rect', 'capsule'];

export const compute: CalcFunction = (inputs) => {
  const shape = toStr(inputs.shape, 'vertical-cylinder');
  const d = toNumber(inputs.d);
  const len = toNumber(inputs.len);
  const level = toNumber(inputs.level);
  const fail = (message: string) => ({
    primary: { label: 'Объём налитого', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  if (!SHAPES.includes(shape)) return fail('Неизвестная форма ёмкости');
  if (!(d > 0)) return fail('Размер сечения должен быть больше нуля');
  if (!(len > 0)) return fail('Длина или высота должна быть больше нуля');
  if (!(level >= 0)) return fail('Уровень не может быть отрицательным');

  const r = d / 2;
  // У горизонтальной ёмкости налив ограничен ДИАМЕТРОМ, у остальных — длиной,
  // которая для них и есть высота.
  const height = shape === 'horizontal-cylinder' ? d : len;
  if (level > height) return fail('Уровень не может быть выше самой ёмкости');

  let full: number;
  let filled: number;
  if (shape === 'horizontal-cylinder') {
    full = Math.PI * r * r * len;
    const theta = 2 * Math.acos((r - level) / r);
    filled = ((r * r * (theta - Math.sin(theta))) / 2) * len;
  } else if (shape === 'rect') {
    full = d * d * len;
    filled = d * d * level;
  } else if (shape === 'capsule') {
    const cylinder = Math.PI * r * r * len;
    const sphere = (4 / 3) * Math.PI * r * r * r;
    full = cylinder + sphere;
    filled = (full * level) / (len + d);
  } else {
    full = Math.PI * r * r * len;
    filled = Math.PI * r * r * level;
  }

  return {
    primary: { label: 'Объём налитого', value: m(filled, 'м³') },
    secondary: [
      { label: 'Полный объём', value: m(full, 'м³') },
      { label: 'Заполнено', value: `${formatStatistic((filled / full) * 100, fmtNumber)} %` },
      { label: 'В литрах', value: m(filled * 1000, 'л') },
      { label: 'Свободно', value: m(full - filled, 'м³') },
    ],
  };
};
