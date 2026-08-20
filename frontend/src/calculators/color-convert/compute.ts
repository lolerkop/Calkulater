import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toStr } from '../../lib/format';

// Перевод цвета между HEX, RGB и HSL.
//
// Трёхзначная запись разворачивается удвоением каждого знака: #F0A — это
// #FF00AA, а не #F00A00. Так устроен сам формат, и «дописать нули» было бы
// другим цветом.
//
// Каналы остаются точными целыми 0–255: они разбираются побайтово, без
// промежуточного деления, поэтому обратный перевод в HEX возвращает ровно
// исходный код.
//
// Насыщенность и светлота выводятся с двумя знаками, а тон целым: тон
// измеряется в градусах круга, и доли градуса на глаз неразличимы.

const HEX = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;

export const compute: CalcFunction = (inputs) => {
  const raw = toStr(inputs.hex, '').trim();
  const fail = (message: string) => ({
    primary: { label: 'RGB', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const match = HEX.exec(raw);
  if (!match) return fail('Введите три или шесть шестнадцатеричных знаков');

  const digits = match[1].length === 3
    ? match[1].split('').map((d) => d + d).join('')
    : match[1];
  const r = parseInt(digits.slice(0, 2), 16);
  const g = parseInt(digits.slice(2, 4), 16);
  const b = parseInt(digits.slice(4, 6), 16);

  const rf = r / 255;
  const gf = g / 255;
  const bf = b / 255;
  const max = Math.max(rf, gf, bf);
  const min = Math.min(rf, gf, bf);
  const delta = max - min;
  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  let h = 0;
  if (delta !== 0) {
    if (max === rf) h = 60 * (((gf - bf) / delta) % 6);
    else if (max === gf) h = 60 * ((bf - rf) / delta + 2);
    else h = 60 * ((rf - gf) / delta + 4);
    if (h < 0) h += 360;
  }

  const percent = (value: number) => fmtNumber(value * 100, 2);

  return {
    primary: { label: 'RGB', value: `rgb(${r}, ${g}, ${b})` },
    secondary: [
      { label: 'HSL', value: `hsl(${fmtNumber(Math.round(h), 0)}, ${percent(s)}%, ${percent(l)}%)` },
      { label: 'HEX', value: `#${digits.toUpperCase()}` },
      { label: 'Яркость', value: percent(l) },
      { label: 'Красный', value: fmtNumber(r, 0) },
      { label: 'Зелёный', value: fmtNumber(g, 0) },
      { label: 'Синий', value: fmtNumber(b, 0) },
    ],
  };
};
