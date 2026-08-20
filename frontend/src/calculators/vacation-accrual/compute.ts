import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Накопление отпускных дней.
//
//   за месяц  = дней в году / 12
//   накоплено = за месяц × отработанных месяцев
//   остаток   = накоплено − использовано
//
// Дни начисляются равномерно, а не выдаются авансом в январе: отработав
// половину года, вы заработали половину годовой нормы, сколько бы дней
// ни было запланировано. При годовой норме 28 это 2,333 дня в месяц —
// дробное число, и округлять его вверх «в свою пользу» бухгалтерия не станет.
//
// Отрицательный остаток здесь законен и показывается как есть: он означает,
// что отпуск взят авансом, и это обычная ситуация, а не ошибка ввода.
export const compute: CalcFunction = (inputs) => {
  const daysPerYear = toNumber(inputs.daysPerYear);
  const monthsWorked = toNumber(inputs.monthsWorked);
  const daysUsed = toNumber(inputs.daysUsed);

  const fail = (message: string) => ({
    primary: { label: 'Остаток отпуска', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(daysPerYear > 0)) return fail('Годовая норма отпуска должна быть больше нуля');
  if (monthsWorked < 0) return fail('Отработанные месяцы не могут быть отрицательными');
  if (daysUsed < 0) return fail('Использованные дни не могут быть отрицательными');

  const perMonth = daysPerYear / 12;
  const accrued = perMonth * monthsWorked;
  const days = (value: number) => `${formatMeasure(value, fmtNumber)} дн.`;

  return {
    primary: { label: 'Остаток отпуска', value: days(accrued - daysUsed) },
    secondary: [
      { label: 'Накоплено', value: days(accrued) },
      { label: 'За месяц', value: days(perMonth) },
      { label: 'Использовано', value: days(daysUsed) },
    ],
  };
};
