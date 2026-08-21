import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Столбчатый фундамент: сваи и ростверк.
//
// Свая считается цилиндром: площадь круга на глубину. Ростверк — отдельная
// лента поверх свай, и его объём прибавляется к их сумме, а не считается
// вместо: обе части заливаются одним и тем же бетоном, но их отношение
// показывает, куда он на самом деле уходит. Обычно ростверк оказывается
// втрое тяжелее самих свай, и это стоит увидеть до заказа миксера.
//
// Ростверк необязателен: нули в его размерах означают «его нет», а не ошибку.

export const compute: CalcFunction = (inputs) => {
  const count = toNumber(inputs.count);
  const diameter = toNumber(inputs.diameter);
  const depth = toNumber(inputs.depth);
  const gl = toNumber(inputs.grillageLength);
  const gw = toNumber(inputs.grillageWidth);
  const gh = toNumber(inputs.grillageHeight);
  const waste = toNumber(inputs.waste);
  const fail = (message: string) => ({
    primary: { label: 'Объём бетона', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!Number.isInteger(count) || count < 1) return fail('Свай должно быть не меньше одной');
  if (!(diameter > 0) || !(depth > 0)) return fail('Диаметр и глубина сваи должны быть больше нуля');
  if (gl < 0 || gw < 0 || gh < 0) return fail('Размеры ростверка не могут быть отрицательными');
  if (waste < 0 || waste > 50) return fail('Запас должен быть от 0 до 50 %');

  const one = Math.PI * (diameter / 2) ** 2 * depth;
  const piles = one * count;
  const grillage = gl * gw * gh;
  const net = piles + grillage;
  const total = net * (1 + waste / 100);
  const measure = (x: number) => formatMeasure(x, fmtNumber);

  return {
    primary: { label: 'Объём бетона', value: `${measure(total)} м³` },
    secondary: [
      { label: 'Объём свай', value: `${measure(piles)} м³` },
      { label: 'Объём ростверка', value: `${measure(grillage)} м³` },
      { label: 'Чистый объём', value: `${measure(net)} м³` },
      { label: 'Запас', value: `${measure(total - net)} м³` },
      { label: 'Объём одной сваи', value: `${measure(one)} м³` },
    ],
  };
};
