import type { CalculatorCopy } from '../../lib/platform/types';

export const gpaCopyEn: CalculatorCopy = {
  name: "GPA calculator",
  slug: "gpa-calculator",
  shortDescription: "Grade point average weighted by credits, alongside the unweighted mean for comparison.",
  longDescription:
    "Computes an average from a list of grades where each may carry its own weight — credits, hours or any other measure of how much a subject counts. The unweighted mean is shown beside it, so the gap between the two immediately reveals whether the heavy subjects are what drags the result down. No scale is imposed: any non-negative grade is accepted, so five-point, hundred-point and four-point systems all work. The calculator does not convert between them — conversion tables differ between institutions, and quietly picking one would pass somebody else's rule off as universal.",
  seoTitle: "GPA calculator weighted by credits",
  seoDescription: "Calculate a grade point average from a list of grades with weights and compare it against the unweighted mean.",
  h1: "GPA calculator",
  keywords: ["gpa calculator", "weighted grade average", "grade point average credits", "how to calculate gpa"],
  howToUse: [
    "Enter one grade per line.",
    "Add the subject weight after a space — credits or hours.",
    "If weights do not matter, leave the grade alone: the weight defaults to one.",
    "Compare the weighted average with the unweighted one to see the effect of heavy subjects.",
  ],
  howItWorks:
    "Each grade is multiplied by its weight, the products are summed and divided by the total weight. The unweighted mean uses the same grades with no weights at all.",
  example: "Grades of 5, 4 and 3 with credits 3, 4 and 2 give a weighted average of 4.1111 against an unweighted 4.",
  faq: [
    { q: "What should I use as a weight?", a: "Credits, course units or hours — any measure of how much a subject contributes. If there is no such measure, leave the weight out." },
    { q: "Which grading scale is supported?", a: "Any non-negative one: five-point, hundred-point, four-point GPA. The calculation does not convert between scales, so enter them all in one." },
    { q: "Why is the unweighted mean also shown?", a: "So the effect of the weights is visible. If the weighted figure is noticeably lower, the low grades fell on the subjects carrying the most credits." },
    { q: "What if a weight is zero?", a: "That line is rejected: a subject with zero weight cannot affect the result, and it is usually a typo rather than an intention." },
    { q: "Can grades be fractional?", a: "Yes, 4.5 for instance — a decimal comma is read as a decimal separator, not as a separator between values." },
  ],
};
