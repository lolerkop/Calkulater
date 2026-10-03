import { createCountValidator } from '../../lib/platform/numericCountValidator';
import { localization } from './localization';

export const validate = createCountValidator(["startCustomers", "lost", "gained"], localization);
