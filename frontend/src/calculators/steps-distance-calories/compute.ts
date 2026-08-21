import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Шаги в расстояние и калории.
//
// Длина шага берётся либо из роста по общепринятому соотношению 0,415, либо
// задаётся напрямую: измеренный шаг всегда точнее оценённого, и у кого он есть,
// тому не нужно доверять коэффициенту.
//
// Расход калорий на километр — ВИДИМОЕ редактируемое допущение: 0,53 ккал на
// килограмм веса на километр это ходьба в обычном темпе. Бег, рюкзак и подъём
// меняют это число, поэтому оно поле, а не константа: спрятанный коэффициент
// выглядел бы точностью, которой здесь нет.

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'height');
  const steps = toNumber(inputs.steps);
  const weight = toNumber(inputs.weight);
  const kcalPerKgKm = toNumber(inputs.kcalPerKgKm);
  const fail = (message: string) => ({
    primary: { label: 'Расстояние', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(steps >= 0)) return fail('Число шагов не может быть отрицательным');
  if (!(weight > 0)) return fail('Вес должен быть больше нуля');
  if (!(kcalPerKgKm > 0)) return fail('Расход на километр должен быть больше нуля');

  let stride: number;
  if (mode === 'height') {
    const height = toNumber(inputs.height);
    if (height < 120 || height > 230) return fail('Рост должен быть от 120 до 230 см');
    stride = height * 0.415;
  } else if (mode === 'stride') {
    stride = toNumber(inputs.stride);
    if (!(stride > 0)) return fail('Длина шага должна быть больше нуля');
  } else {
    return fail('Неизвестный режим');
  }

  const km = (steps * stride) / 100000;
  const kcal = kcalPerKgKm * weight * km;
  const measure = (x: number) => formatMeasure(x, fmtNumber);

  return {
    primary: { label: 'Расстояние', value: `${measure(km)} км` },
    secondary: [
      { label: 'Калории', value: `${fmtNumber(kcal, 0)} ккал` },
      { label: 'Длина шага', value: `${measure(stride)} см` },
      { label: 'Шагов на километр', value: fmtNumber(100000 / stride, 0) },
      { label: 'Ккал на километр', value: measure(kcalPerKgKm * weight) },
    ],
  };
};
