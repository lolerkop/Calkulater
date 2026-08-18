import { buildConverter } from '../../lib/platform/conversion';
import { dataRateUnits } from './units';

export const compute = buildConverter({
  units: dataRateUnits,
  defaultFrom: 'mbits',
  defaultTo: 'mbytes',
  defaultValue: 100,
  resultLabel: 'Результат',
});
