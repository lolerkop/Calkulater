import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Маржинальный доход: сколько остаётся от цены после переменных затрат.
//   маржа на единицу = цена − переменные затраты
//   доля в цене      = маржа / цена × 100
// Переменные затраты выше цены — осмысленный ответ, а не ошибка ввода: так
// выглядит убыточная позиция, и её надо показать, а не отклонить. Ошибкой
// являются неположительная цена, отрицательные затраты или объём и
// числовые значения вне поддерживаемого диапазона.
export const compute: CalcFunction = (inputs) => {
  const price = numericInput(inputs.price);
  const variable = numericInput(inputs.variable);
  const volume = numericInput(inputs.volume, true);
  const fail = (message: string) => ({
    primary: { label: 'Маржинальный доход', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (![price, variable, volume].every(Number.isFinite)) return fail('Введите конечные числовые значения.');
  if (variable < 0) return fail('Переменные затраты не могут быть отрицательными.');
  if (volume < 0) return fail('Объём не может быть отрицательным.');

  if (price <= 0) {
    return {
      primary: { label: 'Маржинальный доход', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Цена должна быть больше нуля', accent: 'red' as const }],
    };
  }

  const margin = price - variable;
  const ratio = (margin / price) * 100;
  const hasVolume = volume > 0;
  const total = margin * volume;
  if (![margin, ratio, total].every(Number.isFinite) || (margin !== 0 && (ratio === 0 || (hasVolume && total === 0)))) return fail('Результат вне допустимого диапазона');

  return {
    primary: { label: 'Маржинальный доход', value: money(margin) },
    secondary: [
      { label: 'Доля в цене', value: `${ratio !== 0 && Math.abs(ratio) < 1e-7 ? formatQuantity(ratio, fmtNumber) : fmtNumber(ratio, 2)} %`, accent: margin >= 0 ? 'green' : 'red' },
      ...(hasVolume
        ? [{ label: 'Маржинальный доход на объём', value: money(total) }]
        : []),
      { label: 'Переменные затраты', value: money(variable) },
      ...(margin < 0
        ? [{ label: 'Внимание', value: 'Переменные затраты выше цены', accent: 'red' as const }]
        : []),
    ],
  };
};

function numericInput(value: unknown, optional = false): number {
  if (optional && (value === undefined || (typeof value === 'string' && value.trim() === ''))) return 0;
  return typeof value === 'number' || typeof value === 'string' ? toNumber(value, NaN) : NaN;
}

function money(value: number): string {
  return value !== 0 && Math.abs(value) < 1e-7 ? `${formatQuantity(value, fmtNumber)} ₽` : fmtMoney(value);
}
