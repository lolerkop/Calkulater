import { buildConverter } from '../../lib/platform/conversion';
import { pressureUnits } from './units';

export const compute = buildConverter({
  units: pressureUnits,
  defaultFrom: 'bar',
  defaultTo: 'psi',
  defaultValue: 1,
  resultLabel: 'Результат',
});
