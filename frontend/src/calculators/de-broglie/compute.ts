import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';
import { readScalar, positiveRatio } from '../../lib/platform/scaledPositiveRatio';
import { INPUT, RANGE } from '../../lib/platform/measurementScalar';

// Nonrelativistic momentum p=mv. The former v/λ row was not E/h.
const H = 6.62607015e-34, C = 299792458;
export const compute: CalcFunction = (inputs) => {
  const mass = readScalar(inputs.mass27), speed = readScalar(inputs.velocityKmS);
  const fail = (message: string) => ({ primary: { label: 'Длина волны', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (![mass, speed].every(Number.isFinite)) return fail(INPUT);
  if (!(mass > 0)) return fail('Масса должна быть больше нуля');
  if (!(speed > 0)) return fail('Скорость должна быть больше нуля');
  if (speed >= C / 1000) return fail('Скорость массивной частицы должна быть меньше скорости света');
  const momentum = positiveRatio([mass, 1e-27, speed, 1000], []);
  const wavelength = positiveRatio([H], [mass, 1e-27, speed, 1000]);
  const nanometres = positiveRatio([H, 1e9], [mass, 1e-27, speed, 1000]);
  const kinetic = positiveRatio([mass, 1e-27, speed, speed, 1e6], [2]);
  const beta = positiveRatio([speed, 1000], [C]);
  if (![momentum, wavelength, nanometres, kinetic, beta].every(x => Number.isFinite(x) && x > 0)) return fail(RANGE);
  const q = (x: number, unit: string) => `${formatQuantity(x, fmtNumber)} ${unit}`;
  return { primary: { label: 'Длина волны', value: q(wavelength, 'м') }, secondary: [
    { label: 'Импульс', value: q(momentum, 'кг·м/с') },
    { label: 'Доля скорости света', value: formatQuantity(beta, fmtNumber) },
    { label: 'В нанометрах', value: q(nanometres, 'нм') },
    { label: 'Кинетическая энергия', value: q(kinetic, 'Дж') },
  ], note: 'Использовано нерелятивистское приближение p = mv; доля скорости света помогает оценить его применимость.' };
};
