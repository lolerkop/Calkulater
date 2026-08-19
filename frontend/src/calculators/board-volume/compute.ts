import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Кубатура досок.
//
// Ловушка единиц и есть смысл страницы: длину доски меряют метрами, сечение —
// миллиметрами, а продают кубометрами. Миллиметры делятся на 1000 явно, потому
// что перемножить их как метры — самая частая ошибка счёта на глаз, и ошибается
// она в миллион раз, оставаясь правдоподобной по форме записи.

const m3 = (value: number): string => `${formatMeasure(value, fmtNumber)} м³`;

export const compute: CalcFunction = (inputs) => {
  const length = toNumber(inputs.length);
  const width = toNumber(inputs.width);
  const thickness = toNumber(inputs.thickness);
  const count = Math.trunc(toNumber(inputs.count));
  const price = toNumber(inputs.pricePerM3);
  const fail = (message: string) => ({
    primary: { label: 'Общий объём', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(length > 0)) return fail('Длина доски должна быть больше нуля');
  if (!(width > 0)) return fail('Ширина доски должна быть больше нуля');
  if (!(thickness > 0)) return fail('Толщина доски должна быть больше нуля');
  if (!(count >= 1)) return fail('Количество досок должно быть хотя бы одно');

  const single = length * (width / 1000) * (thickness / 1000);
  const total = single * count;
  const secondary = [
    { label: 'Объём одной доски', value: m3(single) },
    { label: 'Досок в кубометре', value: `${fmtNumber(1 / single, 2)} шт` },
  ];
  // Необязательная сумма: цена появляется строкой только тогда, когда её ввели.
  if (price > 0) secondary.push({ label: 'Стоимость', value: `${fmtNumber(total * price, 2)} ₽` });

  return { primary: { label: 'Общий объём', value: m3(total) }, secondary };
};
