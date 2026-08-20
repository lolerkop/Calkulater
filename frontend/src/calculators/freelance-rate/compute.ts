import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Часовая ставка фрилансера от желаемого дохода.
//
// Считает в обратную сторону по сравнению со стоимостью рабочего дня: там
// известна зарплата и выводится цена часа, здесь известен нужный доход НА РУКИ
// и выводится ставка, которую надо выставлять клиенту. Между ними две поправки,
// без которых ставка занижается систематически.
//
// Первая — оплачиваемая доля: часы уходят на переписку, счета и поиск заказов,
// и делить доход на все рабочие часы значит считать бесплатной половину недели.
// Вторая — налог: он берётся с оборота, поэтому выставить нужно БОЛЬШЕ, чем
// хочется получить, и делить доход на (1 − ставка) — не то же самое, что
// прибавить к нему процент.

const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

export const compute: CalcFunction = (inputs) => {
  const targetIncome = toNumber(inputs.targetIncome);
  const workDays = toNumber(inputs.workDays);
  const hoursPerDay = toNumber(inputs.hoursPerDay);
  const billablePct = toNumber(inputs.billablePct);
  const expenses = toNumber(inputs.expenses);
  const taxPct = toNumber(inputs.taxPct);

  const fail = (message: string) => ({
    primary: { label: 'Ставка за час', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(targetIncome > 0)) return fail('Желаемый доход должен быть больше нуля');
  if (!(workDays > 0)) return fail('Число рабочих дней должно быть больше нуля');
  if (!(hoursPerDay > 0)) return fail('Число часов в дне должно быть больше нуля');
  if (!(billablePct > 0)) return fail('Оплачиваемая доля должна быть больше нуля');
  if (expenses < 0) return fail('Расходы не могут быть отрицательными');
  if (taxPct < 0 || taxPct >= 100) return fail('Ставка налога должна быть меньше 100 %');

  const billableHours = (workDays * hoursPerDay * billablePct) / 100;
  const gross = (targetIncome + expenses) / (1 - taxPct / 100);
  const rate = gross / billableHours;

  return {
    primary: { label: 'Ставка за час', value: money(rate) },
    secondary: [
      { label: 'Оплачиваемых часов', value: `${formatMeasure(billableHours, fmtNumber)} ч` },
      { label: 'Нужно выставить счетов', value: money(gross) },
      { label: 'Ставка за день', value: money((rate * hoursPerDay * billablePct) / 100) },
      ...(expenses > 0 ? [{ label: 'Расходы на работу', value: money(expenses) }] : []),
      { label: 'Налог', value: money((gross * taxPct) / 100) },
    ],
  };
};
