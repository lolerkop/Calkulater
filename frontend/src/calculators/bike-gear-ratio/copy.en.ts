import type { CalculatorCopy } from '../../lib/platform/types';

export const bikeGearRatioCopyEn: CalculatorCopy = {
  name: "Bike gear ratio calculator",
  slug: "bike-gear-ratio-calculator",
  shortDescription: "Bicycle gear ratio and the distance covered per pedal revolution.",
  longDescription:
    "Computes the gear ratio — how many times the rear wheel turns for one turn of the pedals. A ratio of 2 means two wheel revolutions per pedal revolution. Give the wheel circumference and you also get development: the distance the bike travels per pedal revolution, which is the figure gears are actually compared by, because it already accounts for wheel size and does not depend on which tooth counts produced the ratio.",
  seoTitle: "Bike gear ratio calculator — ratio and development",
  seoDescription: "Calculate a bicycle gear ratio from the tooth counts and the development per pedal revolution.",
  h1: "Bike gear ratio calculator",
  keywords: ["bike gear ratio calculator", "bicycle gear ratio", "gear development", "chainring sprocket ratio"],
  howToUse: ["Enter the tooth counts of the chainring and the sprocket.", "Optionally give the wheel circumference.", "Read the ratio and the development."],
  howItWorks: "Gear ratio = chainring teeth ÷ sprocket teeth. Development = ratio × wheel circumference.",
  example: "A 50-tooth chainring with a 25-tooth sprocket gives a ratio of 2.00: two wheel turns per pedal turn.",
  faq: [
    { q: "What does the gear ratio mean?", a: "How many times the wheel outpaces the pedals. A ratio of 4 is a hard gear for speed on the flat; around 1 is an easy gear for climbing." },
    { q: "Why does development matter?", a: "It turns the ratio into metres and lets you compare gears across bikes with different wheels. The same ratio on 26 and 29 inch wheels covers different distances." },
    { q: "Where do I get the wheel circumference?", a: "Measuring is easiest: mark a point on the tyre, roll the bike through one revolution and measure the distance. That captures tyre pressure and fit as well." },
    { q: "Why must the tooth count be a whole number?", a: "Because teeth come in whole units. A fractional value means a typo, and the calculator says so." },
  ],
};
