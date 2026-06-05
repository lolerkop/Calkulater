import type { CalcFunction } from '../types';
import { fmtMoney, toNumber, toStr } from '../format';

// Калькулятор скидки. Два режима:
//  - byPercent: исходная цена + скидка в %. Считаем итоговую цену и экономию.
//  - byAmount:  исходная цена + скидка в ₽. Считаем итоговую цену и %.
// Дополнительно: можно учесть НДС поверх итоговой цены.
export const calcDiscount: CalcFunction = (inputs) => {
  const price = toNumber(inputs.price);
  const mode = toStr(inputs.mode, 'byPercent');
  const discountPct = toNumber(inputs.discountPct);
  const discountAmt = toNumber(inputs.discountAmt);

  if (price <= 0) {
    return {
      primary: { label: 'Цена со скидкой', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите цену больше нуля', accent: 'red' }],
    };
  }

  let saved: number;
  let pct: number;

  if (mode === 'byAmount') {
    saved = Math.min(discountAmt, price);
    pct = (saved / price) * 100;
  } else {
    const clamped = Math.max(0, Math.min(100, discountPct));
    saved = price * (clamped / 100);
    pct = clamped;
  }

  const finalPrice = price - saved;

  return {
    primary: { label: 'Цена со скидкой', value: fmtMoney(finalPrice) },
    secondary: [
      { label: 'Размер скидки', value: fmtMoney(saved), accent: 'green' },
      { label: 'Процент скидки', value: `${pct.toFixed(2)}%` },
      { label: 'Исходная цена', value: fmtMoney(price) },
    ],
  };
};
