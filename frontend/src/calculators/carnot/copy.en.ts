import type { CalculatorCopy } from '../../lib/platform/types';

export const carnotCopyEn: CalculatorCopy = {
  name: "Carnot efficiency calculator",
  slug: "carnot-efficiency",
  shortDescription: "The ceiling efficiency of a heat engine from two temperatures.",
  longDescription:
    "This is a ceiling, not a promise: no real engine reaches it, because the Carnot cycle demands infinitely slow, frictionless processes. Its practical use lies elsewhere — the figure shows how much can be taken at all from a given pair of temperatures, and why every push for efficiency ends up at the hot side. Temperatures in kelvin only: the formula is about a ratio of absolute values, and degrees Celsius would give nonsense, negative efficiency included.",
  seoTitle: "Carnot efficiency calculator — the heat engine limit",
  seoDescription: "Calculate the maximum efficiency of a heat engine from the hot and cold reservoir temperatures in kelvin.",
  h1: "Carnot efficiency calculator",
  keywords: ["carnot efficiency", "maximum efficiency", "heat engine", "second law of thermodynamics"],
  howToUse: [
    "Both temperatures in kelvin: add 273.15 to degrees Celsius.",
    "The cold reservoir is wherever the heat is dumped — usually the surroundings, about 300 K.",
    "The work-from-1000 J row shows the same number more plainly: that many joules become work, the rest leaves.",
    "Real efficiency is lower: a car engine delivers about a third of the Carnot limit, a steam turbine about half.",
  ],
  howItWorks: "η = 1 − T_cold / T_hot, with temperatures in kelvin.",
  example: "At 800 K and 300 K the limit is 62.5 % — no engine will beat that.",
  faq: [
    { q: "Why not degrees Celsius?", a: "The formula uses a ratio of temperatures, which only means something measured from absolute zero. Taking 100 °C and 20 °C as they stand gives 80 % instead of an honest 21.4 %, and with a sub-zero ambient it gives efficiency above one." },
    { q: "Why are real engines worse?", a: "The Carnot cycle is reversible: processes run infinitely slowly, there is no friction, heat flows across no temperature difference. A real machine must finish in finite time, and every departure from the ideal costs efficiency." },
    { q: "How can the limit be raised?", a: "Only by spreading the temperatures apart. The cold side is pinned to the surroundings, so all the engineering goes into the hot side — hence supercritical steam and heat-resistant turbine alloys." },
    { q: "Can efficiency reach 100 %?", a: "That would need a cold reservoir at exactly absolute zero, which is unreachable. This is the second law of thermodynamics in numbers: some heat must leave unused." },
  ],
};
