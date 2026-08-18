import { buildConverter } from '../../lib/platform/conversion';
import { densityUnits } from './units';

export const compute = buildConverter({
  units: densityUnits,
  defaultFrom: 'gcm3',
  defaultTo: 'kgm3',
  defaultValue: 1,
  resultLabel: 'Результат',
});
