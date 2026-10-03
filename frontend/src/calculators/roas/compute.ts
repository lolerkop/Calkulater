import type { CalcFunction } from '../../lib/types';
import { money, number, text, validOutput } from './numeric';

// Revenue ROAS remains R/C. The margin-adjusted remainder after advertising is
// a contribution before fixed overhead, not net profit or full accounting ROI.
export const compute: CalcFunction = (inputs) => {
  const revenue = number(inputs.revenue), cost = number(inputs.cost), margin = number(inputs.margin);
  const fail = (message: string) => ({ primary: { label: 'ROAS', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (revenue === null || cost === null || margin === null) return fail('Введите корректные числовые данные');
  if (revenue < 0) return fail('Доход не может быть отрицательным');
  if (!(cost > 0)) return fail('Расход должен быть больше нуля');
  if (margin < 0 || margin > 100) return fail('Маржинальность задаётся в диапазоне от 0 до 100 процентов');
  const roas = revenue / cost, m = margin / 100;
  const grossAmount = revenue * m, contribution = grossAmount - cost;
  const grossRoas = roas * m, adReturn = (grossRoas - 1) * 100;
  const breakEven = m > 0 ? cost / m : null, breakEvenRoas = m > 0 ? 1 / m : null;
  if (!validOutput(m, margin > 0) || !validOutput(roas, revenue > 0) || !validOutput(roas * 100, revenue > 0) || !validOutput(grossAmount, revenue > 0 && margin > 0) || !validOutput(grossRoas, revenue > 0 && margin > 0) || !validOutput(contribution) || !validOutput(adReturn) || (breakEven !== null && (!validOutput(breakEven, true) || !validOutput(breakEvenRoas!, true)))) return fail('Результат вне допустимого диапазона');
  return { primary: { label: 'ROAS', value: `${text(roas)}×` }, secondary: [
    { label: 'ROAS в процентах', value: `${text(roas * 100)}%` },
    { label: 'Доходность рекламного расхода', value: `${text(adReturn)}%`, accent: (adReturn < 0 ? 'red' : 'green') as 'red' | 'green' },
    { label: 'Остаток после учтённых затрат и рекламы', value: money(contribution) },
    { label: 'Точка окупаемости по доходу', value: breakEven === null ? '—' : money(breakEven) },
    { label: 'ROAS для покрытия рекламы', value: breakEvenRoas === null ? '—' : `${text(breakEvenRoas)}×` },
    ...(m > 0 ? [{ label: 'ROAS по валовой марже', value: `${text(grossRoas)}×` }] : []),
  ], ...(m === 0 ? { note: 'При нулевой марже конечного порога покрытия рекламы нет.' } : {}) };
};
