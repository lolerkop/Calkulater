import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const timesheetWeekCopyEn: CalculatorCopy = {
  "name": "Weekly timesheet calculator",
  "slug": "weekly-timesheet",
  "shortDescription": "Weekly hours from start, end and break per shift, with overtime and gross pay.",
  "seoTitle": "Weekly timesheet calculator — hours, overtime and pay",
  "seoDescription": "Add up weekly hours from shifts with breaks, get overtime beyond the standard and the gross pay.",
  "h1": "Weekly timesheet calculator",
  "keywords": [
    "timesheet",
    "hours worked",
    "overtime",
    "night shift"
  ],
  ...contractContent.en,
};
