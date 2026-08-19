import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Первоначальный взнос делит цену на две части.
//
// Ставка и срок сюда НЕ входят: это отдельный расчёт платежа. Здесь решается
// вопрос «хватает ли на взнос и сколько останется занять».
const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const percent = (value: number) => `${fmtNumber(value, 2)}%`;

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'percent');
  const price = toNumber(inputs.price);
  const fail = (message: string) => ({
    primary: { label: 'Первоначальный взнос', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (!(price > 0)) return fail('Цена покупки должна быть больше нуля');

  let down = 0;
  let share = 0;
  if (mode === 'percent') {
    share = toNumber(inputs.percent);
    if (share < 0 || share > 100) return fail('Доля взноса должна быть от 0 до 100 %');
    down = (price * share) / 100;
  } else {
    down = toNumber(inputs.downPayment);
    if (down < 0) return fail('Взнос не может превышать цену покупки');
    if (down > price) return fail('Взнос не может превышать цену покупки');
    share = (down / price) * 100;
  }

  return {
    primary: { label: 'Первоначальный взнос', value: money(down) },
    secondary: [
      { label: 'Сумма кредита', value: money(price - down) },
      { label: 'Доля взноса', value: percent(share) },
    ],
  };
};
