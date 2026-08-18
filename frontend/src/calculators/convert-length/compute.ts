import { buildConverter } from '../../lib/platform/conversion';
import { lengthUnits } from './units';

export const compute = buildConverter({
  units: lengthUnits,
  defaultFrom: 'm',
  defaultTo: 'ft',
  defaultValue: 1,
  resultLabel: 'Результат',
});
