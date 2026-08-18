import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';

// Кредитная нагрузка: какая доля дохода уходит на обслуживание долгов.
//   DTI = ежемесячные платежи / месячный доход × 100
// Пороги оценки — распространённые банковские ориентиры, а не закон: до 30 %
// нагрузка обычно комфортна, до 43 % повышена, выше — высока. Они названы
// ориентирами и в тексте страницы, чтобы результат не выглядел решением банка.
export const compute: CalcFunction = (inputs) => {
  const payments = toNumber(inputs.payments);
  const income = toNumber(inputs.income);

  if (income <= 0) {
    return {
      primary: { label: 'Кредитная нагрузка', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Доход должен быть больше нуля', accent: 'red' as const }],
    };
  }

  const dti = (payments / income) * 100;
  const assessment = dti <= 30 ? 'Комфортная' : dti <= 43 ? 'Повышенная' : 'Высокая';
  const accent = dti <= 30 ? 'green' : dti <= 43 ? 'neutral' : 'red';

  return {
    primary: { label: 'Кредитная нагрузка', value: `${fmtNumber(dti, 2)} %` },
    secondary: [
      { label: 'Оценка', value: assessment, accent: accent as 'green' | 'neutral' | 'red' },
      { label: 'Остаётся после платежей', value: fmtMoney(income - payments), accent: income - payments >= 0 ? 'green' : 'red' },
      { label: 'Платежи по долгам', value: fmtMoney(payments) },
    ],
  };
};
