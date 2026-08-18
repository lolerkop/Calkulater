import { buildConverter } from '../../lib/platform/conversion';
import { frequencyUnits } from './units';

export const compute = buildConverter({
  units: frequencyUnits,
  defaultFrom: 'ghz',
  defaultTo: 'mhz',
  defaultValue: 2.4,
  resultLabel: 'Результат',
});
