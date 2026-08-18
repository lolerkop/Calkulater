import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber, toStr } from '../../lib/format';

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

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'reduce');
  const fail = (message: string) => ({
    primary: { label: 'Соотношение сторон', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode === 'reduce') {
    const width = Math.round(toNumber(inputs.width));
    const height = Math.round(toNumber(inputs.height));
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
        { label: 'Всего пикселей', value: fmtInt(width * height) },
      ],
    };
  }

  const ratioW = toNumber(inputs.ratioW);
  const ratioH = toNumber(inputs.ratioH);
  const known = toStr(inputs.known, 'width');
  const side = toNumber(inputs.side);
  if (!(ratioW > 0) || !(ratioH > 0)) return fail('Обе части соотношения должны быть больше нуля');
  if (!(side > 0)) return fail('Известная сторона должна быть больше нуля');

  const other = known === 'width' ? (side * ratioH) / ratioW : (side * ratioW) / ratioH;
  const rounded = Math.round(other);
  const exact = Number.isInteger(other);

  return {
    primary: {
      label: known === 'width' ? 'Высота' : 'Ширина',
      value: `${fmtInt(rounded)} пикс`,
    },
    secondary: [
      { label: 'Точное значение', value: exact ? `${fmtInt(rounded)} пикс` : `${fmtNumber(other, 2)} пикс` },
      { label: 'Разрешение', value: known === 'width' ? `${fmtInt(side)} × ${fmtInt(rounded)}` : `${fmtInt(rounded)} × ${fmtInt(side)}` },
      { label: 'Соотношение', value: `${ratioW}:${ratioH}` },
    ],
  };
};
