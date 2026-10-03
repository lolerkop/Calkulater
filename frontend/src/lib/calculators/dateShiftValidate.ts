import type { CalculatorValidator } from '../platform/types';
import { validateMode, validateWholeFields } from './dateTimeValidation';
export const validateDateShift: CalculatorValidator = context => ({
  ...validateMode(context, 'shiftDirection', ['forward', 'backward'], 'forward'),
  ...validateWholeFields(context, ['shiftYears', 'shiftMonths', 'shiftWeeks', 'shiftDays'].map(name => [name, 0, Number.MAX_SAFE_INTEGER] as const), true),
});
