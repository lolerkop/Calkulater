import type { CalculatorCopy } from '../../lib/platform/types';

export const geometricProgressionCopyEn: CalculatorCopy = {
  "name": "Geometric progression calculator",
  "slug": "geometric-progression",
  "shortDescription": "The n-th term, the sum of the series and the terms themselves.",
  "longDescription": "Find the nth term and the sum of the first n terms when each term is the previous one multiplied by r. This page accepts finite a₁, nonzero finite r and an integer n from 1 to 50. a₁ may be negative or zero; negative r alternates the signs of nonzero terms. The table previews twenty terms. For |r| < 1 an infinite-series sum is also shown. Intermediate binary terms and their finite sum are retained exactly until final rounding.",
  "seoTitle": "Geometric progression calculator: n-th term and sum",
  "seoDescription": "Find the nth term and finite sum of a geometric progression, plus its infinite sum for |r| < 1. Preview the first twenty terms.",
  "h1": "Geometric progression calculator",
  "keywords": [
    "geometric progression calculator",
    "n-th term of a geometric sequence",
    "sum of geometric series",
    "infinite geometric series"
  ],
  "howToUse": [
    "Enter the first term — it may be negative.",
    "Enter the ratio: 2 doubles each step, 0.5 halves it.",
    "Enter how many terms you need, up to fifty.",
    "The table lists the first twenty terms."
  ],
  "howItWorks": "aₙ = a₁rⁿ⁻¹. For r ≠ 1, Sₙ = a₁(1−rⁿ)/(1−r); for r = 1, Sₙ = na₁. This implementation sums exact intermediate binary terms, avoiding subtraction of nearly equal powers when r is close to 1. For |r| < 1, S∞ = a₁/(1−r).",
  "example": "Starting at 2 with a ratio of 3, the tenth term is 39,366 and the series sums to 59,048.",
  "faq": [
    {
      "q": "Why is a ratio of zero rejected?",
      "a": "This is a page restriction. The recurrence a₁, 0, 0, … with r = 0 is mathematically meaningful, but this tool retains its nonzero-ratio input rule."
    },
    {
      "q": "When does the infinite sum exist?",
      "a": "For a nonzero first term, the series converges when |r| < 1, with S∞ = a₁/(1−r). This page shows that row only under this condition. If a₁ = 0 the sequence is zero even at other ratios, but no separate infinite-sum row is added."
    },
    {
      "q": "Can the ratio be negative?",
      "a": "Yes. With nonzero a₁ the signs alternate, and the same sum formulas apply. If a₁ = 0 every term remains zero."
    },
    {
      "q": "Why fifty terms and not more?",
      "a": "The range 1–50 is a page limit, not a limit of the mathematical formula. The page also requires |aₙ| and |Sₙ| to be below 10¹⁵. These limits bound computation and output."
    },
    {
      "q": "Is a progression the same thing as compound interest?",
      "a": "With a constant rate per period, r = 1 + rate and an amount with no additional payments grows geometrically. Periods must match; financial calculators separately model contributions, compounding frequency and monetary rounding."
    }
  ],
  "disclaimer": "The 10¹⁵ limit applies to the nth term and finite sum, not the additional infinite sum. Every displayed value must be finite without a nonzero value rounding to zero. Decimal inputs and displayed results are rounded."
};
