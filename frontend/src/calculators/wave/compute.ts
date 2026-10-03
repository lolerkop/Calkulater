import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';
import { readScalar, positiveRatio } from '../../lib/platform/scaledPositiveRatio';
import { INPUT, RANGE, MODE } from '../../lib/platform/measurementScalar';

export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'lambda' : inputs.mode;
  const labels: Record<string, string> = { lambda: 'Длина волны', f: 'Частота', v: 'Скорость' };
  const label = typeof mode === 'string' && Object.hasOwn(labels, mode) ? labels[mode] : labels.lambda;
  const fail = (message: string) => ({ primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode !== 'lambda' && mode !== 'f' && mode !== 'v') return fail(MODE);
  let v = mode === 'v' ? 0 : readScalar(inputs.v);
  let f = mode === 'f' ? 0 : readScalar(inputs.f);
  let wavelength = mode === 'lambda' ? 0 : readScalar(inputs.wavelength);
  const known = mode === 'v' ? [f, wavelength] : mode === 'f' ? [v, wavelength] : [v, f];
  if (!known.every(Number.isFinite)) return fail(INPUT);
  if (mode !== 'v' && !(v > 0)) return fail('Скорость должна быть больше нуля');
  if (mode !== 'f' && !(f > 0)) return fail('Частота должна быть больше нуля');
  if (mode !== 'lambda' && !(wavelength > 0)) return fail('Длина волны должна быть больше нуля');
  if (mode === 'v') v = positiveRatio([f, wavelength], []);
  else if (mode === 'f') f = positiveRatio([v], [wavelength]);
  else wavelength = positiveRatio([v], [f]);
  const period = positiveRatio([1], [f]);
  if (![v, f, wavelength, period].every(x => Number.isFinite(x) && x > 0)) return fail(RANGE);
  const q = (x: number, unit: string) => `${formatQuantity(x, fmtNumber)} ${unit}`;
  return { primary: { label, value: q(mode === 'f' ? f : mode === 'v' ? v : wavelength, mode === 'f' ? 'Гц' : mode === 'v' ? 'м/с' : 'м') }, secondary: [
    { label: 'Скорость', value: q(v, 'м/с') }, { label: 'Частота', value: q(f, 'Гц') },
    { label: 'Длина волны', value: q(wavelength, 'м') }, { label: 'Период', value: q(period, 'с') },
  ] };
};
