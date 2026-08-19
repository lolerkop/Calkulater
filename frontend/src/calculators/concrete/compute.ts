import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Бетон: объём по форме заливки плюс запас.
//
// Чистый объём и объём с запасом — разные величины, и обе выводятся: заказывают
// вторую, а проверяют по первой. Запас применяется к неокруглённому объёму,
// иначе округление до заказа копилось бы дважды.
//
// Три формы считаются раздельно и намеренно не сведены к общему «движку
// строительной геометрии»: у плиты, ленты и столбов разные исходные размеры,
// и общего у них ровно одно умножение.

const m3 = (value: number): string => `${formatMeasure(value, fmtNumber)} м³`;

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'slab');
  const waste = toNumber(inputs.waste);
  const fail = (message: string) => ({
    primary: { label: 'Объём бетона', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(waste >= 0)) return fail('Запас не может быть отрицательным');
  if (waste > 50) return fail('Запас больше 50 % не рассчитывается');

  let clean: number;
  if (mode === 'strip') {
    const perimeter = toNumber(inputs.perimeter);
    const stripWidth = toNumber(inputs.stripWidth);
    const depth = toNumber(inputs.depth);
    if (!(perimeter > 0) || !(stripWidth > 0) || !(depth > 0)) return fail('Все размеры ленты должны быть больше нуля');
    clean = perimeter * stripWidth * depth;
  } else if (mode === 'columns') {
    const sectionArea = toNumber(inputs.sectionArea);
    const height = toNumber(inputs.height);
    const count = Math.trunc(toNumber(inputs.count));
    if (!(sectionArea > 0) || !(height > 0)) return fail('Сечение и высота должны быть больше нуля');
    if (!(count >= 1)) return fail('Количество столбов должно быть хотя бы одно');
    clean = sectionArea * height * count;
  } else {
    const length = toNumber(inputs.length);
    const width = toNumber(inputs.width);
    const thickness = toNumber(inputs.thickness);
    if (!(length > 0) || !(width > 0) || !(thickness > 0)) return fail('Все размеры плиты должны быть больше нуля');
    clean = length * width * thickness;
  }

  const total = clean * (1 + waste / 100);
  const secondary = [{ label: 'Чистый объём', value: m3(clean) }];
  if (waste > 0) secondary.push({ label: 'Запас', value: m3(total - clean) });

  return { primary: { label: 'Объём бетона', value: m3(total) }, secondary };
};
