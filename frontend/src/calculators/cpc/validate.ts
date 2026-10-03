import { createCountValidator } from '../../lib/platform/numericCountValidator';
import { localization } from './localization';

export const validate = createCountValidator(['clicks', 'impressions'], localization);
