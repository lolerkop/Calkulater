import type { CalculatorValidator } from '../../lib/platform/types';
import { validateWholeFields } from '../../lib/calculators/dateTimeValidation';
export const validate: CalculatorValidator = context => validateWholeFields(context, [['startHour', 0, 23], ['startMin', 0, 59], ['endHour', 0, 23], ['endMin', 0, 59], ['breakMin', 0, Number.MAX_SAFE_INTEGER], ['days', 1, Number.MAX_SAFE_INTEGER]]);
