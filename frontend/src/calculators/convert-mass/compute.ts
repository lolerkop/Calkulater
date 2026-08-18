import { buildConverter } from '../../lib/platform/conversion';
import { massUnits } from './units';

export const compute = buildConverter({
  units: massUnits,
  defaultFrom: 'kg',
  defaultTo: 'lb',
  defaultValue: 1,
  resultLabel: 'Результат',
});
