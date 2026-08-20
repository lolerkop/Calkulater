import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Остаточная стоимость автомобиля после нескольких лет владения.
//
//   стоимость = цена × (1 − первый год) × (1 − ставка)^(лет − 1)
//
// Первый год выделен отдельным множителем не ради усложнения: новая машина
// теряет больше всего именно при выезде из салона, и одна усреднённая ставка
// на весь срок систематически завышала бы стоимость трёхлетнего автомобиля.
//
// Годы округляются вниз до целого: рынок оценивает автомобиль по возрасту в
// годах, а не по дням, и «три с половиной года» торгуется как трёхлетний.
export const compute: CalcFunction = (inputs) => {
  const price = toNumber(inputs.price);
  const years = Math.floor(toNumber(inputs.years));
  const ratePct = toNumber(inputs.ratePct);
  const firstYearPct = toNumber(inputs.firstYearPct);

  const fail = (message: string) => ({
    primary: { label: 'Стоимость через срок', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(price > 0)) return fail('Цена покупки должна быть больше нуля');
  if (years < 0) return fail('Срок владения не может быть отрицательным');
  if (!(ratePct >= 0 && ratePct < 100)) return fail('Ставка потери должна быть от нуля до ста процентов');
  if (!(firstYearPct >= 0 && firstYearPct < 100)) return fail('Потеря за первый год должна быть от нуля до ста процентов');

  let value = years >= 1 ? price * (1 - firstYearPct / 100) : price;
  for (let year = 0; year < Math.max(0, years - 1); year += 1) value *= 1 - ratePct / 100;

  const lost = price - value;
  const money = (amount: number) => `${fmtNumber(amount, 2)} ₽`;

  return {
    primary: { label: 'Стоимость через срок', value: money(value) },
    secondary: [
      { label: 'Потеряно в деньгах', value: money(lost), accent: 'red' },
      { label: 'Потеряно, доля', value: `${fmtNumber((lost / price) * 100, 2)}%` },
      { label: 'Цена покупки', value: money(price) },
    ],
  };
};
