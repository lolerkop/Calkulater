import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol } from '../../lib/platform/measurement';

// Цилиндр. Боковая поверхность и полная различаются двумя основаниями.

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

  return {
    primary: { label: 'Объём', value: `${dim(Math.PI * r * r * h)} ${unit}³` },
    secondary: [
      { label: 'Боковая поверхность', value: `${dim(2 * Math.PI * r * h)} ${unit}²` },
      { label: 'Полная поверхность', value: `${dim(2 * Math.PI * r * (r + h))} ${unit}²` },
      { label: 'Площадь основания', value: `${dim(Math.PI * r * r)} ${unit}²` },
    ],
  };
};
