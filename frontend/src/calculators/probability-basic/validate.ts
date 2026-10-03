import { integerValidation } from '../stats-descriptive/integerValidation';
export const validate = integerValidation(values => values.mode === 'single' || values.mode === undefined ? ['favourable', 'total'] : values.mode === 'complement' ? ['favourable2', 'total2'] : []);
