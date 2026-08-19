import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol } from '../../lib/platform/measurement';

// Конус. Образующая — наклонная от вершины до края основания, не высота.
//
// l = √(r² + h²): подкоренное выражение положительно при любых допустимых
// r и h, поэтому отдельной проверки области определения тут не нужно —
// достаточно того, что обе величины строго положительны.

const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const r = toNumber(inputs.r);
  const h = toNumber(inputs.h);
  const fail = (message: string) => ({
    primary: { label: 'Объём', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (!(r > 0)) return fail('Радиус должен быть больше нуля');
  if (!(h > 0)) return fail('Высота должна быть больше нуля');

  const slant = Math.hypot(r, h);
  return {
    primary: { label: 'Объём', value: `${dim((Math.PI * r * r * h) / 3)} ${unit}³` },
    secondary: [
      { label: 'Образующая', value: `${dim(slant)} ${unit}` },
      { label: 'Боковая поверхность', value: `${dim(Math.PI * r * slant)} ${unit}²` },
      { label: 'Полная поверхность', value: `${dim(Math.PI * r * (r + slant))} ${unit}²` },
    ],
  };
};
