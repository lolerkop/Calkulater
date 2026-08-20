import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Себестоимость одной единицы продукции.
//
//   всего затрат = материалы + труд + накладные
//   на единицу   = всего затрат / тираж
//
// Доля материалов показана рядом не для красоты: именно она отвечает на вопрос,
// от чего себестоимость зависит сильнее. Партия с долей материалов 90 % реагирует
// на цену сырья почти один в один, а партия с долей 30 % — втрое слабее, и
// экономить в ней надо на другом.
//
// Нулевой тираж отклоняется: делить затраты не на что, а «затраты на ноль штук»
// не имеют смысла ни как ноль, ни как бесконечность.
export const compute: CalcFunction = (inputs) => {
  const materials = toNumber(inputs.materials);
  const labor = toNumber(inputs.labor);
  const overhead = toNumber(inputs.overhead);
  const units = toNumber(inputs.units);

  const fail = (message: string) => ({
    primary: { label: 'Себестоимость единицы', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (materials < 0 || labor < 0 || overhead < 0) return fail('Затраты не могут быть отрицательными');
  if (!(units > 0)) return fail('Тираж должен быть больше нуля');

  const total = materials + labor + overhead;
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label: 'Себестоимость единицы', value: money(total / units) },
    secondary: [
      { label: 'Всего затрат', value: money(total) },
      { label: 'Единиц', value: fmtNumber(units, 0) },
      { label: 'Доля материалов', value: `${fmtNumber(total > 0 ? (materials / total) * 100 : 0, 2)}%` },
    ],
  };
};
