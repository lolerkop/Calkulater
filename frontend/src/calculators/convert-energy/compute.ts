import { buildConverter } from '../../lib/platform/conversion';
import { energyUnits } from './units';

export const compute = buildConverter({
  units: energyUnits,
  defaultFrom: 'kcal',
  defaultTo: 'kj',
  defaultValue: 100,
  resultLabel: 'Результат',
});
