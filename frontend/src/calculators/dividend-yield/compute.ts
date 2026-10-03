import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';

// Дивидендная доходность: годовой дивиденд относительно цены акции.
//   доходность = дивиденд на акцию за год / цена акции × 100
// Никаких котировок извне: обе величины вводит пользователь. Доходность
// считается к той цене, которую вы указали, — к цене покупки она своя, к
// текущей рыночной другая, и подменять одно другим калькулятор не вправе.
// Required fields reject coercions; a blank optional amount means zero.
function numericInput(value: unknown, optional = false): number {
  if (optional && (value === undefined || (typeof value === 'string' && value.trim() === ''))) return 0;
  if (typeof value !== 'number' && typeof value !== 'string') return NaN;
  return toNumber(value, NaN);
}

export const compute: CalcFunction = (inputs) => {
  const dividend = numericInput(inputs.dividend);
  const price = numericInput(inputs.price);
  const shares = numericInput(inputs.shares, true);

  const fail = (message: string) => ({
    primary: { label: 'Дивидендная доходность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (![dividend, price, shares].every(Number.isFinite)) return fail('Введите конечные числовые значения.');
  if (shares < 0) return fail('Количество акций не может быть отрицательным');

  if (!(price > 0)) {
    return {
      primary: { label: 'Дивидендная доходность', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Цена акции должна быть больше нуля', accent: 'red' as const }],
    };
  }
  if (dividend < 0) {
    return {
      primary: { label: 'Дивидендная доходность', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Дивиденд не может быть отрицательным', accent: 'red' as const }],
    };
  }

  const yieldPct = (dividend / price) * 100;
  const hasShares = shares > 0;
  if (![yieldPct, dividend * shares, price * shares].every(Number.isFinite)) return fail('Результат выходит за пределы числовой точности.');

  return {
    primary: { label: 'Дивидендная доходность', value: `${fmtNumber(yieldPct, 2)} %` },
    secondary: [
      { label: 'Дивиденд на акцию за год', value: fmtMoney(dividend) },
      ...(hasShares
        ? [
            { label: 'Дивиденды на пакет', value: fmtMoney(dividend * shares) },
            { label: 'Стоимость пакета', value: fmtMoney(price * shares) },
          ]
        : []),
    ],
  };
};
