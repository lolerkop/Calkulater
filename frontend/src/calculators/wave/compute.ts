import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Связь скорости, частоты и длины волны:  v = λ · f
//
// Любые две величины дают третью, поэтому режимов ровно три. Период 1/f
// показан рядом как то же самое, что частота, но в единицах времени: с
// частотой удобно считать, а слышать и видеть проще период.
//
// Скорость волны задаётся средой, а не источником: в воздухе звук идёт
// 343 м/с, в воде около 1 500, в стали ещё втрое быстрее. Одна и та же нота
// поэтому имеет в воде длину волны вчетверо больше, чем в воздухе, — и это
// не свойство ноты.
export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'lambda');
  const speed = toNumber(inputs.v);
  const frequency = toNumber(inputs.f);
  const wavelength = toNumber(inputs.wavelength);

  const labels: Record<string, string> = { lambda: 'Длина волны', f: 'Частота', v: 'Скорость' };
  const primaryLabel = labels[mode] ?? labels.lambda;
  const fail = (message: string) => ({
    primary: { label: primaryLabel, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let v = speed;
  let f = frequency;
  let lam = wavelength;
  if (mode === 'f') {
    if (!(speed > 0)) return fail('Скорость должна быть больше нуля');
    if (!(wavelength > 0)) return fail('Длина волны должна быть больше нуля');
    f = speed / wavelength;
  } else if (mode === 'v') {
    if (!(frequency > 0)) return fail('Частота должна быть больше нуля');
    if (!(wavelength > 0)) return fail('Длина волны должна быть больше нуля');
    v = frequency * wavelength;
  } else {
    if (!(speed > 0)) return fail('Скорость должна быть больше нуля');
    if (!(frequency > 0)) return fail('Частота должна быть больше нуля');
    lam = speed / frequency;
  }

  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: primaryLabel, value: q(mode === 'f' ? f : mode === 'v' ? v : lam, mode === 'f' ? 'Гц' : mode === 'v' ? 'м/с' : 'м') },
    secondary: [
      { label: 'Скорость', value: q(v, 'м/с') },
      { label: 'Частота', value: q(f, 'Гц') },
      { label: 'Длина волны', value: q(lam, 'м') },
      { label: 'Период', value: q(1 / f, 'с') },
    ],
  };
};
