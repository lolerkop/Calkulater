import type { CalcFunction } from '../../lib/types';
import { fmtInt } from '../../lib/format';
import { integerInput } from './numeric';

// Truncating division: the nonzero remainder has the dividend's sign.
// BigInt keeps the quotient and remainder exact inside the public safe-integer range.
export const compute: CalcFunction = (inputs) => {
  const a = integerInput(inputs.a);
  const b = integerInput(inputs.b);

  const fail = (message: string) => ({
    primary: { label: 'Остаток', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (a === null || b === null) return fail('Введите целые числа по модулю до 9007199254740991');
  if (b === 0) return fail('Делитель не может быть нулём');

  const quotient = Number(BigInt(a) / BigInt(b));
  const remainder = Number(BigInt(a) % BigInt(b));

  return {
    primary: { label: 'Остаток', value: fmtInt(remainder) },
    secondary: [
      { label: 'Частное', value: fmtInt(quotient) },
      { label: 'Проверка', value: `${fmtInt(a)} = ${fmtInt(b)} × ${fmtInt(quotient)} + ${fmtInt(remainder)}` },
      { label: 'Делится нацело', value: remainder === 0 ? 'Да' : 'Нет', accent: remainder === 0 ? 'green' : 'neutral' },
    ],
  };
};
