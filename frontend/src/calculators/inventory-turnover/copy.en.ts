import type { CalculatorCopy } from '../../lib/platform/types';

export const inventoryTurnoverCopyEn: CalculatorCopy = {
  name: "Inventory turnover calculator",
  slug: "inventory-turnover-calculator",
  shortDescription: "Inventory turnover and days on hand from the cost of goods sold.",
  longDescription:
    "Shows how many times the stock was fully replaced over the period. The denominator is average inventory and the numerator is the COST of goods sold, not revenue: inventory is carried at cost, and dividing revenue by it would inflate turnover by the whole trade margin. Days on hand is the reciprocal — 365 divided by the turnover gives the average number of days an item sits in the warehouse.",
  seoTitle: "Inventory turnover calculator — turns and days on hand",
  seoDescription: "Calculate inventory turnover from the cost of goods sold and average inventory, plus the average days on hand.",
  h1: "Inventory turnover calculator",
  keywords: ["inventory turnover calculator", "stock turnover ratio", "days inventory outstanding", "cogs"],
  howToUse: ["Enter the cost of goods sold for the period — not revenue.", "Give the average inventory, or the opening and closing balances.", "Read the turnover and the days on hand."],
  howItWorks: "Turnover = cost of goods sold ÷ average inventory. Days on hand = 365 ÷ turnover. From balances, average inventory is the half-sum of the opening and closing figures.",
  example: "A cost of 600,000 against an average inventory of 150,000 gives a turnover of 4.00 times and 91.3 days on hand.",
  faq: [
    { q: "Why cost of goods sold rather than revenue?", a: "Because inventory is carried at cost. Dividing revenue by it would add the whole trade margin to the turnover and overstate it." },
    { q: "How do I work out average inventory?", a: "The simplest way is the half-sum of the opening and closing balances — that mode is built in. Monthly averages are more accurate if you have them." },
    { q: "What do days on hand show?", a: "How many days an item sits in the warehouse on average before it sells. It is the same information as turnover but in days, which is easier to compare with shelf life and lead times." },
    { q: "What turnover is considered normal?", a: "It depends on the sector: groceries turn many times faster than furniture. No benchmark is offered here — compare against your own trend." },
  ],
};
