import { integerValidator } from '../beam-deflection/buildingWave13IntegerValidation';
export const validate = integerValidator(["count"], (_field, values) => values.mode === 'columns');
