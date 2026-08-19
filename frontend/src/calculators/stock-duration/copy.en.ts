import type { CalculatorCopy } from '../../lib/platform/types';

export const stockDurationCopyEn: CalculatorCopy = {
  name: "Stock duration calculator",
  slug: "stock-duration-calculator",
  shortDescription: "How many days a stock lasts at a known rate of use.",
  longDescription:
    "Answers the everyday question \"how long will it last\": it divides the stock you have by the daily rate of use. This is stock in the sense of supplies — feed, grain, fuel, consumables — not shares. Give a safety buffer in days and the calculator also says when to reorder so you do not run out while the delivery is on its way.",
  seoTitle: "Stock duration calculator — how long supplies last",
  seoDescription: "Calculate how many days a stock lasts at a known daily rate of use, and when to reorder.",
  h1: "Stock duration calculator",
  keywords: ["stock duration calculator", "how long will supplies last", "reorder point calculator"],
  howToUse: ["Enter the stock you have, in whatever unit suits you.", "Give the daily use in the same unit.", "Optionally set a safety buffer in days."],
  howItWorks: "Duration = stock ÷ daily use. The reorder point is the duration minus the safety buffer in days.",
  example: "30 kg of feed used at 2 kg a day lasts 15 days.",
  faq: [
    { q: "What unit should the stock be in?", a: "Any, as long as the stock and the daily use share it. Kilograms, litres, pieces — the calculator divides one by the other and works with the ratio." },
    { q: "What is the safety buffer in days?", a: "The cover you want to still have when the next delivery arrives — usually the lead time plus a margin. You should order that many days earlier." },
    { q: "Is uneven consumption handled?", a: "No, the rate is treated as constant. For seasonal peaks use the average rate of the peak period rather than the yearly one." },
    { q: "Is this about supplies or about shares?", a: "Supplies: feed, grain, fuel, consumables. Financial securities are unrelated." },
  ],
};
