// This page accepts Gregorian calendar dates, independently of local timezones.
import { parseCalendarDate } from './compute';

export const validateDate = (value: string): boolean => parseCalendarDate(value) !== null;
