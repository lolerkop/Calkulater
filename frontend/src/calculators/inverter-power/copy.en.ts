import type { CalculatorCopy } from '../../lib/platform/types';

export const inverterPowerCopyEn: CalculatorCopy = {
  name: "Inverter power calculator",
  slug: "inverter-power-calculator",
  shortDescription: "Battery draw of an inverter from its output power and efficiency.",
  longDescription:
    "Divides the useful output by the efficiency to give what the inverter actually pulls from the battery, then converts that to current at the battery voltage. Efficiency above one hundred percent is rejected rather than accepted as a typo: it would break conservation of energy and produce a figure that cannot exist.",
  seoTitle: "Inverter power calculator — input power and battery current",
  seoDescription: "Work out the input power, battery current and losses of an inverter from its output power, efficiency and battery voltage.",
  h1: "Inverter power calculator",
  keywords: ["inverter power calculator", "inverter current draw", "inverter efficiency"],
  howToUse: ["Enter the useful output power.", "Enter the inverter efficiency from its datasheet.", "Enter the battery voltage."],
  howItWorks: "Input power = output ÷ efficiency; current = input power ÷ battery voltage; losses are the difference.",
  example: "1000 W at 85 percent efficiency draws 1176.5 W, which is 98.04 A from a 12 V battery.",
  faq: [
    { q: "Why is efficiency above 100 percent rejected?", a: "It would mean the inverter produces more energy than it consumes. That is not a rounding issue but an impossible figure, so it is refused rather than calculated." },
    { q: "Does this include start-up surge?", a: "No. Motors and compressors draw several times their rated power for a moment, and that peak is outside this calculation." },
    { q: "Where do I find the efficiency?", a: "On the inverter datasheet. It usually varies with load, so the figure at your typical load is the one worth entering." },
    { q: "Is battery chemistry taken into account?", a: "No. The calculation is purely electrical; how the battery behaves under that current is a separate question." },
  ],
};
