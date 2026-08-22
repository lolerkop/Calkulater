import type { CalculatorCopy } from '../../lib/platform/types';

export const voltageDividerCopyEn: CalculatorCopy = {
  name: "Voltage divider calculator",
  slug: "voltage-divider",
  shortDescription: "Output voltage, current and per-leg power of a two-resistor divider.",
  longDescription:
    "Works out a two-resistor voltage divider: the output voltage, the current through it, and the power dissipated by each leg. The ratio depends only on the proportion between the legs, not on their values: 10 kΩ with 4.7 kΩ divides exactly as 100 kΩ with 47 kΩ does. The values decide something else — the current, and with it the heating and how far the output sags. The formula holds for an unloaded divider: attach anything of comparable resistance to the lower leg and it becomes a third resistor, pulling the output below the calculated figure.",
  seoTitle: "Voltage divider calculator — output, current and leg power",
  seoDescription: "Calculate a two-resistor voltage divider's output voltage, current and per-leg power dissipation from the input voltage and resistor values.",
  h1: "Voltage divider calculator",
  keywords: ["voltage divider calculator", "resistor divider", "drop voltage with resistors", "divider output voltage"],
  howToUse: [
    "Enter the input voltage and both resistor values in ohms.",
    "The upper leg runs from the source to the tap, the lower one from the tap to ground.",
    "Compare the leg power with the resistors' rating: common ones handle 0.25 W.",
    "If a load hangs off the output, its resistance must be far higher than the lower leg.",
  ],
  howItWorks: "Output = input × R2 / (R1 + R2); current = input / (R1 + R2); leg power = current² × its resistance.",
  example: "12 V across 10 kΩ and 4.7 kΩ gives 3.84 V at 0.82 mA.",
  faq: [
    { q: "Can a divider power a load?", a: "Not if the load's resistance is comparable to the lower leg. It sits in parallel with that leg and becomes a third resistor: the output sags below the calculated figure, the more so the more current the load draws." },
    { q: "Which resistor values should I pick for a given ratio?", a: "The ratio depends only on the proportion, so any pair with that proportion works. Small values draw more current and run hotter; large ones react more to loading and pick up noise. Kilohms are the usual compromise." },
    { q: "Why is power computed from the current rather than the voltage?", a: "Both forms are equivalent, but the current is shared by both legs, which makes it the shorter route: each leg dissipates current squared times its own resistance." },
    { q: "Does this work on AC?", a: "For a purely resistive divider yes, reading the voltage as RMS. Add capacitance or inductance and a frequency dependence appears that is not modelled here." },
  ],
};
