import type { CalcFunction } from '../types';
import { fmtMoney, toNumber, toStr } from '../format';

// Калькулятор НДС: выделить или начислить.
// Поддерживает ставки 20% (основная), 10% (льготная), 0%, а также произвольную.
export const calcVat: CalcFunction = (inputs) => {
  const amount = toNumber(inputs.amount);
  const rate = toNumber(inputs.rate, 20);
  const operation = toStr(inputs.operation, 'extract'); // extract — выделить из суммы, add — начислить сверху

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
  };
};
