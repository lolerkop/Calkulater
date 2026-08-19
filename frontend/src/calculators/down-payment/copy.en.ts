import type { CalculatorCopy } from '../../lib/platform/types';

export const downPaymentCopyEn: CalculatorCopy = {
  name: "Down payment calculator",
  slug: "down-payment-calculator",
  shortDescription: "Down payment and loan amount from the price and the percentage put down.",
  longDescription:
    "Splits a purchase price into two parts: what you pay up front and what you borrow. It works in both directions — from a percentage to an amount, and from the amount you have saved to the percentage it represents, which is usually the more useful one: people know how much they have, not what share of the price it is. Rate and term are not touched here; that is the separate payment calculation, while this page answers whether the deposit is enough.",
  seoTitle: "Down payment calculator — deposit and loan amount",
  seoDescription: "Calculate a down payment from the price and a percentage, or the percentage from the amount saved, plus the remaining loan.",
  h1: "Down payment calculator",
  keywords: ["down payment calculator", "mortgage deposit calculator", "loan amount after deposit"],
  howToUse: ["Enter the purchase price.", "Give either the percentage or the amount you have saved.", "Read the deposit, the remaining loan and the share."],
  howItWorks: "Deposit = price × share ÷ 100; loan = price − deposit. In the reverse mode, share = deposit ÷ price × 100.",
  example: "On a price of 5,000,000 with a 20% deposit you pay 1,000,000 up front and borrow 4,000,000.",
  faq: [
    { q: "Is the interest rate taken into account?", a: "No. This page splits the price: what is paid now and what is left to borrow. The monthly payment from rate and term is a separate loan calculation." },
    { q: "What if I only know how much I have saved?", a: "Choose the \"amount saved\" mode: the share is computed for you, so you can see at once whether it reaches the minimum a lender requires." },
    { q: "Why can the deposit not exceed the price?", a: "Because then no loan is needed at all, and a negative loan does not exist. Such input is almost always a digit slip." },
    { q: "Do closing costs belong in the price?", a: "No. Enter the price the lender applies the deposit percentage to; insurance, valuation and fees are planned separately." },
  ],
};
