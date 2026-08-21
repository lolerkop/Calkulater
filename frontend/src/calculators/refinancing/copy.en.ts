import type { CalculatorCopy } from '../../lib/platform/types';

export const refinancingCopyEn: CalculatorCopy = {
  name: "Loan refinancing calculator",
  slug: "refinancing",
  shortDescription: "Compares your current loan with a new one and shows what switching is actually worth.",
  longDescription:
    "Puts the loan you have next to the loan you are offered and prices the difference. Both payments come from the same annuity formula, so the comparison is honest: the gap comes from the rates and the terms, not from two different ways of counting. The cost of switching is added to the new total rather than left out — valuation, insurance and fees are paid precisely because you are moving. A negative result is shown as a negative: stretching the term at a lower rate usually cuts the payment and raises the total, and that is exactly what you need to see.",
  seoTitle: "Loan refinancing calculator: is switching worth it",
  seoDescription: "Compare your current loan with a refinancing offer, including the cost of switching, and see the real gain or loss.",
  h1: "Loan refinancing calculator",
  keywords: ["refinancing calculator", "is refinancing worth it", "loan comparison calculator", "refinance savings"],
  howToUse: [
    "Enter what you still owe, not what you originally borrowed.",
    "Enter the current rate and the months left.",
    "Enter the rate and term you are being offered.",
    "Add the cost of switching: valuation, insurance, fees.",
  ],
  howItWorks:
    "Each payment is the annuity payment on the outstanding balance at its own rate and term. The total for each loan is the payment times the number of months, and the cost of switching is added to the new total.",
  example: "2,000,000 at 14 % over ten years against 10 % over the same term, minus 30,000 of costs, gains 524,776.76.",
  faq: [
    { q: "Why is the gain sometimes negative?", a: "Because a lower rate over a longer term can cost more in total even though the monthly payment falls. The payment difference and the total difference are shown separately for exactly this reason." },
    { q: "Should I enter the original amount or the balance?", a: "The balance. Refinancing replaces what is left, not what you started with." },
    { q: "What counts as the cost of switching?", a: "Everything you pay because you moved: valuation, a new insurance policy, registration fees, sometimes an early-repayment charge. Leaving them out flatters the offer." },
    { q: "Does it assume the payment schedule is annuity?", a: "Yes. Both loans are priced as equal monthly payments, which is what most consumer loans use. A differentiated schedule would give different totals." },
    { q: "Is the same as an early repayment calculator?", a: "No. That one keeps your loan and adds extra payments. This one replaces the loan with a different one." },
  ],
};
