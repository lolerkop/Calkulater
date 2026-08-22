import type { CalculatorCopy } from '../../lib/platform/types';

export const fuelOilMixCopyEn: CalculatorCopy = {
  name: "Gas oil mix ratio calculator",
  slug: "gas-oil-mix-ratio",
  shortDescription: "How much oil to add to petrol at a 1:N ratio.",
  longDescription:
    "A chainsaw, a trimmer and an outboard are lubricated by oil dissolved in the fuel, and an error here costs the piston assembly: too little oil scores the bore, too much cokes the rings. Take the ratio from your engine's manual rather than from memory — modern synthetic oils run anywhere from 1:25 to 1:100. The oil share is measured against the finished mixture, so 1:50 comes to 1.96 %, not a round two.",
  seoTitle: "Gas oil mix ratio calculator — 1:25, 1:50 two-stroke",
  seoDescription: "Calculate how much oil to add to petrol for a two-stroke engine at ratios from 1:20 to 1:100.",
  h1: "Gas oil mix ratio calculator",
  keywords: ["gas oil mix", "two stroke ratio", "1:50 mix", "chainsaw fuel mix"],
  howToUse: [
    "Take the ratio from your engine's manual: 1:25 on older kit, 1:50 on most modern machines.",
    "Two-stroke oil only: car engine oil does not work here and cokes the piston.",
    "Mix in the can before filling, not in the tank — otherwise the oil settles at the bottom.",
    "Mixed fuel keeps about a month: after that the petrol goes stale and the lubricating additives break down.",
  ],
  howItWorks: "Oil = petrol · 1000 / N millilitres at a 1:N ratio.",
  example: "Five litres of petrol at 1:50 needs 100 ml of oil, giving 5.1 litres of mixture.",
  faq: [
    { q: "What happens with too much oil?", a: "The excess does not burn: it lays down carbon on the piston, cokes the rings and clogs the muffler. The engine loses power and smokes, and the plug oils up. It is no safer than too little — the failure just takes longer." },
    { q: "Why is the oil share not exactly 2 % at 1:50?", a: "Because the ratio is stated against the petrol while the share is measured against the finished mixture. 1000 ml of petrol takes 20 ml of oil, but the mixture is 1020 ml, and 20/1020 gives 1.96 %." },
    { q: "Can the mixture go into a four-stroke engine?", a: "No. There the oil works in a separate sump, and in the fuel it only leaves carbon and ruins the plug. The mixture is meant precisely for engines whose lubrication travels with the fuel." },
    { q: "Is petrol with ethanol suitable?", a: "It separates sooner and holds oil in suspension less well. For seasonal machines people use ethanol-free petrol, or mix small batches and shake before each fill." },
  ],
};
