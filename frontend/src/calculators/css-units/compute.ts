import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Перевод единиц вёрстки через общий знаменатель — пиксель CSS.
//
//   1 pt = 96/72 px · 1 pc = 16 px · 1 in = 96 px · 1 cm = 96/2,54 px
//   1 rem = корневой размер шрифта · 1 em = размер шрифта РОДИТЕЛЯ
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

export const compute: CalcFunction = (inputs) => {
  const value = toNumber(inputs.value);
  const from = toStr(inputs.fromUnit, 'px');
  const to = toStr(inputs.toUnit, 'rem');
  const rootSize = toNumber(inputs.rootSize);
  const parentSize = toNumber(inputs.parentSize);

  const fail = (message: string) => ({
    primary: { label: 'Результат перевода', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(rootSize > 0)) return fail('Корневой размер шрифта должен быть больше нуля');
  if (!(parentSize > 0)) return fail('Размер шрифта родителя должен быть больше нуля');

  const toPx = (unit: string): number | null =>
    unit === 'rem' ? rootSize : unit === 'em' ? parentSize : ABSOLUTE[unit] ?? null;
  const fromFactor = toPx(from);
  const toFactor = toPx(to);
  if (fromFactor === null || toFactor === null) return fail('Выберите единицы из списка');

  const px = value * fromFactor;
  const num = (x: number) => formatMeasure(x, fmtNumber);

  return {
    primary: { label: 'Результат перевода', value: num(px / toFactor) },
    secondary: [
      { label: 'В пикселях', value: `${num(px)} px` },
      { label: 'В rem', value: num(px / rootSize) },
      { label: 'В em', value: num(px / parentSize) },
      { label: 'В пунктах', value: num(px / ABSOLUTE.pt) },
    ],
  };
};
