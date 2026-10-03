import { number, validOutput } from '../../lib/platform/scalarInputDisplay';
import { displayMoney } from '../../lib/platform/financeDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';

// Премия к окладу: сколько начислят и сколько дойдёт до карты.
//
//   премия до налога = оклад × процент премии / 100
//   налог            = премия до налога × ставка / 100
//   на руки          = премия до налога − налог
//
// Разница между объявленной премией и полученной суммой — обычный источник
// недоразумений: «премия тридцать процентов» называет начисление, а видит
// сотрудник сумму после удержания. Обе величины показаны рядом именно поэтому.
//
// Модель допускает заданное удержание от 0 до менее 100%; она не определяет
// налоговые правила страны или право на выплату.
export const compute: CalcFunction = (inputs) => {
  const salary = number(inputs.salary);
  const bonusPct = number(inputs.bonusPct);
  const taxPct = number(inputs.taxPct);

  const fail = (message: string) => ({
    primary: { label: 'Премия на руки', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (salary === null || bonusPct === null || taxPct === null) return fail('Введите корректные значения');
  if (!(salary > 0)) return fail('Оклад должен быть больше нуля');
  if (bonusPct < 0) return fail('Процент премии не может быть отрицательным');
  if (!(taxPct >= 0 && taxPct < 100)) return fail('Ставка налога должна быть от нуля до ста процентов');

  const gross = salary * (bonusPct / 100);
  const tax = gross * (taxPct / 100);
  const net = gross - tax;
  if (![gross, tax, net].every(value => validOutput(value))) return fail('Результат выходит за числовые пределы расчёта');
  const money = displayMoney;

  return {
    primary: { label: 'Премия на руки', value: money(net) },
    secondary: [
      { label: 'Премия до налога', value: money(gross) },
      { label: 'Налог', value: money(tax), accent: 'red' },
      { label: 'Оклад', value: money(salary) },
    ],
  };
};
