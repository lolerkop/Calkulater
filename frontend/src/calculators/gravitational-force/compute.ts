import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';

// Закон всемирного тяготения.
//
//   F = G · m₁ · m₂ / r²,   G = 6,674·10⁻¹¹ Н·м²/кг²
//
// Гравитационная постоянная крошечная, и именно поэтому притяжение между
// бытовыми предметами неощутимо: две тонны на расстоянии двух метров тянут
// друг друга с силой около 1,7·10⁻⁵ Н — вес пылинки. Заметной гравитация
// становится только при планетных массах, и показательная запись здесь
// не украшение, а единственный способ показать оба края диапазона.
//
// Ускорение первого тела показано отдельно: сила одинакова для обоих тел,
// а ускорение — нет, и именно поэтому падает яблоко, а не Земля.
const G = 6.674e-11;

export const compute: CalcFunction = (inputs) => {
  const m1 = toNumber(inputs.m1);
  const m2 = toNumber(inputs.m2);
  const r = toNumber(inputs.r);

  const fail = (message: string) => ({
    primary: { label: 'Сила притяжения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(m1 > 0)) return fail('Первая масса должна быть больше нуля');
  if (!(m2 > 0)) return fail('Вторая масса должна быть больше нуля');
  if (!(r > 0)) return fail('Расстояние должно быть больше нуля');

  const q = (value: number) => formatQuantity(value, fmtNumber);

  return {
    primary: { label: 'Сила притяжения', value: `${q((G * m1 * m2) / (r * r))} Н` },
    secondary: [
      { label: 'Ускорение первого тела', value: `${q((G * m2) / (r * r))} м/с²` },
      { label: 'Расстояние', value: `${formatMeasure(r, fmtNumber)} м` },
    ],
  };
};
