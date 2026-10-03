import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';

// Доставка на единицу товара.
//   на единицу = (доставка + упаковка) / число единиц
// Упаковка необязательна: пустое поле означает «упаковка не учитывается», а не
// ошибку ввода. Ноль здесь законное «ничего», как и в остальных необязательных
// суммах платформы.
// Required fields reject coercions; a blank optional amount means zero.
function numericInput(value: unknown, optional = false): number {
  if (optional && (value === undefined || (typeof value === 'string' && value.trim() === ''))) return 0;
  if (typeof value !== 'number' && typeof value !== 'string') return NaN;
  return toNumber(value, NaN);
}

export const compute: CalcFunction = (inputs) => {
  const shipping = numericInput(inputs.shipping);
  const units = numericInput(inputs.units);
  const packaging = numericInput(inputs.packaging, true);
  const packagingCost = packaging;

  const fail = (message: string) => ({
    primary: { label: 'Доставка на единицу', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (![shipping, units, packaging].every(Number.isFinite)) return fail('Введите конечные числовые значения.');

  if (!Number.isSafeInteger(units)) return fail('Число единиц должно быть целым');
  if (units <= 0) return fail('Единиц должно быть больше нуля');
  if (shipping < 0) return fail('Стоимость доставки не может быть отрицательной');

  if (packaging < 0) return fail('Стоимость упаковки не может быть отрицательной');
  const total = shipping + packagingCost;
  if (!Number.isFinite(total)) return fail('Результат выходит за пределы числовой точности.');

  return {
    primary: { label: 'Доставка на единицу', value: fmtMoney(total / units) },
    secondary: [
      { label: 'Всего логистики', value: fmtMoney(total) },
      ...(packagingCost > 0 ? [{ label: 'В том числе упаковка', value: fmtMoney(packagingCost) }] : []),
      { label: 'Единиц в партии', value: fmtNumber(units, 0) },
    ],
  };
};
