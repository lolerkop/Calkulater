import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';
import { readScalar, positiveRatio } from '../../lib/platform/scaledPositiveRatio';
import { INPUT, RANGE } from '../../lib/platform/measurementScalar';

// Exact SI constants; wavelength is the vacuum wavelength in nanometres.
const H = 6.62607015e-34, C = 299792458, EV = 1.602176634e-19;
export const compute: CalcFunction = (inputs) => {
  const wavelength = readScalar(inputs.wavelengthNm);
  const fail = (message: string) => ({ primary: { label: 'Энергия фотона', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!Number.isFinite(wavelength)) return fail(INPUT);
  if (!(wavelength > 0)) return fail('Длина волны должна быть больше нуля');
  const energy = positiveRatio([H, C, 1e9], [wavelength]);
  const electronvolts = positiveRatio([H, C, 1e9], [wavelength, EV]);
  const frequency = positiveRatio([C, 1e9], [wavelength]);
  const spectroscopicNumber = positiveRatio([1e7], [wavelength]);
  if (![energy, electronvolts, frequency, spectroscopicNumber].every(x => Number.isFinite(x) && x > 0)) return fail(RANGE);
  return { primary: { label: 'Энергия фотона', value: `${formatQuantity(energy, fmtNumber)} Дж` }, secondary: [
    { label: 'В электронвольтах', value: `${formatQuantity(electronvolts, fmtNumber)} эВ` },
    { label: 'Частота', value: `${formatQuantity(frequency, fmtNumber)} Гц` },
    { label: 'Волновое число', value: `${formatQuantity(spectroscopicNumber, fmtNumber)} 1/см` },
    { label: 'Длина волны', value: `${formatQuantity(wavelength, fmtNumber)} нм` },
  ] };
};
