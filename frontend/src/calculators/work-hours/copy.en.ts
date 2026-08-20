import type { CalculatorCopy } from '../../lib/platform/types';

export const workHoursCopyEn: CalculatorCopy = {
  name: "Work hours calculator",
  slug: "work-hours-calculator",
  shortDescription: "Hours over a period from shift start and end with a break, night shifts included.",
  longDescription:
    "Counts hours actually worked rather than working days on a calendar: the break is subtracted from the length of the shift, and what is left is multiplied by the number of shifts. Night shifts are handled separately — when the end is earlier than the start the shift crosses midnight, and a plain subtraction returns a negative number. Adding a day there is not a convenience fudge but the only way to get eight hours out of «22:00 — 06:00» instead of minus sixteen. A break longer than the shift is rejected: negative working time does not exist, and showing it would be plausible nonsense.",
  seoTitle: "Work hours calculator per shift and month",
  seoDescription: "Count hours worked from the shift start and end times with the break deducted, including night shifts that cross midnight.",
  h1: "Work hours calculator",
  keywords: ["work hours calculator", "timesheet calculator", "hours worked per shift", "night shift hours"],
  howToUse: [
    "Enter the shift start time in hours and minutes.",
    "Enter the end time — for a night shift simply give the morning hour.",
    "Enter the length of the break in minutes.",
    "Set the number of shifts in the period and the hourly rate.",
  ],
  howItWorks:
    "Shift length = end minus start, with a day added when it crosses midnight. Working time = shift length minus the break, and hours for the period = working time × number of shifts.",
  example: "A 9:00–18:00 shift with an hour's break gives 8 hours — 168 hours over 21 shifts, or 84000 at a rate of 500.",
  faq: [
    { q: "How is a shift across midnight handled?", a: "If the end time is earlier than the start time, a day is added to the difference. A 22:00–06:00 shift therefore gives eight hours rather than minus sixteen." },
    { q: "Why is a break longer than the shift rejected?", a: "Because working time would become negative. Such a result would look plausible while actually signalling a typo, so it is refused." },
    { q: "How is this different from counting working days?", a: "This counts hours inside a shift, not days on a calendar. A working calendar with public holidays is a separate calculator." },
    { q: "Is overtime at a higher rate included?", a: "No, the rate applies to every hour equally. For premium hours, count them as a separate shift at a different rate." },
    { q: "What does the shift length before the break show?", a: "Total time on site from start to end, break included. Paid time is the row above, already without it." },
  ],
};
