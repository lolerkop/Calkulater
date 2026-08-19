import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol } from '../../lib/platform/measurement';

// Шар. Радиус восстанавливается из любой известной величины.
//
// Поверхность — квадрат длины, объём — куб: при смене единицы множители у них
// разные, поэтому здесь единица только подписывает результат и не участвует
// в вычислении.

const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const mode = toStr(inputs.mode, 'radius');
  const fail = (message: string) => ({
    primary: { label: 'Объём', value: '—' },
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
  } else {
    const volume = toNumber(inputs.volume);
    if (!(volume > 0)) return fail('Объём должен быть больше нуля');
    r = Math.cbrt((3 * volume) / (4 * Math.PI));
  }

  return {
    primary: { label: 'Объём', value: `${dim((4 / 3) * Math.PI * r ** 3)} ${unit}³` },
    secondary: [
      { label: 'Площадь поверхности', value: `${dim(4 * Math.PI * r * r)} ${unit}²` },
      { label: 'Радиус', value: `${dim(r)} ${unit}` },
      { label: 'Диаметр', value: `${dim(2 * r)} ${unit}` },
    ],
  };
};
