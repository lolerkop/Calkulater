import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Усечённая пирамида с квадратными основаниями.
//
// Объём НЕ равен средней площади на высоту: в формуле стоит третий член
// √(S₁·S₂), и без него ответ занижается. Это та же формула Симпсона, что
// работает для любого тела, площадь сечения которого меняется квадратично по
// высоте, — и именно поэтому она точна, а не приближённа.
//
// Апофема считается по разности ПОЛОВИН сторон: боковая грань наклонена
// настолько, насколько верхнее основание уже нижнего с каждой стороны.
export const compute: CalcFunction = (inputs) => {
  const bottom = toNumber(inputs.a);
  const top = toNumber(inputs.b);
  const height = toNumber(inputs.h);
  const fail = (message: string) => ({
    primary: { label: 'Объём', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(bottom > 0) || !(top > 0)) return fail('Сторона основания должна быть больше нуля');
  if (!(height > 0)) return fail('Высота должна быть больше нуля');
  if (bottom === top) return fail('При равных основаниях это призма, а не усечённая пирамида');

  const s1 = bottom * bottom;
  const s2 = top * top;
  const volume = (height / 3) * (s1 + s2 + Math.sqrt(s1 * s2));
  const apothem = Math.sqrt(height * height + Math.pow((bottom - top) / 2, 2));
  const lateral = 2 * (bottom + top) * apothem;

  return {
    primary: { label: 'Объём', value: `${formatMeasure(volume, fmtNumber)} см³` },
    secondary: [
      { label: 'Апофема', value: `${formatMeasure(apothem, fmtNumber)} см` },
      { label: 'Боковая поверхность', value: `${formatMeasure(lateral, fmtNumber)} см²` },
      { label: 'Полная поверхность', value: `${formatMeasure(lateral + s1 + s2, fmtNumber)} см²` },
      { label: 'Площади оснований', value: `${formatMeasure(s1, fmtNumber)} и ${formatMeasure(s2, fmtNumber)}` },
    ],
  };
};
