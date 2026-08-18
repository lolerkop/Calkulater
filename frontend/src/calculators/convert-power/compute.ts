import { buildConverter } from '../../lib/platform/conversion';
import { powerUnits } from './units';

export const compute = buildConverter({
  units: powerUnits,
  defaultFrom: 'kw',
  defaultTo: 'ps',
  defaultValue: 100,
  resultLabel: 'Результат',
});
