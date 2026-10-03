import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';

// Стойкость пароля: энтропия H = L · log₂(N), где N — размер алфавита.
//
// Число вариантов растёт показательно и у обычного двенадцатизначного пароля
// уже превышает 10²¹, поэтому и оно, и время перебора печатаются показательной
// записью — тем же `formatQuantity`, что у физических величин.
//
// Средний перебор берётся как ПОЛОВИНА пространства: злоумышленник находит
// пароль в среднем на середине, а не в конце. Это приближение M/2 для большого равномерного пространства, и
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

import { read, INPUT, RANGE } from '../../lib/platform/measurementScalar';
import { integerInput } from '../../lib/platform/strictNumericInput';
import { exact, times, ratio as divide } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
  const length = integerInput(inputs.length) ?? NaN;
  const charset = (typeof inputs.charset === 'string' ? inputs.charset : inputs.charset === undefined ? 'alnum' : '');
  const rate = read(inputs.rate);
  const fail = (message: string) => ({
    primary: { label: 'Энтропия', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (![length, rate].every(Number.isFinite)) return fail(INPUT);
  if (!(length >= 1) || !Number.isInteger(length)) return fail('Длина пароля — целое число знаков, не меньше одного');
  const size = Object.hasOwn(CHARSET, charset) ? CHARSET[charset] : 0;
  if (!size) return fail('Выберите алфавит из списка');
  if (!(rate > 0)) return fail('Скорость перебора должна быть больше нуля');

  const entropy = length * Math.log2(size);
  const combos = Math.pow(size, length);
  if (!Number.isFinite(combos) || !Number.isFinite(entropy)) return fail(RANGE);
  const seconds = divide(exact(combos), times(exact(2), exact(rate), exact(BILLION)));
  const years = divide(exact(seconds), exact(SECONDS_IN_YEAR));
  if (![seconds, years].every(v => Number.isFinite(v) && v > 0)) return fail(RANGE);

  return {
    primary: { label: 'Энтропия', value: `${formatMeasure(entropy, fmtNumber)} бит` },
    secondary: [
      { label: 'Вариантов пароля', value: formatQuantity(combos, fmtNumber) },
      { label: 'Средний перебор', value: `${formatQuantity(seconds, fmtNumber)} с` },
      { label: 'В годах', value: formatQuantity(years, fmtNumber) },
      { label: 'Размер алфавита', value: `${formatMeasure(size, fmtNumber)} знаков` },
    ],
  };
};
