import type { CalculatorValidator } from '../../lib/platform/types';
import { validateMode, validateWholeFields } from '../../lib/calculators/dateTimeValidation';
export const validate: CalculatorValidator = context => ({
  ...validateMode(context, 'mode', ['bedtime', 'wake'], 'bedtime'),
  ...validateWholeFields(context, [['hour', 0, 23], ['minute', 0, 59], ['cycles', 1, 12], ['fallAsleep', 0, Number.MAX_SAFE_INTEGER]]),
});
