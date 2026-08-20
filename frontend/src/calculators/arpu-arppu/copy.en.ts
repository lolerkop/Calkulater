import type { CalculatorCopy } from '../../lib/platform/types';

export const arpuArppuCopyEn: CalculatorCopy = {
  name: "ARPU and ARPPU calculator",
  slug: "arpu-arppu-calculator",
  shortDescription: "Average revenue per user and per paying user, plus the paying share.",
  longDescription:
    "Computes two averages whose denominators differ, and the denominator is what decides everything. ARPU divides revenue by all users; ARPPU divides it by paying users only. The first falls as the free audience grows and the second does not, so neither can be read without the other: a rising ARPPU alongside a falling ARPU means fewer people are paying, but each of them is paying more. The paying share ties the two together — ARPU equals ARPPU multiplied by that share, and when everyone pays the two metrics coincide.",
  seoTitle: "ARPU and ARPPU calculator: revenue per user",
  seoDescription: "Calculate ARPU and ARPPU from revenue, the number of users and the number of paying users, plus the paying share.",
  h1: "ARPU and ARPPU calculator",
  keywords: ["arpu calculator", "arppu", "revenue per user", "paying share"],
  howToUse: [
    "Enter the revenue for the period.",
    "Enter the total number of users for the same period.",
    "Enter how many of them paid.",
    "All three figures must cover the same period.",
  ],
  howItWorks:
    "ARPU = revenue ÷ all users. ARPPU = revenue ÷ paying users. Paying share = paying ÷ all. It follows that ARPU = ARPPU × paying share.",
  example: "With revenue of 500,000, 12,500 users and 900 paying, ARPU is 40.00 and ARPPU is 555.56.",
  faq: [
    { q: "How does ARPU differ from average order value?", a: "Average order value divides revenue by ORDERS, while ARPU divides it by users. One user may place several orders, so ARPU is usually the higher of the two." },
    { q: "Which of the two should I watch?", a: "Both. ARPU shows what the whole audience brings in, ARPPU how valuable a payer is. A rising ARPPU with a falling ARPU means fewer people are paying, but each pays more." },
    { q: "Why is ARPPU hidden when nobody pays?", a: "Because there is nobody to divide the revenue by. Printing infinity instead of honestly omitting the row would be worse than showing nothing." },
    { q: "How are ARPU, ARPPU and the paying share related?", a: "ARPU = ARPPU × paying share. So there are two ways to lift ARPU: make payers pay more, or increase how many of them there are." },
    { q: "Must all three figures cover the same period?", a: "Yes, always. Any period will do and a month is the usual choice, but mixing monthly revenue with a yearly audience makes the metric meaningless." },
  ],
};
