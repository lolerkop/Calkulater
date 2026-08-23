import type { CalculatorCopy } from '../../lib/platform/types';

export const timesheetWeekCopyEn: CalculatorCopy = {
  name: "Weekly timesheet calculator",
  slug: "weekly-timesheet",
  shortDescription: "Weekly hours from start, end and break per shift, with overtime and gross pay.",
  longDescription:
    "A timesheet is settled for the whole week rather than a single shift, and that is exactly where minutes go missing: a forty-five minute break here, a shift running past midnight there, a short day at the end. Each shift is one line, the total is accumulated in whole minutes and converted to hours only once — so the sum matches the paper sheet. A line such as 22:00,06:00 is understood as crossing midnight, not as an error.",
  seoTitle: "Weekly timesheet calculator — hours, overtime and pay",
  seoDescription: "Add up weekly hours from shifts with breaks, get overtime beyond the standard and the gross pay.",
  h1: "Weekly timesheet calculator",
  keywords: ["timesheet", "hours worked", "overtime", "night shift"],
  howToUse: [
    "One shift per line: start, end and break in minutes separated by commas.",
    "The break may be omitted: a line of 09:00,18:00 counts as a shift with no break.",
    "A night shift is written as it is: 22:00,06:00 is read as crossing midnight.",
    "Anything above the standard hours goes to overtime at one and a half times the rate.",
  ],
  howItWorks: "Shift minutes = end − start − break, crossing midnight adds a day; hours above the standard are paid at 1.5×.",
  example: "Five shifts with breaks add up to 36.75 hours and 18,375 at a rate of 500 per hour.",
  faq: [
    { q: "Why count in minutes rather than hours?", a: "A shift of 8 hours 45 minutes is 8.75 hours, one of 7 hours 20 minutes is 7.333…. Adding such fractions and rounding each on the way loses minutes; in whole minutes the total is exact." },
    { q: "How do I enter a night shift?", a: "As an ordinary line: 22:00,06:00. When the end is earlier than the start, the shift is treated as crossing midnight and a day is added to the end." },
    { q: "Where does the 1.5 multiplier come from?", a: "It is a common rate for the first hours beyond the standard. If your pay rules differ, take the ordinary and overtime hours from here and apply your own rate to the money." },
    { q: "What if the break is longer than the shift?", a: "That line is rejected. Negative working time means a typo in the times or in the break, and silently turning it into zero would be worse than saying so." },
  ],
};
