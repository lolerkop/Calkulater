import type { CalculatorCopy } from '../../lib/platform/types';

export const dripWaterLeakCopyEn: CalculatorCopy = {
  name: "Dripping tap water loss calculator",
  slug: "dripping-tap-water-loss",
  shortDescription: "How much water and money a dripping tap wastes per day, month and year.",
  longDescription:
    "A single drop seems like nothing, and that is the trap: ten drops a minute is nearly three hundred litres a year, and a steady drip once a second carries off more than a cubic metre. The meter counts cubic metres rather than drops, which is why that row sits next to the money. The drop volume is entered separately: it depends on the tap and on whether the water is still dripping or already running.",
  seoTitle: "Dripping tap calculator — water and money lost",
  seoDescription: "Work out how many litres and how much money a dripping tap wastes per day, month and year from the drips per minute.",
  h1: "Dripping tap water loss calculator",
  keywords: ["dripping tap", "water loss", "leaking faucet", "water saving"],
  howToUse: [
    "Count the drips over fifteen seconds and multiply by four — easier than timing a whole minute.",
    "Drop volume: about 0.05 ml from an ordinary tap, less through an aerator, more past a worn washer.",
    "If the tap runs as a thin continuous stream, counting drips is pointless — that is already litres per hour.",
    "Take the price of water from your bill: it is usually quoted per cubic metre including waste water.",
  ],
  howItWorks: "Litres per day = drips per minute × 1440 × drop volume in millilitres ÷ 1000.",
  example: "Ten drips a minute is 0.72 litres a day and nearly 263 litres a year.",
  faq: [
    { q: "Is a drip a second really a lot?", a: "Yes. One a second is sixty a minute, about three and a half litres a day and more than a cubic metre a year. A cubic metre is the unit you are billed in, and it already shows." },
    { q: "Why is the drop volume an input rather than a constant?", a: "Because it varies: an aerator makes finer drops, a worn washer larger ones. The difference between 0.03 and 0.08 ml changes the answer almost threefold, and hiding that in a constant would be dishonest." },
    { q: "Does this include waste water charges?", a: "Only if you entered the full tariff. Bills usually list waste water separately at roughly the same rate, so the real cost can be twice this figure." },
    { q: "When is it worth fixing?", a: "Always: a washer costs less than a cubic metre of water. But once the tap runs rather than drips, the loss is tens of cubic metres a year." },
  ],
};
