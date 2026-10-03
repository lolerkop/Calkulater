import type { CalculatorValidator } from '../../lib/platform/types';
import { validateMode, validateWholeFields } from '../../lib/calculators/dateTimeValidation';
export const validate: CalculatorValidator = context => {
  const mode = context.values.mode ?? 'difference';
  return {
    ...validateMode(context, 'mode', ['difference', 'add', 'subtract'], 'difference'),
    ...validateWholeFields(context, [['startHour', 0, 23], ['startMinute', 0, 59], ...(mode === 'difference' ? [['endHour', 0, 23], ['endMinute', 0, 59]] as const : mode === 'add' || mode === 'subtract' ? [['spanHour', 0, 999], ['spanMinute', 0, 59]] as const : [])]),
  };
};
