import type { CalculatorCopy } from '../../lib/platform/types';

export const ratioCopyEn: CalculatorCopy = {
  name: "Ratio calculator",
  slug: "ratio-calculator",
  shortDescription: "Simplify a ratio and divide an amount in proportion.",
  longDescription:
    "Simplifies a ratio and, when an amount is given, splits it across the parts. The reduction is exact — through the greatest common divisor — and applies only to whole parts: there is no common divisor to take out of fractional ones, and presenting «1.5:2.5» as simplified would misdescribe what was done, so such a ratio is shown as entered. The sum of the parts and the shares are computed from what you typed rather than from the simplified form, so the percentages match your own numbers. The amount field is optional: leave it out and only the ratio itself is worked out.",
  seoTitle: "Ratio calculator: simplify and divide an amount",
  seoDescription: "Simplify a ratio, see each part's share as a percentage and split an amount in the given proportion.",
  h1: "Ratio calculator",
  keywords: ["ratio calculator", "simplify ratio", "divide in proportion", "ratio to percentage"],
  howToUse: [
    "Enter the parts of the ratio separated by spaces or colons.",
    "Two or more parts are allowed.",
    "Leave the amount at zero to simplify the ratio only.",
    "Enter an amount to split it in this proportion.",
  ],
  howItWorks:
    "Whole parts are divided by their greatest common divisor — that is the simplification. Each part's share = part ÷ sum of the parts. With an amount given, a part receives amount × part ÷ sum of the parts.",
  example: "The ratio 2:3:5 applied to 6,000 gives 1,200, 1,800 and 3,000, and the first part's share is 20%.",
  faq: [
    { q: "How is this different from a proportion?", a: "A proportion solves an equation like a/b = c/d for the missing term. This is a different task: simplifying a ratio and splitting an amount across it, with nothing unknown." },
    { q: "Why aren't fractional parts simplified?", a: "The greatest common divisor is defined for whole numbers. A ratio of 1.5:2.5 is shown as entered — calling it simplified would misdescribe the operation performed." },
    { q: "How many parts can I enter?", a: "Two or more, with no upper limit. The simplification and the shares are computed across the whole set at once." },
    { q: "Why is the sum taken from the entered values?", a: "So the percentages match what you typed. For 12:18 the sum of the parts is 30 rather than 5, even though the simplified form is 2:3." },
    { q: "How do I split an amount unevenly?", a: "Give the parts in the proportion you want: 50:30:20 splits an amount in that ratio, while 1:1:1 divides it equally three ways." },
  ],
};
