import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Цена за единицу и сравнение двух упаковок.
//
// Единица здесь не пересчитывается: она только подписывает результат. Перевод
// граммов в килограммы остаётся за покупателем — молча делить на тысячу нельзя,
// потому что в поле может стоять и то и другое.
const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const SUFFIX: Record<string, string> = { kg: 'за кг', l: 'за л', pcs: 'за шт' };

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'single');
  const suffix = SUFFIX[toStr(inputs.unit, 'kg')] ?? 'за кг';
  const fail = (message: string) => ({
    primary: { label: 'Цена за единицу', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode === 'single') {
    const price = toNumber(inputs.price);
    const amount = toNumber(inputs.amount);
    if (!(price > 0)) return fail('Цена должна быть больше нуля');
    if (!(amount > 0)) return fail('Количество должно быть больше нуля');
    return {
      primary: { label: 'Цена за единицу', value: `${money(price / amount)} ${suffix}` },
      secondary: [
        { label: 'Цена упаковки', value: money(price) },
        { label: 'Количество в упаковке', value: fmtNumber(amount, 2) },
      ],
    };
  }

  const priceA = toNumber(inputs.priceA);
  const amountA = toNumber(inputs.amountA);
  const priceB = toNumber(inputs.priceB);
  const amountB = toNumber(inputs.amountB);
  if (!(priceA > 0) || !(priceB > 0)) return fail('Цена должна быть больше нуля');
  if (!(amountA > 0) || !(amountB > 0)) return fail('Количество должно быть больше нуля');

  const unitA = priceA / amountA;
  const unitB = priceB / amountB;
  const cheaper = Math.abs(unitA - unitB) < 1e-9 ? 'одинаково' : unitA < unitB ? 'A' : 'B';

  return {
    primary: { label: 'Выгоднее', value: cheaper },
    secondary: [
      { label: 'Упаковка A', value: `${money(unitA)} ${suffix}` },
      { label: 'Упаковка B', value: `${money(unitB)} ${suffix}` },
      { label: 'Переплата за единицу', value: `${money(Math.abs(unitA - unitB))} ${suffix}` },
    ],
  };
};
