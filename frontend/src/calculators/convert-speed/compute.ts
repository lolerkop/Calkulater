import { buildConverter } from '../../lib/platform/conversion';
import { speedUnits } from './units';

export const compute = buildConverter({
  units: speedUnits,
  defaultFrom: 'kmh',
  defaultTo: 'mph',
  defaultValue: 100,
  resultLabel: 'Результат',
});
