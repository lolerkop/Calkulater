import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Validate the active numeric contract before arithmetic; malformed values must
// never turn into a valid zero or a health interpretation.
const number = (value: unknown) => typeof value === 'string' || typeof value === 'number' ? toNumber(value, NaN) : NaN;

//0.415 and0.53 are adopted starting assumptions, not validated universal rules.
// The direct length is one counted STEP, not a two-step gait stride.
export const compute: CalcFunction = (inputs) => {
  const fail = (value: string) => ({ primary: { label: 'Расстояние', value: '—' }, secondary: [{ label: 'Проверьте данные', value, accent: 'red' as const }] });
  const mode = toStr(inputs.mode, 'height');
  if (mode !== 'height' && mode !== 'stride') return fail('Неизвестный режим');
  const steps = number(inputs.steps), weight = number(inputs.weight), coefficient = number(inputs.kcalPerKgKm);
  const lengthInput = number(mode === 'height' ? inputs.height : inputs.stride);
  if (![steps, weight, coefficient, lengthInput].every(Number.isFinite)) return fail('Введите конечные числа для выбранного режима');
  if (!Number.isInteger(steps) || steps < 0) return fail('Число шагов должно быть целым и неотрицательным');
  if (!(weight > 0)) return fail('Вес должен быть больше нуля');
  if (!(coefficient > 0)) return fail('Расход на километр должен быть больше нуля');
  if (mode === 'height' && (lengthInput < 120 || lengthInput > 230)) return fail('Рост должен быть от 120 до 230 см');
  if (mode === 'stride' && !(lengthInput > 0)) return fail('Длина шага должна быть больше нуля');
  const length = mode === 'height' ? lengthInput * .415 : lengthInput;
  const km = steps * (length / 100000), perKm = coefficient * weight, kcal = perKm * km, stepsPerKm = 100000 / length;
  if (![km, perKm, kcal, stepsPerKm].every(Number.isFinite)) return fail('Результат выходит за числовой диапазон');
  const measure = (x: number) => formatMeasure(x, fmtNumber);
  return { primary: { label: 'Расстояние', value: `${measure(km)} км` }, secondary: [
    { label: 'Калории', value: `${kcal >= 1 ? fmtNumber(kcal, 0) : measure(kcal)} ккал` }, { label: 'Длина шага', value: `${measure(length)} см` },
    { label: 'Шагов на километр', value: fmtNumber(stepsPerKm, 0) }, { label: 'Ккал на километр', value: measure(perKm) },
  ], note: 'Калории зависят от введённого коэффициента. Формула не определяет, включает ли он расход покоя.' };
};
