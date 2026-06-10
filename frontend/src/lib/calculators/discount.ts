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
  const secondDiscountPct = Math.min(100, Math.max(0, toNumber(inputs.secondDiscountPct)));
  const quantity = Math.max(1, Math.round(toNumber(inputs.quantity, 1)));

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

  const firstPrice = price - saved;
  const secondSaved = firstPrice * secondDiscountPct / 100;
  const finalPrice = firstPrice - secondSaved;
  saved += secondSaved;
  pct = (saved / price) * 100;

  return {
    primary: { label: 'Цена со скидкой', value: fmtMoney(finalPrice) },
    secondary: [
      { label: 'Размер скидки', value: fmtMoney(saved), accent: 'green' },
      { label: 'Процент скидки', value: `${pct.toFixed(2)}%` },
      { label: 'Исходная цена', value: fmtMoney(price) },
      ...(secondDiscountPct > 0 ? [{ label: 'Дополнительная скидка', value: `${secondDiscountPct.toFixed(2)}%` }] : []),
      ...(quantity > 1 ? [{ label: 'Итого за товары', value: fmtMoney(finalPrice * quantity), accent: 'green' as const }] : []),
    ],
  };
};
