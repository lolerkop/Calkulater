import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Балясины на пролёте ограждения.
//
// Задача идёт не от шага, а от ПРОСВЕТА: между соседними стойками ребёнок не
// должен пролезть, поэтому предельный просвет — ограничение безопасности, а не
// пожелание. Ищется наименьшее число стоек, при котором равномерный просвет
//
//   зазор = (пролёт − n · ширина) / (n + 1)
//
// уже не превышает предела. Зазоров на один больше, чем стоек: они есть и по
// краям, у обеих опор.
//
// Отличие от расчёта забора: там задают ЖЕЛАЕМЫЙ пролёт между столбами и
// считают их число, здесь задают ПРЕДЕЛЬНЫЙ ПРОСВЕТ и получают шаг как
// следствие. Ширина самой стойки там не участвует вовсе, а здесь определяет всё.
const MAX_BALUSTERS = 10000;

export const compute: CalcFunction = (inputs) => {
  const run = toNumber(inputs.run);
  const width = toNumber(inputs.baluster_width);
  const maxGap = toNumber(inputs.max_gap);
  const fail = (message: string) => ({
    primary: { label: 'Балясин', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(run > 0)) return fail('Пролёт должен быть больше нуля');
  if (!(width > 0)) return fail('Ширина стойки должна быть больше нуля');
  if (!(maxGap > 0)) return fail('Предельный просвет должен быть больше нуля');
  if (width >= run) return fail('Стойка не может быть шире пролёта');

  let count = 1;
  let gap = (run - count * width) / (count + 1);
  while (gap > maxGap) {
    count += 1;
    if (count > MAX_BALUSTERS) return fail('Пролёт слишком велик для такого просвета');
    gap = (run - count * width) / (count + 1);
    if (!(gap > 0)) return fail('При таком просвете стойки не помещаются в пролёт');
  }

  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;
  return {
    primary: { label: 'Балясин', value: `${fmtInt(count)} шт` },
    secondary: [
      { label: 'Фактический просвет', value: m(gap, 'мм') },
      { label: 'Шаг между осями', value: m((run + gap) / (count + 1), 'мм') },
      { label: 'Суммарная ширина стоек', value: m(count * width, 'мм') },
      { label: 'Просветов', value: `${fmtInt(count + 1)} шт` },
    ],
  };
};
