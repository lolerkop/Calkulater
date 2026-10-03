import { integerValidation } from '../stats-descriptive/integerValidation';
export const validate = integerValidation(values => values.mode === 'toArabic' ? [] : ['arabic']);
