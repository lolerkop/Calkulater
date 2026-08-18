import { buildConverter } from '../../lib/platform/conversion';
import { forceUnits } from './units';

export const compute = buildConverter({
  units: forceUnits,
  defaultFrom: 'kgf',
  defaultTo: 'n',
  defaultValue: 10,
  resultLabel: 'Результат',
});
