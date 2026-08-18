import { buildConverter } from '../../lib/platform/conversion';
import { illuminanceUnits } from './units';

export const compute = buildConverter({
  units: illuminanceUnits,
  defaultFrom: 'lx',
  defaultTo: 'fc',
  defaultValue: 500,
  resultLabel: 'Результат',
});
