import { buildConverter } from '../../lib/platform/conversion';
import { torqueUnits } from './units';

export const compute = buildConverter({
  units: torqueUnits,
  defaultFrom: 'nm',
  defaultTo: 'lbfft',
  defaultValue: 100,
  resultLabel: 'Результат',
});
