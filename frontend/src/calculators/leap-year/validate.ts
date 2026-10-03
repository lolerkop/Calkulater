import type { CalculatorValidator } from '../../lib/platform/types';
import { validateWholeFields } from '../../lib/calculators/dateTimeValidation';
export const validate: CalculatorValidator = context => validateWholeFields(context, [['year', 1, 9999]]);
