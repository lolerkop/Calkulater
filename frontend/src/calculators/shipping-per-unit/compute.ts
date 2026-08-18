import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';

// Доставка на единицу товара.
//   на единицу = (доставка + упаковка) / число единиц
// Упаковка необязательна: пустое поле означает «упаковка не учитывается», а не
// ошибку ввода. Ноль здесь законное «ничего», как и в остальных необязательных
// суммах платформы.
export const compute: CalcFunction = (inputs) => {
  const shipping = toNumber(inputs.shipping);
  const units = toNumber(inputs.units);
  const packaging = toNumber(inputs.packaging);
  const packagingCost = Number.isFinite(packaging) && packaging > 0 ? packaging : 0;

  const fail = (message: string) => ({
    primary: { label: 'Доставка на единицу', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!Number.isInteger(units)) return fail('Число единиц должно быть целым');
  if (units <= 0) return fail('Единиц должно быть больше нуля');
  if (shipping < 0) return fail('Стоимость доставки не может быть отрицательной');

  const total = shipping + packagingCost;

  return {
    primary: { label: 'Доставка на единицу', value: fmtMoney(total / units) },
    secondary: [
      { label: 'Всего логистики', value: fmtMoney(total) },
      ...(packagingCost > 0 ? [{ label: 'В том числе упаковка', value: fmtMoney(packagingCost) }] : []),
      { label: 'Единиц в партии', value: fmtNumber(units, 0) },
    ],
  };
};
