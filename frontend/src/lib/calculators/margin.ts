import type { CalcFunction } from '../types';
import { fmtMoney, fmtPct, toNumber, toStr } from '../format';

// Наценка и маржа — два разных отношения к одной и той же прибыли:
// наценка считается от себестоимости, маржа — от цены продажи.
export function markupFromMargin(marginPct: number): number {
  return (marginPct / (100 - marginPct)) * 100;
}

export function marginFromMarkup(markupPct: number): number {
  return (markupPct / (100 + markupPct)) * 100;
}

const invalid = (message: string) => ({
  primary: { label: 'Цена продажи', value: '—' },
  secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
});

export const calcMargin: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'fromPrice');
  const cost = toNumber(inputs.cost);
  const quantity = Math.max(1, Math.trunc(toNumber(inputs.quantity, 1)));

  if (cost <= 0) {
    return invalid('Введите себестоимость больше нуля');
  }

  let price: number;
  if (mode === 'fromMarkup') {
    price = cost * (1 + toNumber(inputs.markupPct) / 100);
  } else if (mode === 'fromMargin') {
    const marginPct = toNumber(inputs.marginPct);
    if (marginPct >= 100) {
      return invalid('Маржа должна быть меньше 100%');
    }
    price = cost / (1 - marginPct / 100);
  } else {
    price = toNumber(inputs.sellPrice);
  }

  if (!Number.isFinite(price) || price <= 0) {
    return invalid('Цена продажи должна быть больше нуля');
  }

  const profit = price - cost;
  const markupPct = (profit / cost) * 100;
  const marginPct = (profit / price) * 100;

  return {
    primary: { label: 'Цена продажи', value: fmtMoney(price) },
    secondary: [
      { label: 'Себестоимость', value: fmtMoney(cost) },
      { label: 'Прибыль с единицы', value: fmtMoney(profit), accent: profit >= 0 ? 'green' : 'red' },
      { label: 'Наценка', value: fmtPct(markupPct, 2) },
      { label: 'Маржа', value: fmtPct(marginPct, 2) },
      ...(quantity > 1
        ? [{ label: 'Прибыль за партию', value: fmtMoney(profit * quantity) }]
        : []),
    ],
    note: profit < 0
      ? 'Цена продажи ниже себестоимости, поэтому наценка и маржа отрицательные.'
      : undefined,
  };
};
