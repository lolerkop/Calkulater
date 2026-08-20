import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Степень и корень.
//
// Корень нечётной степени из отрицательного числа существует: ∛−8 = −2. Прямое
// возведение в дробную степень даёт здесь NaN, потому что для отрицательного
// основания дробный показатель определён не всегда, поэтому знак выносится
// отдельно, а корень берётся из модуля.
//
// Корень чётной степени из отрицательного числа не существует среди
// вещественных, и расчёт останавливается вместо показа NaN. По той же причине
// отклоняется нуль в отрицательной степени: это деление на нуль.

export const compute: CalcFunction = (inputs) => {
  const root = toStr(inputs.mode, 'power') === 'root';
  const base = toNumber(inputs.base);
  const exponent = toNumber(inputs.exponent);
  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let value: number;
  if (root) {
    if (!(exponent > 0)) return fail('Степень корня должна быть больше нуля');
    if (base < 0) {
      if (!Number.isInteger(exponent) || exponent % 2 === 0) {
        return fail('Корень чётной степени из отрицательного числа не существует');
      }
      value = -Math.pow(-base, 1 / exponent);
    } else {
      value = Math.pow(base, 1 / exponent);
    }
  } else {
    if (base === 0 && exponent < 0) return fail('Нуль нельзя возвести в отрицательную степень');
    if (base < 0 && !Number.isInteger(exponent)) {
      return fail('Отрицательное основание требует целого показателя');
    }
    value = Math.pow(base, exponent);
  }

  if (!Number.isFinite(value)) return fail('Результат слишком велик для точного расчёта');

  return {
    primary: { label: 'Результат', value: formatMeasure(value, fmtNumber) },
    secondary: [
      { label: 'Основание', value: formatMeasure(base, fmtNumber) },
      { label: 'Показатель', value: formatMeasure(exponent, fmtNumber) },
      { label: 'Действие', value: root ? 'корень' : 'степень' },
    ],
  };
};
