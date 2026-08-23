import type { CalculatorCopy } from '../../lib/platform/types';

export const quarterMileCopyEn: CalculatorCopy = {
  name: "Quarter mile time calculator",
  slug: "quarter-mile-time",
  shortDescription: "Quarter mile elapsed time and trap speed from engine power and vehicle mass.",
  longDescription:
    "A quarter mile is long enough that power-to-weight decides the run rather than the launch. That is why Roger Huntington's old rule of thumb ties the result to mass and power alone and still describes ordinary cars rather well. On prepared drag cars it misses, and for an obvious reason: there half the result is made in the first half second, on traction and launch setup rather than on the engine.",
  seoTitle: "Quarter mile calculator — elapsed time and trap speed",
  seoDescription: "Calculate the quarter mile elapsed time and trap speed from engine power and the kerb mass of the car.",
  h1: "Quarter mile time calculator",
  keywords: ["quarter mile", "elapsed time", "power to weight", "trap speed"],
  howToUse: [
    "Use the kerb mass including the driver: eighty kilograms tell on the strip.",
    "Enter wheel power if you know it; the quoted flywheel figure gives a more optimistic result.",
    "The formula is defined for horsepower and pounds; the mass is converted inside.",
    "For all-wheel drive and prepared cars the estimate is pessimistic: they launch better than the rule assumes.",
  ],
  howItWorks: "Huntington's rule: time = 5.825·∛(mass in pounds / power), trap speed = 234·∛(power / mass in pounds) mph.",
  example: "150 hp and 1300 kg give 15.6 seconds and about 141 km/h at the traps.",
  faq: [
    { q: "Why is there no traction or gearing in the formula?", a: "Because over a quarter mile they matter for the first few metres, after which the ability of the engine to accelerate the mass decides everything. Over that distance power-to-weight swallows the differences in gearing." },
    { q: "How accurate is it?", a: "For an ordinary production car usually within a few tenths of a second. For all-wheel drive, for cars with heavy turbo lag and for prepared drag cars the gap reaches a second or more." },
    { q: "Which power figure should I use?", a: "Preferably one measured at the wheels: the quoted figure is taken at the flywheel and ignores transmission losses of ten to twenty per cent. With the quoted figure the result comes out optimistic." },
    { q: "Why does trap speed matter more than the time?", a: "It depends less on the launch and therefore characterises the engine better. Racers compare it when they want to know whether the limit is the motor or the technique." },
  ],
};
