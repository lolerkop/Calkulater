import { buildConverter } from '../../lib/platform/conversion';
import { temperatureUnits } from './units';

export const compute = buildConverter({
  units: temperatureUnits,
  defaultFrom: 'c',
  defaultTo: 'f',
  defaultValue: 20,
  resultLabel: 'Результат',
});
