import type { CalculatorCopy } from '../../lib/platform/types';

export const feeChainCopyEn: CalculatorCopy = {
  name: "Marketplace fee calculator",
  slug: "marketplace-fee-calculator",
  shortDescription: "Platform commission, card processing, shipping and storage — the whole chain of deductions at once.",
  longDescription:
    "Works out how much actually reaches the seller once the platform has taken its share. Commission and card processing are percentages of the item price, while shipping and storage are flat amounts per parcel, and together they add up to a figure a single rate cannot produce. The calculator shows every deduction separately, their combined share of the price, and the profit left after cost of goods — answering not «what is the commission» but «is this price worth selling at».",
  seoTitle: "Marketplace fee calculator — seller payout",
  seoDescription: "Calculate the seller payout after platform commission, card processing, shipping and storage, plus the profit left after cost of goods.",
  h1: "Marketplace fee calculator",
  keywords: ["marketplace fee calculator", "seller payout calculator", "platform commission", "marketplace profit"],
  howToUse: [
    "Enter the price the buyer pays for the item.",
    "Add the platform commission and card processing rates from your tariff.",
    "Add per-parcel shipping and storage if they are deducted separately.",
    "Enter the cost of goods to see profit rather than payout alone.",
  ],
  howItWorks:
    "Commission and card processing are taken as shares of the item price, while shipping and storage are added as flat amounts. Seller payout = price minus every deduction; profit = payout minus cost of goods.",
  example: "An item at 2000 with 17% commission, 1.5% processing and 55 shipping pays out 1575 and leaves 675 profit at a cost of 900.",
  faq: [
    { q: "Are the percentages taken from the price or from what is left?", a: "From the item price. Platforms calculate deductions that way, and compounding them one after another would understate the final figure." },
    { q: "Why is shipping entered per parcel?", a: "Because it does not depend on the price: delivery costs the same for an item at 500 and at 5000. Percentages and flat amounts are therefore entered separately." },
    { q: "What if storage is not deducted?", a: "Leave the field empty or at zero — the storage row simply will not appear in the result and the calculation stays correct." },
    { q: "Why does profit differ from payout?", a: "The payout is the money the platform sends you. Profit is what remains after the cost of goods, and that is what shows whether the price is justified." },
    { q: "Is tax included?", a: "No. Tax depends on your regime and is calculated on the income you have already received; this calculator settles your account with the platform." },
  ],
};
