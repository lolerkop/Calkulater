import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';

// Окупаемость рекламы.
//   ROI  = (выручка − расходы) / расходы × 100
//   ROAS = выручка / расходы
// Обе величины отвечают на один вопрос по-разному, и путать их дорого: при
// выручке вдвое больше расходов ROAS равен 2, а ROI — 100 %. Показываются обе,
// чтобы цифру нельзя было прочитать не той шкалой.
// Required fields reject coercions; a blank optional amount means zero.
function numericInput(value: unknown, optional = false): number {
  if (optional && (value === undefined || (typeof value === 'string' && value.trim() === ''))) return 0;
  if (typeof value !== 'number' && typeof value !== 'string') return NaN;
  return toNumber(value, NaN);
}

export const compute: CalcFunction = (inputs) => {
  const revenue = numericInput(inputs.revenue);
  const spend = numericInput(inputs.spend);

  const fail = (message: string) => ({
    primary: { label: 'ROI рекламы', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (![revenue, spend].every(Number.isFinite)) return fail('Введите конечные числовые значения.');
  if (revenue < 0) return fail('Выручка не может быть отрицательной');

  if (!(spend > 0)) {
    return {
      primary: { label: 'ROI рекламы', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Расходы на кампанию должны быть больше нуля', accent: 'red' as const }],
    };
  }

  const profit = revenue - spend;
  const roi = (profit / spend) * 100;
  const roas = revenue / spend;

  if (![profit, roi, roas].every(Number.isFinite)) return fail('Результат выходит за пределы числовой точности.');

  return {
    primary: { label: 'ROI рекламы', value: `${fmtNumber(roi, 2)} %` },
    secondary: [
      { label: 'ROAS', value: `${fmtNumber(roas, 2)} : 1`, accent: roas >= 1 ? 'green' : 'red' },
      { label: 'Выручка минус реклама', value: fmtMoney(profit), accent: profit >= 0 ? 'green' : 'red' },
      { label: 'Расходы на кампанию', value: fmtMoney(spend) },
    ],
  };
};
