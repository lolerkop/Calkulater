import type { CalcFunction } from '../types';
import { fmtMoney } from '../format';
import { number } from '../platform/scalarInputDisplay';
import { choice } from '../platform/financeWave11Input';
import { isValidIsoDate } from '../date';

// Калькулятор НДС: выделить или начислить.
// Поддерживает ставки 22% (основная), 20% (историческая), 10%, 7%, 5% и 0%.
export const calcVat: CalcFunction = (inputs) => {
  const amount = number(inputs.amount);
  const rate = number(inputs.rate === undefined ? 22 : inputs.rate);
  const operation = choice(inputs.operation, ['extract', 'add'], 'extract'); // extract — выделить из суммы, add — начислить сверху
  const operationDate = inputs.operationDate === undefined ? '' : typeof inputs.operationDate === 'string' ? inputs.operationDate : null;

  if (amount === null || rate === null || operation === null || operationDate === null || (operationDate !== '' && !isValidIsoDate(operationDate)) || amount <= 0 || ![0, 5, 7, 10, 20, 22].includes(rate)) {
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
    vat = amount * (r / (1 + r));
    net = amount - vat;
  }

  if (![net, vat, gross].every(Number.isFinite) || net <= 0) return { primary: { label: 'НДС', value: '—' }, secondary: [{ label: 'Проверьте данные', value: 'Результат выходит за числовые пределы расчёта', accent: 'red' }] };
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
