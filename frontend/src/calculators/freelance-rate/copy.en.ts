import type { CalculatorCopy } from '../../lib/platform/types';

export const freelanceRateCopyEn: CalculatorCopy = {
  name: "Freelance rate calculator",
  slug: "freelance-rate-calculator",
  shortDescription: "The hourly rate that delivers your target income after tax and unbillable hours.",
  longDescription:
    "Works backwards: not «what will I earn at this rate» but «what rate must I charge to take home this much». Two corrections sit between the target income and the rate, and without them the hourly price comes out systematically low. The first is the billable share: part of every week goes on email, invoices and finding work, so dividing income across all working hours means working half the time for free. The second is tax, which is charged on turnover — meaning you must invoice more than you want to receive.",
  seoTitle: "Freelance rate calculator — what to charge per hour",
  seoDescription: "Calculate a freelance hourly rate from your target income, allowing for tax, business costs and the share of unbillable hours.",
  h1: "Freelance rate calculator",
  keywords: ["freelance rate calculator", "hourly rate calculator", "what to charge per hour", "freelance pricing"],
  howToUse: [
    "Enter the amount you want to take home each month.",
    "Enter the working days and hours you are prepared to put in.",
    "Set the billable share — for most people it is 50–75%, not 100%.",
    "Add your business costs and the rate of your tax regime.",
  ],
  howItWorks:
    "Billable hours = days × hours × share. You must invoice (income + costs) ÷ (1 − tax rate), because tax is charged on turnover. The hourly rate is that amount ÷ billable hours.",
  example: "To take home 150000 across 21 days of 6 hours at 70% billable time, an hour costs 1990.16.",
  faq: [
    { q: "Why not divide income across all working hours?", a: "Because some of the time is never billed: email, invoices, revisions and finding work. Counting every hour understates the rate by exactly that share." },
    { q: "What billable share should I use?", a: "For most freelancers it falls between 50 and 75%. It is an estimate rather than a standard, so it is entered by hand — work it out from your own last month." },
    { q: "Why does tax divide rather than add?", a: "Tax is charged on what you receive, not on what you want. To be left with 100000 at a 6% rate you must invoice 106383, not 106000." },
    { q: "What counts as a business cost?", a: "Subscriptions, equipment, desk rent and platform fees — anything paid out of income before it becomes yours." },
    { q: "Is the day rate a full day's earnings?", a: "It is the billable part of a day at the calculated rate. A full working day is longer, because part of it is not billed." },
  ],
};
