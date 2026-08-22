import type { CalculatorCopy } from '../../lib/platform/types';

export const creditCardPayoffCopyEn: CalculatorCopy = {
  name: "Credit card payoff calculator",
  slug: "credit-card-payoff",
  shortDescription: "How many months a card balance takes to clear at a fixed payment.",
  longDescription:
    "Works out how many months a credit card balance takes to clear if you pay the same amount every month. A card has no term of its own: the payment sets it, and the payment also decides whether the debt ever ends — below the interest charged each month the balance never falls. That is why the calculation compares the payment against the monthly interest first and refuses to answer rather than showing infinity. The month-by-month schedule shows how much of each payment goes to the bank and how much reaches the principal.",
  seoTitle: "Credit card payoff calculator — months and total interest",
  seoDescription: "Calculate how many months a credit card balance takes to clear at a fixed monthly payment, and how much interest it costs.",
  h1: "Credit card payoff calculator",
  keywords: ["credit card payoff calculator", "how long to pay off credit card", "credit card interest calculator", "minimum payment calculator"],
  howToUse: [
    "Enter the current balance on the card.",
    "Give the annual rate from the terms — it also appears on the statement.",
    "Set the amount you can pay every month.",
    "Compare the first-month interest line with your payment: if they are close, the balance barely moves.",
  ],
  howItWorks: "Monthly rate = annual ÷ 12 ÷ 100. Months = −ln(1 − balance × rate ÷ payment) ÷ ln(1 + rate), rounded up. The payment must exceed the interest charged each month, otherwise the balance never falls.",
  example: "A 100,000 balance at 24% with a 5,000 payment clears in 26 months and costs 28,987.28 in interest.",
  faq: [
    { q: "How is this different from paying off a loan?", a: "A loan has a term set by contract and you solve for the payment. A card is the reverse: the term is unknown, the payment sets it, and too small a payment means it never clears." },
    { q: "Why does it refuse to answer at a small payment?", a: "Because below the monthly interest the balance grows rather than falls. The formula would take a logarithm of a negative number — nonsense dressed up as an answer." },
    { q: "Is the interest-free period included?", a: "No. The calculation assumes interest already accrues on the whole balance. While the debt sits inside the grace period no rate applies and there is nothing to compute." },
    { q: "Why does the bank quote a different figure?", a: "Banks accrue interest daily on the actual balance and add servicing and cash-withdrawal fees. This gives a monthly estimate without fees." },
  ],
};
