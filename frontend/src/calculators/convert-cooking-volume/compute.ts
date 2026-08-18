import { buildConverter } from '../../lib/platform/conversion';
import { cookingVolumeUnits } from './units';

export const compute = buildConverter({
  units: cookingVolumeUnits,
  defaultFrom: 'cupUS',
  defaultTo: 'ml',
  defaultValue: 1,
  resultLabel: 'Результат',
});
