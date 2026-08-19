import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Вовлечённость: доля реакций от аудитории.
//
// Знаменателей два, и они дают РАЗНЫЕ числа: охват отвечает на вопрос «как
// сработала публикация у тех, кто её увидел», подписчики — «как относительно
// всей аудитории». Ни один не назначен «правильным»: база выбирается явно и
// выводится в результате, потому что сравнивать можно только одинаковые базы.
const percent = (value: number) => `${fmtNumber(value, 2)}%`;

export const compute: CalcFunction = (inputs) => {
  const engagements = toNumber(inputs.engagements);
  const baseKind = toStr(inputs.base, 'reach');
  const base = baseKind === 'reach' ? toNumber(inputs.reach) : toNumber(inputs.followers);
  const fail = (message: string) => ({
    primary: { label: 'Вовлечённость', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (engagements < 0) return fail('Реакций не может быть отрицательное число');
  if (!(base > 0)) return fail('База должна быть больше нуля');

  return {
    primary: { label: 'Вовлечённость', value: percent((engagements / base) * 100) },
    secondary: [
      { label: 'База расчёта', value: baseKind === 'reach' ? 'охват' : 'подписчики' },
      { label: 'Реакций', value: fmtNumber(engagements, 0) },
      { label: 'Реакций на тысячу', value: fmtNumber((engagements / base) * 1000, 1) },
    ],
  };
};
