import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Ленточный фундамент: объём бетона по длине ленты.
//
// Считается длина САМОЙ ленты, а не габарит здания: под внутренние несущие стены
// лента тоже идёт, и её длина прибавляется к внешнему контуру. Подпись поля
// говорит именно о ленте, чтобы периметр коробки не подставили вместо неё.
//
// Чистый объём и объём с запасом выводятся раздельно — как в калькуляторе бетона.

const m3 = (value: number): string => `${formatMeasure(value, fmtNumber)} м³`;

export const compute: CalcFunction = (inputs) => {
  const perimeter = toNumber(inputs.perimeter);
  const width = toNumber(inputs.width);
  const depth = toNumber(inputs.depth);
  const waste = toNumber(inputs.waste);
  const fail = (message: string) => ({
    primary: { label: 'Объём бетона', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(perimeter > 0)) return fail('Длина ленты должна быть больше нуля');
  if (!(width > 0)) return fail('Ширина ленты должна быть больше нуля');
  if (!(depth > 0)) return fail('Глубина ленты должна быть больше нуля');
  if (!(waste >= 0)) return fail('Запас не может быть отрицательным');
  if (waste > 50) return fail('Запас больше 50 % не рассчитывается');

  const clean = perimeter * width * depth;
  const total = clean * (1 + waste / 100);
  const secondary = [
    { label: 'Чистый объём', value: m3(clean) },
    { label: 'Площадь сечения ленты', value: `${formatMeasure(width * depth, fmtNumber)} м²` },
  ];
  if (waste > 0) secondary.splice(1, 0, { label: 'Запас', value: m3(total - clean) });

  return { primary: { label: 'Объём бетона', value: m3(total) }, secondary };
};
