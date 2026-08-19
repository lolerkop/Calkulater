import type { CalculatorCopy } from '../../lib/platform/types';

export const batteryRuntimeCopyEn: CalculatorCopy = {
  name: "Battery runtime calculator",
  slug: "battery-runtime-calculator",
  shortDescription: "How long a battery lasts under a given load.",
  longDescription:
    "Turns amp-hours into watt-hours using the battery voltage, applies depth of discharge and conversion efficiency, then divides by the load. Amp-hours are not energy, and confusing the two gives an answer wrong by a factor of the voltage, so the conversion happens in one visible step.",
  seoTitle: "Battery runtime calculator — hours from capacity and load",
  seoDescription: "Estimate how long a battery will run a load from its capacity, voltage, depth of discharge and conversion efficiency.",
  h1: "Battery runtime calculator",
  keywords: ["battery runtime calculator", "battery life hours", "amp hours to watt hours"],
  howToUse: ["Enter capacity in amp-hours and the battery voltage.", "Enter the load in watts.", "Set depth of discharge and conversion efficiency."],
  howItWorks: "Energy = capacity × voltage × depth of discharge × efficiency; run time = energy ÷ load.",
  example: "100 Ah at 12 V with 80 percent depth and 90 percent efficiency gives 864 Wh, which runs a 200 W load for 4.32 hours.",
  faq: [
    { q: "Why does the real runtime come out shorter?", a: "The calculation is linear. Lead-acid batteries deliver less at high current, and the discharge curve, Peukert effect and temperature are not modelled here." },
    { q: "What is depth of discharge for?", a: "Most batteries should not be emptied fully. Setting it to 80 percent means only that share of the capacity is treated as usable." },
    { q: "Should efficiency include the inverter?", a: "Yes, if the load runs through one. That is exactly the conversion loss the field is meant to capture." },
    { q: "Why multiply by voltage?", a: "Amp-hours measure charge, not energy. Multiplying by voltage converts them to watt-hours, which is what a watt load consumes." },
  ],
};
