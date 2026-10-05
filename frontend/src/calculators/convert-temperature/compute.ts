import { buildConverter } from '../../lib/platform/conversion';
import { temperatureUnits } from './units';
import { decimalAdd, decimalDivide, decimalInput, decimalMultiply, decimalNumber, type DecimalInput } from '../../lib/platform/decimalInput';
import type { TemperatureUnit } from './units';

const celsiusZero = { n: 27315n, d: 100n };
const fahrenheitZero = { n: 45967n, d: 100n };
const fahrenheitStep = { n: 5n, d: 9n };
const negative = (x: DecimalInput): DecimalInput => ({ n: -x.n, d: x.d });

export function convertTemperature(raw: unknown, from: TemperatureUnit, to: TemperatureUnit): number {
  const value = decimalInput(raw);
  if (!value) return NaN;
  const kelvin = from === 'c' ? decimalAdd(value, celsiusZero)
    : from === 'f' ? decimalMultiply(decimalAdd(value, fahrenheitZero), fahrenheitStep)
    : from === 'r' ? decimalMultiply(value, fahrenheitStep) : value;
  const result = to === 'c' ? decimalAdd(kelvin, negative(celsiusZero))
    : to === 'f' ? decimalAdd(decimalDivide(kelvin, fahrenheitStep), negative(fahrenheitZero))
    : to === 'r' ? decimalDivide(kelvin, fahrenheitStep) : kelvin;
  return decimalNumber(result);
}

export const compute = buildConverter({
  units: temperatureUnits,
  defaultFrom: 'c',
  defaultTo: 'f',
  defaultValue: 20,
  resultLabel: 'Результат',
  transform: (_value, from, to, raw) => convertTemperature(raw, from, to),
});
