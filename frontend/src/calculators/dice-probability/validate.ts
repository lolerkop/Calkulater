import { integerValidation } from '../stats-descriptive/integerValidation';
export const validate = integerValidation(values => ['count', 'sides', 'target']);
