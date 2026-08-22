import type { CalculatorCopy } from '../../lib/platform/types';

export const depreciationMethodsCopyEn: CalculatorCopy = {
  name: "Asset depreciation calculator",
  slug: "asset-depreciation",
  shortDescription: "Depreciation by three methods with salvage value and a year-by-year table.",
  longDescription:
    "Calculates depreciation by straight line, double declining balance and sum of years digits. Straight line splits the depreciable base evenly. Double declining takes twice the straight-line rate off the remaining book value and writes off more in the early years, yet never drops the book below the salvage value — that floor is what separates the method from a plain geometric series. Sum of years digits spreads the base in proportion to the life left: out of five years the first takes 5/15 and the last 1/15. The table shows every year at once.",
  seoTitle: "Depreciation calculator — straight line, declining balance, sum of years",
  seoDescription: "Calculate asset depreciation by three methods with salvage value: yearly charge, accumulated depreciation and book value with a year-by-year table.",
  h1: "Asset depreciation calculator",
  keywords: ["depreciation calculator", "straight line depreciation", "double declining balance", "sum of years digits"],
  howToUse: [
    "Enter the initial cost and what the asset can be sold for at the end of its life.",
    "Useful life is given in years and sets the write-off rate.",
    "Pick a method: straight line is even, declining balance is faster early, sum of years sits between them.",
    "The year to show pulls one row of the table out on its own.",
  ],
  howItWorks: "Straight line: (cost − salvage) ÷ life. Double declining: 2 ÷ life of the book value, never below salvage. Sum of years: base × years remaining ÷ sum of the year numbers.",
  example: "An asset of 1,200,000 ₽ with a 200,000 ₽ salvage over five years writes off 200,000 ₽ a year on a straight line.",
  faq: [
    { q: "How does double declining differ from a plain geometric series?", a: "By its floor: the write-off never takes the book value below the salvage value. Without it the book would approach zero and never reach it." },
    { q: "What is the salvage value for?", a: "It is what the asset can be sold for at the end of its life. Only the difference between purchase and salvage is depreciated — writing an asset that holds value down to zero would be wrong." },
    { q: "Which method should I use?", a: "Straight line is simpler and even, and is the usual default. Accelerated methods sit closer to reality for equipment that loses value early, and they reduce the taxable base sooner." },
    { q: "Is this a tax calculation?", a: "No. This is the arithmetic of three classical methods. Which of them your accounting permits, and over what life, is a question of policy and law, not of a calculator." },
  ],
};
