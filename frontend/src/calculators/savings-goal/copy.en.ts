import type { CalculatorCopy } from '../../lib/platform/types';

export const savingsGoalCopyEn: CalculatorCopy = {
  name: "Savings goal calculator",
  slug: "savings-goal",
  shortDescription: "How much to put aside each month, or how long a goal takes at a given contribution.",
  longDescription:
    "Answers the two questions a savings target actually raises: how much a month, or how long. The contribution is solved from the annuity formula; the term has no closed form and is stepped month by month, because the contribution arrives at the end of the period while interest accrues on what is already there. The term is reported in whole months — half a month means nothing when the payment comes in one piece — and a goal that is not reached within a hundred years is called unreachable rather than shown as a four-digit number of months.",
  seoTitle: "Savings goal calculator: monthly contribution or time to target",
  seoDescription: "Work out how much to save each month to reach a goal, or how long the goal takes at a contribution you choose.",
  h1: "Savings goal calculator",
  keywords: ["savings goal calculator", "how much to save monthly", "time to reach savings target", "monthly saving plan"],
  howToUse: [
    "Choose whether you want the monthly contribution or the time it takes.",
    "Enter the goal and what you have already put aside.",
    "Enter the annual rate — zero is fine if the money simply sits there.",
    "Enter the term, or the contribution, depending on the mode.",
  ],
  howItWorks:
    "Monthly rate is the annual rate divided by twelve. The contribution comes from the annuity formula solved for the payment. The term is found by adding a contribution and applying interest month by month until the goal is reached.",
  example: "A goal of 1,000,000 with 100,000 already saved at 8 % over five years needs 11,582.09 a month.",
  faq: [
    { q: "Why is the term stepped month by month instead of a formula?", a: "Because the closed form assumes the payment always lands on a period boundary and gives a fractional month back. Stepping matches how a savings account actually behaves and returns a whole number of contributions." },
    { q: "Does it assume the rate stays the same?", a: "Yes. A single rate for the whole term is an assumption, and a visible one — real deposits get renewed at whatever is on offer that year." },
    { q: "What if I have already reached the goal?", a: "Then the contribution comes out as zero and the result shows what the existing amount grows to. Nothing is owed." },
    { q: "Is interest compounded monthly?", a: "Yes. The annual rate is divided by twelve and applied every month, which is how most savings accounts credit interest." },
    { q: "Why can I not just divide the goal by the number of months?", a: "Because money in the account grows on its own. Dividing 900,000 by sixty months gives 15,000 — and overshoots, because interest does part of the work for you: at 8 % a year, 11,582.09 is enough." },
  ],
};
