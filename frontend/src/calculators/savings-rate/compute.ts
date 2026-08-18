import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';

// Норма сбережений: какая доля дохода остаётся после расходов.
//   сбережения = доход − расходы
//   норма      = сбережения / доход × 100
// Перерасход — осмысленный ответ, а не ошибка: он даёт отрицательную норму
// и предупреждение. Ошибкой является только нулевой доход, потому что тогда
// доля неопределена.
export const compute: CalcFunction = (inputs) => {
  const income = toNumber(inputs.income);
  const expenses = toNumber(inputs.expenses);

  if (income <= 0) {
    return {
      primary: { label: 'Норма сбережений', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Доход должен быть больше нуля', accent: 'red' }],
    };
  }

  const saved = income - expenses;
  const rate = (saved / income) * 100;

  return {
    primary: { label: 'Норма сбережений', value: `${fmtNumber(rate, 2)} %` },
    secondary: [
      { label: 'Сбережения за период', value: fmtMoney(saved), accent: saved >= 0 ? 'green' : 'red' },
      { label: 'Доход', value: fmtMoney(income) },
      { label: 'Расходы', value: fmtMoney(expenses) },
      ...(saved < 0
        ? [{ label: 'Внимание', value: 'Расходы превышают доход', accent: 'red' as const }]
        : []),
    ],
  };
};
