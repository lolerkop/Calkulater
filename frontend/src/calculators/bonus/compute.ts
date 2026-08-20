import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

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
// Ставка налога в сто процентов и выше отклоняется: удержать всё начисленное
// нельзя, и такое значение означает ошибку ввода, а не нулевую выплату.
export const compute: CalcFunction = (inputs) => {
  const salary = toNumber(inputs.salary);
  const bonusPct = toNumber(inputs.bonusPct);
  const taxPct = toNumber(inputs.taxPct);

  const fail = (message: string) => ({
    primary: { label: 'Премия на руки', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(salary > 0)) return fail('Оклад должен быть больше нуля');
  if (bonusPct < 0) return fail('Процент премии не может быть отрицательным');
  if (!(taxPct >= 0 && taxPct < 100)) return fail('Ставка налога должна быть от нуля до ста процентов');

  const gross = (salary * bonusPct) / 100;
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label: 'Премия на руки', value: money(gross * (1 - taxPct / 100)) },
    secondary: [
      { label: 'Премия до налога', value: money(gross) },
      { label: 'Налог', value: money((gross * taxPct) / 100), accent: 'red' },
      { label: 'Оклад', value: money(salary) },
    ],
  };
};
