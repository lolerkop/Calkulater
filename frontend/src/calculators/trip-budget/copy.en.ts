import type { CalculatorCopy } from '../../lib/platform/types';

export const tripBudgetCopyEn: CalculatorCopy = {
  name: "Trip budget calculator",
  slug: "trip-budget-calculator",
  shortDescription: "Accommodation, food, transport and activities — the full trip budget and the share per person.",
  longDescription:
    "Builds a trip budget out of items that scale differently: hotel nights multiply by the number of nights, food multiplies by days and by the number of travellers at once, while transport and activities are single amounts for the whole trip. Nights and days are kept apart deliberately: a five-day trip is four nights, and feeding one number into both formulas overstates accommodation by a full night. The result shows the total along with what the trip costs each traveller and each day.",
  seoTitle: "Trip budget calculator — what a holiday costs",
  seoDescription: "Calculate a trip budget covering accommodation, food, transport and activities, plus the cost per person and per day.",
  h1: "Trip budget calculator",
  keywords: ["trip budget calculator", "holiday cost calculator", "travel expenses", "cost per person trip"],
  howToUse: [
    "Enter the number of hotel nights and the number of trip days — they usually differ by one.",
    "Enter the nightly rate and the daily food budget for one traveller.",
    "Add transport and activities as totals for the whole trip.",
    "Fill in other costs for visas, insurance or souvenirs.",
  ],
  howItWorks:
    "Accommodation = nights × nightly rate. Food = days × travellers × daily rate. Transport, activities and other costs are added as trip totals. The result is then divided by travellers and by days.",
  example: "Two people for five days and four nights: 14000 hotel, 12000 food, 12000 travel and 5000 activities — 43000 for the trip.",
  faq: [
    { q: "Why are nights and days entered separately?", a: "Because a five-day trip is usually four nights. Feeding days into the accommodation cost adds a full extra night to the budget." },
    { q: "Is the food budget for everyone at once?", a: "No — enter the amount for one traveller per day, and the calculator multiplies it by both the days and the number of travellers." },
    { q: "Where do flights belong?", a: "In transport, as a total for the whole trip. If tickets were bought individually, enter their combined cost." },
    { q: "What does the cost per day show?", a: "The whole budget divided by the number of days, one-off costs like tickets included. It is a yardstick for comparing trips of different lengths." },
    { q: "Are exchange rates applied?", a: "No — enter every amount in a single currency. Use the converter first if some costs are in another one." },
  ],
};
