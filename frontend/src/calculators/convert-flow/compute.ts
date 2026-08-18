import { buildConverter } from '../../lib/platform/conversion';
import { flowUnits } from './units';

export const compute = buildConverter({
  units: flowUnits,
  defaultFrom: 'm3h',
  defaultTo: 'lmin',
  defaultValue: 1,
  resultLabel: 'Результат',
});
