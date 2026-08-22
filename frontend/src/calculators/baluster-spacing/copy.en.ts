import type { CalculatorCopy } from '../../lib/platform/types';

export const balusterSpacingCopyEn: CalculatorCopy = {
  name: "Baluster spacing calculator",
  slug: "baluster-spacing",
  shortDescription: "How many balusters a run takes at a maximum permitted gap.",
  longDescription:
    "Works out balusters from the GAP rather than the pitch: a child must not fit between neighbouring uprights, so the maximum gap is a safety constraint, not a preference. It finds the smallest number of balusters at which the even gap no longer exceeds the limit, and shows the actual gap straight away — always below the limit, because balusters come in whole numbers. There is one more gap than there are balusters: the ends count too, against both posts.",
  seoTitle: "Baluster spacing calculator — count from the maximum gap",
  seoDescription: "Calculate how many balusters a run needs from the baluster width and the maximum permitted gap, with the actual gap and pitch.",
  h1: "Baluster spacing calculator",
  keywords: ["baluster spacing calculator", "spindle spacing calculator", "railing gap calculator", "how many balusters"],
  howToUse: [
    "Measure the clear run between the posts, not the whole railing.",
    "Enter the baluster width across the railing.",
    "Set the maximum gap your requirements allow.",
    "Work out each run separately: remainders do not carry across posts.",
  ],
  howItWorks: "Gap = (run − count × width) ÷ (count + 1). The count is increased until the gap is no larger than the limit.",
  example: "A 3000 mm run with 40 mm balusters and a 100 mm limit takes 21 balusters — an actual gap of 98.18 mm.",
  faq: [
    { q: "How is this different from a fence calculator?", a: "That starts from a desired post spacing and returns the number of posts. This starts from a maximum gap; the pitch falls out of it, and the width of the upright drives everything." },
    { q: "Why is there one more gap than balusters?", a: "Because the ends count too — between the outermost baluster and the post on each side." },
    { q: "Why is the actual gap smaller than the limit?", a: "Because balusters come in whole numbers. Adding one more immediately reduces the gap, so it lands below the limit rather than exactly on it." },
    { q: "How do I handle several runs?", a: "Each one separately. Runs between different pairs of posts are independent and a remainder cannot be carried across." },
  ],
};
