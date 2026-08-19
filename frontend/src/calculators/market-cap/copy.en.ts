import type { CalculatorCopy } from '../../lib/platform/types';

export const marketCapCopyEn: CalculatorCopy = {
  name: "Market cap calculator",
  slug: "market-cap-calculator",
  shortDescription: "Market capitalisation from the share count and the price per share.",
  longDescription:
    "Computes market capitalisation — shares outstanding times the price of one. It is what the market values the whole company at, and the figure by which companies are sorted into large, mid and small cap. The reverse direction gives the share price from a known capitalisation. Note that market cap is not the value of the business: it ignores debt and cash, for which a separate measure exists.",
  seoTitle: "Market cap calculator — shares × price",
  seoDescription: "Calculate a company market capitalisation from shares outstanding and share price, or find the price from the capitalisation.",
  h1: "Market cap calculator",
  keywords: ["market cap calculator", "market capitalisation", "company valuation by shares"],
  howToUse: ["Choose what you need.", "Enter the share count and the other known value.", "Read the result."],
  howItWorks: "Market cap = shares outstanding × price per share; hence price = market cap ÷ shares outstanding.",
  example: "A million shares at 250 each give a capitalisation of 250,000,000.",
  faq: [
    { q: "Is market cap the value of the company?", a: "Not quite. It is the market’s valuation of its shares. The value of the business also accounts for debt and cash, and uses a different measure." },
    { q: "Which shares count — issued or outstanding?", a: "Outstanding. Shares bought back by the company are normally excluded, so take the number from the accounts rather than the charter." },
    { q: "Does market cap change during the day?", a: "Yes, along with the share price. This gives a snapshot at the price you enter; no quotes are fetched." },
    { q: "What is fully diluted market cap?", a: "A valuation that includes future shares from options and convertibles. It is not computed here — the current outstanding count is used." },
  ],
};
