import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';

// Координаты: градусы-минуты-секунды ↔ десятичные градусы.
//
//   D = d + m/60 + s/3600
//   обратно: d = ⌊|D|⌋, m = ⌊(|D| − d)·60⌋, s = ((|D| − d)·60 − m)·60
//
// Знак несёт полушарие, а не само число: в записи ГМС минус не пишут, вместо
// него ставят букву. Поэтому направление живёт отдельным полем, а знак
// появляется только в десятичной записи.
//
// Секунды хранятся дробными и не округляются: округление секунды до целой
// сдвигает точку на тридцать метров. Показываются четыре знака — это около
// одиннадцати метров по широте.
const HEMISPHERE_LABEL: Record<string, string> = {
  N: 'северное или восточное',
  S: 'южное или западное',
};

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'toDecimal');
  const deg = toNumber(inputs.deg);
  const minutes = toNumber(inputs.minutes);
  const seconds = toNumber(inputs.seconds);
  const decimal = toNumber(inputs.decimal);
  const hemisphere = toStr(inputs.hemisphere, 'N');
  const toDms = mode === 'toDms';
  const label = toDms ? 'Градусы, минуты, секунды' : 'Десятичные градусы';
  const fail = (message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const dms = (d: number, m: number, s: number) =>
    `${fmtInt(d)}° ${fmtInt(m)}′ ${formatStatistic(s, fmtNumber)}″`;

  if (toDms) {
    if (Math.abs(decimal) > 180) return fail('Десятичные градусы должны быть от −180 до 180');
    const abs = Math.abs(decimal);
    let d = Math.floor(abs);
    let m = Math.floor((abs - d) * 60);
    let s = ((abs - d) * 60 - m) * 60;
    if (Number(s.toFixed(6)) >= 60) { s = 0; m += 1; }
    if (m >= 60) { m = 0; d += 1; }
    return {
      primary: { label, value: dms(d, m, s) },
      secondary: [
        { label: 'Десятичные градусы', value: `${formatStatistic(decimal, fmtNumber)}°` },
        { label: 'Полушарие', value: HEMISPHERE_LABEL[decimal < 0 ? 'S' : 'N'] },
        { label: 'Только градусы и минуты', value: `${fmtInt(d)}° ${formatStatistic(m + s / 60, fmtNumber)}′` },
      ],
    };
  }

  if (!(deg >= 0) || deg > 180) return fail('Градусы должны быть от 0 до 180');
  if (!(minutes >= 0) || minutes >= 60) return fail('Минуты должны быть от 0 до 59');
  if (!(seconds >= 0) || seconds >= 60) return fail('Секунды должны быть от 0 до 59');
  const value = deg + minutes / 60 + seconds / 3600;
  if (value > 180) return fail('Итог превышает 180 градусов');
  const signed = hemisphere === 'S' ? -value : value;

  return {
    primary: { label, value: `${formatStatistic(signed, fmtNumber)}°` },
    secondary: [
      { label: 'Градусы, минуты, секунды', value: dms(deg, minutes, seconds) },
      { label: 'Полушарие', value: HEMISPHERE_LABEL[hemisphere] ?? HEMISPHERE_LABEL.N },
      { label: 'Только градусы и минуты', value: `${fmtInt(deg)}° ${formatStatistic(minutes + seconds / 60, fmtNumber)}′` },
    ],
  };
};
