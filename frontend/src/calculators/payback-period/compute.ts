import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Срок окупаемости: простой и дисконтированный.
//
// Простой считается делением: вложение на годовой поток. Дисконтированный так
// не считается — приведённые потоки убывают, и срок находится накоплением: год
// за годом, пока сумма не покроет вложение, с линейной долей внутри последнего
// года.
//
// При ставке дисконтирования сумма бесконечного ряда равна поток/ставка. Если
// она меньше вложения, окупаемости НЕ БУДЕТ НИКОГДА, сколько ни считай, — и
// такой набор отвергается сразу, а не после тысячи итераций.
const MONTHS_IN_YEAR = 12;
const MAX_YEARS = 1000;

export const compute: CalcFunction = (inputs) => {
  const investment = toNumber(inputs.investment);
  const cashflow = toNumber(inputs.cashflow);
  const rate = toNumber(inputs.rate);
  const fail = (message: string) => ({
    primary: { label: 'Простой срок окупаемости', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(investment > 0)) return fail('Вложение должно быть больше нуля');
  if (!(cashflow > 0)) return fail('Годовой денежный поток должен быть больше нуля');
  if (!(rate >= 0)) return fail('Ставка дисконтирования не может быть отрицательной');

  const simple = investment / cashflow;
  const r = rate / 100;
  let discounted = simple;

  if (r > 0) {
    if (cashflow / r <= investment) {
      return fail('При такой ставке дисконтированные потоки не покроют вложение никогда');
    }
    let accumulated = 0;
    let solved = false;
    for (let year = 1; year <= MAX_YEARS; year += 1) {
      const step = cashflow / Math.pow(1 + r, year);
      if (accumulated + step >= investment) {
        discounted = year - 1 + (investment - accumulated) / step;
        solved = true;
        break;
      }
      accumulated += step;
    }
    if (!solved) return fail('При такой ставке дисконтированные потоки не покроют вложение никогда');
  }

  return {
    primary: { label: 'Простой срок окупаемости', value: `${formatMeasure(simple, fmtNumber)} лет` },
    secondary: [
      { label: 'В месяцах', value: `${formatMeasure(simple * MONTHS_IN_YEAR, fmtNumber)} мес` },
      { label: 'Дисконтированный срок', value: `${formatMeasure(discounted, fmtNumber)} лет` },
      { label: 'Годовой поток', value: `${formatMeasure(cashflow, fmtNumber)} ₽` },
      { label: 'Возврат за простой срок', value: `${formatMeasure(cashflow * simple, fmtNumber)} ₽` },
    ],
  };
};
