import type { CalcFunction } from '../../lib/types';
import { money, number, optionalNumber, text, validOutput } from './numeric';

// Monthly revenue and constant monthly customer churn. The first paid month
// is included, so geometric lifetime is 1/c and churn100% still pays once.
export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'months' : inputs.mode;
  const fail = (message: string) => ({ primary: { label: 'LTV', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode !== 'months' && mode !== 'churn') return fail('Неизвестный режим расчёта');
  const arpu = number(inputs.arpu), margin = number(inputs.margin), cac = optionalNumber(inputs.cac);
  const duration = number(mode === 'months' ? inputs.months : inputs.churn);
  if (arpu === null || margin === null || cac === null || duration === null) return fail('Введите корректные числовые данные');
  if (!(arpu > 0)) return fail('Средний доход должен быть больше нуля');
  if (!(margin > 0) || margin > 100) return fail('Маржа должна быть больше нуля и не превышать 100 процентов');
  if (cac < 0) return fail('Стоимость привлечения не может быть отрицательной');
  if (mode === 'months' && !(duration > 0)) return fail('Срок жизни должен быть больше нуля');
  if (mode === 'churn' && (!(duration > 0) || duration > 100)) return fail('Месячный отток должен быть больше нуля и не превышать 100 процентов');
  const lifetime = mode === 'churn' ? 100 / duration : duration, m = margin / 100;
  // Multiply the smallest and largest positive factors first. This avoids
  // rounding a tiny intermediate into the subnormal range even when it is
  // nonzero (A=1e-300, L=1e300, margin=1e-20% must give LTV=1e-22).
  const factors = [arpu, lifetime, m].sort((a, b) => a - b);
  const ltv = (factors[0] * factors[2]) * factors[1];
  const monthly = arpu * m, ratio = cac > 0 ? ltv / cac : null, payback = cac > 0 ? cac / monthly : null;
  if (!validOutput(lifetime, true) || !validOutput(m, true) || !validOutput(ltv, true) || (cac > 0 && (!validOutput(monthly, true) || !validOutput(ratio!, true) || !validOutput(payback!, true)))) return fail('Результат вне допустимого диапазона');
  return { primary: { label: 'LTV', value: money(ltv) }, secondary: [
    { label: 'Срок жизни клиента', value: `${text(lifetime)} мес` }, { label: 'Средний доход за месяц', value: money(arpu) }, { label: 'Валовая маржа', value: `${text(margin)}%` },
    ...(cac > 0 ? [{ label: 'Отношение LTV к CAC', value: `${text(ratio!)}×` }, { label: 'Простой срок покрытия CAC', value: `${text(payback!)} мес` }] : []),
  ] };
};
