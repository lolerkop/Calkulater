import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import { formatMeasure } from '../../lib/platform/measurement';

// Накопление отпускных дней.
//
//   за месяц  = дней в году / 12
//   накоплено = за месяц × отработанных месяцев
//   остаток   = накоплено − использовано
//
// Это выбранная линейная модель одного 12-месячного периода, не универсальное
// кадровое правило. Дробные месяцы/дни и отрицательный модельный остаток
// поддерживаются; право, округление и удержания определяются отдельно.
export const compute: CalcFunction = (inputs) => {
  const daysPerYear = toNumber(inputs.daysPerYear);
  const monthsWorked = toNumber(inputs.monthsWorked);
  const daysUsed = toNumber(inputs.daysUsed);

  const fail = (message: string) => ({
    primary: { label: 'Остаток отпуска', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (daysPerYear === null || monthsWorked === null || daysUsed === null) return fail('Введите корректные числовые данные');

  if (!(daysPerYear > 0)) return fail('Годовая норма отпуска должна быть больше нуля');
  if (monthsWorked < 0) return fail('Отработанные месяцы не могут быть отрицательными');
  if (monthsWorked > 12) return fail('Отработанные месяцы должны быть в пределах одного года');
  if (daysUsed < 0) return fail('Использованные дни не могут быть отрицательными');

  const perMonth = daysPerYear / 12;
  const accrued = perMonth * monthsWorked;
  const balance = accrued - daysUsed;
  if (![perMonth, accrued, balance].every(v => validOutput(v)) || perMonth <= 0 || (monthsWorked > 0 && accrued === 0)) return fail('Результат вне допустимого диапазона');
  const days = (value: number) => `${formatMeasure(value, fmtNumber)} дн.`;

  return {
    primary: { label: 'Остаток отпуска', value: days(balance) },
    secondary: [
      { label: 'Накоплено', value: days(accrued) },
      { label: 'За месяц', value: days(perMonth) },
      { label: 'Использовано', value: days(daysUsed) },
    ],
  };
};
