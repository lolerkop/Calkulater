import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Вес древесины по объёму, породе и влажности.
//
// Базовые плотности даны при 12 % влажности — это стандартное состояние, к
// которому приводят справочные таблицы. Пересчёт линейный: каждый процент
// влажности сверх двенадцати добавляет процент к плотности. Модель грубая для
// сырого леса, где вода тяжелее самой древесины, поэтому использованная
// плотность ВСЕГДА выводится строкой: число без неё нечем проверить.

const WOOD: Record<string, number> = {
  pine: 520, spruce: 450, birch: 650, oak: 700, larch: 660, aspen: 490,
};

export const compute: CalcFunction = (inputs) => {
  const volume = toNumber(inputs.volume);
  const moisture = toNumber(inputs.moisture);
  const species = toStr(inputs.species, 'pine');
  const fail = (message: string) => ({
    primary: { label: 'Масса', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const base = WOOD[species];
  if (base === undefined) return fail('Неизвестная порода древесины');
  if (!(volume > 0)) return fail('Объём должен быть больше нуля');
  if (moisture < 0 || moisture > 100) return fail('Влажность должна быть от 0 до 100 %');

  const density = base * (1 + (moisture - 12) / 100);
  if (!(density > 0)) return fail('При такой влажности плотность обращается в ноль');
  const measure = (x: number) => formatMeasure(x, fmtNumber);

  return {
    primary: { label: 'Масса', value: `${measure(volume * density)} кг` },
    secondary: [
      { label: 'Плотность при заданной влажности', value: `${measure(density)} кг/м³` },
      { label: 'Базовая плотность при 12 %', value: `${measure(base)} кг/м³` },
      { label: 'Объём', value: `${measure(volume)} м³` },
      { label: 'Килограммов на кубометр', value: measure(density) },
    ],
    note: 'Базовые плотности даны при влажности 12 %. Пересчёт линейный, поэтому для свежесрубленного леса результат приблизителен.',
  };
};
