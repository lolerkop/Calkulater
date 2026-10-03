import type { CalcFunction } from '../types';
import { fmtMoney, fmtPct } from '../format';
import { number, integer } from '../platform/scalarInputDisplay';
import { choice } from '../platform/financeWave11Input';

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
  const mode = choice(inputs.mode, ['fromPrice', 'fromMarkup', 'fromMargin'], 'fromPrice');
  const cost = number(inputs.cost);
  const quantity = integer(inputs.quantity === undefined ? 1 : inputs.quantity);

  if (mode === null) return invalid('Выберите корректный режим расчёта');
  if (quantity === null || quantity < 1) return invalid('Количество должно быть целым числом не меньше 1');
  if (cost === null || cost <= 0) {
    return invalid('Введите себестоимость больше нуля');
  }

  let price: number;
  if (mode === 'fromMarkup') {
    const markup = number(inputs.markupPct);
    if (markup === null) return invalid('Введите корректные значения');
    price = cost * (1 + markup / 100);
  } else if (mode === 'fromMargin') {
    const marginPct = number(inputs.marginPct);
    if (marginPct === null) return invalid('Введите корректные значения');
    if (marginPct >= 100) {
      return invalid('Маржа должна быть меньше 100%');
    }
    price = cost / (1 - marginPct / 100);
  } else {
    const selling = number(inputs.sellPrice);
    if (selling === null) return invalid('Введите корректные значения');
    price = selling;
  }

  if (!Number.isFinite(price) || price <= 0) {
    return invalid('Цена продажи должна быть больше нуля');
  }

  const profit = price - cost;
  const markupPct = (profit / cost) * 100;
  const marginPct = (profit / price) * 100;

  if (![markupPct, marginPct, profit * quantity].every(Number.isFinite)) return invalid('Результат выходит за числовые пределы расчёта');
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
