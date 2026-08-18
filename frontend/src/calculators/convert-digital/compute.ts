import { buildConverter } from '../../lib/platform/conversion';
import { digitalUnits } from './units';

export const compute = buildConverter({
  units: digitalUnits,
  defaultFrom: 'GB',
  defaultTo: 'GiB',
  defaultValue: 1,
  resultLabel: 'Результат',
});
