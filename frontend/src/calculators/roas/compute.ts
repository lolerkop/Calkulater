import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// ROAS: окупаемость рекламных расходов.
//
// ROAS — это доход, делённый на расход, а ROI — прибыль, делённая на расход.
// Отличаются ровно на единицу в кратности, и спутать их легко: 4,0× и 300 %
// описывают одну и ту же кампанию. Поэтому обе величины стоят на странице
// рядом, а не выбирается одна из них.
const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

export const compute: CalcFunction = (inputs) => {
  const revenue = toNumber(inputs.revenue);
  const cost = toNumber(inputs.cost);
  const margin = toNumber(inputs.margin);

  const fail = (message: string) => ({
    primary: { label: 'ROAS', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (revenue < 0) return fail('Доход не может быть отрицательным');
  if (!(cost > 0)) return fail('Расход должен быть больше нуля');
  if (margin < 0 || margin > 100) return fail('Маржинальность задаётся в диапазоне от 0 до 100 процентов');

  const roas = revenue / cost;
  const roi = ((revenue - cost) / cost) * 100;

  const secondary = [
    { label: 'ROAS в процентах', value: `${fmtNumber(roas * 100, 2)}%` },
    { label: 'ROI', value: `${fmtNumber(roi, 2)}%`, accent: (roi >= 0 ? 'green' : 'red') as 'green' | 'red' },
    { label: 'Прибыль', value: money(revenue - cost) },
    { label: 'Точка окупаемости по доходу', value: money(cost) },
  ];

  if (margin > 0) {
    secondary.push({
      label: 'ROAS по валовой марже',
      value: `${fmtNumber((revenue * (margin / 100)) / cost, 2)}×`,
    } as never);
  }

  return {
    primary: { label: 'ROAS', value: `${fmtNumber(roas, 2)}×` },
    secondary,
  };
};
