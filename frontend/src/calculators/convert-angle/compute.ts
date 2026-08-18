import { buildConverter } from '../../lib/platform/conversion';
import { angleUnits } from './units';

export const compute = buildConverter({
  units: angleUnits,
  defaultFrom: 'deg',
  defaultTo: 'rad',
  defaultValue: 90,
  resultLabel: 'Результат',
});
