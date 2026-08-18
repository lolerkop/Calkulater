import { buildConverter } from '../../lib/platform/conversion';
import { volumeUnits } from './units';

export const compute = buildConverter({
  units: volumeUnits,
  defaultFrom: 'l',
  defaultTo: 'galUS',
  defaultValue: 1,
  resultLabel: 'Результат',
});
