import type { CalcFunction } from '../types';
import { fmtMoney, toNumber, toStr } from '../format';

// Калькулятор НДС: выделить или начислить.
// Поддерживает ставки 22% (основная), 20% (историческая), 10%, 7%, 5% и 0%.
export const calcVat: CalcFunction = (inputs) => {
  const amount = toNumber(inputs.amount);
  const rate = toNumber(inputs.rate, 22);
  const operation = toStr(inputs.operation, 'extract'); // extract — выделить из суммы, add — начислить сверху
  const operationDate = toStr(inputs.operationDate);

  if (amount <= 0 || rate < 0) {
    return {
      primary: { label: 'НДС', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите корректные значения', accent: 'red' }],
    };
  }

  const r = rate / 100;
  let net: number; // сумма без НДС
  let vat: number; // сам НДС
  let gross: number; // сумма с НДС

  if (operation === 'add') {
    net = amount;
    vat = amount * r;
    gross = amount + vat;
  } else {
    gross = amount;
    vat = (amount * r) / (1 + r);
    net = amount - vat;
  }

  return {
    primary: { label: `НДС ${rate}%`, value: fmtMoney(vat) },
    secondary: [
      { label: 'Сумма без НДС', value: fmtMoney(net) },
      { label: 'Сумма с НДС', value: fmtMoney(gross), accent: 'green' },
    ],
    note: operationDate && operationDate < '2026-01-01' && rate === 22
      ? 'Для операций до 1 января 2026 года проверьте ставку: основная ставка 22% применяется с 2026 года.'
      : operationDate && operationDate >= '2026-01-01' && rate === 20
        ? 'Для операций с 1 января 2026 года проверьте ставку: основная ставка была повышена до 22%.'
        : undefined,
  };
};
