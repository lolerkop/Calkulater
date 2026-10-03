import { createCountValidator } from '../../lib/platform/numericCountValidator';
import { localization } from './localization';
export const validate = createCountValidator(['life', 'year'], localization);
