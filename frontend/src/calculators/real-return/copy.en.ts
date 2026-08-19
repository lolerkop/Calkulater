import type { CalculatorCopy } from '../../lib/platform/types';

export const realReturnCopyEn: CalculatorCopy = {
  name: "Real return calculator",
  slug: "real-return-calculator",
  shortDescription: "Return after inflation, by the exact formula and by subtraction.",
  longDescription:
    "Divides one plus the nominal rate by one plus inflation, which is the honest way to strip inflation out. Subtracting the two rates is the familiar shortcut and it is shown alongside: at 12 and 7 percent it says 5 while the true figure is 4.67, and the gap widens as inflation rises.",
  seoTitle: "Real return calculator — return after inflation",
  seoDescription: "Calculate the real return on savings after inflation using the exact Fisher relation, next to the usual subtraction shortcut.",
  h1: "Real return calculator",
  keywords: ["real return calculator", "return after inflation", "fisher equation"],
  howToUse: ["Enter the nominal rate you are offered.", "Enter the inflation rate you expect.", "Optionally add an amount and a term."],
  howItWorks: "Real return = ((1 + nominal) ÷ (1 + inflation) − 1) × 100, with both rates as fractions.",
  example: "A 12 percent rate with 7 percent inflation is a real 4.67 percent, not the 5 that subtraction suggests.",
  faq: [
    { q: "Why not just subtract the rates?", a: "Because inflation applies to the grown amount, not the starting one. Subtraction is close at low rates and drifts noticeably as inflation rises." },
    { q: "Can the real return be negative?", a: "Yes, and often is. It means the money grows more slowly than prices, so it buys less at the end than at the start." },
    { q: "Which inflation figure should I use?", a: "The one you expect over your term, not last year official number. The result is only as good as that assumption." },
    { q: "Is tax taken into account?", a: "No. Apply your own tax to the nominal rate first if the return is taxable, then compare with inflation." },
  ],
};
