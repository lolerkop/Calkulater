import { buildConverter } from '../../lib/platform/conversion';
import { areaUnits } from './units';

export const compute = buildConverter({
  units: areaUnits,
  defaultFrom: 'm2',
  defaultTo: 'ft2',
  defaultValue: 1,
  resultLabel: 'Результат',
});
