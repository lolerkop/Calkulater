import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';

// Возврат на вложения.
//   ROI = (получено − вложено − дополнительные затраты) / (вложено + доп.) × 100
// Дополнительные затраты входят и в числитель, и в знаменатель: они такая же
// часть вложений, как и основная сумма. Считать их только в числителе значило
// бы завысить доходность — распространённая ошибка, из-за которой проект
// выглядит лучше, чем есть.
export const compute: CalcFunction = (inputs) => {
  const received = toNumber(inputs.received);
  const invested = toNumber(inputs.invested);
  const extra = toNumber(inputs.extra);
  const extraCost = Number.isFinite(extra) && extra > 0 ? extra : 0;
  const total = invested + extraCost;

  if (!(total > 0)) {
    return {
      primary: { label: 'ROI', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Сумма вложений должна быть больше нуля', accent: 'red' as const }],
    };
  }

  const profit = received - total;
  const roi = (profit / total) * 100;

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
