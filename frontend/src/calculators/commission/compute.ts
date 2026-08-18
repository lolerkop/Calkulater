import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber, toStr } from '../../lib/format';

// Комиссия в трёх направлениях. Режим решает, что известно и что ищем:
//   fromAmount     — сумма и ставка  → комиссия и остаток
//   fromCommission — комиссия и ставка → сумма сделки
//   rate           — сумма и комиссия → ставка
// Каждое направление имеет свой запретный ноль в знаменателе, поэтому проверка
// выполняется отдельно для каждого режима, а не одной общей.
export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'fromAmount');
  const a = toNumber(inputs.a);
  const b = toNumber(inputs.b);
  const fail = (reason: string) => ({
    primary: { label: 'Комиссия', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: reason, accent: 'red' as const }],
  });

  if (mode === 'fromCommission') {
    if (b <= 0) return fail('Ставка комиссии должна быть больше нуля');
    const amount = (a * 100) / b;
    return {
      primary: { label: 'Сумма сделки', value: fmtMoney(amount) },
      secondary: [
        { label: 'Комиссия', value: fmtMoney(a) },
        { label: 'Ставка комиссии', value: `${fmtNumber(b, 2)} %` },
        { label: 'К получению', value: fmtMoney(amount - a), accent: 'green' },
      ],
    };
  }

  if (mode === 'rate') {
    if (a <= 0) return fail('Сумма сделки должна быть больше нуля');
    return {
      primary: { label: 'Ставка комиссии', value: `${fmtNumber((b / a) * 100, 2)} %` },
      secondary: [
        { label: 'Сумма сделки', value: fmtMoney(a) },
        { label: 'Комиссия', value: fmtMoney(b) },
        { label: 'К получению', value: fmtMoney(a - b), accent: 'green' },
      ],
    };
  }

  const commission = (a * b) / 100;
  return {
    primary: { label: 'Комиссия', value: fmtMoney(commission) },
    secondary: [
      { label: 'Сумма сделки', value: fmtMoney(a) },
      { label: 'Ставка комиссии', value: `${fmtNumber(b, 2)} %` },
      { label: 'К получению', value: fmtMoney(a - commission), accent: 'green' },
    ],
  };
};
