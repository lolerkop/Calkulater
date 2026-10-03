import type { CalcFunction } from '../../lib/types';
import { money, number, text } from '../../lib/platform/scalarInputDisplay';

// Split the purchase price. No lender minimum or affordability inputs exist,
// so this arithmetic does not determine loan eligibility or approval.
const percent = (value: number) => `${text(value)}%`;

export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'percent' : inputs.mode;
  const price = number(inputs.price);
  const fail = (message: string) => ({
    primary: { label: 'Первоначальный взнос', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (mode !== 'percent' && mode !== 'amount') return fail('Неизвестный режим расчёта');
  if (price === null) return fail('Введите корректные числовые данные');
  if (!(price > 0)) return fail('Цена покупки должна быть больше нуля');

  let down = 0;
  let share = 0;
  if (mode === 'percent') {
    const percentage = number(inputs.percent);
    if (percentage === null) return fail('Введите корректные числовые данные');
    share = percentage;
    if (share < 0 || share > 100) return fail('Доля взноса должна быть от 0 до 100 %');
    down = price * (share / 100);
  } else {
    const amount = number(inputs.downPayment);
    if (amount === null) return fail('Введите корректные числовые данные');
    down = amount;
    if (down < 0) return fail('Взнос не может быть отрицательным');
    if (down > price) return fail('Взнос не может превышать цену покупки');
    share = (down / price) * 100;
  }

  if (![down, share, price - down].every(Number.isFinite) || (share > 0 && down === 0) || (down > 0 && share === 0)) return fail('Результат вне допустимого диапазона');

  return {
    primary: { label: 'Первоначальный взнос', value: money(down) },
    secondary: [
      { label: 'Сумма кредита', value: money(price - down) },
      { label: 'Доля взноса', value: percent(share) },
    ],
  };
};
