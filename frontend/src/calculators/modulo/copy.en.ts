import type { CalculatorCopy } from '../../lib/platform/types';

export const moduloCopyEn: CalculatorCopy = {
  "name": "Remainder calculator",
  "slug": "remainder-calculator",
  "shortDescription": "Divide with remainder and see the quotient and the check.",
  "seoTitle": "Remainder calculator — division with remainder online",
  "seoDescription": "Divide whole numbers with remainder: remainder, quotient and the check a = b × q + r.",
  "h1": "Remainder calculator",
  "keywords": [
    "remainder calculator",
    "division with remainder",
    "modulo"
  ],
  "longDescription": "Divides integer a by nonzero integer b and shows the exact quotient q, remainder r and identity a = bq + r. This calculator truncates the quotient towards zero, as JavaScript integer operations do: a nonzero remainder has the dividend’s sign. Other conventions for negative numbers can give a different result.",
  "howItWorks": "The quotient is the division truncated towards zero; the remainder is what the identity a = b × q + r leaves over.",
  "example": "17 divided by 5 gives quotient 3 and remainder 2, because 17 = 5 × 3 + 2.",
  "howToUse": [
    "Enter the dividend.",
    "Enter the divisor.",
    "Read the remainder and the quotient."
  ],
  "faq": [
    {
      "q": "What happens with negative numbers?",
      "a": "The remainder takes the sign of the dividend: −17 and 5 give quotient −3 and remainder −2, since −17 = 5 × (−3) + (−2)."
    },
    {
      "q": "Is this the same as the modulo in Python?",
      "a": "No. Python returns a remainder with the sign of the divisor, so −17 mod 5 is 3 there. This calculator follows the truncating convention."
    },
    {
      "q": "Can I use decimals?",
      "a": "No. Division with remainder is defined for whole numbers, so decimal input is rejected instead of being rounded."
    },
    {
      "q": "Why is the check line shown?",
      "a": "It makes the answer verifiable at a glance: multiply the divisor by the quotient, add the remainder and you get the dividend back."
    }
  ],
  "disclaimer": "Each input must be an integer with magnitude at most 9007199254740991; b ≠ 0. Inputs are not rounded to integers. Division and remainder use exact integer arithmetic. Truncation gives q = −3, r = 2 for 17 ÷ −5; the convention does not require a nonnegative remainder for every sign."
};
