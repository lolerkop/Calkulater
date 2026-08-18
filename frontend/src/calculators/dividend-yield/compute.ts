import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';

// Дивидендная доходность: годовой дивиденд относительно цены акции.
//   доходность = дивиденд на акцию за год / цена акции × 100
// Никаких котировок извне: обе величины вводит пользователь. Доходность
// считается к той цене, которую вы указали, — к цене покупки она своя, к
// текущей рыночной другая, и подменять одно другим калькулятор не вправе.
export const compute: CalcFunction = (inputs) => {
  const dividend = toNumber(inputs.dividend);
  const price = toNumber(inputs.price);
  const shares = toNumber(inputs.shares);

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
  const hasShares = Number.isFinite(shares) && shares > 0;

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
