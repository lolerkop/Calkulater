import type { CalculatorCopy } from '../../lib/platform/types';

export const currencyExchangeFeeCopyEn: CalculatorCopy = {
  name: "Currency exchange cost calculator",
  slug: "currency-exchange-cost-calculator",
  shortDescription: "What an exchange really costs: spread, percentage fee and flat charge together.",
  longDescription:
    "The rate is entered by hand rather than pulled from a market feed: live quotes belong to the currency converter, while this calculator answers a different question — what the exchange itself costs. That is exactly why a bureau advertising «no commission» on a wide spread can be compared honestly with one charging a percentage. Spread and commission are taken at different steps and therefore do not add up: the spread degrades the rate, and the commission is then taken from the amount computed at that degraded rate, so folding them into a single percentage would overstate the loss.",
  seoTitle: "Currency exchange cost calculator with spread",
  seoDescription: "Calculate what is left after a currency exchange, allowing for the spread, a percentage commission and a flat charge at a given rate.",
  h1: "Currency exchange cost calculator",
  keywords: ["currency exchange cost calculator", "exchange spread calculator", "currency conversion fee", "how much exchange costs"],
  howToUse: [
    "Choose whether you are selling or buying the currency.",
    "Enter the amount and the rate the bureau is offering.",
    "Enter the spread — how far that rate sits from the market one.",
    "Add a percentage commission and a flat charge if there are any.",
  ],
  howItWorks:
    "The spread shifts the rate: down when selling, up when buying. The commission is then taken from the amount at the shifted rate, and any flat charge is deducted last. The total cost is the gap against the official reference rate the bank or bureau starts from.",
  example: "Selling 1000 at 92.5 with a 0.5% spread and 1.5% commission returns 90656.94 — a loss of 1.99%.",
  faq: [
    { q: "Why is the rate entered by hand?", a: "Because the question is not «what is the currency worth» but «what does the bureau take». Live quotes belong to the converter; here the terms of an exchange are compared." },
    { q: "Why do spread and commission not add up?", a: "They are taken at different steps: the spread degrades the rate, and the commission comes from the amount at that degraded rate. Folding them into one percentage would overstate the loss." },
    { q: "What is a spread in plain terms?", a: "How far the bureau's rate sits from the official reference rate published by the central bank. A bureau with no commission but a 2% spread is dearer than one charging 1% at an honest rate." },
    { q: "What does the share of loss show?", a: "How much of the amount the exchange consumes in total — spread, percentage and charge together. It is the one figure that lets you compare bureaus." },
    { q: "Is the sending bank's fee included?", a: "No, only the terms of the exchange itself. If the bank charges separately for the transfer, add it to the flat charge." },
  ],
};
