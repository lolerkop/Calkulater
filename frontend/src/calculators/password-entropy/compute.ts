import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';

// Стойкость пароля: энтропия H = L · log₂(N), где N — размер алфавита.
//
// Число вариантов растёт показательно и у обычного двенадцатизначного пароля
// уже превышает 10²¹, поэтому и оно, и время перебора печатаются показательной
// записью — тем же `formatQuantity`, что у физических величин.
//
// Средний перебор берётся как ПОЛОВИНА пространства: злоумышленник находит
// пароль в среднем на середине, а не в конце. Это общепринятая оценка, и
// именно она делает разницу между «сутки» и «двое суток» несущественной по
// сравнению с разницей между алфавитами.
//
// Размеры алфавитов — арифметика, а не норматив: 10 цифр, 26 латинских строчных,
// 62 буквы с цифрами, 94 печатных знака ASCII.
const CHARSET: Record<string, number> = {
  digits: 10,
  lower: 26,
  loweralnum: 36,
  mixed: 52,
  alnum: 62,
  alnumsym: 94,
};
const SECONDS_IN_YEAR = 31557600;
const BILLION = 1e9;

export const compute: CalcFunction = (inputs) => {
  const length = toNumber(inputs.length);
  const charset = toStr(inputs.charset, 'alnum');
  const rate = toNumber(inputs.rate);
  const fail = (message: string) => ({
    primary: { label: 'Энтропия', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(length >= 1) || !Number.isInteger(length)) return fail('Длина пароля — целое число знаков, не меньше одного');
  const size = CHARSET[charset];
  if (!size) return fail('Выберите алфавит из списка');
  if (!(rate > 0)) return fail('Скорость перебора должна быть больше нуля');

  const entropy = length * Math.log2(size);
  const combos = Math.pow(size, length);
  const seconds = combos / 2 / (rate * BILLION);

  return {
    primary: { label: 'Энтропия', value: `${formatMeasure(entropy, fmtNumber)} бит` },
    secondary: [
      { label: 'Вариантов пароля', value: formatQuantity(combos, fmtNumber) },
      { label: 'Средний перебор', value: `${formatQuantity(seconds, fmtNumber)} с` },
      { label: 'В годах', value: formatQuantity(seconds / SECONDS_IN_YEAR, fmtNumber) },
      { label: 'Размер алфавита', value: `${formatMeasure(size, fmtNumber)} знаков` },
    ],
  };
};
