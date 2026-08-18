import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';

// Стоимость привлечения клиента: сколько потрачено на каждого нового клиента.
//   CAC = расходы на маркетинг и продажи / число привлечённых клиентов
// Если известен средний доход с клиента, показывается и отношение LTV к CAC —
// именно оно, а не сам CAC, отвечает на вопрос, окупается ли привлечение.
export const compute: CalcFunction = (inputs) => {
  const spend = toNumber(inputs.spend);
  const customers = toNumber(inputs.customers);
  const ltv = toNumber(inputs.ltv);

  const fail = (message: string) => ({
    primary: { label: 'Стоимость привлечения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!Number.isInteger(customers)) return fail('Число клиентов должно быть целым');
  if (customers <= 0) return fail('Клиентов должно быть больше нуля');
  if (spend < 0) return fail('Расходы не могут быть отрицательными');

  const cac = spend / customers;
  const hasLtv = Number.isFinite(ltv) && ltv > 0;
  const ratio = hasLtv ? ltv / cac : 0;

  return {
    primary: { label: 'Стоимость привлечения', value: fmtMoney(cac) },
    secondary: [
      { label: 'Расходы за период', value: fmtMoney(spend) },
      { label: 'Привлечено клиентов', value: fmtNumber(customers, 0) },
      ...(hasLtv
        ? [{
            label: 'LTV к CAC',
            value: `${fmtNumber(ratio, 2)} : 1`,
            accent: (ratio >= 3 ? 'green' : ratio >= 1 ? 'neutral' : 'red') as 'green' | 'neutral' | 'red',
          }]
        : []),
    ],
  };
};
