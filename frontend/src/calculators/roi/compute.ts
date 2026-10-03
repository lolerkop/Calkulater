import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';

// Возврат на вложения.
//   ROI = (получено − вложено − дополнительные затраты) / (вложено + доп.) × 100
// Дополнительные затраты входят и в числитель, и в знаменатель: они такая же
// часть вложений, как и основная сумма. Считать их только в числителе значило
// бы завысить доходность — распространённая ошибка, из-за которой проект
// выглядит лучше, чем есть.
// Required fields reject coercions; a blank optional amount means zero.
function numericInput(value: unknown, optional = false): number {
  if (optional && (value === undefined || (typeof value === 'string' && value.trim() === ''))) return 0;
  if (typeof value !== 'number' && typeof value !== 'string') return NaN;
  return toNumber(value, NaN);
}

export const compute: CalcFunction = (inputs) => {
  const received = numericInput(inputs.received);
  const invested = numericInput(inputs.invested);
  const extra = numericInput(inputs.extra, true);
  const extraCost = extra;
  const total = invested + extraCost;

  const fail = (message: string) => ({
    primary: { label: 'ROI', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (![received, invested, extra].every(Number.isFinite)) return fail('Введите конечные числовые значения.');
  if ([received, invested, extra].some((amount) => amount < 0)) return fail('Суммы не могут быть отрицательными');
  if (!Number.isFinite(total)) return fail('Результат выходит за пределы числовой точности.');

  if (!(total > 0)) {
    return {
      primary: { label: 'ROI', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Сумма вложений должна быть больше нуля', accent: 'red' as const }],
    };
  }

  const profit = received - total;
  const roi = (profit / total) * 100;
  if (![profit, roi].every(Number.isFinite)) return fail('Результат выходит за пределы числовой точности.');

  return {
    primary: { label: 'ROI', value: `${fmtNumber(roi, 2)} %` },
    secondary: [
      { label: 'Прибыль', value: fmtMoney(profit), accent: profit >= 0 ? 'green' : 'red' },
      { label: 'Всего вложено', value: fmtMoney(total) },
      ...(extraCost > 0 ? [{ label: 'В том числе дополнительные затраты', value: fmtMoney(extraCost) }] : []),
      { label: 'Получено', value: fmtMoney(received) },
    ],
  };
};
