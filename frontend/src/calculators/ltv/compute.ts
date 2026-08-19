import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// LTV: пожизненная ценность клиента.
//
// Соглашений у LTV много, и здесь взято одно, названное явно: средний доход
// за период, умноженный на срок жизни и на валовую маржу. Срок либо задаётся
// напрямую, либо выводится из оттока как единица, делённая на его долю.
//
// Нулевой отток запрещён: он означал бы, что клиенты не уходят никогда, и
// срок жизни обратился бы в бесконечность.
const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'months');
  const arpu = toNumber(inputs.arpu);
  const months = toNumber(inputs.months);
  const churn = toNumber(inputs.churn);
  const margin = toNumber(inputs.margin);
  const cac = toNumber(inputs.cac);

  const fail = (message: string) => ({
    primary: { label: 'LTV', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(arpu > 0)) return fail('Средний доход должен быть больше нуля');
  if (margin <= 0 || margin > 100) return fail('Маржа задаётся в диапазоне от 0 до 100 процентов');
  if (cac < 0) return fail('Стоимость привлечения не может быть отрицательной');

  let lifetime: number;
  if (mode === 'churn') {
    if (!(churn > 0) || churn > 100) return fail('Отток задаётся в диапазоне от 0 до 100 процентов');
    lifetime = 1 / (churn / 100);
  } else {
    if (!(months > 0)) return fail('Срок жизни должен быть больше нуля');
    lifetime = months;
  }

  const ltv = arpu * lifetime * (margin / 100);

  const secondary = [
    { label: 'Срок жизни клиента', value: `${fmtNumber(lifetime, 2)} мес` },
    { label: 'Средний доход за период', value: money(arpu) },
    { label: 'Валовая маржа', value: `${fmtNumber(margin, 2)}%` },
  ];

  if (cac > 0) {
    secondary.push({ label: 'Отношение LTV к CAC', value: `${fmtNumber(ltv / cac, 2)}×` });
    secondary.push({ label: 'Окупаемость привлечения', value: `${fmtNumber(cac / (arpu * (margin / 100)), 2)} мес` });
  }

  return {
    primary: { label: 'LTV', value: money(ltv) },
    secondary,
  };
};
