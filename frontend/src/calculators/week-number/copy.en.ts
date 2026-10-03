import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const weekNumberCopyEn: CalculatorCopy = {
  name: "Week number calculator",
  slug: "week-number-calculator",
  shortDescription: "ISO week and ordinal day for a valid Gregorian date.",
  seoTitle: "Week number calculator — ISO week and day of year",
  seoDescription: "Find the ISO week, ISO year, ordinal day and remaining days for Gregorian calendar dates in years 0001–9999.",
  h1: "Week number calculator",
  keywords: ["week number","iso week","day of year"],
  ...contractContent.en,
};
