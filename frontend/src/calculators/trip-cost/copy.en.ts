import type { CalculatorCopy } from '../../lib/platform/types';

export const tripCostCopyEn: CalculatorCopy = {
  name: "Trip cost calculator",
  slug: "trip-cost-calculator",
  shortDescription: "Fuel and tolls for a journey, split between passengers.",
  longDescription:
    "Turns distance and consumption into litres, prices them at the pump and adds tolls. Only what you actually spend on the road is counted: depreciation, wear and tax per kilometre depend on the car and the mileage, and putting a figure on them would pass a guess off as a calculation.",
  seoTitle: "Trip cost calculator — fuel, tolls and cost per person",
  seoDescription: "Calculate what a journey costs in fuel and tolls, with the option of a return trip and a split between passengers.",
  h1: "Trip cost calculator",
  keywords: ["trip cost calculator", "fuel cost for a journey", "split travel cost"],
  howToUse: ["Enter the distance and your consumption.", "Enter the fuel price you pay.", "Add tolls and passengers if they apply."],
  howItWorks: "Litres = distance ÷ 100 × consumption; cost = litres × price + tolls; the share is that divided by passengers.",
  example: "800 km at 7.5 L/100 km and 62 per litre uses 60 litres and costs 3720.",
  faq: [
    { q: "Is wear and depreciation included?", a: "No, only fuel and tolls. Cost per kilometre for wear depends heavily on the car and would be a guess rather than a calculation." },
    { q: "How do I count the return journey?", a: "Turn on the return option and the distance is doubled, along with the fuel it needs." },
    { q: "Which consumption figure should I use?", a: "The one you measured yourself. Motorway and city driving differ enough that the manufacturer figure rarely matches a real trip." },
    { q: "Are tolls per direction or total?", a: "Total. Enter what the whole journey costs in tolls, including the way back if you selected a return trip." },
  ],
};
