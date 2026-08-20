import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Полезная ёмкость RAID-массива.
//
// Уровни отличаются тем, сколько ёмкости уходит на избыточность: RAID 0 не
// тратит ничего и не переживает ни одного отказа, RAID 5 отдаёт под чётность
// один диск, RAID 6 — два, зеркало — половину.
//
// «Допустимо отказов» у RAID 10 указано ГАРАНТИРОВАННОЕ. Массив переживает и
// половину дисков, если отказы попадут в разные зеркала, но рассчитывать на
// удачное распределение нельзя, и обещать её числом тем более.

type Level = {
  readonly minDisks: number;
  readonly tooFew: string;
  readonly evenOnly?: boolean;
  readonly useful: (disks: number, size: number) => number;
  readonly failures: (disks: number) => number;
  readonly kind: string;
};

const LEVELS: Record<string, Level> = {
  '0': { minDisks: 1, tooFew: 'Нужен хотя бы один диск', useful: (n, s) => n * s, failures: () => 0, kind: 'без избыточности' },
  '1': { minDisks: 2, tooFew: 'Для этого уровня нужно не меньше двух дисков', useful: (_n, s) => s, failures: (n) => n - 1, kind: 'зеркало' },
  '5': { minDisks: 3, tooFew: 'Для этого уровня нужно не меньше трёх дисков', useful: (n, s) => (n - 1) * s, failures: () => 1, kind: 'чётность' },
  '6': { minDisks: 4, tooFew: 'Для этого уровня нужно не меньше четырёх дисков', useful: (n, s) => (n - 2) * s, failures: () => 2, kind: 'двойная чётность' },
  '10': { minDisks: 4, tooFew: 'Для этого уровня нужно не меньше четырёх дисков', evenOnly: true, useful: (n, s) => (n / 2) * s, failures: () => 1, kind: 'зеркало с чередованием' },
};

export const compute: CalcFunction = (inputs) => {
  const level = LEVELS[toStr(inputs.level, '5')] ?? LEVELS['5'];
  const disks = toNumber(inputs.disks);
  const size = toNumber(inputs.sizeTb);
  const fail = (message: string) => ({
    primary: { label: 'Полезная ёмкость', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!Number.isInteger(disks)) return fail('Число дисков должно быть целым');
  if (disks < level.minDisks) return fail(level.tooFew);
  if (level.evenOnly && disks % 2 !== 0) return fail('RAID 10 требует чётного числа дисков');
  if (!(size > 0)) return fail('Объём диска должен быть больше нуля');

  const raw = disks * size;
  const useful = level.useful(disks, size);
  const tb = (value: number) => `${formatMeasure(value, fmtNumber)} ТБ`;

  return {
    primary: { label: 'Полезная ёмкость', value: tb(useful) },
    secondary: [
      { label: 'Сырая ёмкость', value: tb(raw) },
      { label: 'Допустимо отказов', value: fmtNumber(level.failures(disks), 0) },
      { label: 'Эффективность', value: `${fmtNumber((useful / raw) * 100, 2)}%` },
      { label: 'Тип массива', value: level.kind },
      { label: 'Ушло на избыточность', value: tb(raw - useful) },
    ],
  };
};
