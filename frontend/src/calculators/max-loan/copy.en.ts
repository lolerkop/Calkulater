import type { CalculatorCopy } from '../../lib/platform/types';

export const maxLoanCopyEn: CalculatorCopy = {
  name: "Maximum loan amount calculator",
  slug: "maximum-loan-calculator",
  shortDescription: "The largest loan your income supports at a given debt burden, rate and term.",
  longDescription:
    "Solves the reverse of the usual loan calculation: that one goes from an amount to a payment, this one goes from an affordable payment to an amount. The payment comes first, from your income and the debt burden you accept, and the loan is then the present value of that annuity. At a zero rate the formula would divide by zero, so the limit is taken on its own branch: with no interest the amount is simply the sum of all the payments. The result is a ceiling produced by a formula rather than an approved offer — a lender also weighs credit history, employment, dependants and collateral, and usually approves less.",
  seoTitle: "Maximum loan amount calculator based on income",
  seoDescription: "Calculate the maximum loan your income supports given an acceptable debt burden, an interest rate and a term.",
  h1: "Maximum loan amount calculator",
  keywords: ["maximum loan calculator", "how much can I borrow", "debt burden", "loan affordability"],
  howToUse: [
    "Enter your monthly income.",
    "Enter the share of it you are willing to pay a lender.",
    "Enter the interest rate and the term.",
    "The result is a formula ceiling, not a lender's decision.",
  ],
  howItWorks:
    "Payment = income × debt burden. Amount = payment × (1 − (1 + i)⁻ⁿ) ÷ i, where i is the monthly rate and n the number of payments. At a zero rate the amount is the payment times the number of payments.",
  example: "On an income of 120,000 at a 40% burden, 18% and 20 years, the maximum amount is 3,110,195.14.",
  faq: [
    { q: "What debt burden should I use?", a: "Lenders typically work to 40–50% of income across all loans combined. If you already have other repayments, subtract their share — what is left is what remains available." },
    { q: "Will a lender approve the calculated amount?", a: "Not necessarily. This is a formula ceiling, while the decision also rests on credit history, length of employment, dependants and collateral. Approvals are usually lower." },
    { q: "Why doesn't the amount grow proportionally with the term?", a: "Because each later payment is discounted more heavily than the one before. At 18%, doubling the term from 10 to 20 years adds noticeably less than half again to the amount." },
    { q: "How much does the rate matter?", a: "A great deal, and most of all over long terms. At the same payment, dropping the rate from 18% to 12% raises the available amount by roughly a third." },
    { q: "Should income be before or after tax?", a: "After. A lender assesses the money that actually reaches your account, so using gross pay overstates your ability to pay." },
  ],
};
