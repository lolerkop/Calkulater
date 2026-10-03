import type { CalcFunction } from '../../lib/types';
import { fmtNumber as ordinaryNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Перевод единиц вёрстки через общий знаменатель — пиксель CSS.
//
//   1 pt = 96/72 px · 1 pc = 16 px · 1 in = 96 px · 1 cm = 96/2,54 px
//   1 rem = корневой размер шрифта · 1 em = выбранная база контекста (элемент; для font-size — родитель)
//
// Абсолютные единицы жёстко привязаны к пикселю CSS, а не к физическому
// размеру: дюйм здесь всегда 96 пикселей независимо от плотности экрана.
// Относительные зависят от контекста, и в этом вся разница между ними:
// rem всюду один и тот же, em наследуется и в глубокой вложенности
// умножается сам на себя.
const ABSOLUTE: Record<string, number> = {
  px: 1,
  pt: 96 / 72,
  pc: 16,
  in: 96,
  cm: 96 / 2.54,
  mm: 96 / 25.4,
};

import { read, INPUT, RANGE } from '../../lib/platform/measurementScalar';

import { exact, times, number as asNumber, ratio as divide } from '../../lib/platform/geometryNumericInput';

const fmtNumber = (value: number, digits = 2): string => value !== 0 && Math.abs(value) < 0.5 * 10 ** -digits ? value.toExponential(3).replace('.', ',') : ordinaryNumber(value, digits);

export const compute: CalcFunction = (inputs) => {
  const value = read(inputs.value);
  const from = (typeof inputs.fromUnit === 'string' ? inputs.fromUnit : inputs.fromUnit === undefined ? 'px' : '');
  const to = (typeof inputs.toUnit === 'string' ? inputs.toUnit : inputs.toUnit === undefined ? 'rem' : '');
  const rootSize = read(inputs.rootSize);
  const parentSize = read(inputs.parentSize);

  const fail = (message: string) => ({
    primary: { label: 'Результат перевода', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (![value, rootSize, parentSize].every(Number.isFinite)) return fail(INPUT);
  if (!['px','pt','pc','in','cm','mm','rem','em'].includes(from) || !['px','pt','pc','in','cm','mm','rem','em'].includes(to)) return fail('Выберите единицы из списка');
  if (!(rootSize > 0)) return fail('Корневой размер шрифта должен быть больше нуля');
  if (!(parentSize > 0)) return fail('Размер шрифта родителя должен быть больше нуля');

  const toPx = (unit: string): number | null =>
    unit === 'rem' ? rootSize : unit === 'em' ? parentSize : ABSOLUTE[unit] ?? null;
  const fromFactor = toPx(from);
  const toFactor = toPx(to);
  if (fromFactor === null || toFactor === null) return fail('Выберите единицы из списка');

  const pixelValue = times(exact(value), exact(fromFactor));
  const px = asNumber(pixelValue);
  const converted = divide(pixelValue, exact(toFactor));
  const rem = divide(pixelValue, exact(rootSize)), em = divide(pixelValue, exact(parentSize)), pt = divide(pixelValue, exact(ABSOLUTE.pt));
  if (![px, converted, rem, em, pt].every(v => Number.isFinite(v) && (value === 0 || v !== 0))) return fail(RANGE);
  const num = (x: number) => (x !== 0 && Math.abs(x) < 1e-6 ? x.toExponential(3).replace('.', ',') : formatMeasure(x, fmtNumber));

  return {
    primary: { label: `Результат в ${to}`, value: num(converted) },
    secondary: [
      { label: 'В пикселях', value: `${num(px)} px` },
      { label: 'В rem', value: num(rem) },
      { label: 'В em', value: num(em) },
      { label: 'В пунктах', value: num(pt) },
    ],
  };
};
