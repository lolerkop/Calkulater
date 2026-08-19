import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol } from '../../lib/platform/measurement';

// Круг. Радиус восстанавливается из любой известной величины, дальше всё общее.
//
// π берётся из Math.PI, а не приближением 3,14: на радиусе в несколько метров
// приближение уже расходится с точным значением в сантиметрах длины окружности.


const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'radius');
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const fail = (message: string) => ({
    primary: { label: 'Площадь', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let r = 0;
  if (mode === 'radius') {
    r = toNumber(inputs.r);
    if (!(r > 0)) return fail('Радиус должен быть больше нуля');
  } else if (mode === 'diameter') {
    const d = toNumber(inputs.d);
    if (!(d > 0)) return fail('Диаметр должен быть больше нуля');
    r = d / 2;
  } else if (mode === 'circumference') {
    const c = toNumber(inputs.c);
    if (!(c > 0)) return fail('Длина окружности должна быть больше нуля');
    r = c / (2 * Math.PI);
  } else {
    const area = toNumber(inputs.area);
    if (!(area > 0)) return fail('Площадь должна быть больше нуля');
    r = Math.sqrt(area / Math.PI);
  }
  if (!Number.isFinite(r)) return fail('Значение слишком велико для расчёта');

  return {
    primary: { label: 'Площадь', value: `${dim(Math.PI * r * r)} ${unit}²` },
    secondary: [
      { label: 'Радиус', value: `${dim(r)} ${unit}` },
      { label: 'Диаметр', value: `${dim(2 * r)} ${unit}` },
      { label: 'Длина окружности', value: `${dim(2 * Math.PI * r)} ${unit}` },
    ],
  };
};
