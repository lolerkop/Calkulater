import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber as ordinaryNumber } from '../../lib/format';

// Соотношение сторон.
//
// Точное отношение получается сокращением на наибольший общий делитель, и
// оно не всегда совпадает с тем, как монитор продают: 2560×1080 сокращается
// в 64:27, а на коробке написано 21:9. Обе величины показываются рядом,
// потому что подменять точный результат маркетинговым округлением значило бы
// соврать, а умолчать о нём — оставить посетителя в недоумении.
//
// Пиксель считается квадратным: неквадратный PAR в каноникал не входит.
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

const COMMON: readonly { label: string; value: number }[] = [
  { label: '4:3', value: 4 / 3 },
  { label: '3:2', value: 3 / 2 },
  { label: '16:10', value: 16 / 10 },
  { label: '16:9', value: 16 / 9 },
  { label: '21:9', value: 64 / 27 },
  { label: '32:9', value: 32 / 9 },
];

import { read, INPUT, MODE, RANGE } from '../../lib/platform/measurementScalar';
import { integerInput } from '../../lib/platform/strictNumericInput';
import { exact, times, ratio as divide } from '../../lib/platform/geometryNumericInput';

const fmtNumber = (value: number, digits = 2): string => value !== 0 && Math.abs(value) < 0.5 * 10 ** -digits ? value.toExponential(3).replace('.', ',') : ordinaryNumber(value, digits);

export const compute: CalcFunction = (inputs) => {
  const mode = (typeof inputs.mode === 'string' ? inputs.mode : inputs.mode === undefined ? 'reduce' : '');
  const fail = (message: string) => ({
    primary: { label: 'Соотношение сторон', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode !== 'reduce' && mode !== 'side') return fail(MODE);
  if (mode === 'reduce') {
    const width = integerInput(inputs.width) ?? NaN;
    const height = integerInput(inputs.height) ?? NaN;
    if (!Number.isFinite(width) || !Number.isFinite(height)) return fail('Размеры в пикселях задаются положительными безопасными целыми числами');
    if (!(width > 0) || !(height > 0)) return fail('Обе стороны должны быть больше нуля');

    const divisor = gcd(width, height);
    const rw = width / divisor;
    const rh = height / divisor;
    const decimal = width / height;
    const nearest = COMMON.reduce((best, item) =>
      Math.abs(item.value - decimal) < Math.abs(best.value - decimal) ? item : best);

    return {
      primary: { label: 'Соотношение сторон', value: `${rw}:${rh}` },
      secondary: [
        { label: 'Десятичное отношение', value: fmtNumber(decimal, 4) },
        { label: 'Наибольший общий делитель', value: fmtInt(divisor) },
        { label: 'Ближайшее распространённое', value: nearest.label },
        { label: 'Всего пикселей', value: (BigInt(width) * BigInt(height)).toLocaleString('ru-RU') },
      ],
    };
  }

  const ratioW = read(inputs.ratioW);
  const ratioH = read(inputs.ratioH);
  const known = (typeof inputs.known === 'string' ? inputs.known : inputs.known === undefined ? 'width' : '');
  const side = integerInput(inputs.side) ?? NaN;
  if (known !== 'width' && known !== 'height') return fail(MODE);
  if (![ratioW, ratioH, side].every(Number.isFinite)) return fail(INPUT);
  if (!(ratioW > 0) || !(ratioH > 0)) return fail('Обе части соотношения должны быть больше нуля');
  if (!(side > 0)) return fail('Известная сторона должна быть больше нуля');

  const other = divide(times(exact(side), exact(known === 'width' ? ratioH : ratioW)), exact(known === 'width' ? ratioW : ratioH));
  if (!Number.isFinite(other) || !(other > 0) || !Number.isSafeInteger(Math.round(other)) || Math.round(other) < 1) return fail(RANGE);
  const rounded = Math.round(other);
  const isExact = Number.isInteger(other);

  return {
    primary: {
      label: known === 'width' ? 'Высота' : 'Ширина',
      value: `${fmtInt(rounded)} пикс`,
    },
    secondary: [
      { label: 'Точное значение', value: isExact ? `${fmtInt(rounded)} пикс` : `${fmtNumber(other, 2)} пикс` },
      { label: 'Разрешение', value: known === 'width' ? `${fmtInt(side)} × ${fmtInt(rounded)}` : `${fmtInt(rounded)} × ${fmtInt(side)}` },
      { label: 'Соотношение', value: `${ratioW}:${ratioH}` },
    ],
  };
};
