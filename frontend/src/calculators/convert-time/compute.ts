import { buildConverter } from '../../lib/platform/conversion';
import { timeUnits } from './units';

export const compute = buildConverter({
  units: timeUnits,
  defaultFrom: 'h',
  defaultTo: 'min',
  defaultValue: 2,
  resultLabel: 'Результат',
});
