import { dateTimeWave15ContractContent } from '../../data/dateTimeWave15ContractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const workHoursCopyEn: CalculatorCopy = {
  name: "Work hours calculator",
  slug: "work-hours-calculator",
  shortDescription: "Hours over a period from shift start and end with a break, night shifts included.",
  seoTitle: "Work hours calculator per shift and month",
  seoDescription: "Count hours worked from the shift start and end times with the break deducted, including night shifts that cross midnight.",
  h1: "Work hours calculator",
  keywords: ["work hours calculator", "timesheet calculator", "hours worked per shift", "night shift hours"],

    ...dateTimeWave15ContractContent.en['work-hours'],
  };
