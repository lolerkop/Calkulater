import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Правило 72: за сколько лет удвоится вклад.
//
// Правило — приближение, и в этом вся его ценность: семьдесят два, делённые
// на ставку, считаются в уме. Точный ответ даёт логарифм, и он выводится
// рядом вместе с расхождением — не чтобы подменить правило, а чтобы было
// видно, где оно начинает врать. На 8 % расхождение меньше недели, на 0,5 %
// правило ошибается на пять лет.
//
// Подменять приближение точной формулой нельзя: тогда это уже не правило 72,
// а обычный расчёт сложного процента, который на сайте есть отдельно.
const years = (value: number) => `${fmtNumber(value, 2)} лет`;

export const compute: CalcFunction = (inputs) => {
  const rate = toNumber(inputs.rate);
  const amount = toNumber(inputs.amount);

  if (!(rate > 0)) {
    return {
      primary: { label: 'Удвоение по правилу 72', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Ставка должна быть больше нуля', accent: 'red' as const }],
    };
  }

  const approx = 72 / rate;
  const exact = Math.log(2) / Math.log(1 + rate / 100);
  const gap = Math.abs(approx - exact);

  const secondary = [
    { label: 'Точный срок удвоения', value: years(exact) },
    { label: 'Расхождение правила', value: years(gap) },
    { label: 'Ставка', value: `${fmtNumber(rate, 2)}% годовых` },
  ];

  if (amount > 0) {
    secondary.push({ label: 'Сумма после удвоения', value: `${fmtNumber(amount * 2, 2)} ₽` });
  }

  return {
    primary: { label: 'Удвоение по правилу 72', value: years(approx) },
    secondary,
  };
};
