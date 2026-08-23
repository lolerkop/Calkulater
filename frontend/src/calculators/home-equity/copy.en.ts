import type { CalculatorCopy } from '../../lib/platform/types';

export const homeEquityCopyEn: CalculatorCopy = {
  name: "Home equity loan calculator",
  slug: "home-equity-loan",
  shortDescription: "Amount available against a home, allowing for the outstanding mortgage and the loan-to-value limit.",
  longDescription:
    "A lender looks not at how much you have repaid but at how much debt sits on the property in total. The limit is therefore taken from the value of the home at the allowed loan-to-value, and the amount available is that limit minus the outstanding mortgage. Once the limit is used up it falls to zero, even when there is plenty of equity in the flat. Enter your own loan-to-value: it differs between lenders and programmes, and hard-wiring someone else's rule here would be misleading.",
  seoTitle: "Home equity loan calculator — amount available and payment",
  seoDescription: "Work out the amount available against a home from its value, the outstanding mortgage and the allowed loan-to-value.",
  h1: "Home equity loan calculator",
  keywords: ["home equity loan", "loan-to-value", "equity in a home", "second charge"],
  howToUse: [
    "Use the market value rather than the purchase price: the lender revalues the property.",
    "The outstanding balance is what is left to repay, not what has been repaid already.",
    "The allowed loan-to-value differs between programmes; check yours and put it in here.",
    "The payment is an annuity on the amount available — an estimate rather than a lender's offer.",
  ],
  howItWorks: "Limit = value × loan-to-value; available = limit − outstanding balance, never below zero; the payment is an annuity on the available amount.",
  example: "With a value of 9 million, a balance of 3.2 million and an 80 per cent limit, 4 million is available.",
  faq: [
    { q: "Why is the available amount less than my equity?", a: "Because a lender does not advance all of your equity: it keeps a margin against a fall in price and the cost of selling. That margin is exactly what the loan-to-value limit sets." },
    { q: "What is loan-to-value?", a: "It is the ratio of all debt secured on the property to its value. Eighty per cent means the total debt after the new loan must not exceed eighty per cent of the valuation." },
    { q: "Why can the available amount be zero?", a: "If the outstanding mortgage already reaches the limit there is no free security left. That happens after a recent purchase with a small deposit, or when house prices fall." },
    { q: "Is this the same as refinancing?", a: "No. Refinancing replaces the old loan with a new one; this is an additional loan on top of the existing one, and its rate is usually higher than a mortgage rate." },
  ],
};
