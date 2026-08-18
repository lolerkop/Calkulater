import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';

// Окупаемость рекламы.
//   ROI  = (выручка − расходы) / расходы × 100
//   ROAS = выручка / расходы
// Обе величины отвечают на один вопрос по-разному, и путать их дорого: при
// выручке вдвое больше расходов ROAS равен 2, а ROI — 100 %. Показываются обе,
// чтобы цифру нельзя было прочитать не той шкалой.
export const compute: CalcFunction = (inputs) => {
  const revenue = toNumber(inputs.revenue);
  const spend = toNumber(inputs.spend);

  if (!(spend > 0)) {
    return {
      primary: { label: 'ROI рекламы', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Расходы на кампанию должны быть больше нуля', accent: 'red' as const }],
    };
  }

  const profit = revenue - spend;
  const roi = (profit / spend) * 100;
  const roas = revenue / spend;

  return {
    primary: { label: 'ROI рекламы', value: `${fmtNumber(roi, 2)} %` },
    secondary: [
      { label: 'ROAS', value: `${fmtNumber(roas, 2)} : 1`, accent: roas >= 1 ? 'green' : 'red' },
      { label: 'Прибыль кампании', value: fmtMoney(profit), accent: profit >= 0 ? 'green' : 'red' },
      { label: 'Расходы на кампанию', value: fmtMoney(spend) },
    ],
  };
};
