import type { CalcFunction, CalcResult } from '../types';
import { fmtMoney, fmtPct, toNumber, toStr } from '../format';

// Калькулятор скидки. Два режима:
//  - byPercent: исходная цена + скидка в %. Считаем итоговую цену и экономию.
//  - byAmount:  исходная цена + скидка в ₽. Считаем итоговую цену и %.
// Вторая скидка всегда процентная и применяется к уже сниженной цене.
// Количество меняет общую стоимость, а не цену и экономию одной единицы.
export const calcDiscount: CalcFunction = (inputs) => {
  if (inputs.mode !== undefined && typeof inputs.mode !== 'string') return discountError('Выберите допустимый режим расчёта.');
  const mode = toStr(inputs.mode, 'byPercent');
  if (!['byPercent', 'byAmount'].includes(mode)) return discountError('Выберите допустимый режим расчёта.');
  const rawDiscount = mode === 'byAmount' ? inputs.discountAmt : inputs.discountPct;
  const active = [inputs.price, rawDiscount ?? 0, inputs.secondDiscountPct ?? 0, inputs.quantity ?? 1];
  if (active.some((value) => typeof value !== 'number' && typeof value !== 'string')) return discountError('Введите конечные числовые значения.');
  const price = toNumber(inputs.price, NaN);
  const discount = toNumber(rawDiscount ?? 0, NaN);
  const secondRaw = toNumber(inputs.secondDiscountPct ?? 0, NaN);
  const quantity = toNumber(inputs.quantity ?? 1, NaN);
  if (![price, discount, secondRaw, quantity].every(Number.isFinite)) return discountError('Введите конечные числовые значения.');
  if (!Number.isSafeInteger(quantity) || quantity < 1) return discountError('Количество должно быть положительным целым числом.');
  if (mode === 'byAmount' && discount < 0) return discountError('Сумма скидки не может быть отрицательной.');
  const secondDiscountPct = Math.min(100, Math.max(0, secondRaw));

  if (price <= 0) {
    return {
      primary: { label: 'Цена со скидкой', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите цену больше нуля', accent: 'red' }],
    };
  }

  let saved: number;
  let pct: number;
  const warnings: string[] = [];

  if (mode === 'byAmount') {
    saved = Math.min(discount, price);
    if (discount > price) warnings.push('Скидка ограничена исходной ценой.');
    pct = (saved / price) * 100;
  } else {
    const clamped = Math.max(0, Math.min(100, discount));
    if (discount !== clamped) warnings.push('Процентная скидка ограничена диапазоном от 0 до 100%.');
    saved = price * (clamped / 100);
    pct = clamped;
  }
  if (secondRaw !== secondDiscountPct && !warnings.includes('Процентная скидка ограничена диапазоном от 0 до 100%.')) {
    warnings.push('Процентная скидка ограничена диапазоном от 0 до 100%.');
  }

  const firstPrice = price - saved;
  const secondSaved = firstPrice * secondDiscountPct / 100;
  const finalPrice = firstPrice - secondSaved;
  saved += secondSaved;
  pct = (saved / price) * 100;
  if (![finalPrice, saved, pct, finalPrice * quantity].every(Number.isFinite)) return discountError('Результат выходит за пределы числовой точности.');

  return {
    primary: { label: 'Цена со скидкой', value: fmtMoney(finalPrice) },
    secondary: [
      { label: 'Размер скидки', value: fmtMoney(saved), accent: 'green' },
      { label: 'Процент скидки', value: fmtPct(pct, 2) },
      { label: 'Исходная цена', value: fmtMoney(price) },
      ...(secondDiscountPct > 0 ? [{ label: 'Дополнительная скидка', value: fmtPct(secondDiscountPct, 2) }] : []),
      ...(quantity > 1 ? [{ label: 'Итого за товары', value: fmtMoney(finalPrice * quantity), accent: 'green' as const }] : []),
      ...warnings.map((value) => ({ label: 'Проверьте данные', value, accent: 'red' as const })),
    ],
  };
};

function discountError(message: string): CalcResult {
  return { primary: { label: 'Цена со скидкой', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' }] };
}
