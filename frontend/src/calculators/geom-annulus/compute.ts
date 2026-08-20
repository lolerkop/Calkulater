import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol } from '../../lib/platform/measurement';

// Кольцо между двумя окружностями. Площадь — разность двух кругов: π(R² − r²).
//
// Вычитать площади нужно именно так, а не как π(R − r)²: вторая запись даёт
// площадь круга радиуса R − r, а это совсем другая фигура. Ошибка тем опаснее,
// что при узком кольце оба числа малы и выглядят правдоподобно.
//
// Внутренний радиус, равный внешнему, отклоняется: кольца нулевой ширины не
// бывает, и нулевая площадь была бы ответом на не заданный вопрос.

const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const R = toNumber(inputs.R);
  const r = toNumber(inputs.r);
  const fail = (message: string) => ({
    primary: { label: 'Площадь', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (!(R > 0)) return fail('Внешний радиус должен быть больше нуля');
  if (r < 0) return fail('Внутренний радиус не может быть отрицательным');
  if (r >= R) return fail('Внутренний радиус должен быть меньше внешнего');

  return {
    primary: { label: 'Площадь', value: `${dim(Math.PI * (R * R - r * r))} ${unit}²` },
    secondary: [
      { label: 'Ширина кольца', value: `${dim(R - r)} ${unit}` },
      { label: 'Внешняя окружность', value: `${dim(2 * Math.PI * R)} ${unit}` },
      { label: 'Внутренняя окружность', value: `${dim(2 * Math.PI * r)} ${unit}` },
      { label: 'Средний радиус', value: `${dim((R + r) / 2)} ${unit}` },
    ],
  };
};
