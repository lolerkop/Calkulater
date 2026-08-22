import type { CalculatorCopy } from '../../lib/platform/types';

export const capacitorNetworkCopyEn: CalculatorCopy = {
  name: "Capacitors in series and parallel calculator",
  slug: "capacitors-in-series-parallel",
  shortDescription: "Total capacitance of capacitors wired in series or in parallel.",
  longDescription:
    "The formulas for capacitors are the reverse of the resistor ones, and that is where most mistakes come from: in parallel the capacitances add, in series the reciprocals add — exactly as resistances do in parallel. The reason is physical: a parallel connection adds plate area, a series connection adds the distance between plates, so a series string ends up with less capacitance than its smallest member.",
  seoTitle: "Capacitor calculator — series and parallel",
  seoDescription: "Calculate the total capacitance of a capacitor bank in series and in parallel from a list of values.",
  h1: "Capacitors in series and parallel calculator",
  keywords: ["capacitors in series", "capacitors in parallel", "total capacitance", "capacitor bank calculator"],
  howToUse: [
    "List the values separated by spaces, commas or new lines.",
    "All values are in microfarads: enter 0.1 µF as 0.1, and 100 nF as 0.1 as well.",
    "Compare the answer with the smallest value: in series the total is always below it.",
    "Work mixed networks in parts: groups first, then their results.",
  ],
  howItWorks: "Parallel: C = C₁ + C₂ + …; series: 1/C = 1/C₁ + 1/C₂ + …",
  example: "100, 220 and 470 µF in series give 59.98 µF; in parallel they give 790 µF.",
  faq: [
    { q: "Why is everything reversed compared with resistors?", a: "A parallel connection adds plate area, and capacitance is proportional to area. A series connection adds the gap between plates, and capacitance is inversely proportional to that." },
    { q: "Can the total be smaller than the smallest capacitor?", a: "In series it always is. Three 100 µF capacitors give 33.3 µF, and that is a property of the circuit, not an error." },
    { q: "Why wire capacitors in series at all?", a: "For voltage: a series string withstands the sum of its members' working voltages. The capacitance drops in exchange for that strength." },
    { q: "Is the tolerance of the values accounted for?", a: "No. Electrolytic capacitors often vary by twenty percent or more, so a real bank differs from the calculated value more than it seems." },
  ],
};
