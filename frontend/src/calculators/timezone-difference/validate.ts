import type { CalculatorValidator } from '../../lib/platform/types';
import { validateOffsets, validateWholeFields } from '../../lib/calculators/dateTimeValidation';
export const validate: CalculatorValidator = context => ({ ...validateOffsets(context), ...validateWholeFields(context, [['hour', 0, 23], ['minute', 0, 59]]) });
