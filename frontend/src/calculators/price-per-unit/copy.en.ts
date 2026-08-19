import type { CalculatorCopy } from '../../lib/platform/types';

export const pricePerUnitCopyEn: CalculatorCopy = {
  name: "Price per unit calculator",
  slug: "price-per-unit-calculator",
  shortDescription: "Price per kilogram, litre or piece, and a comparison of two packs.",
  longDescription:
    "Reduces a pack price to a price per unit — per kilogram, litre or piece — and compares two options. This is the calculation shops make awkward: 150 for 500 g and 260 for a kilogram look comparable, yet the first is 15% dearer. The comparison shows both unit prices and the overpayment, not just the winner.",
  seoTitle: "Price per unit calculator — compare pack sizes",
  seoDescription: "Calculate the price per kilogram, litre or piece and compare two packs to see which is cheaper.",
  h1: "Price per unit calculator",
  keywords: ["price per unit calculator", "price per kg", "unit price comparison", "which pack is cheaper"],
  howToUse: ["Choose the unit the goods are sold in.", "Enter the pack price and the amount it holds.", "Switch to the two-pack mode to compare."],
  howItWorks: "Price per unit = pack price ÷ amount it holds. When comparing, both unit prices are computed the same way and the difference is shown as an overpayment per unit.",
  example: "150 for 500 g is 300 per kg — dearer than a one-kilogram pack at 260.",
  faq: [
    { q: "Why reduce prices to a unit?", a: "Because packs are rarely the same size and cannot be compared at a glance. Reducing to a kilogram or a litre makes the prices comparable." },
    { q: "What goes in the amount field?", a: "The quantity in the unit selected above: convert grams to kilograms and millilitres to litres first." },
    { q: "What does the overpayment show?", a: "How much dearer one unit is in the less favourable pack. Multiply it by the quantity you need to see the full overpayment." },
    { q: "Are discounts included?", a: "No — enter the final price you pay at the till, with any discount already applied." },
  ],
};
