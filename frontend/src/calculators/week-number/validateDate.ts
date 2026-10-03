import { parseCalendarDate } from './compute';

// Only this calculator owns its expanded Gregorian date-only domain.
export const validateDate = (value: string): boolean => parseCalendarDate(value) !== null;
