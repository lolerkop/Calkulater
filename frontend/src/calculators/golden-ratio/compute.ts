import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';

// Золотое сечение: φ = (1 + √5) / 2.
//
// Константа считается из корня в полной точности машинного числа и округляется
// только при выводе. Записать 1,618 как источник истины значило бы потерять
// точность там, где её и хотят: отношение частей перестало бы быть точным.

const PHI = (1 + Math.sqrt(5)) / 2;
const num = (value: number): string => formatStatistic(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'split');
  const fail = (label: string, message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode === 'grow') {
    const a = toNumber(inputs.a);
    if (!(a > 0)) return fail('Больший отрезок', 'Значение должно быть больше нуля');
    return {
      primary: { label: 'Больший отрезок', value: num(a * PHI) },
      secondary: [
        { label: 'Меньший отрезок', value: num(a / PHI) },
        { label: 'φ', value: fmtNumber(PHI, 6) },
      ],
    };
  }

  const total = toNumber(inputs.total);
  if (!(total > 0)) return fail('Большая часть', 'Длина отрезка должна быть больше нуля');
  const larger = total / PHI;
  return {
    primary: { label: 'Большая часть', value: num(larger) },
    secondary: [
      { label: 'Меньшая часть', value: num(total - larger) },
      { label: 'φ', value: fmtNumber(PHI, 6) },
    ],
  };
};
